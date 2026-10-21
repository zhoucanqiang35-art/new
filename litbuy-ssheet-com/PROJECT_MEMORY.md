# LitBuy Spreadsheet project memory

- Product catalogue, imagery and product identifiers are read-only exports from FindSpreadsheet; do not create a second product database.
- Internal catalogue pages must keep search, categories, product records and QC/media routes inside this subsite. Only LitBuy registration, purchase and official-policy links may be external.
- USD values use one shared market-reference module: `src/lib/currency.ts`. Current reference is **¥6.6814 per US$1**. All cards, search results, category results and product details must use `formatUsd`; never reintroduce per-page hard-coded rates.
- Product prices are reference conversions, not checkout quotes. Product detail pages must state that the final price is confirmed in LitBuy.
- Language selector supports English, German, French, Spanish, Italian, Portuguese, Dutch, Polish and Russian. It must preserve the current internal path and query parameters (especially product IDs, category and page) when switching.
- Do not use Google, Bing, DeepL or any runtime/automatic translation service. The language menu may only switch copy that is authored and stored inside this project.
- Product names, IDs, prices and source images are source data and must remain unchanged; do not translate or invent them. Long-form language editions must be separately authored before being offered as complete language versions.
- Current public preview: `https://litbuy-spreadsheet-preview.canqiangzhou32.chatgpt.site`.
