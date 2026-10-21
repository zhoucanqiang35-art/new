import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = 'https://findspreadsheet.com';
const output = resolve(process.cwd(), 'public/data/findspreadsheet-export.json');
const featuredIds = new Set(['6250', '8779', '8661', '8710', '9017', '5984']);

async function sourceImages(product) {
  if (!product.weidianId) return [product.image];
  const response = await fetch(`${root}/api/Goods/getSkuData?weidian_id=${encodeURIComponent(product.weidianId)}`, {
    headers: { 'user-agent': 'LitBuySpreadsheetMediaExport/1.0' }
  });
  if (!response.ok) return [product.image];
  const data = await response.json();
  const images = [product.image, ...(Array.isArray(data.images) ? data.images : [])]
    .filter((image) => typeof image === 'string' && /^https?:\/\//.test(image));
  return [...new Set(images)].slice(0, 12);
}

async function sourceQcImages(product) {
  if (!product.weidianId) return [];
  const response = await fetch(`${root}/qcradar-qc.php?item=${encodeURIComponent(product.weidianId)}`, {
    headers: { 'user-agent': 'LitBuySpreadsheetMediaExport/1.0' }
  });
  if (!response.ok) return [];
  const data = await response.json();
  return (Array.isArray(data.images) ? data.images : [])
    .map((image) => image?.display)
    .filter((image) => typeof image === 'string' && /^https?:\/\//.test(image))
    .slice(0, 40);
}

const catalogue = JSON.parse(await readFile(output, 'utf8'));
for (const product of catalogue.products) {
  if (!featuredIds.has(product.id)) continue;
  try {
    product.weidianImages = await sourceImages(product);
    product.qcImages = await sourceQcImages(product);
    process.stdout.write(`Media exported for ${product.id} (${product.weidianImages.length} Weidian images, ${product.qcImages.length} QC images)\n`);
  } catch {
    product.weidianImages = [product.image];
    product.qcImages = [];
    process.stdout.write(`Media fallback for ${product.id}\n`);
  }
}
await writeFile(output, `${JSON.stringify(catalogue)}\n`);
