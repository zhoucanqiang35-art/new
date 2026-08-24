import { access, readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const outputDirectory = path.resolve(process.argv[2] ?? "dist/pages");
const requiredFiles = [
  "_worker.js",
  "robots.txt",
  "sitemap.xml",
  "favicon.svg",
  "pikobuy-logo.png",
  "categories/shoes.webp",
  "categories/hoodies.webp",
  "categories/t-shirts.webp",
  "categories/jackets.webp",
  "categories/pants-shorts.webp",
  "categories/headwear.webp",
  "categories/accessories.webp",
  "categories/jerseys.webp",
  "categories/electronics.webp",
  "categories/other-stuff.webp",
];

await Promise.all(requiredFiles.map((file) => access(path.join(outputDirectory, file))));

const workerPath = path.join(outputDirectory, "_worker.js");
if ((await stat(workerPath)).size === 0) throw new Error("dist/pages/_worker.js is empty");

// Reproduce the deployed Cloudflare Worker runtime, where Pages build
// variables are not available through process.env. The bundle must retain the
// production SEO settings that were present when Vite compiled it.
delete process.env.FORMAL_DOMAIN_CONFIRMED;
delete process.env.SITE_INDEXABLE;
delete process.env.INDEXABLE_LOCALES;
delete process.env.QA_APPROVED_LOCALES;

const workerUrl = pathToFileURL(workerPath);
workerUrl.searchParams.set("pages-validation", `${process.pid}-${Date.now()}`);
const worker = await import(workerUrl.href);
if (!worker.default || typeof worker.default.fetch !== "function") {
  throw new Error("dist/pages/_worker.js must export a default object with fetch(request, env, ctx)");
}

const cacheLookups = [];
globalThis.caches = {
  default: {
    async match(request) {
      cacheLookups.push(new URL(request.url));
      return undefined;
    },
    async put() {},
  },
};

const assetsDirectory = path.join(outputDirectory, "assets");
const assets = await readdir(assetsDirectory);
if (!assets.some((file) => file.endsWith(".css"))) throw new Error("Missing generated CSS in dist/pages/assets");
if (!assets.some((file) => file.endsWith(".js"))) throw new Error("Missing generated JavaScript in dist/pages/assets");

const contentTypes = new Map([
  [".css", "text/css"],
  [".js", "text/javascript"],
  [".json", "application/json"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"],
  [".txt", "text/plain; charset=utf-8"],
  [".webp", "image/webp"],
  [".woff2", "font/woff2"],
  [".xml", "application/xml"],
]);
const env = {
  ASSETS: {
    async fetch(request) {
      const pathname = decodeURIComponent(new URL(request.url).pathname);
      const assetPath = path.resolve(outputDirectory, `.${pathname}`);
      if (!assetPath.startsWith(`${outputDirectory}${path.sep}`)) return new Response("Not found", { status: 404 });
      try {
        const body = await readFile(assetPath);
        return new Response(body, {
          status: 200,
          headers: {
            "cache-control": "public, max-age=0, must-revalidate",
            "content-type": contentTypes.get(path.extname(assetPath)) ?? "application/octet-stream",
            "x-test-static-asset": "true",
          },
        });
      } catch {
        return new Response("Not found", { status: 404 });
      }
    },
  },
};
const ctx = { waitUntil() {}, passThroughOnException() {} };
const get = (pathname, hostname = "pikobuyspreadsheet.cc", headers = {}) =>
  worker.default.fetch(new Request(`https://${hostname}${pathname}`, { headers: { accept: "text/html", ...headers } }), env, ctx);

const home = await get("/");
const homeHtml = await home.text();
if (home.status !== 200 || !/^text\/html\b/i.test(home.headers.get("content-type") ?? "")) {
  throw new Error("Pages Worker did not render the production homepage");
}
if (!/rel="canonical" href="https:\/\/pikobuyspreadsheet\.cc\/"/.test(homeHtml)) {
  throw new Error("Production homepage canonical is missing or incorrect");
}
if (!/name="robots" content="index, follow"/.test(homeHtml)) {
  throw new Error("Production homepage is not indexable");
}
if (home.headers.get("x-robots-tag") !== "index, follow") {
  throw new Error("Production homepage is missing the indexable X-Robots-Tag header");
}
if (!home.headers.get("cache-control")?.includes("no-transform")) {
  throw new Error("Production HTML must prevent CDN transformations that create crawler-only links");
}
if (/\/workspace\/|\/tmp\//i.test(`${home.headers.get("link") || ""}\n${homeHtml}`)) {
  throw new Error("Production HTML or preload headers expose an internal build path");
}
if (!cacheLookups.some((url) => url.searchParams.get("__pikobuy_cache"))) {
  throw new Error("Production HTML cache key is not isolated by deployment version");
}

const article = await get("/guides/pikobuy-spreadsheet");
if (article.status !== 200 || !(await article.text()).includes("What a PikoBuy Spreadsheet Is")) {
  throw new Error("Pages Worker did not render a representative guide");
}

const sitemap = await get("/sitemap.xml", "pikobuyspreadsheet.cc", {
  accept: "application/xml",
  "user-agent": "Googlebot/2.1 (+http://www.google.com/bot.html)",
});
const sitemapXml = await sitemap.text();
const sitemapUrls = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]));
if (
  sitemap.status !== 200 ||
  !/^application\/xml\b/i.test(sitemap.headers.get("content-type") ?? "") ||
  sitemap.headers.get("x-test-static-asset") !== "true" ||
  sitemap.headers.get("cache-control")?.includes("no-store") ||
  sitemapUrls.length !== 41 ||
  new Set(sitemapUrls.map(String)).size !== sitemapUrls.length
) {
  throw new Error("Pages Worker must serve the 41 reviewed URLs from static sitemap.xml");
}

const titles = new Set();
for (const url of sitemapUrls) {
  if (url.protocol !== "https:" || url.hostname !== "pikobuyspreadsheet.cc" || url.search || url.hash) {
    throw new Error(`Sitemap URL is not canonical: ${url}`);
  }
  const page = await get(url.pathname, url.hostname, {
    "user-agent": "Googlebot/2.1 (+http://www.google.com/bot.html)",
  });
  const html = await page.text();
  if (
    page.status !== 200 ||
    !/^text\/html\b/i.test(page.headers.get("content-type") ?? "") ||
    /\bnoindex\b/i.test(page.headers.get("x-robots-tag") ?? "") ||
    /<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(html)
  ) {
    throw new Error(`Sitemap URL is not a crawlable HTML page: ${url} (${page.status})`);
  }
  if (page.headers.get("x-robots-tag") !== "index, follow") {
    throw new Error(`Sitemap URL is missing an indexable X-Robots-Tag header: ${url}`);
  }
  if (!page.headers.get("cache-control")?.includes("no-transform")) {
    throw new Error(`Sitemap URL allows CDN HTML transformations: ${url}`);
  }
  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.replace(/\s+/g, " ").trim();
  const description = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i)?.[1]?.trim();
  const canonical = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)?.[1];
  const h1Count = (html.match(/<h1\b/gi) || []).length;
  if (!title || title.length < 10 || title.length > 65) {
    throw new Error(`Sitemap URL title is missing or too long (${title?.length ?? 0}): ${url}`);
  }
  if (titles.has(title)) throw new Error(`Duplicate title found in Sitemap pages: ${title}`);
  titles.add(title);
  if (!description || description.length < 70 || description.length > 170) {
    throw new Error(`Sitemap URL description length is invalid (${description?.length ?? 0}): ${url}`);
  }
  if (canonical !== url.toString()) throw new Error(`Sitemap URL canonical mismatch: ${url} -> ${canonical}`);
  if (h1Count !== 1) throw new Error(`Sitemap URL must have one H1 (${h1Count}): ${url}`);
}

const robots = await get("/robots.txt", "pikobuyspreadsheet.cc", {
  accept: "text/plain",
  "user-agent": "Googlebot/2.1 (+http://www.google.com/bot.html)",
});
const robotsText = await robots.text();
if (
  robots.status !== 200 ||
  !/^text\/plain\b/i.test(robots.headers.get("content-type") ?? "") ||
  robots.headers.get("x-test-static-asset") !== "true" ||
  robots.headers.get("cache-control")?.includes("no-store") ||
  !robotsText.includes("Allow: /") ||
  !robotsText.includes("https://pikobuyspreadsheet.cc/sitemap.xml")
) {
  throw new Error("Pages Worker must serve production crawl rules from static robots.txt");
}

const missing = await get("/missing-page");
if (missing.status !== 404) throw new Error("Pages Worker must preserve real 404 responses");
if (missing.headers.get("x-robots-tag") !== "noindex, nofollow") {
  throw new Error("404 pages must be explicitly excluded from indexing");
}
if ((await get("/pikobuy-logo.png")).status !== 200) throw new Error("Pages Worker could not serve a public asset");

const preview = await get("/", "pikobuyspreadsheet-cc.pages.dev");
if (preview.headers.get("x-robots-tag") !== "noindex, nofollow") {
  throw new Error("Pages preview hostname must remain noindex");
}

const www = await get("/guides/pikobuy-spreadsheet", "www.pikobuyspreadsheet.cc");
if (www.status !== 301 || www.headers.get("location") !== "https://pikobuyspreadsheet.cc/guides/pikobuy-spreadsheet") {
  throw new Error("www must redirect to the canonical non-www route");
}

console.log(`Validated Pages artifact: ${requiredFiles.length} required files, Worker runtime, all ${sitemapUrls.length} sitemap URLs, static robots, assets, 404 and canonical redirects passed.`);
