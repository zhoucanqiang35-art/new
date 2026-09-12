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
const assets = { fetch: async () => new Response("Not Found", { status: 404 }) };

for (const route of routes) {
  const response = await worker.fetch(
    new Request(`https://lolobuysheet-nl.pages.dev${route}`),
    { ASSETS: assets },
  );
  if (!response.ok) throw new Error(`Static render failed for ${route}`);

  const directory = resolve(pagesDirectory, route === "/" ? "." : route.slice(1));
  await mkdir(directory, { recursive: true });
  const html = await response.text();
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
