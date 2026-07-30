import { notFound } from "next/navigation";
import { ContentDetailPage } from "../../detail-pages";
import { sectionItemSlugs } from "../../site-content";

export function generateStaticParams() { return sectionItemSlugs.faq.map((slug) => ({ slug })); }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!sectionItemSlugs.faq.includes(slug)) notFound();
  return <ContentDetailPage section="faq" slug={slug} />;
}
