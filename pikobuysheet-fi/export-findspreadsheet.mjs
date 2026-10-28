import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const source = 'https://findspreadsheet.com';
const output = resolve(process.cwd(), 'public/data/findspreadsheet-export.json');
const concurrency = 4;
const pageUrl = (page) => page === 1 ? `${source}/AllProducts/` : `${source}/AllProducts/list_42_${page}/`;

const decode = (value = '') => value
  .replaceAll('&amp;', '&')
  .replaceAll('&quot;', '"')
  .replaceAll('&#039;', "'")
  .replaceAll('&lt;', '<')
  .replaceAll('&gt;', '>')
  .trim();

async function getPage(page) {
  for (let attempt = 1; attempt <= 4; attempt += 1) {
    const response = await fetch(pageUrl(page), { headers: { 'user-agent': 'LitBuySpreadsheetExport/1.0' } });
    const html = response.ok ? await response.text() : '';
    if (readProducts(html).length > 0 || page > 149) return html;
    if (attempt < 4) await new Promise((resolve) => setTimeout(resolve, attempt * 900));
  }
  return '';
}

function readProducts(html) {
  const products = [];
  const re = /data-cart-id="([^"]+)"\s+data-cart-title="([^"]*)"\s+data-cart-price="([^"]*)"\s+data-cart-image="([^"]*)"\s+data-cart-url="([^"]*)"\s+data-cart-weidian="([^"]*)"/g;
  for (const match of html.matchAll(re)) {
    const [, id, title, price, image, path, weidian] = match;
    const segments = path.split('/').filter(Boolean);
    products.push({
      id: decode(id),
      name: decode(title),
      price: decode(price),
      image: image.startsWith('http') ? image : `${source}${decode(image)}`,
      sourcePath: decode(path),
      category: segments[0] || 'other-stuff',
      weidianId: decode(weidian),
      // The first source image is always available. Richer Weidian/QC media can be
      // added by the media-enrichment step without creating a separate catalogue.
      weidianImages: [image.startsWith('http') ? image : `${source}${decode(image)}`],
      qcImages: []
    });
  }
  return products;
}

async function pageExists(page) {
  return readProducts(await getPage(page)).length > 0;
}

async function findLastPage() {
  let low = 1;
  let high = 2;
  while (await pageExists(high)) {
    low = high;
    high *= 2;
    if (high > 1024) throw new Error('Source pagination exceeded the safe export limit.');
  }
  while (low + 1 < high) {
    const middle = Math.floor((low + high) / 2);
    if (await pageExists(middle)) low = middle;
    else high = middle;
  }
  return low;
}

async function main() {
  const lastPage = await findLastPage();
  const pages = Array.from({ length: lastPage }, (_, index) => index + 1);
  const records = [];
  let cursor = 0;
  async function worker() {
    while (cursor < pages.length) {
      const page = pages[cursor++];
      const products = readProducts(await getPage(page));
      records.push(...products);
      process.stdout.write(`Exported page ${page}/${lastPage} (${products.length} products)\n`);
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, pages.length) }, worker));
  const unique = [...new Map(records.map((product) => [product.id, product])).values()]
    .sort((a, b) => Number(b.id) - Number(a.id));
  const payload = { source, exportedAt: new Date().toISOString(), total: unique.length, products: unique };
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, `${JSON.stringify(payload)}\n`);
  process.stdout.write(`Saved ${unique.length} products to ${output}\n`);
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
