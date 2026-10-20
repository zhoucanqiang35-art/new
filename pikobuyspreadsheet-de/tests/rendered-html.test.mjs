import assert from "node:assert/strict";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);
const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
const ctx = { waitUntil() {}, passThroughOnException() {} };

async function render(path) {
  return worker.fetch(new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }), env, ctx);
}

test("homepage is indexable and exposes website search schema", async () => {
  const response = await render("/");
  const html = await response.text();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  assert.match(html, /<link rel="canonical" href="https:\/\/pikobuyspreadsheet\.de\/"/i);
  assert.match(html, /"@type":"WebSite"/);
  assert.doesNotMatch(html, /noindex/i);
});

test("category detail is a real crawlable page", async () => {
  const response = await render("/shoes");
  const html = await response.text();
  assert.equal(response.status, 200);
  assert.match(html, /<title>PikoBuy Shoes Spreadsheet \| QC &amp; Sizing Research<\/title>/);
  assert.match(html, /<link rel="canonical" href="https:\/\/pikobuyspreadsheet\.de\/shoes"/i);
  assert.match(html, /hrefLang="de" href="https:\/\/pikobuyspreadsheet\.de\/de\/shoes"/i);
  assert.match(html, /Check outsole shape, stitching, bonding and pair symmetry/);
  assert.match(html, /"@type":"BreadcrumbList"/);
  assert.match(html, /https:\/\/findspreadsheet\.com\/shoes\//);
});

test("product detail discloses snapshot status and breadcrumb data", async () => {
  const response = await render("/products/nike-phantom-gx-elite-ag-pro");
  const html = await response.text();
  assert.equal(response.status, 200);
  assert.match(html, /Snapshot date/);
  assert.match(html, /availability not assumed/);
  assert.match(html, /"@type":"BreadcrumbList"/);
  assert.match(html, /"@type":"ItemPage"/);
  assert.doesNotMatch(html, /"@type":"Offer"/);
});

test("FAQ content exposes matching FAQPage structured data", async () => {
  const response = await render("/faq");
  const html = await response.text();
  assert.equal(response.status, 200);
  assert.match(html, /"@type":"FAQPage"/);
  assert.match(html, /"@type":"Question"/);
  assert.match(html, /What is a PikoBuy spreadsheet\?/);
  assert.match(html, /It is an independent product-discovery format/);
});

test("sitemap contains the new English and German category pages", async () => {
  const response = await render("/sitemap.xml");
  const xml = await response.text();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^application\/xml\b/i);
  assert.match(xml, /https:\/\/pikobuyspreadsheet\.de\/shoes/);
  assert.match(xml, /https:\/\/pikobuyspreadsheet\.de\/de\/shoes/);
  assert.doesNotMatch(xml, /https:\/\/pikobuyspreadsheet\.de\/fr\/shoes/);
  assert.match(xml, /https:\/\/pikobuyspreadsheet\.de\/articles\/shipping-estimate-volumetric-weight/);
  assert.equal((xml.match(/<url>/g) || []).length, 173);
});

test("Google sitemap alias and robots declaration stay in sync", async () => {
  const [sitemapResponse, robotsResponse] = await Promise.all([
    render("/sitemap-google.xml"),
    render("/robots.txt"),
  ]);
  const [xml, robots] = await Promise.all([sitemapResponse.text(), robotsResponse.text()]);
  assert.equal(sitemapResponse.status, 200);
  assert.match(sitemapResponse.headers.get("content-type") ?? "", /^application\/xml\b/i);
  assert.equal((xml.match(/<url>/g) || []).length, 173);
  assert.equal(robotsResponse.status, 200);
  assert.match(robots, /Sitemap: https:\/\/pikobuyspreadsheet\.de\/sitemap-google\.xml/);
});

test("shipping estimate article is canonical, sourced, linked and available in every locale route", async () => {
  const articlePath = "/articles/shipping-estimate-volumetric-weight";
  const response = await render(articlePath);
  const html = await response.text();
  assert.equal(response.status, 200);
  assert.match(html, /<title>PikoBuy Shipping Estimate and Volumetric Weight: A Practical Guide<\/title>/);
  assert.match(html, /<link rel="canonical" href="https:\/\/pikobuyspreadsheet\.de\/articles\/shipping-estimate-volumetric-weight"/i);
  assert.match(html, /Official sources checked · 29 August 2026/);
  assert.match(html, /Five-stage diagram for preparing a PikoBuy shipping estimate/);
  assert.match(html, /href="https:\/\/findspreadsheet\.com\/AllProducts\/"/);
  assert.doesNotMatch(html, /href="https:\/\/(?!pikobuyspreadsheet\.de|findspreadsheet\.com)/i);

  for (const locale of ["de", "fr", "es", "it", "nl", "pl", "pt", "sv"]) {
    const localizedResponse = await render(`/${locale}${articlePath}`);
    assert.equal(localizedResponse.status, 200, `${locale} article route should return 200`);
  }
});
