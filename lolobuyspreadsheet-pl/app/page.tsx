import SiteExperience from "@/components/site-experience";
import type { Metadata } from "next";
import { absoluteUrl, languageAlternates, siteUrl } from "@/content/seo";

export const metadata: Metadata = {
  alternates: { canonical: siteUrl, languages: { "x-default": absoluteUrl("en"), ...languageAlternates() } },
};

export default function Home() {
  return <SiteExperience initialLang="en" />;
}
