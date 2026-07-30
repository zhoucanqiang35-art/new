import { notFound, redirect } from "next/navigation";
import { categoryLinks, categorySlugs, isCategorySlug, isLocale, languages } from "../../../site-content";

export function generateStaticParams() {
  return languages
    .filter(({ code }) => code !== "en")
    .flatMap(({ code }) => categorySlugs.map((category) => ({ locale: code, category })));
}

export default async function Page({ params }: { params: Promise<{ locale: string; category: string }> }) {
  const { locale, category } = await params;
  if (!isLocale(locale) || locale === "en" || !isCategorySlug(category)) notFound();
  redirect(categoryLinks[category]);
}
