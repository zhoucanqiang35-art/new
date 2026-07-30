import { notFound } from "next/navigation";
import { ContentDetailPage } from "../../detail-pages";
import { sectionItemSlugs } from "../../site-content";

export function generateStaticParams() { return sectionItemSlugs.guides.map((slug) => ({ slug })); }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!sectionItemSlugs.guides.includes(slug)) notFound();
  return <ContentDetailPage section="guides" slug={slug} />;
}
