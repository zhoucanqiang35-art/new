import type { Metadata } from "next";
import { ArticleClient } from "../article-client";
import { parcelTrackingArticle } from "@/lib/lolobuy-parcel-tracking-article";

export const metadata: Metadata = {
  title: "LoloBuy Parcel Tracking Guide: Read Shipping Updates",
  description: parcelTrackingArticle.description,
  alternates: { canonical: "/seo-articles/lolobuy-parcel-tracking-guide" },
  openGraph: {
    type: "article",
    title: parcelTrackingArticle.title,
    description: parcelTrackingArticle.description,
    url: "/seo-articles/lolobuy-parcel-tracking-guide",
  },
};

export default function LoloBuyParcelTrackingGuidePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: parcelTrackingArticle.title,
    description: parcelTrackingArticle.description,
    datePublished: "2026-09-17",
    dateModified: "2026-09-17",
    inLanguage: "en-GB",
    mainEntityOfPage: "https://lolobuysheet.uk/seo-articles/lolobuy-parcel-tracking-guide",
    author: { "@type": "Organization", name: "LoloBuy Sheet UK Editorial" },
    publisher: { "@type": "Organization", name: "LoloBuy Sheet UK" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ArticleClient article={parcelTrackingArticle} />
    </>
  );
}
