import type { Metadata } from "next";
import { UpdatePage } from "../../update-page";
import { getOfficialUpdate, officialUpdates } from "../../update-data";
import { buildMetadata } from "../../seo";

export function generateStaticParams() {
  return officialUpdates.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const update = getOfficialUpdate(slug);
  if (!update) return {};
  return buildMetadata({
    title: `${update.title} | LoloBuy Updates`,
    description: update.summary,
    path: `/updates/${update.slug}`,
    type: "article",
  });
}

export default async function OfficialUpdateDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <UpdatePage slug={slug} />;
}
