import assert from "node:assert/strict";
import test from "node:test";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

test("omits development preview metadata from production HTML", async () => {
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
  assert.doesNotMatch(await response.text(), developmentPreviewMeta);
});

test("renders a matched internal product detail with the exact main-site destination", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("product-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/products/gallery-short", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /Gallery Shorts/);
  assert.match(html, /\$19\.97/);
  assert.match(html, /7711437541/);
  assert.match(html, /https:\/\/findspreadsheet\.com\/uploads\/allimg\/20260319\/1-260319153159600\.webp/);
  assert.match(html, /https:\/\/findspreadsheet\.com\/pants-shorts\/gallery-short-3003\.html/);
  assert.match(html, /"@type":"BreadcrumbList"/);
  assert.doesNotMatch(html, /"@type":"Offer"/);

  for (const path of ["/", "/spreadsheet"]) {
    const indexResponse = await worker.fetch(
      new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
      { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
      { waitUntil() {}, passThroughOnException() {} },
    );
    const indexHtml = await indexResponse.text();
    assert.match(indexHtml, /href="\/products\/gallery-short"/);
  }
});

test("publishes direct official sources while retaining the main-site destination", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("outbound-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };

  for (const path of ["/seo-articles/how-to-use-lolobuy-spreadsheet", "/sources"]) {
    const response = await worker.fetch(
      new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
      env,
      ctx,
    );
    const html = await response.text();

    assert.equal(response.status, 200);
    assert.match(html, /href="https:\/\/findspreadsheet\.com\/"/);
  }

  const sourcesResponse = await worker.fetch(
    new Request("http://localhost/sources", { headers: { accept: "text/html" } }),
    env,
    ctx,
  );
  const sourcesHtml = await sourcesResponse.text();
  assert.match(sourcesHtml, /href="https:\/\/www\.lolobuy\.com\/helpCenter\/1242296499766165"/);
  assert.match(sourcesHtml, /Last checked 10 Aug 2026/);
});

test("renders Japanese deep pages without the former English fallback blocks", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("locale-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };

  const cases = [
    ["/ja/guides/beginner", /初心者はLoloBuyをどのように利用しますか/, /Verified scope|Start with the link, not the thumbnail/],
    ["/ja/reviews", /LoloBuyレビュー：確認できること/, /EVIDENCE-LED VERDICT|Evidence scorecard/],
    ["/ja/sources", /公式情報源/, /PRODUCT INDEX|SHIPPING/],
    ["/ja/method", /独立確認/, /WORKFLOW|VARIABLE DATA/],
    ["/ja/updates", /調査記事/, /Three long-form research articles published/],
  ];

  for (const [path, translated, oldEnglish] of cases) {
    const response = await worker.fetch(
      new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
      env,
      ctx,
    );
    const html = await response.text();
    assert.equal(response.status, 200);
    assert.match(html, translated);
    assert.doesNotMatch(html, oldEnglish);
  }

  const untranslatedArticle = await worker.fetch(
    new Request("http://localhost/ja/seo-articles/how-to-use-lolobuy-spreadsheet", { headers: { accept: "text/html" } }),
    env,
    ctx,
  );
  assert.equal(untranslatedArticle.status, 404);
});

test("returns a real 404 for unknown routes and redirects duplicate English-prefixed routes", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("routing-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };

  const missing = await worker.fetch(new Request("http://localhost/does-not-exist", { headers: { accept: "text/html" } }), env, ctx);
  assert.equal(missing.status, 404);
  assert.match(await missing.text(), />404</);

  const duplicateEnglish = await worker.fetch(new Request("http://localhost/en/guides/qc", { redirect: "manual", headers: { accept: "text/html" } }), env, ctx);
  assert.ok([307, 308].includes(duplicateEnglish.status));
  assert.equal(new URL(duplicateEnglish.headers.get("location"), "http://localhost").pathname, "/guides/qc");
});

test("redirects www to the canonical host and emits edge-cache directives", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("canonical-host-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };

  const redirect = await worker.fetch(new Request("https://www.lolobuysheet.shop/guides/qc?from=test", { redirect: "manual" }), env, ctx);
  assert.equal(redirect.status, 301);
  assert.equal(redirect.headers.get("location"), "https://lolobuysheet.shop/guides/qc?from=test");

  const page = await worker.fetch(new Request("http://localhost/guides/qc", { headers: { accept: "text/html" } }), env, ctx);
  assert.equal(page.status, 200);
  assert.match(page.headers.get("cache-control") ?? "", /s-maxage=3600/);
  assert.match(page.headers.get("cloudflare-cdn-cache-control") ?? "", /max-age=3600/);
});

test("renders complete social, hreflang, and FAQ structured metadata", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("metadata-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };

  const response = await worker.fetch(new Request("http://localhost/ja/faq", { headers: { accept: "text/html" } }), env, ctx);
  const html = await response.text();
  assert.equal(response.status, 200);
  assert.match(html, /property="og:title"/);
  assert.match(html, /name="twitter:card" content="summary_large_image"/);
  assert.match(html, /hrefLang="x-default"/i);
  assert.match(html, /"@type":"FAQPage"/);
  assert.match(html, /"inLanguage":"ja"/);
});

test("publishes unique guide titles and a category-specific description", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("route-metadata-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };
  const titles = [];

  for (const path of ["/guides", "/guides/beginner", "/guides/qc", "/guides/shipping"]) {
    const response = await worker.fetch(new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }), env, ctx);
    const html = await response.text();
    const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
    assert.ok(title, path);
    titles.push(title);
  }
  assert.equal(new Set(titles).size, titles.length);

  const categories = await worker.fetch(new Request("http://localhost/categories", { headers: { accept: "text/html" } }), env, ctx);
  const categoriesHtml = await categories.text();
  assert.match(categoriesHtml, /Browse 10 LoloBuy spreadsheet categories/);
  assert.doesNotMatch(categoriesHtml, /Long-form English articles built around real buyer questions/);
});

test("serves every locale across representative deep routes", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("locale-matrix-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };
  const locales = ["en", "de", "fr", "es", "it", "pt", "pl", "nl", "sv", "da", "no", "fi", "cs", "ro", "hu", "el", "uk", "tr", "ru", "bg", "ja", "ko", "ar", "zh"];
  const paths = ["/", "/spreadsheet", "/categories", "/guides/beginner", "/guides/qc", "/guides/shipping", "/reviews", "/faq", "/sources", "/method", "/updates", "/seo-articles", "/products/gallery-short"];

  for (const locale of locales) {
    for (const path of paths) {
      const localizedPath = locale === "en" ? path : path === "/" ? `/${locale}` : `/${locale}${path}`;
      const response = await worker.fetch(new Request(`http://localhost${localizedPath}`, { headers: { accept: "text/html" } }), env, ctx);
      const html = await response.text();
      assert.equal(response.status, 200, localizedPath);
      assert.match(html, new RegExp(`<main[^>]+lang="${locale}"`), localizedPath);
      assert.match(html, /<h1\b/, localizedPath);
    }
  }
});

test("publishes localized core pages and English-only long-form articles", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("sitemap-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };

  const sitemapResponse = await worker.fetch(new Request("http://localhost/sitemap.xml"), env, ctx);
  const sitemapXml = await sitemapResponse.text();
  assert.equal(sitemapResponse.status, 200);
  assert.equal((sitemapXml.match(/<url>/g) ?? []).length, 463);
  assert.match(sitemapXml, /hreflang="x-default"/);
  assert.match(sitemapXml, /https:\/\/lolobuysheet\.shop\/seo-articles\/lolobuy-total-cost-fees-checklist/);
  assert.match(sitemapXml, /https:\/\/lolobuysheet\.shop\/seo-articles\/lolobuy-return-refund-process/);
  assert.match(sitemapXml, /https:\/\/lolobuysheet\.shop\/seo-articles\/how-to-track-lolobuy-parcel/);
  assert.match(sitemapXml, /https:\/\/lolobuysheet\.shop\/seo-articles\/lolobuy-warehouse-consolidation-packaging/);
  assert.doesNotMatch(sitemapXml, /https:\/\/lolobuysheet\.shop\/zh\/seo-articles\/lolobuy-qc-photo-checklist/);
  assert.doesNotMatch(sitemapXml, /https:\/\/lolobuysheet\.shop\/de\/seo-articles\/how-to-use-lolobuy-spreadsheet/);
  assert.doesNotMatch(sitemapXml, /https:\/\/lolobuysheet\.shop\/de\/seo-articles\/lolobuy-total-cost-fees-checklist/);

  const articleResponse = await worker.fetch(new Request("http://localhost/seo-articles/how-to-use-lolobuy-spreadsheet", { headers: { accept: "text/html" } }), env, ctx);
  const articleHtml = await articleResponse.text();
  assert.equal(articleResponse.status, 200);
  assert.match(articleHtml, /"@type":"Article"/);
  assert.match(articleHtml, /"dateModified":"2026-08-04"/);
});

test("publishes the English-only total-cost article with current metadata and evidence", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("cost-article-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };

  const response = await worker.fetch(new Request("http://localhost/seo-articles/lolobuy-total-cost-fees-checklist", { headers: { accept: "text/html" } }), env, ctx);
  const html = await response.text();
  assert.equal(response.status, 200);
  assert.match(html, /LoloBuy Total Cost: A Two-Payment Fees Checklist for 2026/);
  assert.match(html, /Official sources and verification record/);
  assert.match(html, /https:\/\/www\.lolobuy\.com\/helpCenter\/1242296499766165/);
  assert.match(html, /"@type":"Article"/);
  assert.match(html, /"@type":"BreadcrumbList"/);
  assert.match(html, /"datePublished":"2026-08-10"/);
  assert.match(html, /"dateModified":"2026-08-10"/);
  assert.match(html, /rel="canonical" href="https:\/\/lolobuysheet\.shop\/seo-articles\/lolobuy-total-cost-fees-checklist"/);
  assert.match(html, /href="https:\/\/www\.lolobuy\.com\/helpCenter\/1242296499766165"/);

  const untranslated = await worker.fetch(new Request("http://localhost/de/seo-articles/lolobuy-total-cost-fees-checklist", { headers: { accept: "text/html" } }), env, ctx);
  assert.equal(untranslated.status, 404);
});

test("publishes the English-only return and refund article with official evidence", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("return-article-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };

  const response = await worker.fetch(new Request("http://localhost/seo-articles/lolobuy-return-refund-process", { headers: { accept: "text/html" } }), env, ctx);
  const html = await response.text();
  assert.equal(response.status, 200);
  assert.match(html, /LoloBuy Return and Refund Process: A Status-by-Status Guide for 2026/);
  assert.match(html, /Official sources and verification record/);
  assert.match(html, /https:\/\/www\.lolobuy\.com\/helpCenter\/1242296772133891/);
  assert.match(html, /"@type":"Article"/);
  assert.match(html, /"@type":"BreadcrumbList"/);
  assert.match(html, /"datePublished":"2026-08-11"/);
  assert.match(html, /"dateModified":"2026-08-11"/);
  assert.match(html, /rel="canonical" href="https:\/\/lolobuysheet\.shop\/seo-articles\/lolobuy-return-refund-process"/);
  assert.match(html, /href="https:\/\/www\.lolobuy\.com\/helpCenter\/1242296939447441"/);

  const untranslated = await worker.fetch(new Request("http://localhost/de/seo-articles/lolobuy-return-refund-process", { headers: { accept: "text/html" } }), env, ctx);
  assert.equal(untranslated.status, 404);
});

test("publishes the English-only parcel tracking article with official evidence", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("tracking-article-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };

  const response = await worker.fetch(new Request("http://localhost/seo-articles/how-to-track-lolobuy-parcel", { headers: { accept: "text/html" } }), env, ctx);
  const html = await response.text();
  assert.equal(response.status, 200);
  assert.match(html, /How to Track a LoloBuy Parcel: Status, Handoffs and Delivery Exceptions/);
  assert.match(html, /Official sources and verification record/);
  assert.match(html, /https:\/\/www\.lolobuy\.com\/helpCenter\/1242300842705117/);
  assert.match(html, /"@type":"Article"/);
  assert.match(html, /"@type":"BreadcrumbList"/);
  assert.match(html, /"datePublished":"2026-08-12"/);
  assert.match(html, /"dateModified":"2026-08-12"/);
  assert.match(html, /rel="canonical" href="https:\/\/lolobuysheet\.shop\/seo-articles\/how-to-track-lolobuy-parcel"/);
  assert.match(html, /href="https:\/\/www\.lolobuy\.com\/helpCenter\/679482255081817"/);
  assert.match(html, /href="\/seo-articles\/lolobuy-shipping-rehearsal-weight-routes"/);
  assert.match(html, /LoloBuy spreadsheet product-discovery hub/);

  const untranslated = await worker.fetch(new Request("http://localhost/de/seo-articles/how-to-track-lolobuy-parcel", { headers: { accept: "text/html" } }), env, ctx);
  assert.equal(untranslated.status, 404);
});

test("publishes the English-only warehouse consolidation article with current evidence", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("warehouse-article-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };

  const response = await worker.fetch(new Request("http://localhost/seo-articles/lolobuy-warehouse-consolidation-packaging", { headers: { accept: "text/html" } }), env, ctx);
  const html = await response.text();
  assert.equal(response.status, 200);
  assert.match(html, /LoloBuy Warehouse Consolidation: Storage and Packaging Decisions/);
  assert.match(html, /Official sources and verification record/);
  assert.match(html, /https:\/\/www\.lolobuy\.com\/helpCenter\/1242300757049499/);
  assert.match(html, /"@type":"Article"/);
  assert.match(html, /"@type":"BreadcrumbList"/);
  assert.match(html, /"datePublished":"2026-08-13"/);
  assert.match(html, /"dateModified":"2026-08-13"/);
  assert.match(html, /rel="canonical" href="https:\/\/lolobuysheet\.shop\/seo-articles\/lolobuy-warehouse-consolidation-packaging"/);
  assert.match(html, /href="https:\/\/www\.lolobuy\.com\/helpCenter\/1242306518844916"/);
  assert.match(html, /href="\/seo-articles\/lolobuy-qc-photo-checklist"/);

  const untranslated = await worker.fetch(new Request("http://localhost/de/seo-articles/lolobuy-warehouse-consolidation-packaging", { headers: { accept: "text/html" } }), env, ctx);
  assert.equal(untranslated.status, 404);
});
