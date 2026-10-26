const origin = 'https://findspreadsheet.com';

export type Product = { id: string; title: string; price: string; views: string; image: string; sourcePath: string; productId: string; };
export type ProductDetail = Product & { gallery: string[]; };

const absolute = (value: string) => value.startsWith('http') ? value : new URL(value, origin).toString();
const text = (value = '') => value.replace(/<[^>]*>/g, ' ').replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, ' ').trim();
const attr = (html: string, name: string) => html.match(new RegExp(`${name}=["']([^"']+)["']`, 'i'))?.[1] ?? '';

function parseProducts(html: string, limit = 60): Product[] {
  return html.split(/<div class=["']product-card[^>]*>/i).slice(1).map((block) => {
    const sourcePath = attr(block.match(/<a[^>]+class=["']product-image[^>]*>/i)?.[0] ?? '', 'href');
    const imageTag = block.match(/<img[^>]+>/i)?.[0] ?? '';
    const image = attr(imageTag, 'data-src') || attr(imageTag, 'src');
    const title = text(block.match(/<h3[^>]*class=["']product-name[^>]*>([\s\S]*?)<\/h3>/i)?.[1]);
    const price = text(block.match(/<div[^>]*class=["']product-price[^>]*>([\s\S]*?)<\/div>/i)?.[1]);
    const views = text(block.match(/data-fs-view-aid=["'][^"']+["'][^>]*>([\s\S]*?)<\/span>/i)?.[1]);
    const productId = attr(block.match(/data-cart-weidian=["'][^"']+["']/i)?.[0] ?? '', 'data-cart-weidian');
    const id = attr(block, 'data-id') || productId;
    return { id, title, price, views, image: absolute(image), sourcePath, productId };
  }).filter((p) => p.title && p.sourcePath && p.image).slice(0, limit);
}

async function request(path: string) {
  const response = await fetch(new URL(path, origin), { headers: { 'accept': 'text/html', 'user-agent': 'pikobuy.nl-source-renderer/1.0' } });
  if (!response.ok) throw new Error(`FindSpreadsheet returned ${response.status}`);
  return response.text();
}

export async function latestProducts() { return parseProducts(await request('/AllProducts/'), 18); }
export async function productsByCategory(category: string) { return parseProducts(await request(`/${encodeURIComponent(category)}/`)); }
export async function searchProducts(keywords: string, sort = 'new') {
  const safeSort = ['new', 'click', 'price'].includes(sort) ? sort : 'new';
  return parseProducts(await request(`/index.php?m=home&c=Search&a=lists&keywords=${encodeURIComponent(keywords)}&sort=${safeSort}&sort_asc=desc&ZXljbXM=1`));
}
export async function productDetail(sourcePath: string): Promise<ProductDetail> {
  if (!/^\/[a-z0-9/_-]+\.html$/i.test(sourcePath)) throw new Error('Invalid source path');
  const html = await request(sourcePath);
  const item = parseProducts(html, 1)[0];
  const title = text(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1]) || item?.title;
  const productId = html.match(/Product ID:\s*(\d+)/i)?.[1] || html.match(/data-cart-weidian=["'](\d+)/i)?.[1] || item?.productId || '';
  const gallery = [...html.matchAll(/<img[^>]+>/gi)].map((m) => attr(m[0], 'data-src') || attr(m[0], 'src')).map(absolute).filter((src) => src.includes('/uploads/allimg/')).slice(0, 30);
  if (!title || !productId) throw new Error('Source product is unavailable');
  return { id: item?.id || productId, title, price: item?.price || '', views: item?.views || '', image: gallery[0] || item?.image || '', sourcePath, productId, gallery: [...new Set(gallery)] };
}

export function pikobuyRegisterUrl() { return 'https://www.pikobuy.com/?mode=register&redirect=/home'; }
export function pikobuyOrderUrl(productId: string) { return `https://www.pikobuy.com/product/detail?productUrl=${encodeURIComponent(`https://weidian.com/item.html?itemID=${productId.replace(/\D/g, '')}`)}`; }
