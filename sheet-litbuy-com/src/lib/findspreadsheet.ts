const ORIGIN = 'https://findspreadsheet.com';

export type SourceProduct = {
  id: string;
  title: string;
  price: string;
  image: string;
  sourcePath: string;
  category: string;
  weidianId: string;
  gallery: string[];
};

const decode = (value = '') => value
  .replaceAll('&amp;', '&')
  .replaceAll('&quot;', '"')
  .replaceAll('&#039;', "'")
  .replaceAll('&lt;', '<')
  .replaceAll('&gt;', '>')
  .trim();

const absolute = (value: string) => value.startsWith('http') ? value : `${ORIGIN}${value}`;

function readProducts(html: string): SourceProduct[] {
  const records: SourceProduct[] = [];
  const matcher = /data-cart-id="([^"]+)"\s+data-cart-title="([^"]*)"\s+data-cart-price="([^"]*)"\s+data-cart-image="([^"]*)"\s+data-cart-url="([^"]*)"\s+data-cart-weidian="([^"]*)"/g;
  for (const match of html.matchAll(matcher)) {
    const [, id, title, price, image, sourcePath, weidianId] = match;
    const path = decode(sourcePath);
    records.push({
      id: decode(id), title: decode(title), price: decode(price),
      image: absolute(decode(image)), sourcePath: path,
      category: path.split('/').filter(Boolean)[0] || 'other',
      weidianId: decode(weidianId), gallery: [],
    });
  }
  return records;
}

function readGallery(html: string): string[] {
  const images = new Set<string>();
  for (const match of html.matchAll(/(?:data-src|src)="([^"]+)"/g)) {
    const path = decode(match[1]);
    if (path.includes('/uploads/') && /\.(?:webp|png|jpe?g)(?:\?|$)/i.test(path)) images.add(absolute(path));
  }
  return [...images].slice(0, 12);
}

async function getGallery(path: string): Promise<string[]> {
  try {
    const response = await fetch(`${ORIGIN}${path}`, {
      headers: { 'user-agent': 'SheetLitBuy/1.1 (FindSpreadsheet live source)' }, cache: 'no-store',
    });
    return response.ok ? readGallery(await response.text()) : [];
  } catch { return []; }
}

async function loadSourceProducts(): Promise<{ products: SourceProduct[]; unavailable: boolean }> {
  try {
    const response = await fetch(`${ORIGIN}/AllProducts/`, {
      headers: { 'user-agent': 'SheetLitBuy/1.1 (FindSpreadsheet live source)' }, cache: 'no-store',
    });
    if (!response.ok) return { products: [], unavailable: true };
    const products = readProducts(await response.text());
    const galleries = await Promise.all(products.map((product) => getGallery(product.sourcePath)));
    return { products: products.map((product, index) => ({ ...product, gallery: galleries[index] })), unavailable: false };
  } catch { return { products: [], unavailable: true }; }
}

let sourceProductsRequest: Promise<{ products: SourceProduct[]; unavailable: boolean }> | undefined;

export function getSourceProducts(): Promise<{ products: SourceProduct[]; unavailable: boolean }> {
  sourceProductsRequest ??= loadSourceProducts();
  return sourceProductsRequest;
}

export const toSourceWebp = (url: string, width: number) => `${url}${url.includes('?') ? '&' : '?'}format=webp&w=${width}`;
export { ORIGIN };
