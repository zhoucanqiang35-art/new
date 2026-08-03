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
  for (const pathname of ["/spreadsheet", "/categories", "/guides", "/method", "/updates", "/seo-articles", "/seo-articles/how-to-use-a-pikobuy-spreadsheet", "/seo-articles/pikobuy-qc-shipping-return-guide"]) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    const html = await response.text();
    assert.match(html, /pikobuy-logo\.png/, pathname);
    assert.match(html, /SEO Articles/, pathname);
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
