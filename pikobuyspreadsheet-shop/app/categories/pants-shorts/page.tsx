import { CategoryGuidePage, categoryGuides } from "../../category-guide";
import { PageSearchParams } from "../../content-layout";
import { normalizeLanguage } from "../../i18n";
import { createPageMetadata } from "../../seo";

const data = categoryGuides["pants-shorts"];
export const metadata = createPageMetadata({ title: "PikoBuy Pants & Shorts Spreadsheet: Fit and QC Guide", description: data.intro, path: "/categories/pants-shorts" });

export default async function PantsShortsCategoryPage({ searchParams }: PageSearchParams) {
  return <CategoryGuidePage data={data} language={normalizeLanguage((await searchParams).lang)} />;
}
