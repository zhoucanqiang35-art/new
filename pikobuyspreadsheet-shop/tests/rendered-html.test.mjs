import assert from "node:assert/strict";
import test from "node:test";

const publicRoutes = [
  "/",
  "/finds",
  "/categories",
  "/categories/shoes",
  "/categories/hoodies",
  "/categories/jerseys",
  "/categories/accessories",
  "/categories/electronics",
  "/qc-method",
  "/guides",
  "/guides/qc-photos",
  "/guides/returns",
  "/guides/shipping",
  "/faq",
  "/sources",
  "/seo-articles",
  "/seo-articles/pikobuy-spreadsheet-guide-2026",
  "/seo-articles/pikobuy-shipping-cost-fees-2026",
  "/seo-articles/pikobuy-qc-returns-guide-2026",
];

async function loadApplication() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  return (await import(workerUrl.href)).default;
}

function testEnv() {
  return { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
}

function testContext() {
  return { waitUntil() {}, passThroughOnException() {} };
}

async function render(worker, pathname) {
  const response = await worker.fetch(
    new Request(`https://pikobuyspreadsheet.shop${pathname}`, { headers: { accept: "text/html" } }),
    testEnv(),
    testContext(),
  );
  return { response, html: await response.text() };
}

test("all public routes render production SEO signals", async () => {
  const worker = await loadApplication();
  for (const pathname of publicRoutes) {
    const { response, html } = await render(worker, pathname);
    const canonical = `https://pikobuyspreadsheet.shop${pathname === "/" ? "/" : pathname}`;
    assert.equal(response.status, 200, pathname);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i, pathname);
    assert.equal((html.match(/<h1\b/gi) ?? []).length, 1, `${pathname} must have one H1`);
    assert.match(html, new RegExp(`<link[^>]+rel=["']canonical["'][^>]+href=["']${canonical.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}["']`, "i"), `${pathname} canonical`);
    assert.match(html, /property=["']og:title["']/i, `${pathname} Open Graph title`);
    assert.match(html, /property=["']og:description["']/i, `${pathname} Open Graph description`);
    assert.match(html, /property=["']og:image["']/i, `${pathname} Open Graph image`);
    assert.match(html, /name=["']twitter:card["']/i, `${pathname} Twitter card`);
    assert.match(html, /application\/ld\+json/i, `${pathname} JSON-LD`);
    assert.doesNotMatch(html, /codex-preview|\/workspace\/sites\/|\.vinext\/fonts|noindex/i, `${pathname} production HTML`);
  }
});

test("homepage and long-form pages expose the intended schema and H1", async () => {
  const worker = await loadApplication();
  const home = (await render(worker, "/")).html;
  assert.match(home, /PikoBuy Spreadsheet 2026:/);
  assert.match(home, /Product Finds, QC/);
  assert.match(home, /Shipping Guides/);
  assert.match(home, /Find it\. Check it\. Then decide\./);
  assert.match(home, /"@type":"WebSite"/);
  assert.match(home, /"@type":"Organization"/);

  for (const pathname of publicRoutes.filter((route) => route.startsWith("/seo-articles/") && route !== "/seo-articles/")) {
    const html = (await render(worker, pathname)).html;
    assert.match(html, /"@type":"Article"/, pathname);
    assert.match(html, /"@type":"BreadcrumbList"/, pathname);
  }

  const faq = (await render(worker, "/faq")).html;
  assert.match(faq, /"@type":"FAQPage"/);
  assert.equal((faq.match(/"@type":"Question"/g) ?? []).length, 10);
});

test("archived design previews are excluded from indexing", async () => {
  const worker = await loadApplication();
  const { response, html } = await render(worker, "/preview/bazaar");
  assert.equal(response.status, 200);
  assert.match(html, /noindex/i);
});

test("important internal links resolve without 404 responses", async () => {
  const worker = await loadApplication();
  const checked = new Set();
  for (const pathname of publicRoutes) {
    const html = (await render(worker, pathname)).html;
    for (const match of html.matchAll(/href=["'](\/(?!\/)[^"'#?]*)/gi)) {
      const target = match[1].replace(/\/$/, "") || "/";
      if (checked.has(target) || target.startsWith("/assets/") || /\.(?:css|js|png|svg|webp|ico)$/i.test(target)) continue;
      checked.add(target);
      const response = await worker.fetch(new Request(`https://pikobuyspreadsheet.shop${target}`, { headers: { accept: "text/html" } }), testEnv(), testContext());
      assert.notEqual(response.status, 404, `${pathname} links to missing ${target}`);
    }
  }
});
