import type { Metadata } from "next";
import { ArticleClient } from "../article-client";
import { customPhotoRequestArticle } from "@/lib/lolobuy-custom-photo-request-article";

export const metadata: Metadata = {
  title: "LoloBuy Custom Photo Request Guide: Ask Clearly",
  description: customPhotoRequestArticle.description,
  alternates: { canonical: "/seo-articles/lolobuy-custom-photo-request-guide" },
  openGraph: {
    type: "article",
    title: customPhotoRequestArticle.title,
    description: customPhotoRequestArticle.description,
    url: "/seo-articles/lolobuy-custom-photo-request-guide",
  },
};

export default function LoloBuyCustomPhotoRequestGuidePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: customPhotoRequestArticle.title,
    description: customPhotoRequestArticle.description,
    datePublished: "2026-10-15",
    dateModified: "2026-10-15",
    inLanguage: "en-GB",
    mainEntityOfPage: "https://lolobuysheet.uk/seo-articles/lolobuy-custom-photo-request-guide",
    author: { "@type": "Organization", name: "LoloBuy Sheet UK Editorial" },
    publisher: { "@type": "Organization", name: "LoloBuy Sheet UK" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ArticleClient article={customPhotoRequestArticle} />
    </>
  );
}
