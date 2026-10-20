import type { Metadata } from "next";
import ArticleShell from "../components/ArticleShell";
import MainSearchRedirect from "../components/MainSearchRedirect";

export const metadata: Metadata = {
  title: "Search PikoBuy Products on FindSpreadsheet",
  description: "Search the live FindSpreadsheet product database with the correct product-search parameters.",
  robots: { index: false, follow: true },
};

type SearchPageProps = { searchParams: Promise<{ q?: string | string[] }> };

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const raw = (await searchParams).q;
  const query = (Array.isArray(raw) ? raw[0] : raw || "").trim();

  return (
    <ArticleShell
      eyebrow="Live product search"
      title={query ? `Continue searching for “${query}”.` : "Search the live product database."}
      intro="This search uses FindSpreadsheet’s real product-search parameters, so the result opens on the main database instead of stopping on a local results page."
    >
      {query && <MainSearchRedirect query={query} />}
      <form className="search-box search-page-form" action="https://findspreadsheet.com/search.html" method="get">
        <label htmlFor="results-search">Search live products</label>
        <div><input id="results-search" name="keywords" defaultValue={query} placeholder="Try ‘hoodie’, ‘jacket’ or ‘cap’" autoFocus required /><button type="submit">Open results →</button></div>
        <input type="hidden" name="channelid" value="2" />
        <input type="hidden" name="method" value="1" />
      </form>
      <a className="button search-database-button search-page-database-button" href="https://findspreadsheet.com/AllProducts/" target="_blank" rel="noreferrer">Open database ↗</a>
      <div className="search-empty">
        <span className="kicker">Direct main-site search</span>
        <h2>The result will open on FindSpreadsheet.</h2>
        <p>Use a product name, category, brand or short product clue. The main database will apply its current product index and filters.</p>
      </div>
    </ArticleShell>
  );
}
