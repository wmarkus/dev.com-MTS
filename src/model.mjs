export const decisions = ["undecided", "keep", "consolidate", "remove"];
export const pageSize = 40;

export function validateDecisions(value, knownUrls) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new Error("The decision file must contain a JSON object.");
  }
  if (value.schema_version !== 1 || !Array.isArray(value.decisions)) {
    throw new Error("Use a version 1 decision export from this workspace.");
  }
  const result = {};
  for (const row of value.decisions) {
    if (!row || typeof row !== "object" || typeof row.url !== "string" ||
        !knownUrls.has(row.url) || !decisions.includes(row.decision)) {
      throw new Error("The file contains an invalid decision or a route outside this inventory.");
    }
    if (Object.hasOwn(result, row.url)) {
      throw new Error("The file contains duplicate decisions for a route.");
    }
    if (row.note != null && (typeof row.note !== "string" || row.note.length > 2000)) {
      throw new Error("Review notes must be text of no more than 2,000 characters.");
    }
    result[row.url] = { decision: row.decision, note: row.note || "" };
  }
  return result;
}

export function decisionFile(review, timestamp = new Date().toISOString()) {
  return {
    schema_version: 1,
    exported_at: timestamp,
    source: "https://developer.microsoft.com/en-us/",
    decisions: Object.entries(review).map(([url, row]) => ({ url, ...row })),
  };
}

export function filterPages(pages, filters, review) {
  const search = filters.search.trim().toLocaleLowerCase();
  return pages.filter((page) =>
    (!search || `${page.title || ""} ${page.url}`.toLocaleLowerCase().includes(search)) &&
    (!filters.family || page.family === filters.family) &&
    (!filters.locale || page.locale === filters.locale) &&
    (!filters.evidence || page.status === filters.evidence) &&
    (!filters.decision || (review[page.url]?.decision || "undecided") === filters.decision)
  );
}

export function pageWindow(items, index) {
  const total = Math.max(1, Math.ceil(items.length / pageSize));
  const current = Math.max(0, Math.min(index, total - 1));
  return { total, current, items: items.slice(current * pageSize, (current + 1) * pageSize) };
}

export function safeLink(url) {
  try {
    const parsed = new URL(url);
    return ["https:", "http:"].includes(parsed.protocol) && !parsed.username && !parsed.password;
  } catch {
    return false;
  }
}
