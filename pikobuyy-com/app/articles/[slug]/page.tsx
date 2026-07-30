import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ContentDetailPage } from "../../detail-pages";
import { articleEntries } from "../../editorial-content";
import { sectionItemSlugs } from "../../site-content";

export function generateStaticParams() { return sectionItemSlugs.articles.map((slug) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const entry = articleEntries[slug];
  const index = sectionItemSlugs.articles.indexOf(slug);
  if (!entry || index < 0) return {};
  const titles = [
    "What Is a Pikobuy Spreadsheet? Fact-Checked 2026 Guide",
    "How to Use a Pikobuy Spreadsheet in 2026",
    "Pikobuy QC Photos: Practical Warehouse Review Guide",
    "Pikobuy Shipping Cost: What Changes the Quote?",
  ];
  return {
    title: titles[index],
    description: entry.dek,
    alternates: { canonical: `https://pikobuyy.com/articles/${slug}` },
    openGraph: {
      title: titles[index],
      description: entry.dek,
      url: `https://pikobuyy.com/articles/${slug}`,
      type: "article",
      modifiedTime: "2026-07-29T00:00:00.000Z",
    },
  };
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!sectionItemSlugs.articles.includes(slug)) notFound();
  return <ContentDetailPage section="articles" slug={slug} />;
}
