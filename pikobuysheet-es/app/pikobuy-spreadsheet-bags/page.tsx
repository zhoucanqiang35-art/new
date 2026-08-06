import { getKeywordMetadata, KeywordLandingPage } from "../keyword-pages";

const slug = "pikobuy-spreadsheet-bags";
export const metadata = getKeywordMetadata(slug);
export default function Page() { return <KeywordLandingPage slug={slug} />; }
