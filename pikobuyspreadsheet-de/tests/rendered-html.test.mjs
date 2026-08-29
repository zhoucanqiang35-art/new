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
  const response = await render("/categories/shoes");
  const html = await response.text();
  assert.equal(response.status, 200);
  assert.match(html, /<title>Shoes PikoBuy Spreadsheet Research<\/title>/);
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
});

test("sitemap contains the new English and German category pages", async () => {
  const response = await render("/sitemap.xml");
  const xml = await response.text();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^application\/xml\b/i);
  assert.match(xml, /https:\/\/pikobuyspreadsheet\.de\/categories\/shoes/);
  assert.match(xml, /https:\/\/pikobuyspreadsheet\.de\/de\/categories\/shoes/);
  assert.doesNotMatch(xml, /https:\/\/pikobuyspreadsheet\.de\/fr\/categories\/shoes/);
  assert.equal((xml.match(/<url>/g) || []).length, 164);
});
