import { rankingEntries } from "../ranking-content";
import { RankingPage } from "../ranking-page";
import { buildMetadata } from "../seo";

const entry = rankingEntries["is-pikobuy-safe"];
export const metadata = buildMetadata({ title: entry.title, description: entry.description, path: entry.slug, translatedPath: null, type: "article" });
export default function Page() { return <RankingPage entry={entry} />; }
