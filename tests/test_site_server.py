import io
import json
import sys
import tempfile
import threading
import unittest
import urllib.error
import urllib.request
from contextlib import redirect_stderr
from http.server import ThreadingHTTPServer
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "scripts"))
import serve_site


class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, *args, **kwargs):
        return None


class SiteServerTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.directory = tempfile.TemporaryDirectory()
        cls.old_root = serve_site.ROOT
        serve_site.ROOT = Path(cls.directory.name)
        for directory in ["site", "src"]:
            (serve_site.ROOT / directory).mkdir()
        (serve_site.ROOT / "site/page.html").write_text("<h1>Original page</h1>")
        (serve_site.ROOT / "site/a.part").write_bytes(b"abcdef")
        (serve_site.ROOT / "site/b.part").write_bytes(b"ghijkl")
        manifest = {
            "pages": {
                "https://developer.microsoft.com/en-us/": {"status": "captured", "file": "site/page.html"},
                "https://developer.microsoft.com/en-us/alias": {"status": "alias", "final_url": "https://developer.microsoft.com/en-us/"},
                "https://developer.microsoft.com/en-us/removed": {"status": "source_missing"},
            },
            "assets": {"https://example.com/video.mp4": {
                "id": "video", "status": "captured", "content_type": "video/mp4", "bytes": 12,
                "file_parts": ["site/a.part", "site/b.part"],
            }}, "summary": {},
        }
        (serve_site.ROOT / "site/manifest.json").write_text(json.dumps(manifest))
        cls.server = ThreadingHTTPServer(("127.0.0.1", 0), serve_site.Handler)
        cls.server.store = serve_site.Store()
        cls.thread = threading.Thread(target=cls.server.serve_forever, daemon=True)
        cls.thread.start()
        cls.base = f"http://127.0.0.1:{cls.server.server_port}"

    @classmethod
    def tearDownClass(cls):
        cls.server.shutdown()
        cls.server.server_close()
        cls.thread.join()
        serve_site.ROOT = cls.old_root
        cls.directory.cleanup()

    def request(self, path, **kwargs):
        with redirect_stderr(io.StringIO()):
            return urllib.request.build_opener(NoRedirect()).open(
                urllib.request.Request(self.base + path, **kwargs), timeout=4)

    def test_local_page_and_outbound_exclusion(self):
        with self.request("/en-us/") as response:
            self.assertIn(b"Original page", response.read())
            self.assertIn("connect-src 'self'", response.headers["Content-Security-Policy"])
        with self.assertRaises(urllib.error.HTTPError) as error:
            self.request("/en-us/games/")
        self.assertEqual(error.exception.code, 302)
        self.assertEqual(error.exception.headers["Location"], "https://developer.microsoft.com/en-us/games/")

    def test_alias_and_missing_are_not_success_shaped(self):
        with self.assertRaises(urllib.error.HTTPError) as error:
            self.request("/en-us/alias")
        self.assertEqual(error.exception.code, 301)
        for path in ["/en-us/removed", "/en-us/not-found", "/.git/config", "/.env"]:
            with self.assertRaises(urllib.error.HTTPError) as error:
                self.request(path)
            self.assertEqual(error.exception.code, 404)

    def test_media_ranges_cross_part_boundaries(self):
        with self.request("/__mirror/assets/video", headers={"Range": "bytes=3-8"}) as response:
            self.assertEqual(response.status, 206)
            self.assertEqual(response.headers["Content-Range"], "bytes 3-8/12")
            self.assertEqual(response.read(), b"defghi")
        with self.request("/__mirror/assets/video", headers={"Range": "bytes=-3"}) as response:
            self.assertEqual(response.read(), b"jkl")
        with self.request("/__mirror/assets/video", method="HEAD") as response:
            self.assertEqual(response.headers["Content-Length"], "12")
            self.assertEqual(response.read(), b"")
        with self.assertRaises(urllib.error.HTTPError) as error:
            self.request("/__mirror/assets/video", headers={"Range": "bytes=99-"})
        self.assertEqual(error.exception.code, 416)

    def test_proxy_and_writes_do_not_reach_network(self):
        with self.assertRaises(urllib.error.HTTPError) as error:
            self.request("/__mirror/resource?url=http://169.254.169.254/metadata")
        self.assertEqual(error.exception.code, 404)
        with self.assertRaises(urllib.error.HTTPError) as error:
            self.request("/en-us/", method="POST", data=b"payload")
        self.assertEqual(error.exception.code, 405)
        with self.assertRaises(urllib.error.HTTPError) as error:
            self.request("/en-us/", headers={"Host": "untrusted.example"})
        self.assertEqual(error.exception.code, 403)


if __name__ == "__main__":
    unittest.main()
