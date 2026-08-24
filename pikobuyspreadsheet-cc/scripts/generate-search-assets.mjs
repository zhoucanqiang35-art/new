import { access, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const outputDirectory = path.resolve(process.argv[2] ?? "dist/pages");
const workerPath = path.join(outputDirectory, "_worker.js");
await access(workerPath);

// Match the deployed Pages runtime: production SEO values must already be
// compiled into the bundle rather than supplied through process.env at runtime.
delete process.env.FORMAL_DOMAIN_CONFIRMED;
delete process.env.SITE_INDEXABLE;
delete process.env.INDEXABLE_LOCALES;
delete process.env.QA_APPROVED_LOCALES;

const workerUrl = pathToFileURL(workerPath);
workerUrl.searchParams.set("search-assets", `${process.pid}-${Date.now()}`);
const worker = await import(workerUrl.href);
if (!worker.default || typeof worker.default.fetch !== "function") {
  throw new Error("dist/pages/_worker.js must export a default fetch handler");
}

// Before these files exist, the Pages wrapper falls back to the application
// metadata routes. Their verified output then becomes the static deployment.
const env = {
  ASSETS: {
    async fetch() {
      return new Response("Not found", { status: 404 });
    },
  },
};
const pending = [];
const ctx = {
  waitUntil(promise) {
    pending.push(Promise.resolve(promise));
  },
};

async function render(pathname, expectedContentType) {
  const response = await worker.default.fetch(
    new Request(`https://pikobuyspreadsheet.cc${pathname}`, {
      headers: {
        accept: expectedContentType,
        "user-agent": "Googlebot/2.1 (+http://www.google.com/bot.html)",
      },
    }),
    env,
    ctx,
  );
  if (response.status !== 200) {
    throw new Error(`${pathname} returned ${response.status} while generating search assets`);
  }
  if (!(response.headers.get("content-type") ?? "").toLowerCase().startsWith(expectedContentType)) {
    throw new Error(`${pathname} did not return ${expectedContentType}`);
  }
  return response.text();
}

const sitemapXml = await render("/sitemap.xml", "application/xml");
const locations = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
if (!sitemapXml.startsWith("<?xml version=\"1.0\" encoding=\"UTF-8\"?>")) {
  throw new Error("sitemap.xml must begin with a UTF-8 XML declaration");
}
if (locations.length !== 41 || new Set(locations).size !== 41) {
  throw new Error("sitemap.xml must contain 41 unique reviewed URLs");
}
if (!locations.every((location) => location.startsWith("https://pikobuyspreadsheet.cc/"))) {
  throw new Error("sitemap.xml contains a non-canonical URL");
}

const robotsText = await render("/robots.txt", "text/plain");
if (!robotsText.includes("User-Agent: *") || !robotsText.includes("Allow: /") || !robotsText.includes("https://pikobuyspreadsheet.cc/sitemap.xml")) {
  throw new Error("robots.txt is missing the production crawl rules");
}

await Promise.all([
  writeFile(path.join(outputDirectory, "sitemap.xml"), sitemapXml, "utf8"),
  writeFile(path.join(outputDirectory, "robots.txt"), robotsText, "utf8"),
  ...pending,
]);

console.log(`Generated static search assets: ${locations.length} sitemap URLs and robots.txt.`);
