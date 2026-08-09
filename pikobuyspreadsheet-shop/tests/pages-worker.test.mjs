import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function loadPagesWorker() {
  const workerUrl = new URL("../dist/pages/_worker.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  return (await import(workerUrl.href)).default;
}

function testContext() {
  return { waitUntil() {}, passThroughOnException() {} };
}

test("forwards browser assets and crawl files to the Pages ASSETS binding", async () => {
  const worker = await loadPagesWorker();
  for (const [pathname, contentType] of [
    ["/assets/site.css", "text/css; charset=utf-8"],
    ["/robots.txt", "text/plain; charset=utf-8"],
    ["/sitemap.xml", "application/xml; charset=utf-8"],
  ]) {
    let forwardedPathname = null;
    const response = await worker.fetch(
      new Request(`http://localhost${pathname}`),
      {
        ASSETS: {
          async fetch(request) {
            forwardedPathname = new URL(request.url).pathname;
            return new Response("test asset", { headers: { "content-type": contentType } });
          },
        },
      },
      testContext(),
    );

    assert.equal(forwardedPathname, pathname);
    assert.equal(response.status, 200);
    assert.ok((response.headers.get("content-type") ?? "").startsWith(contentType.split(";")[0]));
  }
});

test("renders the homepage and an article through the Pages Worker", async () => {
  const worker = await loadPagesWorker();
  for (const pathname of ["/", "/seo-articles/pikobuy-spreadsheet-guide-2026"]) {
    const response = await worker.fetch(
      new Request(`https://pikobuyspreadsheet-shop.pages.dev${pathname}`, {
        headers: { accept: "text/html" },
      }),
      { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
      testContext(),
    );
    const html = await response.text();
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
    assert.doesNotMatch(html, /noindex/i);
  }
});

test("permanently redirects www requests to the canonical root host", async () => {
  const worker = await loadPagesWorker();
  const response = await worker.fetch(
    new Request("https://www.pikobuyspreadsheet.shop/guides/shipping?source=test"),
    { ASSETS: { fetch: async () => new Response("unexpected") } },
    testContext(),
  );
  assert.equal(response.status, 301);
  assert.equal(
    response.headers.get("location"),
    "https://pikobuyspreadsheet.shop/guides/shipping?source=test",
  );
});

test("generates canonical crawl files for every public route", async () => {
  const sitemap = await readFile(new URL("../dist/pages/sitemap.xml", import.meta.url), "utf8");
  const robots = await readFile(new URL("../dist/pages/robots.txt", import.meta.url), "utf8");

  assert.match(sitemap, /^<\?xml version="1\.0" encoding="UTF-8"\?>/);
  assert.equal((sitemap.match(/<url>/g) ?? []).length, 12);
  assert.match(sitemap, /<loc>https:\/\/pikobuyspreadsheet\.shop\/seo-articles<\/loc>/);
  assert.match(sitemap, /<loc>https:\/\/pikobuyspreadsheet\.shop\/seo-articles\/pikobuy-spreadsheet-guide-2026<\/loc>/);
  assert.match(sitemap, /<loc>https:\/\/pikobuyspreadsheet\.shop\/guides\/shipping<\/loc>/);
  assert.doesNotMatch(sitemap, /pages\.dev/);
  assert.match(robots, /Allow: \/\s/);
  assert.match(robots, /Sitemap: https:\/\/pikobuyspreadsheet\.shop\/sitemap\.xml/);
});
