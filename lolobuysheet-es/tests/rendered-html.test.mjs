import assert from "node:assert/strict";
import test from "node:test";

const reviewPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']review-only["'])[^>]*>/i;

async function renderRoute(pathname) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("route", `${process.pid}-${Date.now()}-${pathname}`);
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

test("renders review-only preview metadata", async () => {
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
  assert.match(await response.text(), reviewPreviewMeta);
});

test("buyer guides and SEO articles are distinct content systems", async () => {
  const guides = await renderRoute("/guides");
  const guidesHtml = await guides.text();
  assert.equal(guides.status, 200);
  assert.ok(guidesHtml.includes("Guides are not SEO articles"));
  assert.ok(guidesHtml.includes("/guides/source-listing-and-first-payment"));
  assert.ok(!guidesHtml.includes("Read fact-checked article"));

  const articles = await renderRoute("/seo-articles");
  const articlesHtml = await articles.text();
  assert.equal(articles.status, 200);
  assert.ok(articlesHtml.includes("Editorial standard"));
  assert.ok(articlesHtml.includes("/seo-articles/how-lolobuy-works"));
  assert.ok(!articlesHtml.includes("Open practical checklist"));

  for (const route of [
    "/guides/source-listing-and-first-payment",
    "/guides/warehouse-qc-photo-checklist",
    "/guides/parcel-and-shipping-cost-checklist",
    "/guides/returns-and-refunds-checklist",
    "/guides/warehouse-storage-checklist",
    "/zh/guides/warehouse-qc-photo-checklist",
  ]) {
    const response = await renderRoute(route);
    const html = await response.text();
    assert.equal(response.status, 200, `${route} should render`);
    assert.ok(html.includes("Fact boundary"), `${route} should explain its evidence boundary`);
    assert.ok(html.includes("Official sources"), `${route} should show official sources`);
  }
});
