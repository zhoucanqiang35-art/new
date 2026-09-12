import type { Metadata } from "next";
import { ArticleClient } from "../article-client";
import { productLinkResearchArticle } from "@/lib/seo-article-content";

export const metadata: Metadata = {
  title: "LoloBuy Product Link Research: Check a China Listing Before You Order",
  description: productLinkResearchArticle.description,
  alternates: { canonical: "/seo-articles/lolobuy-product-link-research" },
  openGraph: {
    type: "article",
    title: productLinkResearchArticle.title,
    description: productLinkResearchArticle.description,
    url: "/seo-articles/lolobuy-product-link-research",
  },
};

export default function LoloBuyProductLinkResearchPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: productLinkResearchArticle.title,
    description: productLinkResearchArticle.description,
    datePublished: "2026-09-11",
    dateModified: "2026-09-11",
    inLanguage: "en-GB",
    mainEntityOfPage: "https://lolobuysheet.uk/seo-articles/lolobuy-product-link-research",
    author: { "@type": "Organization", name: "LoloBuy Sheet UK Editorial" },
    publisher: { "@type": "Organization", name: "LoloBuy Sheet UK" },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ArticleClient article={productLinkResearchArticle} />
    </>
  );
}
