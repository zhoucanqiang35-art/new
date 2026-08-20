import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const page = (path) => new URL(`../out/${path}/index.html`, import.meta.url);

test("exports the English and representative localized routes", async () => {
  for (const path of [
    "shipping",
    "faq",
    "seo-articles/how-pikobuy-works",
    "de-DE/shipping",
    "fr-FR/faq",
    "es-ES/seo-articles/how-pikobuy-works",
  ]) await access(page(path));
});

test("exports indexable robots and the complete sitemap", async () => {
  const robots = await readFile(new URL("../out/robots.txt", import.meta.url), "utf8");
  const sitemap = await readFile(new URL("../out/sitemap.xml", import.meta.url), "utf8");
  assert.match(robots, /Allow: \//);
  assert.match(robots, /Sitemap: https:\/\/pikobuyspreadsheet\.es\/sitemap\.xml/);
  assert.match(sitemap, /https:\/\/pikobuyspreadsheet\.es\/de-DE\/shipping\//);
  assert.match(sitemap, /https:\/\/pikobuyspreadsheet\.es\/seo-articles\/how-pikobuy-works\//);
});

test("keeps long articles, FAQ and shipping content in static HTML", async () => {
  const article = await readFile(page("de-DE/seo-articles/how-pikobuy-works"), "utf8");
  const faq = await readFile(page("fr-FR/faq"), "utf8");
  const shipping = await readFile(page("es-ES/shipping"), "utf8");
  assert.equal((article.match(/data-content-slot=/g) || []).length, 7);
  assert.equal((article.match(/data-paragraph-slot=/g) || []).length, 21);
  assert.equal((faq.match(/class="section-index"/g) || []).length >= 15, true);
  assert.match(shipping, /data-content-template="shipping-v1"/);
});
