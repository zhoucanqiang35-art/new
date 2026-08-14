import type { Metadata } from "next";
import type { ComponentProps } from "react";
import { notFound } from "next/navigation";
import { getSeoArticle, seoArticles, type SeoArticle } from "../seo-articles";
import { getGuideArticle, guideArticles } from "../guide-articles";
import { categoryArticles, getCategoryArticle } from "../category-articles";
import { getMethodArticle, methodArticles } from "../method-articles";
import { LocalizedHome } from "../page";
import { getDictionary, localizeValue } from "../i18n";
import {
  isLocale,
  locales,
  localizedPath,
  type Locale,
  type TranslationDictionary,
} from "../i18n-config";
import { LanguageSwitcher } from "../language-switcher";
import { absoluteSiteUrl } from "../site-config";

function Link(props: ComponentProps<"a">) {
  return <a {...props} />;
}

export const dynamic = "force-dynamic";
type Page = {
  label: string;
  title: string;
  intro: string;
  sections: {
    heading: string;
    body: string;
  }[];
};
type Source = {
  label: string;
  url: string;
  note: string;
};
const officialSources: Record<string, Source> = {
  guide: {
    label: "PikoBuy Beginner's Guide",
    url: "https://www.pikobuy.com/guide",
    note: "Buying, warehouse, parcel and tracking workflow",
  },
  returns: {
    label: "PikoBuy Returns & Exchanges",
    url: "https://www.pikobuy.com/protocol/returns",
    note: "Eligibility, 120-hour warehouse window and fees",
  },
  user: {
    label: "PikoBuy User Agreement",
    url: "https://www.pikobuy.com/protocol/user",
    note: "Payments, service fee, inspection and logistics risk",
  },
  terms: {
    label: "PikoBuy Terms of Service",
    url: "https://www.pikobuy.com/protocol/terms",
    note: "Service scope, destination charges and prohibited items",
  },
  shipping: {
    label: "PikoBuy Shipping Terms",
    url: "https://www.pikobuy.com/protocol/shipping",
    note: "Forwarding process and third-party logistics",
  },
  estimate: {
    label: "PikoBuy Shipping Estimate",
    url: "https://www.pikobuy.com/shipping-cost",
    note: "Destination, product type, weight and dimension inputs",
  },
  contact: {
    label: "PikoBuy Contact",
    url: "https://www.pikobuy.com/contact",
    note: "Official support routes",
  },
};
const pageSources: Record<string, Source[]> = {
  "guides/beginner": [
    officialSources.guide,
    officialSources.returns,
    officialSources.shipping,
  ],
  "guides/qc": [
    officialSources.guide,
    officialSources.returns,
    officialSources.user,
  ],
  "guides/shipping": [
    officialSources.estimate,
    officialSources.shipping,
    officialSources.user,
  ],
  "guides/returns": [officialSources.returns, officialSources.user],
  "guides/fees": [officialSources.user, officialSources.guide],
  "guides/tracking": [officialSources.guide, officialSources.contact],
  "official-sources": [
    officialSources.guide,
    officialSources.returns,
    officialSources.user,
    officialSources.terms,
    officialSources.shipping,
    officialSources.estimate,
    officialSources.contact,
  ],
};
const pages: Record<string, Page> = {
  "guides/beginner": {
    label: "BEGINNER GUIDE",
    title: "How PikoBuy works: from source link to delivery",
    intro:
      "A practical, independent overview of the buying path. Always use the current PikoBuy checkout and official policies as the final reference.",
    sections: [
      {
        heading: "Start with a source link",
        body: "PikoBuy can help users purchase from Chinese marketplaces such as Taobao, Tmall, 1688, Weidian and Yupoo. Before pasting a link, review the seller page, options, size information, domestic delivery terms and whether the item may face shipping restrictions.",
      },
      {
        heading: "Place the product order",
        body: "Choose the available colour and size carefully, then pay the product-side order. This is separate from the later international parcel payment. Seller prices and availability can change, so the live order page is more reliable than a saved screenshot or third-party list.",
      },
      {
        heading: "Use warehouse QC as a decision point",
        body: "After the item reaches the warehouse, review the available QC photos for visible defects, the selected variant and useful measurements. A photo check cannot authenticate an item or guarantee hidden quality, but it can catch obvious mismatches before international shipping.",
      },
      {
        heading: "Build and ship the parcel",
        body: "When the items are ready, select packaging and an available international route, then pay the parcel charge. Compare actual and volumetric weight, route restrictions, delivery expectations and destination-country customs risk. International delivery is performed by third-party carriers.",
      },
    ],
  },
  "guides/qc": {
    label: "QC FIELD GUIDE",
    title: "How to read PikoBuy warehouse QC photos",
    intro:
      "QC is not a score. It is a structured comparison between what you ordered, what arrived and what you are willing to ship.",
    sections: [
      {
        heading: "Confirm the order before judging details",
        body: "Match the colour, size label, quantity and visible model against the seller page and your order. Keep the original source page open while reviewing the warehouse photos so that you compare evidence rather than memory.",
      },
      {
        heading: "Use category-specific checkpoints",
        body: "Shoes benefit from outsole, insole and label views. Clothing needs flat measurements, fabric and print alignment. Bags need dimensions, structure, seams and hardware. Electronics require compatibility checks and may face special shipping restrictions.",
      },
      {
        heading: "Ask what the photo cannot prove",
        body: "Lighting changes colour, angles distort shape and an exterior image cannot show every material or construction issue. QC photos do not prove authenticity, long-term durability or exact fit. Request additional evidence only when it can change your decision.",
      },
      {
        heading: "Choose a next action",
        body: "If the visible item matches, keep it for parcel submission. If something is unclear, request an additional view when offered. If it is materially wrong, check the current return eligibility and act promptly because warehouse return windows may be limited.",
      },
    ],
  },
  "guides/shipping": {
    label: "SHIPPING GUIDE",
    title: "Shipping cost, weight and packaging without guesswork",
    intro:
      "A product’s purchase price is only one part of the total delivery cost. Parcel shape, route rules and destination customs can materially change the result.",
    sections: [
      {
        heading: "Actual weight versus volumetric weight",
        body: "Carriers may charge by the parcel’s scale weight or by a formula based on its dimensions. Bulky, light products can therefore cost more than their weight suggests. PikoBuy’s estimator asks for destination, product type, weight and parcel dimensions.",
      },
      {
        heading: "Treat estimates as planning inputs",
        body: "An estimator cannot guarantee the final charge. Packaging, route availability, fuel adjustments, exchange rates and measured warehouse dimensions can change. Use current parcel submission options as the final comparison.",
      },
      {
        heading: "Packaging choices have trade-offs",
        body: "Removing unnecessary retail packaging can reduce volume, while reinforcement may add weight. The right choice depends on fragility and value, not only the cheapest estimate. Check which requests and restrictions are available for the item.",
      },
      {
        heading: "Customs remains destination-specific",
        body: "International parcels can be delayed, inspected, taxed, returned or held. A third-party guide cannot promise clearance. Review the destination country’s current rules and avoid restricted or infringing goods.",
      },
    ],
  },
  "guides/returns": {
    label: "RETURNS GUIDE",
    title: "Returns and the warehouse timing window",
    intro:
      "The useful moment to understand a return policy is before a questionable item sits in the warehouse.",
    sections: [
      {
        heading: "Check the current eligibility immediately",
        body: "PikoBuy’s published returns protocol describes a five-day, or 120-hour, window for eligible requests after warehouse receipt. Some items and circumstances can be excluded. Confirm the countdown and live eligibility in the order interface.",
      },
      {
        heading: "Understand possible costs",
        body: "A no-reason return may include the cost of sending the item back, the seller’s original domestic delivery and a service charge described in the current policy. The order page and current protocol are the final references.",
      },
      {
        heading: "Preserve useful evidence",
        body: "When an item appears incorrect, compare the source listing, selected option, warehouse entry and QC photos. Describe the visible mismatch precisely. Clear evidence helps distinguish a seller issue from a preference change.",
      },
      {
        heading: "Do not imply guaranteed outcomes",
        body: "Eligibility and seller acceptance can vary. An independent spreadsheet cannot approve a refund or contact the seller on a user’s behalf. Requests must be handled through the official PikoBuy order and support channels.",
      },
    ],
  },
  "guides/fees": {
    label: "COST GUIDE",
    title: "Why PikoBuy purchases can involve two payments",
    intro:
      "Separating the product order from the international parcel makes the buying path easier to budget.",
    sections: [
      {
        heading: "First payment: the product-side order",
        body: "The initial payment covers the selected merchandise and applicable domestic-side amounts shown during ordering. Prices, exchange rates and seller availability may change, so a third-party listing should never be treated as a guaranteed quote.",
      },
      {
        heading: "Second payment: international parcel",
        body: "After warehouse arrival and parcel preparation, the user chooses an available international route and pays the parcel-side total. It depends on destination, billable weight, packaging, route rules and the current platform calculation.",
      },
      {
        heading: "Read the service terms in context",
        body: "The PikoBuy user agreement reviewed on 11 August 2026 describes a service fee in the international forwarding stage. Policies can change, so this site links to the dated official source rather than freezing the figure into every page.",
      },
      {
        heading: "Budget with a range, not a promise",
        body: "Plan for product cost, domestic delivery where applicable, international shipping, possible service charges and destination taxes. Build a high and low scenario before buying, especially for heavy or bulky categories.",
      },
    ],
  },
  "guides/tracking": {
    label: "TRACKING GUIDE",
    title: "How to read tracking without guessing",
    intro:
      "Tracking is a sequence of carrier events, not a continuous live location.",
    sections: [
      {
        heading: "Allow time for the first scan",
        body: "PikoBuy’s beginner information says tracking information commonly appears after shipment rather than instantly. A parcel can be handed into a logistics chain before the first public event is visible.",
      },
      {
        heading: "Read events as stages",
        body: "Warehouse dispatch, carrier acceptance, export handling, international transit, customs processing and local delivery are distinct stages. Repeated or quiet periods do not automatically prove loss.",
      },
      {
        heading: "Use the carrier’s record",
        body: "When a carrier and tracking number are available, compare the official carrier page with the platform view. Third-party aggregators can be convenient but may translate or delay event data.",
      },
      {
        heading: "Escalate through official support",
        body: "If the parcel is outside the current route expectation or an event requests action, contact PikoBuy through its official ticket or support channel. This independent site cannot see or modify an order.",
      },
    ],
  },
  "official-sources": {
    label: "SOURCE REGISTER",
    title: "Official sources and verification method",
    intro:
      "A transparent list of where policy claims come from and when they were checked.",
    sections: [
      {
        heading: "PikoBuy beginner guide",
        body: "Used for the purchasing flow, warehouse QC sequence, parcel submission and tracking overview. Source: pikobuy.com/guide. Last reviewed 12 August 2026.",
      },
      {
        heading: "Returns protocol",
        body: "Used for the published warehouse return window and possible return-side costs. Source: pikobuy.com/protocol/returns. Last reviewed 12 August 2026.",
      },
      {
        heading: "User agreement and service terms",
        body: "Used for account, payment and service-fee context. Source: pikobuy.com/protocol/user and /protocol/terms. Last reviewed 12 August 2026.",
      },
      {
        heading: "Editorial rule",
        body: "When official pages appear inconsistent, we quote neither as a universal conclusion. We identify the page and review date, then direct the buyer to the current checkout or official support for an order-specific answer.",
      },
    ],
  },
  about: {
    label: "ABOUT",
    title: "Independent research built around better buying questions",
    intro:
      "PikoBuy Spreadsheet Pro is designed to add context before sending a visitor to a product or source link.",
    sections: [
      {
        heading: "What this site does",
        body: "We organize product-discovery paths, category checklists, source-link context and practical buying guides for readers researching PikoBuy.",
      },
      {
        heading: "What this site does not do",
        body: "We are not PikoBuy, do not process orders or payments, and cannot access warehouse, parcel, refund or support records.",
      },
      {
        heading: "Connection to FindSpreadsheet",
        body: "The live product database is provided through FindSpreadsheet. Editorial guides remain useful on this site even when a reader does not follow a product link.",
      },
      {
        heading: "Trademark clarity",
        body: "Brand names are used descriptively to identify the subject of independent information. No affiliation, endorsement or official status is claimed.",
      },
    ],
  },
  "editorial-policy": {
    label: "EDITORIAL POLICY",
    title: "How we keep research useful and verifiable",
    intro: "Clear sourcing matters more than confident-sounding claims.",
    sections: [
      {
        heading: "Official facts",
        body: "Platform processes and policies are linked to official sources and given a review date.",
      },
      {
        heading: "Product records",
        body: "Seller links can change. A checked record is a research status, not a guarantee of availability, quality or authenticity.",
      },
      {
        heading: "Customer experience",
        body: "We do not invent testimonials, ratings, sales figures or outcomes. Any future experience analysis must identify its public evidence and limitations.",
      },
      {
        heading: "Corrections",
        body: "Material changes are recorded and affected pages are updated. Visitors should still confirm current order-specific details through official channels.",
      },
    ],
  },
  faq: {
    label: "DETAILED FAQ",
    title: "PikoBuy spreadsheet questions answered with evidence and limits",
    intro:
      "Clear answers to the decisions that sit between a shared product link, the warehouse record and the international parcel.",
    sections: [
      {
        heading: "Is this PikoBuy's official website?",
        body: "No. PikoBuy Spreadsheet Pro is an independent research site connected to FindSpreadsheet for product discovery. It cannot access PikoBuy accounts, place orders, approve refunds, change parcels or speak for the platform. Brand names identify the subject of the research, and every page should be read with the visible non-affiliation notice.",
      },
      {
        heading: "What does a checked spreadsheet link actually prove?",
        body: "It proves only the checks recorded with that row, such as whether a source URL opened on a stated date and what product or option it appeared to show. It does not certify stock, current price, seller reliability, quality, fit, authenticity, safety or customs clearance. Open the live seller page and current PikoBuy checkout before making any payment.",
      },
      {
        heading: "Why can the product price differ from the delivered total?",
        body: "PikoBuy's beginner guide describes a first product-side payment and a later international parcel payment. The completed parcel does not exist when a product link is saved. Destination, weight, dimensions, packaging, route, the current platform calculation and possible destination charges all affect total delivery cost. A trustworthy spreadsheet keeps these amounts separate instead of advertising one guaranteed total.",
      },
      {
        heading: "What can warehouse QC photos confirm?",
        body: "They can help confirm visible option, colour, quantity, labels, measurements, included parts and obvious exterior damage. Lighting, angle and compression limit interpretation, and images cannot prove authenticity, internal construction, electrical safety, material chemistry or long-term durability. Category-specific guides explain which visible evidence matters and which claims remain unresolved.",
      },
      {
        heading: "How quickly must I decide about a return?",
        body: "PikoBuy's returns page says eligible applications may be made within five days after an order changes to In Warehouse, counted from the next hour and expressed as 120 hours. Eligibility is not universal, seller consent matters and resale condition can be affected by removed labels, seals, accessories or packaging. The live order page and current official policy determine a specific case.",
      },
      {
        heading: "Why do category pages use different inspection methods?",
        body: "The evidence needed for a T-shirt is not the evidence needed for electronics. Clothing depends on comparable measurements, bags on usable dimensions and load points, watches on exterior observations with explicit performance limits, and electronics on model, voltage, compatibility and sensitive components. Repeating one generic four-step checklist would create length without useful depth.",
      },
      {
        heading:
          "Does PikoBuy guarantee customs clearance or a fixed delivery date?",
        body: "No independent guide should make that promise. PikoBuy's user and shipping agreements describe third-party logistics and risks that include customs action, damage, loss and delays. The beginner guide says tracking information should become available within three days after shipment, but that is not continuous movement or a fixed arrival guarantee. Use the official carrier and support channels for a parcel-specific issue.",
      },
      {
        heading: "Can this site verify branded goods or replicas?",
        body: "No. PikoBuy's Terms of Service prohibit products without lawful intellectual-property rights or authorization and state a zero-tolerance policy toward counterfeit goods. Warehouse photographs cannot authenticate a product. This site does not promote unauthorized replicas or treat logos, labels and packaging as proof of authenticity.",
      },
      {
        heading: "How are changing policy claims handled?",
        body: "Every material policy statement links to the official PikoBuy page and records a review date. If official pages conflict or the live checkout differs, the site identifies the uncertainty rather than inventing one universal rule. Current order details and authenticated support take priority over a dated third-party summary.",
      },
      {
        heading: "Why send visitors to FindSpreadsheet at all?",
        body: "FindSpreadsheet provides the live discovery database, while this site supplies independent methods, category guides and source-backed explanations. The editorial pages are designed to remain useful even when the reader never follows an outbound product link. That independent value avoids turning the domain into a thin doorway page whose only purpose is redirecting traffic.",
      },
    ],
  },
  privacy: {
    label: "PRIVACY",
    title: "A lightweight informational site",
    intro:
      "This preview is designed without accounts, order forms or credential collection.",
    sections: [
      {
        heading: "No PikoBuy credentials",
        body: "Never send PikoBuy passwords, payment details or support records through this independent site.",
      },
      {
        heading: "Outbound links",
        body: "Links to PikoBuy and FindSpreadsheet lead to separate websites with their own policies.",
      },
      {
        heading: "Analytics plan",
        body: "If privacy-conscious analytics are added at launch, the live policy will identify the provider, purpose and opt-out choices.",
      },
      {
        heading: "Contact",
        body: "A verified editorial contact route will be published before formal domain launch.",
      },
    ],
  },
};
function resolveRoute(rawSlug: string[]) {
  const first = rawSlug[0];
  const locale: Locale = isLocale(first) ? first : "en";
  return { locale, slug: isLocale(first) ? rawSlug.slice(1) : rawSlug };
}
function tr(dictionary: TranslationDictionary, text: string) {
  return dictionary[text] ?? text;
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{
    slug: string[];
  }>;
}): Promise<Metadata> {
  const raw = (await params).slug;
  const { locale, slug } = resolveRoute(raw);
  const key = slug.join("/");
  const dictionary = getDictionary(locale);
  const page = pages[key];
  const routePath = key ? `/${key}` : "/";
  const canonical = absoluteSiteUrl(localizedPath(locale, routePath));
  const alternates = {
    canonical,
    languages: Object.fromEntries(
      locales
        .map((item) => [
          item.code,
          absoluteSiteUrl(localizedPath(item.code, routePath)),
        ])
        .concat([
          ["x-default", absoluteSiteUrl(localizedPath("en", routePath))],
        ]),
    ),
  };
  const base: Metadata = {
    robots: { index: true, follow: true },
    alternates,
  };
  const complete = (
    title: string,
    description: string,
    article = false,
  ): Metadata => ({
    ...base,
    title,
    description,
    openGraph: {
      type: article ? "article" : "website",
      siteName: "PikoBuy Spreadsheet Pro",
      url: canonical,
      title,
      description,
      images: [
        {
          url: absoluteSiteUrl("/pikobuy-logo.png"),
          alt: "PikoBuy Spreadsheet Pro",
        },
      ],
    },
    twitter: { card: "summary", title, description },
  });
  if (!key)
    return complete(
      "PikoBuy Spreadsheet Pro",
      tr(
        dictionary,
        "Independent PikoBuy product-link, QC, sizing and shipping research.",
      ),
    );
  if (key === "articles")
    return complete(
      `${tr(dictionary, "PikoBuy SEO Articles")} | PikoBuy Spreadsheet Pro`,
      tr(
        dictionary,
        "Fact-checked PikoBuy spreadsheet, QC and shipping research based on dated official sources.",
      ),
    );
  if (key === "categories")
    return complete(
      `${tr(dictionary, "PikoBuy Category Research")} | PikoBuy Spreadsheet Pro`,
      tr(
        dictionary,
        "Ten detailed, category-specific PikoBuy research guides covering evidence, sizing, QC, returns and shipping.",
      ),
    );
  if (key === "guides")
    return complete(
      `${tr(dictionary, "Complete PikoBuy Guides")} | PikoBuy Spreadsheet Pro`,
      tr(
        dictionary,
        "Source-backed long-form guides to PikoBuy ordering, QC, shipping, returns, fees and tracking.",
      ),
    );
  if (key === "method")
    return complete(
      `${tr(dictionary, "PikoBuy Research Method")} | PikoBuy Spreadsheet Pro`,
      tr(
        dictionary,
        "Four source-backed methods for independent, evidence-led, buyer-first and multilingual PikoBuy research.",
      ),
    );
  if (slug[0] === "articles" && slug[1]) {
    const article = getSeoArticle(slug[1]);
    if (article)
      return complete(
        `${tr(dictionary, article.title)} | PikoBuy Spreadsheet Pro`,
        tr(dictionary, article.dek),
        true,
      );
  }
  if (slug[0] === "guides" && slug[1]) {
    const guide = getGuideArticle(slug[1]);
    if (guide)
      return complete(
        `${tr(dictionary, guide.title)} | PikoBuy Spreadsheet Pro`,
        tr(dictionary, guide.dek),
        true,
      );
  }
  if (slug[0] === "method" && slug[1]) {
    const article = getMethodArticle(slug[1]);
    if (article)
      return complete(
        `${tr(dictionary, article.title)} | PikoBuy Spreadsheet Pro`,
        tr(dictionary, article.dek),
        true,
      );
  }
  if (page)
    return complete(
      `${tr(dictionary, page.title)} | PikoBuy Spreadsheet Pro`,
      tr(dictionary, page.intro),
    );
  if (slug[0] === "categories" && slug[1]) {
    const category = getCategoryArticle(slug[1]);
    if (category)
      return complete(
        `${tr(dictionary, category.title)} | PikoBuy Spreadsheet Pro`,
        tr(dictionary, category.dek),
        true,
      );
  }
  return base;
}
export default async function ContentPage({
  params,
}: {
  params: Promise<{
    slug: string[];
  }>;
}) {
  const raw = (await params).slug;
  const { locale, slug } = resolveRoute(raw);
  const key = slug.join("/");
  const dictionary = getDictionary(locale);
  if (!key) return <LocalizedHome locale={locale} />;
  if (key === "articles")
    return <ArticleIndex locale={locale} dictionary={dictionary} />;
  if (key === "categories")
    return <CategoryIndex locale={locale} dictionary={dictionary} />;
  if (key === "guides")
    return <GuideIndex locale={locale} dictionary={dictionary} />;
  if (key === "method")
    return <MethodIndex locale={locale} dictionary={dictionary} />;
  if (slug[0] === "articles" && slug[1]) {
    const article = getSeoArticle(slug[1]);
    if (article)
      return (
        <SeoArticlePage
          article={localizeValue(article, dictionary)}
          locale={locale}
          dictionary={dictionary}
        />
      );
  }
  if (slug[0] === "guides" && slug[1]) {
    const guide = getGuideArticle(slug[1]);
    if (guide)
      return (
        <GuideArticlePage
          article={localizeValue(guide, dictionary)}
          locale={locale}
          dictionary={dictionary}
        />
      );
  }
  if (slug[0] === "method" && slug[1]) {
    const article = getMethodArticle(slug[1]);
    if (article)
      return (
        <MethodArticlePage
          article={localizeValue(article, dictionary)}
          locale={locale}
          dictionary={dictionary}
        />
      );
  }
  if (slug[0] === "categories" && slug[1]) {
    const category = getCategoryArticle(slug[1]);
    if (category)
      return (
        <CategoryArticlePage
          article={localizeValue(category, dictionary)}
          locale={locale}
          dictionary={dictionary}
        />
      );
  }
  const page = localizeValue(pages[key], dictionary);
  if (!page) notFound();
  const sources = localizeValue(pageSources[key] ?? [], dictionary);
  return (
    <main className="article-page" lang={locale}>
      <PageStructuredData
        locale={locale}
        routePath={`/${key}`}
        page={page}
        faq={key === "faq"}
      />
      <ArticleHeader locale={locale} dictionary={dictionary} />
      <article>
        <p className="article-label">{page.label}</p>
        <h1>{page.title}</h1>
        <p className="article-intro">{page.intro}</p>
        <div className="article-sections">
          {page.sections.map((section, index) => (
            <section key={section.heading}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </div>
            </section>
          ))}
        </div>
        {sources.length > 0 && (
          <SourcePanel sources={sources} dictionary={dictionary} />
        )}
        <div className="article-cta">
          <p>
            {tr(
              dictionary,
              "Continue with the live product research database.",
            )}
          </p>
          <a href="https://findspreadsheet.com/">
            {tr(dictionary, "Browse the Product Database")} ↗
          </a>
        </div>
      </article>
      <ArticleFooter dictionary={dictionary} />
    </main>
  );
}
function JsonLd({ value }: { value: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(value) }}
    />
  );
}
function ArticleStructuredData({
  article,
  locale,
  routePath,
  section,
}: {
  article: SeoArticle;
  locale: Locale;
  routePath: string;
  section: string;
}) {
  const url = absoluteSiteUrl(localizedPath(locale, routePath));
  const date = article.published.includes("13") ? "2026-08-13" : "2026-08-12";
  return (
    <JsonLd
      value={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Article",
            "@id": `${url}#article`,
            headline: article.title,
            description: article.dek,
            datePublished: date,
            dateModified: date,
            inLanguage: locale,
            mainEntityOfPage: url,
            author: {
              "@type": "Organization",
              name: "PikoBuy Spreadsheet Pro",
            },
            publisher: {
              "@type": "Organization",
              name: "PikoBuy Spreadsheet Pro",
            },
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: absoluteSiteUrl(localizedPath(locale, "/")),
              },
              {
                "@type": "ListItem",
                position: 2,
                name: section,
                item: absoluteSiteUrl(
                  localizedPath(
                    locale,
                    `/${routePath.split("/").filter(Boolean)[0]}`,
                  ),
                ),
              },
              {
                "@type": "ListItem",
                position: 3,
                name: article.title,
                item: url,
              },
            ],
          },
        ],
      }}
    />
  );
}
function PageStructuredData({
  page,
  locale,
  routePath,
  faq,
}: {
  page: Page;
  locale: Locale;
  routePath: string;
  faq: boolean;
}) {
  const url = absoluteSiteUrl(localizedPath(locale, routePath));
  const value: Record<string, unknown> = faq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        url,
        inLanguage: locale,
        mainEntity: page.sections.map((section) => ({
          "@type": "Question",
          name: section.heading,
          acceptedAnswer: { "@type": "Answer", text: section.body },
        })),
      }
    : {
        "@context": "https://schema.org",
        "@type": "WebPage",
        url,
        name: page.title,
        description: page.intro,
        inLanguage: locale,
      };
  return <JsonLd value={value} />;
}
function ArticleHeader({
  locale,
  dictionary,
  sectionHref = "/articles",
  sectionLabel = "SEO Articles",
}: {
  locale: Locale;
  dictionary: TranslationDictionary;
  sectionHref?: string;
  sectionLabel?: string;
}) {
  return (
    <header className="article-header">
      <Link
        className="brand"
        href={localizedPath(locale, "/")}
        aria-label="PikoBuy Spreadsheet Pro home"
      >
        <img
          className="brand-logo"
          src="/pikobuy-logo.png"
          width="204"
          height="48"
          alt="PikoBuy"
        />
      </Link>
      <nav aria-label={tr(dictionary, "Article navigation")}>
        <Link href={localizedPath(locale, sectionHref)}>
          {tr(dictionary, sectionLabel)}
        </Link>
        <Link href={localizedPath(locale, "/")}>
          ← {tr(dictionary, "Home")}
        </Link>
        <LanguageSwitcher locale={locale} compact />
      </nav>
    </header>
  );
}
function ArticleFooter({
  dictionary,
  checkedDay = 12,
}: {
  dictionary: TranslationDictionary;
  checkedDay?: number;
}) {
  return (
    <footer className="article-footer">
      {tr(
        dictionary,
        "Independent information. Not affiliated with or endorsed by PikoBuy. Policy sources were reviewed on 12 August 2026; verify current details through official pages.",
      ).replace(/\b12\b/, String(checkedDay))}
    </footer>
  );
}
function SourcePanel({
  sources,
  dictionary,
  checkedDay = 12,
}: {
  sources: Source[];
  dictionary: TranslationDictionary;
  checkedDay?: number;
}) {
  return (
    <aside className="verified-sources">
      <div>
        <p>{tr(dictionary, "VERIFIED SOURCE NOTES")}</p>
        <h2>{tr(dictionary, "Official pages used for this guide")}</h2>
        <span>
          {tr(
            dictionary,
            "Last checked 12 August 2026. Order-specific details and the current checkout remain the final reference.",
          ).replace(/\b12\b/, String(checkedDay))}
        </span>
      </div>
      <div>
        {sources.map((source) => (
          <a
            href={source.url}
            target="_blank"
            rel="noreferrer"
            key={source.url}
          >
            <span>
              <b>{source.label}</b>
              <small>{source.note}</small>
            </span>
            <em>{tr(dictionary, "Official source")} ↗</em>
          </a>
        ))}
      </div>
    </aside>
  );
}
function ArticleIndex({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: TranslationDictionary;
}) {
  const localizedArticles = localizeValue(seoArticles, dictionary);
  return (
    <main className="article-page article-index-page" lang={locale}>
      <ArticleHeader locale={locale} dictionary={dictionary} />
      <section className="article-index-hero">
        <p className="article-label">{tr(dictionary, "SEO ARTICLE DESK")}</p>
        <h1>
          {tr(dictionary, "Useful PikoBuy research, not search-engine filler.")}
        </h1>
        <p className="article-intro">
          {tr(
            dictionary,
            "Every published article is a complete long-form guide grounded in dated PikoBuy source pages. We separate official facts from practical interpretation and never invent customer ratings.",
          )}
        </p>
      </section>
      <section className="article-index-grid">
        {localizedArticles.map((article, index) => (
          <Link
            href={localizedPath(locale, `/articles/${article.slug}`)}
            key={article.slug}
          >
            <div>
              <span>{article.label}</span>
              <b>{String(index + 1).padStart(2, "0")}</b>
            </div>
            <h2>{article.title}</h2>
            <p>{article.dek}</p>
            <footer>
              <span>
                {article.published} · {article.readingTime}
              </span>
              <b>{tr(dictionary, "Read full article")} →</b>
            </footer>
          </Link>
        ))}
      </section>
      <section className="article-method">
        <div>
          <p>{tr(dictionary, "EDITORIAL METHOD")}</p>
          <h2>
            {tr(dictionary, "One intent, visible sources, clear limits.")}
          </h2>
        </div>
        <div>
          <p>
            {tr(
              dictionary,
              "Each article answers one real buying question, cites the official pages behind changing policy facts, and records a review date. Original visual explainers are used only when they make a process easier to understand.",
            )}
          </p>
          <Link href={localizedPath(locale, "/editorial-policy")}>
            {tr(dictionary, "Read the editorial policy")} →
          </Link>
        </div>
      </section>
      <ArticleFooter dictionary={dictionary} />
    </main>
  );
}
function CategoryIndex({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: TranslationDictionary;
}) {
  const localizedArticles = localizeValue(categoryArticles, dictionary);
  return (
    <main className="article-page article-index-page" lang={locale}>
      <ArticleHeader
        locale={locale}
        dictionary={dictionary}
        sectionHref="/categories"
        sectionLabel="Categories"
      />
      <section className="article-index-hero">
        <p className="article-label">
          {tr(dictionary, "TEN INDEPENDENT CATEGORY GUIDES")}
        </p>
        <h1>
          {tr(dictionary, "Different products require different evidence.")}
        </h1>
        <p className="article-intro">
          {tr(
            dictionary,
            "These are not ten copies of one four-paragraph template. Every category has its own long-form page, measurement logic, warehouse inspection method, return risks, shipping questions and dated official sources.",
          )}
        </p>
      </section>
      <section className="category-index-grid">
        {localizedArticles.map((article, index) => (
          <Link
            href={localizedPath(locale, `/categories/${article.slug}`)}
            key={article.slug}
          >
            <div>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <em>{article.readingTime}</em>
            </div>
            <h2>{article.title}</h2>
            <p>{article.dek}</p>
            <b>{tr(dictionary, "Read the complete guide")} →</b>
          </Link>
        ))}
      </section>
      <section className="article-method">
        <div>
          <p>{tr(dictionary, "CATEGORY METHOD")}</p>
          <h2>{tr(dictionary, "Evidence before verdicts.")}</h2>
        </div>
        <div>
          <p>
            {tr(
              dictionary,
              "Each guide separates seller claims from warehouse observations, explains what photographs cannot prove, and connects the product decision to PikoBuy's published returns, inspection and shipping terms.",
            )}
          </p>
          <Link href={localizedPath(locale, "/official-sources")}>
            {tr(dictionary, "Review every official source")} →
          </Link>
        </div>
      </section>
      <ArticleFooter dictionary={dictionary} />
    </main>
  );
}
function GuideIndex({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: TranslationDictionary;
}) {
  const localizedArticles = localizeValue(guideArticles, dictionary);
  return (
    <main className="article-page article-index-page" lang={locale}>
      <ArticleHeader
        locale={locale}
        dictionary={dictionary}
        sectionHref="/guides"
        sectionLabel="Guides"
      />
      <section className="article-index-hero">
        <p className="article-label">
          {tr(dictionary, "COMPLETE PIKOBUY GUIDES")}
        </p>
        <h1>{tr(dictionary, "One buying journey, six deep decisions.")}</h1>
        <p className="article-intro">
          {tr(
            dictionary,
            "Every guide is a complete long-form article rather than a card summary. Together they cover the product link, first payment, warehouse evidence, the 120-hour return decision, parcel cost and post-dispatch tracking.",
          )}
        </p>
      </section>
      <section className="guide-index-grid">
        {localizedArticles.map((article, index) => (
          <Link
            href={localizedPath(locale, `/guides/${article.slug}`)}
            key={article.slug}
          >
            <div>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <em>{article.readingTime}</em>
            </div>
            <h2>{article.title}</h2>
            <p>{article.dek}</p>
            <b>{tr(dictionary, "Read the complete guide")} →</b>
          </Link>
        ))}
      </section>
      <section className="article-method">
        <div>
          <p>{tr(dictionary, "FACT STANDARD")}</p>
          <h2>{tr(dictionary, "Long form with visible limits.")}</h2>
        </div>
        <div>
          <p>
            {tr(
              dictionary,
              "Platform facts are tied to the exact PikoBuy page checked on 12 August 2026. Practical explanations are clearly separated from official policy, and changing order details are sent back to the live checkout.",
            )}
          </p>
          <Link href={localizedPath(locale, "/official-sources")}>
            {tr(dictionary, "Open the source register")} →
          </Link>
        </div>
      </section>
      <ArticleFooter dictionary={dictionary} />
    </main>
  );
}
function MethodIndex({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: TranslationDictionary;
}) {
  const localizedArticles = localizeValue(methodArticles, dictionary);
  return (
    <main className="article-page article-index-page" lang={locale}>
      <ArticleHeader
        locale={locale}
        dictionary={dictionary}
        sectionHref="/method"
        sectionLabel="Research Method"
      />
      <section className="article-index-hero">
        <p className="article-label">
          {tr(dictionary, "FOUR WORKING METHODS")}
        </p>
        <h1>
          {tr(dictionary, "Research principles that lead somewhere useful.")}
        </h1>
        <p className="article-intro">
          {tr(
            dictionary,
            "Each principle opens a complete, source-backed method: how claims are separated, evidence is ranked, buyer decisions are timed and meaning is preserved across languages.",
          )}
        </p>
      </section>
      <section className="guide-index-grid">
        {localizedArticles.map((article, index) => (
          <Link
            href={localizedPath(locale, `/method/${article.slug}`)}
            key={article.slug}
          >
            <div>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <em>{article.readingTime}</em>
            </div>
            <h2>{article.title}</h2>
            <p>{article.dek}</p>
            <b>{tr(dictionary, "Read the complete method")} →</b>
          </Link>
        ))}
      </section>
      <section className="article-method">
        <div>
          <p>{tr(dictionary, "SOURCE STANDARD")}</p>
          <h2>
            {tr(dictionary, "Facts, observations and limits stay separate.")}
          </h2>
        </div>
        <div>
          <p>
            {tr(
              dictionary,
              "Official PikoBuy facts carry a source and review date. Seller claims remain seller claims. Warehouse photographs are treated as limited visual evidence, not product certification.",
            )}
          </p>
          <Link href={localizedPath(locale, "/official-sources")}>
            {tr(dictionary, "Open the source register")} →
          </Link>
        </div>
      </section>
      <ArticleFooter dictionary={dictionary} />
    </main>
  );
}
function SeoArticlePage({
  article,
  locale,
  dictionary,
}: {
  article: SeoArticle;
  locale: Locale;
  dictionary: TranslationDictionary;
}) {
  const related = localizeValue(
    seoArticles.filter((item) => item.slug !== article.slug),
    dictionary,
  );
  return (
    <main className="article-page seo-article-page" lang={locale}>
      <ArticleStructuredData
        article={article}
        locale={locale}
        routePath={`/articles/${article.slug}`}
        section="Articles"
      />
      <ArticleHeader locale={locale} dictionary={dictionary} />
      <article className="seo-article">
        <header className="seo-article-hero">
          <p className="article-label">{article.label}</p>
          <h1>{article.title}</h1>
          <p className="article-intro">{article.dek}</p>
          <div className="article-meta">
            <span>
              {tr(dictionary, "Published")} {article.published}
            </span>
            <span>{article.readingTime}</span>
            <span>
              {tr(dictionary, "Official sources checked 12 August 2026")}
            </span>
          </div>
        </header>
        <figure className="article-graphic">
          <figcaption>
            {tr(dictionary, "ORIGINAL RESEARCH WORKFLOW")}
          </figcaption>
          <div>
            {article.graphic.map((item) => (
              <section key={item.number}>
                <span>{item.number}</span>
                <h2>{item.title}</h2>
                <p>{item.note}</p>
              </section>
            ))}
          </div>
        </figure>
        <div className="longform-sections">
          {article.sections.map((section, index) => (
            <section key={section.heading}>
              <aside>{String(index + 1).padStart(2, "0")}</aside>
              <div>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets && (
                  <div className="article-checklist">
                    <b>{tr(dictionary, "WORKING CHECKLIST")}</b>
                    <ul>
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>
        <SourcePanel sources={article.sources} dictionary={dictionary} />
        <div className="related-articles">
          <p>{tr(dictionary, "CONTINUE READING")}</p>
          <div>
            {related.map((item) => (
              <a
                href={localizedPath(locale, `/articles/${item.slug}`)}
                key={item.slug}
              >
                <span>{item.label}</span>
                <b>{item.title}</b>
                <em>{tr(dictionary, "Read next")} →</em>
              </a>
            ))}
          </div>
        </div>
        <div className="article-cta">
          <p>
            {tr(
              dictionary,
              "Use the full research database when you are ready to check live product records.",
            )}
          </p>
          <a href="https://findspreadsheet.com/">
            {tr(dictionary, "Browse the Product Database")} ↗
          </a>
        </div>
      </article>
      <ArticleFooter dictionary={dictionary} />
    </main>
  );
}
function GuideArticlePage({
  article,
  locale,
  dictionary,
}: {
  article: SeoArticle;
  locale: Locale;
  dictionary: TranslationDictionary;
}) {
  const related = localizeValue(
    guideArticles.filter((item) => item.slug !== article.slug).slice(0, 4),
    dictionary,
  );
  return (
    <main
      className="article-page seo-article-page guide-article-page"
      lang={locale}
    >
      <ArticleStructuredData
        article={article}
        locale={locale}
        routePath={`/guides/${article.slug}`}
        section="Guides"
      />
      <ArticleHeader
        locale={locale}
        dictionary={dictionary}
        sectionHref="/guides"
        sectionLabel="All Guides"
      />
      <article className="seo-article">
        <header className="seo-article-hero">
          <p className="article-label">{article.label}</p>
          <h1>{article.title}</h1>
          <p className="article-intro">{article.dek}</p>
          <div className="article-meta">
            <span>
              {tr(dictionary, "Updated")} {article.published}
            </span>
            <span>{article.readingTime}</span>
            <span>
              {tr(
                dictionary,
                "Complete long-form guide · official sources checked 12 August 2026",
              ).replace(/\b12\b/, article.slug === "shipping" ? "13" : "12")}
            </span>
          </div>
        </header>
        <figure className="article-graphic">
          <figcaption>{tr(dictionary, "ORIGINAL GUIDE ROADMAP")}</figcaption>
          <div>
            {article.graphic.map((item) => (
              <section key={item.number}>
                <span>{item.number}</span>
                <h2>{item.title}</h2>
                <p>{item.note}</p>
              </section>
            ))}
          </div>
        </figure>
        <div className="longform-sections">
          {article.sections.map((section, index) => (
            <section key={section.heading}>
              <aside>{String(index + 1).padStart(2, "0")}</aside>
              <div>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets && (
                  <div className="article-checklist">
                    <b>{tr(dictionary, "WORKING CHECKLIST")}</b>
                    <ul>
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>
        <SourcePanel
          sources={article.sources}
          dictionary={dictionary}
          checkedDay={article.slug === "shipping" ? 13 : 12}
        />
        <div className="related-articles">
          <p>{tr(dictionary, "MORE COMPLETE GUIDES")}</p>
          <div>
            {related.map((item) => (
              <a
                href={localizedPath(locale, `/guides/${item.slug}`)}
                key={item.slug}
              >
                <span>{item.label}</span>
                <b>{item.title}</b>
                <em>{tr(dictionary, "Read full guide")} →</em>
              </a>
            ))}
          </div>
        </div>
        <div className="article-cta">
          <p>
            {tr(
              dictionary,
              "Continue with the live database after you understand the product, warehouse and shipping decisions.",
            )}
          </p>
          <a href="https://findspreadsheet.com/">
            {tr(dictionary, "Browse the Product Database")} ↗
          </a>
        </div>
      </article>
      <ArticleFooter
        dictionary={dictionary}
        checkedDay={article.slug === "shipping" ? 13 : 12}
      />
    </main>
  );
}
function MethodArticlePage({
  article,
  locale,
  dictionary,
}: {
  article: SeoArticle;
  locale: Locale;
  dictionary: TranslationDictionary;
}) {
  const related = localizeValue(
    methodArticles.filter((item) => item.slug !== article.slug),
    dictionary,
  );
  return (
    <main
      className="article-page seo-article-page guide-article-page"
      lang={locale}
    >
      <ArticleStructuredData
        article={article}
        locale={locale}
        routePath={`/method/${article.slug}`}
        section="Research Method"
      />
      <ArticleHeader
        locale={locale}
        dictionary={dictionary}
        sectionHref="/method"
        sectionLabel="Research Method"
      />
      <article className="seo-article">
        <header className="seo-article-hero">
          <p className="article-label">{article.label}</p>
          <h1>{article.title}</h1>
          <p className="article-intro">{article.dek}</p>
          <div className="article-meta">
            <span>
              {tr(dictionary, "Updated")} {article.published}
            </span>
            <span>{article.readingTime}</span>
            <span>
              {tr(
                dictionary,
                "Independent method · official sources checked 12 August 2026",
              )}
            </span>
          </div>
        </header>
        <figure className="article-graphic">
          <figcaption>
            {tr(dictionary, "ORIGINAL EVIDENCE WORKFLOW")}
          </figcaption>
          <div>
            {article.graphic.map((item) => (
              <section key={item.number}>
                <span>{item.number}</span>
                <h2>{item.title}</h2>
                <p>{item.note}</p>
              </section>
            ))}
          </div>
        </figure>
        <div className="longform-sections">
          {article.sections.map((section, index) => (
            <section key={section.heading}>
              <aside>{String(index + 1).padStart(2, "0")}</aside>
              <div>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets && (
                  <div className="article-checklist">
                    <b>{tr(dictionary, "METHOD CHECKLIST")}</b>
                    <ul>
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>
        <SourcePanel sources={article.sources} dictionary={dictionary} />
        <div className="related-articles">
          <p>{tr(dictionary, "OTHER RESEARCH METHODS")}</p>
          <div>
            {related.map((item) => (
              <Link
                href={localizedPath(locale, `/method/${item.slug}`)}
                key={item.slug}
              >
                <span>{item.label}</span>
                <b>{item.title}</b>
                <em>{tr(dictionary, "Read the method")} →</em>
              </Link>
            ))}
          </div>
        </div>
        <div className="article-cta">
          <p>
            {tr(
              dictionary,
              "Use the method first, then continue to the live product database.",
            )}
          </p>
          <a href="https://findspreadsheet.com/">
            {tr(dictionary, "Browse the Product Database")} ↗
          </a>
        </div>
      </article>
      <ArticleFooter dictionary={dictionary} />
    </main>
  );
}
function CategoryArticlePage({
  article,
  locale,
  dictionary,
}: {
  article: SeoArticle;
  locale: Locale;
  dictionary: TranslationDictionary;
}) {
  const related = localizeValue(
    categoryArticles.filter((item) => item.slug !== article.slug).slice(0, 4),
    dictionary,
  );
  return (
    <main
      className="article-page seo-article-page category-article-page"
      lang={locale}
    >
      <ArticleStructuredData
        article={article}
        locale={locale}
        routePath={`/categories/${article.slug}`}
        section="Categories"
      />
      <ArticleHeader
        locale={locale}
        dictionary={dictionary}
        sectionHref="/categories"
        sectionLabel="All Categories"
      />
      <article className="seo-article">
        <header className="seo-article-hero">
          <p className="article-label">{article.label}</p>
          <h1>{article.title}</h1>
          <p className="article-intro">{article.dek}</p>
          <div className="article-meta">
            <span>
              {tr(dictionary, "Updated")} {article.published}
            </span>
            <span>{article.readingTime}</span>
            <span>
              {tr(dictionary, "Independent long-form category research")}
            </span>
          </div>
        </header>
        <figure className="article-graphic">
          <figcaption>{tr(dictionary, "CATEGORY DECISION MAP")}</figcaption>
          <div>
            {article.graphic.map((item) => (
              <section key={item.number}>
                <span>{item.number}</span>
                <h2>{item.title}</h2>
                <p>{item.note}</p>
              </section>
            ))}
          </div>
        </figure>
        <div className="longform-sections">
          {article.sections.map((section, index) => (
            <section key={section.heading}>
              <aside>{String(index + 1).padStart(2, "0")}</aside>
              <div>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets && (
                  <div className="article-checklist">
                    <b>{tr(dictionary, "CATEGORY DECISION CHECKLIST")}</b>
                    <ul>
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>
        <SourcePanel sources={article.sources} dictionary={dictionary} />
        <div className="related-articles">
          <p>{tr(dictionary, "OTHER INDEPENDENT CATEGORY GUIDES")}</p>
          <div>
            {related.map((item) => (
              <a
                href={localizedPath(locale, `/categories/${item.slug}`)}
                key={item.slug}
              >
                <span>{item.label}</span>
                <b>{item.title}</b>
                <em>{tr(dictionary, "Read full guide")} →</em>
              </a>
            ))}
          </div>
        </div>
        <div className="article-cta">
          <p>
            {tr(
              dictionary,
              "Use the live product database only after the category-specific checks are clear.",
            )}
          </p>
          <a href="https://findspreadsheet.com/">
            {tr(dictionary, "Browse the Product Database")} ↗
          </a>
        </div>
      </article>
      <ArticleFooter dictionary={dictionary} />
    </main>
  );
}
