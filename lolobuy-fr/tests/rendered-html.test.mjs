import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

function readOutput(relativePath) {
  return readFile(new URL(`../out/${relativePath}/index.html`, import.meta.url), "utf8");
}

test("renders localized article text before client JavaScript runs", async () => {
  const html = await readOutput("fr/articles/lolobuy-spreadsheet-guide");

  assert.match(html, /Comment utiliser une feuille de calcul LoloBuy sans perdre la source/);
  assert.match(html, /Tous les articles de recherche/);
  assert.match(html, /href="\/de\/articles\/lolobuy-spreadsheet-guide"/);
  assert.doesNotMatch(html, />How to Use a LoloBuy Spreadsheet Without Losing the Source</);
});

test("renders the English fee ledger with source notes and Article schema", async () => {
  const html = await readOutput("articles/lolobuy-fees-exchange-rate-ledger");

  assert.match(html, /LoloBuy Fees and Exchange Rates: Build a Cost Ledger Before You Ship/);
  assert.match(html, /How to Purchase on LoloBuy/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /2026-08-28/);

  const localizedHtml = await readOutput("fr/articles/lolobuy-fees-exchange-rate-ledger");
  assert.match(localizedHtml, /Tous les articles de recherche/);
  assert.match(localizedHtml, /LoloBuy Fees and Exchange Rates: Build a Cost Ledger Before You Ship/);
});

test("renders the refund guide with reader-first structure and supported schema", async () => {
  const html = await readOutput("articles/lolobuy-refund-cancel-return-guide");

  assert.match(html, /LoloBuy Refund Guide: How to Cancel or Return an Order/);
  assert.match(html, /Article insights/);
  assert.match(html, /Table of contents/);
  assert.match(html, /href="#how-do-lolobuy-warehouse-returns-work"/);
  assert.match(html, /<h3[^>]*>Who pays return shipping and service costs\?/);
  assert.match(html, /<table>/);
  assert.match(html, /LoloBuy refund FAQ/);
  assert.match(html, /lolobuy-refund-return-order-hero\.webp/);
  assert.match(html, /"@type":"Article"/);
  assert.doesNotMatch(html, /"@type":"FAQPage"/);
  assert.equal((html.match(/<h1/g) ?? []).length, 1);
});

test("publishes the refund guide in the article hub and sitemap", async () => {
  const [hub, sitemap] = await Promise.all([
    readOutput("en/seo-articles"),
    readFile(new URL("../out/sitemap.xml", import.meta.url), "utf8"),
  ]);

  assert.match(hub, /LoloBuy refund guide: how to cancel or return an order/);
  assert.match(hub, /href="\/articles\/lolobuy-refund-cancel-return-guide"/);
  assert.match(sitemap, /https:\/\/lolobuy\.fr\/articles\/lolobuy-refund-cancel-return-guide\//);
  assert.match(sitemap, /2026-09-11/);
});
