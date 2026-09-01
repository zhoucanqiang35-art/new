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
  assert.equal((sitemap.match(/<url>/g) ?? []).length, 456);
  assert.match(sitemap, /https:\/\/lolobuyspreadsheet\.de\/de\/guide\/qc-photos/);
  assert.match(sitemap, /https:\/\/lolobuyspreadsheet\.de\/guide\/lolobuy-germany-guide/);
  assert.match(sitemap, /https:\/\/lolobuyspreadsheet\.de\/guide\/lolobuy-uk-guide/);
  assert.match(sitemap, /https:\/\/lolobuyspreadsheet\.de\/guide\/lolobuy-canada-guide/);
  assert.match(sitemap, /https:\/\/lolobuyspreadsheet\.de\/guide\/lolobuy-usa-guide/);
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
