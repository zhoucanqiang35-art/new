import catalog from "./catalog-export.json";
import snapshot from "./source-products.json";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-components";
import CategoryCatalog from "./category-catalog";

type Product={title:string;path:string;image:string;id:string;price:number};
const allProducts:Product[] = [...new Map([...Object.values(catalog).flatMap(v=>v.products), ...snapshot].map(p=>[p.path,p])).values()];
const prefix=(locale:string)=>locale === "en" ? "" : `/${locale}`;
export function SearchPage({locale,query}:{locale:string;query:string}) {
 return <main className="elite-site cobalt-site content-site" lang={locale} dir={locale==="ar"?"rtl":"ltr"}><SiteHeader locale={locale}/><section className="catalog-content"><p className="micro-label">LOLOBUY SPREADSHEET / FINDSPREADSHEET</p><h1>{locale==="zh"?"商品搜索":"Search products"}</h1><p>{locale==="zh"?"搜索子站内的主站商品快照；商品价格和库存可能变化。":"Search the imported FindSpreadsheet catalog. Prices and availability may change."}</p><CategoryCatalog items={allProducts} locale={locale} initialQuery={query}/><p className="catalog-footnote">{locale==="zh"?"商品数据为 2026 年 11 月 6 日的快照，美元价格为参考值。":"Product data is a 6 Nov 2026 snapshot; USD prices are estimates."}</p></section><SiteFooter locale={locale}/></main>;
}
export function findProduct(slug:string) { return allProducts.find(p=>p.path.split("/").pop()===slug); }
async function productImages(product:Product):Promise<string[]> {
 const fallback = `https://findspreadsheet.com${product.image}`;
 try {
  // The source path comes only from the imported catalog, never from the request URL.
  if (!/^\/[a-z0-9-]+\/[a-z0-9-]+\.html$/i.test(product.path)) return [fallback];
  const res = await fetch(`https://findspreadsheet.com${product.path}`, {cache:"no-store", signal:AbortSignal.timeout(8000)});
  if (!res.ok) return [fallback];
  const html = await res.text();
  const images = [...html.matchAll(/<div\b[^>]*class=["'][^"']*\bthumbnail\b[^"']*["'][^>]*>\s*<img\b[^>]*>/gi)].map(([tag]) => {
   const src = tag.match(/(?:data-src|src)=["']([^"']+)["']/i)?.[1] || "";
   try { const url = new URL(src.replace(/&amp;/g,"&"), "https://findspreadsheet.com"); return url.hostname === "findspreadsheet.com" && url.pathname.startsWith("/uploads/") ? url.href : ""; } catch { return ""; }
  }).filter(Boolean);
  return images.length ? [...new Set(images)] : [fallback];
 } catch { return [fallback]; }
}
export async function ProductPage({locale,product}:{locale:string;product:Product}) {
 const images = await productImages(product);
 const valid=/^\d{5,20}$/.test(product.id), isZh=locale==="zh";
 const buy=`https://www.lolobuy.com/productDetail/1783404849631986?url=${encodeURIComponent(`https://weidian.com/item.html?itemID=${product.id}`)}`;
 return <main className="elite-site cobalt-site content-site" lang={locale} dir={locale==="ar"?"rtl":"ltr"}><SiteHeader locale={locale}/><section className="catalog-content"><a href={`${prefix(locale)}/search`} className="product-back">← {isZh?"返回商品搜索":"Back to products"}</a><div className="internal-product"><img src={`https://findspreadsheet.com${product.image}`} alt={product.title}/><div><p className="micro-label">LOLOBUY SPREADSHEET / FINDSPREADSHEET</p><h1>{product.title}</h1><p>{product.id ? `ID ${product.id}` : (isZh?"商品 ID 尚未核实":"Product ID not verified")}</p><p className="internal-product-price">≈ US${(product.price/7.26).toFixed(2)}</p><p>{isZh?"商品信息来自主站快照，价格、选项与库存请以购买页面为准。":"Product details are from a source snapshot. Confirm price, options and availability at checkout."}</p>{valid?<a className="internal-buy" href={buy} target="_blank" rel="sponsored noopener noreferrer">{isZh?"前往 LoloBuy 购买":"Buy on LoloBuy"} ↗</a>:<p>{isZh?"该商品缺少可核实的购买 ID，暂无法生成购买链接。":"A verified purchase ID is not available for this product."}</p>}</div></div><section id="product-images" className="product-image-gallery"><h2>{isZh?"商品图片":"Product images"}</h2><p>{isZh?"以下为主站提供的商品图片，并非已验证的仓库 QC 照片。":"These product images come from the source listing and are not verified warehouse QC photos."}</p>{images.map((src,i)=><img key={src} src={src} alt={`${product.title} — ${i+1}`} loading={i===0?"eager":"lazy"}/>)}</section></section><SiteFooter locale={locale}/></main>;
}
