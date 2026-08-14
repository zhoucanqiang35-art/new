import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputRoot = path.join(projectRoot, "out");
const sitemapPath = path.join(outputRoot, "sitemap.xml");
const productionOrigin = "https://lolobuyspreadsheet.es";
const expectedPageCount = 28;

const sitemap = await readFile(sitemapPath, "utf8");
const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);

if (locations.length !== expectedPageCount || new Set(locations).size !== expectedPageCount) {
  throw new Error(
    `Expected ${expectedPageCount} unique sitemap URLs, found ${locations.length} entries and ${new Set(locations).size} unique URLs.`,
  );
}

for (const location of locations) {
  const canonicalUrl = new URL(location);
  if (canonicalUrl.origin !== productionOrigin || !canonicalUrl.pathname.endsWith("/")) {
    throw new Error(`Invalid production sitemap URL: ${location}`);
  }

  const relativeHtmlPath =
    canonicalUrl.pathname === "/"
      ? "index.html"
      : path.join(canonicalUrl.pathname.slice(1), "index.html");
  const htmlPath = path.join(outputRoot, relativeHtmlPath);
  let html = await readFile(htmlPath, "utf8");
  const canonicalTags = html.match(/<link\b[^>]*\brel=["']canonical["'][^>]*>/gi) ?? [];

  if (canonicalTags.length > 1) {
    throw new Error(`Multiple canonical tags already exist in ${relativeHtmlPath}.`);
  }

  if (canonicalTags.length === 1) {
    const href = canonicalTags[0].match(/\bhref=["']([^"']+)["']/i)?.[1];
    if (href !== location) {
      throw new Error(`Unexpected canonical in ${relativeHtmlPath}: ${href ?? "missing href"}`);
    }
    continue;
  }

  if (!html.includes("</head>")) {
    throw new Error(`Missing closing head tag in ${relativeHtmlPath}.`);
  }

  html = html.replace("</head>", `<link rel="canonical" href="${location}"/></head>`);
  await writeFile(htmlPath, html);
}

console.log(`Applied and verified ${locations.length} self-referencing canonical URLs.`);
