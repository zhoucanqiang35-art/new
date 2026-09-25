import assert from "node:assert/strict";
import test from "node:test";

async function request(pathname) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
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
}

test("renders production SEO metadata", async () => {
  const response = await request("/");

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  const html = await response.text();
  assert.match(html, /<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*index[^"']*follow/i);
  assert.doesNotMatch(html, /noindex/i);
  assert.match(html, /<link[^>]+rel=["']canonical["'][^>]+href=["']https:\/\/lolobuyspreadsheet\.de\/["']/i);
});

test("serves crawlable robots and a complete multilingual sitemap", async () => {
  const robotsResponse = await request("/robots.txt");
  assert.equal(robotsResponse.status, 200);
  const robots = await robotsResponse.text();
  assert.match(robots, /Allow:\s*\//i);
  assert.match(robots, /Sitemap:\s*https:\/\/lolobuyspreadsheet\.de\/sitemap\.xml/i);

  const sitemapResponse = await request("/sitemap.xml");
  assert.equal(sitemapResponse.status, 200);
  assert.match(sitemapResponse.headers.get("content-type") ?? "", /application\/xml/i);
  const sitemap = await sitemapResponse.text();
  assert.equal((sitemap.match(/<url>/g) ?? []).length, 744);
  assert.match(sitemap, /https:\/\/lolobuyspreadsheet\.de\/de\/guide\/qc-photos/);
  assert.match(sitemap, /https:\/\/lolobuyspreadsheet\.de\/guide\/lolobuy-germany-guide/);
  assert.match(sitemap, /https:\/\/lolobuyspreadsheet\.de\/guide\/lolobuy-uk-guide/);
  assert.match(sitemap, /https:\/\/lolobuyspreadsheet\.de\/guide\/lolobuy-canada-guide/);
  assert.match(sitemap, /https:\/\/lolobuyspreadsheet\.de\/guide\/lolobuy-usa-guide/);
  assert.match(sitemap, /https:\/\/lolobuyspreadsheet\.de\/guide\/lolobuy-france-guide/);
  assert.match(sitemap, /https:\/\/lolobuyspreadsheet\.de\/guide\/lolobuy-reviews/);
  assert.match(sitemap, /https:\/\/lolobuyspreadsheet\.de\/guide\/lolobuy-vs-superbuy/);
  assert.match(sitemap, /https:\/\/lolobuyspreadsheet\.de\/guide\/lolobuy-update-september-2026/);
  assert.match(sitemap, /https:\/\/lolobuyspreadsheet\.de\/guide\/lolobuy-italy-guide/);
  assert.match(sitemap, /https:\/\/lolobuyspreadsheet\.de\/guide\/lolobuy-netherlands-guide/);
  assert.match(sitemap, /https:\/\/lolobuyspreadsheet\.de\/guide\/lolobuy-spain-guide/);
  assert.match(sitemap, /https:\/\/lolobuyspreadsheet\.de\/guide\/lolobuy-sweden-guide/);
  assert.match(sitemap, /https:\/\/lolobuyspreadsheet\.de\/guide\/lolobuy-poland-guide/);
  assert.match(sitemap, /https:\/\/lolobuyspreadsheet\.de\/guide\/lolobuy-portugal-guide/);
  assert.match(sitemap, /https:\/\/lolobuyspreadsheet\.de\/guide\/lolobuy-belgium-guide/);
  assert.match(sitemap, /https:\/\/lolobuyspreadsheet\.de\/guide\/lolobuy-ireland-guide/);
});

test("publishes the Ireland guide with crawlable article metadata", async () => {
  const response = await request("/guide/lolobuy-ireland-guide");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /LoloBuy Ireland guide 2026/);
  assert.match(html, /https:\/\/schema\.org/);
  assert.match(html, /Article/);
  assert.match(html, /datePublished/);
  assert.match(html, /name=["']keywords["'][^>]+LoloBuy Ireland/i);
  assert.match(html, /hreflang=["']x-default["'][^>]+\/guide\/lolobuy-ireland-guide/i);
  assert.match(html, /Irish Revenue/);
  assert.match(html, /version 1\.0\.7/);
  assert.match(html, /23%/);
  assert.match(html, /1 July 2026/);
  assert.match(html, /distinct product types/i);
  assert.match(html, /Browse the product database/);
  assert.match(html, /<link[^>]+rel=["']canonical["'][^>]+href=["']https:\/\/lolobuyspreadsheet\.de\/guide\/lolobuy-ireland-guide["']/i);
  assert.doesNotMatch(html, /noindex/i);
});

test("publishes the Belgium guide with crawlable article metadata", async () => {
  const response = await request("/guide/lolobuy-belgium-guide");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /LoloBuy Belgium guide 2026/);
  assert.match(html, /https:\/\/schema\.org/);
  assert.match(html, /Article/);
  assert.match(html, /datePublished/);
  assert.match(html, /name=["']keywords["'][^>]+LoloBuy Belgium/i);
  assert.match(html, /hreflang=["']x-default["'][^>]+\/guide\/lolobuy-belgium-guide/i);
  assert.match(html, /Belgian Federal Public Service Finance/);
  assert.match(html, /version 1\.0\.7/);
  assert.match(html, /21%/);
  assert.match(html, /1 July 2026/);
  assert.match(html, /tariff classification/i);
  assert.match(html, /Browse the product database/);
  assert.match(html, /<link[^>]+rel=["']canonical["'][^>]+href=["']https:\/\/lolobuyspreadsheet\.de\/guide\/lolobuy-belgium-guide["']/i);
  assert.doesNotMatch(html, /noindex/i);
});

test("publishes the Portugal guide with crawlable article metadata", async () => {
  const response = await request("/guide/lolobuy-portugal-guide");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /LoloBuy Portugal guide 2026/);
  assert.match(html, /https:\/\/schema\.org/);
  assert.match(html, /Article/);
  assert.match(html, /datePublished/);
  assert.match(html, /name=["']keywords["'][^>]+LoloBuy Portugal/i);
  assert.match(html, /hreflang=["']x-default["'][^>]+\/guide\/lolobuy-portugal-guide/i);
  assert.match(html, /Portuguese Tax and Customs Authority/);
  assert.match(html, /23%/);
  assert.match(html, /1 July 2026/);
  assert.match(html, /Madeira/);
  assert.match(html, /Azores/);
  assert.match(html, /tariff classification/i);
  assert.match(html, /Browse the product database/);
  assert.match(html, /<link[^>]+rel=["']canonical["'][^>]+href=["']https:\/\/lolobuyspreadsheet\.de\/guide\/lolobuy-portugal-guide["']/i);
  assert.doesNotMatch(html, /noindex/i);
});

test("publishes the Poland guide with crawlable article metadata", async () => {
  const response = await request("/guide/lolobuy-poland-guide");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /LoloBuy Poland guide 2026/);
  assert.match(html, /https:\/\/schema\.org/);
  assert.match(html, /Article/);
  assert.match(html, /datePublished/);
  assert.match(html, /name=["']keywords["'][^>]+LoloBuy Poland/i);
  assert.match(html, /hreflang=["']x-default["'][^>]+\/guide\/lolobuy-poland-guide/i);
  assert.match(html, /Polish Ministry of Finance/);
  assert.match(html, /23%/);
  assert.match(html, /1 July 2026/);
  assert.match(html, /tariff classification/i);
  assert.match(html, /Browse the product database/);
  assert.match(html, /<link[^>]+rel=["']canonical["'][^>]+href=["']https:\/\/lolobuyspreadsheet\.de\/guide\/lolobuy-poland-guide["']/i);
  assert.doesNotMatch(html, /noindex/i);
});

test("publishes the Sweden guide with crawlable article metadata", async () => {
  const response = await request("/guide/lolobuy-sweden-guide");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /LoloBuy Sweden guide 2026/);
  assert.match(html, /https:\/\/schema\.org/);
  assert.match(html, /Article/);
  assert.match(html, /datePublished/);
  assert.match(html, /name=["']keywords["'][^>]+LoloBuy Sweden/i);
  assert.match(html, /hreflang=["']x-default["'][^>]+\/guide\/lolobuy-sweden-guide/i);
  assert.match(html, /Swedish Customs/);
  assert.match(html, /1 July 2026/);
  assert.match(html, /1 November 2026/);
  assert.match(html, /SEK 1,655\.30/);
  assert.match(html, /Browse the product database/);
  assert.match(html, /<link[^>]+rel=["']canonical["'][^>]+href=["']https:\/\/lolobuyspreadsheet\.de\/guide\/lolobuy-sweden-guide["']/i);
  assert.doesNotMatch(html, /noindex/i);
});

test("publishes the Spain guide with crawlable article metadata", async () => {
  const response = await request("/guide/lolobuy-spain-guide");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /LoloBuy Spain guide 2026/);
  assert.match(html, /https:\/\/schema\.org/);
  assert.match(html, /Article/);
  assert.match(html, /datePublished/);
  assert.match(html, /name=["']keywords["'][^>]+LoloBuy Spain/i);
  assert.match(html, /hreflang=["']x-default["'][^>]+\/guide\/lolobuy-spain-guide/i);
  assert.match(html, /Spanish Tax Agency/);
  assert.match(html, /1 July 2026/);
  assert.match(html, /four years/i);
  assert.match(html, /Canary Islands/);
  assert.match(html, /Browse the product database/);
  assert.match(html, /<link[^>]+rel=["']canonical["'][^>]+href=["']https:\/\/lolobuyspreadsheet\.de\/guide\/lolobuy-spain-guide["']/i);
  assert.doesNotMatch(html, /noindex/i);
});

test("publishes the Netherlands guide with crawlable article metadata", async () => {
  const response = await request("/guide/lolobuy-netherlands-guide");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /LoloBuy Netherlands guide 2026/);
  assert.match(html, /https:\/\/schema\.org/);
  assert.match(html, /Article/);
  assert.match(html, /datePublished/);
  assert.match(html, /name=["']keywords["'][^>]+LoloBuy Netherlands/i);
  assert.match(html, /hreflang=["']x-default["'][^>]+\/guide\/lolobuy-netherlands-guide/i);
  assert.match(html, /Dutch Customs/);
  assert.match(html, /18 August 2026/);
  assert.match(html, /21%/);
  assert.match(html, /product category/i);
  assert.match(html, /Browse the product database/);
  assert.match(html, /<link[^>]+rel=["']canonical["'][^>]+href=["']https:\/\/lolobuyspreadsheet\.de\/guide\/lolobuy-netherlands-guide["']/i);
  assert.doesNotMatch(html, /noindex/i);
});

test("publishes the Italy guide with crawlable article metadata", async () => {
  const response = await request("/guide/lolobuy-italy-guide");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /LoloBuy Italy guide 2026/);
  assert.match(html, /https:\/\/schema\.org/);
  assert.match(html, /Article/);
  assert.match(html, /datePublished/);
  assert.match(html, /name=["']keywords["'][^>]+LoloBuy Italy/i);
  assert.match(html, /hreflang=["']x-default["'][^>]+\/guide\/lolobuy-italy-guide/i);
  assert.match(html, /Italian Customs and Monopolies Agency/);
  assert.match(html, /1 July 2026/);
  assert.match(html, /tariff classification/i);
  assert.match(html, /Browse the product database/);
  assert.match(html, /<link[^>]+rel=["']canonical["'][^>]+href=["']https:\/\/lolobuyspreadsheet\.de\/guide\/lolobuy-italy-guide["']/i);
  assert.doesNotMatch(html, /noindex/i);
});

test("publishes the dated September 2026 LoloBuy update", async () => {
  const response = await request("/guide/lolobuy-update-september-2026");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /LoloBuy update September 2026/);
  assert.match(html, /https:\/\/schema\.org/);
  assert.match(html, /Article/);
  assert.match(html, /datePublished/);
  assert.match(html, /name=["']keywords["'][^>]+LoloBuy update 2026/i);
  assert.match(html, /hreflang=["']x-default["'][^>]+\/guide\/lolobuy-update-september-2026/i);
  assert.match(html, /version 1\.0\.4/);
  assert.match(html, /26 August 2026/);
  assert.match(html, /com\.hillian\.lolobuy/);
  assert.match(html, /Browse the product database/);
  assert.match(html, /<link[^>]+rel=["']canonical["'][^>]+href=["']https:\/\/lolobuyspreadsheet\.de\/guide\/lolobuy-update-september-2026["']/i);
  assert.doesNotMatch(html, /noindex/i);
});

test("publishes the evidence-based LoloBuy vs Superbuy guide", async () => {
  const response = await request("/guide/lolobuy-vs-superbuy");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /LoloBuy vs Superbuy 2026/);
  assert.match(html, /https:\/\/schema\.org/);
  assert.match(html, /Article/);
  assert.match(html, /datePublished/);
  assert.match(html, /name=["']keywords["'][^>]+LoloBuy vs Superbuy/i);
  assert.match(html, /hreflang=["']x-default["'][^>]+\/guide\/lolobuy-vs-superbuy/i);
  assert.match(html, /90 days/);
  assert.match(html, /shopping agent versus parcel forwarding/i);
  assert.match(html, /Browse the product database/);
  assert.match(html, /<link[^>]+rel=["']canonical["'][^>]+href=["']https:\/\/lolobuyspreadsheet\.de\/guide\/lolobuy-vs-superbuy["']/i);
  assert.doesNotMatch(html, /noindex/i);
});

test("publishes the evidence-led LoloBuy reviews guide", async () => {
  const response = await request("/guide/lolobuy-reviews");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /LoloBuy reviews 2026/);
  assert.match(html, /https:\/\/schema\.org/);
  assert.match(html, /Article/);
  assert.match(html, /datePublished/);
  assert.match(html, /name=["']keywords["'][^>]+LoloBuy reviews/i);
  assert.match(html, /hreflang=["']x-default["'][^>]+\/guide\/lolobuy-reviews/i);
  assert.match(html, /Trustpilot/);
  assert.match(html, /KevonJKV/);
  assert.match(html, /poncecatchemall/);
  assert.match(html, /Browse the product database/);
  assert.match(html, /<link[^>]+rel=["']canonical["'][^>]+href=["']https:\/\/lolobuyspreadsheet\.de\/guide\/lolobuy-reviews["']/i);
  assert.doesNotMatch(html, /noindex/i);
});

test("publishes the France guide with crawlable article metadata", async () => {
  const response = await request("/guide/lolobuy-france-guide");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /LoloBuy France guide 2026/);
  assert.match(html, /https:\/\/schema\.org/);
  assert.match(html, /Article/);
  assert.match(html, /datePublished/);
  assert.match(html, /name=["']keywords["'][^>]+LoloBuy France/i);
  assert.match(html, /hreflang=["']x-default["'][^>]+\/guide\/lolobuy-france-guide/i);
  assert.match(html, /French Customs/);
  assert.match(html, /1 July 2026/);
  assert.match(html, /Browse the product database/);
  assert.match(html, /<link[^>]+rel=["']canonical["'][^>]+href=["']https:\/\/lolobuyspreadsheet\.de\/guide\/lolobuy-france-guide["']/i);
  assert.doesNotMatch(html, /noindex/i);
});

test("publishes the USA guide with crawlable article metadata", async () => {
  const response = await request("/guide/lolobuy-usa-guide");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /LoloBuy USA guide 2026/);
  assert.match(html, /https:\/\/schema\.org/);
  assert.match(html, /Article/);
  assert.match(html, /datePublished/);
  assert.match(html, /name=["']keywords["'][^>]+LoloBuy USA/i);
  assert.match(html, /hreflang=["']x-default["'][^>]+\/guide\/lolobuy-usa-guide/i);
  assert.match(html, /U\.S\. Customs and Border Protection/);
  assert.match(html, /29 August 2025/);
  assert.match(html, /Browse the product database/);
  assert.match(html, /<link[^>]+rel=["']canonical["'][^>]+href=["']https:\/\/lolobuyspreadsheet\.de\/guide\/lolobuy-usa-guide["']/i);
  assert.doesNotMatch(html, /noindex/i);
});

test("publishes the Canada guide with crawlable article metadata", async () => {
  const response = await request("/guide/lolobuy-canada-guide");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /LoloBuy Canada guide 2026/);
  assert.match(html, /https:\/\/schema\.org/);
  assert.match(html, /Article/);
  assert.match(html, /datePublished/);
  assert.match(html, /name=["']keywords["'][^>]+LoloBuy Canada/i);
  assert.match(html, /hreflang=["']x-default["'][^>]+\/guide\/lolobuy-canada-guide/i);
  assert.match(html, /Canada Border Services Agency/);
  assert.match(html, /Browse the product database/);
  assert.match(html, /<link[^>]+rel=["']canonical["'][^>]+href=["']https:\/\/lolobuyspreadsheet\.de\/guide\/lolobuy-canada-guide["']/i);
  assert.doesNotMatch(html, /noindex/i);
});

test("publishes the UK guide with crawlable article metadata", async () => {
  const response = await request("/guide/lolobuy-uk-guide");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /LoloBuy UK guide 2026/);
  assert.match(html, /https:\/\/schema\.org/);
  assert.match(html, /Article/);
  assert.match(html, /datePublished/);
  assert.match(html, /name=["']keywords["'][^>]+LoloBuy UK/i);
  assert.match(html, /hreflang=["']x-default["'][^>]+\/guide\/lolobuy-uk-guide/i);
  assert.match(html, /HM Revenue/);
  assert.match(html, /Browse the product database/);
  assert.match(html, /<link[^>]+rel=["']canonical["'][^>]+href=["']https:\/\/lolobuyspreadsheet\.de\/guide\/lolobuy-uk-guide["']/i);
  assert.doesNotMatch(html, /noindex/i);
});

test("publishes the Germany guide with crawlable article metadata", async () => {
  const response = await request("/guide/lolobuy-germany-guide");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /LoloBuy Germany guide 2026/);
  assert.match(html, /https:\/\/schema\.org/);
  assert.match(html, /Article/);
  assert.match(html, /datePublished/);
  assert.match(html, /name=["']keywords["'][^>]+LoloBuy Germany/i);
  assert.match(html, /hreflang=["']x-default["'][^>]+\/guide\/lolobuy-germany-guide/i);
  assert.match(html, /European Commission/);
  assert.match(html, /Browse the product database/);
  assert.match(html, /<link[^>]+rel=["']canonical["'][^>]+href=["']https:\/\/lolobuyspreadsheet\.de\/guide\/lolobuy-germany-guide["']/i);
  assert.doesNotMatch(html, /noindex/i);
});
