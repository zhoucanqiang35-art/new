import { getKeywordMetadata, KeywordLandingPage } from "../keyword-pages";

const slug = "pikobuy-spreadsheet-weidian";
export const metadata = getKeywordMetadata(slug);
export default function Page() { return <KeywordLandingPage slug={slug} />; }
