import { CategoryGuidePage, categoryGuides } from "../../category-guide";
import { PageSearchParams } from "../../content-layout";
import { normalizeLanguage } from "../../i18n";
import { createPageMetadata } from "../../seo";

const data = categoryGuides.electronics;
export const metadata = createPageMetadata({ title: "PikoBuy Electronics Spreadsheet: Model, Seal & QC Guide", description: data.intro, path: "/categories/electronics" });
export default async function ElectronicsPage({ searchParams }: PageSearchParams) { return <CategoryGuidePage data={data} language={normalizeLanguage((await searchParams).lang)} />; }
