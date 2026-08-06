import { getKeywordMetadata, KeywordLandingPage } from "../keyword-pages";

const slug = "how-to-use-pikobuy-spreadsheet";
export const metadata = getKeywordMetadata(slug);
export default function Page() { return <KeywordLandingPage slug={slug} />; }
