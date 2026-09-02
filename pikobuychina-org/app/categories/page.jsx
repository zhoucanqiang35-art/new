import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import { localizedProducts, ui } from '../content';
import { languageFrom, pageCopy, withLanguage } from '../i18n';

export const metadata = {
  title: 'Product Categories | PikoBuy China Research Hub',
  description: 'Browse independent product research categories before continuing to FindSpreadsheet.'
};

export default async function CategoriesPage({searchParams}) {
  const lang=languageFrom((await searchParams).lang); const p=pageCopy(lang); const products=localizedProducts(lang); const u=ui[lang];
  return <main className="detail-page categories-page">
    <SiteHeader language={lang}/>
    <section className="detail-hero"><p className="kicker">{p.categoriesKicker}</p><h1>{p.categoriesTitle}</h1><p>{p.categoriesText}</p><p>{p.fullContext}</p></section>
    <section className="detail-notes"><div className="cards">{products.map(({ label, slug, target }, index) => <article key={slug}><Link className="card-detail" href={withLanguage(`/products/${slug}`,lang)}><b>{String(index + 1).padStart(2, '0')}</b><h3>{label}</h3><p>{p.categoryOpen} →</p></Link><a className="product-button" href={target}>{u.viewProducts} ↗</a></article>)}</div></section>
  </main>;
}
