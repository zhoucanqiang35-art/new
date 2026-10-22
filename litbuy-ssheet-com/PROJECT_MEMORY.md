# LitBuy Spreadsheet project memory

- Product catalogue, imagery and product identifiers are read-only exports from FindSpreadsheet; do not create a second product database.
- Internal catalogue pages must keep search, categories, product records and QC/media routes inside this subsite. Only LitBuy registration, purchase and official-policy links may be external.
- USD values use one shared market-reference module: `src/lib/currency.ts`. Current reference is **¥6.6814 per US$1**. All cards, search results, category results and product details must use `formatUsd`; never reintroduce per-page hard-coded rates.
- Product prices are reference conversions, not checkout quotes. Product detail pages must state that the final price is confirmed in LitBuy.
- Language selector supports English, German, French, Spanish, Italian, Portuguese, Dutch, Polish and Russian. It must preserve the current internal path and query parameters (especially product IDs, category and page) when switching.
- Do not use Google, Bing, DeepL or any runtime/automatic translation service. The language menu may only switch copy that is authored and stored inside this project.
- Product names, IDs, prices and source images are source data and must remain unchanged; do not translate or invent them. Long-form language editions must be separately authored before being offered as complete language versions.
- Current public preview: `https://litbuy-spreadsheet-preview.canqiangzhou32.chatgpt.site`.

## 2026-10-22: source-of-truth architecture

- This site is a FindSpreadsheet-powered LitBuy discovery frontend. Its single catalogue, search, image-search, QC-media and sorting source is `https://findspreadsheet.com`.
- Do **not** keep a product export, local catalogue JSON, seeded product records, copied product/QC imagery, local search index, database, CMS, admin panel or mock task imagery in this project. If the upstream source is unavailable, the UI must show an honest unavailable state; it must never substitute invented content.
- The former local `public/data/findspreadsheet-export.json` and local promotional posters are legacy assets that must be removed during the source-adapter refactor, not refreshed.
- Astro uses latest-version hybrid rendering: SEO/editorial routes may be prerendered; all source-data routes are SSR and request FindSpreadsheet at render time via one read-only source adapter. The adapter may transiently cache a response at the edge but may not persist or own catalogue data.
- The subsite owns only LitBuy-specific UI copy, page structure and SEO editorial content. Product titles, IDs, prices, product photos and QC photos are displayed exactly as returned by FindSpreadsheet. UI/SEO translations are maintained per locale; source records are never machine-translated or invented.
- Every domain maps to exactly one isolated repository folder. Current LitBuy folder: `litbuy-ssheet-com/`. Do not mix platform assets, routes or content across folders.
- Official LitBuy visual identity (logo and browser icon) must use LitBuy official-origin assets. This is the narrow branding exception; it is not permission to store product images locally.
- Confirmed external LitBuy links: registration `https://litbuy.com/register`; product purchase URL template `https://litbuy.com/product/weidian/{productId}`.
