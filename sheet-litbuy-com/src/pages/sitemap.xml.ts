import type { APIRoute } from 'astro';
import { getSourceProducts } from '../lib/findspreadsheet';

export const prerender = true;

const origin = 'https://sheet-litbuy.com';
const staticPaths = [
  { path: '/', priority: '1.0' },
  { path: '/categories/', priority: '0.9' },
  { path: '/product-details/', priority: '0.9' },
  { path: '/seo-articles/', priority: '0.8' },
  { path: '/faq/', priority: '0.7' },
];

const escapeXml = (value: string) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;');

export const GET: APIRoute = async () => {
  const { products } = await getSourceProducts();
  const urls = [
    ...staticPaths.map(({ path, priority }) => ({ path, priority })),
    ...products.map(({ id }) => ({ path: `/products/${encodeURIComponent(id)}/`, priority: '0.7' })),
  ];
  const body = urls.map(({ path, priority }) => `  <url>\n    <loc>${escapeXml(origin + path)}</loc>\n    <priority>${priority}</priority>\n  </url>`).join('\n');

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
