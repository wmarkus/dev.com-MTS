# Microsoft Developer website recreation

This repository now contains the **authorized website capture and local
recreation**, alongside its original inventory workspace. The user granted
reproduction permission on October 8, 2026. Framer and Figma work is deferred
until after the repository capture.

Captured HTML, styles, images, fonts, scripts and media live under `site/`.
`site/manifest.json` records the exact outcome for every discovered page and
asset. `site/verification.json`, when generated, records integrity checks and
source-side gaps. A source 404 or inaccessible asset is never replaced with
fabricated content or counted as a successfully captured page.

## Run the recreated website

Use Python 3.12+ with OpenSSL and Node 20+ for capture tooling:

```sh
python3.12 -m venv .venv
.venv/bin/python -m pip install -r requirements.txt
npm ci
.venv/bin/python scripts/serve_site.py --port 4174
```

Open <http://127.0.0.1:4174/en-us/> for the actual site, or
<http://127.0.0.1:4174/en-us/reactor/> for Reactor. The server never proxies a
missing request to the internet. It only serves captured files and the local
Reactor catalog. `/__mirror/status` exposes capture coverage.

The original page structure and content are preserved. Included links resolve
locally; excluded-area and external links stay outbound. Source scripts drive
navigation, tabs, carousels and themes. Necessary local adaptations are:

- Analytics, ad pixels, consent-service calls and ephemeral form tokens are
  removed. The local consent adapter never grants analytics consent.
- Reactor search, filtering and pagination run against a snapshot of every
  page of the public catalog API. Dates are evaluated against capture time.
  Event times remain in the captured UTC timezone; the server-backed timezone
  selector is explicitly disabled rather than presenting incorrect conversions.
- Site search searches captured page text, not Microsoft's live AI backend.
- Account sign-in, registration and subscription services remain on their
  original hosts. The preview does not collect credentials or submit forms.
- The homepage story video uses a local HLS player, English captions and a
  captured 720p rendition rather than the source's tracking-enabled player.
- Large media is split into ordinary repository files below GitHub's file
  size limit and served with byte-range support.

This is a faithful **public-site snapshot**, not a reimplementation of
Microsoft's private CMS, authentication, personalization or registration
infrastructure. External embedded players remain external integrations.

## Current scope

Source: <https://developer.microsoft.com/en-us/>.

- English pages on the exact hostname `developer.microsoft.com`.
- **Include Reactor**, including its English event and series routes.
- **Exclude** the Microsoft Developer blog, Microsoft Edge, games, and Microsoft
  365. The Microsoft 365 family includes Office, Graph, and Teams routes.
- Other hosts are excluded as pages. Links to excluded destinations remain
  references on included pages; those destinations are not recreated.
- Language-neutral paths are candidates until their redirect or HTML language
  confirms English. They are not assumed to be migrated English pages.
- External asset hosts are dependencies, not pages to crawl. This phase records
  asset URLs only and does not download media, scripts, stylesheets, or fonts.

The initial broad discovery was narrowed after the user's English-only and
product-area exclusions. The current inventory contains only included page
records. Earlier out-of-scope sitemap observations remain labeled
`scope_excluded` as discovery evidence, not active migration scope.

## Open the separate review workspace

Requires Python 3.9 or newer. No package installation or build is needed.

```sh
python3 scripts/serve.py --port 4173
```

Open <http://127.0.0.1:4173/>. The server binds to loopback and serves only an
explicit allowlist of workspace files, not `.git`, environment files, or the
rest of the repository.

The workspace provides route search, area/locale/status filters, pagination,
per-route evidence and asset references, keep/consolidate/remove decisions,
JSON import/export, homepage structure, coverage gaps, and the integration
handoff. Decisions are stored **only in the browser** until exported; the tool
does not remove source pages or write to Framer/Figma.

## Evidence and artifacts

| Path | Purpose |
| --- | --- |
| `data/site-inventory.json.gz` | Losslessly compressed route, sitemap, redirect, dependency, and inspection metadata |
| `data/inventory-summary.json` | Human-readable current counts, scope, and coverage caveats |
| `data/homepage-structure.json` | Rendered homepage section inventory, including hidden panels and slides |
| `data/migration-contract.json` | Blockers, content-model proposal, and verified integration references |
| `data/migration-handoff.json.gz` | Generated portable metadata handoff for all discovered routes, with no assumed pruning decisions |
| `scripts/inventory.py` | Resumable, rate-limited, same-host discovery and metadata inspection |
| `scripts/export_handoff.py` | Portable JSON handoff generator; not a native Framer importer |
| `site/pages/` | Captured page HTML, mapped to original URLs by the manifest |
| `site/assets/` and `site/media/` | Locally captured visual/runtime resources and large-media parts |
| `site/reactor-catalog.json` | Public Reactor catalog snapshot for the local API |
| `site/manifest.json` | Page/asset outcomes, redirects, dependency graph, sizes and timestamps |
| `site/verification.json` | Capture integrity report and explicit source-side gaps |

## Continue or refresh the actual capture

```sh
# Refresh the current catalog, then finish every pending page and asset.
.venv/bin/python scripts/capture_reactor.py
.venv/bin/python scripts/capture_site.py --resume

# Retry transient failures and capture any previously size-limited media.
.venv/bin/python scripts/capture_site.py --resume --retry-errors --retry-large-media

# Audit the capture and run offline regression checks.
.venv/bin/python scripts/finalize_capture.py
.venv/bin/python scripts/verify_mirror.py
.venv/bin/python -m unittest discover -s tests -v
npm test
```

There is **no page-count limit** in a normal capture. `--limit` exists only for
development checks and leaves remaining entries explicitly pending. The
capture checkpoints atomically, obeys source robots rules, follows same-host
links, and does not bypass access restrictions. Pages redirected out of scope
remain outbound routes. Downloadable packages/documents are links to the
original download service rather than recreated backend endpoints.

All captured materials retain their original ownership and any embedded
license notices. User authorization is for this migration; it is not a claim
that Microsoft's content or branding has been relicensed as open source.

The original Segoe variable-font URLs currently return 404s; the source's
fallback font stack is retained. Source failures, denied speaker-photo URLs,
and unavailable asset candidates are listed in `site/verification.json`,
including which unavailable asset IDs are actually referenced by page HTML.
These are not replaced with invented images or text.

Gzip keeps the route inventory compact without removing records. The local
server exposes the compressed file as `/data/site-inventory.json` with normal
HTTP content encoding. For direct inspection:

```sh
python3 -c 'import gzip,json; d=json.load(gzip.open("data/site-inventory.json.gz","rt")); print(json.dumps(d["summary"],indent=2))'
```

**Do not equate URL counts with working pages, unique content, or migrated
pages.** Trailing-slash aliases and semantic query variants are preserved until
redirect evidence resolves them.

## Refresh or continue discovery

```sh
# Start a fresh discovery from robots-declared sitemaps, then inspect up to 120 URLs.
python3 scripts/inventory.py

# Resume the saved queue and inspect another 260 URLs.
python3 scripts/inventory.py --resume --page-budget 260

# Requeue previously inspected HTML pages when refreshing their metadata.
python3 scripts/inventory.py --resume --refresh-inspected --page-budget 260

# Inventory consistency and offline tests.
python3 scripts/validate_inventory.py
python3 -m unittest discover -s tests -v
node --test tests/model.test.mjs
```

Sitemap discovery has no page-count cutoff. The **HTML inspection budget is
explicit and bounded**; remaining URLs stay `discovered`, never silently
complete. Requests use at most three workers by default, global pacing,
timeouts, response-size limits, robots rules, and manual redirect handling.
External and excluded-area redirects are recorded without following them.
Access restrictions are recorded without retries or bypasses.

Resume preserves prior observations and follows saved child sitemap references.
It does not refresh already inspected pages unless `--refresh-inspected` is
supplied, and does not retry failed sitemap requests.
Run without `--resume` when a fresh capture is needed. The snapshot is saved
atomically at checkpoints; interruption can lose only the current batch of
unsaved observations.

`tests/browser-smoke.js` is a Playwright page-function smoke suite, runnable with
the Playwright MCP `browser_run_code_unsafe` file input against the local server.
It covers filtering, decisions, persistence, import/export, error presentation,
and desktop/mobile layout; it restores the browser's original review afterward.

## Export a portable handoff

```sh
python3 scripts/export_handoff.py \
  --decisions /absolute/path/to/migration-decisions.json \
  --output /absolute/path/to/migration-handoff.json.gz
```

Omit `--decisions` to export all routes as undecided. Removed/consolidated routes
remain in the handoff for traceability. The output contains metadata, observed
redirects and asset references, with empty content sections and explicit
`not_migrated` / `user_authorized` statuses for this metadata-only handoff. The
actual site capture is separate. It does **not** upload, publish, create
Framer pages, or pretend to be a Framer-native import file.

## Framer and Figma handoff

Verified against official documentation on October 8, 2026:

- [Framer Server API](https://www.framer.com/developers/server-api-quick-start)
  supports project-scoped automation. Its API or an
  [external-agent connection](https://www.framer.com/agents/external/) can build
  editable canvas/CMS content after a destination project is explicitly
  connected. A GitHub repository is not automatically imported as an editable
  Framer site.
- [Figma-to-Framer](https://www.framer.com/solutions/figma-to-html/) transfers
  editable layers via the official plugin. Responsive behavior, interactions,
  reusable components and content bindings still need implementation.
- This is not a verified bidirectional GitHub/Framer/Figma synchronization
  system. Keep content and route mappings in the repository and explicitly
  choose which system owns each design artifact.
- [Framer does not export standalone HTML for self-hosting](https://www.framer.com/help/articles/can-i-export-my-website-to-html-and-self-host-it/).
  Treat the repository implementation and Framer's published site as distinct
  deliverables if code portability is required.

Recommended sequence: finish the authorized repository capture; reconcile
content and assets against the inventory; verify desktop/mobile behavior; create editable
Framer templates and content; make footprint decisions; then apply the
existing Figma design components. No publishing or account changes are
performed by this repository.

## Boundaries and remaining gaps

- Permission was confirmed after the initial inventory-only commit. The
  earlier metadata inventory is not a capture-completion report; use the
  `site/` manifest and verification report for current recreation coverage.
- No Framer project or Figma file/node URL has been supplied, and neither is
  needed for this repository-first phase.
- Published sitemaps and extracted HTML links do not prove exhaustive coverage.
  Client-generated routes, unlisted pages, localized aliases, and inaccessible
  content can remain undiscovered.
- Not every archived Reactor page can be individually visually inspected.
  Representative templates and homepage interactions are checked separately
  from the full file/link integrity audit.
- The homepage inventory includes all observed DOM panels, not a complete
  mobile/theme/keyboard behavior audit. CSS backgrounds, fonts, lazy-loaded
  media, backend search, forms, registration, and personalization need separate
  treatment. No remote form has been submitted.
- The inventory workbench at port 4173 is separate from the recreated website
  at port 4174. It is not the migrated site.
