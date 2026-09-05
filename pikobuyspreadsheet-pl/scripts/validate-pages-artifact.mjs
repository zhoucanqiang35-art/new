import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const outputDirectory = path.resolve(process.argv[2] ?? "dist/pages");
const requiredFiles = [
  "_worker.js",
  "robots.txt",
  "sitemap.xml",
  "pikobuy-logo.png",
  "pikobuy-hero.png",
];

await Promise.all(requiredFiles.map((file) => access(path.join(outputDirectory, file))));

const assets = await readdir(path.join(outputDirectory, "assets"));
const cssAsset = assets.find((file) => file.endsWith(".css"));
const jsAsset = assets.find((file) => file.endsWith(".js"));
if (!cssAsset) {
  throw new Error("Missing generated CSS in the Pages artifact");
}
if (!jsAsset) {
  throw new Error("Missing generated JavaScript in the Pages artifact");
}

const workerPath = path.join(outputDirectory, "_worker.js");
const workerUrl = pathToFileURL(workerPath);
workerUrl.searchParams.set("validation", `${process.pid}-${Date.now()}`);
const worker = await import(workerUrl.href);
if (!worker.default || typeof worker.default.fetch !== "function") {
  throw new Error("Pages Worker must export fetch(request, env, ctx)");
}

const contentTypes = new Map([
  [".css", "text/css"],
  [".js", "text/javascript"],
  [".json", "application/json"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"],
  [".txt", "text/plain"],
  [".xml", "application/xml"],
]);
const env = {
  ASSETS: {
    async fetch(request) {
      const pathname = decodeURIComponent(new URL(request.url).pathname);
      const assetPath = path.resolve(outputDirectory, `.${pathname}`);
      if (!assetPath.startsWith(`${outputDirectory}${path.sep}`)) {
        return new Response("Not found", { status: 404 });
      }
      try {
        const body = await readFile(assetPath);
        return new Response(body, {
          headers: {
            "content-type":
              contentTypes.get(path.extname(assetPath)) ??
              "application/octet-stream",
          },
        });
      } catch {
        return new Response("Not found", { status: 404 });
      }
    },
  },
};
const ctx = { waitUntil() {}, passThroughOnException() {} };

async function assertPage(pathname, expectedText, canonicalPath = pathname) {
  const response = await worker.default.fetch(
    new Request(`https://pikobuyspreadsheet-pl.pages.dev${pathname}`, {
      headers: { accept: "text/html" },
    }),
    env,
    ctx,
  );
  const html = await response.text();
  if (
    response.status !== 200 ||
    !/^text\/html\b/i.test(response.headers.get("content-type") ?? "") ||
    !html.includes(expectedText) ||
    /<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(html) ||
    !html.includes(`rel="canonical" href="https://pikobuyspreadsheet.pl${canonicalPath === "/" ? "/" : canonicalPath}"`)
  ) {
    throw new Error(`Pages artifact failed route validation: ${pathname}`);
  }
}

async function assertPublicAsset(pathname, expectedContentType, expectedText) {
  const response = await worker.default.fetch(
    new Request(`https://pikobuyspreadsheet-pl.pages.dev${pathname}`),
    env,
    ctx,
  );
  const body = await response.text();
  if (
    response.status !== 200 ||
    !response.headers.get("content-type")?.startsWith(expectedContentType) ||
    !body.includes(expectedText)
  ) {
    throw new Error(`Pages artifact failed public asset validation: ${pathname}`);
  }
}

async function assertAsset(filename, expectedContentType) {
  const response = await worker.default.fetch(
    new Request(`https://pikobuyspreadsheet-pl.pages.dev/assets/${filename}`),
    env,
    ctx,
  );
  if (
    response.status !== 200 ||
    !response.headers.get("content-type")?.startsWith(expectedContentType) ||
    (await response.arrayBuffer()).byteLength === 0
  ) {
    throw new Error(`Pages artifact failed asset validation: ${filename}`);
  }
}

await assertPage("/", "PikoBuy Spreadsheet");
await assertPage("/faq", "Six useful answers before you order");
await assertPage("/language/pl", "PikoBuy Spreadsheet", "/language/pl");
await assertPage("/pikobuy-fees-total-cost", "PikoBuy Fees Explained");
await assertPage("/pikobuy-seller-listing-verification", "PikoBuy Seller and Listing Verification Checklist");
await assertPage("/pikobuy-eu-vat-customs-preparation", "PikoBuy EU VAT and Customs Preparation Guide for 2026");
await assertPage("/pikobuy-tracking-delay-diagnosis", "PikoBuy Tracking Status After Shipping: Diagnose Parcel Delays");
await assertPage("/is-pikobuy-safe-buyer-checklist", "Is PikoBuy Safe to Use? A 12-Point Buyer Checklist");
await assertPage("/pikobuy-reviews-customer-experience-evidence", "PikoBuy Reviews and Customer Experiences: What the Evidence Shows");
await assertAsset(cssAsset, "text/css");
await assertAsset(jsAsset, "text/javascript");
await assertPublicAsset("/robots.txt", "text/plain", "Allow: /");
await assertPublicAsset("/sitemap.xml", "application/xml", "<loc>https://pikobuyspreadsheet.pl/</loc>");
await assertPublicAsset("/pikobuy-buyer-safety-checklist.svg", "image/svg+xml", "Evidence before confidence");
await assertPublicAsset("/pikobuy-review-evidence-ladder.svg", "image/svg+xml", "Evidence before confidence");

const robots = await readFile(path.join(outputDirectory, "robots.txt"), "utf8");
if (/^Disallow:\s*\/$/m.test(robots) || !robots.includes("https://pikobuyspreadsheet.pl/sitemap.xml")) {
  throw new Error("robots.txt blocks indexing or omits the canonical sitemap URL");
}

const sitemap = await readFile(path.join(outputDirectory, "sitemap.xml"), "utf8");
const sitemapUrls = sitemap.match(/<loc>/g)?.length ?? 0;
if (sitemapUrls !== 176 || !sitemap.includes('hreflang="x-default"') || !sitemap.includes("/pikobuy-reviews-customer-experience-evidence")) {
  throw new Error(`Expected 176 sitemap URLs with hreflang alternates and the new review evidence guide, found ${sitemapUrls}`);
}

console.log(
  "Validated indexable Pages routes, canonical links, robots.txt, a 176-URL sitemap, CSS and JavaScript.",
);
