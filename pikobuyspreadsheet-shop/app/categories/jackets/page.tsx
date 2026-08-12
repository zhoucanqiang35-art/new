import { CategoryGuidePage, categoryGuides } from "../../category-guide";
import { PageSearchParams } from "../../content-layout";
import { normalizeLanguage } from "../../i18n";
import { createPageMetadata } from "../../seo";

const data = categoryGuides.jackets;
export const metadata = createPageMetadata({ title: "PikoBuy Jackets Spreadsheet: Fit, Hardware & QC Guide", description: data.intro, path: "/categories/jackets" });

export default async function JacketsCategoryPage({ searchParams }: PageSearchParams) {
  return <CategoryGuidePage data={data} language={normalizeLanguage((await searchParams).lang)} />;
}
