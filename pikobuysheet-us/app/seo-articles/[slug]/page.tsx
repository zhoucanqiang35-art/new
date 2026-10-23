import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { findSeoArticle, seoArticles } from "../../../components/seo-article-data";
import { LanguageSelect } from "../../../components/language-select";

const siteUrl = "https://pikobuysheet.us";

export function generateStaticParams() {
  return seoArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = findSeoArticle(slug);
  if (!article) return {};
  const path = `/seo-articles/${article.slug}`;
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: path },
    openGraph: {
      title: article.title,
      description: article.description,
      url: path,
      type: "article",
    },
  };
}

export default async function SeoArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = findSeoArticle(slug);
  if (!article) notFound();
  const canonical = `${siteUrl}/seo-articles/${article.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: article.title,
        description: article.description,
        mainEntityOfPage: canonical,
        datePublished: "2026-10-23",
        dateModified: "2026-10-23",
        author: { "@type": "Organization", name: "PikoBuy Sheet Editorial" },
        publisher: { "@type": "Organization", name: "PikoBuy Sheet", url: siteUrl },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: "SEO Articles", item: `${siteUrl}/seo-articles` },
          { "@type": "ListItem", position: 3, name: article.title, item: canonical },
        ],
      },
    ],
  };

  return <main className="route-shell">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <Header />
    <section className="route-hero">
      <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/seo-articles">SEO Articles</a><span>/</span><span aria-current="page">Guide</span></nav>
      <p className="eyebrow"><span></span> SEO ARTICLE · {article.kicker}</p>
      <h1>{article.title}</h1>
      <p>Independent research guidance for comparing information before a product or parcel decision.</p>
    </section>
    <article className="route-content longform-article">
      <p className="article-kicker">Independent research guide · {article.readTime}</p>
      <p className="article-lede">{article.introduction}</p>
      {article.sections.map((section, index) => <section key={section.heading}>
        <p className="article-number">{String(index + 1).padStart(2, "0")}</p>
        <h2>{section.heading}</h2>
        {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </section>)}
      <aside className="source-note"><strong>Research basis.</strong> This guide is an independent editorial checklist. Product listings, prices, warehouse processes, route availability and platform policies can change; verify the current source page and platform terms before payment or parcel submission.</aside>
      <p className="article-related-links"><a href="/qc-guide">Read the QC method</a><a href="/product-details">Browse product-detail checks</a><a href="/faq">Read the fact-based FAQ</a></p>
    </article>
    <Footer />
  </main>;
}

function Header(){return <header className="site-header"><a className="brand" href="/"><img className="brand-logo" src="/pikobuy-logo.png" alt="PikoBuy" /></a><nav aria-label="Main navigation"><a href="/">Home</a><a href="/product-categories">Product Categories</a><a href="/product-details">Product Details</a><a href="/seo-articles">SEO Articles</a><a href="/faq">FAQ</a><a href="/qc-guide">QC Method</a><a href="/regions">Regions</a></nav><LanguageSelect /></header>}
function Footer(){return <footer className="route-footer"><a className="brand" href="/"><img className="brand-logo" src="/pikobuy-logo.png" alt="PikoBuy" /></a><p>Independent product-research preview. Not affiliated with PikoBuy.</p><span>© 2026</span></footer>}
