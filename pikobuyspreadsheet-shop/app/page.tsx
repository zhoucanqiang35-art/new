import PreviewPage from "./preview-pages";
import { normalizeLanguage } from "./i18n";

export default async function HomePage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const { lang } = await searchParams;
  return <PreviewPage variant="bazaar" standalone language={normalizeLanguage(lang)} />;
}
