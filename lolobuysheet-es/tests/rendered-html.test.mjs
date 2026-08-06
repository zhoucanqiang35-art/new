import assert from "node:assert/strict";
import test from "node:test";

async function renderRoute(pathname, hostname = "localhost") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("route", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`https://${hostname}${pathname}`, {
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
}

test("renders production SEO metadata without preview messaging", async () => {
  const response = await renderRoute("/");
  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  const html = await response.text();
  assert.match(html, /<link[^>]+rel=["']canonical["'][^>]+https:\/\/lolobuysheet\.es\//i);
  assert.match(html, /property=["']og:title["']/i);
  assert.match(html, /name=["']twitter:card["']/i);
  assert.match(html, /LoloBuy Spreadsheet,/i);
  assert.match(html, /with more context\./i);
  assert.match(html, /LoloBuy Spreadsheet 2026 \| Finds, QC Notes, Guides, and Categories/i);
  assert.match(html, /How to use the LoloBuy spreadsheet/i);
  assert.match(html, /QC context matters/i);
  assert.match(html, /What is the LoloBuy spreadsheet\?/i);
  assert.match(html, /FAQPage/i);
  assert.match(html, /application\/ld\+json/i);
  assert.ok(!html.includes("Review mode"));
  assert.ok(!html.includes("not yet connected to lolobuysheet.es"));
  assert.ok(!html.includes("preview-ribbon"));
});

test("normalizes the production host and language metadata", async () => {
  const hostRedirect = await renderRoute("/", "www.lolobuysheet.es");
  assert.equal(hostRedirect.status, 301);
  assert.equal(hostRedirect.headers.get("location"), "https://lolobuysheet.es/");

  const pagesWorkerUrl = new URL("../public/_worker.js", import.meta.url);
  pagesWorkerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: pagesWorker } = await import(pagesWorkerUrl.href);
  const pagesRedirect = await pagesWorker.fetch(
    new Request("https://www.lolobuysheet.es/guides/?from=www"),
    { ASSETS: { fetch: async () => new Response("asset") } },
  );
  assert.equal(pagesRedirect.status, 301);
  assert.equal(pagesRedirect.headers.get("location"), "https://lolobuysheet.es/guides/?from=www");

  const french = await renderRoute("/fr");
  const frenchHtml = await french.text();
  assert.equal(french.status, 200);
  assert.match(frenchHtml, /<html lang="fr">/i);
  assert.match(frenchHtml, /Tableau LoloBuy 2026/i);

  const swedish = await renderRoute("/sv");
  const swedishHtml = await swedish.text();
  assert.equal(swedish.status, 200);
  assert.match(swedishHtml, /<meta[^>]+name=["']robots["'][^>]+noindex/i);
  assert.match(swedishHtml, /<link[^>]+rel=["']canonical["'][^>]+https:\/\/lolobuysheet\.es\//i);
});

test("keeps all sections while strengthening internal links and trust pages", async () => {
  const home = await renderRoute("/");
  const homeHtml = await home.text();
  assert.match(homeHtml, /href=["']\/products\/multi-brand-hat-selection["']/i);
  assert.equal((homeHtml.match(/multi-brand-hat-selection/g) || []).length >= 1, true);

  for (const route of ["/about", "/editorial-methodology", "/contact", "/privacy", "/affiliate-disclosure"]) {
    const response = await renderRoute(route);
    assert.equal(response.status, 200, `${route} should render`);
  }
});

test("buyer guides and SEO articles are distinct content systems", async () => {
  const guides = await renderRoute("/guides");
  const guidesHtml = await guides.text();
  assert.equal(guides.status, 200);
  assert.ok(guidesHtml.includes("Guides are not SEO articles"));
  assert.ok(guidesHtml.includes("/guides/source-listing-and-first-payment"));
  assert.ok(!guidesHtml.includes("Read fact-checked article"));

  const articles = await renderRoute("/seo-articles");
  const articlesHtml = await articles.text();
  assert.equal(articles.status, 200);
  assert.ok(articlesHtml.includes("Editorial standard"));
  assert.ok(articlesHtml.includes("/seo-articles/how-lolobuy-works"));
  assert.ok(!articlesHtml.includes("Open practical checklist"));

  for (const route of [
    "/guides/source-listing-and-first-payment",
    "/guides/warehouse-qc-photo-checklist",
    "/guides/parcel-and-shipping-cost-checklist",
    "/guides/returns-and-refunds-checklist",
    "/guides/warehouse-storage-checklist",
    "/zh/guides/warehouse-qc-photo-checklist",
  ]) {
    const response = await renderRoute(route);
    const html = await response.text();
    assert.equal(response.status, 200, `${route} should render`);
    assert.ok(html.includes("Fact boundary"), `${route} should explain its evidence boundary`);
    assert.ok(html.includes("Official sources"), `${route} should show official sources`);
  }
});
