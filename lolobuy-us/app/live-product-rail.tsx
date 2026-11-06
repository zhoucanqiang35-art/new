import snapshot from "./source-products.json";
import Link from "next/link";
import { homeSectionCopy, localeUiCopy } from "./site-data";

// Read the same public listing as FindSpreadsheet on each request. Do not invent
// Weidian IDs: rows without one continue to the source page for verification.
function decode(s: string) {
  return s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#039;|&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
}
async function products() {
  try {
    const res = await fetch("https://findspreadsheet.com/AllProducts/", { cache: "no-store", signal: AbortSignal.timeout(9000) });
    if (!res.ok) return { items: snapshot, live: false };
    const html = await res.text();
    const items = [...html.matchAll(/<button\b[^>]*data-cart-add\b[^>]*>/g)].map(([tag]) => {
      const attr = (name: string) => decode(tag.match(new RegExp(`${name}="([^"]*)"`))?.[1] || "");
      const path = attr("data-cart-url");
      const image = attr("data-cart-image");
      const id = attr("data-cart-weidian");
      const price = Number(attr("data-cart-price"));
      return { title: attr("data-cart-title"), path, image, id, price };
    }).filter(p => p.title && p.path.startsWith("/") && p.image.startsWith("/") && /^\d{5,20}$/.test(p.id) && Number.isFinite(p.price)).slice(0, 12);
    return { items: items.length ? items : snapshot, live: items.length > 0 };
  } catch { return { items: snapshot, live: false }; }
}
export async function LiveProductRail({ locale = "en" }: { locale?: string }) {
  const result = await products();
  const data = result.items;
  const copy = homeSectionCopy[locale] || homeSectionCopy.en;
  const ui = localeUiCopy[locale] || localeUiCopy.en;
  return <section className="product-rail" aria-labelledby="latest-products-title">
    <div className="product-rail-heading"><div><span>{result.live ? "FINDSPREADSHEET · LIVE CATALOG" : "FINDSPREADSHEET · SNAPSHOT 6 NOV 2026"}</span><h2 id="latest-products-title">FindSpreadsheet product finds</h2></div><p>Browse products from FindSpreadsheet. Confirm price, options and availability on the source page.</p><a href={`${locale === "en" ? "" : "/" + locale}/search`}>{copy.product[2]} ↗</a></div>
    {data.length ? <div className="live-products-grid">{data.map((p) => <article className="live-product" key={p.path}>
      <a href={/^\d{5,20}$/.test(p.id) ? `https://www.lolobuy.com/productDetail/1783404849631986?url=${encodeURIComponent(`https://weidian.com/item.html?itemID=${p.id}`)}` : `${locale === "en" ? "" : "/" + locale}/product/${p.path.split("/").pop()}`} target={/^\d{5,20}$/.test(p.id) ? "_blank" : undefined} rel={/^\d{5,20}$/.test(p.id) ? "sponsored noopener noreferrer" : undefined}><img src={`https://findspreadsheet.com${p.image}`} alt={p.title} loading="lazy" /><strong>{p.title}</strong></a>
      <small>{p.id ? `ID ${p.id}` : "FindSpreadsheet"}</small><b>≈ US${(p.price / 7.26).toFixed(2)}</b>
      <div className="live-product-actions"><a href={`${locale === "en" ? "" : "/" + locale}/product/${p.path.split("/").pop()}#product-images`}>{locale === "zh" ? "商品详情" : "Details"} ↗</a>{/^\d{5,20}$/.test(p.id) && <a href={`https://www.lolobuy.com/productDetail/1783404849631986?url=${encodeURIComponent(`https://weidian.com/item.html?itemID=${p.id}`)}`} target="_blank" rel="sponsored noopener noreferrer">{locale === "zh" ? "购买" : "Buy"} ↗</a>}{!/^\d{5,20}$/.test(p.id) && <button disabled title={locale === "zh" ? "商品 ID 尚未核实" : "Product ID not verified"}>{locale === "zh" ? "购买" : "Buy"} ↗</button>}</div>
    </article>)}</div> : <p>Product listings are temporarily unavailable. <a href={`${locale === "en" ? "" : "/" + locale}/search`}>Open FindSpreadsheet ↗</a></p>}
    <p className="product-rail-note">Prices are estimates using FindSpreadsheet’s displayed conversion (CNY 7.26 per USD). Confirm options, availability and final price on the destination site.</p>
    <Link href="/guides/qc-photos" className="text-link">QC guide ↗</Link>
  </section>;
}
