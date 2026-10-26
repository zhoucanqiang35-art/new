# pikobuy.nl

Astro 7 static project for an independent PikoBuy discovery site.

## Commands

```bash
npm install
npm run check
npm run build
```

## Data boundary

FindSpreadsheet is the data source of truth. Do not add scraped, copied or generated product data to this project. Connect a documented JSON/API/export integration only through `src/lib/findspreadsheet.ts`.

## Deploy

The project lives in the repository directory `pikobuy-nl`. For a static host, publish `pikobuy-nl/dist` after `npm run build` from this directory. Set `PUBLIC_FINDSPREADSHEET_ORIGIN` only if the source origin changes.
