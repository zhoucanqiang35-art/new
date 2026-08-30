import assert from "node:assert/strict";
import test from "node:test";

test("renders production index metadata", async () => {
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
  assert.match(html, /<meta name="robots" content="index, follow"\/>/i);
  assert.match(html, /<link rel="canonical" href="https:\/\/lolobuy\.id\/"\/>/i);
});

test("publishes the tracking guide only at its English canonical URL", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("tracking-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const context = { waitUntil() {}, passThroughOnException() {} };
  const slug = "lolobuy-tracking-status-delay-guide";

  const articleResponse = await worker.fetch(new Request(`https://lolobuy.id/en/article/${slug}`), env, context);
  const articleHtml = await articleResponse.text();
  assert.equal(articleResponse.status, 200);
  assert.match(articleHtml, /<title>LoloBuy Tracking Guide: Parcel Statuses &amp; Delays<\/title>/);
  assert.match(articleHtml, new RegExp(`rel="canonical" href="https://lolobuy\\.id/en/article/${slug}"`));
  assert.match(articleHtml, new RegExp(`hrefLang="en" href="https://lolobuy\\.id/en/article/${slug}"`));
  assert.doesNotMatch(articleHtml, new RegExp(`/de/article/${slug}`));
  assert.match(articleHtml, /"@type":"Article"/);
  assert.match(articleHtml, /Compare routes before parcel submission/);
  assert.match(articleHtml, /https:\/\/findspreadsheet\.com\//);

  const untranslatedResponse = await worker.fetch(new Request(`https://lolobuy.id/de/article/${slug}`), env, context);
  assert.equal(untranslatedResponse.status, 404);

  const sitemapResponse = await worker.fetch(new Request("https://lolobuy.id/sitemap.xml"), env, context);
  const sitemapXml = await sitemapResponse.text();
  assert.equal(sitemapResponse.status, 200);
  assert.match(sitemapXml, new RegExp(`<loc>https://lolobuy\\.id/en/article/${slug}</loc>`));
  assert.doesNotMatch(sitemapXml, new RegExp(`<loc>https://lolobuy\\.id/de/article/${slug}</loc>`));
});

test("publishes the USA customs guide only at its English canonical URL", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("usa-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const context = { waitUntil() {}, passThroughOnException() {} };
  const slug = "lolobuy-usa-customs-delivery-guide";

  const articleResponse = await worker.fetch(new Request(`https://lolobuy.id/en/article/${slug}`), env, context);
  const articleHtml = await articleResponse.text();
  assert.equal(articleResponse.status, 200);
  assert.match(articleHtml, /<title>LoloBuy USA Guide: Customs &amp; Delivery Planning<\/title>/);
  assert.match(articleHtml, new RegExp(`rel="canonical" href="https://lolobuy\\.id/en/article/${slug}"`));
  assert.match(articleHtml, new RegExp(`hrefLang="en" href="https://lolobuy\\.id/en/article/${slug}"`));
  assert.doesNotMatch(articleHtml, new RegExp(`/fr/article/${slug}`));
  assert.match(articleHtml, /"@type":"Article"/);
  assert.match(articleHtml, /Do not build a 2026 budget around the old \$800 rule/);
  assert.match(articleHtml, /Research products in FindSpreadsheet/);

  const hubResponse = await worker.fetch(new Request("https://lolobuy.id/en/seo-articles"), env, context);
  const hubHtml = await hubResponse.text();
  assert.equal(hubResponse.status, 200);
  assert.match(hubHtml, new RegExp(`/en/article/${slug}`));

  const untranslatedResponse = await worker.fetch(new Request(`https://lolobuy.id/fr/article/${slug}`), env, context);
  assert.equal(untranslatedResponse.status, 404);

  const sitemapResponse = await worker.fetch(new Request("https://lolobuy.id/sitemap.xml"), env, context);
  const sitemapXml = await sitemapResponse.text();
  assert.equal(sitemapResponse.status, 200);
  assert.match(sitemapXml, new RegExp(`<loc>https://lolobuy\\.id/en/article/${slug}</loc>`));
  assert.doesNotMatch(sitemapXml, new RegExp(`<loc>https://lolobuy\\.id/fr/article/${slug}</loc>`));
});
