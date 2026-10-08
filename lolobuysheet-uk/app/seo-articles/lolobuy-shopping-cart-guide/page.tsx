import type { Metadata } from "next";
import { ArticleClient } from "../article-client";
import { shoppingCartArticle } from "@/lib/lolobuy-shopping-cart-article";

export const metadata: Metadata = {
  title: "LoloBuy Shopping Cart Guide: Audit Before Payment",
  description: shoppingCartArticle.description,
  alternates: { canonical: "/seo-articles/lolobuy-shopping-cart-guide" },
  openGraph: {
    type: "article",
    title: shoppingCartArticle.title,
    description: shoppingCartArticle.description,
    url: "/seo-articles/lolobuy-shopping-cart-guide",
  },
};

export default function LoloBuyShoppingCartGuidePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: shoppingCartArticle.title,
    description: shoppingCartArticle.description,
    datePublished: "2026-10-07",
    dateModified: "2026-10-07",
    inLanguage: "en-GB",
    mainEntityOfPage: "https://lolobuysheet.uk/seo-articles/lolobuy-shopping-cart-guide",
    author: { "@type": "Organization", name: "LoloBuy Sheet UK Editorial" },
    publisher: { "@type": "Organization", name: "LoloBuy Sheet UK" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ArticleClient article={shoppingCartArticle} />
    </>
  );
}
