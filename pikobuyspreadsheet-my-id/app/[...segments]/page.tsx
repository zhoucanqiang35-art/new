import { SiteExperience } from "@/components/site-experience";
const langs=["en","es","de","fr","it","pt","nl","pl","sv"];
const pages=["home","categories","products","guides","shipping","articles","faq","sources"];
export default async function RoutedPage({params}:{params:Promise<{segments:string[]}>}){
 const {segments=[]}=await params; const first=segments[0]||"";
 const lang=langs.includes(first)?first:"en"; const page=langs.includes(first)?(segments[1]||"home"):(first||"home");
 const articleSlug=page==="articles"?(langs.includes(first)?segments[2]:segments[1]):undefined;
 return <SiteExperience lang={lang} page={pages.includes(page)?page:"home"} articleSlug={articleSlug}/>;
}
