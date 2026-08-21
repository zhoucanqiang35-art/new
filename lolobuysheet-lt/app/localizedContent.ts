import generated from "./generatedLocalizedContent.json";
import type { ResearchArticle } from "./articleData";

export type LocalizedFaq={slug:string;question:string;short:string;answer:string;sourceHref:string};
export type LocalizedUi={translatedEdition:string;preserved:string;sourceNote:string;checked:string;verifyLive:string;allArticles:string;allFaqs:string};
export type LocalizedBundle={articles:ResearchArticle[];faqs:LocalizedFaq[];ui:LocalizedUi};

export const localizedContent=generated as unknown as Record<string,LocalizedBundle>;
