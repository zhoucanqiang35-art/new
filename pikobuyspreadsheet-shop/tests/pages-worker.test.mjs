import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const pageRegistry = JSON.parse(await readFile(new URL("../content/page-registry.json", import.meta.url), "utf8"));

async function loadPagesWorker() {
  const workerUrl = new URL("../dist/pages/_worker.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  return (await import(workerUrl.href)).default;
}

function context(pending = []) {
  return { waitUntil(promise) { pending.push(promise); }, passThroughOnException() {} };
}

test("forwards static assets and crawl files to Pages ASSETS with cache headers", async () => {
  const worker = await loadPagesWorker();
  for (const [pathname, contentType] of [
    ["/assets/site-hash.css", "text/css; charset=utf-8"],
    ["/pikobuy-logo.png", "image/png"],
    ["/organization-logo.png", "image/png"],
    ["/og-pikobuy-spreadsheet.png", "image/png"],
    ["/robots.txt", "text/plain; charset=utf-8"],
    ["/sitemap.xml", "application/xml; charset=utf-8"],
  ]) {
    let forwarded = null;
    const response = await worker.fetch(
      new Request(`https://pikobuyspreadsheet.shop${pathname}`),
      { ASSETS: { async fetch(request) { forwarded = new URL(request.url).pathname; return new Response("asset", { headers: { "content-type": contentType } }); } } },
      context(),
    );
    assert.equal(forwarded, pathname);
    assert.equal(response.status, 200);
    assert.match(response.headers.get("cache-control") ?? "", /public/);
    assert.equal(response.headers.get("x-content-type-options"), "nosniff");
  }
});

test("redirects www and Pages fallback hosts to the canonical domain", async () => {
  const worker = await loadPagesWorker();
  for (const hostname of ["www.pikobuyspreadsheet.shop", "pikobuyspreadsheet-shop.pages.dev"]) {
    const response = await worker.fetch(
      new Request(`https://${hostname}/guides/shipping?source=test`),
      { ASSETS: { fetch: async () => new Response("unexpected") } },
      context(),
    );
    assert.equal(response.status, 301);
    assert.equal(response.headers.get("location"), "https://pikobuyspreadsheet.shop/guides/shipping?source=test");
  }
});

test("caches canonical HTML responses at the edge", async () => {
  const worker = await loadPagesWorker();
  const cacheStore = new Map();
  const previousCaches = globalThis.caches;
  globalThis.caches = { default: {
    async match(request) { return cacheStore.get(request.url)?.clone(); },
    async put(request, response) { cacheStore.set(request.url, response.clone()); },
  } };

  try {
    const pending = [];
    const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
    const request = new Request("https://pikobuyspreadsheet.shop/categories/shoes", { headers: { accept: "text/html" } });
    const first = await worker.fetch(request, env, context(pending));
    assert.equal(first.status, 200);
    assert.equal(first.headers.get("x-edge-cache"), "MISS");
    assert.match(first.headers.get("cache-control") ?? "", /s-maxage=3600/);
    await Promise.all(pending);

    const second = await worker.fetch(request, env, context());
    assert.equal(second.status, 200);
    assert.equal(second.headers.get("x-edge-cache"), "HIT");
  } finally {
    globalThis.caches = previousCaches;
  }
});

test("generates a canonical sitemap for every public route", async () => {
  const sitemap = await readFile(new URL("../dist/pages/sitemap.xml", import.meta.url), "utf8");
  const robots = await readFile(new URL("../dist/pages/robots.txt", import.meta.url), "utf8");
  assert.match(sitemap, /^<\?xml version="1\.0" encoding="UTF-8"\?>/);
  assert.equal((sitemap.match(/<url>/g) ?? []).length, pageRegistry.length);
  assert.match(sitemap, /<loc>https:\/\/pikobuyspreadsheet\.shop\/faq<\/loc>/);
  assert.match(sitemap, /<loc>https:\/\/pikobuyspreadsheet\.shop\/categories\/other-stuff<\/loc>/);
  assert.match(sitemap, /<loc>https:\/\/pikobuyspreadsheet\.shop\/editorial-policy<\/loc>/);
  assert.match(sitemap, /<loc>https:\/\/pikobuyspreadsheet\.shop\/updates<\/loc><lastmod>2026-08-11<\/lastmod>/);
  assert.match(sitemap, /<loc>https:\/\/pikobuyspreadsheet\.shop\/seo-articles\/pikobuy-warehouse-consolidation-guide<\/loc><lastmod>2026-08-11<\/lastmod>/);
  assert.doesNotMatch(sitemap, /pages\.dev|\/preview\//);
  for (const page of pageRegistry) {
    const entry = `<loc>https://pikobuyspreadsheet.shop${page.path === "/" ? "/" : page.path}</loc><lastmod>${page.lastModified}</lastmod>`;
    assert.match(sitemap, new RegExp(entry.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")), page.path);
  }
  assert.match(robots, /Allow: \/\s/);
  assert.doesNotMatch(robots, /Disallow:\s*\/preview\//);
  assert.match(robots, /Sitemap: https:\/\/pikobuyspreadsheet\.shop\/sitemap\.xml/);
});
