import { CategoryGuidePage, categoryGuides } from "../../category-guide";
import { PageSearchParams } from "../../content-layout";
import { normalizeLanguage } from "../../i18n";
import { createPageMetadata } from "../../seo";

const data = categoryGuides.headwear;
export const metadata = createPageMetadata({ title: "PikoBuy Headwear Spreadsheet: Shape, Fit & QC Guide", description: data.intro, path: "/categories/headwear" });

export default async function HeadwearCategoryPage({ searchParams }: PageSearchParams) {
  return <CategoryGuidePage data={data} language={normalizeLanguage((await searchParams).lang)} />;
}
