import { Search } from "lucide-react";

export default function SearchBox({ placeholder = "Search products...", button = "Search" }: { placeholder?: string; button?: string }) {
  return <form className="search-box" action="https://findspreadsheet.com/search.html" method="get" aria-label={placeholder}>
    <label className="sr-only" htmlFor="find-search">{placeholder}</label>
    <input id="find-search" name="keywords" type="search" required autoComplete="off" placeholder={placeholder} />
    <input type="hidden" name="channelid" value="2" />
    <button type="submit"><Search size={17}/>{button}</button>
  </form>;
}
