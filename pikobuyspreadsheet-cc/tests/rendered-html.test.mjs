import assert from "node:assert/strict";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

const env = {
  ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
};
const ctx = { waitUntil() {}, passThroughOnException() {} };

async function get(path) {
  return worker.fetch(new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }), env, ctx);
}

test("serves the formal home route with preview-safe SEO metadata", async () => {
  const response = await get("/");
  const html = await response.text();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  assert.match(html, /rel="canonical" href="https:\/\/pikobuyspreadsheet\.cc\/"/);
  assert.match(html, /hrefLang="en" href="https:\/\/pikobuyspreadsheet\.cc\/"/);
  assert.match(html, /hrefLang="x-default" href="https:\/\/pikobuyspreadsheet\.cc\/"/);
  assert.match(html, /name="robots" content="noindex, follow"/);
  assert.doesNotMatch(html, /codex-preview|\/preview\/workbench/);
});

test("removes the old preview route and serves clean article routes", async () => {
  assert.equal((await get("/preview/workbench")).status, 404);
  assert.equal((await get("/articles")).status, 200);
  assert.equal((await get("/categories")).status, 200);
  assert.equal((await get("/guides/tracking-guide")).status, 200);
});

test("renders a useful 404 instead of a blank theme route", async () => {
  const response = await get("/no-such-research-route");
  const html = await response.text();
  assert.equal(response.status, 404);
  assert.match(html, /This research record is not available/);
  assert.match(html, /href="\/articles"/);
  assert.match(html, /href="\/categories"/);
});

test("keeps representative English category and source pages materially distinct", async () => {
  const shoes = await (await get("/categories/shoes-spreadsheet")).text();
  const hoodies = await (await get("/categories/hoodies-spreadsheet")).text();
  const taobao = await (await get("/guides/taobao-links")).text();
  const supplier = await (await get("/guides/1688-links")).text();
  assert.match(shoes, /insole or outsole length/);
  assert.doesNotMatch(hoodies, /insole or outsole length/);
  assert.match(hoodies, /pit-to-pit width/);
  assert.match(taobao, /Taobao item ID/);
  assert.match(supplier, /minimum order, tier price, unit/);
});

test("renders all fifteen FAQ answers and FAQ structured data", async () => {
  const response = await get("/faq");
  const html = await response.text();
  assert.equal(response.status, 200);
  assert.match(html, /"@type":"FAQPage"/);
  assert.equal((html.match(/"@type":"Question"/g) || []).length, 15);
  assert.equal((html.match(/<details/g) || []).length, 15);
});

test("publishes an English-only reviewed sitemap until translation QA is approved", async () => {
  const response = await get("/sitemap.xml");
  const xml = await response.text();
  assert.equal(response.status, 200);
  assert.equal((xml.match(/<loc>/g) || []).length, 41);
  assert.doesNotMatch(xml, /pikobuyspreadsheet\.cc\/(de|fr|es|it|nl)\//);
});
