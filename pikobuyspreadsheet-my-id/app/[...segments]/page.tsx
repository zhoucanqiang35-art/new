import type { Metadata } from "next";
import { SiteExperience } from "@/components/site-experience";
import { localizedArticleRecords } from "@/components/full-locales";

const baseUrl = "https://pikobuyspreadsheet.my.id";
const langs = ["en", "es", "de", "fr", "it", "pt", "nl", "pl", "sv"] as const;
const pages = ["home", "categories", "products", "guides", "shipping", "articles", "faq", "sources"] as const;

type PageParams = { params: Promise<{ segments: string[] }> };

function routeParts(segments: string[]) {
  const first = segments[0] || "";
  const hasLanguagePrefix = (langs as readonly string[]).includes(first);
  const lang = hasLanguagePrefix ? first : "en";
  const contentSegments = hasLanguagePrefix ? segments.slice(1) : segments;
  return { lang, contentSegments };
}

function localizedUrl(language: string, contentSegments: string[]) {
  const prefix = language === "en" ? "" : `/${language}`;
  const suffix = contentSegments.length ? `/${contentSegments.join("/")}` : "";
  return `${baseUrl}${prefix}${suffix}/`;
}

export const dynamicParams=false;

export function generateStaticParams(){
 const routes:{segments:string[]}[]=[];
 for(const lang of langs){
  routes.push({segments:[lang]});
  for(const page of pages.slice(1)) routes.push({segments:[lang,page]});
  for(const article of localizedArticleRecords[lang as keyof typeof localizedArticleRecords]) routes.push({segments:[lang,"articles",article.slug]});
 }
 for(const page of pages.slice(1)) routes.push({segments:[page]});
 for(const article of localizedArticleRecords.en) routes.push({segments:["articles",article.slug]});
 return routes;
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { segments = [] } = await params;
  const { lang, contentSegments } = routeParts(segments);
  const canonical = localizedUrl(lang, contentSegments);
  const englishUrl = localizedUrl("en", contentSegments);
  const languages = Object.fromEntries(
    langs.map((language) => [language, localizedUrl(language, contentSegments)]),
  );

  return {
    alternates: {
      canonical,
      languages: { ...languages, "x-default": englishUrl },
    },
  };
}

export default async function RoutedPage({ params }: PageParams) {
  const { segments = [] } = await params;
  const { lang, contentSegments } = routeParts(segments);
  const page = contentSegments[0] || "home";
  const articleSlug = page === "articles" ? contentSegments[1] : undefined;
  return (
    <SiteExperience
      lang={lang}
      page={(pages as readonly string[]).includes(page) ? page : "home"}
      articleSlug={articleSlug}
    />
  );
}
