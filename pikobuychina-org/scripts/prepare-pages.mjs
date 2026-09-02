import { cpSync, existsSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

// Cloudflare Pages serves dist/client as its publish directory. Vinext keeps
// the Worker handler beside the client files, so copy the generated server
// module graph into that directory and expose it through Pages advanced mode.
const root = process.cwd();
const server = resolve(root, "dist/server");
const client = resolve(root, "dist/client");

if (!existsSync(server) || !existsSync(client)) {
  throw new Error("Vinext build output was not created.");
}

cpSync(server, client, { recursive: true, force: true });
writeFileSync(
  resolve(client, "_worker.js"),
  "export { default } from './index.js';\n",
  "utf8",
);
