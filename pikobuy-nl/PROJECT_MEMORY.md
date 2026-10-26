# pikobuy.nl — Project Memory

Last updated: 2026-10-26

## Purpose

An independent English-first PikoBuy finds and research site for the `pikobuy.nl` domain. It helps visitors discover products and inspect source information before completing a purchase on PikoBuy. It is not the official PikoBuy site.

## Non-negotiable rules

- Framework: current Astro (7.4.2 at project creation), static SSG output. SSR may be introduced only when a documented FindSpreadsheet API can provide server-side data safely.
- Product records, search results, product imagery, QC imagery, prices, IDs and ranking must originate from **findspreadsheet.com**. Do not hand-copy, synthesize or maintain a separate product catalogue here.
- Official PikoBuy brand assets are referenced from the official public paths: `/images/header/pikobuy-logo-figma.png` and `/images/common/pikobuy-icon-192.png`.
- Default language is English. No language redirect based on browser settings.
- Registration URL: `https://www.pikobuy.com/?mode=register&redirect=/home`
- Purchase route: `https://www.pikobuy.com/product/detail?productUrl=https://weidian.com/item.html?itemID={productId}`. The item URL must be encoded once when constructed in code.
- Keep the independent-site disclosure visible wherever a PikoBuy call to action appears.

## SEO research notes

Primary query: `pikobuy spreadsheet`.

Supporting user-intent clusters validated from PikoBuy's public guide and current competing spreadsheet pages:

1. `pikobuy finds`, `pikobuy links`, `best pikobuy spreadsheet`
2. `pikobuy qc photos`, `pikobuy qc checker`, `warehouse inspection`
3. `pikobuy taobao`, `pikobuy weidian`, `pikobuy 1688`, `pikobuy yupoo`
4. `pikobuy shipping`, `pikobuy shipping calculator`, `pikobuy parcel tracking`
5. `how to order on pikobuy`, `pikobuy review`, `is pikobuy safe`

Content must describe PikoBuy's published flow accurately: select/paste a source listing, choose specifications and make the first payment, inspect warehouse photos, submit a parcel and pay international shipping. Avoid promises about delivery speed, fees, availability, authenticity, refunds or coupon values unless verified for the specific date.

## Current architecture

- `src/lib/findspreadsheet.ts` is the sole integration boundary. It builds FindSpreadsheet lookup URLs and PikoBuy purchase URLs.
- No seed products are included. This prevents stale, duplicated or invented inventory.
- `src/pages/search.astro` keeps search on the subsite until the visitor explicitly opens the FindSpreadsheet source lookup.
- Dynamic source-data rendering needs a documented FindSpreadsheet JSON endpoint or a permitted export. Add that endpoint only in `findspreadsheet.ts`; do not scrape HTML pages.

## Next approved work

1. Obtain the documented FindSpreadsheet data/search endpoint and field mapping.
2. Add a server adapter only if live results must render on `pikobuy.nl` rather than opening the source lookup.
3. Add category, product and QC pages from source IDs after the integration contract is known.
4. Add Dutch and other locales only with complete equal-length content across every page.
