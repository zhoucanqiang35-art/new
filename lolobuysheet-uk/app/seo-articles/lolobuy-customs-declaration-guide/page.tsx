import type { Metadata } from "next";
import { ArticleClient } from "../article-client";
import { customsDeclarationArticle } from "@/lib/lolobuy-customs-declaration-article";

export const metadata: Metadata = {
  title: "LoloBuy Customs Declaration Guide: Parcel Records",
  description: customsDeclarationArticle.description,
  alternates: { canonical: "/seo-articles/lolobuy-customs-declaration-guide" },
  openGraph: {
    type: "article",
    title: customsDeclarationArticle.title,
    description: customsDeclarationArticle.description,
    url: "/seo-articles/lolobuy-customs-declaration-guide",
  },
};

export default function LoloBuyCustomsDeclarationGuidePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: customsDeclarationArticle.title,
    description: customsDeclarationArticle.description,
    datePublished: "2026-10-03",
    dateModified: "2026-10-03",
    inLanguage: "en-GB",
    mainEntityOfPage: "https://lolobuysheet.uk/seo-articles/lolobuy-customs-declaration-guide",
    author: { "@type": "Organization", name: "LoloBuy Sheet UK Editorial" },
    publisher: { "@type": "Organization", name: "LoloBuy Sheet UK" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ArticleClient article={customsDeclarationArticle} />
    </>
  );
}
