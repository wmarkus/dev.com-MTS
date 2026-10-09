#!/usr/bin/env python3
"""Serve only the inventory workspace on loopback; never expose the repository."""

import argparse
import gzip
import urllib.parse
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ROUTES = {
    "/": ("index.html", "text/html; charset=utf-8"),
    "/index.html": ("index.html", "text/html; charset=utf-8"),
    "/src/app.js": ("src/app.js", "text/javascript; charset=utf-8"),
    "/src/model.mjs": ("src/model.mjs", "text/javascript; charset=utf-8"),
    "/src/styles.css": ("src/styles.css", "text/css; charset=utf-8"),
    "/data/site-inventory.json": ("data/site-inventory.json.gz", "application/json"),
    "/data/site-inventory.json.gz": ("data/site-inventory.json.gz", "application/gzip"),
    "/data/homepage-structure.json": ("data/homepage-structure.json", "application/json"),
    "/data/migration-contract.json": ("data/migration-contract.json", "application/json"),
}


class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.respond()

    def do_HEAD(self):
        self.respond(head=True)

    def respond(self, head=False):
        port = self.server.server_port
        if self.headers.get("Host") not in (f"localhost:{port}", f"127.0.0.1:{port}"):
            self.send_error(403, "Loopback host required")
            return
        path = urllib.parse.urlsplit(self.path).path
        route = ROUTES.get(path)
        if route is None:
            self.send_error(404, "Not a workspace resource")
            return
        filename, content_type = route
        try:
            body = (ROOT / filename).read_bytes()
        except FileNotFoundError:
            self.send_error(404, "Resource missing; run the inventory command first")
            return
        encoded = path == "/data/site-inventory.json"
        if encoded and "gzip" not in self.headers.get("Accept-Encoding", ""):
            body = gzip.decompress(body)
            encoded = False
        self.send_response(200)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("Referrer-Policy", "no-referrer")
        self.send_header("X-Frame-Options", "DENY")
        self.send_header("Vary", "Accept-Encoding")
        if encoded:
            self.send_header("Content-Encoding", "gzip")
        self.end_headers()
        if not head:
            self.wfile.write(body)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--port", type=int, default=4173)
    args = parser.parse_args()
    server = ThreadingHTTPServer(("127.0.0.1", args.port), Handler)
    print(f"Inventory workspace: http://127.0.0.1:{args.port}", flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()
