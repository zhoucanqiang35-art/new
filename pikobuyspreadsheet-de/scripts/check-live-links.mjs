import fs from "node:fs/promises";

const catalog = await fs.readFile(new URL("../app/catalog.ts", import.meta.url), "utf8");
const urls = [...new Set([...catalog.matchAll(/href:\s*"(https:\/\/findspreadsheet\.com\/[^\"]+)"/g)].map((match) => match[1]))];

if (!urls.length) throw new Error("No live database links found in app/catalog.ts");

const results = await Promise.all(urls.map(async (url) => {
  const startedAt = Date.now();
  try {
    const response = await fetch(url, {
      redirect: "follow",
      signal: AbortSignal.timeout(20_000),
      headers: { "user-agent": "PikoBuySpreadsheet-LinkHealth/1.0" },
    });
    return { url, finalUrl: response.url, status: response.status, ok: response.ok, durationMs: Date.now() - startedAt };
  } catch (error) {
    return { url, status: 0, ok: false, durationMs: Date.now() - startedAt, error: error instanceof Error ? error.message : String(error) };
  }
}));

for (const result of results) {
  console.log(`${result.ok ? "OK" : "FAIL"} ${result.status} ${result.url}${result.finalUrl && result.finalUrl !== result.url ? ` -> ${result.finalUrl}` : ""} (${result.durationMs}ms)`);
}

const failed = results.filter((result) => !result.ok);
if (failed.length) {
  console.error(`${failed.length} of ${results.length} live database paths failed.`);
  process.exitCode = 1;
} else {
  console.log(`All ${results.length} live database paths responded successfully.`);
}
