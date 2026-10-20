import type { Metadata } from "next";
import { ArticleClient } from "../article-client";
import { packagingServicesArticle } from "@/lib/lolobuy-packaging-services-article";

export const metadata: Metadata = {
  title: "LoloBuy Packaging Services Guide: Parcel Add-ons",
  description: packagingServicesArticle.description,
  alternates: { canonical: "/seo-articles/lolobuy-packaging-services-guide" },
  openGraph: {
    type: "article",
    title: packagingServicesArticle.title,
    description: packagingServicesArticle.description,
    url: "/seo-articles/lolobuy-packaging-services-guide",
  },
};

export default function LoloBuyPackagingServicesGuidePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: packagingServicesArticle.title,
    description: packagingServicesArticle.description,
    datePublished: "2026-10-19",
    dateModified: "2026-10-19",
    inLanguage: "en-GB",
    mainEntityOfPage: "https://lolobuysheet.uk/seo-articles/lolobuy-packaging-services-guide",
    author: { "@type": "Organization", name: "LoloBuy Sheet UK Editorial" },
    publisher: { "@type": "Organization", name: "LoloBuy Sheet UK" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ArticleClient article={packagingServicesArticle} />
    </>
  );
}
