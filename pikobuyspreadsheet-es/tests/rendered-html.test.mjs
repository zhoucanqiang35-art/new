import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import test from "node:test";

const outputRoot = new URL("../out/", import.meta.url);
const page = (path = "") => new URL(`${path ? `${path}/` : ""}index.html`, outputRoot);
const readPage = (path = "") => readFile(page(path), "utf8");

test("desktop content remains present in exported HTML", async () => {
  const html = await readPage();
  assert.doesNotMatch(html, /<details class="mobile-fold"/);
  assert.match(html, /class="mobile-fold-body"/);
  assert.match(html, />241</);
});

test("Spanish homepage carries the requested SEO intent and complete sections", async () => {
  const html = await readPage("es-ES");
  assert.match(html, /Pikobuy Spreadsheet España 2026/);
  assert.match(html, /El spreadsheet de PikoBuy para España/);
  assert.match(html, /Excel PikoBuy en español/);
  assert.match(html, /Buscar hallazgos de PikoBuy/);
  assert.match(html, /Hallazgos de PikoBuy con ficha verificable/);
  assert.match(html, /class="hero-search"/);
  assert.match(html, /class="product-explorer"/);
  assert.match(html, /"@type":"FAQPage"/);
  assert.equal((html.match(/class="product-card"/g) || []).length, 8);
});

test("exported HTML has no outbound links except FindSpreadsheet", async () => {
  const queue = ["", "faq", "seo-articles/how-pikobuy-works", "es-ES", "es-ES/shipping", "es-ES/faq"];
  const seen = new Set();
  while (queue.length && seen.size < 80) {
    const path = queue.shift();
    if (seen.has(path)) continue;
    seen.add(path);
    await access(page(path));
    const html = await readPage(path);
    for (const match of html.matchAll(/href=["']([^"']+)["']/g)) {
      const href = match[1];
      if (href.startsWith("http")) {
        assert.ok(["https://findspreadsheet.com", "https://pikobuyspreadsheet.es"].includes(new URL(href).origin), `Unexpected outbound link: ${href}`);
      } else if (href.startsWith("/") && !href.startsWith("/_next/") && !/\.(?:png|webp|svg|css|js|ico)$/i.test(href) && !href.includes("#") && !href.includes("?")) {
        const clean = href.replace(/^\/+|\/+$/g, "");
        if (clean) queue.push(clean);
      }
    }
  }
});

test("every non-English locale retains localized FAQ, shipping and SEO structures", async () => {
  const locales = ["de-DE","fr-FR","es-ES","it-IT","nl-NL","pl-PL","pt-PT","pt-BR","sv-SE","da-DK","nb-NO","fi-FI","cs-CZ","ro-RO","hu-HU","el-GR","bg-BG","hr-HR","sk-SK","sl-SI","et-EE","lt-LT"];
  for (const locale of locales) {
    const faq = await readPage(`${locale}/faq`);
    const shipping = await readPage(`${locale}/shipping`);
    const article = await readPage(`${locale}/seo-articles/how-pikobuy-works`);
    const faqBody = faq.match(/class="prose faq-page">([\s\S]*?)<div class="callout">/)?.[1] || "";
    const shippingBody = shipping.match(/class="prose shipping-prose"[^>]*>([\s\S]*?)<\/div><aside/)?.[1] || "";
    const articleBody = article.match(/class="prose"[^>]*>([\s\S]*?)<div class="callout">/)?.[1] || "";
    assert.equal((faqBody.match(/<section/g) || []).length, 15, `${locale} FAQ count`);
    assert.equal((shippingBody.match(/<h2/g) || []).length, 3, `${locale} shipping section count`);
    assert.equal((shippingBody.match(/<li/g) || []).length, 5, `${locale} shipping input count`);
    assert.equal((articleBody.match(/<section/g) || []).length, 7, `${locale} SEO section count`);
    assert.equal((articleBody.match(/data-paragraph-slot=/g) || []).length, 21, `${locale} SEO paragraph count`);
  }
});

test("static export contains all generated pages", async () => {
  async function countHtml(directory) {
    let count = 0;
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const child = new URL(`${entry.name}${entry.isDirectory() ? "/" : ""}`, directory);
      if (entry.isDirectory()) count += await countHtml(child);
      else if (entry.name.endsWith(".html")) count += 1;
    }
    return count;
  }
  assert.equal(await countHtml(outputRoot), 795);
});
