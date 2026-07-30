import Image from "next/image";
import {
  categoryLinks,
  categorySlugs,
  localeCopy,
  products,
  routeFor,
  sectionItemSlugs,
  sectionItemTitles,
  type CategorySlug,
  type Locale,
  type Section,
} from "./site-content";
import { HomePage } from "./home-page";
import { SiteFooter, SiteHeader } from "./site-chrome";

export function LocalizedHome({ locale }: { locale: Locale }) {
  return <HomePage locale={locale} />;
}

export function SectionPage({ locale = "en", section }: { locale?: Locale; section: Section }) {
  const copy = localeCopy[locale];
  const card = copy.cards[section];
  const items = sectionItemTitles[locale][section];

  return (
    <main lang={locale}>
      <SiteHeader locale={locale} section={section} />
      <section className="inner-hero">
        <p className="eyebrow"><span /> Pikobuyy · {copy.nav[section]}</p>
        <h1>{card.title}</h1>
        <p>{card.text}</p>
      </section>
      <section className={`inner-list ${section === "categories" ? "category-list" : ""}`}>
        {items.map((item, index) => {
          const slug = section === "categories" ? categorySlugs[index] : sectionItemSlugs[section][index];
          const href = section === "categories"
            ? categoryLinks[categorySlugs[index]]
            : `${routeFor(locale, section)}/${slug}`;
          return (
          <article id={slug} key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div><h2>{item}</h2><p>{copy.intro}</p></div>
            <a href={href} target={section === "categories" ? "_blank" : undefined} rel={section === "categories" ? "noopener noreferrer" : undefined} aria-label={`${copy.itemCta}: ${item}`}>→</a>
          </article>
        )})}
      </section>
      <section className="inner-next">
        <p>{copy.independent}</p>
        <a href="https://findspreadsheet.com/" target="_blank" rel="noopener noreferrer">{copy.open} ↗</a>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}

export function CategoryPage({ locale = "en", category }: { locale?: Locale; category: CategorySlug }) {
  const copy = localeCopy[locale];
  const index = categorySlugs.indexOf(category);
  const title = sectionItemTitles[locale].categories[index];

  return (
    <main lang={locale}>
      <SiteHeader locale={locale} section="categories" />
      <section className="inner-hero category-detail-hero">
        <p className="eyebrow"><span /> {copy.categoryDetail.eyebrow}</p>
        <h1>{title}</h1>
        <p>{copy.cards.categories.text} {copy.intro}</p>
        <a className="text-link" href={routeFor(locale, "categories")}>← {copy.categoryDetail.back}</a>
      </section>
      <section className="category-detail">
        <div>
          <p className="eyebrow"><span /> {copy.categoryDetail.checkTitle}</p>
          <h2>{title}</h2>
        </div>
        <ol>
          {copy.categoryDetail.checks.map((check, checkIndex) => (
            <li key={check}><b>{String(checkIndex + 1).padStart(2, "0")}</b><span>{check}</span></li>
          ))}
        </ol>
      </section>
      {products.some((product) => product.category === category) && (
        <section className="featured-products category-products">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span /> Selected product details</p>
              <h2>{title} finds from the main directory.</h2>
            </div>
          </div>
          <div className="product-grid">
            {products.filter((product) => product.category === category).map((product) => (
              <a className="product-card" href={`${locale === "en" ? "" : `/${locale}`}/products/${product.slug}`} key={product.slug}>
                <div className="product-image"><Image src={product.image} alt={product.name} width={640} height={480} /></div>
                <div className="product-meta"><span>ID {product.productId}</span><b>${product.priceUsd}</b></div>
                <h3>{product.name}</h3>
                <p>{product.note}</p>
                <strong>{copy.itemCta} →</strong>
              </a>
            ))}
          </div>
        </section>
      )}
      <section className="inner-next">
        <p>{copy.independent}</p>
        <a href="https://findspreadsheet.com/" target="_blank" rel="noopener noreferrer">{copy.open} ↗</a>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
