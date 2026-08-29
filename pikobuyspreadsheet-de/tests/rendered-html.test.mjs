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
  assert.equal((xml.match(/<url>/g) || []).length, 164);
});
