import { notFound } from "next/navigation";
import { ContentDetailPage } from "../../detail-pages";
import { guideEntries } from "../../editorial-content";
import { detailMetadata } from "../../seo";
import { sectionItemSlugs } from "../../site-content";

export function generateStaticParams() { return sectionItemSlugs.guides.map((slug) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = guideEntries[slug];
  if (!entry) return {};
  return detailMetadata("en", "guides", slug, entry.dek);
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!sectionItemSlugs.guides.includes(slug)) notFound();
  return <ContentDetailPage section="guides" slug={slug} />;
}
