# pikobuy.nl — Project Memory

Last updated: 2026-10-26

## Purpose

An independent English-first PikoBuy finds and research site for the `pikobuy.nl` domain. It helps visitors discover products and inspect source information before completing a purchase on PikoBuy. It is not the official PikoBuy site.

## Non-negotiable rules

- Framework: current Astro, Cloudflare-compatible SSR. The server requests FindSpreadsheet only at page request time; there is no local database, cache store, product JSON, queue or back-office.
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

- `src/lib/findspreadsheet.ts` is the sole integration boundary. It requests the public FindSpreadsheet category, search and product pages at runtime, transforms only the response for display, and builds PikoBuy purchase URLs.
- Do not store, pre-render, export, mirror, cache or seed products. Every card, image, price, view count, QC/gallery image and sort result is fetched from FindSpreadsheet for the live request.
- Search, categories and detail pages stay on the `pikobuy.nl` URL. Only the user-selected PikoBuy purchase action leaves the site.
- Languages: EN, DE, FR, ES, IT, PT, NL, PL and SV. The language selector preserves the current internal route/query; UI, SEO guide and FAQ text use the selected locale. Source product fields are passed through exactly as received.

## Next approved work

1. Monitor the FindSpreadsheet markup/API contract before changing parsers.
2. Add more category/guide landing pages only when every language has equivalent content.
3. Keep the internal proxy lightweight: no database, dashboard, generated images or duplicate inventory.
