import importlib.util
import io
import unittest
from unittest.mock import patch
from urllib.error import HTTPError
from pathlib import Path

spec = importlib.util.spec_from_file_location(
    "inventory", Path(__file__).resolve().parents[1] / "scripts/inventory.py"
)
inventory = importlib.util.module_from_spec(spec)
spec.loader.exec_module(inventory)


class InventoryTests(unittest.TestCase):
    def test_normalization_keeps_semantic_query(self):
        self.assertEqual(
            inventory.normalize("/reactor/?page=2&utm_source=test&wt.mc_id=a#events"),
            "https://developer.microsoft.com/reactor/?page=2",
        )
        self.assertNotEqual(inventory.normalize("/foo"), inventory.normalize("/foo/"))

    def test_host_boundary_and_bad_urls(self):
        for url in ["https://learn.microsoft.com/", "https://evil.developer.microsoft.com/",
                    "https://developer.microsoft.com.example.com/"]:
            self.assertFalse(inventory.same_host(url))
        for url in ["javascript:alert(1)", "mailto:foo@example.com", "https://a:b@example.com",
                    "https://developer.microsoft.com:9000/", "https://x:invalid/"]:
            self.assertIsNone(inventory.normalize(url))
        self.assertTrue(inventory.same_host(inventory.normalize("/en-us/")))

    def test_locale_classification_and_user_scope(self):
        self.assertEqual(inventory.classify("https://developer.microsoft.com/ja-jp/windows/"),
                         ("windows", "ja-jp"))
        self.assertEqual(inventory.classify("https://developer.microsoft.com/reactor/en-us/events/1"),
                         ("reactor", "en-us"))
        self.assertEqual(inventory.scope_reason("https://developer.microsoft.com/ja-jp/windows/"),
                         "non_english")
        self.assertIsNone(inventory.scope_reason("https://developer.microsoft.com/en-us/reactor/"))
        self.assertIsNone(inventory.scope_reason("https://developer.microsoft.com/reactor/events/123/"))
        for path in ["/blog/", "/en-us/microsoft-edge/", "/en-us/games.sitemap.xml",
                     "/games/publish/", "/en-us/microsoft-365/", "/en-us/microsoft-teams/",
                     "/az-latn-az/microsoft-edge/", "/bs-latn-ba/microsoft-edge/extensions",
                     "/sr-cyrl-rs/microsoft-edge/"]:
            self.assertTrue(inventory.scope_reason(inventory.ORIGIN + path).startswith("excluded_area:"))
        for path in ["/reactor/sitemap-pages-ja-jp-1/", "/_sitemaps/advocates_fr-fr_1.xml"]:
            self.assertEqual(inventory.scope_reason(inventory.ORIGIN + path), "non_english")
        self.assertEqual(inventory.classify(inventory.ORIGIN + "/az-latn-az/microsoft-edge/"),
                         ("microsoft-edge", "az-latn-az"))
        self.assertEqual(inventory.classify(inventory.ORIGIN + "/reactor/en-us/events/how-to/"),
                         ("reactor", "en-us"))

    def test_excluded_pages_are_not_added(self):
        pages = {}
        for path in ["/en-us/microsoft-edge/", "/ja-jp/windows/", "/blog/", "/en-us/microsoft-365/"]:
            inventory.add_page(pages, inventory.ORIGIN + path, "homepage")
        inventory.add_page(pages, inventory.START, "homepage")
        self.assertEqual(list(pages), [inventory.START])

    def test_robots_wildcard_longest_match_and_groups(self):
        rules = inventory.Robots(
            "User-agent: OtherBot\nDisallow: /\n\n"
            "User-agent: *\nDisallow: /*/locale\n"
            "Disallow: /private/\nAllow: /private/public$\n"
            "Sitemap: https://developer.microsoft.com/sitemap.xml\n"
        )
        self.assertFalse(rules.allowed("https://developer.microsoft.com/en-us/locale"))
        self.assertFalse(rules.allowed("https://developer.microsoft.com/en-us/locale?x=1"))
        self.assertTrue(rules.allowed("https://developer.microsoft.com/en-us/"))
        self.assertTrue(rules.allowed("https://developer.microsoft.com/private/public"))
        self.assertFalse(rules.allowed("https://developer.microsoft.com/private/public/extra"))
        self.assertEqual(len(rules.sitemaps), 1)

    def test_specific_robots_policy(self):
        rules = inventory.Robots(
            "User-agent: *\nDisallow: /\nUser-agent: DevComMigrationInventory\n"
            "Allow: /\nCrawl-delay: 2\n"
        )
        self.assertTrue(rules.allowed(inventory.START))
        self.assertEqual(rules.delay, 2)

    def test_sitemap_and_alternates(self):
        xml = b"""<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xhtml="http://www.w3.org/1999/xhtml"><url>
            <loc>https://developer.microsoft.com/en-us/</loc><lastmod>2026-01-01</lastmod>
            <xhtml:link href="https://developer.microsoft.com/fr-fr/"/>
            </url></urlset>"""
        kind, rows = inventory.parse_sitemap(xml, inventory.START)
        self.assertEqual(kind, "urlset")
        self.assertEqual(len(rows), 2)
        self.assertEqual(rows[0]["last_modified"], "2026-01-01")
        with self.assertRaises(ValueError):
            inventory.parse_sitemap(b"<html/>", inventory.START)

    def test_metadata_does_not_store_body(self):
        parser = inventory.MetadataParser(inventory.START)
        parser.feed("""<html lang="en-US"><head><title>Example</title></head><header><nav>
          <a href="/en-us/python">Python</a></nav></header><main><h1>Secret body text</h1>
          <p>Do not persist this prose.</p><img src="/logo.svg">
          <a href="https://learn.microsoft.com/a">Docs</a><script>const a = 2;</script>
          <form method="post" action="/signup"></form></main></html>""")
        result = parser.metadata()
        self.assertEqual(result["title"], "Example")
        self.assertEqual(result["element_counts"]["h1"], 1)
        self.assertEqual(result["external_links"], ["https://learn.microsoft.com/a"])
        self.assertNotIn("Secret body", str(result))
        self.assertNotIn("Do not persist", str(result))
        self.assertEqual(result["forms"][0]["method"], "post")

    def test_svg_titles_do_not_pollute_document_title(self):
        parser = inventory.MetadataParser(inventory.START)
        parser.feed("<html><head><title>Page title</title></head><body>"
                    "<svg><title>Privacy icon</title></svg>"
                    "<svg><title>Another icon</title></svg></body></html>")
        self.assertEqual(parser.metadata()["title"], "Page title")

    def test_discovery_preserves_evidence_and_never_claims_complete(self):
        pages = {}
        inventory.add_page(pages, inventory.START, "homepage")
        inventory.add_page(pages, inventory.START, "sitemap")
        inventory.add_page(pages, "https://learn.microsoft.com/", "homepage")
        self.assertEqual(len(pages), 1)
        self.assertEqual(pages[inventory.START]["sources"], ["homepage", "sitemap"])
        summary = inventory.summarize(list(pages.values()), [])
        self.assertFalse(summary["complete_site_inventory"])
        self.assertEqual(summary["uninspected_urls"], 1)
        self.assertEqual(summary["migrated_pages"], 0)

    def test_external_destination_never_requested(self):
        result = inventory.Fetcher().get("https://learn.microsoft.com/")
        self.assertEqual(result["status"], "external_redirect")

    def test_redirects_stop_before_external_or_excluded_destination(self):
        for destination, expected in [
            ("https://learn.microsoft.com/", "external_redirect"),
            (inventory.ORIGIN + "/en-us/games/", "scope_excluded"),
            (inventory.ORIGIN + "/az-latn-az/microsoft-edge/", "scope_excluded"),
        ]:
            with patch.object(inventory.urllib.request, "build_opener") as factory:
                factory.return_value.open.side_effect = HTTPError(
                    inventory.START, 302, "Found", {"Location": destination}, io.BytesIO()
                )
                result = inventory.Fetcher(delay=0).get(inventory.START)
                self.assertEqual(result["status"], expected)
                self.assertEqual(factory.return_value.open.call_count, 1)
                self.assertEqual(result["redirects"][0]["to"], destination)


if __name__ == "__main__":
    unittest.main()
