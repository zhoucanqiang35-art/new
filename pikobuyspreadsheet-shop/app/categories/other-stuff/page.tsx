import { CategoryGuidePage, categoryGuides } from "../../category-guide";
import { PageSearchParams } from "../../content-layout";
import { normalizeLanguage } from "../../i18n";
import { createPageMetadata } from "../../seo";

const data = categoryGuides["other-stuff"];
export const metadata = createPageMetadata({ title: "PikoBuy Other Finds: Product Risk & QC Guide", description: data.intro, path: "/categories/other-stuff" });

export default async function OtherStuffCategoryPage({ searchParams }: PageSearchParams) {
  return <CategoryGuidePage data={data} language={normalizeLanguage((await searchParams).lang)} />;
}
