import { access, readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const outputDirectory = path.resolve(process.argv[2] ?? "dist/pages");
const requiredFiles = [
  "_worker.js",
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

const workerUrl = pathToFileURL(workerPath);
workerUrl.searchParams.set("pages-validation", `${process.pid}-${Date.now()}`);
const worker = await import(workerUrl.href);
if (!worker.default || typeof worker.default.fetch !== "function") {
  throw new Error("dist/pages/_worker.js must export a default object with fetch(request, env, ctx)");
}

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
  [".webp", "image/webp"],
  [".woff2", "font/woff2"],
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
          headers: { "content-type": contentTypes.get(path.extname(assetPath)) ?? "application/octet-stream" },
        });
      } catch {
        return new Response("Not found", { status: 404 });
      }
    },
  },
};
const ctx = { waitUntil() {}, passThroughOnException() {} };
const get = (pathname, hostname = "pikobuyspreadsheet.cc") =>
  worker.default.fetch(new Request(`https://${hostname}${pathname}`, { headers: { accept: "text/html" } }), env, ctx);

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

const article = await get("/guides/pikobuy-spreadsheet");
if (article.status !== 200 || !(await article.text()).includes("What a PikoBuy Spreadsheet Is")) {
  throw new Error("Pages Worker did not render a representative guide");
}

const sitemap = await get("/sitemap.xml");
const sitemapXml = await sitemap.text();
if (sitemap.status !== 200 || (sitemapXml.match(/<loc>/g) ?? []).length !== 41) {
  throw new Error("Pages Worker sitemap must contain the 41 reviewed English URLs");
}

const robots = await get("/robots.txt");
const robotsText = await robots.text();
if (robots.status !== 200 || !robotsText.includes("Allow: /") || !robotsText.includes("https://pikobuyspreadsheet.cc/sitemap.xml")) {
  throw new Error("Pages Worker robots.txt is missing production crawl rules");
}

if ((await get("/missing-page")).status !== 404) throw new Error("Pages Worker must preserve real 404 responses");
if ((await get("/pikobuy-logo.png")).status !== 200) throw new Error("Pages Worker could not serve a public asset");

const preview = await get("/", "pikobuyspreadsheet-cc.pages.dev");
if (preview.headers.get("x-robots-tag") !== "noindex, nofollow") {
  throw new Error("Pages preview hostname must remain noindex");
}

const www = await get("/guides/pikobuy-spreadsheet", "www.pikobuyspreadsheet.cc");
if (www.status !== 301 || www.headers.get("location") !== "https://pikobuyspreadsheet.cc/guides/pikobuy-spreadsheet") {
  throw new Error("www must redirect to the canonical non-www route");
}

console.log(`Validated Pages artifact: ${requiredFiles.length} required files, Worker runtime, 41 sitemap URLs, robots, assets, 404 and canonical redirects passed.`);
