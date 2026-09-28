import type { Metadata } from "next";
import { ArticleClient } from "../article-client";
import { orderStatusArticle } from "@/lib/lolobuy-order-status-article";

export const metadata: Metadata = {
  title: "LoloBuy Order Status Guide: Purchase to Warehouse",
  description: orderStatusArticle.description,
  alternates: { canonical: "/seo-articles/lolobuy-order-status-guide" },
  openGraph: {
    type: "article",
    title: orderStatusArticle.title,
    description: orderStatusArticle.description,
    url: "/seo-articles/lolobuy-order-status-guide",
  },
};

export default function LoloBuyOrderStatusGuidePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: orderStatusArticle.title,
    description: orderStatusArticle.description,
    datePublished: "2026-09-27",
    dateModified: "2026-09-27",
    inLanguage: "en-GB",
    mainEntityOfPage: "https://lolobuysheet.uk/seo-articles/lolobuy-order-status-guide",
    author: { "@type": "Organization", name: "LoloBuy Sheet UK Editorial" },
    publisher: { "@type": "Organization", name: "LoloBuy Sheet UK" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ArticleClient article={orderStatusArticle} />
    </>
  );
}
