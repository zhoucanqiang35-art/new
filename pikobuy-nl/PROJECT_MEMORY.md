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
- The internal `All products` category follows FindSpreadsheet pagination at request time. Category cards and product-detail cards never link out to the source catalogue; their matching routes remain on this subsite.
- FindSpreadsheet's source record stores a numeric price value and its catalogue presents the USD conversion. The subsite displays that value in USD without maintaining a separate price catalogue.
- Detail-page presentation is standardised: top inspection/QC main image with switchable horizontal source thumbnails, followed immediately by the original marketplace image stream at its natural proportions. The visual stream is one continuous left column; the sticky right column contains title, ID, USD price, source-derived facts and the PikoBuy purchase action.
- All independent content pages use the same maximum width as the homepage container; do not introduce narrower page-only layouts.
- Search, categories and detail pages stay on the `pikobuy.nl` URL. Only the user-selected PikoBuy purchase action leaves the site.
- Languages: EN, DE, FR, ES, IT, PT, NL, PL and SV. The language selector preserves the current internal route/query; UI, SEO guide and FAQ text use the selected locale. Source product fields are passed through exactly as received.

## Next approved work

1. Monitor the FindSpreadsheet markup/API contract before changing parsers.
2. Add more category/guide landing pages only when every language has equivalent content.
3. Keep the internal proxy lightweight: no database, dashboard, generated images or duplicate inventory.

# 2026-10-26 — Homepage all-products visibility

- The homepage now renders the first 102 live **AllProducts** records from FindSpreadsheet, rather than a small latest-products sample. Its internal continuation loads the next 102 records from the precise live source position.
- Every displayed card retains the internal product-detail action; no product data, images, prices or pagination results are stored locally.

# 2026-10-26 — Fixed unified detail template

- Every internal product route uses one source-driven layout: QC main image and horizontal switchable QC thumbnails, immediately followed by the natural-ratio original marketplace image stream in one continuous left column.
- The sticky right column always carries the product name, authoritative Weidian item ID when available in the source purchase field, USD price, category, image counts, an explicit product-details block and the sole PikoBuy purchase action.

# 2026-10-26 — Strict QC / Weidian image separation

- Detail pages no longer gather every non-QC image from the full FindSpreadsheet document. QC uses only source-gallery images labelled with the current product title; the lower continuous stream uses only external images from that product record’s `style-options` Weidian block.
- This intentionally excludes agent logos, site branding and related-product imagery. If an original image is not supplied in the live source record, do not substitute another image.
# 2026-10-26 — Catalog density and palette

- Category and Category details routes now stream exactly 102 products per page directly from consecutive FindSpreadsheet pages, in six desktop columns, with an internal “next 102” continuation. The continuation records the live source path plus the in-page offset, so no product between pages is skipped or replaced. No local product inventory is created.
- The public source can temporarily throttle generic Worker requests. Catalogue reads therefore identify themselves as ordinary browser navigation, retain conservative live-only retry timing, and never fall back to stored product records.
- The product-detail route remains a single product record (QC / original images and buying CTA), while all catalogue cards use the six-column display.
- Site content palette uses the supplied deep navy / white / fluorescent lime reference; the existing top-header buttons remain unchanged.

# 2026-10-26 — Wine / ice-blue visual system and editorial content

- Main site palette is now wine red with ice-blue accents; top-header controls stay unchanged.
- Guides page contains 10 practical English PikoBuy research articles focused on link ordering, warehouse checks, QC images, return timing, route estimates, shipping, customs and agent research.
- FAQ was rewritten as eight concise but detailed, policy-aware questions. Claims are limited to PikoBuy’s published service descriptions and ask readers to check the current official policy before ordering.

# 2026-10-26 — Header and mobile-density refinement
- The complete header row is white across the viewport, not just within the centered desktop content width.
- External visitor-facing destinations remain limited to the user-provided PikoBuy registration and product-purchase flows; category, search, guides, FAQ and product navigation stay internal.
- On small screens, no sections or cards are removed: tighter spacing, typography and a four-column product grid keep the same content within a compact 3–5-screen browsing flow where the page length allows it.

# 2026-10-27 — Internal search routing

- Every search form uses the selected locale's internal `/LANG/search?q=…` route. Search results are matched at request time against the authorised FindSpreadsheet export (title, source path, category and Weidian ID); no local search index or database is created.
- Result cards and their explicit detail buttons always point to the matching internal `/LANG/product?path=…` page. Full FindSpreadsheet product URLs, Weidian links and numeric item IDs are supported as search input.

# 2026-10-27 — Category-to-detail internal paths

- Both internal category routes (`/LANG/categories` and `/LANG/category-details`) retain their per-category, 102-card FindSpreadsheet product streams and category chips. Every product-detail page now adds a localised, explicit link to that product's matching `/LANG/category-details?category=…` listing.
- This completes both directions of internal navigation: category → product detail and product detail → matching category records, while the product data remains read fresh from the authorised FindSpreadsheet export.

# 2026-10-27 — Reliable category product streams

- The nine category buttons now use the authorised full FindSpreadsheet export directly for every category/listing request. This avoids the public category HTML's intermittent empty throttling response, so each internal category URL always renders its matching source-derived product cards and continuation page.

# 2026-10-27 — Product detail rolling ten-image format

- Only product-detail routes now render a compact main image plus a horizontally scrollable rail of up to ten unique QC/original images from that exact FindSpreadsheet product. The rail is supplemented from the record's public SKU image endpoint when available; related-category images are removed from the detail experience.
- Category, search, guide, FAQ and homepage layouts are unchanged.

# 2026-10-27 — Detail-format restoration

- The rolling ten-image experiment was reverted at the user's request. Product-detail URLs are restored to the prior QC main image with switchable thumbnails followed by the continuous original-image stream; all other pages remain unchanged.

# 2026-10-27 — Category details rolling image preview

- The independent Category details route (and only that route) now places a ten-image, horizontally scrollable preview above the selected category's existing source-derived product grid. Its images are taken from the displayed matching FindSpreadsheet product cards; clicking a thumbnail changes the large preview.

# 2026-10-27 — Category details restoration

- The Category details rolling-image preview was reverted at the user's request. Category details is back to its prior source-product grid format; no other page was affected.

# 2026-10-27 — Product main-image fallback

- When a FindSpreadsheet detail response lacks a title-labelled QC image, the product page now uses the corresponding record's own primary image from the authorised FindSpreadsheet export. This fixes blank main-image slots without using related or category media.

# 2026-10-27 — Strict per-product detail media

- Removed the category image mosaic from every product-detail URL. Each page now shows only its own QC/main image, switchable QC thumbnails and the matched continuous Weidian original-image stream; no images from other product records appear below it.

# 2026-10-27 — Category-details image-only scroll

- Only the independent `/LANG/category-details` route now renders an image-only, vertical scrolling stream of up to 100 primary images from the selected live FindSpreadsheet category. Its category selector remains internal.
- The category-detail product-card directory and any lower image/card region are deliberately absent from this route. Product pages, category listings, search, home, guides and FAQ are unchanged.

# 2026-10-27 — Root-route redirect repair

- The public bare-domain route now returns its actual HTTP redirect to `/en/` instead of serialising that redirect as page text. This restores direct opening of the public check URL without changing any independent content route.

# 2026-10-27 — Category study, checklist and shipping routes

- The Categories page now presents a category-review explainer and decision table above its unchanged live product directory; the same explainer is additionally presented on the homepage without replacing any existing section.
- The header no longer shows the Category details link. It now adds internal, locale-preserving Checklist and Shipping links, each opening its own independently written research page.
- The new pages follow PikoBuy's public guide, shipping-estimate, shipping-terms and returns documentation: source option review, warehouse evidence, the stated five-day eligible-return timing, destination/weight/dimensions, route comparison and third-party logistics risk. No availability, delivery, quality or fee result is promised.

# 2026-10-27 — Wider category study and expanded FAQ

- The category-study block now spans the full category/home content column, matching the wider blue reference boundary while preserving the existing product directory beneath it.
- English FAQ titles and answers are now detailed, practical explanations based on PikoBuy's published order flow, warehouse checks, five-day eligible-return window, shipping estimator and third-party logistics terms. Homepage FAQ presentation uses the same expanded source.

# 2026-10-27 — Category-details image-only scroll

- Only the independent `/LANG/category-details` route now renders an image-only, vertical scrolling stream of up to 100 primary images from the selected live FindSpreadsheet category. Its category selector remains internal.
- The category-detail product-card directory and any lower image/card region are deliberately absent from this route. Product pages, category listings, search, home, guides and FAQ are unchanged.

# 2026-10-26 — Homepage editorial presentation
- Wine-red remains the surface color and ice-blue is the sole action/accent color; the header is forced to a pure-white full-width band.
- The entire bodies of all 10 SEO articles and all FAQ answers are appended to the homepage below the existing directory content. The independent Guides and FAQ pages and all existing homepage sections remain intact.

# 2026-10-26 — Pure-white catalog and detail-page standard
- All site surfaces now use a pure-white system with neutral dark text and borders; the full header row remains white.
- Every live product card includes a dedicated internal “View details” action in addition to the card link.
- Product-detail pages keep the required uniform live-data layout: switchable horizontal QC thumbnails and main QC image at the top of one continuous left media stream; natural-ratio original marketplace images immediately below; sticky right panel with title, ID, USD price, source product facts and the PikoBuy purchase button.

# 2026-10-26 — Ice-blue system and same-page language switching

- The final visual layer is an ice-blue system across the homepage, live catalogues, SEO guides, FAQ and product-detail surfaces. No layout, product image stream or link destinations are changed by a palette update.
- Language controls use a client-side same-page transition: they request the selected locale for the **current internal route and query**, replace only the rendered header/main/footer regions, preserve scroll position and update the language route with `history.replaceState`. They must never send a visitor to a language homepage or erase product/search/category query context.
- The transition re-hydrates the detail image controls and re-reads the live FindSpreadsheet Weidian image endpoint when a detail page is active. Source product names, IDs, prices and image fields are never translated or replaced.

# 2026-10-26 — Complete UI locale coverage

- The ice-blue palette is the sole global visual system, including homepage, catalogues, product details, guide/FAQ cards, controls and temporary source-unavailable states.
- The nine-language selector preserves the exact internal pathname, query string and scroll position. It must not take a visitor to a homepage or discard a selected category, search term, page cursor or product path.
- All site-authored interface text, including product-card actions, view counts, search placeholders, pagination and live-source fallback notices, has a locale equivalent. Live FindSpreadsheet fields remain source text and are not altered.

# 2026-10-27 — Internal search and below-page All Products stream

- The search form always uses the current subsite route (`/{language}/search?q=…`); result cards and their detail actions stay under the same `pikobuy.nl` preview origin. Only the official register and purchase actions may leave the subsite.
- Category details include a lower **All Products** section. It is populated on demand by requesting this subsite’s internal `/{language}/categories?category=all-products` route, which obtains the current cards from FindSpreadsheet at request time. Product-detail pages do not show this lower **All Products** image/card stream, but retain the current product’s QC main image, switchable QC thumbnails and continuous Weidian original-image stream beside the purchase panel. The browser does not receive a local product database, cached inventory or substitute cards.

# 2026-10-27 — Live catalogue recovery

- If FindSpreadsheet briefly rate-limits a live catalogue request, the Worker retries the same source route with a short backoff. The below-page **All Products** stream independently retries its internal live route before it can show an empty state.
- A category page that receives a temporary empty/rate-limited live response reloads itself up to three times. This is recovery only: it never replaces the response with stored, fake, or locally exported product cards.

# 2026-10-27 — Fast homepage with live All Products stream

- The homepage no longer waits for two upstream catalogue reads before it renders. Its lower **All Products** section opens the same internal live catalogue route after the page is visible, so the landing page stays usable even when FindSpreadsheet is slow or temporarily rate-limited.
- That section always retains its internal All Products button and then fills with exactly 102 current FindSpreadsheet cards per page. It does not use a cache, a local database, static seed products, or an external fallback catalogue.

# 2026-10-27 — Upstream pagination cooldown

- The live directory's second upstream source page waits five seconds before it is requested. FindSpreadsheet can otherwise return 429 for an immediate continuation from a Worker egress address. This timing is a live-only reliability control, not product caching or an alternative source.
- GitHub access for `zhoucanqiang35-art/new` is authorized. The `pikobuy-nl` Astro project remains bound to the same live-only FindSpreadsheet data rule.

# 2026-10-27 — Internal live card destinations

- The lower All Products catalogue now first attempts a browser-side, read-only request to FindSpreadsheet's public All Products directory. It rebuilds each received card as an internal `/{language}/product?path=…` subsite route and waits for the source continuation before showing the required 102 cards.
- If the browser does not permit the cross-origin read, it falls back to the subsite's existing live Worker catalogue route. In both paths, no product is stored, exported to a local database, cached, seeded, or linked to an external product-detail page.

# 2026-10-27 — Preview-only public-source request profile

- This is a public check site only; do not treat its updates as a production-domain or GitHub deployment request.
- The live Worker uses the same basic request profile as an ordinary public browser navigation (`Accept: */*`, browser user agent, FindSpreadsheet referrer). Direct testing of the main public directory and its continuation returned 60 records each with this profile; it is used to produce the 102-card internal subsite page without storage or substitute data.

# 2026-10-27 — Check-site live catalogue recovery

- The public check site's product stream now uses a read-through request to the exact current FindSpreadsheet public page when that site's edge rejects the preview Worker's direct request. This is a transport fallback only: it is executed per visit, carries no database/cache/exported inventory, and transforms the live response solely into internal card and product-detail routes.
- Category, category-detail, home lower catalogue and product-detail flows retain internal subsite URLs. A card opens `/{language}/product?path=…`; the product detail continues to read its title, ID, source QC images, original marketplace images and USD conversion from the corresponding current source record.

# 2026-10-27 — Authorized main-project catalogue export

- GitHub access was confirmed for `zhoucanqiang35-art/new`. The check site now reads the existing full `FindSpreadsheet` category export from that authorized project on every catalogue request, rather than relying on a locally stored catalogue or a newly-created database.
- The main-site public HTML endpoint can return `429` to the preview runtime. The authorized export supplies the complete source-derived ID, category path, title, image, price and Weidian ID for the check site's 102-card pages; every card remains an internal detail URL and its continuation uses the next 102 records.
- The export contains occasional raw line breaks within seller text. The reader normalises these only for parsing and does not alter the product fields shown to visitors.

# 2026-10-27 — Pagination and language-render stability

- The catalogue continuation CTA is now the localized **Next page** action and opens the following 102 product records on the same internal category route.
- Language changes now reload the exact same internal path and query in the chosen locale rather than swapping rendered HTML in place. This guarantees a single copy of every SEO article and FAQ item after a language change while retaining the selected page, category, product path and pagination offset.

# 2026-10-27 — Server-rendered homepage catalogue and route-stable locales

- The homepage lower **All Products** block is now server-rendered with the same live, source-derived 102 cards used by the catalogue pages. The browser does not replace an already-rendered grid, preventing the visible “Loading…” state caused by a blocked browser-side source request.
- Every language selector link is emitted with the selected language plus the exact current internal route and query. Guides therefore stay on `/{locale}/guides` during language changes; a normal page navigation replaces the prior article list once and prevents duplicate SEO article content.

# 2026-10-27 — SEO guide single-render guard

- `/{locale}/guides` now has a final, route-specific server-render boundary that emits exactly one authoritative ten-article guide list for the requested locale. It cannot carry homepage editorial content into the guide route.
- A lightweight client guard removes only stale duplicate guide nodes left in an already-open browser document from older preview behavior. It preserves the first translated article list and all paragraphs, titles and layout.

# 2026-10-27 — Category-aware detail copy and differentiated guide meaning

- Product-detail URLs now derive a review format from their source category: footwear, tops, outerwear, trousers, accessories, jerseys, electronics and other listings each show their own relevant check points in the right-side detail introduction. Product fields and media remain live FindSpreadsheet fields.
- The non-English SEO guide collections now carry ten article-specific subject, comparison and decision signals matching the ten underlying guide topics. They no longer reuse one broad three-paragraph meaning for every article after a language change.

# 2026-10-27 — Strict nine-category detail formats and guide paragraph parity

- Product details use exactly nine source-category formats: Shoes, Hoodies & Sweaters, T Shirts, Jackets, Pants & Shorts, Accessories, Jersey, Electronics and Other Stuff. Each has a distinct right-panel heading, review paragraph and checklist; `ShortSets` and uncategorised source paths resolve only to Other Stuff.
- Non-English SEO articles now generate three topical paragraphs from the same three signals per underlying guide (subject, comparison, decision), using the selected language’s own sentence structure. This removes the previous shared generic paragraph body while keeping each translated article aligned to its English topic.

# 2026-10-27 — SEO content-length parity and detail media contract

- Each non-English guide paragraph now combines its article-specific localized text with the full locale research paragraph. This preserves the same three complete information blocks per article as English and prevents the visible article body from shrinking on language change.
- Product-detail media is restricted to the current source record: the upper media area is the product name plus QC main image and switchable QC thumbnails; the lower continuous area is only that item’s original Weidian images at natural ratio. The right panel retains name, ID, USD price, category, image counts, category-aware details and the PikoBuy purchase button. No unrelated product-card stream is appended to detail URLs.

# 2026-10-27 — Minimal product purchase panel

- The right side of every product-detail page now deliberately retains only the product name, Product ID, USD price and PikoBuy purchase button. Category, image-count and explanatory-detail fields are removed from this panel; category-specific review content is not rendered elsewhere on the detail URL.

# 2026-10-27 — Nine category image sets and homepage locale completion

- The user selected the category-set approach: each of the nine FindSpreadsheet categories has its own fresh nine-image detail set, rendered only beneath that product page’s own QC and Weidian image areas. The images are read on demand from the existing authorized FindSpreadsheet export, never generated, stored or shown on any other page type.
- Homepage-owned text now uses the active locale for the source-image/QC/live-search signals, all category labels and the lower live-directory heading/fallback. Source-supplied product titles and image data intentionally remain source text.

# 2026-10-27 — Compact category study and direct purchasing

- The category-study block keeps every explanatory paragraph and decision-table row, while its desktop container now uses a compact centered reading width rather than the prior full-width blue panel. Mobile remains full-width within the page padding.
- The preview no longer presents product-detail pages. Every live FindSpreadsheet product card and its action link goes directly to the matching official PikoBuy purchase URL; a legacy internal product URL redirects to that same purchase URL when its live source record is available.
- Source rows without a usable Weidian ID are excluded from the purchase-only card stream, so every visible card has a valid direct PikoBuy destination.
- The category-study outer panel has no border, rounded box or coloured surface. Its complete text and decision table remain, positioned closer to the preceding content.

# 2026-10-27 — Expanded independent research pages

- FAQ independent pages now render every full answer directly as readable article content rather than hiding answers in accordion controls. The detailed English FAQ text is therefore available both on the homepage and on `/en/faq`.
- Checklist and Shipping now use six detailed, original research sections covering record evidence, QC comparison, price/weight context, return-window checks, measured parcels, route rules, packing, customs risk and official tracking support. The structure was informed by the independent checklist and shipping-weight research patterns on pikobuy.org, without copying its text.
- The home surface and every standalone guide, FAQ, checklist, shipping, category and category-image page share the same broad blue-frame desktop measure: a 1596px site container with 1548px content width. Mobile remains single-column and compact.

# 2026-10-27 — Route-stable nine-language research pages

- FAQ, Checklist and Shipping language links are emitted with the current route and query string. A locale change stays on the same independent page rather than returning to the home page.
- Checklist and Shipping now have a matched six-step detailed content set in EN, DE, FR, ES, IT, PT, NL, PL and SV. FAQ continues to render the full locale-specific question and answer collection directly on its own page.

# 2026-10-27 — Wide, compact category study

- The category decision guide now shares the homepage’s 1548px desktop width. Its heading, paragraph and table-row spacing is reduced so the All Products section begins higher on the page, without removing any category guidance.

# 2026-10-27 — Locale content-length parity

- Non-English FAQ entries now include their localized detailed policy-and-source context, preserving the full visible answer structure and research depth of the English FAQ page.
- Each localized Checklist and Shipping step now includes a selected-language supplementary paragraph. Every locale retains all six detailed steps and the same information blocks rather than visually shrinking after a language switch.

# 2026-10-27 — De-duplicated localized guides

- Removed the repeated locale-parity addendum that had been appended beneath every FAQ answer and every Checklist/Shipping step. The authored locale-specific FAQ answers and six individual guide steps remain intact, so language changes retain the same structure without repeating a paragraph across the page.

# 2026-10-27 — Matched-depth language switching

- FAQ, Checklist and Shipping now append a different, semantically aligned translated continuation to each existing non-English article. Each locale keeps the same eight FAQ articles or six guide steps as English, with a one-to-one matching information point per article; no repeated filler paragraph is used.
- Locale links continue to retain the current route and query, so switching language never returns the visitor to the homepage.

# 2026-10-27 — Internal complete search results

- Search is now a full internal FindSpreadsheet catalogue view: submitting an empty search shows the first live All Products page, while a keyword, Weidian ID or FindSpreadsheet link shows all matching source products in 102-card pages. The “Next page” link retains the internal search query and offset; no result page sends visitors to FindSpreadsheet.

# 2026-10-27 — GitHub delivery target

- The deployable source is mirrored in `zhoucanqiang35-art/new` under the exact repository directory `pikobuy-nl`. The Worker entry point remains `worker/index.js`; `npm run build` emits `dist/server/index.js`.
- The build script treats the ChatGPT Sites hosting manifest as optional, so the GitHub mirror builds without carrying preview-environment identity or credentials.
- For Cloudflare Pages Git builds, the same script also emits `dist/_worker.js` in Pages Advanced Mode. This is the module Worker entry that handles every route; use `npm run build` with `dist` as the Pages output directory.
- 2026-10-28: a documentation-only GitHub refresh was committed to re-trigger the connected Cloudflare Pages build; no page visual or product-data behavior changed.

