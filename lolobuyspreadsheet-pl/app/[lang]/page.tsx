import SiteExperience from "@/components/site-experience";

const supported = new Set(["en", "de", "fr", "es", "it", "nl", "pl", "pt", "sv"]);

export default async function LanguageHome({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return <SiteExperience initialLang={supported.has(lang) ? lang : "en"} />;
}
