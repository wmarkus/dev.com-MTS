import sys
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "scripts"))
from mirror_core import asset_route, extract_page, local_page_link, rewrite_css, rewrite_script

BASE = "https://developer.microsoft.com/en-us/"


class MirrorTests(unittest.TestCase):
    def test_navigation_scope(self):
        self.assertEqual(local_page_link("/en-us/python#start", BASE), "/en-us/python#start")
        for value in ["/en-us/games/", "/en-us/microsoft-365/", "/en-us/microsoft-edge/", "/blog/"]:
            self.assertEqual(local_page_link(value, BASE), "https://developer.microsoft.com" + value)
        auth = "/en-us/reactor/auth/sign-in/?redirecturi=foo"
        self.assertTrue(local_page_link(auth, BASE).startswith("https://developer.microsoft.com"))

    def test_original_content_and_local_assets_are_preserved(self):
        source = b"""<html lang="en-US"><head><title>Sample</title>
          <link rel="stylesheet" href="/main.css"><style>.hero{background:url('/art.png')}</style>
          <script src="/app.js"></script></head><body><main><h1>Original content</h1>
          <p>The complete paragraph stays intact.</p><img src="https://cdn.example.com/image.jpg">
          <a href="/en-us/reactor/">Reactor</a><a href="/en-us/games/">Games</a>
          <input name="__RequestVerificationToken" value="sensitive"></main></body></html>"""
        result = extract_page(source, BASE)
        document = result["html"].decode()
        self.assertIn("The complete paragraph stays intact.", document)
        self.assertIn('href="/en-us/reactor/"', document)
        self.assertIn("https://developer.microsoft.com/en-us/games/", document)
        self.assertNotIn("sensitive", document)
        self.assertIn("/__mirror/runtime.js", document)
        self.assertIn(asset_route("https://cdn.example.com/image.jpg"), document)
        self.assertEqual(len(result["assets"]), 4)

    def test_telemetry_and_non_english_are_not_copied(self):
        source = b"""<html lang="en"><head><script src="/analytics.bundle.js"></script>
          <script>window.appInsightsInstrumentationKey = 'secret';</script></head><body>Hello</body></html>"""
        result = extract_page(source, BASE)
        self.assertNotIn("secret", result["html"].decode())
        self.assertNotIn("analytics.bundle.js", result["html"].decode())
        self.assertEqual(extract_page(b'<html lang="ja-JP"></html>', BASE)["status"], "excluded_language")

    def test_css_imports_fonts_and_backgrounds(self):
        dependencies = set()
        result = rewrite_css('@import "./theme.css"; @font-face{src:url(../font.woff2)} .x{background:url(data:image/png;base64,AA)}',
                             "https://developer.microsoft.com/css/site.css", dependencies)
        self.assertEqual(dependencies, {"https://developer.microsoft.com/css/theme.css",
                                       "https://developer.microsoft.com/font.woff2"})
        self.assertIn("data:image/png;base64,AA", result)
        self.assertIn("/__mirror/assets/", result)

    def test_module_dependencies_rewritten_without_changing_api_strings(self):
        dependencies = set()
        result = rewrite_script('import{a}from"./chunk.js";fetch("/reactor/api/events"); const i="/art.png";',
                                "https://developer.microsoft.com/js/app.js", dependencies)
        self.assertIn('/reactor/api/events', result)
        self.assertIn(asset_route("https://developer.microsoft.com/js/chunk.js"), result)
        self.assertIn('"/art.png"', result)
        self.assertEqual(len(dependencies), 2)

    def test_injected_css_uses_document_relative_font_paths(self):
        dependencies = set()
        script = 'var css=\'@font-face{src:url("../fonts/a.woff2")} @import url(https://fonts.example/css2?family=Example+Sans);\';'
        rewritten = rewrite_script(script, "https://developer.microsoft.com/_devcom/dist/site.js", dependencies)
        self.assertIn("https://developer.microsoft.com/fonts/a.woff2", dependencies)
        self.assertNotIn("https://developer.microsoft.com/_devcom/fonts/a.woff2", dependencies)
        self.assertIn("https://fonts.example/css2?family=Example+Sans", dependencies)
        self.assertNotIn("url(https://fonts.example", rewritten)

    def test_javascript_url_constructor_and_regex_are_not_css(self):
        dependencies = set()
        source = 'const a = new URL("./x.js", import.meta.url); const b=/url\\("hello"\\)/;'
        rewritten = rewrite_script(source, "https://developer.microsoft.com/js/app.js", dependencies)
        self.assertIn('new URL("/__mirror/assets/', rewritten)
        self.assertIn('const b=/url\\("hello"\\)/;', rewritten)

    def test_video_content_keeps_its_container_and_english_captions(self):
        source = b"""<html lang="en"><head></head><body>
          <div id="developerStoryVideoUMP" class="story-video"></div>
          <script type="module">import {ump} from "https://www.microsoft.com/videoplayer/ump.mjs";
          const opts = {"src": "https://cdn.example/video_master.m3u8", "ccFiles": [
          {"locale": "en-us", "url": "https://cdn.example/en.vtt"}]};
          ump("developerStoryVideoUMP", opts);</script></body></html>"""
        result = extract_page(source, BASE)
        output = result["html"].decode()
        self.assertIn('id="developerStoryVideoUMP"', output)
        self.assertIn('class="story-video"', output)
        self.assertIn("data-local-hls", output)
        self.assertNotIn("ump(", output)
        self.assertIn("https://cdn.example/video_master.m3u8", result["assets"])
        self.assertIn("https://cdn.example/en.vtt", result["assets"])

    def test_webpack_public_path_is_used_for_dynamic_media(self):
        dependencies = set()
        source = 'n.p="/azure-devops/";e.exports=n.p+"static/media/button123.png";'
        output = rewrite_script(source, "https://developer.microsoft.com/azure-devops/static/js/main.js", dependencies)
        self.assertEqual(output, source)
        self.assertIn("https://developer.microsoft.com/azure-devops/static/media/button123.png", dependencies)

    def test_javascript_unicode_offsets_are_preserved(self):
        dependencies = set()
        source = '// \U0001f680\nimport "./chunk.js";'
        output = rewrite_script(source, "https://developer.microsoft.com/js/main.js", dependencies)
        self.assertTrue(output.startswith('// \U0001f680\nimport "'))
        self.assertTrue(output.endswith('";'))
        self.assertIn(asset_route("https://developer.microsoft.com/js/chunk.js"), output)


if __name__ == "__main__":
    unittest.main()
