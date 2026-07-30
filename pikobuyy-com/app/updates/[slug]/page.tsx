import { notFound } from "next/navigation";
import { ContentDetailPage } from "../../detail-pages";
import { updateEntries } from "../../editorial-content";
import { detailMetadata } from "../../seo";
import { sectionItemSlugs } from "../../site-content";

export function generateStaticParams() { return sectionItemSlugs.updates.map((slug) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = updateEntries[slug];
  if (!entry) return {};
  return detailMetadata("en", "updates", slug, entry.dek);
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!sectionItemSlugs.updates.includes(slug)) notFound();
  return <ContentDetailPage section="updates" slug={slug} />;
}
