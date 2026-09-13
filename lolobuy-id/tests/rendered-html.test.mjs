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

test("publishes a canonical spreadsheet cluster and chargeable-weight tool", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("cluster-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const context = { waitUntil() {}, passThroughOnException() {} };

  const hubResponse = await worker.fetch(new Request("https://lolobuy.id/spreadsheet"), env, context);
  const hubHtml = await hubResponse.text();
  assert.equal(hubResponse.status, 200);
  assert.match(hubHtml, /<title>LoloBuy Spreadsheet 2026: Finds, QC &amp; Category Directory<\/title>/);
  assert.match(hubHtml, /rel="canonical" href="https:\/\/lolobuy\.id\/spreadsheet"/);
  assert.match(hubHtml, /"@type":"ItemList"/);
  assert.match(hubHtml, /Search the visible finds/);
  assert.match(hubHtml, /\/spreadsheet\/shoes/);

  const categoryResponse = await worker.fetch(new Request("https://lolobuy.id/spreadsheet/shoes"), env, context);
  const categoryHtml = await categoryResponse.text();
  assert.equal(categoryResponse.status, 200);
  assert.match(categoryHtml, /LoloBuy Shoe Spreadsheet: Sizing, QC and Parcel Checks/);
  assert.match(categoryHtml, /https:\/\/findspreadsheet\.com\/shoes\//);

  const oldCategory = await worker.fetch(new Request("https://lolobuy.id/en/category/shoes"), env, context);
  assert.equal(oldCategory.status, 308);
  assert.equal(oldCategory.headers.get("location"), "https://lolobuy.id/spreadsheet/shoes");

  const calculatorResponse = await worker.fetch(new Request("https://lolobuy.id/shipping-calculator"), env, context);
  const calculatorHtml = await calculatorResponse.text();
  assert.equal(calculatorResponse.status, 200);
  assert.match(calculatorHtml, /Estimate Actual vs Volumetric Parcel Weight/);
  assert.match(calculatorHtml, /Route divisor/);

  const sitemapResponse = await worker.fetch(new Request("https://lolobuy.id/sitemap.xml"), env, context);
  const sitemapXml = await sitemapResponse.text();
  assert.match(sitemapXml, /<loc>https:\/\/lolobuy\.id\/spreadsheet<\/loc>/);
  assert.match(sitemapXml, /<loc>https:\/\/lolobuy\.id\/spreadsheet\/shoes<\/loc>/);
  assert.doesNotMatch(sitemapXml, /<loc>https:\/\/lolobuy\.id\/en\/category\/shoes<\/loc>/);
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

test("publishes the UK VAT guide only at its English canonical URL", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("uk-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const context = { waitUntil() {}, passThroughOnException() {} };
  const slug = "lolobuy-uk-vat-customs-delivery-guide";

  const articleResponse = await worker.fetch(new Request(`https://lolobuy.id/en/article/${slug}`), env, context);
  const articleHtml = await articleResponse.text();
  assert.equal(articleResponse.status, 200);
  assert.match(articleHtml, /<title>LoloBuy UK Guide: VAT, Customs &amp; Parcel Delivery<\/title>/);
  assert.match(articleHtml, new RegExp(`rel="canonical" href="https://lolobuy\\.id/en/article/${slug}"`));
  assert.match(articleHtml, new RegExp(`hrefLang="en" href="https://lolobuy\\.id/en/article/${slug}"`));
  assert.doesNotMatch(articleHtml, new RegExp(`/de/article/${slug}`));
  assert.match(articleHtml, /"@type":"Article"/);
  assert.match(articleHtml, /Understand what the £135 point does—and does not—mean/);
  assert.match(articleHtml, /Open the FindSpreadsheet database/);

  const hubResponse = await worker.fetch(new Request("https://lolobuy.id/en/seo-articles"), env, context);
  const hubHtml = await hubResponse.text();
  assert.equal(hubResponse.status, 200);
  assert.match(hubHtml, new RegExp(`/en/article/${slug}`));

  const untranslatedResponse = await worker.fetch(new Request(`https://lolobuy.id/de/article/${slug}`), env, context);
  assert.equal(untranslatedResponse.status, 404);

  const sitemapResponse = await worker.fetch(new Request("https://lolobuy.id/sitemap.xml"), env, context);
  const sitemapXml = await sitemapResponse.text();
  assert.equal(sitemapResponse.status, 200);
  assert.match(sitemapXml, new RegExp(`<loc>https://lolobuy\\.id/en/article/${slug}</loc>`));
  assert.doesNotMatch(sitemapXml, new RegExp(`<loc>https://lolobuy\\.id/de/article/${slug}</loc>`));
});

test("publishes the Germany customs guide only at its English canonical URL", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("germany-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const context = { waitUntil() {}, passThroughOnException() {} };
  const slug = "lolobuy-germany-import-vat-customs-guide";

  const articleResponse = await worker.fetch(new Request(`https://lolobuy.id/en/article/${slug}`), env, context);
  const articleHtml = await articleResponse.text();
  assert.equal(articleResponse.status, 200);
  assert.match(articleHtml, /<title>LoloBuy Germany Guide: VAT, Customs &amp; Delivery<\/title>/);
  assert.match(articleHtml, new RegExp(`rel="canonical" href="https://lolobuy\\.id/en/article/${slug}"`));
  assert.match(articleHtml, new RegExp(`hrefLang="en" href="https://lolobuy\\.id/en/article/${slug}"`));
  assert.doesNotMatch(articleHtml, new RegExp(`/de/article/${slug}`));
  assert.match(articleHtml, /"@type":"Article"/);
  assert.match(articleHtml, /Do not use an old under-€150 duty shortcut/);
  assert.match(articleHtml, /Build a shortlist in FindSpreadsheet/);

  const hubResponse = await worker.fetch(new Request("https://lolobuy.id/en/seo-articles"), env, context);
  const hubHtml = await hubResponse.text();
  assert.equal(hubResponse.status, 200);
  assert.match(hubHtml, new RegExp(`/en/article/${slug}`));

  const untranslatedResponse = await worker.fetch(new Request(`https://lolobuy.id/de/article/${slug}`), env, context);
  assert.equal(untranslatedResponse.status, 404);

  const sitemapResponse = await worker.fetch(new Request("https://lolobuy.id/sitemap.xml"), env, context);
  const sitemapXml = await sitemapResponse.text();
  assert.equal(sitemapResponse.status, 200);
  assert.match(sitemapXml, new RegExp(`<loc>https://lolobuy\\.id/en/article/${slug}</loc>`));
  assert.doesNotMatch(sitemapXml, new RegExp(`<loc>https://lolobuy\\.id/de/article/${slug}</loc>`));
});

test("publishes the France customs guide only at its English canonical URL", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("france-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const context = { waitUntil() {}, passThroughOnException() {} };
  const slug = "lolobuy-france-vat-customs-parcel-guide";

  const articleResponse = await worker.fetch(new Request(`https://lolobuy.id/en/article/${slug}`), env, context);
  const articleHtml = await articleResponse.text();
  assert.equal(articleResponse.status, 200);
  assert.match(articleHtml, /<title>LoloBuy France Guide: VAT, Customs &amp; Delivery<\/title>/);
  assert.match(articleHtml, new RegExp(`rel="canonical" href="https://lolobuy\\.id/en/article/${slug}"`));
  assert.match(articleHtml, new RegExp(`hrefLang="en" href="https://lolobuy\\.id/en/article/${slug}"`));
  assert.doesNotMatch(articleHtml, new RegExp(`/fr/article/${slug}`));
  assert.match(articleHtml, /"@type":"Article"/);
  assert.match(articleHtml, /Do not budget from the old €150 exemption/);
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

test("publishes the battery shipping guide only at its English canonical URL", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("battery-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const context = { waitUntil() {}, passThroughOnException() {} };
  const slug = "lolobuy-battery-electronics-shipping-guide";

  const articleResponse = await worker.fetch(new Request(`https://lolobuy.id/en/article/${slug}`), env, context);
  const articleHtml = await articleResponse.text();
  assert.equal(articleResponse.status, 200);
  assert.match(articleHtml, /<title>LoloBuy Battery Shipping: Electronics &amp; Route Guide<\/title>/);
  assert.match(articleHtml, new RegExp(`rel="canonical" href="https://lolobuy\\.id/en/article/${slug}"`));
  assert.match(articleHtml, new RegExp(`hrefLang="en" href="https://lolobuy\\.id/en/article/${slug}"`));
  assert.doesNotMatch(articleHtml, new RegExp(`/fr/article/${slug}`));
  assert.match(articleHtml, /"@type":"Article"/);
  assert.match(articleHtml, /Begin with the battery configuration, not the product name/);
  assert.match(articleHtml, /https:\/\/findspreadsheet\.com\/electronics\//);

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

test("publishes the returns and refunds guide only at its English canonical URL", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("returns-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const context = { waitUntil() {}, passThroughOnException() {} };
  const slug = "lolobuy-returns-refunds-after-sales-guide";

  const articleResponse = await worker.fetch(new Request(`https://lolobuy.id/en/article/${slug}`), env, context);
  const articleHtml = await articleResponse.text();
  assert.equal(articleResponse.status, 200);
  assert.match(articleHtml, /<title>LoloBuy Refund Guide: Returns &amp; After-Sales Steps<\/title>/);
  assert.match(articleHtml, new RegExp(`rel="canonical" href="https://lolobuy\\.id/en/article/${slug}"`));
  assert.match(articleHtml, new RegExp(`hrefLang="en" href="https://lolobuy\\.id/en/article/${slug}"`));
  assert.doesNotMatch(articleHtml, new RegExp(`/fr/article/${slug}`));
  assert.match(articleHtml, /"@type":"Article"/);
  assert.match(articleHtml, /Start with the order stage, not the complaint/);
  assert.match(articleHtml, /https:\/\/findspreadsheet\.com\//);

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

test("publishes the review evidence guide only at its English canonical URL", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("reviews-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const context = { waitUntil() {}, passThroughOnException() {} };
  const slug = "lolobuy-reviews-evidence-guide";

  const articleResponse = await worker.fetch(new Request(`https://lolobuy.id/en/article/${slug}`), env, context);
  const articleHtml = await articleResponse.text();
  assert.equal(articleResponse.status, 200);
  assert.match(articleHtml, /<title>LoloBuy Reviews: How to Judge Customer Feedback<\/title>/);
  assert.match(articleHtml, new RegExp(`rel="canonical" href="https://lolobuy\\.id/en/article/${slug}"`));
  assert.match(articleHtml, new RegExp(`hrefLang="en" href="https://lolobuy\\.id/en/article/${slug}"`));
  assert.doesNotMatch(articleHtml, new RegExp(`/de/article/${slug}`));
  assert.match(articleHtml, /"@type":"Article"/);
  assert.match(articleHtml, /Begin with the size of the evidence, not the star score/);
  assert.match(articleHtml, /https:\/\/findspreadsheet\.com\//);

  const hubResponse = await worker.fetch(new Request("https://lolobuy.id/en/seo-articles"), env, context);
  const hubHtml = await hubResponse.text();
  assert.equal(hubResponse.status, 200);
  assert.match(hubHtml, new RegExp(`/en/article/${slug}`));

  const untranslatedResponse = await worker.fetch(new Request(`https://lolobuy.id/de/article/${slug}`), env, context);
  assert.equal(untranslatedResponse.status, 404);

  const sitemapResponse = await worker.fetch(new Request("https://lolobuy.id/sitemap.xml"), env, context);
  const sitemapXml = await sitemapResponse.text();
  assert.equal(sitemapResponse.status, 200);
  assert.match(sitemapXml, new RegExp(`<loc>https://lolobuy\\.id/en/article/${slug}</loc>`));
  assert.doesNotMatch(sitemapXml, new RegExp(`<loc>https://lolobuy\\.id/de/article/${slug}</loc>`));
});

test("publishes the size guide only at its English canonical URL", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("size-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const context = { waitUntil() {}, passThroughOnException() {} };
  const slug = "lolobuy-size-guide-clothing-shoes";

  const articleResponse = await worker.fetch(new Request(`https://lolobuy.id/en/article/${slug}`), env, context);
  const articleHtml = await articleResponse.text();
  assert.equal(articleResponse.status, 200);
  assert.match(articleHtml, /<title>LoloBuy Size Guide: Clothing &amp; Shoe Measurements<\/title>/);
  assert.match(articleHtml, new RegExp(`rel="canonical" href="https://lolobuy\\.id/en/article/${slug}"`));
  assert.match(articleHtml, new RegExp(`hrefLang="en" href="https://lolobuy\\.id/en/article/${slug}"`));
  assert.doesNotMatch(articleHtml, new RegExp(`/fr/article/${slug}`));
  assert.match(articleHtml, /"@type":"Article"/);
  assert.match(articleHtml, /Treat the size label as a clue, not the answer/);
  assert.match(articleHtml, /https:\/\/findspreadsheet\.com\/shoes\//);

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
