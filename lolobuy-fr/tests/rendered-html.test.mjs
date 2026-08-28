import assert from "node:assert/strict";
import test from "node:test";

test("renders localized article text before client JavaScript runs", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("locale-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const response = await worker.fetch(
    new Request("http://localhost/fr/articles/lolobuy-spreadsheet-guide/", {
      headers: { accept: "text/html" },
    }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /Comment utiliser une feuille de calcul LoloBuy sans perdre la source/);
  assert.match(html, /Tous les articles de recherche/);
  assert.match(html, /href="\/de\/articles\/lolobuy-spreadsheet-guide"/);
  assert.doesNotMatch(html, />How to Use a LoloBuy Spreadsheet Without Losing the Source</);
});

test("renders the English fee ledger with source notes and Article schema", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("fee-ledger-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const response = await worker.fetch(
    new Request("http://localhost/articles/lolobuy-fees-exchange-rate-ledger/", {
      headers: { accept: "text/html" },
    }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /LoloBuy Fees and Exchange Rates: Build a Cost Ledger Before You Ship/);
  assert.match(html, /How to Purchase on LoloBuy/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /2026-08-28/);

  const localizedResponse = await worker.fetch(
    new Request("http://localhost/fr/articles/lolobuy-fees-exchange-rate-ledger/", {
      headers: { accept: "text/html" },
    }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  const localizedHtml = await localizedResponse.text();
  assert.equal(localizedResponse.status, 200);
  assert.match(localizedHtml, /Tous les articles de recherche/);
  assert.match(localizedHtml, /LoloBuy Fees and Exchange Rates: Build a Cost Ledger Before You Ship/);
});
