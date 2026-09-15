import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { build } from "vite";

const root = resolve(import.meta.dirname, "..");
const server = resolve(root, "dist/server");
const client = resolve(root, "dist/client");
const output = resolve(root, "dist/pages");

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(client, output, { recursive: true });
await cp(server, output, { recursive: true, force: true });
await writeFile(
  resolve(output, "_worker-entry.js"),
  `import app from "./index.js";

export default {
  async fetch(request, env, ctx) {
    if (env.ASSETS) {
      const asset = await env.ASSETS.fetch(request);
      if (asset.status !== 404) return asset;
    }
    return app.fetch(request, env, ctx);
  },
};
`,
);
await build({
  configFile: false,
  logLevel: "error",
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve(output, "_worker-entry.js"),
      formats: ["es"],
      fileName: () => "_worker.js",
    },
    outDir: output,
    rollupOptions: {
      external: [/^node:/],
      output: { inlineDynamicImports: true },
    },
  },
});
await rm(resolve(output, "_worker-entry.js"), { force: true });
await rm(resolve(output, "wrangler.json"), { force: true });
