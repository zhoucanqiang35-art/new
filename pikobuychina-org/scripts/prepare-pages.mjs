import { cpSync, existsSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

// Cloudflare Pages serves dist/client as its publish directory. Vinext keeps
// the Worker handler beside the client files, so copy the generated server
// module graph into that directory and expose it through Pages advanced mode.
//
// In Pages advanced mode every request reaches _worker.js first. Forward the
// files Pages knows about (CSS, client scripts, images, etc.) to ASSETS, then
// render only routes that do not correspond to a static file. Without this
// wrapper the HTML renders but its stylesheet and client bundles are skipped.
// This source revision also provides the clean production build trigger.
const root = process.cwd();
const server = resolve(root, "dist/server");
const client = resolve(root, "dist/client");

if (!existsSync(server) || !existsSync(client)) {
  throw new Error("Vinext build output was not created.");
}

cpSync(server, client, { recursive: true, force: true });
writeFileSync(
  resolve(client, "_worker.js"),
  `import app from "./index.js";

export default {
  async fetch(request, env, ctx) {
    const asset = await env.ASSETS.fetch(request);
    if (asset.status !== 404) return asset;
    return app.fetch(request, env, ctx);
  },
};
`,
  "utf8",
);
