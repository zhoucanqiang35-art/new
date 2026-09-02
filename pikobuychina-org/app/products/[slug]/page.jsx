import SiteHeader from '../../components/SiteHeader';
import { productBySlug } from '../../product-data';
import { localizedProducts, ui } from '../../content';
import { languageFrom, pageCopy } from '../../i18n';
export default async function ProductDetail({params,searchParams}){const {slug}=await params;const lang=languageFrom((await searchParams).lang);const p=pageCopy(lang);const u=ui[lang];const product=localizedProducts(lang).find((item)=>item.slug===slug)||{label:'Product',target:'https://findspreadsheet.com/AllProducts/'};return <main className="detail-page"><SiteHeader language={lang}/><section className="detail-hero"><p className="kicker">{p.detailsKicker}</p><h1>{product.label} {u.research}</h1><p>{p.detailsText}</p><p>{p.fullContext}</p><a className="primary" href={product.target}>{u.viewProducts} ↗</a></section><section className="detail-notes"><h2>{u.compare}</h2><ul>{u.points.map(point=><li key={point}>{point}</li>)}</ul></section></main>}
