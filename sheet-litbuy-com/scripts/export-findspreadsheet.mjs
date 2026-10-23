import { mkdir, writeFile } from 'node:fs/promises';
import { gzipSync } from 'node:zlib';

const ORIGIN = 'https://findspreadsheet.com';
const TOTAL_PAGES = 149;
const OUTPUT = new URL('../public/data/findspreadsheet-export.json', import.meta.url);
const MEDIA_OUTPUT = new URL('../public/data/findspreadsheet-media.json', import.meta.url);
const OUTPUT_GZIP = new URL('../public/data/findspreadsheet-export.json.gz', import.meta.url);
const MEDIA_OUTPUT_GZIP = new URL('../public/data/findspreadsheet-media.json.gz', import.meta.url);
const MAX_WEIDIAN_IMAGES = 12;

const decode = (value = '') => value
  .replaceAll('&amp;', '&')
  .replaceAll('&quot;', '"')
  .replaceAll('&#039;', "'")
  .replaceAll('&lt;', '<')
  .replaceAll('&gt;', '>')
  .trim();

const absolute = (value) => value.startsWith('http') ? value : `${ORIGIN}${value}`;

function readProducts(html) {
  const records = [];
  const matcher = /data-cart-id="([^"]+)"\s+data-cart-title="([^"]*)"\s+data-cart-price="([^"]*)"\s+data-cart-image="([^"]*)"\s+data-cart-url="([^"]*)"\s+data-cart-weidian="([^"]*)"/g;
  for (const match of html.matchAll(matcher)) {
    const [, id, title, price, image, sourcePath, weidianId] = match;
    const path = decode(sourcePath);
    records.push({
      id: decode(id),
      title: decode(title),
      price: decode(price),
      image: absolute(decode(image)),
      sourcePath: path,
      category: path.split('/').filter(Boolean)[0] || 'other',
      weidianId: decode(weidianId),
    });
  }
  return records;
}

async function fetchPage(page) {
  const suffix = page === 1 ? '/AllProducts/' : `/AllProducts/list_42_${page}/`;
  let lastStatus = 'network error';
  for (let attempt = 0; attempt < 6; attempt += 1) {
    try {
      const response = await fetch(`${ORIGIN}${suffix}`, {
        headers: { 'user-agent': 'SheetLitBuy catalogue export (read-only)' },
      });
      if (response.ok) return readProducts(await response.text());
      lastStatus = `HTTP ${response.status}`;
      if (response.status !== 429 && response.status < 500) break;
    } catch (error) { lastStatus = error instanceof Error ? error.message : 'network error'; }
    await new Promise((resolve) => setTimeout(resolve, 850 * (attempt + 1)));
  }
  throw new Error(`Source page ${page}: ${lastStatus}`);
}

async function runPool(items, limit, worker) {
  let next = 0;
  const results = [];
  await Promise.all(Array.from({ length: limit }, async () => {
    while (next < items.length) {
      const index = next++;
      results[index] = await worker(items[index]);
      process.stdout.write(`\rExporting FindSpreadsheet page ${index + 1}/${items.length}`);
    }
  }));
  return results;
}

// The product pages include a small gallery before the product-info panel.
// Restricting parsing to that block is important: images later in the HTML are
// related-product cards and must never be attached to the current record.
function readProductGallery(html) {
  const gallery = html.match(/<div class="product-gallery">([\s\S]*?)<div class="product-info">/i)?.[1] || '';
  const images = new Set();
  for (const match of gallery.matchAll(/(?:data-src|src)="([^"]+)"/g)) {
    const path = decode(match[1]);
    if (path.includes('/uploads/') && /\.(?:webp|png|jpe?g)(?:\?|$)/i.test(path)) images.add(absolute(path));
  }
  return [...images].slice(0, MAX_WEIDIAN_IMAGES);
}

async function fetchMedia(product) {
  let lastStatus = 'network error';
  for (let attempt = 0; attempt < 4; attempt += 1) {
    try {
      const response = await fetch(`${ORIGIN}${product.sourcePath}`, {
        headers: { 'user-agent': 'SheetLitBuy catalogue media export (read-only)' },
      });
      if (response.ok) {
        const gallery = readProductGallery(await response.text());
        return { id: product.id, weidianImages: gallery.length ? gallery : [product.image], qcImages: [] };
      }
      lastStatus = `HTTP ${response.status}`;
      if (response.status !== 429 && response.status < 500) break;
    } catch (error) { lastStatus = error instanceof Error ? error.message : 'network error'; }
    await new Promise((resolve) => setTimeout(resolve, 650 * (attempt + 1)));
  }
  // Preserve the visible source card image when a particular live page is
  // temporarily unavailable. Do not substitute any other product's image.
  return { id: product.id, weidianImages: [product.image], qcImages: [], unavailable: lastStatus };
}

const pages = Array.from({ length: TOTAL_PAGES }, (_, index) => index + 1);
const pageRecords = await runPool(pages, 4, fetchPage);
const unique = new Map();
for (const product of pageRecords.flat()) unique.set(product.id, product);
const products = [...unique.values()];
const categories = [...new Set(products.map((product) => product.category))];
process.stdout.write(`\nReading product-owned media for ${products.length} records…\n`);
const media = await runPool(products, 24, async (product) => {
  const entry = await fetchMedia(product);
  process.stdout.write(`\rReading product media ${products.indexOf(product) + 1}/${products.length}`);
  return entry;
});

await mkdir(new URL('../public/data/', import.meta.url), { recursive: true });
const catalogueJson = JSON.stringify({
  source: `${ORIGIN}/AllProducts/`,
  exportedAt: new Date().toISOString(),
  pageCount: TOTAL_PAGES,
  productCount: products.length,
  categories,
  products,
});
const mediaJson = JSON.stringify({
  source: ORIGIN,
  exportedAt: new Date().toISOString(),
  productCount: media.length,
  maxWeidianImages: MAX_WEIDIAN_IMAGES,
  products: media,
});
await Promise.all([
  writeFile(OUTPUT, catalogueJson), writeFile(MEDIA_OUTPUT, mediaJson),
  writeFile(OUTPUT_GZIP, gzipSync(catalogueJson, { level: 9 })),
  writeFile(MEDIA_OUTPUT_GZIP, gzipSync(mediaJson, { level: 9 })),
]);
const richMedia = media.filter((entry) => entry.weidianImages.length > 1).length;
process.stdout.write(`\nExported ${products.length} unique products across ${categories.length} categories; ${richMedia} have multi-image product galleries.\n`);
