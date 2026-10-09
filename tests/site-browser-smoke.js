(async (page) => {
  const base = "http://127.0.0.1:4174";
  const browser = page.context().browser();
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const local = await context.newPage();
  const assert = (value, message) => { if (!value) throw new Error(message); };
  const results = [];
  try {
    await local.goto(`${base}/en-us/`, { waitUntil: "domcontentloaded", timeout: 60000 });
    await local.waitForSelector("uhf-dropdown-desktop", { timeout: 20000 });
    assert(await local.title() === "Microsoft Developer", "Homepage title changed");
    assert(await local.locator("h1").textContent() === "Connect, code, and grow", "Source homepage heading missing");
    assert(await local.locator("#mainContent").count() === 1, "Original main content absent");
    const github = local.getByRole("tab", { name: "GitHub", exact: true });
    await github.click();
    await local.waitForFunction(() => document.querySelector("#features-products-github")?.classList.contains("show"));
    assert(await github.getAttribute("aria-selected") === "true", "Product tab did not activate");
    await local.getByRole("tab", { name: "Azure", exact: true }).first().click();
    await local.waitForFunction(() => document.querySelector("#features-products-azure")?.classList.contains("show"));
    const allPanels = await local.locator('[role="tabpanel"]').count();
    assert(allPanels === 10, `Expected ten original product/learning panels, found ${allPanels}`);
    assert(await local.locator('a[href="https://developer.microsoft.com/en-us/microsoft-365"]').count() > 0,
      "Excluded M365 destination was incorrectly made local");
    await local.evaluate(() => {
      for (const image of document.images) image.loading = "eager";
    });
    await local.waitForTimeout(2000);
    const brokenHomepageImages = await local.evaluate(() => [...document.images]
      .filter((image) => image.complete && !image.naturalWidth)
      .map((image) => image.currentSrc || image.src));
    assert(brokenHomepageImages.length === 0, `Homepage images missing: ${brokenHomepageImages.join(", ")}`);
    await local.evaluate(() => scrollTo(0, 0));
    await local.screenshot({ path: ".playwright-mcp/final-home-desktop.png" });
    results.push({ homepage: "content, panels, image assets and excluded links verified" });

    await local.goto(`${base}/en-us/reactor/`, { waitUntil: "domcontentloaded", timeout: 60000 });
    await local.waitForFunction(() => document.querySelectorAll("li.grid-item[pw-id]").length > 0);
    const initialUrl = local.url();
    await local.waitForTimeout(700);
    assert(local.url() === initialUrl, "Reactor is in an automatic reload loop");
    await local.locator("#search-input").fill("Azure");
    await local.locator("#search-input").press("Enter");
    await local.waitForFunction(() => location.search.includes("search=Azure"));
    await local.waitForTimeout(500);
    const cards = await local.locator("li.grid-item[pw-id]").count();
    assert(cards > 0 && cards <= 9, "Local Reactor catalog did not render paginated search results");
    assert(await local.locator("#timeZoneOffset").isDisabled(), "UTC snapshot boundary must be explicit");
    await local.screenshot({ path: ".playwright-mcp/final-reactor-desktop.png" });
    results.push({ reactor: "local API, search, nine-card pagination and stable page load verified" });

    const routes = ["/en-us/azure", "/en-us/windows/", "/en-us/advocates/",
      "/en-us/azure-devops/components/button", "/en-us/reactor/events/13174/"];
    for (const route of routes) {
      const response = await local.goto(base + route, { waitUntil: "domcontentloaded", timeout: 60000 });
      assert(response.status() === 200, `Included route failed: ${route}`);
      await local.waitForTimeout(400);
      assert(await local.locator("h1,h2").count() > 0, `Included route has no rendered content: ${route}`);
    }
    const missing = await local.request.get(`${base}/en-us/a-page-that-does-not-exist`);
    assert(missing.status() === 404, "Unknown routes must not masquerade as a captured page");
    const privateFile = await local.request.get(`${base}/.git/config`);
    assert(privateFile.status() === 404, "Repository internals must not be served");
    const search = await local.request.get(`${base}/__mirror/search?q=Azure`);
    assert(search.status() === 200 && (await search.text()).includes("matching URL records"), "Local search failed");
    results.push({ routes: routes.length, isolation: "404 boundaries and local search verified" });

    await local.setViewportSize({ width: 390, height: 844 });
    await local.goto(`${base}/en-us/`, { waitUntil: "domcontentloaded", timeout: 60000 });
    await local.waitForTimeout(1000);
    assert(await local.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 2), "Mobile homepage overflows");
    await local.screenshot({ path: ".playwright-mcp/final-home-mobile.png" });
    await local.goto(`${base}/en-us/reactor/`, { waitUntil: "domcontentloaded", timeout: 60000 });
    await local.waitForFunction(() => document.querySelectorAll("li.grid-item[pw-id]").length > 0);
    await local.screenshot({ path: ".playwright-mcp/final-reactor-mobile.png" });
    results.push({ mobile: "390px homepage and Reactor rendered" });
    return { passed: true, results };
  } finally {
    await context.close();
  }
})
