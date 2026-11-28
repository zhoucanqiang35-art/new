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

test("outbound purchase links on detail pages match the listed Weidian item", async () => {
  const queue = ["", "faq", "seo-articles/how-pikobuy-works", "es-ES", "es-ES/shipping", "es-ES/faq"];
  const seen = new Set();
  while (queue.length && seen.size < 80) {
    const path = queue.shift();
    if (seen.has(path)) continue;
    seen.add(path);
    await access(page(path));
    const html = await readPage(path);
    const itemId = html.match(/class="listing-id">Weidian ID <span>(\d+)<\/span>/)?.[1];
    for (const match of html.matchAll(/href=["']([^"']+)["']/g)) {
      const href = match[1];
      if (href.startsWith("http")) {
        const url = new URL(href.replaceAll("&amp;", "&"));
        const registration = url.href === "https://www.pikobuy.com/register?invitedCode=KPNJVF&inviteUserId=1109716";
        const purchase = itemId && url.protocol === "https:" && decodeURIComponent(url.href).includes(itemId);
        assert.ok(registration || purchase || ["https://findspreadsheet.com", "https://pikobuyspreadsheet.es"].includes(url.origin), `Unexpected outbound link: ${href}`);
      } else if (href.startsWith("/") && !href.startsWith("/_next/") && !/\.(?:png|webp|svg|css|js|ico)$/i.test(href) && !href.includes("#") && !href.includes("?")) {
        const clean = href.replace(/^\/+|\/+$/g, "");
        if (clean) queue.push(clean);
      }
    }
  }
});

test("every published non-English locale retains localized FAQ, shipping and SEO structures", async () => {
  const home = await readPage();
  const locales = [...home.matchAll(/<a[^>]* lang="([a-z]{2}-[A-Z]{2})" hrefLang=/g)].map(([, locale]) => locale);
  assert.equal(locales.length, 22);
  assert.equal(new Set(locales).size, 22);
  assert.match(home, /class="hero-search"/);
  assert.doesNotMatch(home, /class="search-band"/);
  assert.match(home, /href="https:\/\/www\.pikobuy\.com\/register\?invitedCode=KPNJVF&amp;inviteUserId=1109716"/);
  for (const locale of locales) {
    if (locale === "en-US") continue;
    const localizedHome = await readPage(locale);
    assert.ok(localizedHome.includes(`<html lang="${locale}">`), `${locale} HTML lang`);
    assert.doesNotMatch(localizedHome, /PikoBuy Spreadsheet 2026: QC Links and Budget Finds, Used Carefully/);
  }
  for (const locale of locales.filter((code) => code !== "en-US")) {
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

test("all English and Spanish product routes expose full listing data", async () => {
  const slugs = (await readdir(new URL("product/", outputRoot), { withFileTypes: true }))
    .filter((entry) => entry.isDirectory()).map((entry) => entry.name);
  assert.equal(slugs.length, 8);
  for (const slug of slugs) {
    for (const locale of ["", "es-ES/"]) {
      const html = await readPage(`${locale}product/${slug}`);
      const item = html.match(/class="listing-id">Weidian ID <span>(\d+)<\/span>/)?.[1];
      assert.ok(item, slug);
      assert.ok(html.includes(`class="listing-buy" href="https://www.pikobuy.com/product/detail?productUrl=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D${item}"`));
      for (const section of ["listing-thumbnails", "listing-styles", "listing-sizes", "listing-agents", "listing-photos"]) {
        assert.ok(html.includes(`class="${section}"`), `${slug}: ${section}`);
      }
      assert.match(html, /<h2>(Seller photos|Fotos del vendedor)<\/h2>/);
    }
  }
});

test("static export contains every currently generated page", async () => {
  async function countHtml(directory) {
    let count = 0;
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const child = new URL(`${entry.name}${entry.isDirectory() ? "/" : ""}`, directory);
      if (entry.isDirectory()) count += await countHtml(child);
      else if (entry.name.endsWith(".html")) count += 1;
    }
    return count;
  }
  assert.equal(await countHtml(outputRoot), 817);
});
