import { CategoryGuidePage, categoryGuides } from "../../category-guide";
import { PageSearchParams } from "../../content-layout";
import { normalizeLanguage } from "../../i18n";
import { createPageMetadata } from "../../seo";

const data = categoryGuides.shoes;
export const metadata = createPageMetadata({ title: "PikoBuy Shoes Spreadsheet: Sizing & QC Guide", description: data.intro, path: "/categories/shoes" });
export default async function ShoesPage({ searchParams }: PageSearchParams) { return <CategoryGuidePage data={data} language={normalizeLanguage((await searchParams).lang)} />; }
