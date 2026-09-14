import { cp, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { build } from "esbuild";

const client = resolve("dist/client");
const server = resolve("dist/server");

// Pages uses this bundled Worker for application routes and serves the copied
// client assets directly from the same deployment.
await rm(resolve(client, ".assetsignore"), { force: true });
await rm(resolve(client, "_worker.js"), { force: true });
await cp(resolve(server, "_next"), resolve(client, "_next"), { recursive: true });
await build({
  entryPoints: [resolve(server, "index.js")],
  outfile: resolve(client, "_worker.js"),
  bundle: true,
  format: "esm",
  platform: "browser",
  target: "es2022",
  external: ["node:*"],
});

await writeFile(
  resolve(client, "_routes.json"),
  JSON.stringify({
    version: 1,
    include: ["/*"],
    exclude: [
      "/_next/static/*",
      "/favicon.svg",
      "/file.svg",
      "/globe.svg",
      "/lolobuy-logo.png",
      "/research-atlas.png",
      "/window.svg",
    ],
  }),
);
