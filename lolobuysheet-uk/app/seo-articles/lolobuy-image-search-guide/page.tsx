import type { Metadata } from "next";
import { ArticleClient } from "../article-client";
import { imageSearchArticle } from "@/lib/lolobuy-image-search-article";

export const metadata: Metadata = {
  title: "LoloBuy Image Search Guide: Build a Verifiable Shortlist",
  description: imageSearchArticle.description,
  alternates: { canonical: "/seo-articles/lolobuy-image-search-guide" },
  openGraph: {
    type: "article",
    title: imageSearchArticle.title,
    description: imageSearchArticle.description,
    url: "/seo-articles/lolobuy-image-search-guide",
  },
};

export default function LoloBuyImageSearchGuidePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: imageSearchArticle.title,
    description: imageSearchArticle.description,
    datePublished: "2026-09-23",
    dateModified: "2026-09-23",
    inLanguage: "en-GB",
    mainEntityOfPage: "https://lolobuysheet.uk/seo-articles/lolobuy-image-search-guide",
    author: { "@type": "Organization", name: "LoloBuy Sheet UK Editorial" },
    publisher: { "@type": "Organization", name: "LoloBuy Sheet UK" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ArticleClient article={imageSearchArticle} />
    </>
  );
}
