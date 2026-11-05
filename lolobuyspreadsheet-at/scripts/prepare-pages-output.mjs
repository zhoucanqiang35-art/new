import { cp, mkdir, readdir, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const clientDirectory = resolve(root, "dist", "client");
const serverDirectory = resolve(root, "dist", "server");
const pagesDirectory = resolve(root, "dist");

for (const entry of await readdir(clientDirectory)) {
  if (entry === "_worker" || entry === "_worker.js") continue;

  const destination = resolve(pagesDirectory, entry);
  await rm(destination, { recursive: true, force: true });
  await cp(resolve(clientDirectory, entry), destination, { recursive: true });
}

await rm(resolve(pagesDirectory, "_worker.js"), { force: true });
const { default: worker } = await import(
  pathToFileURL(resolve(serverDirectory, "index.js")).href,
);
const categorySlugs = [
  "shoes",
  "hoodies",
  "t-shirts",
  "jackets",
  "pants",
  "headwear",
  "bags",
  "watches",
  "electronics",
  "accessories",
];
const routes = [
  "/",
  "/articles",
  "/categories",
  ...categorySlugs.map((slug) => `/categories/${slug}`),
  "/details",
  "/faq",
  "/guides",
];
const metadata = {
  "/": ["LoloBuy Spreadsheet AT | Finds, QC & Shipping Guide", "Explore product categories and practical QC and shipping checks with an independent LoloBuy spreadsheet guide."],
  "/categories": ["LoloBuy Spreadsheet Categories | Shoes, Clothing & More", "Browse LoloBuy spreadsheet categories and compare product listings, sizes and availability before ordering."],
  "/details": ["LoloBuy Product Research | Sizing, QC & Listing Checks", "Review product details, measurements, warehouse photos, prices and availability before deciding on an order."],
  "/guides": ["LoloBuy Buying Guide | Product Research, QC & Shipping", "Plan your LoloBuy order with practical product, warehouse QC and destination shipping checks."],
  "/articles": ["LoloBuy Spreadsheet Guide | Product Research to Shipping", "Learn how to research listings, check warehouse photos and plan international shipping with a LoloBuy spreadsheet."],
  "/faq": ["LoloBuy Spreadsheet FAQ | Product, QC & Shipping Questions", "Find answers on product discovery, warehouse checks, shipping estimates and the limits of spreadsheet information."],
};
const categoryTitles = {shoes:"Shoes",hoodies:"Hoodies","t-shirts":"T-Shirts",jackets:"Jackets",pants:"Pants",headwear:"Headwear",bags:"Bags",watches:"Watches",electronics:"Electronics",accessories:"Accessories"};
function addPageMetadata(html, route) {
  const category = route.startsWith("/categories/") ? categoryTitles[route.split("/").pop()] : null;
  const [title, description] = metadata[route] ?? [`LoloBuy ${category} Spreadsheet | Product Research`, `Explore ${category} finds and check listing details, measurements and availability before ordering.`];
  const canonical = `https://lolobuyspreadsheet.at${route === "/" ? "/" : `${route}/`}`;
  const esc = (value) => value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
  html = html.replace(/<title>[^<]*<\/title>/i, `<title>${esc(title)}</title>`)
    .replace(/<meta\s+name="description"[^>]*>/i, `<meta name="description" content="${esc(description)}">`)
    .replace(/<meta\s+name="codex-preview"[^>]*>/i, "")
    .replace(/<link\s+rel="canonical"[^>]*>/gi, "");
  return html.replace("</head>", `<link rel="canonical" href="${canonical}"></head>`);
}
const assets = { fetch: async () => new Response("Not Found", { status: 404 }) };

for (const route of routes) {
  const response = await worker.fetch(
    new Request(`https://lolobuyspreadsheet.at${route}`),
    { ASSETS: assets },
  );
  if (!response.ok) throw new Error(`Static render failed for ${route}`);

  const directory = resolve(pagesDirectory, route === "/" ? "." : route.slice(1));
  await mkdir(directory, { recursive: true });
  const html = addPageMetadata(await response.text(), route);
  await writeFile(resolve(directory, "index.html"), html);

  // Cloudflare currently publishes dist/client for this project. Keep that
  // directory complete as well, so either Pages output setting has a homepage.
  const clientRouteDirectory = resolve(
    clientDirectory,
    route === "/" ? "." : route.slice(1),
  );
  await mkdir(clientRouteDirectory, { recursive: true });
  await writeFile(resolve(clientRouteDirectory, "index.html"), html);
}

await rm(resolve(pagesDirectory, "server"), { recursive: true, force: true });
await rm(resolve(pagesDirectory, ".openai"), { recursive: true, force: true });
await rm(resolve(root, ".wrangler"), { recursive: true, force: true });

console.log("Prepared static Cloudflare Pages output in dist.");
