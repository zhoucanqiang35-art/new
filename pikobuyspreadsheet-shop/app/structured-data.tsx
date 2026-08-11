import { absoluteUrl, DEFAULT_SOCIAL_IMAGE, SITE_NAME, SITE_ORIGIN } from "./seo";

type JsonLdValue = Record<string, unknown> | Array<Record<string, unknown>>;

export function JsonLd({ data }: { data: JsonLdValue }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

export function SiteIdentityJsonLd() {
  return <JsonLd data={[
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${SITE_ORIGIN}/#organization`,
      name: SITE_NAME,
      url: `${SITE_ORIGIN}/`,
      logo: absoluteUrl("/pikobuy-logo.png"),
      description: "An independent research site for PikoBuy spreadsheet finds, QC checks, shipping planning and source-linked buyer guidance.",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_ORIGIN}/#website`,
      name: SITE_NAME,
      url: `${SITE_ORIGIN}/`,
      publisher: { "@id": `${SITE_ORIGIN}/#organization` },
      inLanguage: "en",
    },
  ]} />;
}

const breadcrumbLabels: Record<string, string> = {
  categories: "Categories",
  faq: "FAQ",
  finds: "Finds",
  guides: "Guides",
  "qc-method": "QC Method",
  "qc-photos": "QC Photos",
  returns: "Returns",
  shipping: "Shipping",
  sources: "Sources",
  "seo-articles": "SEO Articles",
};

export function PageStructuredData({
  pathname,
  title,
  description,
  article = false,
  publishedTime = "2026-08-06",
  modifiedTime = "2026-08-10",
  extra,
}: {
  pathname: string;
  title: string;
  description: string;
  article?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  extra?: Record<string, unknown>;
}) {
  const parts = pathname.split("/").filter(Boolean);
  const breadcrumbs = [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    ...parts.map((part, index) => {
      const isLast = index === parts.length - 1;
      const itemPath = `/${parts.slice(0, index + 1).join("/")}`;
      return {
        "@type": "ListItem",
        position: index + 2,
        name: isLast ? title : (breadcrumbLabels[part] ?? part.replaceAll("-", " ")),
        item: absoluteUrl(itemPath),
      };
    }),
  ];

  const data: Array<Record<string, unknown>> = [{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs,
  }];

  if (article) {
    data.push({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description,
      image: absoluteUrl(DEFAULT_SOCIAL_IMAGE),
      datePublished: publishedTime,
      dateModified: modifiedTime,
      mainEntityOfPage: absoluteUrl(pathname),
      author: { "@type": "Organization", "@id": `${SITE_ORIGIN}/#organization`, name: SITE_NAME },
      publisher: { "@id": `${SITE_ORIGIN}/#organization` },
      inLanguage: "en",
    });
  }

  if (extra) data.push(extra);
  return <JsonLd data={data} />;
}
