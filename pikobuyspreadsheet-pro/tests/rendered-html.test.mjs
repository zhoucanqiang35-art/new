import assert from "node:assert/strict";
import test from "node:test";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

const localeCodes = [
  "en", "de", "fr", "es", "pl", "it", "pt", "nl", "cs", "sk", "ro", "hu",
  "sv", "da", "no", "fi", "el", "tr", "hr", "bg", "uk", "lt", "sl", "et",
];

const articleSlugs = [
  "pikobuy-spreadsheet-guide",
  "pikobuy-qc-photo-guide",
  "pikobuy-shipping-cost-guide",
];

const englishHeadings = {
  "pikobuy-spreadsheet-guide": "A spreadsheet is a starting point, not a verdict",
  "pikobuy-qc-photo-guide": "QC photographs are visible evidence with limits",
  "pikobuy-shipping-cost-guide": "Product price is not delivered cost",
};

async function loadWorker() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${Math.random()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker;
}

const runtime = {
  ASSETS: {
    fetch: async () => new Response("Not found", { status: 404 }),
  },
};

const executionContext = {
  waitUntil() {},
  passThroughOnException() {},
};

test("renders development preview metadata", async () => {
  const worker = await loadWorker();

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    runtime,
    executionContext,
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  assert.match(await response.text(), developmentPreviewMeta);
});

test("keeps every SEO article section and paragraph on all language routes", async () => {
  const worker = await loadWorker();

  for (const locale of localeCodes) {
    for (const article of articleSlugs) {
      const response = await worker.fetch(
        new Request(`http://localhost/${locale}/seo-articles/${article}`, {
          headers: { accept: "text/html" },
        }),
        runtime,
        executionContext,
      );

      assert.equal(response.status, 200, `${locale}/${article} should render`);
      const html = await response.text();
      const bodyStart = html.indexOf('class="seo-longform-body"');
      const bodyEnd = html.indexOf('class="seo-disclosure"');
      assert.ok(bodyStart >= 0 && bodyEnd > bodyStart, `${locale}/${article} should include the full article body`);
      const articleBody = html.slice(bodyStart, bodyEnd);
      assert.equal((articleBody.match(/<section/g) ?? []).length, 8, `${locale}/${article} should keep all sections`);
      assert.equal((articleBody.match(/<p/g) ?? []).length, 16, `${locale}/${article} should keep all paragraphs`);
      assert.match(articleBody, new RegExp(`lang=["']${locale}["']`), `${locale}/${article} should declare the selected language`);
      if (locale !== "en") {
        assert.ok(!articleBody.includes(englishHeadings[article]), `${locale}/${article} should not fall back to the English article body`);
        assert.ok(!html.includes("Original English research"), `${locale}/${article} should not expose the old English fallback label`);
      }
    }
  }
});

test("localizes the SEO article directory without replacing the article summaries", async () => {
  const worker = await loadWorker();

  for (const locale of localeCodes) {
    const response = await worker.fetch(
      new Request(`http://localhost/${locale}/seo-articles`, {
        headers: { accept: "text/html" },
      }),
      runtime,
      executionContext,
    );
    assert.equal(response.status, 200, `${locale}/seo-articles should render`);
    const html = await response.text();
    for (const article of articleSlugs) assert.ok(html.includes(`/${locale}/seo-articles/${article}/`), `${locale} should keep the ${article} card`);
    if (locale !== "en") assert.ok(!html.includes("A practical, evidence-led workflow"), `${locale} should use localized article summaries`);
  }
});
