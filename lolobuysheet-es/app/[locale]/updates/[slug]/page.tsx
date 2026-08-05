import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { supportedLocales } from "../../../site-shell";
import { buildMetadata, localizedUrl } from "../../../seo";
import { UpdatePage } from "../../../update-page";
import { getOfficialUpdate, officialUpdates } from "../../../update-data";

export function generateStaticParams() {
  return Array.from(supportedLocales)
    .filter((locale) => locale !== "en")
    .flatMap((locale) => officialUpdates.map(({ slug }) => ({ locale, slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const update = getOfficialUpdate(slug);
  if (!supportedLocales.has(locale) || locale === "en" || !update) return {};
  return buildMetadata({
    title: `${update.title} | LoloBuy Updates`,
    description: update.summary,
    path: `/updates/${update.slug}`,
    locale,
    canonical: localizedUrl("en", `/updates/${update.slug}`),
    indexable: false,
    type: "article",
  });
}

export default async function LocalizedOfficialUpdateDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!supportedLocales.has(locale) || locale === "en") notFound();
  return <UpdatePage slug={slug} locale={locale} />;
}
