"""Shared URL, parsing and rewriting rules for the authorized static recreation."""

import hashlib
import json
import mimetypes
import re
import subprocess
from pathlib import Path
from urllib.parse import parse_qsl, urlencode, urljoin, urlsplit, urlunsplit

from lxml import etree, html
import tinycss2

from inventory import HOST, ORIGIN, START, classify, normalize, scope_reason

RESOURCE_EXT = re.compile(
    r"\.(?:css|m?js|png|jpe?g|gif|svg|webp|avif|ico|woff2?|ttf|otf|eot|mp4|webm|mp3|vtt|pdf)(?:$|\?)",
    re.I,
)
TELEMETRY = re.compile(
    r"clarity|facebook-tag|fbevents|ms[.-]analytics|oned[sS]-|1ds-analytics|1ds-data-bi|"
    r"/analytics[.\-/]|/at-config[.]|/at[.]\d|wcp-consent|cookie-banner-init|"
    r"applicationinsights|appinsights|msadsdk|/ai[.]2[.]min[.]js", re.I,
)
FLOW = re.compile(r"/(?:auth/|home/setculture|home/settimezone|register/|registration/)", re.I)
PRIVATE_QUERY = {"access_token", "id_token", "token", "sig", "signature", "code"}
JS_STRING = re.compile(r"""(?P<quote>["'`])(?P<url>(?:https?:)?//[^\s"'`<>]+|(?:\./|\.\./|/)[^\s"'`<>]+|[\w.-]+\.(?:m?js|css|png|jpg|jpeg|gif|svg|webp|woff2?|ttf|mp4))(?P=quote)""")
CSS_URL = re.compile(r"""url\(\s*(?P<quote>["']?)(?P<url>[^)"']+)(?P=quote)\s*\)""", re.I)


def resource_url(value, base):
    if not value or value.startswith(("data:", "blob:", "#", "javascript:")):
        return None
    absolute = urljoin(base, value.strip())
    return normalize(absolute, base)


def asset_key(url):
    return hashlib.sha256(url.encode()).hexdigest()[:24]


def asset_route(url):
    return f"/__mirror/assets/{asset_key(url)}"


def page_file(url):
    return f"site/pages/{asset_key(url)}.html"


def asset_file(url, content_type):
    extension = mimetypes.guess_extension(content_type.split(";")[0].strip()) or ".bin"
    extension = {".jpe": ".jpg", ".jpeg": ".jpg", ".htm": ".html"}.get(extension, extension)
    key = asset_key(url)
    return f"site/assets/{key[:2]}/{key}{extension}"


def is_flow(url):
    return bool(FLOW.search(urlsplit(url).path))


def public_reference(url):
    parsed = urlsplit(url)
    query = [(key, "[redacted]" if key.lower() in PRIVATE_QUERY else value)
             for key, value in parse_qsl(parsed.query, keep_blank_values=True)]
    return urlunsplit((parsed.scheme, parsed.netloc, parsed.path, urlencode(query), ""))


def local_page_link(value, base):
    absolute = resource_url(value, base)
    if not absolute:
        return value
    fragment = urlsplit(urljoin(base, value)).fragment
    if scope_reason(absolute) or is_flow(absolute):
        return absolute + (f"#{fragment}" if fragment else "")
    parsed = urlsplit(absolute)
    return parsed.path + (f"?{parsed.query}" if parsed.query else "") + (f"#{fragment}" if fragment else "")


def rewrite_css(text, base, dependencies):
    rules = tinycss2.parse_stylesheet(text, skip_comments=False, skip_whitespace=False)

    def replace(value):
        url = resource_url(value, base)
        if not url:
            return value
        dependencies.add(url)
        return asset_route(url)

    def walk(tokens):
        for token in tokens:
            if token.type == "url":
                token.value = replace(token.value)
                token.representation = f'url({json.dumps(token.value)})'
            elif token.type == "function" and token.lower_name == "url":
                value = tinycss2.serialize(token.arguments).strip().strip("\"'")
                token.arguments = tinycss2.parse_component_value_list(json.dumps(replace(value)))
            elif token.type == "at-rule" and token.lower_at_keyword == "import":
                for child in token.prelude:
                    if child.type == "string":
                        child.value = replace(child.value)
                        child.representation = json.dumps(child.value)
                        break
            for attr in ("content", "prelude", "arguments"):
                nested = getattr(token, attr, None)
                if nested:
                    walk(nested)
    walk(rules)
    return tinycss2.serialize(rules)


def rewrite_inline_style(text, base, dependencies):
    def replace(match):
        url = resource_url(match["url"], base)
        if not url:
            return match[0]
        dependencies.add(url)
        return f'url("{asset_route(url)}")'
    return CSS_URL.sub(replace, text)


def rewrite_script(text, base, dependencies):
    if not re.search(r"\.(?:m?js|css|png|jpe?g|gif|svg|webp|woff2?|ttf|mp4)\b", text) and "url(" not in text and "@import" not in text:
        return text
    tokenized = subprocess.run(
        ["node", str(Path(__file__).with_name("js_strings.mjs"))],
        input=text, text=True, capture_output=True, check=True,
    )
    replacements = []
    public_path = re.search(r"""\b\w+\.p\s*=\s*["']([^"']+)["']""", text)
    for start, end, value in json.loads(tokenized.stdout):
        updated = value
        if "url(" in value or "@import" in value:
            def css_reference(match):
                resource = match["url"].strip()
                if resource.startswith("+") or any(char in resource for char in ("{", "}", "\\", "<")):
                    return match[0]
                url = resource_url(resource, START)
                if not url:
                    return match[0]
                dependencies.add(url)
                return f"url({asset_route(url)})"
            updated = CSS_URL.sub(css_reference, value)
        elif RESOURCE_EXT.search(value) and not any(char in value for char in ("\\", "{", "}", " ")):
            dependency_base = urljoin(base, public_path[1]) if (
                public_path and value.startswith(("static/", "assets/"))
            ) else base
            url = resource_url(value, dependency_base)
            if url and not TELEMETRY.search(url):
                dependencies.add(url)
                if value.startswith(("https://", "http://", "//", "./", "../")):
                    updated = asset_route(url)
        if updated != value:
            replacements.append((start, end, json.dumps(updated, ensure_ascii=True)))
    encoded = text.encode("utf-16-le")
    for start, end, replacement in reversed(replacements):
        encoded = encoded[:start * 2] + replacement.encode("utf-16-le") + encoded[end * 2:]
    return encoded.decode("utf-16-le")


def rewrite_srcset(value, base, dependencies):
    if value.lstrip().startswith("data:"):
        return value
    items = []
    for candidate in value.split(","):
        parts = candidate.strip().split()
        if not parts:
            continue
        url = resource_url(parts[0], base)
        if url:
            dependencies.add(url)
            parts[0] = asset_route(url)
        items.append(" ".join(parts))
    return ", ".join(items)


def extract_page(body, url):
    document = html.document_fromstring(body, base_url=url)
    dependencies, links, suppressed = set(), set(), set()
    base_nodes = document.xpath("//base[@href]")
    base = urljoin(url, base_nodes[0].get("href")) if base_nodes else url
    for node in document.xpath("//base"):
        node.drop_tree()
    language = document.get("lang", "")
    title = document.xpath("string(//head/title)").strip()
    if language and not re.fullmatch(r"en(?:[-_][a-z0-9]+)*", language, re.I):
        return {"status": "excluded_language", "language": language, "title": title}
    for node in document.xpath("//script"):
        src = resource_url(node.get("src"), base)
        content = node.text or ""
        if (src and TELEMETRY.search(src)) or (
            not src and re.search(r"instrumentationKey|clarityProjectId|enableAdobeTarget|appInsightsSDK", content, re.I)
        ):
            suppressed.add(public_reference(src) if src else "inline telemetry configuration")
            node.drop_tree()
        elif not src and "ump(" in content and "developerStoryVideoUMP" in content:
            # Keep the full original video instead of importing its tracking-enabled player.
            match = re.search(r'"src":\s*"(https://[^"]+\.m3u8)"', content)
            target = document.get_element_by_id("developerStoryVideoUMP", None)
            if match and target is not None:
                playlist = match[1]
                dependencies.add(playlist)
                video = etree.Element("video", controls="controls", preload="none",
                                      style="width:100%;height:100%;object-fit:cover")
                video.set("src", asset_route(playlist))
                video.set("data-local-hls", asset_route(playlist))
                dependencies.add("https://cdn.jsdelivr.net/npm/hls.js@1.6.13/dist/hls.min.js")
                poster = resource_url("/_devcom/images/views/index/v3/developer-story/video-thumbnail-porsche-cup.jpg", base)
                dependencies.add(poster)
                video.set("poster", asset_route(poster))
                for caption in re.finditer(r'"locale":\s*"en-us",\s*"url":\s*"([^"]+)"', content):
                    dependencies.add(caption[1])
                    video.append(etree.Element("track", kind="captions", srclang="en", label="English",
                                               src=asset_route(caption[1])))
                target.text = None
                for child in list(target):
                    target.remove(child)
                target.append(video)
                node.drop_tree()
    for node in document.xpath(
        "//input[@name='__RequestVerificationToken'] | "
        "//meta[translate(@http-equiv,'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz')='content-security-policy'] | "
        "//link[@rel='preconnect' or @rel='dns-prefetch']"
    ):
        node.drop_tree()
    for node in document.iter():
        if not isinstance(node.tag, str):
            continue
        tag = node.tag.lower()
        for name in list(node.attrib):
            if name.lower() in ("integrity", "crossorigin", "nonce") or "tenantid" in name.lower():
                del node.attrib[name]
        if tag == "a" and node.get("href"):
            original = resource_url(node.get("href"), base)
            if original and not scope_reason(original) and not is_flow(original):
                links.add(original)
            node.set("href", local_page_link(node.get("href"), base))
        if tag in ("img", "script", "source", "video", "audio", "track", "input"):
            for attribute in ("src", "poster", "data-src", "data-background-image"):
                value = node.get(attribute)
                if value and value.startswith("/__mirror/"):
                    continue
                asset = resource_url(value, base)
                if asset and not TELEMETRY.search(asset):
                    dependencies.add(asset)
                    node.set(attribute, asset_route(asset))
            if node.get("srcset"):
                node.set("srcset", rewrite_srcset(node.get("srcset"), base, dependencies))
        if tag == "link" and node.get("href"):
            roles = set(node.get("rel", "").lower().split())
            if roles & {"stylesheet", "icon", "preload", "modulepreload", "apple-touch-icon"}:
                asset = resource_url(node.get("href"), base)
                if asset:
                    dependencies.add(asset)
                    node.set("href", asset_route(asset))
        if node.get("style"):
            node.set("style", rewrite_inline_style(node.get("style"), base, dependencies))
        if tag == "style" and node.text:
            node.text = rewrite_css(node.text, base, dependencies)
        if tag == "script" and node.text and node.get("type", "").lower() not in (
            "application/json", "application/ld+json",
        ):
            if classify(url)[0] == "azure-devops":
                node.text = node.text.replace(".childNodes[1].data.trim()", ".textContent.trim()")
            node.text = rewrite_script(node.text, base, dependencies)
        if tag == "form":
            action = resource_url(node.get("action", url), base)
            node.set("data-source-action", public_reference(action) if action else url)
            if action and is_flow(action) and "/home/set" not in action:
                node.set("action", action)
            elif action:
                node.set("action", local_page_link(action, base))
        if tag == "iframe" and node.get("src"):
            node.set("src", urljoin(base, node.get("src")))
            node.set("data-external-embed", "true")
    head = document.find("head")
    if head is None:
        head = etree.Element("head")
        document.insert(0, head)
    runtime = etree.Element("script", src="/__mirror/runtime.js")
    head.insert(0, runtime)
    robots = etree.Element("meta", name="robots", content="noindex,nofollow")
    head.insert(0, robots)
    marker = etree.Comment(" Authorized local recreation. External services are not impersonated; analytics disabled. ")
    head.insert(0, marker)
    # Extract editorial text independently of navigation for the local search index.
    main = document.xpath("//main | //*[@role='main'] | //*[@id='mainContent']")
    section = main[0] if main else document.find("body")
    words = " ".join(section.itertext()) if section is not None else ""
    return {
        "status": "captured", "title": title, "language": language or "unspecified",
        "html": html.tostring(document, encoding="utf-8", method="html", doctype="<!doctype html>"),
        "assets": sorted(dependencies), "links": sorted(links),
        "suppressed": sorted(suppressed), "search_text": " ".join(words.split())[:12000],
    }
