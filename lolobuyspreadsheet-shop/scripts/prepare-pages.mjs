import { rm } from "node:fs/promises";
import { resolve } from "node:path";
import { build } from "esbuild";

const client = resolve("dist/client");
const server = resolve("dist/server");

await rm(resolve(client, "_worker.js"), { force: true });
await build({
  entryPoints: [resolve(server, "index.js")],
  outfile: resolve(client, "_worker.js"),
  bundle: true,
  format: "esm",
  platform: "browser",
  target: "es2022",
  external: ["node:*"],
});
