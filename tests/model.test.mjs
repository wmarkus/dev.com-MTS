import assert from "node:assert/strict";
import test from "node:test";
import { decisionFile, filterPages, pageWindow, safeLink, validateDecisions } from "../src/model.mjs";

const pages = [
  { url: "https://developer.microsoft.com/en-us/", family: "developer-center", locale: "en-us", status: "inspected", title: "Microsoft Developer" },
  { url: "https://developer.microsoft.com/ja-jp/windows/", family: "windows", locale: "ja-jp", status: "discovered" },
];
const known = new Set(pages.map((page) => page.url));

test("filters combine route, locale, evidence and decision without mutating source", () => {
  const result = filterPages(pages, { search: "MICROSOFT", locale: "en-us", decision: "keep" },
    { [pages[0].url]: { decision: "keep" } });
  assert.equal(result.length, 1);
  assert.equal(pages.length, 2);
  assert.equal(filterPages(pages, { search: "", evidence: "discovered" }, {}).length, 1);
  assert.equal(filterPages(pages, { search: "", decision: "undecided" }, {}).length, 2);
});

test("pagination clamps invalid indices and handles an empty list", () => {
  assert.deepEqual(pageWindow([], 5), { total: 1, current: 0, items: [] });
  const many = Array.from({ length: 81 }, (_, i) => i);
  assert.deepEqual(pageWindow(many, 7), { total: 3, current: 2, items: [80] });
  assert.equal(pageWindow(many, -3).current, 0);
});

test("review JSON round trips and preserves notes", () => {
  const review = { [pages[0].url]: { decision: "keep", note: "Retain navigation" } };
  assert.deepEqual(validateDecisions(decisionFile(review), known), review);
});

test("invalid and cross-inventory imports are rejected atomically", () => {
  for (const value of [null, [], {}, { schema_version: 2, decisions: [] },
    { schema_version: 1, decisions: [{ url: "https://evil.test/", decision: "keep" }] },
    { schema_version: 1, decisions: [{ url: pages[0].url, decision: "delete" }] },
    { schema_version: 1, decisions: [{ url: pages[0].url, decision: "keep", note: 12 }] },
    { schema_version: 1, decisions: [{ url: pages[0].url, decision: "keep", note: "a".repeat(2001) }] },
    { schema_version: 1, decisions: [
      { url: pages[0].url, decision: "keep" }, { url: pages[0].url, decision: "remove" },
    ] },
  ]) assert.throws(() => validateDecisions(value, known));
});

test("only ordinary web links are clickable", () => {
  assert.equal(safeLink("javascript:alert(1)"), false);
  assert.equal(safeLink("data:text/html,<script>"), false);
  assert.equal(safeLink("https://user:password@example.com"), false);
  assert.equal(safeLink(pages[0].url), true);
});
