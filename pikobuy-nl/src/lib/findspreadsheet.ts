/**
 * The only place this project may know about FindSpreadsheet URLs.
 * Do not add a local product catalogue. Dynamic data requires a documented
 * FindSpreadsheet endpoint or export, not HTML scraping.
 */
export const FINDS_ORIGIN = import.meta.env.PUBLIC_FINDSPREADSHEET_ORIGIN ?? 'https://findspreadsheet.com';

export function sourceSearchUrl(query: string) {
  // The source site's public search parameter is intentionally isolated here.
  return `${FINDS_ORIGIN}/?search=${encodeURIComponent(query.trim())}`;
}

export function sourceProductUrl(path: string) {
  return new URL(path.replace(/^\//, ''), `${FINDS_ORIGIN}/`).toString();
}

export function pikobuyRegisterUrl() {
  return 'https://www.pikobuy.com/?mode=register&redirect=/home';
}

export function pikobuyOrderUrl(productId: string) {
  const id = productId.replace(/[^0-9]/g, '');
  if (!id) throw new Error('A numeric source product ID is required.');
  const itemUrl = `https://weidian.com/item.html?itemID=${id}`;
  return `https://www.pikobuy.com/product/detail?productUrl=${encodeURIComponent(itemUrl)}`;
}
