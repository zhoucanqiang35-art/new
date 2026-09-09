import { CategoryDetailClient } from "./category-detail-client";
import { categories, slugify } from "@/lib/site-language";

export function generateStaticParams() {
  return categories.map((name) => ({ slug: slugify(name) }));
}

export default async function CategoryDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const name = categories.find((value) => slugify(value) === slug) ?? "Shoes";
  return <CategoryDetailClient name={name} />;
}
