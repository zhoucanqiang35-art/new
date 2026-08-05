import assert from "node:assert/strict";
import test from "node:test";

async function loadPagesWorker() {
  const workerUrl = new URL("../dist/pages/_worker.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  return (await import(workerUrl.href)).default;
}

test("forwards hashed browser assets to the Pages ASSETS binding", async () => {
  const worker = await loadPagesWorker();
  let forwardedPathname = null;

  const response = await worker.fetch(
    new Request("http://localhost/assets/site.css"),
    {
      ASSETS: {
        async fetch(request) {
          forwardedPathname = new URL(request.url).pathname;
          return new Response("body { color: blue; }", {
            headers: { "content-type": "text/css; charset=utf-8" },
          });
        },
      },
    },
    { waitUntil() {}, passThroughOnException() {} },
  );

  assert.equal(forwardedPathname, "/assets/site.css");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/css\b/i);
});
