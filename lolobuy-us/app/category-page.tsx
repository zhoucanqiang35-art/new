import Link from "next/link";
import { categories,homeDetailCopy,localeUiCopy } from "./site-data";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-components";
import CategoryCatalog from "./category-catalog";
import catalog from "./catalog-export.json";
import { categoryLabels } from "./category-labels";
import { categoryAdvice } from "./category-advice";
export const categorySlugs=["shoes","hoodies-sweaters","t-shirts","jackets","pants-shorts","headwear","accessories","jersey","electronics","other-stuff"] as const;
export function CategoryPage({slug,locale}:{slug:string;locale:string}) {
 const index=categorySlugs.indexOf(slug as typeof categorySlugs[number]); if(index<0)return null;
 const cat=categories[index], names=categoryLabels[locale] || categoryLabels.en, title=names[index];
 const entry=catalog[slug as keyof typeof catalog];
 const navCopy = (localeUiCopy[locale] || localeUiCopy.en).nav;
 const advice = categoryAdvice[locale]?.[slug];
 return <main className="elite-site cobalt-site content-site" lang={locale} dir={locale==="ar"?"rtl":"ltr"}><SiteHeader locale={locale}/><section className="catalog-content"><p className="micro-label">LOLOBUY SPREADSHEET / FINDSPREADSHEET</p><h1>{title}</h1><p>{locale==="zh"?"分类商品来自 FindSpreadsheet，价格和可用性请以主站及购买页面为准。":"Category products from FindSpreadsheet. Confirm availability and final price on the source and purchase pages."}</p><nav className="catalog-categories">{categorySlugs.map((s,i)=><Link key={s} href={`${locale==="en"?"":"/"+locale}/categories/${s}`} aria-current={s===slug?"page":undefined}>{names[i]}</Link>)}</nav><CategoryCatalog items={entry.products} locale={locale}/>{advice && <section className="category-advice"><h2>{title} · LoloBuy Spreadsheet</h2><p>{advice}</p></section>}<nav className="catalog-guide-links" aria-label={locale === "zh" ? "购买指南" : "Buying guides"}>{(slug === "shoes" || slug === "hoodies-sweaters") && <Link href={`${locale === "en" ? "" : "/" + locale}/guides/${slug === "shoes" ? "shoes-spreadsheet" : "hoodies-spreadsheet"}`}>{title} · LoloBuy Spreadsheet ↗</Link>}<Link href={`${locale === "en" ? "" : "/" + locale}/guides/how-lolobuy-works`}>{navCopy[1]} ↗</Link><Link href={`${locale === "en" ? "" : "/" + locale}/guides/qc-photos`}>{navCopy[2]} ↗</Link><Link href={`${locale === "en" ? "" : "/" + locale}/guides/shipping`}>{navCopy[3]} ↗</Link></nav><p className="catalog-footnote">{locale==="zh"?"主站商品快照：2026 年 11 月 6 日；价格按 7.26 CNY/USD 估算。":"FindSpreadsheet snapshot: 6 Nov 2026; estimated USD using 7.26 CNY/USD."} {entry.complete ? "" : (locale==="zh"?"此分类导出尚未完成。":"This category export is incomplete.")}</p></section><SiteFooter locale={locale}/></main>;
}
