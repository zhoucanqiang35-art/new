import { rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { build } from "esbuild";

const client = resolve("dist/client");
const server = resolve("dist/server");

// Vinext creates this file for a different deployment workflow. Pages would
// honor it and omit the generated /_next CSS and JavaScript from the upload.
await rm(resolve(client, ".assetsignore"), { force: true });
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

await writeFile(
  resolve(client, "_routes.json"),
  JSON.stringify({
    version: 1,
    include: ["/*"],
    exclude: [
      "/_next/static/*",
      "/images/*",
      "/favicon.svg",
      "/file.svg",
      "/globe.svg",
      "/window.svg",
    ],
  }),
);
