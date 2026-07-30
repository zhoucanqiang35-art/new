import { notFound, redirect } from "next/navigation";
import { categoryLinks, categorySlugs, isCategorySlug } from "../../site-content";

export function generateStaticParams() {
  return categorySlugs.map((category) => ({ category }));
}

export default async function Page({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  if (!isCategorySlug(category)) notFound();
  redirect(categoryLinks[category]);
}
