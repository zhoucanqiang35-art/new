import { CategoryGuidePage, categoryGuides } from "../../category-guide";
import { PageSearchParams } from "../../content-layout";
import { normalizeLanguage } from "../../i18n";
import { createPageMetadata } from "../../seo";

const data = categoryGuides.accessories;
export const metadata = createPageMetadata({ title: "PikoBuy Accessories Spreadsheet: Hardware & QC Guide", description: data.intro, path: "/categories/accessories" });
export default async function AccessoriesPage({ searchParams }: PageSearchParams) { return <CategoryGuidePage data={data} language={normalizeLanguage((await searchParams).lang)} />; }
