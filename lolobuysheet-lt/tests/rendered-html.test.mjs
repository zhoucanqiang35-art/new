import assert from "node:assert/strict";
import test from "node:test";

const expectedTitle = /<title>LoloBuy Spreadsheet: Finds, QC Photos &amp; Shipping Guide \(2026\)<\/title>/i;
const expectedCanonical = /<link[^>]+rel="canonical"[^>]+href="https:\/\/lolobuysheet\.lt\/"/i;
const webSiteSchema = /"@type":"WebSite"/;

test("renders production SEO metadata", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  const html = await response.text();
  assert.match(html, expectedTitle);
  assert.match(html, expectedCanonical);
  assert.match(html, webSiteSchema);
});
