import Image from "next/image";
import Link from "next/link";
import {
  localeCopy,
  products,
  routeFor,
  sectionItemSlugs,
  sectionItemTitles,
  type Locale,
  type Product,
  type Section,
} from "./site-content";
import { SiteFooter, SiteHeader } from "./site-chrome";
import { getEditorialEntry } from "./editorial-content";
import { absoluteUrl, breadcrumbSchema } from "./seo";

const detailCopy: Record<Locale, {
  read: string;
  back: string;
  overview: string;
  checklist: string;
  current: string;
  source: string;
  usdNote: string;
  labels: [string, string, string];
}> = {
  en: { read: "Complete page", back: "Back to the list", overview: "What this page covers", checklist: "Practical checklist", current: "Open exact product on the main site", source: "Main-site product", usdNote: "USD estimate converted from the listed CNY price at ¥1 = $0.1478 on Jul 29, 2026. Final prices can change.", labels: ["Listed price", "Product ID", "Category"] },
  de: { read: "Vollständige Seite", back: "Zurück zur Liste", overview: "Inhalt dieser Seite", checklist: "Praktische Checkliste", current: "Genaues Produkt auf der Hauptseite öffnen", source: "Produkt der Hauptseite", usdNote: "USD-Schätzung aus dem CNY-Preis zum Kurs ¥1 = $0,1478 am 29. Juli 2026. Endpreise können sich ändern.", labels: ["Angezeigter Preis", "Produkt-ID", "Kategorie"] },
  fr: { read: "Page complète", back: "Retour à la liste", overview: "Contenu de cette page", checklist: "Liste pratique", current: "Ouvrir le produit exact sur le site principal", source: "Produit du site principal", usdNote: "Estimation en USD à partir du prix CNY au taux de ¥1 = 0,1478 $ le 29 juillet 2026. Le prix final peut changer.", labels: ["Prix affiché", "ID produit", "Catégorie"] },
  es: { read: "Página completa", back: "Volver a la lista", overview: "Qué cubre esta página", checklist: "Lista práctica", current: "Abrir el producto exacto en el sitio principal", source: "Producto del sitio principal", usdNote: "Estimación en USD desde el precio CNY a ¥1 = 0,1478 $ el 29 de julio de 2026. El precio final puede cambiar.", labels: ["Precio publicado", "ID del producto", "Categoría"] },
  it: { read: "Pagina completa", back: "Torna all’elenco", overview: "Contenuto della pagina", checklist: "Checklist pratica", current: "Apri il prodotto esatto sul sito principale", source: "Prodotto del sito principale", usdNote: "Stima in USD dal prezzo CNY al cambio ¥1 = $0,1478 del 29 luglio 2026. Il prezzo finale può cambiare.", labels: ["Prezzo indicato", "ID prodotto", "Categoria"] },
  pl: { read: "Pełna strona", back: "Wróć do listy", overview: "Zakres tej strony", checklist: "Praktyczna lista", current: "Otwórz dokładny produkt w serwisie głównym", source: "Produkt z serwisu głównego", usdNote: "Szacunek USD z ceny CNY po kursie ¥1 = 0,1478 USD z 29 lipca 2026 r. Cena końcowa może się zmienić.", labels: ["Podana cena", "ID produktu", "Kategoria"] },
  nl: { read: "Volledige pagina", back: "Terug naar de lijst", overview: "Wat deze pagina behandelt", checklist: "Praktische checklist", current: "Open het exacte product op de hoofdsite", source: "Product van de hoofdsite", usdNote: "USD-schatting van de CNY-prijs tegen ¥1 = $0,1478 op 29 juli 2026. De uiteindelijke prijs kan wijzigen.", labels: ["Vermelde prijs", "Product-ID", "Categorie"] },
  pt: { read: "Página completa", back: "Voltar à lista", overview: "Conteúdo desta página", checklist: "Lista prática", current: "Abrir o produto exato no site principal", source: "Produto do site principal", usdNote: "Estimativa em USD a partir do preço CNY à taxa de ¥1 = $0,1478 em 29 de julho de 2026. O preço final pode mudar.", labels: ["Preço indicado", "ID do produto", "Categoria"] },
};

const localizedFallbackParagraphs: Record<Exclude<Section, "categories">, string[]> = {
  guides: [
    "Use this guide as a repeatable workflow: start with a narrow category, compare the listing evidence, then verify the current page before saving a product.",
    "The goal is not to make a decision from one image. Review several angles, look for measurements and note which details matter for this product type.",
    "Keep product price and shipping separate. International cost depends on measured weight, dimensions, route, destination and packaging.",
  ],
  articles: [
    "A Pikobuy spreadsheet is most useful when it organizes product research, not when it simply repeats a long list of links.",
    "Strong pages connect search intent with categories, product-level notes, QC reminders and a clear path to the current listing.",
    "Because links, variants and prices can change, the exact product page remains the final source for availability and purchase details.",
  ],
  updates: [
    "This update documents a concrete change to the Pikobuyy research structure and explains why the change improves navigation.",
    "The revised route now leads to a complete standalone page, giving search engines and visitors a clear destination instead of a page anchor.",
    "Related category, guide and product links are kept close to the content so the next useful step is always visible.",
  ],
  faq: [
    "This answer expands the short FAQ response with the context a first-time visitor needs before opening a product listing.",
    "Pikobuyy is an independent research resource. It does not sell products, take payments or guarantee third-party listing details.",
    "Always confirm the current product page, available variants, photos, measurements and total cost before making a decision.",
  ],
};

export function ContentDetailPage({ locale = "en", section, slug }: { locale?: Locale; section: Exclude<Section, "categories">; slug: string }) {
  const index = sectionItemSlugs[section].indexOf(slug);
  const title = sectionItemTitles[locale][section][index];
  const copy = localeCopy[locale];
  const labels = detailCopy[locale];
  const entry = getEditorialEntry(section, slug);
  const paragraphs = localizedFallbackParagraphs[section];
  const articleSchema = locale === "en" && section === "articles" && entry
    ? {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Article",
            "@id": `${absoluteUrl(`articles/${slug}`)}#article`,
            headline: entry.seoTitle ?? title,
            description: entry.dek,
            datePublished: entry.published ?? "2026-07-29",
            dateModified: entry.modified ?? entry.published ?? "2026-07-29",
            mainEntityOfPage: absoluteUrl(`articles/${slug}`),
            ...(entry.visual ? { image: `https://pikobuyy.com${entry.visual.src}` } : {}),
            author: { "@type": "Organization", name: "Pikobuyy" },
            publisher: { "@type": "Organization", name: "Pikobuyy", url: "https://pikobuyy.com/" },
          },
          breadcrumbSchema([
            { name: "Pikobuyy", path: "/" },
            { name: "SEO Articles", path: "/articles/" },
            { name: entry.seoTitle ?? title, path: `/articles/${slug}/` },
          ]),
        ],
      }
    : null;

  return (
    <main lang={locale}>
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }}
        />
      )}
      <SiteHeader locale={locale} section={section} />
      <article className="editorial-page">
        <header>
          <p className="eyebrow"><span /> {labels.read} · {copy.nav[section]}</p>
          <h1>{title}</h1>
          <p>{locale === "en" && entry ? entry.dek : copy.cards[section].text}</p>
          {locale === "en" && entry && (
            <div className="article-byline">
              <span>{entry.reviewed}</span>
              <span>{entry.readingTime}</span>
              <span>Independent editorial research</span>
            </div>
          )}
          <a className="text-link" href={routeFor(locale, section)}>← {labels.back}</a>
        </header>
        <div className="editorial-layout">
          <aside>
            <span>01</span><b>{labels.overview}</b>
            <span>02</span><b>{labels.checklist}</b>
            <span>03</span><b>{copy.nav.categories}</b>
          </aside>
          <div className="editorial-body">
            {locale === "en" && entry ? (
              <>
                <div className="article-callout fact-box">
                  <b>Verified takeaways</b>
                  <ul>{entry.keyFacts.map((fact) => <li key={fact}>{fact}</li>)}</ul>
                </div>
                {entry.visual && (
                  <figure className="article-visual">
                    <Image
                      src={entry.visual.src}
                      alt={entry.visual.alt}
                      width={entry.visual.width}
                      height={entry.visual.height}
                    />
                    <figcaption>{entry.visual.caption}</figcaption>
                  </figure>
                )}
                {entry.sections.map((contentSection) => (
                  <section className="article-section" key={contentSection.heading}>
                    <h2>{contentSection.heading}</h2>
                    {contentSection.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    {contentSection.bullets && <ul>{contentSection.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
                    {contentSection.subsections?.map((subsection) => (
                      <div className="article-subsection" key={subsection.heading}>
                        <h3>{subsection.heading}</h3>
                        {subsection.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                      </div>
                    ))}
                  </section>
                ))}
                {entry.relatedLinks && (
                  <section className="article-related" aria-labelledby="article-related-title">
                    <p className="source-kicker">USEFUL INTERNAL GUIDES</p>
                    <h2 id="article-related-title">Continue with the next practical decision.</h2>
                    <div>
                      {entry.relatedLinks.map((link) => (
                        <Link href={link.url} key={link.url}>
                          <h3>{link.label}</h3>
                          <p>{link.note}</p>
                          <b>Read guide →</b>
                        </Link>
                      ))}
                    </div>
                  </section>
                )}
                <section className="article-sources">
                  <div className="source-heading-row">
                    <div>
                      <p className="source-kicker">{entry.reviewed.replace("Fact-checked ", "FACT CHECK · ").toUpperCase()}</p>
                      <h2>What the official pages establish</h2>
                    </div>
                    <p>We reviewed Pikobuy’s current public pages, extracted the rules that affect a real decision, and separated those facts from our own practical advice. Every action below returns to the live directory on findspreadsheet.com.</p>
                  </div>
                  <div>
                    {entry.sources.map((source) => (
                      <article className="source-evidence-card" key={source.url}>
                        <div className="source-card-top">
                          <span>OFFICIAL PAGE REVIEWED</span>
                          <small>{source.url.replace("https://www.", "")}</small>
                        </div>
                        <h3>{source.label}</h3>
                        <p>{source.note}</p>
                        <ul>{source.verifiedFacts.map((fact) => <li key={fact}>{fact}</li>)}</ul>
                        <div className="source-action">
                          <div><b>What to do next</b><span>{source.buyerAction}</span></div>
                          <a href={source.mainUrl} target="_blank" rel="noopener noreferrer">{source.mainLabel} ↗</a>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              </>
            ) : (
              <>
                <h2>{labels.overview}</h2>
                {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                <div className="article-callout">
                  <b>{labels.checklist}</b>
                  <ul>{copy.categoryDetail.checks.map((check) => <li key={check}>{check}</li>)}</ul>
                </div>
              </>
            )}
            <a className="article-next" href="https://findspreadsheet.com/AllProducts/" target="_blank" rel="noopener noreferrer">{copy.explore} →</a>
          </div>
        </div>
      </article>
      <SiteFooter locale={locale} />
    </main>
  );
}

export function ProductDetailPage({ locale = "en", product }: { locale?: Locale; product: Product }) {
  const copy = localeCopy[locale];
  const labels = detailCopy[locale];
  return (
    <main lang={locale}>
      <SiteHeader locale={locale} section="categories" />
      <article className="product-detail-page">
        <div className="product-detail-image">
          <Image src={product.image} alt={product.name} width={800} height={800} />
          <span>{labels.source}</span>
        </div>
        <div className="product-detail-copy">
          <p className="eyebrow"><span /> {product.category.replace("-", " ")} · {labels.read}</p>
          <h1>{product.name}</h1>
          <p className="product-lede">{product.note}</p>
          <dl>
            <div><dt>{labels.labels[0]}</dt><dd>${product.priceUsd} USD <small>¥{product.priceCny} CNY</small></dd></div>
            <div><dt>{labels.labels[1]}</dt><dd>{product.productId}</dd></div>
            <div><dt>{labels.labels[2]}</dt><dd>{product.category.replace("-", " ")}</dd></div>
          </dl>
          <p className="price-note">{labels.usdNote}</p>
          <a className="main-product-link" href={product.mainUrl} target="_blank" rel="noopener noreferrer">{labels.current} ↗</a>
          <a className="text-link product-back" href={`${routeFor(locale)}#products`}>← {copy.categoryDetail.back}</a>
        </div>
      </article>
      <section className="product-checks">
        <p className="eyebrow"><span /> {copy.categoryDetail.checkTitle}</p>
        <ol>{copy.categoryDetail.checks.map((check, index) => <li key={check}><b>{String(index + 1).padStart(2, "0")}</b><span>{check}</span></li>)}</ol>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}

export function findProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
