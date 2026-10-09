import sys
import tempfile
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "scripts"))
from export_handoff import build_handoff, load_decisions
from inventory import START, add_page, read_snapshot, summarize, write_snapshot
from validate_inventory import validate


class HandoffTests(unittest.TestCase):
    def fixture(self):
        pages = {}
        add_page(pages, START, "homepage")
        return {
            "schema_version": 1, "updated_at": "2026-10-08",
            "pages": list(pages.values()), "sitemaps": [],
            "summary": summarize(list(pages.values()), []),
        }

    def test_compressed_snapshot_is_lossless_and_deterministic(self):
        with tempfile.TemporaryDirectory() as directory:
            first, second = Path(directory) / "first.json.gz", Path(directory) / "second.json.gz"
            value = {"locale": "日本語", "list": [1, 2, 3]}
            write_snapshot(first, value)
            write_snapshot(second, value)
            self.assertEqual(read_snapshot(first), value)
            self.assertEqual(first.read_bytes(), second.read_bytes())

    def test_export_never_removes_routes_or_pretends_to_have_content(self):
        source = self.fixture()
        output = build_handoff(source, {START: {"decision": "remove", "note": "Review"}})
        self.assertEqual(len(output["pages"]), 1)
        self.assertEqual(output["pages"][0]["decision"], "remove")
        self.assertEqual(output["pages"][0]["sections"], [])
        self.assertIsNone(output["pages"][0]["title"])
        self.assertEqual(output["summary"]["migratedPages"], 0)
        self.assertIn("not a native Framer", output["format"])

    def test_invalid_decisions_rejected(self):
        for value in [None, [], {}, {"schema_version": 1, "decisions": "bad"},
                      {"schema_version": 1, "decisions": [None]},
                      {"schema_version": 1, "decisions": [{"url": "https://evil.test/", "decision": "keep"}]},
                      {"schema_version": 1, "decisions": [{"url": START, "decision": "delete"}]}]:
            with self.assertRaises(ValueError):
                load_decisions(value, {START})

    def test_validation_catches_false_completion_and_missing_links(self):
        source = self.fixture()
        self.assertEqual(validate(source), [])
        source["pages"][0]["migration_status"] = "complete"
        source["pages"][0]["internal_links"] = [START + "missing"]
        errors = validate(source)
        self.assertTrue(any("False migration" in error for error in errors))
        self.assertTrue(any("Unrecorded" in error for error in errors))


if __name__ == "__main__":
    unittest.main()
