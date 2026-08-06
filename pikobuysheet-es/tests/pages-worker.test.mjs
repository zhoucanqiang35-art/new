import assert from "node:assert/strict";
import test from "node:test";

async function loadPagesWorker() {
  const workerUrl = new URL("../dist/pages/_worker.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  return (await import(workerUrl.href)).default;
}

test("forwards browser assets and crawl files to the Pages ASSETS binding", async () => {
  const worker = await loadPagesWorker();
  for (const [pathname, contentType] of [
    ["/assets/site.css", "text/css; charset=utf-8"],
    ["/robots.txt", "text/plain; charset=utf-8"],
    ["/sitemap.xml", "application/xml; charset=utf-8"],
  ]) {
    let forwardedPathname = null;
    const response = await worker.fetch(
      new Request(`http://localhost${pathname}`),
      {
        ASSETS: {
          async fetch(request) {
            forwardedPathname = new URL(request.url).pathname;
            return new Response("test asset", {
              headers: { "content-type": contentType },
            });
          },
        },
      },
      { waitUntil() {}, passThroughOnException() {} },
    );

    assert.equal(forwardedPathname, pathname);
    assert.equal(response.status, 200);
    assert.ok((response.headers.get("content-type") ?? "").toLowerCase().startsWith(contentType.split(";")[0]));
  }
});

test("generates a canonical sitemap for every supported language and route", async () => {
  const { readFile } = await import("node:fs/promises");
  const sitemap = await readFile(new URL("../dist/pages/sitemap.xml", import.meta.url), "utf8");
  const robots = await readFile(new URL("../dist/pages/robots.txt", import.meta.url), "utf8");

  assert.match(sitemap, /^<\?xml version="1\.0" encoding="UTF-8"\?>/);
  assert.equal((sitemap.match(/<url>/g) ?? []).length, 216);
  assert.doesNotMatch(sitemap, /<loc>https:\/\/pikobuysheet\.es\/sitemap\.xml<\/loc>/, "sitemap should not list itself");
  assert.match(sitemap, /<loc>https:\/\/pikobuysheet\.es\/zh\/seo-articles\/pikobuy-qc-shipping-return-guide<\/loc>/);
  assert.match(robots, /Sitemap: https:\/\/pikobuysheet\.es\/sitemap\.xml/);
});
