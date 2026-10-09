import { decisions, decisionFile, filterPages, pageWindow, safeLink, validateDecisions } from "./model.mjs";

const $ = (selector) => document.querySelector(selector);
const storageKey = "devcom-migration-decisions-v1";
const state = { pages: [], review: {}, page: 0, selected: null, matches: [] };
const format = new Intl.NumberFormat("en-US");

function node(tag, text, className) {
  const element = document.createElement(tag);
  if (text !== undefined) element.textContent = text;
  if (className) element.className = className;
  return element;
}

function label(value) {
  return value.replaceAll("_", " ").replaceAll("-", " ");
}

function message(text, error = false) {
  $("#message").textContent = text;
  $("#message").classList.toggle("error", error);
  $("#message").setAttribute("role", error ? "alert" : "status");
}

function link(url, text = url) {
  const anchor = node("a", text);
  if (safeLink(url)) {
    anchor.href = url;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
  }
  return anchor;
}

async function loadJson(path) {
  const response = await fetch(path);
  if (!response.ok) throw new Error(`${path} returned HTTP ${response.status}.`);
  return response.json();
}

function addOptions(selector, values) {
  for (const value of values.sort()) {
    const option = node("option", label(value));
    option.value = value;
    $(selector).append(option);
  }
}

function readFilters() {
  return Object.fromEntries(["search", "family", "locale", "evidence", "decision"].map(
    (key) => [key, $(`#${key}`).value]
  ));
}

function showView(view) {
  for (const section of document.querySelectorAll(".view")) section.hidden = section.id !== view;
  for (const button of document.querySelectorAll("[data-view]")) {
    if (button.dataset.view === view) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  }
}

function renderRoutes() {
  state.matches = filterPages(state.pages, readFilters(), state.review);
  const window = pageWindow(state.matches, state.page);
  state.page = window.current;
  const rows = document.createDocumentFragment();
  for (const page of window.items) {
    const row = node("tr");
    row.classList.toggle("selected", state.selected === page.url);
    const title = node("td");
    const button = node("button", page.title || new URL(page.url).pathname, "route-button");
    button.type = "button";
    button.setAttribute("aria-label", `Inspect ${new URL(page.url).pathname}`);
    button.addEventListener("click", () => {
      state.selected = page.url;
      renderRoutes();
      renderDetail(page, true);
    });
    title.append(button, node("span", new URL(page.url).pathname + new URL(page.url).search, "route-path"));
    const evidence = node("td");
    evidence.append(node("span", label(page.status), `status ${page.status}`));
    row.append(title, node("td", label(page.family)), evidence,
      node("td", state.review[page.url]?.decision || "undecided"));
    rows.append(row);
  }
  $("#rows").replaceChildren(rows);
  $("#empty").hidden = state.matches.length !== 0;
  $("#results").textContent = `${format.format(state.matches.length)} matching routes`;
  $("#results").setAttribute("aria-live", "polite");
  $("#page-number").textContent = `Page ${window.current + 1} of ${format.format(window.total)}`;
  $("#previous").disabled = window.current === 0;
  $("#next").disabled = window.current + 1 === window.total;
}

function persistReview() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(decisionFile(state.review)));
    message("Review saved in this browser. Export your decisions to keep a portable copy.");
  } catch (error) {
    message(`Could not save in this browser: ${error.message} Export decisions before closing.`, true);
  }
}

function addLinkList(parent, title, urls) {
  if (!urls?.length) return;
  const disclosure = node("details");
  disclosure.append(node("summary", `${title} (${format.format(urls.length)})`));
  const list = node("ul", undefined, "url-list");
  for (const url of urls) {
    const item = node("li");
    item.append(link(url));
    list.append(item);
  }
  disclosure.append(list);
  parent.append(disclosure);
}

function renderDetail(page, focus = false) {
  const panel = $("#detail");
  const heading = node("h3", page.title || new URL(page.url).pathname);
  heading.tabIndex = -1;
  panel.replaceChildren(heading, link(page.url, "Open original page ↗"));
  const facts = node("dl");
  for (const [name, value] of [
    ["Locale", page.locale], ["Evidence", label(page.status)], ["Capture", "See site/manifest.json"],
    ["Checked", page.checked_at || "Not yet inspected"], ["Last modified", page.last_modified || "Not supplied"],
    ["HTTP", page.http_status || "Not recorded"],
  ]) facts.append(node("dt", name), node("dd", String(value)));
  panel.append(facts);
  if (page.error) panel.append(node("p", page.error, "error"));
  if (page.final_url && page.final_url !== page.url) {
    const redirect = node("p", "Final destination: ");
    redirect.append(link(page.final_url));
    panel.append(redirect);
  }
  const choiceLabel = node("label", "Migration decision");
  const select = node("select");
  select.id = "route-decision";
  for (const value of decisions) {
    const option = node("option", label(value));
    option.value = value;
    select.append(option);
  }
  select.value = state.review[page.url]?.decision || "undecided";
  choiceLabel.append(select);
  const noteLabel = node("label", "Rationale / consolidation target");
  const note = node("textarea");
  note.id = "route-note";
  note.rows = 4;
  note.maxLength = 2000;
  note.value = state.review[page.url]?.note || "";
  noteLabel.append(note);
  const save = node("button", "Save decision");
  save.type = "button";
  save.addEventListener("click", () => {
    state.review[page.url] = { decision: select.value, note: note.value };
    persistReview();
    renderRoutes();
  });
  panel.append(choiceLabel, noteLabel, save);
  panel.append(node("p", "A decision changes the review only. It does not copy, delete, publish or redirect a page.", "footnote"));
  const sources = node("details");
  sources.append(node("summary", "Discovery evidence"));
  for (const source of page.sources) {
    const paragraph = node("p");
    paragraph.append(safeLink(source) ? link(source) : node("span", source));
    sources.append(paragraph);
  }
  panel.append(sources);
  addLinkList(panel, "Same-host links (may include excluded areas)", page.internal_links);
  addLinkList(panel, "External destinations (not migrated)", page.external_links);
  addLinkList(panel, "Asset references (not downloaded)", page.asset_urls);
  addLinkList(panel, "Embedded frames", page.iframe_urls);
  if (focus) heading.focus({ preventScroll: false });
}

function renderHomepage(data) {
  $("#home-evidence").textContent = `${data.evidence} ${format.format(data.counts.links)} links; ${data.counts.image_elements} image elements; ${data.counts.buttons} buttons.`;
  for (const section of data.sections) {
    const item = node("article");
    item.append(node("h3", section.name), node("p", section.structure),
      node("p", section.migration_requirement, "requirement"));
    $("#home-sections").append(item);
  }
  for (const item of data.cross_cutting) $("#home-requirements").append(node("li", item));
}

function renderCoverage(data) {
  const summary = data.summary;
  $("#coverage-summary").append(node("p",
    `${format.format(summary.known_urls)} URL records across ${Object.keys(summary.families).length} areas and ${Object.keys(summary.locales).length} locale groups. ${format.format(summary.inspected_pages)} HTML pages inspected in the initial metadata pass; ${format.format(summary.uninspected_urls)} were not inspected in that pass. ${summary.sitemaps_unavailable} of ${summary.sitemaps_checked} sitemap sources were unavailable. Capture results are tracked separately in site/manifest.json.`
  ));
  const list = node("dl", undefined, "coverage-counts");
  for (const [status, count] of Object.entries(summary.page_statuses)) {
    list.append(node("dt", label(status)), node("dd", format.format(count)));
  }
  $("#coverage-summary").append(list);
  for (const sitemap of data.sitemaps.filter((item) => !["ok", "scope_excluded"].includes(item.status))) {
    const item = node("article");
    item.append(link(sitemap.url), node("p", `${label(sitemap.status)}${sitemap.error ? `: ${sitemap.error}` : ""}`));
    if (sitemap.final_url !== sitemap.url) item.append(link(sitemap.final_url, `Destination: ${sitemap.final_url}`));
    $("#sitemap-errors").append(item);
  }
  for (const note of summary.coverage_notes) $("#coverage-notes").append(node("li", note));
}

function renderHandoff(contract) {
  for (const blocker of contract.blockers) $("#blockers").append(node("li", blocker.detail));
  for (const source of contract.integration_evidence) {
    const item = node("article");
    const heading = node("h4");
    heading.append(link(source.url, source.name));
    item.append(heading, node("p", source.finding),
      node("p", `Verified ${source.verified_on}`, "footnote"));
    $("#integration-evidence").append(item);
  }
}

async function initialize() {
  try {
    const [inventory, homepage, contract] = await Promise.all([
      loadJson("/data/site-inventory.json"), loadJson("/data/homepage-structure.json"),
      loadJson("/data/migration-contract.json"),
    ]);
    if (inventory.schema_version !== 1 || !Array.isArray(inventory.pages)) {
      throw new Error("Unsupported inventory format. Regenerate it with scripts/inventory.py.");
    }
    state.pages = inventory.pages;
    const knownUrls = new Set(state.pages.map((page) => page.url));
    message("English scope applied; Reactor included. Blog, Edge, games and Microsoft 365 excluded. All other decisions remain open.");
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) state.review = validateDecisions(JSON.parse(stored), knownUrls);
    } catch (error) {
      message(`Saved review could not be loaded: ${error.message} Your stored data has not been overwritten.`, true);
    }
    addOptions("#family", Object.keys(inventory.summary.families));
    addOptions("#locale", Object.keys(inventory.summary.locales));
    addOptions("#evidence", Object.keys(inventory.summary.page_statuses));
    $("#totals").textContent = `${format.format(inventory.pages.length)} known URL records · ${format.format(inventory.summary.inspected_pages)} inspected HTML pages`;
    $("#updated").textContent = `Updated ${new Date(inventory.updated_at).toLocaleString("en-US", { timeZone: "America/Los_Angeles" })} PT`;
    renderRoutes();
    renderHomepage(homepage);
    renderCoverage(inventory);
    renderHandoff(contract);
    $("#export").disabled = false;
    $("#import").disabled = false;
    $("#export").addEventListener("click", () => {
      const blob = new Blob([JSON.stringify(decisionFile(state.review), null, 2) + "\n"], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = "migration-decisions.json";
      anchor.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      message(`Exported ${Object.keys(state.review).length} explicit review decisions. Unreviewed routes remain undecided.`);
    });
    $("#import").addEventListener("change", async (event) => {
      const file = event.target.files[0];
      if (!file) return;
      try {
        if (file.size > 20_000_000) throw new Error("Decision imports must be smaller than 20 MB.");
        const imported = validateDecisions(JSON.parse(await file.text()), knownUrls);
        state.review = { ...state.review, ...imported };
        persistReview();
        renderRoutes();
        const selected = state.pages.find((page) => page.url === state.selected);
        if (selected) renderDetail(selected);
      } catch (error) {
        message(`Import rejected without changing the review: ${error.message}`, true);
      } finally {
        event.target.value = "";
      }
    });
  } catch (error) {
    message(`Inventory could not load: ${error.message} Run python3 scripts/inventory.py, then reload.`, true);
  }
}

$("#filters").addEventListener("submit", (event) => event.preventDefault());
for (const input of document.querySelectorAll("#filters input, #filters select")) {
  input.addEventListener("input", () => { state.page = 0; renderRoutes(); });
}
$("#previous").addEventListener("click", () => { state.page -= 1; renderRoutes(); });
$("#next").addEventListener("click", () => { state.page += 1; renderRoutes(); });
for (const button of document.querySelectorAll("[data-view]")) {
  button.addEventListener("click", () => showView(button.dataset.view));
}
initialize();
