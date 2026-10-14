# PikoBuySheet Pro

Current blue-and-orange PikoBuy Spreadsheet source.

## Build

```bash
npm run build
npm run validate
```

The build combines `worker/catalog-data.js` and `worker/index.js` into `dist/_worker.js`. Cloudflare Pages Advanced Mode uses that Module Worker for every route. The product catalogue, Weidian ID mapping, QC image logic and the continuous original-ratio image presentation are included in the source.
