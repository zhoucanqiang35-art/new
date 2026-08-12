import { CategoryGuidePage, categoryGuides } from "../../category-guide";
import { PageSearchParams } from "../../content-layout";
import { normalizeLanguage } from "../../i18n";
import { createPageMetadata } from "../../seo";

const data = categoryGuides["t-shirts"];
export const metadata = createPageMetadata({ title: "PikoBuy T-Shirts Spreadsheet: Fit, Print & QC Guide", description: data.intro, path: "/categories/t-shirts" });

export default async function TShirtsCategoryPage({ searchParams }: PageSearchParams) {
  return <CategoryGuidePage data={data} language={normalizeLanguage((await searchParams).lang)} />;
}
