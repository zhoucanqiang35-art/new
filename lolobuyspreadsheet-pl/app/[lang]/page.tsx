import SiteExperience from "@/components/site-experience";
import type { Metadata } from "next";
import { absoluteUrl, homeMeta, languageAlternates, localeFor } from "@/content/seo";

const supported = new Set(["en", "de", "fr", "es", "it", "nl", "pl", "pt", "sv"]);

export function generateStaticParams() {
  return [...supported].filter((lang) => lang !== "en").map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const locale = localeFor(lang);
  const canonical = absoluteUrl(locale);
  const copy = homeMeta(locale);
  return {
    title: copy.title,
    description: copy.description,
    alternates: { canonical, languages: { "x-default": absoluteUrl("en"), ...languageAlternates() } },
    openGraph: { type: "website", url: canonical, title: copy.title, description: copy.description },
  };
}

export default async function LanguageHome({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return <SiteExperience initialLang={supported.has(lang) ? lang : "en"} />;
}
