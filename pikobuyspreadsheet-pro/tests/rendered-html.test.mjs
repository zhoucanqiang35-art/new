import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";

const robotsIndexMeta =
  /<meta(?=[^>]*\bname=["']robots["'])(?=[^>]*\bcontent=["'][^"']*\bindex\b[^"']*\bfollow\b[^"']*["'])[^>]*>/i;
const canonicalLink =
  /<link(?=[^>]*\brel=["']canonical["'])(?=[^>]*\bhref=["']https:\/\/pikobuyspreadsheet\.pro\/["'])[^>]*>/i;

test("renders production SEO metadata", async () => {
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
  assert.match(html, robotsIndexMeta);
  assert.match(html, canonicalLink);
  assert.doesNotMatch(html, /\bnoindex\b|\bnofollow\b/i);
});

test("publishes crawlable robots and the production sitemap", async () => {
  const [robots, sitemap] = await Promise.all([
    readFile(new URL("../public/robots.txt", import.meta.url), "utf8"),
    readFile(new URL("../public/sitemap.xml", import.meta.url), "utf8"),
  ]);

  assert.match(robots, /^User-agent: \*\nAllow: \/\n/m);
  assert.match(
    robots,
    /Sitemap: https:\/\/pikobuyspreadsheet\.pro\/sitemap\.xml/,
  );
  assert.doesNotMatch(robots, /^Disallow: \/$/m);

  const locations = sitemap.match(/<loc>/g) ?? [];
  assert.equal(locations.length, 792);
  assert.doesNotMatch(sitemap, /chatgpt\.site/i);
  assert.doesNotMatch(sitemap, /<loc>https:\/\/(?!pikobuyspreadsheet\.pro(?:\/|<))/i);
});

test("prerenders Cloudflare Pages HTML for the complete route set", async () => {
  const sitemap = await readFile(
    new URL("../public/sitemap.xml", import.meta.url),
    "utf8",
  );
  const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
    (match) => new URL(match[1]),
  );

  assert.equal(locations.length, 792);

  const samples = [
    "/",
    "/categories",
    "/guides/shipping",
    "/articles/how-to-use-a-pikobuy-spreadsheet",
    "/es/guides/shipping",
  ];

  for (const pathname of samples) {
    const segments = pathname.split("/").filter(Boolean);
    const html = await readFile(
      new URL(
        `../dist/client/${segments.length ? `${segments.join("/")}/` : ""}index.html`,
        import.meta.url,
      ),
      "utf8",
    );

    assert.match(html, /<!DOCTYPE html>/i);
    assert.doesNotMatch(html, /\bnoindex\b|\bnofollow\b/i);
  }
});
