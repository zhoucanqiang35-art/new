import { copyFile, cp, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const server = resolve(root, "dist/server");
const client = resolve(root, "dist/client");
const output = resolve(root, "dist/pages");

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(client, output, { recursive: true });
await cp(server, output, { recursive: true, force: true });
await copyFile(resolve(output, "index.js"), resolve(output, "_worker.js"));
await rm(resolve(output, "wrangler.json"), { force: true });
