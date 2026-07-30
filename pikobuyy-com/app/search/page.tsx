"use client";

import { useEffect } from "react";

export default function SearchPage() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const query = (params.get("keywords") ?? params.get("q") ?? "").trim();
    const target = query
      ? `https://findspreadsheet.com/search.html?keywords=${encodeURIComponent(query)}&channelid=2`
      : "https://findspreadsheet.com/AllProducts/";

    window.location.replace(target);
  }, []);

  return (
    <main style={{ padding: "3rem 1.25rem", textAlign: "center" }}>
      <p>Opening the matching products on findspreadsheet.com…</p>
      <p>
        <a href="https://findspreadsheet.com/AllProducts/">
          Continue to the product directory
        </a>
      </p>
    </main>
  );
}
