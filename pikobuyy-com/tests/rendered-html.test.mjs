import assert from "node:assert/strict";
import test from "node:test";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

test("renders development preview metadata", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  assert.match(await response.text(), developmentPreviewMeta);
});

async function renderRoute(pathname) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("routes", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("all navigation, language and category routes render without 404s", async () => {
  const locales = ["de", "fr", "es", "it", "pl", "nl", "pt"];
  const sections = ["categories", "guides", "articles", "updates", "faq"];
  const categories = ["shoes", "hoodies-sweaters", "t-shirts", "jackets", "pants-shorts", "headwear", "accessories", "jersey", "electronics", "other-stuff"];
  const routes = ["/articles", ...sections.map((section) => `/${section}`)];

  for (const locale of locales) {
    routes.push(`/${locale}`);
    routes.push(...sections.map((section) => `/${locale}/${section}`));
  }

  for (const route of routes) {
    const response = await renderRoute(route);
    assert.equal(response.status, 200, `${route} should render successfully`);
  }

  for (const category of categories) {
    for (const route of [`/categories/${category}`, `/de/categories/${category}`]) {
      const response = await renderRoute(route);
      assert.ok([301, 302, 303, 307, 308].includes(response.status), `${route} should redirect`);
      assert.match(response.headers.get("location") ?? "", /^https:\/\/findspreadsheet\.com\//);
    }
  }
});

test("legacy site search redirects to the main product search", async () => {
  const matching = await renderRoute("/search?q=shipping");
  assert.ok([301, 302, 303, 307, 308].includes(matching.status));
  assert.match(
    matching.headers.get("location") ?? "",
    /^https:\/\/findspreadsheet\.com\//,
  );

  const empty = await renderRoute("/search?q=zzzz-no-match");
  assert.ok([301, 302, 303, 307, 308].includes(empty.status));
  assert.match(
    empty.headers.get("location") ?? "",
    /^https:\/\/findspreadsheet\.com\//,
  );
});

test("SEO articles contain long-form facts and route actions to the main site", async () => {
  const routes = [
    "/articles/what-is-a-pikobuy-spreadsheet",
    "/articles/how-to-use-pikobuy-spreadsheet-2026",
    "/articles/pikobuy-qc-photo-guide",
    "/articles/pikobuy-shipping-cost",
  ];
  for (const route of routes) {
    const response = await renderRoute(route);
    const html = await response.text();
    assert.equal(response.status, 200);
    assert.ok(html.includes("What the official pages establish"));
    assert.ok(html.includes("What to do next"));
    assert.ok(html.includes("https://www.pikobuy.com/"));
    assert.ok(!html.includes('href="https://www.pikobuy.com/'));
    assert.ok(html.includes('href="https://findspreadsheet.com/'));
    assert.ok(html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length > 1200);
  }
});

test("localized article pages use localized visible copy", async () => {
  const checks = [
    ["/de/articles", "SEO-Artikel", "Was ist ein Pikobuy Spreadsheet?"],
    ["/fr/articles", "Articles SEO", "Qu’est-ce qu’un Pikobuy Spreadsheet ?"],
    ["/es/articles", "Artículos SEO", "¿Qué es una hoja Pikobuy?"],
    ["/it/articles", "Articoli SEO", "Che cos’è un Pikobuy Spreadsheet?"],
    ["/pl/articles", "Artykuły SEO", "Czym jest Pikobuy Spreadsheet?"],
    ["/nl/articles", "SEO-artikelen", "Wat is een Pikobuy Spreadsheet?"],
    ["/pt/articles", "Artigos SEO", "O que é uma Pikobuy Spreadsheet?"],
  ];

  for (const [route, navLabel, articleTitle] of checks) {
    const response = await renderRoute(route);
    const html = await response.text();
    assert.match(html, new RegExp(navLabel));
    assert.ok(html.includes(articleTitle), `${route} should include its translated article title`);
    assert.doesNotMatch(html, /Beginner research workflow/);
  }
});

test("product and full-content detail routes render and link correctly", async () => {
  const routes = [
    ["/products/balenciaga-3-0-shoes", "Balenciaga 3.0 Shoes", "https://findspreadsheet.com/shoes/balenciaga-3-0-shoes-2831.html"],
    ["/products/gallery-short", "Gallery Short", "https://findspreadsheet.com/pants-shorts/gallery-short-3003.html"],
    ["/guides/qc-photo-checklist", "QC photo checklist", "/categories"],
    ["/articles/what-is-a-pikobuy-spreadsheet", "What is a Pikobuy Spreadsheet?", "/categories"],
    ["/updates/category-structure-refreshed", "Category structure refreshed", "/categories"],
    ["/de/guides/qc-photo-checklist", "Checkliste für QC-Fotos", "/de/categories"],
    ["/fr/products/fendi-slides", "Fendi Slides", "https://findspreadsheet.com/shoes/fendi-slides-2272.html"],
  ];

  for (const [route, title, expectedLink] of routes) {
    const response = await renderRoute(route);
    const html = await response.text();
    assert.equal(response.status, 200, `${route} should render successfully`);
    assert.ok(html.includes(title), `${route} should contain ${title}`);
    assert.ok(html.includes(expectedLink), `${route} should contain ${expectedLink}`);
  }
});
