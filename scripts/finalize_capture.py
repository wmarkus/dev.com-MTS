#!/usr/bin/env python3
"""Normalize the finished capture without deleting any included page content."""

import json
from collections import Counter

from lxml import html

from inventory import ORIGIN, ROOT, now, scope_reason
from mirror_core import TELEMETRY, normalize, public_reference


def finalize():
    path = ROOT / "site/manifest.json"
    manifest = json.loads(path.read_text())
    if any(record["status"] == "pending" for group in ("pages", "assets") for record in manifest[group].values()):
        raise RuntimeError("Capture is still running; finish the queue before finalizing.")
    excluded, duplicates, changed = [], 0, 0
    disabled_ids = set()
    for url, record in manifest["assets"].items():
        if TELEMETRY.search(url):
            disabled_ids.add(record["id"])
            filename = record.pop("file", None)
            if filename and filename.startswith("site/assets/"):
                (ROOT / filename).unlink(missing_ok=True)
            record["status"] = "disabled_telemetry"
            record["bytes"] = 0
            record["dependencies"] = []
    for url, record in list(manifest["pages"].items()):
        if scope_reason(url):
            excluded.append(url)
            filename = record.get("file")
            if filename and filename.startswith("site/pages/"):
                (ROOT / filename).unlink(missing_ok=True)
            del manifest["pages"][url]
            continue
        if record["status"] != "captured":
            continue
        file = ROOT / record["file"]
        document = html.document_fromstring(file.read_bytes())
        seen = set()
        for script in document.xpath("//script[@src]"):
            source = script.get("src")
            if source.rsplit("/", 1)[-1] in disabled_ids:
                script.drop_tree()
            elif source in seen:
                script.drop_tree()
                duplicates += 1
            else:
                seen.add(source)
        if "/azure-devops/" in url:
            for script in document.xpath("//script[not(@src)]"):
                if script.text:
                    script.text = script.text.replace(".childNodes[1].data.trim()", ".textContent.trim()")
        reload = document.get_element_by_id("shouldRunTimeZoneReExecution", None)
        if reload is not None:
            reload.set("data-executeTimeZone", "False")
        for anchor in document.xpath("//a[@href]"):
            href = anchor.get("href")
            if href.startswith("/") and not href.startswith("//"):
                absolute = normalize(ORIGIN + href)
                if absolute and scope_reason(absolute):
                    anchor.set("href", absolute)
        record["links"] = [link for link in record.get("links", []) if not scope_reason(link)]
        record["assets"] = [asset for asset in record.get("assets", []) if not TELEMETRY.search(asset)]
        output = html.tostring(document, encoding="utf-8", method="html", doctype="<!doctype html>")
        if output != file.read_bytes():
            file.write_bytes(output)
            changed += 1
        record["bytes"] = len(output)
    manifest["updated_at"] = now()
    manifest["finalization"] = {
        "excluded_additional_m365_routes": excluded,
        "duplicate_script_tags_removed": duplicates,
        "pages_normalized": changed,
        "timezone": "UTC snapshot; source automatic reload disabled",
    }
    manifest["summary"]["pages"] = dict(Counter(record["status"] for record in manifest["pages"].values()))
    manifest["summary"]["assets"] = dict(Counter(record["status"] for record in manifest["assets"].values()))
    manifest["summary"]["page_records"] = len(manifest["pages"])
    manifest["summary"]["captured_bytes"] = sum(
        record.get("bytes", 0) for group in ("pages", "assets") for record in manifest[group].values()
    )
    temporary = path.with_suffix(".tmp")
    temporary.write_text(json.dumps(manifest, ensure_ascii=False, separators=(",", ":")) + "\n")
    temporary.replace(path)
    print(json.dumps(manifest["finalization"], indent=2))


if __name__ == "__main__":
    finalize()
