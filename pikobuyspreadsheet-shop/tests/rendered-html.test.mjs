import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const pageRegistry = JSON.parse(await readFile(new URL("../content/page-registry.json", import.meta.url), "utf8"));
const publicRoutes = pageRegistry.map((page) => page.path);

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
  assert.match(home, /organization-logo\.png/);
  assert.match(home, /"width":512/);
  assert.match(home, /href="\/categories"[^>]*>View all 10 category guides</);
  assert.match(home, /href="\/seo-articles\/pikobuy-tracking-status-guide"/);
  assert.match(home, /href="\/updates"[^>]*>View all updates/);

  for (const article of pageRegistry.filter((page) => page.kind === "article")) {
    const html = (await render(worker, article.path)).html;
    assert.match(html, /"@type":"Article"/, article.path);
    assert.match(html, /"@type":"BreadcrumbList"/, article.path);
    assert.match(html, new RegExp(`"datePublished":"${article.published}"`), `${article.path} published date`);
    assert.match(html, new RegExp(`"dateModified":"${article.modified}"`), `${article.path} modified date`);
    assert.match(html, /"name":"PikoBuy Spreadsheet Editorial"/);
    assert.match(html, /"url":"https:\/\/pikobuyspreadsheet\.shop\/editorial-policy"/);
    assert.match(html, /href="\/editorial-policy"/);
  }

  const faq = (await render(worker, "/faq")).html;
  assert.match(faq, /"@type":"FAQPage"/);
  assert.equal((faq.match(/"@type":"Question"/g) ?? []).length, 10);
});

test("article registry owns distinct intents and latest article exposes complete publication signals", async () => {
  const worker = await loadApplication();
  const pathname = "/seo-articles/pikobuy-tracking-status-guide";
  const article = pageRegistry.find((page) => page.path === pathname);
  assert.ok(article);
  assert.equal(article.primaryKeyword, "PikoBuy tracking status");
  assert.equal(article.wordCount, 1693);
  const articles = pageRegistry.filter((page) => page.kind === "article");
  assert.equal(new Set(articles.map((page) => page.path)).size, 5);
  assert.equal(new Set(articles.map((page) => page.headline.toLowerCase())).size, 5);
  assert.equal(new Set(articles.map((page) => page.primaryKeyword.toLowerCase())).size, 5);
  assert.equal(new Set(articles.map((page) => page.searchIntent.toLowerCase())).size, 5);

  const html = (await render(worker, pathname)).html;
  assert.match(html, /PikoBuy Tracking Status and Delivery Exception Guide/);
  assert.match(html, /rel="canonical" href="https:\/\/pikobuyspreadsheet\.shop\/seo-articles\/pikobuy-tracking-status-guide"/);
  assert.match(html, /property="og:type" content="article"/);
  assert.match(html, /"datePublished":"2026-08-13"/);
  assert.match(html, /"dateModified":"2026-08-13"/);
  assert.match(html, /All checked 13 August 2026/);
  assert.match(html, /href="\/seo-articles\/pikobuy-shipping-cost-fees-2026"/);
  assert.match(html, /Article archive/);
  assert.doesNotMatch(html, /noindex|ChatGPT|prompt|token|\/workspace\//i);

  const updates = (await render(worker, "/updates")).html;
  assert.match(updates, /PikoBuy Tracking Statuses/);
  assert.match(updates, /13 August 2026/);
});

test("archived design previews are excluded from indexing", async () => {
  const worker = await loadApplication();
  const { response, html } = await render(worker, "/preview/bazaar");
  assert.equal(response.status, 200);
  assert.match(html, /noindex/i);
});

test("all ten category guides and the editorial policy are public and internally linked", async () => {
  const worker = await loadApplication();
  const categories = (await render(worker, "/categories")).html;
  for (const slug of ["shoes", "hoodies", "t-shirts", "jackets", "pants-shorts", "headwear", "accessories", "jerseys", "electronics", "other-stuff"]) {
    assert.match(categories, new RegExp(`href="/categories/${slug}"`), slug);
  }
  const editorial = (await render(worker, "/editorial-policy")).html;
  assert.match(editorial, /PikoBuy Spreadsheet Editorial/);
  assert.match(editorial, /Publication, modification and source-review dates/);
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
