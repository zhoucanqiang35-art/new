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
