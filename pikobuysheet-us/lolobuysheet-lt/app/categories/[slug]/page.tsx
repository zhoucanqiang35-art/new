import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categoryGuideData } from "../../categoryGuideData";
import { PageHero, PageShell, SourceNote } from "../../components";
import { categories } from "../../data";

const siteUrl = "https://lolobuysheet.lt";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);
  const guide = categoryGuideData[slug];
  if (!category || !guide) return {};

  const canonicalPath = `/categories/${category.slug}`;
  return {
    title: guide.seoTitle,
    description: guide.metaDescription,
    keywords: [
      `LoloBuy ${category.name} spreadsheet`,
      `LoloBuy ${category.name} guide`,
      `LoloBuy ${category.name} QC`,
      `${category.name} warehouse photos`,
    ],
    alternates: { canonical: canonicalPath },
    openGraph: {
      type: "website",
      url: `${siteUrl}${canonicalPath}`,
      title: guide.seoTitle,
      description: guide.metaDescription,
    },
    twitter: {
      card: "summary",
      title: guide.seoTitle,
      description: guide.metaDescription,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);
  const guide = categoryGuideData[slug];
  if (!category || !guide) notFound();

  const canonicalUrl = `${siteUrl}/categories/${category.slug}`;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: guide.seoTitle,
      description: guide.metaDescription,
      inLanguage: "en",
      isPartOf: { "@type": "WebSite", name: "LoloBuy Sheet", url: siteUrl },
      breadcrumb: { "@id": `${canonicalUrl}#breadcrumb` },
      mainEntity: { "@id": `${canonicalUrl}#checklist` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Categories", item: `${siteUrl}/categories` },
        { "@type": "ListItem", position: 3, name: category.name, item: canonicalUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": `${canonicalUrl}#checklist`,
      name: `${category.name} checks before purchase`,
      numberOfItems: category.checks.length,
      itemListElement: category.checks.map((check, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: check,
      })),
    },
  ];

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="article-wrap category-detail-page">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/categories">Categories</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{category.name}</span>
        </nav>

        <PageHero
          eyebrow={`${category.code} · Product category`}
          title={guide.h1}
          intro={guide.intro}
        />

        <div className="detail-layout">
          <section className="detail-panel" aria-labelledby="category-checks-heading">
            <p className="eyebrow">Before purchase</p>
            <h2 id="category-checks-heading">Four checks to make first.</h2>
            <ol className="check-list">
              {category.checks.map((check, index) => (
                <li key={check}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {check}
                </li>
              ))}
            </ol>
          </section>
          <aside className="detail-aside">
            <strong>Use this category</strong>
            <p>
              Continue to the main FindSpreadsheet database to compare current listings. Prices, options and
              availability must be checked live.
            </p>
            <a className="primary-action" href={category.externalHref} target="_blank" rel="noopener">
              Browse {category.name} on FindSpreadsheet ↗
            </a>
            <Link className="secondary-action" href="/categories">
              ← All categories
            </Link>
          </aside>
        </div>

        <article className="category-guide" aria-labelledby="category-guide-heading">
          <p className="eyebrow">Category buyer guide</p>
          <h2 id="category-guide-heading">{guide.guideTitle}</h2>
          {guide.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <SourceNote>
            This section is editorial decision guidance, not a platform or seller guarantee. Check the live
            listing, warehouse record, current LoloBuy controls, destination rules and parcel quote before acting.
          </SourceNote>
        </article>

        <section className="category-faq" aria-labelledby="category-faq-heading">
          <div className="category-faq__intro">
            <p className="eyebrow">Common questions</p>
            <h2 id="category-faq-heading">{category.name} buying questions</h2>
            <p>
              These answers define what can be checked and what remains uncertain. They do not certify a seller,
              product, route or delivery result.
            </p>
          </div>
          <div className="faq-list">
            {guide.faqs.map((faq) => (
              <details key={faq.question}>
                <summary>
                  {faq.question}<span aria-hidden="true">+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="category-related" aria-labelledby="category-related-heading">
          <p className="eyebrow">Continue researching</p>
          <h2 id="category-related-heading">Related LoloBuy planning guides</h2>
          <div>
            {guide.relatedLinks.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}<span aria-hidden="true">→</span>
              </Link>
            ))}
            <Link href="/sources">
              Check the evidence ledger<span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
