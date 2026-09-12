import { getUi } from "../../lib/i18n";

export default function ProductSearch({ id = "product-query", label = "Search FindSpreadsheet by product or link", button = "Search products", localeCode = "en" }: { id?: string; label?: string; button?: string; localeCode?: string }) {
  const ui=getUi(localeCode);
  return <>
    <form className="v3-search" action="https://findspreadsheet.com/search.html" method="get" target="_blank">
      <label htmlFor={id}>{label}</label>
      <div><span>⌕</span><input id={id} name="keywords" placeholder={label}/><button type="submit">{button}</button></div>
      <input type="hidden" name="channelid" value="2"/>
      <input type="hidden" name="method" value="1"/>
    </form>
    <a className="v3-database-link" href="https://findspreadsheet.com/AllProducts/" target="_blank" rel="noreferrer">{ui.completeDatabase} ↗</a>
  </>;
}
