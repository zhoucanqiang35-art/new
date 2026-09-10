import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("renders indexable production metadata", async () => {
  const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");

  assert.match(html, /<title>PikoBuy Spreadsheet 2026/);
  assert.match(html, /<meta[^>]+name="robots"[^>]+content="index, follow"/i);
  assert.match(html, /<link[^>]+rel="canonical"[^>]+href="https:\/\/pikobuyspreadsheet\.my\.id\/"/i);
});
