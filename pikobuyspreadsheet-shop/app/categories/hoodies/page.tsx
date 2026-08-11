import { CategoryGuidePage, categoryGuides } from "../../category-guide";
import { PageSearchParams } from "../../content-layout";
import { normalizeLanguage } from "../../i18n";
import { createPageMetadata } from "../../seo";

const data = categoryGuides.hoodies;
export const metadata = createPageMetadata({ title: "PikoBuy Hoodies Spreadsheet: Measurements & QC Guide", description: data.intro, path: "/categories/hoodies" });
export default async function HoodiesPage({ searchParams }: PageSearchParams) { return <CategoryGuidePage data={data} language={normalizeLanguage((await searchParams).lang)} />; }
