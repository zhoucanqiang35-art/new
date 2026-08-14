import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ResearchSite } from "../components/research-site";
import { getDictionary } from "../lib/locale-dictionaries";
import { pageMetadata } from "../lib/seo";
import { parsePublicParts } from "../lib/routing";

type PageProps = { params: Promise<{ parts: string[] }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const parsed = parsePublicParts((await params).parts);
  if (!parsed) return { title: "Not found", robots: { index: false, follow: false } };
  const dictionary = await getDictionary(parsed.locale);
  return pageMetadata(parsed.locale, dictionary, parsed.article);
}

export default async function PublicPage({ params }: PageProps) {
  const parsed = parsePublicParts((await params).parts);
  if (!parsed) notFound();
  const dictionary = await getDictionary(parsed.locale);
  return <ResearchSite locale={parsed.locale} article={parsed.article} dictionary={dictionary} />;
}

