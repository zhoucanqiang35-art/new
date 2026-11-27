import { copyFile, writeFile } from "node:fs/promises";

const output = new URL("../dist/client/", import.meta.url);
await copyFile(new URL("./catalog-worker.mjs", import.meta.url), new URL("_worker.js", output));
await writeFile(new URL("_routes.json", output), JSON.stringify({
  version: 1, include: ["/api/catalog/*"], exclude: [],
}) + "\n");
