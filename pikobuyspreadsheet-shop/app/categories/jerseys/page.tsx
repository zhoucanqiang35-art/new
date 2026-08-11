import { CategoryGuidePage, categoryGuides } from "../../category-guide";
import { PageSearchParams } from "../../content-layout";
import { normalizeLanguage } from "../../i18n";
import { createPageMetadata } from "../../seo";

const data = categoryGuides.jerseys;
export const metadata = createPageMetadata({ title: "PikoBuy Jerseys Spreadsheet: Name-Set & QC Guide", description: data.intro, path: "/categories/jerseys" });
export default async function JerseysPage({ searchParams }: PageSearchParams) { return <CategoryGuidePage data={data} language={normalizeLanguage((await searchParams).lang)} />; }
