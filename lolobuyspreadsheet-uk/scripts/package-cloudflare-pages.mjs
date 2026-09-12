import { cp, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const clientDir = path.join(root, "dist", "client");
const serverDir = path.join(root, "dist", "server");
const packagedServerDir = path.join(clientDir, "_worker-server");

await cp(serverDir, packagedServerDir, { recursive: true, force: true });

const worker = `import app from "./_worker-server/index.js";

const staticPaths = new Set([
  "/favicon.svg",
  "/file.svg",
  "/globe.svg",
  "/hero-shopping.png",
  "/lolobuy-logo.png",
  "/robots.txt",
  "/sitemap.xml",
  "/window.svg",
]);

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname.startsWith("/assets/") || staticPaths.has(url.pathname)) {
      return env.ASSETS.fetch(request);
    }
    return app.fetch(request, env, ctx);
  },
};
`;

await writeFile(path.join(clientDir, "_worker.js"), worker);
