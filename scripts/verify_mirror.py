#!/usr/bin/env python3
"""Audit persisted capture coverage, file integrity, links, assets and secret hygiene."""

import argparse
import json
import re
from collections import Counter
from pathlib import Path
from urllib.parse import urlsplit

from lxml import html

from inventory import ROOT, normalize, scope_reason
from mirror_core import asset_key, is_flow


def verify(manifest):
    errors, warnings = [], []
    assets = {record["id"]: record for record in manifest["assets"].values()}
    page_records = manifest["pages"]
    missing_links = Counter()
    unavailable_assets = Counter()
    missing_asset_ids = set()
    total_text = 0
    source_failures = []
    for url, record in page_records.items():
        if scope_reason(url) or is_flow(url):
            errors.append(f"Out-of-scope captured route: {url}")
        if record["status"] == "pending":
            errors.append(f"Unfinished page: {url}")
        if record["status"] not in ("captured", "captured_resource"):
            if record["status"] not in ("alias", "external", "external_download"):
                source_failures.append({"url": url, "status": record["status"],
                                        "http_status": record.get("http_status")})
            continue
        file = ROOT / record["file"]
        if not file.is_file():
            errors.append(f"Missing page file: {record['file']}")
            continue
        if record["status"] == "captured_resource":
            continue
        body = file.read_bytes()
        document = html.fromstring(body)
        total_text += len(" ".join(document.itertext()))
        if document.xpath("//input[@name='__RequestVerificationToken']"):
            errors.append(f"Ephemeral form token retained: {url}")
        if b"/__mirror/runtime.js" not in body:
            errors.append(f"Local privacy/runtime adapter missing: {url}")
        for match in re.finditer(rb"/__mirror/assets/([a-f0-9]{24})", body):
            key = match[1].decode()
            dependency = assets.get(key)
            if not dependency:
                missing_asset_ids.add(key)
            elif dependency["status"] != "captured":
                unavailable_assets[key] += 1
        for link in record.get("links", []):
            if link not in page_records and not scope_reason(link) and not is_flow(link):
                missing_links[link] += 1
        if file.stat().st_size != record.get("bytes"):
            errors.append(f"Page file size differs from manifest: {url}")
    for url, record in manifest["assets"].items():
        if record["status"] == "pending":
            errors.append(f"Unfinished asset: {url}")
        if record["status"] != "captured":
            continue
        files = record.get("file_parts", [record.get("file")])
        if not all(file and (ROOT / file).is_file() for file in files):
            errors.append(f"Missing asset file: {url}")
            continue
        size = sum((ROOT / file).stat().st_size for file in files)
        if size != record["bytes"]:
            errors.append(f"Asset file size differs from manifest: {url}")
        if any((ROOT / file).stat().st_size >= 100_000_000 for file in files):
            errors.append(f"Asset exceeds GitHub regular-file limit: {url}")
    errors.extend(f"Unregistered asset reference: {key}" for key in sorted(missing_asset_ids))
    errors.extend(f"Discovered link absent from queue: {url}" for url in sorted(missing_links))
    failures = [
        {"url": url, "status": item["status"], "http_status": item.get("http_status")}
        for url, item in manifest["assets"].items()
        if item["status"] not in ("captured", "pending", "disabled_telemetry")
    ]
    if source_failures:
        warnings.append(f"{len(source_failures)} source page failures/robots exclusions; no substitute content fabricated.")
    if failures:
        warnings.append(f"{len(failures)} asset candidates are unavailable, too large, or not asset responses.")
    return {
        "schema_version": 1, "capture_updated_at": manifest["updated_at"],
        "errors": errors, "warnings": warnings,
        "summary": manifest["summary"],
        "source_page_gaps": source_failures, "asset_gaps": failures,
        "referenced_unavailable_asset_ids": dict(unavailable_assets),
        "html_text_characters": total_text,
        "framer_connected": False, "figma_connected": False,
    }


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", default=str(ROOT / "site/verification.json"))
    args = parser.parse_args()
    manifest = json.loads((ROOT / "site/manifest.json").read_text())
    report = verify(manifest)
    Path(args.output).write_text(json.dumps(report, indent=2) + "\n")
    print(json.dumps({key: report[key] for key in ("summary", "warnings", "html_text_characters")}, indent=2))
    if report["errors"]:
        print("\n".join(report["errors"][:30]))
        raise SystemExit(f"{len(report['errors'])} verification errors; see {args.output}")
    print("All queued pages and assets have outcomes; every captured file and local asset reference is accounted for.")
