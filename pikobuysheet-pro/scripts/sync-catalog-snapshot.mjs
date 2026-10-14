import { readFile, writeFile } from 'node:fs/promises';

const origin = 'https://findspreadsheet.com';
const paths = ['/AllProducts/', '/AllProducts/list_42_2/', '/AllProducts/list_42_3/'];

function cleanText(value = '') {
  return String(value).replace(/<[^>]*>/g, ' ').replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, ' ').trim();
}

function parseProducts(html) {
  const products = [];
  const matcher = /<div class="product-card[\s\S]*?data-id="([^"]+)"[\s\S]*?<a href="([^"]+)" class="product-image">[\s\S]*?data-src="([^"]+)" alt="([^"]*)"[\s\S]*?<h3 class="product-name">([\s\S]*?)<\/h3>[\s\S]*?<div class="product-price">([^<]+)/gi;
  for (const hit of html.matchAll(matcher)) {
    const [id, path, image, alt, title, price] = hit.slice(1);
    if (!/^\/[^/]+\/.+-\d+\.html$/i.test(path)) continue;
    products.push({ id, path, image: new URL(image, origin).href, alt: cleanText(alt), title: cleanText(title), price: cleanText(price), weidian: '' });
  }
  return products;
}

const files = process.argv.slice(2);
const responses = files.length
  ? await Promise.all(files.map((file) => readFile(file, 'utf8')))
  : await Promise.all(paths.map(async (path) => {
      const response = await fetch(new URL(path, origin));
      if (!response.ok) throw new Error(`Could not fetch ${path}: ${response.status}`);
      return response.text();
    }));
const byPath = new Map();
for (const product of responses.flatMap(parseProducts)) byPath.set(product.path, product);
if (byPath.size < 100) throw new Error(`Only ${byPath.size} products were parsed; snapshot was not written.`);
await writeFile(new URL('../worker/catalog-data.js', import.meta.url), `// Generated from FindSpreadsheet current All Products pages.\nconst SNAPSHOT_PRODUCTS = ${JSON.stringify([...byPath.values()])};\n\n`, 'utf8');
console.log(`Wrote ${byPath.size} main-site products.`);
