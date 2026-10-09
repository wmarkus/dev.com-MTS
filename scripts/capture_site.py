#!/usr/bin/env python3
"""Capture the authorized English website and required assets, without a page cap."""

import argparse
import concurrent.futures as futures
import ipaddress
import json
import re
import socket
import threading
import time
import shutil
import xml.etree.ElementTree as ET
from collections import Counter, deque
from pathlib import Path
from urllib.parse import urljoin, urlsplit

import requests

from inventory import ROOT, START, ORIGIN, Robots, now, read_snapshot, scope_reason, normalize
from mirror_core import (
    TELEMETRY, asset_file, asset_key, asset_route, extract_page, is_flow, page_file,
    public_reference, resource_url, rewrite_css, rewrite_script,
)

MANIFEST = ROOT / "site/manifest.json"


class Network:
    def __init__(self, delay=0.25):
        self.delay = delay
        self.lock = threading.Lock()
        self.next_request = {}
        self.local = threading.local()
        self.addresses = {}
        self.robots = None
        self.captured_page = None

    def session(self):
        if not hasattr(self.local, "session"):
            self.local.session = requests.Session()
            self.local.session.headers.update({
                "User-Agent": "DevComAuthorizedMigration/1.0",
                "Accept-Language": "en-US,en;q=0.9",
            })
        return self.local.session

    def public_host(self, hostname):
        with self.lock:
            if hostname in self.addresses:
                return self.addresses[hostname]
        try:
            resolved = socket.getaddrinfo(hostname, 443, type=socket.SOCK_STREAM)
            public = all(ipaddress.ip_address(item[4][0]).is_global for item in resolved)
        except socket.gaierror:
            public = False
        with self.lock:
            self.addresses[hostname] = public
        return public

    def get(self, url, page=False):
        redirects = []
        for _ in range(11):
            parsed = urlsplit(url)
            if parsed.scheme not in ("https", "http") or not parsed.hostname or not self.public_host(parsed.hostname):
                return {"status": "blocked_address", "final_url": public_reference(url), "redirects": redirects}
            if page and (scope_reason(url) or is_flow(url)):
                return {"status": "external", "final_url": public_reference(url), "redirects": redirects}
            if parsed.hostname == urlsplit(ORIGIN).hostname and self.robots and not self.robots.allowed(url):
                return {"status": "robots_disallowed", "final_url": url, "redirects": redirects}
            with self.lock:
                pause = max(0, self.next_request.get(parsed.hostname, 0) - time.monotonic())
                self.next_request[parsed.hostname] = time.monotonic() + pause + self.delay
            time.sleep(pause)
            response = None
            for attempt in range(3):
                try:
                    response = self.session().get(url, timeout=(15, 50), allow_redirects=False, stream=True)
                    if response.status_code in (429, 502, 503, 504) and attempt < 2:
                        retry = response.headers.get("Retry-After", "")
                        wait = float(retry) if retry.isdigit() else 2 ** (attempt + 1)
                        response.close()
                        time.sleep(min(wait, 180))
                        continue
                    break
                except (requests.Timeout, requests.ConnectionError) as error:
                    if attempt == 2:
                        return {"status": "network_error", "error": str(error).split("(url:")[0],
                                "final_url": public_reference(url), "redirects": redirects}
                    time.sleep(2 ** attempt)
            if response is None:
                raise RuntimeError("Request loop ended without a response")
            status = response.status_code
            if status in (301, 302, 303, 307, 308) and response.headers.get("Location"):
                destination = normalize(urljoin(url, response.headers["Location"]), url)
                response.close()
                if not destination:
                    return {"status": "invalid_redirect", "final_url": public_reference(url)}
                redirects.append({"from": public_reference(url), "to": public_reference(destination), "status": status})
                if page and self.captured_page and self.captured_page(destination):
                    return {"status": "alias", "final_url": destination, "redirects": redirects}
                url = destination
                continue
            if status != 200:
                response.close()
                return {"status": "source_missing" if status in (404, 410) else "http_error",
                        "http_status": status, "final_url": public_reference(url), "redirects": redirects}
            content_type = response.headers.get("Content-Type", "application/octet-stream")
            if page and "html" not in content_type:
                response.close()
                return {"status": "external_download", "content_type": content_type,
                        "final_url": public_reference(url), "http_status": 200, "redirects": redirects}
            chunks, size, parts = [], 0, []
            part_file = None
            part_size = 0
            try:
                for chunk in response.iter_content(256 * 1024):
                    size += len(chunk)
                    if size > 48_000_000 and not page and content_type.startswith(("video/", "audio/", "application/octet-stream")):
                        if part_file is None:
                            directory = ROOT / ".mirror-cache" / asset_key(url)
                            directory.mkdir(parents=True, exist_ok=True)
                            path = directory / f"{len(parts):04}.part"
                            parts.append(str(path))
                            part_file = path.open("wb")
                            if chunks:
                                buffered = b"".join(chunks)
                                part_file.write(buffered)
                                part_size = len(buffered)
                                chunks = []
                        if part_size + len(chunk) > 48_000_000:
                            part_file.close()
                            path = directory / f"{len(parts):04}.part"
                            parts.append(str(path))
                            part_file = path.open("wb")
                            part_size = 0
                        part_file.write(chunk)
                        part_size += len(chunk)
                    else:
                        chunks.append(chunk)
            except requests.RequestException as error:
                return {"status": "network_error", "error": type(error).__name__,
                        "final_url": public_reference(url), "redirects": redirects}
            finally:
                response.close()
                if part_file is not None:
                    part_file.close()
            if parts:
                return {"status": "ok", "body_parts": parts, "content_type": content_type,
                        "bytes": size, "http_status": 200, "final_url": url, "redirects": redirects}
            return {"status": "ok", "body": b"".join(chunks), "content_type": content_type,
                    "http_status": 200, "final_url": url, "redirects": redirects}
        return {"status": "redirect_loop", "final_url": public_reference(url), "redirects": redirects}


class Capture:
    def __init__(self, resume=False):
        self.network = Network()
        self.pages, self.assets = {}, {}
        self.started_at = now()
        if resume and MANIFEST.exists():
            old = json.loads(MANIFEST.read_text())
            self.pages, self.assets = old["pages"], old["assets"]
            self.started_at = old["started_at"]
        self.page_queue, self.asset_queue = deque(), deque()
        self.network.captured_page = lambda url: self.pages.get(url, {}).get("status") == "captured"

    def add_page(self, url, source):
        url = normalize(url)
        if not url or scope_reason(url) or is_flow(url):
            return
        if url not in self.pages:
            self.pages[url] = {"status": "pending", "source": public_reference(source)}
            self.page_queue.append(url)

    def add_asset(self, url, source):
        url = resource_url(url, ORIGIN) if url else None
        if not url or TELEMETRY.search(url):
            return
        if url not in self.assets:
            self.assets[url] = {"status": "pending", "source": public_reference(source), "id": asset_key(url)}
            self.asset_queue.append(url)

    def capture_page(self, url):
        response = self.network.get(url, page=True)
        body = response.pop("body", b"")
        record = {**response, "checked_at": now()}
        if response["status"] != "ok":
            return record
        if "html" not in response["content_type"]:
            path = page_file(url).replace(".html", ".bin")
            (ROOT / path).parent.mkdir(parents=True, exist_ok=True)
            (ROOT / path).write_bytes(body)
            return {**record, "status": "captured_resource", "file": path, "bytes": len(body)}
        page = extract_page(body, response["final_url"])
        rendered = page.pop("html", None)
        if rendered is not None:
            path = page_file(url)
            (ROOT / path).parent.mkdir(parents=True, exist_ok=True)
            (ROOT / path).write_bytes(rendered)
            page.update(file=path, bytes=len(rendered))
        return {**record, **page}

    def capture_asset(self, url):
        response = self.network.get(url)
        body = response.pop("body", b"")
        record = {**response, "checked_at": now(), "id": asset_key(url)}
        if response["status"] != "ok":
            return record
        content_type = response["content_type"].lower()
        parts = record.pop("body_parts", None)
        if parts:
            directory = ROOT / "site/media" / asset_key(url)
            directory.mkdir(parents=True, exist_ok=True)
            targets = []
            for part in parts:
                target = directory / Path(part).name
                shutil.move(part, target)
                targets.append(str(target.relative_to(ROOT)))
            return {**record, "status": "captured", "file_parts": targets, "dependencies": []}
        if "text/html" in content_type:
            return {**record, "status": "not_an_asset"}
        dependencies = set()
        if "xml" in content_type and urlsplit(url).hostname == "uhf.microsoft.com":
            from lxml import html
            root = ET.fromstring(body)
            for element in root.iter():
                if element.tag.rsplit("}", 1)[-1] == "javascriptIncludes":
                    element.text = ""
                elif element.text and "<" in element.text:
                    fragment = html.fragment_fromstring(element.text, create_parent="div")
                    for node in fragment.xpath(".//link[@href] | .//img[@src]"):
                        attribute = "href" if node.tag == "link" else "src"
                        dependency = resource_url(node.get(attribute), response["final_url"])
                        if dependency:
                            dependencies.add(dependency)
                            node.set(attribute, asset_route(dependency))
                    element.text = (fragment.text or "") + "".join(
                        html.tostring(child, encoding="unicode") for child in fragment
                    )
            body = ET.tostring(root, encoding="utf-8")
        elif "css" in content_type:
            body = rewrite_css(body.decode("utf-8-sig", errors="replace"), response["final_url"], dependencies).encode()
        elif "javascript" in content_type or urlsplit(url).path.endswith((".js", ".mjs")):
            body = rewrite_script(body.decode("utf-8-sig", errors="replace"), response["final_url"], dependencies).encode()
        elif "mpegurl" in content_type or urlsplit(url).path.endswith(".m3u8"):
            lines = []
            original_lines = body.decode("utf-8-sig").splitlines()
            chosen_variant = None
            variants = [
                (int(match[1]), index) for index, line in enumerate(original_lines)
                if (match := re.search(r"RESOLUTION=\d+x(\d+)", line))
            ]
            if variants:
                viable = [variant for variant in variants if variant[0] <= 720]
                chosen_variant = max(viable or variants)[1]
            skip_variant_uri = False
            for index, line in enumerate(original_lines):
                if line.startswith("#EXT-X-STREAM-INF"):
                    skip_variant_uri = index != chosen_variant
                    if skip_variant_uri:
                        continue
                elif skip_variant_uri and line and not line.startswith("#"):
                    skip_variant_uri = False
                    continue
                def uri(match):
                    dependency = resource_url(match[1], response["final_url"])
                    dependencies.add(dependency)
                    return f'URI="{asset_route(dependency)}"'
                line = re.sub(r'URI="([^"]+)"', uri, line)
                if line and not line.startswith("#"):
                    dependency = resource_url(line, response["final_url"])
                    dependencies.add(dependency)
                    line = asset_route(dependency)
                lines.append(line)
            body = ("\n".join(lines) + "\n").encode()
        path = asset_file(url, content_type)
        (ROOT / path).parent.mkdir(parents=True, exist_ok=True)
        (ROOT / path).write_bytes(body)
        return {**record, "status": "captured", "file": path, "bytes": len(body),
                "dependencies": sorted(dependencies)}

    def save(self, finished=False):
        page_counts = dict(Counter(p["status"] for p in self.pages.values()))
        asset_counts = dict(Counter(a["status"] for a in self.assets.values()))
        manifest = {
            "schema_version": 1, "source": START, "started_at": self.started_at, "updated_at": now(),
            "authorized": True, "scope": {"language": "English", "reactor": True,
                "excluded": ["blog", "microsoft-edge", "games", "microsoft-365"]},
            "summary": {"pages": page_counts, "assets": asset_counts,
                "page_records": len(self.pages), "asset_records": len(self.assets),
                "capture_queue_finished": finished,
                "captured_bytes": sum(r.get("bytes", 0) for r in [*self.pages.values(), *self.assets.values()])},
            "pages": self.pages, "assets": self.assets,
        }
        MANIFEST.parent.mkdir(parents=True, exist_ok=True)
        temporary = MANIFEST.with_suffix(".tmp")
        temporary.write_text(json.dumps(manifest, ensure_ascii=False, separators=(",", ":")))
        temporary.replace(MANIFEST)
        print(f"Pages {page_counts}; assets {asset_counts}", flush=True)

    def refresh_runtime(self):
        for url, record in self.assets.items():
            if record["status"] == "captured" and (
                "javascript" in record.get("content_type", "") or urlsplit(url).path.endswith((".js", ".mjs"))
            ):
                record["status"] = "pending"
        for url, record in self.pages.items():
            if record["status"] == "captured" and "developerStoryVideoUMP" in (ROOT / record["file"]).read_text():
                record["status"] = "pending"

    def run(self, workers=6, limit=None, retry=False):
        robots_response = self.network.get(f"{ORIGIN}/robots.txt")
        if robots_response["status"] != "ok":
            raise RuntimeError("Cannot establish source robots policy")
        self.network.robots = Robots(robots_response["body"].decode())
        self.network.delay = max(0.25, self.network.robots.delay)
        inventory = read_snapshot(ROOT / "data/site-inventory.json.gz")
        self.add_page(START, START)
        for page in inventory["pages"]:
            self.add_page(page["url"], "inventory")
        def transient(record):
            return record["status"] == "network_error" or (
                record["status"] == "http_error" and record.get("http_status") in (408, 429, 500, 502, 503, 504)
            )
        for url, record in self.pages.items():
            if record["status"] == "pending" or retry and transient(record):
                record["status"] = "pending"
        for url, record in self.assets.items():
            if record["status"] == "pending" or retry and transient(record):
                record["status"] = "pending"
        self.page_queue = deque(url for url, r in self.pages.items() if r["status"] == "pending")
        self.asset_queue = deque(url for url, r in self.assets.items() if r["status"] == "pending")
        # Observed browser requests supplement dependencies constructed by bundles at runtime.
        seeds = ROOT / "data/browser-assets.json"
        if seeds.exists():
            for url in json.loads(seeds.read_text()):
                self.add_asset(url, "rendered-browser-observation")
        self.save()
        completed, page_started = 0, 0
        with futures.ThreadPoolExecutor(max_workers=workers) as page_pool, \
                futures.ThreadPoolExecutor(max_workers=workers) as asset_pool:
            active = {}
            while self.page_queue or self.asset_queue or active:
                page_count = sum(kind == "page" for kind, _ in active.values())
                while self.page_queue and page_count < workers and (limit is None or page_started < limit):
                    url = self.page_queue.popleft()
                    active[page_pool.submit(self.capture_page, url)] = ("page", url)
                    page_count += 1
                    page_started += 1
                asset_count = sum(kind == "asset" for kind, _ in active.values())
                while self.asset_queue and asset_count < workers:
                    url = self.asset_queue.popleft()
                    active[asset_pool.submit(self.capture_asset, url)] = ("asset", url)
                    asset_count += 1
                if not active:
                    break
                done, _ = futures.wait(active, return_when=futures.FIRST_COMPLETED)
                for future in done:
                    kind, url = active.pop(future)
                    result = future.result()
                    if kind == "page":
                        self.pages[url] = {**self.pages[url], **result}
                        for link in result.get("links", []):
                            self.add_page(link, url)
                        for asset in result.get("assets", []):
                            self.add_asset(asset, url)
                    else:
                        self.assets[url] = {**self.assets[url], **result}
                        for dependency in result.get("dependencies", []):
                            self.add_asset(dependency, url)
                    completed += 1
                if completed % 50 < len(done):
                    self.save()
        self.save(finished=not self.page_queue and not self.asset_queue)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--resume", action="store_true")
    parser.add_argument("--retry-errors", action="store_true")
    parser.add_argument("--refresh-runtime", action="store_true",
                        help="Recapture scripts and pages with the local video adaptation.")
    parser.add_argument("--retry-large-media", action="store_true")
    parser.add_argument("--workers", type=int, default=6)
    parser.add_argument("--limit", type=int, help="Development-only page limit; omitted for complete capture")
    args = parser.parse_args()
    if not 1 <= args.workers <= 8:
        parser.error("Use 1-8 workers")
    contract = json.loads((ROOT / "data/migration-contract.json").read_text())
    if not contract.get("reproduction_authorized"):
        parser.error("Reproduction authorization is required")
    capture = Capture(resume=args.resume)
    if args.refresh_runtime:
        capture.refresh_runtime()
    if args.retry_large_media:
        for record in capture.assets.values():
            if record["status"] == "large_asset":
                record["status"] = "pending"
    capture.run(args.workers, args.limit, args.retry_errors)
