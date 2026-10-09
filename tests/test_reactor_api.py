import sys
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "scripts"))
from reactor_api import catalog_response


class ReactorApiTests(unittest.TestCase):
    def catalog(self):
        return {
            "captured_at": "2026-10-08T17:00:00+00:00", "timeZone": "UTC", "selectedLanguage": "",
            "filterOptions": {
                "topics": ["Agents", "Security"], "formats": ["Livestream"],
                "contentLevels": ["Beginner"], "eventLanguages": ["English", "Spanish"],
                "regions": ["North America", "Europe, Middle East, Africa"],
            },
            "items": [
                {"id": str(i), "title": f"Agents session {i}", "description": "Build software",
                 "eventTopic": "Agents", "formats": ["Livestream"], "contentLevel": "Beginner",
                 "languages": ["English" if i < 12 else "Spanish"], "regions": ["North America"],
                 "isSeries": False, "startDateTimeUtc": f"2026-10-{8+i:02}T17:00:00Z"}
                for i in range(15)
            ],
        }

    def test_lookahead_pagination_matches_source_client(self):
        first = catalog_response(self.catalog(), {"page": ["1"]})
        self.assertEqual(first["totalItems"], 15)
        self.assertEqual(len(first["items"]), 10)
        second = catalog_response(self.catalog(), {"page": ["2"]})
        self.assertEqual(second["items"][0]["id"], "9")
        self.assertEqual(len(second["items"]), 6)

    def test_search_language_and_region_filters(self):
        result = catalog_response(self.catalog(), {"eventLanguage": ["English"], "search": ["session 1"]})
        self.assertEqual(result["totalItems"], 3)
        self.assertEqual(catalog_response(self.catalog(), {"regions": ["Europe, Middle East, Africa"]})["totalItems"], 0)
        self.assertEqual(catalog_response(self.catalog(), {"topics": ["Security"]})["totalItems"], 0)
        self.assertEqual(catalog_response(self.catalog(), {"topics": ["Agents%7CSecurity"]})["totalItems"], 15)

    def test_date_ranges_and_invalid_input(self):
        self.assertEqual(catalog_response(self.catalog(), {"dates": ["Today"]})["totalItems"], 1)
        self.assertEqual(catalog_response(self.catalog(), {"dates": ["NextMonth"]})["totalItems"], 0)
        with self.assertRaises(ValueError):
            catalog_response(self.catalog(), {"page": ["no"]})


if __name__ == "__main__":
    unittest.main()
