import type { Metadata } from "next";
import Site from "../site";
import { researchArticles } from "../articles";
import contentTranslations from "../content-translations.json";

type Props = { params: Promise<{ path?: string[] }> };
const langs = new Set(["de","fr","es","it","pt","nl","pl","sv"]);
const sections = new Set(["categories","products","guides","articles","faq"]);

function parse(path: string[] = []) {
  const lang = path[0] && langs.has(path[0]) ? path[0] : "en";
  const candidate = lang === "en" ? path[0] : path[1];
  const section = candidate && sections.has(candidate) ? candidate : "home";
  const articleSlug = section === "articles" ? (lang === "en" ? path[1] : path[2]) : undefined;
  return { lang, section, articleSlug };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, section, articleSlug } = parse((await params).path);
  const title: Record<string,string> = {
    home:"PikoBuy Spreadsheet 2026 | Finds, QC & Shipping Research",
    categories:"PikoBuy Spreadsheet Categories | Shoes, Clothing & More",
    products:"PikoBuy Product Finds | Research Before You Order",
    guides:"PikoBuy Guides | Ordering, Warehouse QC & Shipping",
    articles:"PikoBuy Research Articles | Practical Buyer Guides",
    faq:"PikoBuy Spreadsheet FAQ | Independent Answers",
  };
  const localizedArticles = lang === "en" ? researchArticles : ((contentTranslations as unknown as Record<string,{researchArticles:typeof researchArticles}>)[lang]?.researchArticles || researchArticles);
  const article = localizedArticles.find(item=>item.slug===articleSlug);
  const current = section === "home" ? "" : article ? `articles/${article.slug}` : section;
  return {
    title: article ? `${article.title} | PikoBuy Spreadsheet` : title[section],
    description:article?.description || "Independent PikoBuy spreadsheet research for US and European shoppers. Search FindSpreadsheet products, check listings and plan warehouse QC and shipping.",
    robots:{index:true,follow:true},
    alternates:{canonical:lang === "en" ? `/${current}` : `/${lang}/${current}`},
  };
}

export default async function Page({ params }: Props) {
  return <Site {...parse((await params).path)} />;
}
