import assert from "node:assert/strict";
import test from "node:test";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders development preview metadata", async () => {
  const response = await render();

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  assert.match(await response.text(), developmentPreviewMeta);
});

test("renders every primary independent route", async () => {
  for (const pathname of ["/spreadsheet", "/categories", "/guides", "/method", "/updates", "/seo-articles", "/seo-articles/how-to-use-a-pikobuy-spreadsheet", "/seo-articles/pikobuy-qc-shipping-return-guide", "/seo-articles/pikobuy-total-cost-explained", "/seo-articles/pikobuy-warehouse-consolidation-guide", "/seo-articles/pikobuy-tracking-status-guide"]) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    const html = await response.text();
    assert.match(html, /pikobuy-logo\.png/, pathname);
    assert.match(html, /SEO Articles/, pathname);
  }
});

test("renders the tracking-status article with unique metadata, schema, sources and navigation", async () => {
  const response = await render("/seo-articles/pikobuy-tracking-status-guide");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /PikoBuy Tracking Status: What Updates, Delays and Delivery Events Mean/);
  assert.match(html, /PikoBuy Tracking Status: Delays &amp; Delivery Guide/);
  assert.match(html, /rel="canonical"[^>]+pikobuy-tracking-status-guide|pikobuy-tracking-status-guide[^>]+rel="canonical"/);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
  assert.match(html, /property="og:type" content="article"/);
  assert.match(html, /property="og:url" content="https:\/\/pikobuysheet\.es\/seo-articles\/pikobuy-tracking-status-guide"/);
  assert.match(html, /property="article:published_time" content="2026-08-13T08:00:00-07:00"/);
  assert.match(html, /BlogPosting/);
  assert.match(html, /BreadcrumbList/);
  assert.match(html, /1,688 words/);
  assert.match(html, /Official sources checked/);
  assert.match(html, /href="\/pikobuy-spreadsheet-shipping-guide"/);
  assert.match(html, /href="\/seo-articles\/pikobuy-warehouse-consolidation-guide"/);
  assert.match(html, /Previous guide/);
  assert.doesNotMatch(html, /private conversation|ChatGPT prompt/i);
});

test("links the tracking-status article from the archive, homepage and updates log", async () => {
  for (const pathname of ["/", "/seo-articles", "/updates"]) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    assert.match(await response.text(), /href="\/seo-articles\/pikobuy-tracking-status-guide"/, pathname);
  }
});

test("renders the warehouse-consolidation article with unique metadata, schema, sources and navigation", async () => {
  const response = await render("/seo-articles/pikobuy-warehouse-consolidation-guide");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /PikoBuy Warehouse Consolidation: A Practical Packing Decision Guide/);
  assert.match(html, /PikoBuy Warehouse Consolidation &amp; Packing Guide/);
  assert.match(html, /rel="canonical"[^>]+pikobuy-warehouse-consolidation-guide|pikobuy-warehouse-consolidation-guide[^>]+rel="canonical"/);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
  assert.match(html, /property="og:type" content="article"/);
  assert.match(html, /property="og:url" content="https:\/\/pikobuysheet\.es\/seo-articles\/pikobuy-warehouse-consolidation-guide"/);
  assert.match(html, /property="article:published_time" content="2026-08-11T08:00:00-07:00"/);
  assert.match(html, /BlogPosting/);
  assert.match(html, /BreadcrumbList/);
  assert.match(html, /1,619 words/);
  assert.match(html, /Official sources checked/);
  assert.match(html, /href="\/pikobuy-spreadsheet-shipping-guide"/);
  assert.match(html, /href="\/seo-articles\/pikobuy-total-cost-explained"/);
  assert.match(html, /Previous guide/);
  assert.doesNotMatch(html, /private conversation|ChatGPT prompt/i);
});

test("links the warehouse-consolidation article from the archive, homepage and updates log", async () => {
  for (const pathname of ["/", "/seo-articles", "/updates"]) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    assert.match(await response.text(), /href="\/seo-articles\/pikobuy-warehouse-consolidation-guide"/, pathname);
  }
});

test("keeps article navigation and the page shell constrained on mobile", async () => {
  const { readFile } = await import("node:fs/promises");
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  assert.match(css, /html, body \{[^}]*overflow-x: clip;/);
  assert.match(css, /@media \(max-width: 720px\)[\s\S]*?\.article-pagination \{ grid-template-columns: 1fr; \}/);
  assert.match(css, /\.article-pagination a \{[^}]*min-width: 0;/);
});

test("renders the total-cost article with unique metadata, schema, sources and internal links", async () => {
  const response = await render("/seo-articles/pikobuy-total-cost-explained");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /PikoBuy Total Cost Explained: What You Pay Before International Delivery/);
  assert.match(html, /PikoBuy Total Cost: Two Payments &amp; Shipping Guide/);
  assert.match(html, /rel="canonical"[^>]+pikobuy-total-cost-explained|pikobuy-total-cost-explained[^>]+rel="canonical"/);
  assert.match(html, /BlogPosting/);
  assert.match(html, /BreadcrumbList/);
  assert.match(html, /1,713 words/);
  assert.match(html, /Official sources checked/);
  assert.match(html, /href="\/pikobuy-spreadsheet-qc"/);
  assert.match(html, /href="\/seo-articles\/pikobuy-warehouse-consolidation-guide"/);
  assert.doesNotMatch(html, /private conversation|ChatGPT prompt/i);
});

test("does not create untranslated localized copies of the new English article", async () => {
  const response = await render("/es/seo-articles/pikobuy-total-cost-explained");
  assert.equal(response.status, 404);
  const consolidation = await render("/es/seo-articles/pikobuy-warehouse-consolidation-guide");
  assert.equal(consolidation.status, 404);
  const tracking = await render("/es/seo-articles/pikobuy-tracking-status-guide");
  assert.equal(tracking.status, 404);
});

test("renders the 2026 homepage search intent and all eight keyword landing pages", async () => {
  const homepage = await render("/");
  const homepageHtml = await homepage.text();
  assert.doesNotMatch(homepageHtml, /\/workspace\/sites\//, "public HTML must not expose internal font paths");
  assert.match(homepageHtml, /PikoBuy Spreadsheet 2026: QC Finds, Categories, and How to Use It/);
  assert.match(homepageHtml, /What is the PikoBuy spreadsheet\?/);
  assert.match(homepageHtml, /Browse PikoBuy spreadsheet categories/);
  assert.match(homepageHtml, /How to use a PikoBuy spreadsheet/);
  assert.match(homepageHtml, /QC photo checklist for PikoBuy finds/);
  assert.match(homepageHtml, /Latest PikoBuy spreadsheet updates/);
  assert.match(homepageHtml, /FAQ about PikoBuy spreadsheet/);

  for (const pathname of [
    "/pikobuy-spreadsheet-shoes",
    "/pikobuy-spreadsheet-hoodies",
    "/pikobuy-spreadsheet-bags",
    "/pikobuy-spreadsheet-qc",
    "/how-to-use-pikobuy-spreadsheet",
    "/pikobuy-spreadsheet-weidian",
    "/pikobuy-spreadsheet-taobao",
    "/pikobuy-spreadsheet-shipping-guide",
  ]) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    const html = await response.text();
    assert.match(html, /application\/ld\+json/, pathname);
    assert.match(html, /Official sources checked/, pathname);
    assert.match(html, new RegExp(`rel=["']canonical["'][^>]+${pathname}|${pathname}[^>]+rel=["']canonical["']`), pathname);
  }
});

test("renders localized URLs and preserves page routes", async () => {
  const spanish = await render("/es");
  assert.equal(spanish.status, 200);
  assert.match(await spanish.text(), /La hoja de cálculo de PikoBuy/);

  const germanGuide = await render("/de/guides");
  assert.equal(germanGuide.status, 200);
  const germanHtml = await germanGuide.text();
  assert.match(germanHtml, /Ratgeber/);
  assert.match(germanHtml, /\/es\/guides/);

  const chineseArticles = await render("/zh/seo-articles");
  assert.equal(chineseArticles.status, 200);
  assert.match(await chineseArticles.text(), /SEO文章/);
});
