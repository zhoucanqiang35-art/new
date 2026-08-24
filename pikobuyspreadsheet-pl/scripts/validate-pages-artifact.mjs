import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const outputDirectory = path.resolve(process.argv[2] ?? "dist/pages");
const requiredFiles = [
  "_worker.js",
  "robots.txt",
  "pikobuy-logo.png",
  "pikobuy-hero.png",
];

await Promise.all(requiredFiles.map((file) => access(path.join(outputDirectory, file))));

const assets = await readdir(path.join(outputDirectory, "assets"));
if (!assets.some((file) => file.endsWith(".css"))) {
  throw new Error("Missing generated CSS in the Pages artifact");
}
if (!assets.some((file) => file.endsWith(".js"))) {
  throw new Error("Missing generated JavaScript in the Pages artifact");
}

const workerPath = path.join(outputDirectory, "_worker.js");
const workerUrl = pathToFileURL(workerPath);
workerUrl.searchParams.set("validation", `${process.pid}-${Date.now()}`);
const worker = await import(workerUrl.href);
if (!worker.default || typeof worker.default.fetch !== "function") {
  throw new Error("Pages Worker must export fetch(request, env, ctx)");
}

const contentTypes = new Map([
  [".css", "text/css"],
  [".js", "text/javascript"],
  [".json", "application/json"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"],
]);
const env = {
  ASSETS: {
    async fetch(request) {
      const pathname = decodeURIComponent(new URL(request.url).pathname);
      const assetPath = path.resolve(outputDirectory, `.${pathname}`);
      if (!assetPath.startsWith(`${outputDirectory}${path.sep}`)) {
        return new Response("Not found", { status: 404 });
      }
      try {
        const body = await readFile(assetPath);
        return new Response(body, {
          headers: {
            "content-type":
              contentTypes.get(path.extname(assetPath)) ??
              "application/octet-stream",
          },
        });
      } catch {
        return new Response("Not found", { status: 404 });
      }
    },
  },
};
const ctx = { waitUntil() {}, passThroughOnException() {} };

async function assertPage(pathname, expectedText) {
  const response = await worker.default.fetch(
    new Request(`https://pikobuyspreadsheet-pl.pages.dev${pathname}`, {
      headers: { accept: "text/html" },
    }),
    env,
    ctx,
  );
  const html = await response.text();
  if (
    response.status !== 200 ||
    !/^text\/html\b/i.test(response.headers.get("content-type") ?? "") ||
    !html.includes(expectedText)
  ) {
    throw new Error(`Pages artifact failed route validation: ${pathname}`);
  }
}

await assertPage("/", "PikoBuy Spreadsheet");
await assertPage("/faq", "Six useful answers before you order");
await assertPage("/language/pl", "PikoBuy Spreadsheet");

console.log("Validated Cloudflare Pages homepage, FAQ, Polish route and assets.");
