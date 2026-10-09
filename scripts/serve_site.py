#!/usr/bin/env python3
"""Serve the captured website and local Reactor API without proxying remote requests."""

import argparse
import gzip
import html
import json
import mimetypes
import re
import threading
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, urlencode, urlsplit

from inventory import ORIGIN, ROOT, START, normalize, scope_reason
from mirror_core import asset_key, is_flow
from reactor_api import catalog_response

CSP = (
    "default-src 'self' data: blob:; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob:; "
    "style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; "
    "connect-src 'self'; media-src 'self' blob: data:; frame-src https:; "
    "object-src 'none'; base-uri 'self'; form-action 'self' https://developer.microsoft.com"
)


class Store:
    def __init__(self):
        self.modified = None
        self.manifest = {"pages": {}, "assets": {}, "summary": {}}
        self.asset_ids, self.asset_paths = {}, {}
        self.lock = threading.Lock()

    def refresh(self):
        with self.lock:
            self._refresh()

    def _refresh(self):
        path = ROOT / "site/manifest.json"
        modified = path.stat().st_mtime_ns if path.exists() else None
        if modified != self.modified:
            manifest = json.loads(path.read_text())
            ids = {record["id"]: record for record in manifest["assets"].values()}
            paths = {}
            for url, record in manifest["assets"].items():
                parsed = urlsplit(url)
                if parsed.netloc == urlsplit(ORIGIN).netloc:
                    paths.setdefault(parsed.path, record)
            self.manifest, self.asset_ids, self.asset_paths = manifest, ids, paths
            self.modified = modified


class Handler(BaseHTTPRequestHandler):
    def send_body(self, body, content_type, status=200):
        if isinstance(body, str):
            body = body.encode()
        content_range = None
        total = len(body)
        requested_range = self.headers.get("Range", "")
        if requested_range and status == 200 and (
            content_type.startswith(("video/", "audio/")) or content_type == "application/octet-stream"
        ):
            match = re.fullmatch(r"bytes=(\d*)-(\d*)", requested_range)
            if not match or not any(match.groups()):
                self.send_body(b"Invalid range", "text/plain", 416)
                return
            start = int(match[1]) if match[1] else max(0, total - int(match[2]))
            end = min(total - 1, int(match[2])) if match[1] and match[2] else total - 1
            if start > end or start >= total:
                self.send_body(b"Range is outside the captured resource", "text/plain", 416)
                return
            body = body[start:end + 1]
            content_range = f"bytes {start}-{end}/{total}"
            status = 206
        if not content_range and "gzip" in self.headers.get("Accept-Encoding", "") and len(body) > 1024 and (
            "text" in content_type or "javascript" in content_type or "json" in content_type
        ):
            body = gzip.compress(body, compresslevel=1)
            encoded = True
        else:
            encoded = False
        self.send_response(status)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Content-Security-Policy", CSP)
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("Referrer-Policy", "no-referrer")
        self.send_header("Cache-Control", "no-cache")
        self.send_header("Vary", "Accept-Encoding")
        self.send_header("Accept-Ranges", "bytes")
        if content_range:
            self.send_header("Content-Range", content_range)
        if encoded:
            self.send_header("Content-Encoding", "gzip")
        self.end_headers()
        if self.command != "HEAD":
            self.wfile.write(body)

    def redirect(self, url, status=302):
        self.send_response(status)
        self.send_header("Location", url)
        self.send_header("Content-Length", "0")
        self.end_headers()

    def problem(self, status, title, detail):
        self.send_body(
            f"<!doctype html><html lang=en><meta charset=utf-8><title>{html.escape(title)}</title>"
            "<body style='font:18px system-ui;max-width:760px;margin:4rem auto;padding:1rem'>"
            f"<h1>{html.escape(title)}</h1><p>{html.escape(detail)}</p>"
            "<p><a href='/en-us/'>Developer home</a> · <a href='/__mirror/status'>Capture status</a></p></body></html>",
            "text/html; charset=utf-8", status,
        )

    def local_host(self):
        port = self.server.server_port
        return self.headers.get("Host") in (f"localhost:{port}", f"127.0.0.1:{port}")

    def serve_record(self, record):
        if record.get("status") not in ("captured", "captured_resource"):
            status = 503 if record.get("status") == "pending" else 404
            self.problem(status, "Resource unavailable in this capture", record.get("status", "unknown"))
            return
        if record.get("file_parts"):
            self.serve_parts(record)
            return
        path = ROOT / record["file"]
        try:
            body = path.read_bytes()
        except FileNotFoundError:
            self.problem(500, "Capture file is missing", record["file"])
            return
        content_type = record.get("content_type") or mimetypes.guess_type(path)[0] or "application/octet-stream"
        if path.suffix == ".html":
            content_type = "text/html; charset=utf-8"
        self.send_body(body, content_type)

    def serve_parts(self, record):
        paths = [ROOT / part for part in record["file_parts"]]
        try:
            sizes = [path.stat().st_size for path in paths]
        except FileNotFoundError:
            self.problem(500, "Captured media part is missing", "Restore the media files from the repository.")
            return
        total = sum(sizes)
        start, end, status = 0, total - 1, 200
        raw = self.headers.get("Range")
        if raw:
            match = re.fullmatch(r"bytes=(\d*)-(\d*)", raw)
            if not match or not any(match.groups()):
                self.problem(416, "Invalid media range", "Use a single bytes range.")
                return
            start = int(match[1]) if match[1] else max(0, total - int(match[2]))
            end = min(total - 1, int(match[2])) if match[1] and match[2] else total - 1
            if start > end or start >= total:
                self.problem(416, "Invalid media range", "Range is outside the captured resource.")
                return
            status = 206
        self.send_response(status)
        self.send_header("Content-Type", record["content_type"])
        self.send_header("Content-Length", str(end - start + 1))
        self.send_header("Accept-Ranges", "bytes")
        self.send_header("X-Content-Type-Options", "nosniff")
        if status == 206:
            self.send_header("Content-Range", f"bytes {start}-{end}/{total}")
        self.end_headers()
        if self.command == "HEAD":
            return
        offset = 0
        for path, size in zip(paths, sizes):
            part_start, part_end = max(0, start - offset), min(size - 1, end - offset)
            if part_end >= part_start:
                with path.open("rb") as source:
                    source.seek(part_start)
                    remaining = part_end - part_start + 1
                    while remaining:
                        chunk = source.read(min(256 * 1024, remaining))
                        self.wfile.write(chunk)
                        remaining -= len(chunk)
            offset += size

    def do_HEAD(self):
        self.do_GET()

    def do_GET(self):
        if not self.local_host():
            self.problem(403, "Loopback host required", "This preview serves local requests only.")
            return
        store = self.server.store
        store.refresh()
        parsed = urlsplit(self.path)
        query = parse_qs(parsed.query, keep_blank_values=True)
        path = parsed.path
        if path == "/":
            self.redirect("/en-us/", 302)
            return
        if path == "/__mirror/runtime.js":
            self.send_body((ROOT / "src/mirror-runtime.js").read_bytes(), "text/javascript; charset=utf-8")
            return
        if path == "/__mirror/uhf-entry.js":
            entry = next((record for url, record in store.manifest["assets"].items()
                          if urlsplit(url).hostname == "uhf.microsoft.com" and urlsplit(url).path.endswith("/js/entry.js")), None)
            if entry:
                self.serve_record(entry)
            else:
                self.problem(503, "Global navigation capture is pending", "The required module has not been captured.")
            return
        if path == "/__mirror/status":
            self.send_body(json.dumps(store.manifest["summary"], indent=2), "application/json")
            return
        if path.startswith("/__mirror/assets/"):
            record = store.asset_ids.get(path.rsplit("/", 1)[-1])
            if record:
                self.serve_record(record)
            else:
                self.problem(404, "Unknown captured asset", "The requested asset is not present in the manifest.")
            return
        if path == "/__mirror/resource":
            url = normalize(query.get("url", [""])[0], ORIGIN)
            record = store.manifest["assets"].get(url) or store.asset_ids.get(asset_key(url or ""))
            if record:
                self.serve_record(record)
            else:
                self.problem(404, "Uncaptured runtime dependency", url or "Invalid resource URL")
            return
        if path == "/reactor/api/events":
            catalog_path = ROOT / "site/reactor-catalog.json"
            if not catalog_path.exists():
                self.problem(503, "Reactor catalog capture is pending", "The local catalog has not been captured yet.")
                return
            try:
                response = catalog_response(json.loads(catalog_path.read_text()), query)
            except ValueError:
                self.send_body('{"error":"Invalid catalog parameters"}', "application/json", 400)
                return
            self.send_body(json.dumps(response, ensure_ascii=False), "application/json")
            return
        if path == "/__mirror/search" or (
            path.rstrip("/") == "/en-us" and "q" in query
        ):
            term = query.get("q", [""])[0].casefold().strip()
            pages = [(url, record) for url, record in store.manifest["pages"].items()
                     if record.get("status") == "captured" and term
                     and term in (record.get("title", "") + " " + record.get("search_text", "")).casefold()]
            results = "".join(
                f"<li><a href='{html.escape(urlsplit(url).path)}'>{html.escape(record.get('title') or url)}</a></li>"
                for url, record in pages[:100]
            )
            self.send_body(
                "<!doctype html><html lang=en><meta charset=utf-8><title>Search captured pages</title>"
                "<body style='font:18px system-ui;max-width:900px;margin:3rem auto;padding:1rem'>"
                "<a href='/en-us/'>Developer home</a><h1>Search captured pages</h1>"
                f"<form><input name=q value='{html.escape(term, quote=True)}' aria-label='Search captured pages'>"
                "<button>Search</button></form>"
                f"<p>{len(pages)} matching URL records. This searches the local capture, not Microsoft's live AI service.</p>"
                f"<ul>{results}</ul></body></html>",
                "text/html; charset=utf-8",
            )
            return
        url = normalize(ORIGIN + self.path)
        if scope_reason(url) or is_flow(url):
            self.redirect(url or START)
            return
        asset = store.manifest["assets"].get(url)
        if not asset:
            # Static version query strings and webpack runtime paths share captured source paths.
            asset = store.asset_paths.get(path)
        if asset:
            self.serve_record(asset)
            return
        page = store.manifest["pages"].get(url)
        if not page and path.rstrip("/") in ("/en-us/reactor", "/reactor"):
            page = store.manifest["pages"].get("https://developer.microsoft.com/en-us/reactor/")
        if not page:
            alternate = url[:-1] if url.endswith("/") else url + "/"
            page = store.manifest["pages"].get(alternate)
        if page:
            if page["status"] in ("external", "external_download"):
                self.redirect(page["final_url"])
            elif page["status"] == "alias":
                target = urlsplit(page["final_url"])
                self.redirect(target.path + (f"?{target.query}" if target.query else ""), 301)
            else:
                self.serve_record(page)
        else:
            self.problem(404, "Page not in the capture", "This route was not discovered as an included source page.")

    def do_POST(self):
        if not self.local_host():
            self.problem(403, "Loopback host required", "Local requests only.")
            return
        path = urlsplit(self.path).path
        if "/reactor/home/settimezone" in path or "/reactor/home/setculture" in path:
            length = int(self.headers.get("Content-Length", 0))
            if length > 4096:
                self.problem(413, "Preference request too large", "No preference was saved.")
                return
            self.rfile.read(length)
            return_url = parse_qs(urlsplit(self.path).query).get("returnurl", ["/en-us/reactor/"])[0]
            self.redirect(return_url if return_url.startswith("/") and not return_url.startswith("//") else "/en-us/reactor/", 303)
            return
        self.problem(405, "External service not recreated", "Use the original Microsoft site for account, registration or subscription submissions.")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--port", type=int, default=4174)
    args = parser.parse_args()
    ThreadingHTTPServer.request_queue_size = 128
    server = ThreadingHTTPServer(("127.0.0.1", args.port), Handler)
    server.store = Store()
    print(f"Recreated website: http://127.0.0.1:{args.port}/en-us/", flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()
