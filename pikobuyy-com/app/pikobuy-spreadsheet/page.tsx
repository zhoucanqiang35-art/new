import { rankingEntries } from "../ranking-content";
import { RankingPage } from "../ranking-page";
import { buildMetadata } from "../seo";

const entry = rankingEntries["pikobuy-spreadsheet"];

export const metadata = buildMetadata({
  title: "Pikobuy Spreadsheet 2026 - Taobao, Weidian & 1688 Finds",
  description: entry.description,
  path: entry.slug,
  translatedPath: null,
  type: "article",
});

export default function Page() {
  return <RankingPage entry={entry} />;
}
