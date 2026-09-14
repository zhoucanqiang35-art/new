import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const publicInspectionMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']public-inspection["'])[^>]*>/i;

async function loadWorker(suffix) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${suffix}`);
  return (await import(workerUrl.href)).default;
}

async function render(worker, path) {
  const response = await worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  assert.equal(response.status, 200, path);
  return response.text();
}

test("build emits the standalone Cloudflare Worker configuration", async () => {
  const config = JSON.parse(
    await readFile(new URL("../dist/server/wrangler.json", import.meta.url), "utf8"),
  );

  assert.equal(config.name, "lolobuy-us-site");
  assert.equal(config.main, "index.js");
  assert.equal(config.compatibility_date, "2026-08-12");
  assert.deepEqual(config.compatibility_flags, ["nodejs_compat"]);
  assert.equal(config.workers_dev, true);
  assert.deepEqual(config.routes, [
    { pattern: "lolobuy.us", custom_domain: true },
    { pattern: "www.lolobuy.us", custom_domain: true },
  ]);
  assert.deepEqual(config.assets, {
    binding: "ASSETS",
    directory: "../client",
  });
  assert.deepEqual(config.images, { binding: "IMAGES" });
  assert.equal(config.observability?.enabled, true);
});

test("renders public inspection metadata", async () => {
  const worker = await loadWorker("home");
  const html = await render(worker, "/");
  assert.match(html, publicInspectionMeta);
  assert.match(html, /class="cobalt-hero"/);
  assert.match(html, /elite-cobalt-hero\.png/);
  assert.match(html, /id="home-hero-title"/);
});

test("all independent content pages keep one main action and non-clickable evidence", async () => {
  const worker = await loadWorker("content-actions");
  const routes = [
    "/guides/how-lolobuy-works",
    "/guides/qc-photos",
    "/guides/shipping",
    "/guides/tracking",
    "/guides/fees-and-weight",
    "/methodology",
    "/sources",
    "/disclosure",
    "/about",
    "/contact",
    "/privacy",
  ];

  for (const locale of ["en", "zh", "de"]) {
    for (const route of routes) {
      const localizedRoute = locale === "en" ? route : `/${locale}${route}`;
      const html = await render(worker, localizedRoute);
      assert.equal((html.match(/class="more-reading-main"/g) ?? []).length, 1, localizedRoute);
      assert.match(html, /class="footer-source-text"/, localizedRoute);
      assert.doesNotMatch(html, /<a[^>]+href=["'][^"']*lolobuy\.com/i, localizedRoute);
      assert.doesNotMatch(html, /class="source-reference"/i, localizedRoute);
      const evidenceRegister = html.match(/<section class="source-register"[\s\S]*?<\/section>/i)?.[0];
      if (evidenceRegister) assert.doesNotMatch(evidenceRegister, /<a\b/i, localizedRoute);
    }
  }
});

test("source records are plain text in all 24 locale routes", async () => {
  const worker = await loadWorker("source-locales");
  const locales = ["en", "de", "fr", "es", "it", "nl", "pt", "pl", "sv", "da", "no", "fi", "cs", "ro", "hu", "el", "tr", "uk", "ru", "ja", "ko", "zh", "ar", "id"];

  for (const locale of locales) {
    const path = locale === "en" ? "/sources" : `/${locale}/sources`;
    const html = await render(worker, path);
    const article = html.match(/<article class="article-body sources-body">[\s\S]*?<\/article>/i)?.[0];
    assert.ok(article, path);
    assert.doesNotMatch(article, /<a\b/i, path);
    assert.doesNotMatch(article, /(?:https?:\/\/|www\.)/i, path);
    assert.doesNotMatch(article, /linked below/i, path);
    assert.equal((html.match(/class="more-reading-main"/g) ?? []).length, 1, path);
  }
});

test("spreadsheet disclaimer is compact text rather than a second button", async () => {
  const worker = await loadWorker("spreadsheet-method");
  for (const path of ["/spreadsheet", "/zh/spreadsheet"]) {
    const html = await render(worker, path);
    const endcap = html.match(/<section class="spreadsheet-endcap">[\s\S]*?<\/section>/i)?.[0];
    assert.ok(endcap, path);
    assert.equal((endcap.match(/<a\b/g) ?? []).length, 1, path);
    assert.match(endcap, /href="https:\/\/findspreadsheet\.com\/"/i, path);
    assert.match(endcap, /class="spreadsheet-disclaimer"/i, path);
    assert.doesNotMatch(endcap, /READ THE REVIEW METHOD/i, path);
  }
});

test("footer navigation stays concise and grouped", async () => {
  const worker = await loadWorker("footer-layout");
  for (const path of ["/", "/zh", "/guides/qc-photos"]) {
    const html = await render(worker, path);
    const footer = html.match(/<footer class="elite-footer cobalt-footer">[\s\S]*?<\/footer>/i)?.[0];
    assert.ok(footer, path);
    assert.equal((footer.match(/class="footer-guide-group"/g) ?? []).length, 3, path);
    const footerLinks = [...footer.matchAll(/<a\b[^>]*class="footer-guide-link"[^>]*>[\s\S]*?<\/a>/gi)].map((match) => match[0]);
    assert.equal(footerLinks.length, 9, path);
    assert.doesNotMatch(footer, /<i>0[1-3]<\/i>/i, path);
    for (const link of footerLinks) assert.doesNotMatch(link, /<small>/i, path);
  }
});
