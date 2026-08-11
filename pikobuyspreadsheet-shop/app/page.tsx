import PreviewPage from "./preview-pages";
import { normalizeLanguage } from "./i18n";
import { createPageMetadata } from "./seo";

export const metadata = createPageMetadata({
  title: "PikoBuy Spreadsheet 2026: Product Finds, QC & Shipping Guides",
  description: "Browse independent PikoBuy spreadsheet finds, product-category QC checks, shipping planning and source-linked buyer guides for 2026.",
  path: "/",
});

export default async function HomePage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const { lang } = await searchParams;
  return <PreviewPage variant="bazaar" standalone language={normalizeLanguage(lang)} />;
}
