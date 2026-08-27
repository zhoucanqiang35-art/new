import SectionPage from "@/components/section-page";
import { sectionKeys, type SectionKey } from "@/content/navigation";

const languages = ["de", "fr", "es", "it", "nl", "pl", "pt", "sv"];

export function generateStaticParams() {
  return languages.flatMap((lang) => sectionKeys.map((section) => ({ lang, section })));
}

export default async function Page({params}:{params:Promise<{lang:string;section:string}>}) {
  const {lang,section}=await params; const safeSection=(sectionKeys as readonly string[]).includes(section)?section as SectionKey:"articles";
  return <SectionPage initialLang={lang} section={safeSection}/>;
}
