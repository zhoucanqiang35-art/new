import { readFile, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const outputDirectory = resolve("out");
const sitemapXmlPath = resolve(outputDirectory, "sitemap.xml");
const sitemapTextPath = resolve(outputDirectory, "sitemap-google.txt");

// Remove obsolete sitemap aliases from the final Pages output. Keeping one XML
// sitemap and one equivalent text sitemap avoids conflicting URL inventories.
await Promise.all(
  ["sitemap-direct.xml", "priority-sitemap.xml", "google-sitemap.xml", "sitemap.txt"].map((file) =>
    rm(resolve(outputDirectory, file), { force: true }),
  ),
);

const sitemapXml = await readFile(sitemapXmlPath, "utf8");
const urls = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) =>
  match[1]
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&apos;", "'"),
);

if (urls.length === 0) {
  throw new Error("No URLs found in out/sitemap.xml");
}

if (new Set(urls).size !== urls.length) {
  throw new Error("Duplicate URLs found in out/sitemap.xml");
}

const expectedOrigin = "https://pikobuyspreadsheet.my.id";
if (urls.some((url) => new URL(url).origin !== expectedOrigin)) {
  throw new Error(`Every sitemap URL must use ${expectedOrigin}`);
}

await writeFile(sitemapTextPath, `${urls.join("\n")}\n`, "utf8");
console.log(`Generated sitemap-google.txt with ${urls.length} URLs from sitemap.xml.`);
