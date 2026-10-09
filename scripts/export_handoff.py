#!/usr/bin/env python3
"""Export portable migration records, not a native Framer import or site clone."""

import argparse
import json
from pathlib import Path
from urllib.parse import urlsplit

from inventory import ROOT, now, read_snapshot, write_snapshot

DECISIONS = {"undecided", "keep", "consolidate", "remove"}


def load_decisions(value, known):
    if not isinstance(value, dict) or value.get("schema_version") != 1:
        raise ValueError("Expected a version 1 decision export")
    if not isinstance(value.get("decisions"), list):
        raise ValueError("Missing decisions array")
    output = {}
    for row in value["decisions"]:
        if not isinstance(row, dict):
            raise ValueError("Each decision must be an object")
        url = row.get("url")
        if not isinstance(url, str) or url not in known:
            raise ValueError("Decision refers to a route outside this inventory")
        if row.get("decision") not in DECISIONS or url in output:
            raise ValueError("Invalid or duplicate decision")
        note = row.get("note", "")
        if not isinstance(note, str) or len(note) > 2000:
            raise ValueError("Notes must be strings of at most 2,000 characters")
        output[url] = {"decision": row["decision"], "note": note}
    return output


def build_handoff(inventory, decisions):
    pages = []
    assets = {}
    redirects = {}
    for record in inventory["pages"]:
        url = record["url"]
        choice = decisions.get(url, {"decision": "undecided", "note": ""})
        parsed = urlsplit(url)
        pages.append({
            "sourceUrl": url,
            "sourcePath": parsed.path + (f"?{parsed.query}" if parsed.query else ""),
            "locale": record["locale"], "family": record["family"],
            "title": record.get("title"), "canonical": record.get("canonical"),
            "verificationStatus": record["status"], "migrationStatus": "not_migrated",
            "decision": choice["decision"], "note": choice["note"],
            "template": None, "sections": [],
        })
        for asset in record.get("asset_urls", []):
            assets.setdefault(asset, set()).add(url)
        for redirect in record.get("redirects", []):
            redirects[(redirect["from"], redirect["to"])] = redirect
    return {
        "schema_version": 1, "exported_at": now(),
        "format": "portable-migration-handoff; not a native Framer import",
        "content_status": "metadata_only; authorized recreation tracked in site/manifest.json",
        "source_inventory_updated_at": inventory["updated_at"],
        "pages": pages,
        "assets": [
            {"sourceUrl": url, "localPath": None, "rightsStatus": "user_authorized", "usedBy": sorted(uses)}
            for url, uses in sorted(assets.items())
        ],
        "observedRedirects": list(redirects.values()),
        "summary": {
            "pageRecords": len(pages), "assetReferences": len(assets),
            "explicitDecisions": len(decisions), "migratedPages": 0,
        },
    }


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--inventory", default=str(ROOT / "data/site-inventory.json.gz"))
    parser.add_argument("--decisions", help="A JSON decision export from the local viewer")
    parser.add_argument("--output", required=True, help="Destination .json or .json.gz path")
    args = parser.parse_args()
    source = read_snapshot(Path(args.inventory))
    decisions = {}
    if args.decisions:
        decisions = load_decisions(json.loads(Path(args.decisions).read_text()),
                                   {page["url"] for page in source["pages"]})
    output = Path(args.output).resolve()
    if output == Path(args.inventory).resolve():
        parser.error("The export must not overwrite the source inventory")
    handoff = build_handoff(source, decisions)
    write_snapshot(output, handoff)
    print(json.dumps(handoff["summary"], indent=2))
