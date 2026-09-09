import { rm } from "node:fs/promises";
import { resolve } from "node:path";
import { build } from "esbuild";

const root = process.cwd();
const clientDirectory = resolve(root, "dist", "client");
const serverDirectory = resolve(root, "dist", "server");
const workerDirectory = resolve(clientDirectory, "_worker");

await rm(workerDirectory, { recursive: true, force: true });
await build({
  entryPoints: [resolve(serverDirectory, "index.js")],
  outfile: resolve(clientDirectory, "_worker.js"),
  bundle: true,
  format: "esm",
  platform: "browser",
  target: "es2022",
  external: ["node:*"]
});

console.log("Prepared Cloudflare Pages worker output in dist/client.");
