#!/usr/bin/env python3
"""Capture the complete public Reactor catalog used by the English landing page."""

import json
from pathlib import Path
from urllib.parse import urlencode

from capture_site import Network
from inventory import ROOT, now
from mirror_core import asset_route, resource_url


def capture():
    network = Network()
    first = network.get("https://developer.microsoft.com/reactor/api/events?page=1")
    if first["status"] != "ok":
        raise RuntimeError(f"Reactor API unavailable: {first['status']}")
    initial = json.loads(first["body"])
    entries, assets = {}, set()
    responses = [initial]
    for page in range(2, initial["totalPages"] + 1):
        response = network.get("https://developer.microsoft.com/reactor/api/events?" + urlencode({"page": page}))
        if response["status"] != "ok":
            raise RuntimeError(f"Reactor API page {page} unavailable: {response['status']}")
        responses.append(json.loads(response["body"]))
    for response in responses:
        for item in response["items"]:
            key = str(item.get("eventSerieFriendlyId") or item["id"])
            entries[key] = item

    def localize(value, key=""):
        if isinstance(value, dict):
            return {name: localize(child, name) for name, child in value.items()}
        if isinstance(value, list):
            return [localize(child, key) for child in value]
        if isinstance(value, str) and ("photo" in key.lower() or "image" in key.lower()):
            url = resource_url(value, "https://developer.microsoft.com/")
            if url:
                assets.add(url)
                return asset_route(url)
        return value

    output = {
        "captured_at": now(), "source": "https://developer.microsoft.com/reactor/api/events",
        "source_total_items": initial["totalItems"], "source_pages_captured": len(responses),
        "items": localize(list(entries.values())),
        "filterOptions": initial["filterOptions"], "timeZone": initial["timeZone"],
        "selectedLanguage": initial["selectedLanguage"],
    }
    (ROOT / "site").mkdir(exist_ok=True)
    (ROOT / "site/reactor-catalog.json").write_text(json.dumps(output, ensure_ascii=False, indent=2) + "\n")
    seeds = ROOT / "data/browser-assets.json"
    previous = set(json.loads(seeds.read_text())) if seeds.exists() else set()
    seeds.write_text(json.dumps(sorted(previous | assets), indent=2) + "\n")
    print(f"Captured {len(entries)} catalog entries from all {len(responses)} API pages; {len(assets)} media references.")


if __name__ == "__main__":
    capture()
