import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

// Pages publishes the static output; its server bundle is intentionally removed.
test("published pages have distinct titles and canonical URLs", async () => {
  const root = await readFile(new URL("../dist/index.html", import.meta.url), "utf8");
  const article = await readFile(new URL("../dist/articles/index.html", import.meta.url), "utf8");
  assert.match(root, /<link rel="canonical" href="https:\/\/lolobuyspreadsheet\.at\/">/);
  assert.match(article, /<link rel="canonical" href="https:\/\/lolobuyspreadsheet\.at\/articles\/">/);
  assert.notEqual(root.match(/<title>(.*?)<\/title>/)?.[1], article.match(/<title>(.*?)<\/title>/)?.[1]);
  assert.doesNotMatch(root, /name="codex-preview"/);
  assert.match(article, /LoloBuy shipping to Austria: plan the full cost/);
});
