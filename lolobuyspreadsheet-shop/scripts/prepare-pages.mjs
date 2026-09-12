import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const client = resolve("dist/client");
const server = resolve("dist/server");
const workerDir = resolve(client, "_worker");

await rm(workerDir, { recursive: true, force: true });
await mkdir(client, { recursive: true });
await cp(server, workerDir, { recursive: true });
await writeFile(
  resolve(client, "_worker.js"),
  'import worker from "./_worker/index.js";\n\nexport default worker;\n',
);
