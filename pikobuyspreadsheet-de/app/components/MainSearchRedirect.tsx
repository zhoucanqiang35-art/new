"use client";

import { useEffect } from "react";

export function buildMainSearchUrl(query: string) {
  const params = new URLSearchParams({ channelid: "2", method: "1", keywords: query });
  return `https://findspreadsheet.com/search.html?${params.toString()}`;
}

export default function MainSearchRedirect({ query }: { query: string }) {
  const destination = buildMainSearchUrl(query);

  useEffect(() => {
    window.location.replace(destination);
  }, [destination]);

  return (
    <div className="search-empty" role="status" aria-live="polite">
      <span className="kicker">Opening live results</span>
      <h2>Taking you to the matching FindSpreadsheet products…</h2>
      <p>If the main database does not open automatically, use the direct link below.</p>
      <a className="button" href={destination}>Open live search results →</a>
    </div>
  );
}
