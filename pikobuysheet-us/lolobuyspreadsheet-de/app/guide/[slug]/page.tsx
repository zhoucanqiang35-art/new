import { notFound } from "next/navigation";
import GuidePage from "../../components/GuidePage";
import { guideOrder, type GuideSlug } from "../../data/guides";
import { guideData } from "../../data/guides";
import type { Metadata } from "next";
import { localeCodes, localizedPath } from "../../data/locales";

export function generateStaticParams() { return guideOrder.map(slug => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (!guideOrder.includes(slug as GuideSlug)) return {};
  const guide = guideData[slug as GuideSlug];
  return {
    title: `${guide.title} | LoloBuy Spreadsheet DE`,
    description: guide.deck,
    keywords: guide.keywords,
    authors: [{ name: "FindSpreadsheet Editorial" }],
    alternates: {
      canonical: `/guide/${slug}`,
      languages: {
        ...Object.fromEntries(localeCodes.map(code => [code, localizedPath(code, `guide/${slug}`)])),
        "x-default": `/guide/${slug}`,
      },
    },
    openGraph: {
      type: "article",
      title: guide.title,
      description: guide.deck,
      publishedTime: guide.published,
      modifiedTime: guide.published,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!guideOrder.includes(slug as GuideSlug)) notFound();
  return <GuidePage slug={slug as GuideSlug} locale="en" />;
}
