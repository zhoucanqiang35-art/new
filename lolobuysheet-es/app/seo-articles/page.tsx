import type { Metadata } from "next";
import { buildMetadata } from "../seo";
import { StandalonePage } from "../standalone-page";

export const metadata: Metadata = buildMetadata({
  title: "LoloBuy SEO Articles — Fact-Checked Long-Form Buyer Research",
  description: "Read human-written LoloBuy SEO articles covering how LoloBuy works, QC photos, shipping costs, returns and warehouse storage.",
  path: "/seo-articles",
});

export default function SeoArticlesPage() {
  return <StandalonePage section="seo-articles" />;
}
