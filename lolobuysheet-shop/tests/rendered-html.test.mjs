import assert from "node:assert/strict";
import test from "node:test";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

test("renders development preview metadata", async () => {
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
  assert.match(await response.text(), developmentPreviewMeta);
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
  assert.match(html, /Gallery Short/);
  assert.match(html, /\$19\.97/);
  assert.match(html, /7711437541/);
  assert.match(html, /https:\/\/findspreadsheet\.com\/uploads\/allimg\/20260319\/1-260319153159600\.webp/);
  assert.match(html, /https:\/\/findspreadsheet\.com\/pants-shorts\/gallery-short-3003\.html/);
});

test("routes article evidence and source-page actions to FindSpreadsheet", async () => {
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
    assert.doesNotMatch(html, /href="https:\/\/www\.lolobuy\.com\//);
  }
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
    ["/ja/seo-articles/how-to-use-lolobuy-spreadsheet", /調査情報付きの商品インデックス/, /IN THIS GUIDE|Editorial disclosure/],
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

test("serves every locale across representative deep routes", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("locale-matrix-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };
  const locales = ["en", "de", "fr", "es", "it", "pt", "pl", "nl", "sv", "da", "no", "fi", "cs", "ro", "hu", "el", "uk", "tr", "ru", "bg", "ja", "ko", "ar", "zh"];
  const paths = ["/", "/spreadsheet", "/categories", "/guides/beginner", "/guides/qc", "/guides/shipping", "/reviews", "/faq", "/sources", "/method", "/updates", "/seo-articles", "/seo-articles/how-to-use-lolobuy-spreadsheet", "/products/gallery-short"];

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

test("publishes the complete 24-language sitemap and article schema", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("sitemap-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };

  const sitemapResponse = await worker.fetch(new Request("http://localhost/sitemap.xml"), env, ctx);
  const sitemapXml = await sitemapResponse.text();
  assert.equal(sitemapResponse.status, 200);
  assert.equal((sitemapXml.match(/<url>/g) ?? []).length, 528);
  assert.match(sitemapXml, /hreflang="x-default"/);
  assert.match(sitemapXml, /https:\/\/lolobuysheet\.shop\/zh\/seo-articles\/lolobuy-qc-photo-checklist/);

  const articleResponse = await worker.fetch(new Request("http://localhost/seo-articles/how-to-use-lolobuy-spreadsheet", { headers: { accept: "text/html" } }), env, ctx);
  const articleHtml = await articleResponse.text();
  assert.equal(articleResponse.status, 200);
  assert.match(articleHtml, /"@type":"Article"/);
  assert.match(articleHtml, /"dateModified":"2026-08-04"/);
});
