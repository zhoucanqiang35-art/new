import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import type { SeoArticle } from "@/lib/seo-article-content";
import { productLinkResearchArticle } from "@/lib/seo-article-content";
import { articleContent } from "@/lib/site-content";
import { couponArticle } from "@/lib/lolobuy-coupon-article";
import { customPhotoRequestArticle } from "@/lib/lolobuy-custom-photo-request-article";
import { customsDeclarationArticle } from "@/lib/lolobuy-customs-declaration-article";
import { imageSearchArticle } from "@/lib/lolobuy-image-search-article";
import { manualOrderArticle } from "@/lib/lolobuy-manual-order-article";
import { orderStatusArticle } from "@/lib/lolobuy-order-status-article";
import { packagingServicesArticle } from "@/lib/lolobuy-packaging-services-article";
import { parcelTrackingArticle } from "@/lib/lolobuy-parcel-tracking-article";
import { paymentMethodsArticle } from "@/lib/lolobuy-payment-methods-article";
import { qcPhotoArticle } from "@/lib/lolobuy-qc-photo-article";
import { rehearsalParcelArticle } from "@/lib/lolobuy-rehearsal-parcel-article";
import { returnRequestArticle } from "@/lib/lolobuy-return-request-article";
import { shipCareClaimArticle } from "@/lib/lolobuy-shipcare-claim-article";
import { shippingAddressArticle } from "@/lib/lolobuy-shipping-address-article";
import { shippingCalculatorArticle } from "@/lib/lolobuy-shipping-calculator-article";
import { shippingPlanArticle } from "@/lib/lolobuy-shipping-plan-article";
import { shoppingCartArticle } from "@/lib/lolobuy-shopping-cart-article";
import { warehouseItemsArticle } from "@/lib/lolobuy-warehouse-items-article";

export const metadata: Metadata = {
  title: "LoloBuy Research Hub | China Shopping-Agent Guides",
  description: "One evidence-first LoloBuy research hub for product links, QC, warehouse handling, parcels, addresses, payment and claim preparation.",
  alternates: { canonical: "/seo-articles" },
};

const earlierGuide = (() => {
  const article = articleContent("en");
  return {
    slug: "research-a-lolobuy-order",
    title: article.title,
    description: article.lead,
    primaryKeyword: "LoloBuy order research",
    researchDate: "Earlier guide",
    sections: article.sections,
    sourceNote: article.source,
  } satisfies SeoArticle;
})();

const articles: SeoArticle[] = [
  shippingAddressArticle,
  packagingServicesArticle,
  shipCareClaimArticle,
  customPhotoRequestArticle,
  warehouseItemsArticle,
  paymentMethodsArticle,
  couponArticle,
  shoppingCartArticle,
  shippingCalculatorArticle,
  customsDeclarationArticle,
  rehearsalParcelArticle,
  orderStatusArticle,
  manualOrderArticle,
  imageSearchArticle,
  returnRequestArticle,
  parcelTrackingArticle,
  shippingPlanArticle,
  qcPhotoArticle,
  productLinkResearchArticle,
  earlierGuide,
];

export default function Articles() {
  return (
    <main>
      <SiteHeader />
      <article className="inner prose longform">
        <p className="eyebrow">INDEPENDENT RESEARCH · 2026</p>
        <h1>LoloBuy research hub</h1>
        <p className="lead">All LoloBuy buyer-research guides are combined on this page. Each section is based on visible evidence and current first-party information; none promises product quality, availability, delivery, fees, claims, or customs outcomes.</p>
        <nav aria-label="Article contents" className="article">
          <h2>Guide contents</h2>
          <ol>
            {articles.map((article) => <li key={article.slug}><a href={`#${article.slug}`}>{article.title}</a></li>)}
          </ol>
        </nav>
        {articles.map((article) => (
          <section key={article.slug} id={article.slug} className="article">
            <p className="eyebrow">{article.researchDate.toUpperCase()}</p>
            <h2>{article.title}</h2>
            <p className="lead">{article.description}</p>
            <p className="source-note"><strong>Primary keyword:</strong> {article.primaryKeyword}</p>
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h3>{section.heading}</h3>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </section>
            ))}
            <p className="source-note">{article.sourceNote}</p>
          </section>
        ))}
      </article>
    </main>
  );
}
