import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const sitemapPath = join(projectRoot, "public", "sitemap.xml");
const outputRoot = join(projectRoot, "dist", "client");
const workerPath = join(projectRoot, "dist", "server", "index.js");

const sitemap = await readFile(sitemapPath, "utf8");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) =>
  match[1].replaceAll("&amp;", "&"),
);

if (urls.length === 0) {
  throw new Error("The sitemap contains no URLs to prerender.");
}

const workerUrl = pathToFileURL(workerPath);
workerUrl.searchParams.set("prerender", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

if (!worker || typeof worker.fetch !== "function") {
  throw new Error("The server build does not export a Worker-compatible fetch handler.");
}

const environment = {
  ASSETS: {
    fetch: async () => new Response("Not found", { status: 404 }),
  },
};
const executionContext = {
  waitUntil() {},
  passThroughOnException() {},
};

let cursor = 0;
let completed = 0;
const concurrency = Math.min(8, urls.length);

function outputPathFor(url) {
  const { pathname } = new URL(url);
  const segments = pathname
    .split("/")
    .filter(Boolean)
    .map((segment) => decodeURIComponent(segment));

  if (segments.some((segment) => segment === "." || segment === "..")) {
    throw new Error(`Unsafe sitemap path: ${pathname}`);
  }

  return join(outputRoot, ...segments, "index.html");
}

async function render(url) {
  const response = await worker.fetch(
    new Request(url, { headers: { accept: "text/html" } }),
    environment,
    executionContext,
  );
  const contentType = response.headers.get("content-type") ?? "";

  if (response.status !== 200 || !/^text\/html\b/i.test(contentType)) {
    throw new Error(
      `Unable to prerender ${url}: HTTP ${response.status}, content-type ${contentType || "missing"}`,
    );
  }

  const target = outputPathFor(url);
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, await response.text(), "utf8");

  completed += 1;
  if (completed % 100 === 0 || completed === urls.length) {
    console.log(`Prerendered ${completed}/${urls.length} Pages routes.`);
  }
}

await Promise.all(
  Array.from({ length: concurrency }, async () => {
    while (cursor < urls.length) {
      const url = urls[cursor];
      cursor += 1;
      await render(url);
    }
  }),
);

console.log(`Cloudflare Pages output is ready in ${outputRoot}.`);
