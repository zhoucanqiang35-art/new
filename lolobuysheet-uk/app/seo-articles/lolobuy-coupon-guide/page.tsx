import type { Metadata } from "next";
import { ArticleClient } from "../article-client";
import { couponArticle } from "@/lib/lolobuy-coupon-article";

export const metadata: Metadata = {
  title: "LoloBuy Coupon Guide: Verify Before Checkout",
  description: couponArticle.description,
  alternates: { canonical: "/seo-articles/lolobuy-coupon-guide" },
  openGraph: {
    type: "article",
    title: couponArticle.title,
    description: couponArticle.description,
    url: "/seo-articles/lolobuy-coupon-guide",
  },
};

export default function LoloBuyCouponGuidePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: couponArticle.title,
    description: couponArticle.description,
    datePublished: "2026-10-09",
    dateModified: "2026-10-09",
    inLanguage: "en-GB",
    mainEntityOfPage: "https://lolobuysheet.uk/seo-articles/lolobuy-coupon-guide",
    author: { "@type": "Organization", name: "LoloBuy Sheet UK Editorial" },
    publisher: { "@type": "Organization", name: "LoloBuy Sheet UK" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ArticleClient article={couponArticle} />
    </>
  );
}
