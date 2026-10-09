#!/usr/bin/env python3
"""Validate internal consistency without making requests to the source site."""

import argparse
from pathlib import Path

from inventory import ASSET_EXTENSION, ROOT, read_snapshot, same_host, scope_reason, summarize
from urllib.parse import urlsplit


def validate(data):
    errors = []
    if data.get("schema_version") != 1:
        errors.append("Unsupported inventory schema")
    pages = data["pages"]
    urls = [page["url"] for page in pages]
    if len(set(urls)) != len(urls):
        errors.append("Duplicate normalized page URLs")
    for page in pages:
        if scope_reason(page["url"]):
            errors.append(f"Out-of-scope page: {page['url']}")
        if not page["sources"]:
            errors.append(f"Missing discovery source: {page['url']}")
        if page["migration_status"] != "not_migrated":
            errors.append(f"False migration claim: {page['url']}")
        if any(key in page for key in ("body", "html", "content", "text")):
            errors.append(f"Unexpected source body field: {page['url']}")
        if page["status"] == "inspected" and not page.get("checked_at"):
            errors.append(f"Missing inspection timestamp: {page['url']}")
        if page["status"] == "inspected" and not same_host(page["final_url"]):
            errors.append(f"External page inspected: {page['url']}")
    expected = summarize(pages, data["sitemaps"])
    if expected != data["summary"]:
        errors.append("Summary is inconsistent with underlying records")
    if data["summary"]["complete_site_inventory"]:
        errors.append("Discovery must not claim full-site completeness")
    known = set(urls)
    for page in pages:
        for url in page.get("internal_links", []):
            if not scope_reason(url) and not ASSET_EXTENSION.search(urlsplit(url).path) and url not in known:
                errors.append(f"Unrecorded same-host link: {url}")
    return errors


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("file", nargs="?", default=str(ROOT / "data/site-inventory.json.gz"))
    args = parser.parse_args()
    data = read_snapshot(Path(args.file))
    errors = validate(data)
    if errors:
        raise SystemExit("\n".join(errors))
    print(f"Valid: {len(data['pages']):,} URL records, {len(data['sitemaps'])} sitemap records; "
          "no false migration or completeness claims.")
