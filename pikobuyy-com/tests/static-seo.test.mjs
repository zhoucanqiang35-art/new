import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";

const out = path.resolve("out");
const rankingSlugs = [
  "pikobuy-spreadsheet",
  "pikobuy-spreadsheet-shoes",
  "pikobuy-spreadsheet-hoodies",
  "pikobuy-spreadsheet-bags",
  "pikobuy-qc-photo-guide",
  "how-to-use-pikobuy-spreadsheet",
  "is-pikobuy-safe",
  "pikobuy-shipping-guide",
];

async function htmlFor(route) {
  return readFile(path.join(out, route.replace(/^\/|\/$/g, ""), "index.html"), "utf8");
}

function canonicalFrom(html) {
  return html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
}

test("all sitemap URLs map to exported canonical HTML", async () => {
  const sitemap = await readFile(path.join(out, "sitemap.xml"), "utf8");
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  assert.ok(urls.length >= 248, "sitemap should include the established pages and the new ranking cluster");
  assert.equal(new Set(urls).size, urls.length, "sitemap URLs must be unique");

  for (const url of urls) {
    assert.match(url, /^https:\/\/pikobuyy\.com\//);
    assert.ok(url.endsWith("/"), `${url} should already be the trailing-slash canonical`);
    assert.ok(!url.includes("pages.dev"));
    const pathname = new URL(url).pathname;
    const file = pathname === "/"
      ? path.join(out, "index.html")
      : path.join(out, pathname, "index.html");
    await access(file);
    const html = await readFile(file, "utf8");
    assert.equal(canonicalFrom(html), url, `${url} should canonicalize to itself`);
  }
});

test("ranking cluster has unique metadata, verified content and structured data", async () => {
  const titles = new Set();
  const descriptions = new Set();

  for (const slug of rankingSlugs) {
    const html = await htmlFor(slug);
    const title = html.match(/<title>(.*?)<\/title>/)?.[1];
    const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
    assert.ok(title);
    assert.ok(description);
    assert.ok(!titles.has(title), `${slug} needs a unique title`);
    assert.ok(!descriptions.has(description), `${slug} needs a unique description`);
    titles.add(title);
    descriptions.add(description);
    assert.equal(canonicalFrom(html), `https://pikobuyy.com/${slug}/`);
    assert.ok(html.includes('"@type":"BreadcrumbList"'));
    assert.ok(html.includes('"@type":"FAQPage"'));
    assert.ok(html.includes("July 30, 2026"));
    assert.ok(html.includes("https://findspreadsheet.com/"));
    assert.ok(!html.includes('href="https://www.pikobuy.com/'));
  }

  const pillar = await htmlFor("pikobuy-spreadsheet");
  assert.ok(pillar.includes("<h1>Pikobuy Spreadsheet 2026</h1>"));
  assert.ok(pillar.includes('"@type":"ItemList"'));
  assert.ok(pillar.includes("Taobao"));
  assert.ok(pillar.includes("Weidian"));
  assert.ok(pillar.includes("1688"));
});

test("homepage and crawler controls expose the pillar page", async () => {
  const home = await readFile(path.join(out, "index.html"), "utf8");
  assert.ok(home.includes('href="/pikobuy-spreadsheet/"'));
  assert.ok(home.includes("Pikobuy Spreadsheet 2026"));

  const robots = await readFile(path.join(out, "robots.txt"), "utf8");
  assert.ok(robots.includes("User-Agent: *"));
  assert.ok(robots.includes("Allow: /"));
  assert.ok(robots.includes("Disallow: /search"));
  assert.ok(robots.includes("Sitemap: https://pikobuyy.com/sitemap.xml"));
});

test("new Pikobuy payment article has complete SEO signals and useful internal links", async () => {
  const route = "articles/pikobuy-payment-guide";
  const html = await htmlFor(route);
  const sitemap = await readFile(path.join(out, "sitemap.xml"), "utf8");

  assert.ok(sitemap.includes("https://pikobuyy.com/articles/pikobuy-payment-guide/"));
  assert.equal(canonicalFrom(html), "https://pikobuyy.com/articles/pikobuy-payment-guide/");
  assert.ok(html.includes("<title>Pikobuy Payment Guide: Two Checkout Stages</title>"));
  assert.ok(html.includes("<h1>Pikobuy Payment Guide: Two Checkout Stages</h1>"));
  assert.ok(html.includes('"@type":"Article"'));
  assert.ok(html.includes('"@type":"BreadcrumbList"'));
  assert.ok(!html.includes('"@type":"FAQPage"'));
  assert.ok(html.includes("pikobuy-two-stage-payment-flow.svg"));
  assert.ok(html.includes("Pikobuy two-stage payment flow"));
  assert.ok(html.includes('href="/pikobuy-spreadsheet/"'));
  assert.ok(html.includes('href="/how-to-use-pikobuy-spreadsheet/"'));
  assert.ok(html.includes('href="/pikobuy-shipping-guide/"'));
  assert.ok(html.includes("Fact-checked Aug 2, 2026"));
  assert.ok(html.includes("8% of freight"));
});

test("payment article visual and related cards stay inside the mobile viewport", async () => {
  const css = await readFile(path.resolve("app/globals.css"), "utf8");
  const svg = await readFile(path.resolve("public/pikobuy-two-stage-payment-flow.svg"), "utf8");

  assert.match(css, /\.article-visual img\s*\{[^}]*width:\s*100%[^}]*height:\s*auto/s);
  assert.match(css, /@media \(max-width: 580px\)[\s\S]*\.article-related > div\s*\{\s*grid-template-columns:\s*1fr;/);
  assert.ok(svg.includes('viewBox="0 0 1200 630"'));
  assert.ok(!svg.includes("http://") || svg.includes('xmlns="http://www.w3.org/2000/svg"'));
});

test("warehouse consolidation article is complete, original and indexable", async () => {
  const route = "articles/pikobuy-warehouse-consolidation-guide";
  const html = await htmlFor(route);
  const sitemap = await readFile(path.join(out, "sitemap.xml"), "utf8");

  assert.ok(sitemap.includes("https://pikobuyy.com/articles/pikobuy-warehouse-consolidation-guide/"));
  assert.equal(canonicalFrom(html), "https://pikobuyy.com/articles/pikobuy-warehouse-consolidation-guide/");
  assert.ok(html.includes("<title>Pikobuy Warehouse and Parcel Consolidation Guide</title>"));
  assert.ok(html.includes("<h1>Pikobuy Warehouse and Parcel Consolidation Guide</h1>"));
  assert.ok(html.includes('"@type":"Article"'));
  assert.ok(html.includes('"@type":"BreadcrumbList"'));
  assert.ok(!html.includes('"@type":"FAQPage"'));
  assert.ok(html.includes("pikobuy-warehouse-consolidation-flow.svg"));
  assert.ok(html.includes("Pikobuy warehouse flow showing separate orders"));
  assert.ok(html.includes("Fact-checked Aug 4, 2026"));
  assert.ok(html.includes("do not publish one universal free-storage period"));
  assert.ok(html.includes('href="/pikobuy-spreadsheet/"'));
  assert.ok(html.includes('href="/pikobuy-qc-photo-guide/"'));
  assert.ok(html.includes('href="/pikobuy-shipping-guide/"'));
  assert.ok(html.includes('href="/articles/pikobuy-payment-guide/"'));
  assert.ok(html.includes("<h3>A compact item-level checklist</h3>"));
});

test("warehouse article body stays within the requested editorial length", async () => {
  const html = await htmlFor("articles/pikobuy-warehouse-consolidation-guide");
  const sections = [...html.matchAll(/<section class="article-section"[\s\S]*?<\/section>/g)]
    .map((match) => match[0])
    .join(" ");
  const words = sections
    .replace(/<[^>]+>/g, " ")
    .replace(/&(?:amp|quot|#x27|#39);/g, " ")
    .split(/\s+/)
    .filter(Boolean);

  assert.ok(words.length >= 1200, `article body should contain at least 1,200 words, found ${words.length}`);
  assert.ok(words.length <= 1800, `article body should contain at most 1,800 words, found ${words.length}`);
});

test("warehouse article visual and internal cards remain mobile-safe", async () => {
  const css = await readFile(path.resolve("app/globals.css"), "utf8");
  const svg = await readFile(path.resolve("public/pikobuy-warehouse-consolidation-flow.svg"), "utf8");

  assert.match(css, /\.article-visual img\s*\{[^}]*width:\s*100%[^}]*height:\s*auto/s);
  assert.match(css, /@media \(max-width: 580px\)[\s\S]*\.article-related > div\s*\{\s*grid-template-columns:\s*1fr;/);
  assert.ok(svg.includes('viewBox="0 0 1200 630"'));
  assert.ok(svg.includes("Pikobuy warehouse and parcel consolidation decision flow"));
});

test("return-policy article is complete, source-bounded and indexable", async () => {
  const route = "articles/pikobuy-return-policy-guide";
  const html = await htmlFor(route);
  const sitemap = await readFile(path.join(out, "sitemap.xml"), "utf8");

  assert.ok(sitemap.includes("https://pikobuyy.com/articles/pikobuy-return-policy-guide/"));
  assert.equal(canonicalFrom(html), "https://pikobuyy.com/articles/pikobuy-return-policy-guide/");
  assert.ok(html.includes("<title>Pikobuy Return Policy: 120-Hour Warehouse Guide</title>"));
  assert.ok(html.includes("<h1>Pikobuy Return Policy: 120-Hour Warehouse Guide</h1>"));
  assert.ok(html.includes('"@type":"Article"'));
  assert.ok(html.includes('"@type":"BreadcrumbList"'));
  assert.ok(!html.includes('"@type":"FAQPage"'));
  assert.ok(html.includes("pikobuy-return-decision-timeline.svg"));
  assert.ok(html.includes("Pikobuy return decision timeline"));
  assert.ok(html.includes("Fact-checked Aug 6, 2026"));
  assert.ok(html.includes("120 hours"));
  assert.ok(html.includes("5 RMB service fee"));
  assert.ok(html.includes('href="/pikobuy-qc-photo-guide/"'));
  assert.ok(html.includes('href="/articles/pikobuy-warehouse-consolidation-guide/"'));
  assert.ok(html.includes('href="/articles/pikobuy-payment-guide/"'));
  assert.ok(html.includes('href="/pikobuy-shipping-guide/"'));
  const payment = await htmlFor("articles/pikobuy-payment-guide");
  const warehouse = await htmlFor("articles/pikobuy-warehouse-consolidation-guide");
  const home = await readFile(path.join(out, "index.html"), "utf8");
  const archive = await htmlFor("articles");
  assert.ok(payment.includes('href="/articles/pikobuy-return-policy-guide/"'));
  assert.ok(warehouse.includes('href="/articles/pikobuy-return-policy-guide/"'));
  assert.ok(home.includes('href="/articles/pikobuy-return-policy-guide"'));
  assert.ok(home.includes('dateTime="2026-08-06"'));
  assert.ok(archive.includes("Pikobuy Return Policy: 120-Hour Warehouse Guide"));
});

test("return-policy article body stays within the requested editorial length", async () => {
  const html = await htmlFor("articles/pikobuy-return-policy-guide");
  const sections = [...html.matchAll(/<section class="article-section"[\s\S]*?<\/section>/g)]
    .map((match) => match[0])
    .join(" ");
  const words = sections
    .replace(/<[^>]+>/g, " ")
    .replace(/&(?:amp|quot|#x27|#39);/g, " ")
    .split(/\s+/)
    .filter(Boolean);

  assert.ok(words.length >= 1200, `article body should contain at least 1,200 words, found ${words.length}`);
  assert.ok(words.length <= 1800, `article body should contain at most 1,800 words, found ${words.length}`);
});

test("return article visual and related cards remain mobile-safe", async () => {
  const css = await readFile(path.resolve("app/globals.css"), "utf8");
  const svg = await readFile(path.resolve("public/pikobuy-return-decision-timeline.svg"), "utf8");

  assert.match(css, /\.article-visual img\s*\{[^}]*width:\s*100%[^}]*height:\s*auto/s);
  assert.match(css, /@media \(max-width: 580px\)[\s\S]*\.article-related > div\s*\{\s*grid-template-columns:\s*1fr;/);
  assert.ok(svg.includes('viewBox="0 0 1200 630"'));
  assert.ok(svg.includes("Pikobuy return decision timeline after an order becomes Warehoused"));
});


test("tracking article is source-bounded, indexable and internally linked", async () => {
  const route = "articles/pikobuy-tracking-guide";
  const html = await htmlFor(route);
  const sitemap = await readFile(path.join(out, "sitemap.xml"), "utf8");
  assert.ok(sitemap.includes("https://pikobuyy.com/articles/pikobuy-tracking-guide/"));
  assert.equal(canonicalFrom(html), "https://pikobuyy.com/articles/pikobuy-tracking-guide/");
  assert.ok(html.includes("Pikobuy Tracking Guide: Order &amp; Parcel Status") || html.includes("Pikobuy Tracking Guide: Order & Parcel Status"));
  assert.ok(html.includes('"@type":"Article"'));
  assert.ok(html.includes('"@type":"BreadcrumbList"'));
  assert.ok(!html.includes('"@type":"FAQPage"'));
  assert.ok(html.includes("pikobuy-tracking-status-flow.svg"));
  assert.ok(html.includes("Fact-checked Aug 10, 2026"));
  assert.ok(html.includes("within three days after the parcel is shipped"));
  assert.ok(html.includes("not a three-day delivery promise"));
  assert.ok(html.includes('href="/articles/pikobuy-payment-guide/"'));
  assert.ok(html.includes('href="/articles/pikobuy-warehouse-consolidation-guide/"'));
  assert.ok(html.includes('href="/pikobuy-shipping-guide/"'));
  assert.ok(html.includes('href="/articles/pikobuy-return-policy-guide/"'));
  const home = await readFile(path.join(out, "index.html"), "utf8");
  const archive = await htmlFor("articles");
  assert.ok(home.includes('href="/articles/pikobuy-tracking-guide"'));
  assert.ok(home.includes('dateTime="2026-08-10"'));
  assert.ok(archive.includes("Pikobuy Tracking Guide: Order"));
});
test("tracking article body stays within the requested editorial length", async () => {
  const html = await htmlFor("articles/pikobuy-tracking-guide");
  const sections = [...html.matchAll(/<section class="article-section"[\s\S]*?<\/section>/g)].map((match) => match[0]).join(" ");
  const words = sections.replace(/<[^>]+>/g, " ").replace(/&(?:amp|quot|#x27|#39);/g, " ").split(/\s+/).filter(Boolean);
  assert.ok(words.length >= 1200, `article body should contain at least 1,200 words, found ${words.length}`);
  assert.ok(words.length <= 1800, `article body should contain at most 1,800 words, found ${words.length}`);
});
test("tracking visual and related cards remain mobile-safe", async () => {
  const css = await readFile(path.resolve("app/globals.css"), "utf8");
  const trackingSvg = await readFile(path.resolve("public/pikobuy-tracking-status-flow.svg"), "utf8");
  assert.match(css, /\.article-visual img\s*\{[^}]*width:\s*100%[^}]*height:\s*auto/s);
  assert.match(css, /@media \(max-width: 580px\)[\s\S]*\.article-related > div\s*\{\s*grid-template-columns:\s*1fr;/);
  assert.ok(trackingSvg.includes('viewBox="0 0 1200 630"'));
  assert.ok(trackingSvg.includes("Pikobuy order and parcel tracking status flow"));
});

test("customs article is current, source-bounded and indexable", async () => {
  const route = "articles/pikobuy-customs-taxes-guide";
  const html = await htmlFor(route);
  const sitemap = await readFile(path.join(out, "sitemap.xml"), "utf8");
  assert.ok(sitemap.includes("https://pikobuyy.com/articles/pikobuy-customs-taxes-guide/"));
  assert.equal(canonicalFrom(html), "https://pikobuyy.com/articles/pikobuy-customs-taxes-guide/");
  assert.ok(html.includes("Pikobuy Customs and Taxes 2026: EU, UK, US &amp; Canada") || html.includes("Pikobuy Customs and Taxes 2026: EU, UK, US & Canada"));
  assert.ok(html.includes('"@type":"Article"'));
  assert.ok(html.includes('"@type":"BreadcrumbList"'));
  assert.ok(!html.includes('"@type":"FAQPage"'));
  assert.ok(html.includes("Fact-checked Aug 12, 2026"));
  assert.ok(html.includes("pikobuy-customs-taxes-2026.svg"));
  assert.ok(html.includes("temporary EUR 3 customs duty"));
  assert.ok(html.includes("suspended globally from August 29, 2025"));
  assert.ok(html.includes("current GBP 135 boundary"));
  assert.ok(html.includes("same CAD 20 threshold"));
  assert.ok(html.includes('href="/pikobuy-spreadsheet/"'));
  assert.ok(html.includes('href="/articles/pikobuy-payment-guide/"'));
  assert.ok(html.includes('href="/articles/pikobuy-shipping-cost/"'));
  assert.ok(html.includes('href="/articles/pikobuy-tracking-guide/"'));
  assert.ok(html.includes('href="/articles/pikobuy-return-policy-guide/"'));
  const home = await readFile(path.join(out, "index.html"), "utf8");
  const archive = await htmlFor("articles");
  assert.ok(home.includes('href="/articles/pikobuy-customs-taxes-guide"'));
  assert.ok(home.includes('dateTime="2026-08-12"'));
  assert.ok(archive.includes("Pikobuy Customs and Taxes"));
});

test("customs article body stays within the requested editorial length", async () => {
  const html = await htmlFor("articles/pikobuy-customs-taxes-guide");
  const sections = [...html.matchAll(/<section class="article-section"[\s\S]*?<\/section>/g)].map((match) => match[0]).join(" ");
  const words = sections.replace(/<[^>]+>/g, " ").replace(/&(?:amp|quot|#x27|#39);/g, " ").split(/\s+/).filter(Boolean);
  assert.ok(words.length >= 1200, `article body should contain at least 1,200 words, found ${words.length}`);
  assert.ok(words.length <= 1800, `article body should contain at most 1,800 words, found ${words.length}`);
});

test("customs comparison visual and related cards remain mobile-safe", async () => {
  const css = await readFile(path.resolve("app/globals.css"), "utf8");
  const customsSvg = await readFile(path.resolve("public/pikobuy-customs-taxes-2026.svg"), "utf8");
  assert.match(css, /\.article-visual img\s*\{[^}]*width:\s*100%[^}]*height:\s*auto/s);
  assert.match(css, /@media \(max-width: 580px\)[\s\S]*\.article-related > div\s*\{\s*grid-template-columns:\s*1fr;/);
  assert.ok(customsSvg.includes('viewBox="0 0 1200 630"'));
  assert.ok(customsSvg.includes("Pikobuy customs and taxes planning map for 2026"));
});
test("representative multilingual and product routes use self canonicals", async () => {
  const checks = [
    ["guides", "https://pikobuyy.com/guides/"],
    ["faq/what-is-a-pikobuy-spreadsheet", "https://pikobuyy.com/faq/what-is-a-pikobuy-spreadsheet/"],
    ["products/fendi-slides", "https://pikobuyy.com/products/fendi-slides/"],
    ["de", "https://pikobuyy.com/de/"],
    ["fr/articles", "https://pikobuyy.com/fr/articles/"],
    ["es/guides/qc-photo-checklist", "https://pikobuyy.com/es/guides/qc-photo-checklist/"],
  ];

  for (const [route, canonical] of checks) {
    const html = await htmlFor(route);
    assert.equal(canonicalFrom(html), canonical);
    assert.match(html, /hreflang="x-default"/i);
  }
});
