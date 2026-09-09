import { cp, readdir, rm } from "node:fs/promises";
import { resolve } from "node:path";
import { build } from "esbuild";

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
await build({
  entryPoints: [resolve(serverDirectory, "index.js")],
  outfile: resolve(pagesDirectory, "_worker.js"),
  bundle: true,
  format: "esm",
  platform: "browser",
  target: "es2022",
  external: ["node:*"]
});

console.log("Prepared Cloudflare Pages worker output in dist.");
