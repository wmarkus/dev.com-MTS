#!/usr/bin/env python3
"""Read-only same-host discovery. Stores metadata, never page bodies or media."""

import argparse
import concurrent.futures
import datetime as dt
import gzip
import io
import json
import re
import threading
import time
import urllib.error
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from collections import Counter, deque
from html.parser import HTMLParser
from pathlib import Path

HOST = "developer.microsoft.com"
ORIGIN = f"https://{HOST}"
START = f"{ORIGIN}/en-us/"
AGENT = "DevComMigrationInventory/1.0"
ROOT = Path(__file__).resolve().parents[1]
TRACKING = {"wt.mc_id", "ocid", "fbclid", "gclid", "msclkid"}
LOCALE = re.compile(r"^[a-z]{2,3}-(?:[a-z]{4}-)?(?:[a-z]{2}|\d{3})$", re.I)
EXCLUDED_FAMILIES = {"blog", "microsoft-edge", "games", "microsoft-365"}
ASSET_EXTENSION = re.compile(
    r"\.(?:png|jpe?g|gif|svg|webp|ico|avif|css|js|mjs|map|woff2?|ttf|"
    r"pdf|zip|exe|msi|dmg|pkg|mp4|webm|mp3|json|xml|gz)$", re.I
)


def now():
    return dt.datetime.now(dt.timezone.utc).isoformat(timespec="seconds")


def normalize(value, base=START):
    try:
        url = urllib.parse.urlsplit(urllib.parse.urljoin(base, value.strip()))
        if url.scheme not in ("https", "http") or not url.hostname:
            return None
        if url.username or url.password:
            return None
        port = url.port
        if port and port != (443 if url.scheme == "https" else 80):
            return None
        query = [
            (key, val) for key, val in urllib.parse.parse_qsl(url.query, keep_blank_values=True)
            if key.lower() not in TRACKING and not key.lower().startswith("utm_")
        ]
        # Preserve semantic queries and trailing slashes; redirects establish aliases.
        return urllib.parse.urlunsplit((
            url.scheme.lower(), url.hostname.lower(), url.path or "/",
            urllib.parse.urlencode(query), "",
        ))
    except (ValueError, TypeError):
        return None


def same_host(url):
    return bool(url and urllib.parse.urlsplit(url).hostname == HOST)


def classify(url):
    parts = [part for part in urllib.parse.urlsplit(url).path.split("/") if part]
    locale = "unlocalized"
    if parts and LOCALE.fullmatch(parts[0]):
        locale = parts.pop(0).lower()
    elif len(parts) > 1 and parts[0].lower() == "reactor" and LOCALE.fullmatch(parts[1]):
        locale = parts.pop(1).lower()
    first = parts[0].lower() if parts else "home"
    family = {
        "office-scripts": "microsoft-365", "office": "microsoft-365",
        "office-dev-center": "microsoft-365", "outlook": "microsoft-365",
        "access": "microsoft-365", "excel": "microsoft-365", "word": "microsoft-365",
        "sharepoint": "microsoft-365", "onenote": "microsoft-365",
        "microsoft-teams": "microsoft-365", "graph": "microsoft-365",
        "games": "games", "reactor": "reactor", "microsoft-edge": "microsoft-edge",
        "advocates": "advocates", "azure-devops": "azure-devops",
        "microsoft-365": "microsoft-365", "windows": "windows",
        "blog": "blog",
    }.get(first, "developer-center")
    return family, locale


def scope_reason(url):
    if not same_host(url):
        return "external_host"
    family, locale = classify(url)
    path = urllib.parse.urlsplit(url).path.lower()
    if family in EXCLUDED_FAMILIES or re.search(r"/games(?:[/.]|$)", path):
        return f"excluded_area:{family if family in EXCLUDED_FAMILIES else 'games'}"
    if locale != "unlocalized" and not locale.startswith("en-"):
        return "non_english"
    embedded_locale = re.search(
        r"[_-]([a-z]{2,3}-(?:[a-z]{4}-)?(?:[a-z]{2}|\d{3}))(?:_|-\d|/|\.|$)", path
    ) if "sitemap" in path else None
    if embedded_locale and not embedded_locale[1].startswith("en-"):
        return "non_english"
    return None


def priority(record):
    if "homepage" in record["sources"]:
        return 0
    path = urllib.parse.urlsplit(record["url"]).path
    if record["locale"] == "en-us" and record["family"] == "developer-center":
        return 1
    if record["locale"] == "en-us" and path.count("/") <= 4:
        return 2
    if record["locale"] in ("en-us", "unlocalized"):
        return 3
    return 4


class Robots:
    """Robots group selection plus wildcard and longest-match allow rules."""

    def __init__(self, text):
        groups = []
        agents, rules, delay = [], [], 0
        self.sitemaps = []
        has_directives = False
        for raw in text.splitlines():
            line = raw.split("#", 1)[0].strip()
            if ":" not in line:
                continue
            name, value = (s.strip() for s in line.split(":", 1))
            name = name.lower()
            if name == "sitemap":
                self.sitemaps.append(value)
            elif name == "user-agent":
                if has_directives:
                    groups.append((agents, rules, delay))
                    agents, rules, delay = [], [], 0
                    has_directives = False
                agents.append(value.lower())
            elif agents and name in ("allow", "disallow", "crawl-delay"):
                has_directives = True
                if name == "crawl-delay":
                    try:
                        delay = max(delay, float(value))
                    except ValueError:
                        raise ValueError(f"Invalid robots crawl-delay: {value!r}") from None
                elif value:
                    rules.append((name == "allow", value))
        if agents:
            groups.append((agents, rules, delay))
        specific = [
            group for group in groups
            if any(agent != "*" and agent in AGENT.lower() for agent in group[0])
        ]
        selected = specific or [group for group in groups if "*" in group[0]]
        self.rules = [rule for _, rules, _ in selected for rule in rules]
        self.delay = max((group[2] for group in selected), default=0)

    def allowed(self, url):
        parsed = urllib.parse.urlsplit(url)
        target = parsed.path + (f"?{parsed.query}" if parsed.query else "")
        matches = []
        for allow, pattern in self.rules:
            anchored = pattern.endswith("$")
            pattern = pattern[:-1] if anchored else pattern
            regex = "^" + re.escape(pattern).replace(r"\*", ".*")
            if anchored:
                regex += "$"
            if re.search(regex, target):
                matches.append((len(pattern.replace("*", "")), allow))
        return max(matches)[1] if matches else True


class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        return None


class Fetcher:
    def __init__(self, delay=0.35, timeout=25, max_bytes=16_000_000):
        self.delay, self.timeout, self.max_bytes = delay, timeout, max_bytes
        self.lock = threading.Lock()
        self.next_request = 0
        self.robots = None

    def get(self, url):
        original = url
        redirects = []
        for _ in range(11):
            if not same_host(url):
                return dict(status="external_redirect", final_url=url, redirects=redirects)
            reason = scope_reason(url)
            if reason:
                return dict(status="scope_excluded", final_url=url, redirects=redirects,
                            exclusion_reason=reason)
            if self.robots and not self.robots.allowed(url):
                return dict(status="robots_disallowed", final_url=url, redirects=redirects)
            with self.lock:
                time.sleep(max(0, self.next_request - time.monotonic()))
                self.next_request = time.monotonic() + self.delay
            request = urllib.request.Request(url, headers={"User-Agent": AGENT})
            try:
                with urllib.request.build_opener(NoRedirect()).open(
                    request, timeout=self.timeout
                ) as response:
                    body = response.read(self.max_bytes + 1)
                    if len(body) > self.max_bytes:
                        return dict(status="oversized", final_url=url, redirects=redirects)
                    if response.headers.get("Content-Encoding") == "gzip" or body[:2] == b"\x1f\x8b":
                        with gzip.GzipFile(fileobj=io.BytesIO(body)) as compressed:
                            body = compressed.read(self.max_bytes + 1)
                        if len(body) > self.max_bytes:
                            return dict(status="oversized", final_url=url, redirects=redirects)
                    return dict(
                        status="ok", final_url=url, http_status=response.status,
                        content_type=response.headers.get("Content-Type", ""),
                        body=body, redirects=redirects,
                    )
            except urllib.error.HTTPError as error:
                code = error.code
                location = error.headers.get("Location")
                error.close()
                if code in (301, 302, 303, 307, 308) and location:
                    destination = normalize(location, url)
                    if not destination:
                        return dict(status="invalid_redirect", final_url=url, redirects=redirects)
                    redirects.append({"from": url, "to": destination, "status": code})
                    url = destination
                    continue
                return dict(
                    status="restricted" if code in (401, 403) else "http_error",
                    final_url=url, http_status=code, redirects=redirects,
                    error=f"HTTP {code}",
                )
            except (urllib.error.URLError, TimeoutError, OSError, EOFError) as error:
                return dict(
                    status="transport_error", final_url=url, redirects=redirects,
                    error=str(error),
                )
        return dict(status="redirect_loop", final_url=original, redirects=redirects)


def parse_sitemap(body, base):
    root = ET.fromstring(body)
    kind = root.tag.rsplit("}", 1)[-1]
    if kind not in ("urlset", "sitemapindex"):
        raise ValueError(f"Expected sitemap XML, found {kind}")
    rows = []
    for item in root:
        values = {child.tag.rsplit("}", 1)[-1]: child.text for child in item}
        if not values.get("loc"):
            continue
        url = normalize(values["loc"], base)
        if url:
            rows.append({"url": url, "last_modified": values.get("lastmod")})
        for child in item:
            if child.tag.rsplit("}", 1)[-1] == "link":
                alternative = normalize(child.attrib.get("href", ""), base)
                if alternative:
                    rows.append({"url": alternative, "last_modified": values.get("lastmod")})
    return kind, rows


class MetadataParser(HTMLParser):
    def __init__(self, url):
        super().__init__(convert_charrefs=True)
        self.url = url
        self.title_parts = []
        self.in_title = False
        self.in_head = False
        self.ignored = 0
        self.links, self.assets, self.frames, self.forms = set(), set(), set(), []
        self.counts = Counter()
        self.ids = set()
        self.canonical = None
        self.language = None
        self.text_characters = 0
        self.stack = []
        self.navigation = set()

    def handle_starttag(self, tag, attributes):
        attrs = dict(attributes)
        self.counts[tag] += 1
        if tag in ("script", "style"):
            self.ignored += 1
        if tag == "head":
            self.in_head = True
        if tag == "title" and self.in_head:
            self.in_title = True
        if tag in ("nav", "header", "footer"):
            self.stack.append(tag)
        if attrs.get("id"):
            self.ids.add(attrs["id"])
        if tag == "html":
            self.language = attrs.get("lang")
        if tag == "a":
            link = normalize(attrs.get("href", ""), self.url)
            if link:
                self.links.add(link)
                if self.stack:
                    self.navigation.add(link)
        if tag == "base" and attrs.get("href"):
            self.url = urllib.parse.urljoin(self.url, attrs["href"])
        if tag == "link" and attrs.get("rel", "").lower() == "canonical":
            self.canonical = normalize(attrs.get("href", ""), self.url)
        if tag in ("img", "source", "video", "audio", "script"):
            for attr in ("src", "poster"):
                asset = normalize(attrs.get(attr, ""), self.url) if attrs.get(attr) else None
                if asset:
                    self.assets.add(asset)
            # Record the raw srcset separately only through individual URL candidates.
            for candidate in attrs.get("srcset", "").split(","):
                value = candidate.strip().split()
                asset = normalize(value[0], self.url) if value else None
                if asset:
                    self.assets.add(asset)
        if tag == "link" and set(attrs.get("rel", "").split()) & {"stylesheet", "icon", "preload"}:
            asset = normalize(attrs.get("href", ""), self.url)
            if asset:
                self.assets.add(asset)
        if tag == "iframe":
            frame = normalize(attrs.get("src", ""), self.url)
            if frame:
                self.frames.add(frame)
        if tag == "form":
            self.forms.append({
                "action": normalize(attrs.get("action", self.url), self.url),
                "method": attrs.get("method", "get").lower(),
            })

    def handle_endtag(self, tag):
        if tag in ("script", "style"):
            self.ignored = max(0, self.ignored - 1)
        if tag == "title":
            self.in_title = False
        if tag == "head":
            self.in_head = False
        if tag in self.stack:
            self.stack.remove(tag)

    def handle_data(self, value):
        if self.in_title:
            self.title_parts.append(value)
        if not self.ignored:
            self.text_characters += len(value.strip())

    def metadata(self):
        return {
            "title": " ".join("".join(self.title_parts).split())[:240],
            "canonical": self.canonical, "html_language": self.language,
            "internal_links": sorted(url for url in self.links if same_host(url)),
            "external_links": sorted(url for url in self.links if not same_host(url)),
            "navigation_links": sorted(self.navigation),
            "asset_urls": sorted(self.assets), "iframe_urls": sorted(self.frames),
            "forms": self.forms, "element_counts": dict(sorted(self.counts.items())),
            "anchor_ids": sorted(self.ids),
            "rendering": "browser_review_required",
            "html_text_characters": self.text_characters,
        }


def page_record(url, source, modified=None):
    family, locale = classify(url)
    return dict(
        url=url, family=family, locale=locale, sources=[source],
        last_modified=modified, status="discovered", migration_status="not_migrated",
    )


def add_page(pages, url, source, modified=None):
    if scope_reason(url):
        return
    if url not in pages:
        pages[url] = page_record(url, source, modified)
    else:
        if source not in pages[url]["sources"]:
            pages[url]["sources"].append(source)
        if modified and not pages[url].get("last_modified"):
            pages[url]["last_modified"] = modified


def scan_page(fetcher, record):
    result = fetcher.get(record["url"])
    body = result.pop("body", b"")
    record = {**record, **result, "checked_at": now()}
    if result["status"] == "ok":
        if "text/html" not in result["content_type"].lower():
            record["status"] = "non_html"
        else:
            parser = MetadataParser(result["final_url"])
            parser.feed(body.decode("utf-8", errors="replace"))
            record.update(parser.metadata())
            language = record["html_language"]
            if language and not re.fullmatch(r"en(?:[-_][a-z0-9]+)*", language, re.I):
                record["status"] = "scope_excluded"
                record["exclusion_reason"] = f"non_english_html:{language}"
            else:
                record["status"] = "inspected"
    return record


def summarize(pages, sitemaps):
    statuses = Counter(page["status"] for page in pages)
    pending = statuses["discovered"]
    failures = [
        entry for entry in sitemaps
        if entry["status"] not in ("ok", "scope_excluded")
    ]
    return {
        "known_urls": len(pages),
        "page_statuses": dict(sorted(statuses.items())),
        "families": dict(sorted(Counter(p["family"] for p in pages).items())),
        "locales": dict(sorted(Counter(p["locale"] for p in pages).items())),
        "sitemaps_checked": sum(s["status"] != "scope_excluded" for s in sitemaps),
        "sitemaps_excluded": sum(s["status"] == "scope_excluded" for s in sitemaps),
        "sitemaps_unavailable": len(failures),
        "inspected_pages": statuses["inspected"], "uninspected_urls": pending,
        "migrated_pages": 0,
        "complete_site_inventory": False,
        "coverage_notes": [
            "Counts represent discovered URL records, not unique working pages.",
            "Scope: English routes and neutral routes pending English confirmation; Reactor is included.",
            "Microsoft Developer blog, Edge, games and Microsoft 365 are excluded by user direction.",
            "Sitemaps and HTML links cannot prove the absence of unlisted or client-generated routes.",
            "Failed sitemaps, uninspected pages, redirects, robots exclusions and access failures remain visible.",
            "Only inspected pages have HTML metadata; rendered behavior and CSS dependencies are not fully audited.",
            "This initial metadata file contains no page bodies; authorized site captures are tracked separately in site/manifest.json.",
        ],
    }


def read_snapshot(path):
    opener = gzip.open if path.suffix == ".gz" else open
    with opener(path, "rt", encoding="utf-8") as source:
        return json.load(source)


def write_snapshot(path, output):
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_suffix(".tmp")
    if path.suffix == ".gz":
        with temporary.open("wb") as target:
            with gzip.GzipFile(fileobj=target, mode="wb", mtime=0, filename="") as compressed:
                with io.TextIOWrapper(compressed, encoding="utf-8") as text:
                    json.dump(output, text, ensure_ascii=False, separators=(",", ":"))
    else:
        temporary.write_text(json.dumps(output, ensure_ascii=False, indent=2) + "\n",
                             encoding="utf-8")
    temporary.replace(path)


def save(path, pages, sitemaps, robots, started):
    ordered = sorted(pages.values(), key=lambda p: (priority(p), p["url"]))
    output = {
        "schema_version": 1, "source": START, "host": HOST,
        "started_at": started, "updated_at": now(),
        "scope": {
            "pages": "exact hostname; English locales and neutral routes pending language confirmation",
            "excluded_families": sorted(EXCLUDED_FAMILIES),
            "reactor": "included",
            "external_pages": "excluded; external redirects are recorded without following",
            "assets": "URL references only; no downloads",
            "copyright_reproduction": "authorized by user on 2026-10-08; actual capture tracked separately in site/manifest.json",
        },
        "robots": robots, "summary": summarize(ordered, sitemaps),
        "sitemaps": sorted(sitemaps, key=lambda s: s["url"]), "pages": ordered,
    }
    write_snapshot(path, output)
    write_snapshot(path.parent / "inventory-summary.json", {
        "updated_at": output["updated_at"], "scope": output["scope"], **output["summary"],
    })
    return output


def run(args):
    target = Path(args.output).resolve()
    pages, maps = {}, []
    started = now()
    if args.resume and target.exists():
        previous = read_snapshot(target)
        if previous.get("host") != HOST or previous.get("schema_version") != 1:
            raise ValueError("Cannot resume an incompatible inventory")
        pages = {p["url"]: p for p in previous["pages"] if not scope_reason(p["url"])}
        for page in pages.values():
            page["family"], page["locale"] = classify(page["url"])
        if args.refresh_inspected:
            pages = {
                url: {**page_record(url, page["sources"][0], page["last_modified"]),
                      "sources": page["sources"]}
                if page["status"] == "inspected" else page
                for url, page in pages.items()
            }
        maps = [
            {**entry, "status": "scope_excluded", "exclusion_reason": scope_reason(entry["url"])}
            if scope_reason(entry["url"]) else entry
            for entry in previous["sitemaps"]
        ]
        started = previous["started_at"]
    fetcher = Fetcher(delay=args.delay)
    robot_response = fetcher.get(f"{ORIGIN}/robots.txt")
    if robot_response["status"] != "ok":
        raise RuntimeError(f"Cannot establish robots policy: {robot_response['status']}")
    robots_text = robot_response["body"].decode("utf-8")
    robots = Robots(robots_text)
    fetcher.robots = robots
    fetcher.delay = max(fetcher.delay, robots.delay)
    robot_evidence = {"url": f"{ORIGIN}/robots.txt", "checked_at": now(), "text": robots_text}
    add_page(pages, START, "homepage")

    sitemap_queue = deque(normalize(url, ORIGIN) for url in robots.sitemaps)
    for entry in maps:
        sitemap_queue.extend(entry.get("child_sitemaps", []))
    seen = {entry["url"] for entry in maps}
    with concurrent.futures.ThreadPoolExecutor(max_workers=args.workers) as pool:
        while sitemap_queue:
            batch = []
            while sitemap_queue and len(batch) < args.workers:
                url = sitemap_queue.popleft()
                if not url or url in seen:
                    continue
                seen.add(url)
                batch.append(url)
            for url, result in zip(batch, pool.map(fetcher.get, batch)):
                body = result.pop("body", b"")
                entry = {"url": url, **result, "checked_at": now()}
                if result["status"] == "ok":
                    try:
                        kind, locations = parse_sitemap(body, result["final_url"])
                        entry["kind"] = kind
                        entry["location_count"] = len(locations)
                        external = [row["url"] for row in locations if not same_host(row["url"])]
                        entry["external_locations"] = sorted(set(external))
                        if kind == "sitemapindex":
                            entry["child_sitemaps"] = sorted({
                                row["url"] for row in locations if same_host(row["url"])
                            })
                        for row in locations:
                            if same_host(row["url"]):
                                if kind == "sitemapindex":
                                    sitemap_queue.append(row["url"])
                                else:
                                    add_page(pages, row["url"], url, row["last_modified"])
                    except (ET.ParseError, ValueError) as error:
                        entry["status"] = "invalid_sitemap"
                        entry["error"] = str(error)
                maps.append(entry)
            if len(maps) % 20 < args.workers:
                print(f"Sitemaps: {len(maps)}; known URLs: {len(pages)}", flush=True)
                save(target, pages, maps, robot_evidence, started)
    save(target, pages, maps, robot_evidence, started)
    print(f"Sitemap discovery finished: {len(maps)} maps, {len(pages)} URLs", flush=True)

    checked = 0
    with concurrent.futures.ThreadPoolExecutor(max_workers=args.workers) as pool:
        while checked < args.page_budget:
            pending = sorted(
                (p for p in pages.values() if p["status"] == "discovered"),
                key=lambda p: (priority(p), p["url"]),
            )
            batch = pending[:min(args.workers, args.page_budget - checked)]
            if not batch:
                break
            for record in pool.map(lambda p: scan_page(fetcher, p), batch):
                pages[record["url"]] = record
                checked += 1
                source = "homepage" if record["url"] == START else record["url"]
                for url in record.get("internal_links", []):
                    if not ASSET_EXTENSION.search(urllib.parse.urlsplit(url).path):
                        add_page(pages, url, source)
                for redirect in record.get("redirects", []):
                    add_page(pages, redirect["to"], record["url"])
            if checked % 20 < args.workers:
                print(f"Pages inspected this run: {checked}; known URLs: {len(pages)}", flush=True)
                save(target, pages, maps, robot_evidence, started)
    output = save(target, pages, maps, robot_evidence, started)
    print(json.dumps(output["summary"], indent=2))


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", default=str(ROOT / "data/site-inventory.json.gz"))
    parser.add_argument("--resume", action="store_true")
    parser.add_argument("--refresh-inspected", action="store_true",
                        help="With --resume, requeue previously inspected HTML pages.")
    parser.add_argument("--page-budget", type=int, default=120,
                        help="Maximum HTML URL inspections this run; pending URLs remain explicit.")
    parser.add_argument("--workers", type=int, default=3)
    parser.add_argument("--delay", type=float, default=0.35)
    args = parser.parse_args()
    if args.page_budget < 0 or not 1 <= args.workers <= 4 or args.delay < 0.25:
        parser.error("Require page-budget >= 0, 1-4 workers, and delay >= 0.25 seconds")
    if args.refresh_inspected and not args.resume:
        parser.error("--refresh-inspected requires --resume")
    run(args)
