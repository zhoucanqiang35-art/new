import type { Metadata } from "next";
import { ArticleClient } from "../article-client";
import { returnRequestArticle } from "@/lib/lolobuy-return-request-article";

export const metadata: Metadata = {
  title: "LoloBuy Return Request Guide: Build a Clear Warehouse Case",
  description: returnRequestArticle.description,
  alternates: { canonical: "/seo-articles/lolobuy-return-request-guide" },
  openGraph: {
    type: "article",
    title: returnRequestArticle.title,
    description: returnRequestArticle.description,
    url: "/seo-articles/lolobuy-return-request-guide",
  },
};

export default function LoloBuyReturnRequestGuidePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: returnRequestArticle.title,
    description: returnRequestArticle.description,
    datePublished: "2026-09-19",
    dateModified: "2026-09-19",
    inLanguage: "en-GB",
    mainEntityOfPage: "https://lolobuysheet.uk/seo-articles/lolobuy-return-request-guide",
    author: { "@type": "Organization", name: "LoloBuy Sheet UK Editorial" },
    publisher: { "@type": "Organization", name: "LoloBuy Sheet UK" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ArticleClient article={returnRequestArticle} />
    </>
  );
}
