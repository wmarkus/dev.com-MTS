import gzip
import io
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
import serve


class ServerTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.directory = tempfile.TemporaryDirectory()
        cls.previous_root = serve.ROOT
        serve.ROOT = Path(cls.directory.name)
        (serve.ROOT / "data").mkdir()
        (serve.ROOT / "index.html").write_text("<h1>Fixture</h1>")
        (serve.ROOT / ".env").write_text("must-not-be-served")
        (serve.ROOT / "data/site-inventory.json.gz").write_bytes(gzip.compress(b'{"pages":[]}'))
        cls.server = ThreadingHTTPServer(("127.0.0.1", 0), serve.Handler)
        cls.thread = threading.Thread(target=cls.server.serve_forever, daemon=True)
        cls.thread.start()
        cls.base = f"http://127.0.0.1:{cls.server.server_port}"

    @classmethod
    def tearDownClass(cls):
        cls.server.shutdown()
        cls.server.server_close()
        cls.thread.join()
        serve.ROOT = cls.previous_root
        cls.directory.cleanup()

    def request(self, path, **kwargs):
        with redirect_stderr(io.StringIO()):
            return urllib.request.urlopen(urllib.request.Request(self.base + path, **kwargs), timeout=3)

    def test_html_and_head(self):
        with self.request("/") as response:
            self.assertEqual(response.read(), b"<h1>Fixture</h1>")
            self.assertEqual(response.headers["X-Content-Type-Options"], "nosniff")
        with self.request("/", method="HEAD") as response:
            self.assertEqual(response.read(), b"")
            self.assertEqual(response.headers["Content-Length"], "16")

    def test_json_with_and_without_compression(self):
        with self.request("/data/site-inventory.json") as response:
            self.assertEqual(response.read(), b'{"pages":[]}')
            self.assertIsNone(response.headers.get("Content-Encoding"))
        with self.request("/data/site-inventory.json", headers={"Accept-Encoding": "gzip"}) as response:
            self.assertEqual(response.headers["Content-Encoding"], "gzip")
            self.assertEqual(gzip.decompress(response.read()), b'{"pages":[]}')

    def test_private_paths_and_other_hosts_are_rejected(self):
        for path in ["/.env", "/.git/config", "/../.env", "/data/../../.env"]:
            with self.assertRaises(urllib.error.HTTPError) as error:
                self.request(path)
            self.assertEqual(error.exception.code, 404)
        with self.assertRaises(urllib.error.HTTPError) as error:
            self.request("/", headers={"Host": "attacker.example"})
        self.assertEqual(error.exception.code, 403)

    def test_write_methods_are_not_supported(self):
        with self.assertRaises(urllib.error.HTTPError) as error:
            self.request("/", method="POST", data=b"{}")
        self.assertEqual(error.exception.code, 501)


if __name__ == "__main__":
    unittest.main()
