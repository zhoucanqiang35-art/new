# pikobuyspreadsheet.at — project memory

Updated: 2026-10-28

## Scope and ownership
- Build one platform and one domain per conversation: this project is the independent Pikobuy discovery site at https://pikobuyspreadsheet.at/.
- The FindSpreadsheet project is the sole source for products, images, QC media, categories, search, image search and sorting. Do not invent data, capabilities, QC, pricing or claims.
- Use the Pikobuy official logo and favicon, sourced and verified from https://www.pikobuy.com/. Clearly identify this site as independent; registration/order and platform operations happen on Pikobuy.
- User supplied referral registration: https://www.pikobuy.com/register?invitedCode=KPNJVF&inviteUserId=1109716
- Alternate registration: https://www.pikobuy.com/?mode=register&redirect=/home
- Use the referral registration URL for signup; verify it preserves both parameters through the actual registration flow. Do not assert it works until tested.
- User supplied product example: https://www.pikobuy.com/product/detail?productUrl=https://weidian.com/item.html?itemID=7872749666 . Build the nested URL from the actual upstream source marketplace and ID and encode it as a query parameter. The example establishes a Weidian pattern, not an ID conversion for other marketplaces.

## Research, 2026-10-28
- https://www.pikobuy.com/guide describes selecting listings, submitting links or keywords, first payment, warehouse inspection, and international shipping payment.
- https://www.pikobuy.com/home says users may submit links, images or sourcing requests; platform advertises buying, inspection and global shipping.
- https://www.pikobuy.com/shipping-cost asks for destination, product type, weight and dimensions; do not invent freight rates.
- Competitor https://pikobuy-sheet.net/catalog/ combines categories, keyword and image search, sorting, prices and QC links; https://pikobuy.to/spreadsheet groups items and references QC; https://pikobuyspreadsheetqc.com/ emphasizes QC. Competitor descriptions are not independent proof of claims.
- Candidate keyword clusters (observed SERP phrasing, not measured volume): primary “pikobuy spreadsheet”; secondary “pikobuy finds”, “pikobuy links”, “pikobuy spreadsheet with QC”, “pikobuy QC photos”, “how to use pikobuy”, “pikobuy shipping cost”; category terms for shoes, hoodies, jerseys. Validate demand through Search Console or a keyword tool before claiming search volumes.
- Suggested rollout: English homepage /, then /products/, category and product detail routes, followed by guides on ordering, QC and shipping. Unique useful content, canonical URLs, sitemap, truthful metadata, internal links and crawlable pagination.

## Technical decisions and open questions
- Astro current stable version should be verified and pinned at implementation. GitHub Pages supports prerendered static output (https://docs.astro.build/en/guides/deploy/github/); GitHub repository hosting alone does not supply SSR. Use SSG plus a verified supported search/image-search backend, or select a separate SSR hosting provider if the source requires it.
- The accessible repository zhoucanqiang35-art/new contains existing FindSpreadsheet export experiments. pikobuysheet-fi/export-findspreadsheet.mjs collects listings but initializes qcImages as empty; this is not a complete QC/image-search integration. pikobuy-nl/src/lib/findspreadsheet.ts demonstrates SSR-oriented scraping and keyword search, not proof that image search is supported cross-origin.
- Before implementing: locate canonical authoritative export or API and document schema, freshness, update schedule, search/sort/QC/image-search mechanisms, CORS/access and license/permissions. Confirm platform logo/favicon asset URLs; test referral redirect and product links end to end; verify target hosting, DNS and Pages configuration. Never substitute placeholders presented as real data.
- Preserve source identifiers and source marketplace links separately; a site's internal ID is not necessarily a Weidian item ID. Do not assume all items are Weidian.
- On failure, show a clear unavailable state; never silently claim search/QC is working.
- Project has not yet been implemented or deployed. This file records initial research and a working plan only.
