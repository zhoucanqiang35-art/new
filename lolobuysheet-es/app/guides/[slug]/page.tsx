import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buyerGuides, getBuyerGuide } from "../../guide-data";
import { GuidePage } from "../../guide-page";
import { buildMetadata } from "../../seo";

export function generateStaticParams() {
  return buyerGuides.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getBuyerGuide(slug);
  if (!guide) return {};
  return buildMetadata({
    title: `${guide.title} | LoloBuy Buyer Guides`,
    description: guide.summary,
    path: `/guides/${guide.slug}`,
    type: "article",
  });
}

export default async function BuyerGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getBuyerGuide(slug)) notFound();
  return <GuidePage slug={slug} />;
}
