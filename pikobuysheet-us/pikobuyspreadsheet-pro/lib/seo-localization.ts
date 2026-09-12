import type { SeoArticle } from "./content-data";
import { seoTranslations } from "./seo-translations.generated";

export type LocalizedSeoArticle = {
  slug: string;
  title: string;
  deck: string;
  readTime: string;
  wordTarget: string;
  sources: readonly string[];
  sections: readonly {heading:string;paragraphs:readonly string[]}[];
};

export type SeoTranslationLabels = {
  contentLabel: string;
  sectionsLabel: string;
  paragraphsLabel: string;
};

const englishLabels: SeoTranslationLabels = {
  contentLabel: "Complete article",
  sectionsLabel: "sections",
  paragraphsLabel: "paragraphs",
};

type TranslationPack = {
  labels: SeoTranslationLabels;
  articles: Record<string, Omit<LocalizedSeoArticle,"slug">>;
};

const translationPacks = seoTranslations as unknown as Record<string,TranslationPack>;

export function getLocalizedSeoArticle(code:string,article:SeoArticle):LocalizedSeoArticle {
  const translated=translationPacks[code]?.articles[article.slug];
  return translated ? {slug:article.slug,...translated} : article;
}

export function getSeoTranslationLabels(code:string):SeoTranslationLabels {
  return translationPacks[code]?.labels ?? englishLabels;
}
