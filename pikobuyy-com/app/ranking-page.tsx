import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "./site-chrome";
import { products } from "./site-content";
import { rankingEntries, type RankingPageEntry } from "./ranking-content";
import { absoluteUrl, breadcrumbSchema, LAST_FACT_CHECK } from "./seo";

export function RankingPage({ entry }: { entry: RankingPageEntry }) {
  const isPillar = entry.slug === "pikobuy-spreadsheet";
  const linksToPaymentGuide = [
    "pikobuy-spreadsheet",
    "how-to-use-pikobuy-spreadsheet",
    "pikobuy-shipping-guide",
  ].includes(entry.slug);
  const linksToWarehouseGuide = [
    "pikobuy-spreadsheet",
    "how-to-use-pikobuy-spreadsheet",
    "pikobuy-shipping-guide",
  ].includes(entry.slug);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": isPillar ? "WebPage" : "Article",
        "@id": `${absoluteUrl(entry.slug)}#page`,
        url: absoluteUrl(entry.slug),
        name: entry.title,
        headline: entry.title,
        description: entry.description,
        datePublished: LAST_FACT_CHECK,
        dateModified: LAST_FACT_CHECK,
        isPartOf: { "@id": "https://pikobuyy.com/#website" },
      },
      breadcrumbSchema([
        { name: "Pikobuyy", path: "/" },
        { name: entry.title, path: entry.slug },
      ]),
      {
        "@type": "FAQPage",
        mainEntity: entry.faqs.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
      ...(isPillar
        ? [
            {
              "@type": "ItemList",
              name: "Selected Pikobuy spreadsheet finds",
              numberOfItems: products.length,
              itemListElement: products.map((product, index) => ({
                "@type": "ListItem",
                position: index + 1,
                url: absoluteUrl(`products/${product.slug}`),
                name: product.name,
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <main className="ranking-page" lang="en">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SiteHeader />

      <article className="ranking-article">
        <header className="ranking-hero">
          <div>
            <p className="eyebrow">
              <span /> {entry.eyebrow}
            </p>
            <h1>{entry.title}</h1>
            <p>{entry.intro}</p>
            <div className="ranking-actions">
              <a href={entry.mainUrl} target="_blank" rel="noopener noreferrer">
                {entry.mainLabel} ↗
              </a>
              <Link href="/categories/">Browse categories →</Link>
            </div>
          </div>
          <aside className="ranking-facts" aria-label="Verified key facts">
            <b>Verified takeaways</b>
            <ul>
              {entry.keyFacts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </aside>
        </header>

        {isPillar && (
          <section className="ranking-products" aria-labelledby="selected-finds">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span /> Selected spreadsheet entries
                </p>
                <h2 id="selected-finds">Product-level research, not raw links.</h2>
              </div>
              <Link href="/categories/">View every category →</Link>
            </div>
            <div className="product-grid">
              {products.map((product) => (
                <Link
                  className="product-card"
                  href={`/products/${product.slug}/`}
                  key={product.slug}
                >
                  <div className="product-image">
                    <Image src={product.image} alt={product.name} width={640} height={480} />
                  </div>
                  <div className="product-meta">
                    <span>{product.category.replaceAll("-", " ")}</span>
                    <b>${product.priceUsd}</b>
                  </div>
                  <h3>{product.name}</h3>
                  <p>{product.note}</p>
                  <strong>Review this find →</strong>
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="ranking-layout">
          <nav aria-label="On this page">
            <b>On this page</b>
            {entry.sections.map((section, index) => (
              <a href={`#section-${index + 1}`} key={section.heading}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {section.heading}
              </a>
            ))}
          </nav>
          <div className="ranking-body">
            {entry.sections.map((section, index) => (
              <section id={`section-${index + 1}`} key={section.heading}>
                <p className="section-number">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>

        <section className="ranking-related" aria-labelledby="related-guides">
          <p className="eyebrow">
            <span /> Content cluster
          </p>
          <h2 id="related-guides">Continue with the next practical guide.</h2>
          <div>
            {entry.related.map((slug, index) => {
              const related = rankingEntries[slug];
              return (
                <Link href={`/${slug}/`} key={slug}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{related.title}</h3>
                  <p>{related.description}</p>
                  <b>Read guide →</b>
                </Link>
              );
            })}
            {linksToPaymentGuide && (
              <Link href="/articles/pikobuy-payment-guide/">
                <span>{String(entry.related.length + 1).padStart(2, "0")}</span>
                <h3>Pikobuy Payment Guide</h3>
                <p>Separate the product-order payment from the measured international-shipping payment.</p>
                <b>Read article →</b>
              </Link>
            )}
            {linksToWarehouseGuide && (
              <Link href="/articles/pikobuy-warehouse-consolidation-guide/">
                <span>{String(entry.related.length + (linksToPaymentGuide ? 2 : 1)).padStart(2, "0")}</span>
                <h3>Pikobuy Warehouse Guide</h3>
                <p>Use warehouse photos, packaging choices and measured parcel data before consolidation and dispatch.</p>
                <b>Read article →</b>
              </Link>
            )}
          </div>
        </section>

        <section className="ranking-faq" aria-labelledby="ranking-faq-title">
          <div>
            <p className="eyebrow">
              <span /> Clear answers
            </p>
            <h2 id="ranking-faq-title">{entry.title} FAQ</h2>
          </div>
          <div>
            {entry.faqs.map(({ question, answer }, index) => (
              <details key={question} open={index === 0}>
                <summary>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {question}
                  <b>+</b>
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="ranking-cta">
          <p>Independent research · Last fact-check: July 30, 2026</p>
          <h2>Use the guide. Then verify the current listing.</h2>
          <a href={entry.mainUrl} target="_blank" rel="noopener noreferrer">
            {entry.mainLabel} ↗
          </a>
        </section>
      </article>
      <SiteFooter />
    </main>
  );
}
