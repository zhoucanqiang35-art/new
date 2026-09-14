import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlesPage, CobaltHome, ContentPageView, FaqPage, SpreadsheetPage, UpdatesPage } from "../site-components";
import { contentPages, localeCopy, locales } from "../site-data";
import { localizedPage, tx } from "../content-i18n";

type Props = { params: Promise<{ slug: string[] }> };
const localeCodes = new Set(locales.map(([code]) => code));

function resolveParts(parts: string[]) {
  const first = parts[0];
  const locale = localeCodes.has(first as never) ? first : "en";
  const pathParts = locale === "en" ? parts : parts.slice(1);
  return { locale, path: pathParts.join("/") };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { locale, path } = resolveParts(slug);
  if (!path && locale !== "en") {
    const copy = localeCopy[locale] || localeCopy.en;
    return { title: `${copy.title} ${copy.accent} | LoloBuy US`, description: copy.lede, robots: { index: false, follow: false } };
  }
  const page = contentPages[path];
  const translatedPage = page ? localizedPage(page, locale) : undefined;
  const special: Record<string, [string, string]> = {
    spreadsheet: ["LoloBuy Spreadsheet 2026 | Product Departments & QC Lenses", "Browse ten LoloBuy product departments with a practical inspection lens and focused FindSpreadsheet search routes."],
    faq: ["LoloBuy Spreadsheet FAQ | Independent Answers", "Answers about the LoloBuy buying process, warehouse photos, storage, shipping and independent spreadsheet links."],
    updates: ["LoloBuy US Updates | Source Checks & Corrections", "A transparent log of LoloBuy workflow source checks, editorial corrections and content updates."],
    "seo-articles": ["LoloBuy Guides & Research Articles", "Source-led guides covering LoloBuy QC photos, shipping, tracking, chargeable weight and the product-link workflow."],
  };
  const title = translatedPage?.title || (special[path] ? tx(locale, special[path][0]) : undefined);
  const description = translatedPage?.summary || (special[path] ? tx(locale, special[path][1]) : undefined);
  if (!title) return {};
  return { title, description, robots: { index: false, follow: false } };
}

export default async function DynamicPage({ params }: Props) {
  const { slug } = await params;
  const { locale, path } = resolveParts(slug);
  if (!path && locale !== "en") return <CobaltHome locale={locale} />;
  if (path === "spreadsheet") return <SpreadsheetPage locale={locale} />;
  if (path === "faq") return <FaqPage locale={locale} />;
  if (path === "updates") return <UpdatesPage locale={locale} />;
  if (path === "seo-articles") return <ArticlesPage locale={locale} />;
  const page = contentPages[path];
  if (page) return <ContentPageView page={page} locale={locale} />;
  notFound();
}
