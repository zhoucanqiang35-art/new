import type { Metadata } from "next";
import { ArticleClient } from "../article-client";
import { qcPhotoArticle } from "@/lib/lolobuy-qc-photo-article";

export const metadata: Metadata = {
  title: "LoloBuy QC Photos Guide: Inspect an Item Before Parcel Submission",
  description: qcPhotoArticle.description,
  alternates: { canonical: "/seo-articles/lolobuy-qc-photos-guide" },
  openGraph: {
    type: "article",
    title: qcPhotoArticle.title,
    description: qcPhotoArticle.description,
    url: "/seo-articles/lolobuy-qc-photos-guide",
  },
};

export default function LoloBuyQcPhotosGuidePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: qcPhotoArticle.title,
    description: qcPhotoArticle.description,
    datePublished: "2026-09-13",
    dateModified: "2026-09-13",
    inLanguage: "en-GB",
    mainEntityOfPage: "https://lolobuysheet.uk/seo-articles/lolobuy-qc-photos-guide",
    author: { "@type": "Organization", name: "LoloBuy Sheet UK Editorial" },
    publisher: { "@type": "Organization", name: "LoloBuy Sheet UK" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ArticleClient article={qcPhotoArticle} />
    </>
  );
}
