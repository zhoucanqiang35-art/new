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
  assert.doesNotMatch(html, /class="hero-panel"/);
  const navigation = html.match(/<nav aria-label="Primary navigation">([\s\S]*?)<\/nav>/)?.[1];
  assert.ok(navigation);
  assert.doesNotMatch(navigation, /href="\/shipping\//);
});

test("Spanish homepage carries the requested SEO intent and complete sections", async () => {
  const html = await readPage("es-ES");
  assert.match(html, /Pikobuy Spreadsheet España 2026/);
  assert.match(html, /El spreadsheet de PikoBuy para España/);
  assert.match(html, /Excel PikoBuy en español/);
  assert.match(html, /Buscar hallazgos de PikoBuy/);
  assert.match(html, /Hallazgos de PikoBuy con ficha verificable/);
  assert.match(html, /class="hero-search"/);
  assert.match(html, /class="site-main home-page"/);
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
        const sources = ["https://www.pikobuy.com/guide", "https://www.pikobuy.com/shipping-cost", "https://www.pikobuy.com/protocol/returns", "https://www.pikobuy.com/protocol/shipping", "https://www.pikobuy.com/protocol/terms", "https://www.pikobuy.com/contact", "https://taxation-customs.ec.europa.eu/taxation/vat/vat-directive/taxable-transactions_en", "https://taxation-customs.ec.europa.eu/buying-online-other-territories_en"];
        const registration = url.href === "https://www.pikobuy.com/register?invitedCode=KPNJVF&inviteUserId=1109716";
        const productImage = itemId && url.origin === "https://si.geilicdn.com" && /\.(?:jpe?g|png|webp)$/i.test(url.pathname);
        const purchase = itemId && url.protocol === "https:" && decodeURIComponent(url.href).includes(itemId);
        assert.ok(registration || sources.includes(url.href) || productImage || purchase || ["https://findspreadsheet.com", "https://pikobuyspreadsheet.es"].includes(url.origin), `Unexpected outbound link: ${href}`);
      } else if (href.startsWith("/") && !href.startsWith("/_next/") && !/\.(?:png|jpe?g|webp|svg|css|js|ico)$/i.test(href) && !href.includes("#") && !href.includes("?")) {
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
    assert.equal((faqBody.match(/<section/g) || []).length, locale === "es-ES" ? 27 : 15, `${locale} FAQ count`);
    assert.equal((shippingBody.match(/<h2/g) || []).length, 3, `${locale} shipping section count`);
    assert.equal((shippingBody.match(/<li/g) || []).length, 5, `${locale} shipping input count`);
    assert.equal((articleBody.match(/<section/g) || []).length, 7, `${locale} SEO section count`);
    assert.equal((articleBody.match(/data-paragraph-slot=/g) || []).length, locale === "es-ES" ? 7 : 21, `${locale} SEO paragraph count`);
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
      const alternatives = html.match(/class="listing-agents">([\s\S]*?)<\/div>/)?.[1];
      assert.ok(alternatives);
      assert.doesNotMatch(alternatives, /href="https:\/\/(?:www\.)?(?:ponybuy|panglobalbuy|hoobuy)\.com/i);
      assert.ok(alternatives.includes(`href="https://weidian.com/item.html?itemID=${item}"`));
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
  assert.equal(await countHtml(outputRoot), 861);
});


test("every catalog record resolves in its product detail shard", async () => {
  const base = new URL("data/main-catalog/", outputRoot);
  const index = JSON.parse(await readFile(new URL("index.json", base), "utf8"));
  const shards = await Promise.all(Array.from({ length: 16 }, async (_, i) =>
    JSON.parse(await readFile(new URL(`details-${i}.json`, base), "utf8"))));
  assert.ok(index.length > 8000);
  assert.equal(new Set(index.map(row => row[0])).size, index.length);
  assert.equal(new Set(index.map(row => row[3])).size, index.length);
  assert.equal(shards.reduce((total, shard) => total + Object.keys(shard).length, 0), index.length);
  for (const row of index) {
    const [resolved] = shards[Number(row[0]) % 16][row[0]];
    assert.deepEqual(resolved, row);
  }
  assert.match(await readPage(), /<form action="\/products\/" method="get"><input type="search"/);
  assert.match(await readPage("es-ES/catalog-product"), /<html lang="es-ES">/);
});


test("buying guide embeds all screenshots in English and Spanish", async () => {
  for (const locale of ["", "es-ES/"]) {
    const html = await readPage(`${locale}guides`);
    assert.equal((html.match(/class="guide-step"/g) || []).length, 9);
    const images = [...html.matchAll(/<img src="(\/guide\/[^"]+)"/g)].map(([,src]) => src);
    assert.equal(images.length, 8);
    await Promise.all(images.map(src => access(new URL(src.slice(1),outputRoot))));
  }
});


test("image search is localized and its index covers all catalog products with photos", async () => {
  const search = await readPage("image-search");
  const spanish = await readPage("es-ES/image-search");
  assert.match(search, /<h1>Image Search<\/h1>/);
  assert.match(spanish, /<h1>Búsqueda por imagen<\/h1>/);
  assert.match(search, /type="file" accept="image\/jpeg,image\/png,image\/webp,image\/avif"/);
  const directory = new URL("data/main-catalog/", outputRoot);
  const rows = JSON.parse(await readFile(new URL("index.json", directory), "utf8"));
  const binary = await readFile(new URL("image-features.bin", directory));
  assert.equal(binary.length % 86, 0);
  const productIds = new Set();
  for (let offset = 0; offset < binary.length; offset += 86) productIds.add(binary.readUInt16LE(offset).toString());
  assert.equal(productIds.size, rows.filter(row => row[4]).length);
  assert.ok(rows.every(row => !row[4] || productIds.has(row[0])));
});
