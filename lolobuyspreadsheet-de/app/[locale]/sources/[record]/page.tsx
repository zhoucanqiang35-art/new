import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SourceRecordPage, { isRecord } from "../../../components/SourceRecordPage";
import { isLocale, localeCodes, localizedPath } from "../../../data/locales";
import { tr } from "../../../data/translate";

export async function generateMetadata({ params }: { params: Promise<{ locale: string; record: string }> }): Promise<Metadata> {
  const { locale, record } = await params;
  if (!isLocale(locale) || locale === "en" || !isRecord(record)) return {};
  const title = record === "platform-materials" ? "Platform materials review" : "App listing review";
  return {
    title: `${tr(locale, title)} | LoloBuy Spreadsheet`,
    alternates: {
      canonical: localizedPath(locale, `sources/${record}`),
      languages: Object.fromEntries(localeCodes.map(code => [code, localizedPath(code, `sources/${record}`)])),
    },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string; record: string }> }) {
  const { locale, record } = await params;
  if (!isLocale(locale) || locale === "en" || !isRecord(record)) notFound();
  return <SourceRecordPage locale={locale} record={record} />;
}
