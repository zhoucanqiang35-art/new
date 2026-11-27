import { copyFile, mkdir, readFile, rename, writeFile } from "node:fs/promises";

const output = new URL("../dist/client/", import.meta.url);
const locales = JSON.parse(await readFile(new URL("../app/locales.json", import.meta.url), "utf8"));
const productPaths = locales.flatMap(({ code }) => [`/${code}/product`, `/${code}/product/`]);
// Route products through the Worker even on hosts that prefer existing static assets.
await Promise.all(locales.map(async ({ code }) => {
  const shell = new URL(`_catalog-product-shell/${code}/`, output);
  await mkdir(shell, { recursive: true });
  await rename(new URL(`${code}/product/index.html`, output), new URL("index.html", shell));
}));
const index = {};
await Promise.all(Array.from({ length: 8 }, async (_, shard) => {
  const rows = JSON.parse(await readFile(new URL(`data/uk-products-${shard}.json`, output), "utf8"));
  for (const { id } of rows) index[id] = shard;
}));
await writeFile(new URL("data/uk-product-index.json", output), JSON.stringify(index) + "\n");
await copyFile(new URL("./catalog-worker.mjs", import.meta.url), new URL("_worker.js", output));
await writeFile(new URL("_routes.json", output), JSON.stringify({
  version: 1, include: ["/api/catalog/*", ...productPaths], exclude: [],
}) + "\n");
