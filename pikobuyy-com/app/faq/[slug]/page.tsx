import { notFound } from "next/navigation";
import { ContentDetailPage } from "../../detail-pages";
import { faqEntries } from "../../editorial-content";
import { detailMetadata } from "../../seo";
import { sectionItemSlugs } from "../../site-content";

export function generateStaticParams() { return sectionItemSlugs.faq.map((slug) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = faqEntries[slug];
  if (!entry) return {};
  return detailMetadata("en", "faq", slug, entry.dek);
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!sectionItemSlugs.faq.includes(slug)) notFound();
  return <ContentDetailPage section="faq" slug={slug} />;
}
