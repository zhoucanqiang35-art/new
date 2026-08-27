import { SiteExperience } from "@/components/site-experience";
import { localizedArticleRecords } from "@/components/full-locales";
const langs=["en","es","de","fr","it","pt","nl","pl","sv"];
const pages=["home","categories","products","guides","shipping","articles","faq","sources"];

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

export default async function RoutedPage({params}:{params:Promise<{segments:string[]}>}){
 const {segments=[]}=await params; const first=segments[0]||"";
 const lang=langs.includes(first)?first:"en"; const page=langs.includes(first)?(segments[1]||"home"):(first||"home");
 const articleSlug=page==="articles"?(langs.includes(first)?segments[2]:segments[1]):undefined;
 return <SiteExperience lang={lang} page={pages.includes(page)?page:"home"} articleSlug={articleSlug}/>;
}
