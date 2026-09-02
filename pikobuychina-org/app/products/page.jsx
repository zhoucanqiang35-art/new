import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import { localizedProducts } from '../content';
import { languageFrom, pageCopy, withLanguage } from '../i18n';

export const metadata = {
  title: 'Product Details | PikoBuy China Research Hub',
  description: 'Browse product research details by category before continuing to FindSpreadsheet.'
};

export default async function ProductDetailsPage({searchParams}) {
  const lang=languageFrom((await searchParams).lang); const p=pageCopy(lang); const products=localizedProducts(lang);
  return <main className="detail-page">
    <SiteHeader language={lang}/>
    <section className="detail-hero"><p className="kicker">{p.detailsKicker}</p><h1>{p.detailsTitle}</h1><p>{p.detailsText}</p><p>{p.fullContext}</p></section>
    <section className="detail-notes product-detail-grid">
      {products.map((product) => <Link className="product-detail-link" key={product.slug} href={withLanguage(`/products/${product.slug}`,lang)}><span>{p.detailsKicker}</span><strong>{product.label}</strong><em>{p.categoryOpen} →</em></Link>)}
    </section>
  </main>;
}
