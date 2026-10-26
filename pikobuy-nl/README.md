# pikobuy.nl

Astro SSR project for an independent PikoBuy discovery site.

## Commands

```bash
npm install
npm run check
npm run build
```

## Data boundary

FindSpreadsheet is the data source of truth. Every product card, category, search, sort result, product gallery and QC image is requested live from it through `src/lib/findspreadsheet.ts`. Do not add a database, JSON product dump, cache, seeded product or placeholder image to this project.

## Deploy

The project lives in the repository directory `pikobuy-nl`. Deploy the Cloudflare worker emitted by `npm run build`; it uses SSR to call FindSpreadsheet at request time.
