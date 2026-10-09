(async (page) => {
  const base = "http://127.0.0.1:4173/";
  const key = "devcom-migration-decisions-v1";
  const check = (condition, message) => { if (!condition) throw new Error(message); };
  await page.goto(base);
  await page.waitForFunction(() => document.querySelectorAll("#rows tr").length > 0);
  const savedReview = await page.evaluate((key) => localStorage.getItem(key), key);
  const errors = [];
  const onError = (error) => errors.push(error.message);
  page.on("pageerror", onError);
  try {
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.evaluate(() => window.scrollTo(0, 0));
    check(await page.locator("#rows tr").count() === 40, "Expected a bounded 40-row page");
    const families = await page.locator("#family option").evaluateAll((nodes) => nodes.map((n) => n.value));
    check(families.includes("reactor"), "Reactor must be included");
    check(!families.some((f) => ["blog", "games", "microsoft-edge", "microsoft-365"].includes(f)),
      "Excluded areas must not appear as active families");
    await page.screenshot({ path: ".playwright-mcp/inventory-desktop.png", fullPage: false });
    await page.locator("#search").fill("this-route-does-not-exist-zzzz");
    check(await page.locator("#empty").isVisible(), "Empty-state explanation missing");
    await page.locator("#search").fill("");
    const first = await page.locator("#rows tr").first().textContent();
    await page.locator("#next").click();
    check(await page.locator("#rows tr").first().textContent() !== first, "Pagination did not advance");
    await page.locator("#family").selectOption("reactor");
    check(await page.locator("#rows tr").count() > 0, "No Reactor routes");
    check(await page.locator("#rows tr td:nth-child(2)").evaluateAll(
      (nodes) => nodes.every((n) => n.textContent === "reactor")), "Area filter mixed families");
    await page.locator("#rows .route-button").first().click();
    await page.locator("#route-decision").selectOption("keep");
    await page.locator("#route-note").fill("Temporary smoke-test decision");
    await page.getByRole("button", { name: "Save decision", exact: true }).click();
    const review = await page.evaluate((key) => JSON.parse(localStorage.getItem(key)), key);
    check(review.decisions.some((d) => d.note === "Temporary smoke-test decision"), "Decision did not persist");
    await page.reload();
    await page.waitForFunction(() => document.querySelectorAll("#rows tr").length > 0);
    const afterReload = await page.evaluate((key) => localStorage.getItem(key), key);
    check(JSON.parse(afterReload).decisions.some((d) => d.note === "Temporary smoke-test decision"),
      "Decision did not survive reload");
    const downloadPromise = page.waitForEvent("download");
    await page.locator("#export").click();
    const download = await downloadPromise;
    check(download.suggestedFilename() === "migration-decisions.json", "Wrong export filename");
    await page.locator("#import").setInputFiles({
      name: "invalid.json", mimeType: "application/json",
      buffer: Buffer.from(JSON.stringify({
        schema_version: 1, decisions: [{ url: "https://example.com/", decision: "keep" }],
      })),
    });
    await page.waitForFunction(() => document.querySelector("#message").textContent.includes("Import rejected"));
    check(await page.evaluate((key) => localStorage.getItem(key), key) === afterReload,
      "Rejected import changed saved review");
    await page.locator("#import").setInputFiles({
      name: "valid.json", mimeType: "application/json", buffer: Buffer.from(afterReload),
    });
    await page.waitForFunction(() => document.querySelector("#message").textContent.includes("Review saved"));
    await page.getByRole("button", { name: "Homepage structure", exact: true }).click();
    check(await page.locator("#home-sections article").count() === 16, "Homepage section coverage changed");
    await page.getByRole("button", { name: "Coverage & gaps", exact: true }).click();
    check(await page.locator("#coverage-summary").textContent().then((text) => text.includes("Capture results are tracked separately")),
      "Coverage lost the distinction between inventory and capture");
    await page.getByRole("button", { name: "Framer & Figma", exact: true }).click();
    check(await page.locator("#integration-evidence article").count() === 4, "Missing integration sources");
    await page.getByRole("button", { name: "Routes", exact: true }).click();
    await page.setViewportSize({ width: 390, height: 844 });
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({ path: ".playwright-mcp/inventory-mobile.png", fullPage: false });
    check(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
      "Mobile document has horizontal overflow");
    await page.route("**/data/migration-contract.json", (route) => route.fulfill({ status: 500, body: "{}" }));
    await page.reload();
    await page.waitForFunction(() => document.querySelector("#message").textContent.includes("Inventory could not load"));
    check(await page.locator("#export").isDisabled(), "Export enabled despite a failed load");
    await page.unroute("**/data/migration-contract.json");
    check(errors.length === 0, `JavaScript errors: ${errors.join("; ")}`);
    return { passed: true, cases: 14, screenshots: ["inventory-desktop.png", "inventory-mobile.png"] };
  } finally {
    await page.unroute("**/data/migration-contract.json");
    await page.evaluate(({ key, savedReview }) => {
      if (savedReview === null) localStorage.removeItem(key);
      else localStorage.setItem(key, savedReview);
    }, { key, savedReview });
    page.off("pageerror", onError);
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto(base);
  }
})
