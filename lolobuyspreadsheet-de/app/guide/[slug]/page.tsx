import { notFound } from "next/navigation";
import GuidePage from "../../components/GuidePage";
import { guideOrder, type GuideSlug } from "../../data/guides";
import { guideData } from "../../data/guides";
import type { Metadata } from "next";

export function generateStaticParams() { return guideOrder.map(slug => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (!guideOrder.includes(slug as GuideSlug)) return {};
  const guide = guideData[slug as GuideSlug];
  return { title: `${guide.title} | LoloBuy Spreadsheet DE`, description: guide.deck, alternates: { canonical: `/guide/${slug}`, languages: { en: `/guide/${slug}`, "de-DE": `/de/ratgeber/${slug}` } } };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!guideOrder.includes(slug as GuideSlug)) notFound();
  return <GuidePage slug={slug as GuideSlug} locale="en" />;
}
