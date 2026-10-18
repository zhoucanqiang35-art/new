# Editorial record — LoloBuy product-link manual order

**Published page:** `lolobuy-nl/dist/seo-articles.html`  
**Topic:** What buyers should check when a product link does not load and LoloBuy opens Manual Order  
**Search intent:** `LoloBuy product link not working`  
**Last checked:** 2026-10-18 (UTC)

## Official-source check

- https://www.lolobuy.com/ — official public web application. Checked release `v1.0.1`, built 2026-10-16 06:13:24 UTC.
- https://www.lolobuy.com/assets/index-61dbe698.js — official application bundle. Verified current routes and English interface strings for product search, product detail, Manual Order, cart, Confirm Order, payment, orders and customer messages.
- https://www.lolobuy.com/assets/SearchInputMain-42868fa9.js — official search-input module. Verified that the main search accepts trimmed product links or product names and routes the submitted value through product-detail handling.
- https://www.lolobuy.com/assets/ItemSearch-d568952c.js — official item-search module. Verified that recognized URLs are routed to product detail and that a failed eligible URL search can fall back to Manual Order.
- https://www.lolobuy.com/assets/ProductDetail-d7652716.js — official product-detail module. Verified that a product-detail request failure redirects the source URL to Manual Order.
- https://www.lolobuy.com/assets/ManualOrder-e1751a1f.js — official manual-order module. Verified required fields for product link, name, specifications, commodity price, freight to warehouse and quantity; URL validation; optional single image; arithmetic total; disclaimer acknowledgement; and Add to shopping cart / Buy now actions.
- https://www.lolobuy.com/assets/Cart-9c2e92cf.js — official cart module. Verified shop grouping, quantity editing, selection, product subtotal, warehouse freight and routing of selected item IDs to Confirm Order.
- https://www.lolobuy.com/assets/ConfirmOrder-89f2c42e.js — official confirmation module. Verified product data, quantity, value-added services, domestic-freight total and the interface notice that international freight is calculated separately.

## Editorial boundaries

- The article covers one narrow intent: checking and manually rebuilding an order when LoloBuy does not load a product link normally.
- Automatic parsing failure is not described as proof of seller rejection, stock status, purchasing eligibility or payment outcome.
- Manual fields are based on the current official form; no price, service fee, delivery time, processing time or availability result is stated.
- The displayed manual total is described only as unit price multiplied by quantity plus freight to warehouse, matching the current client-side form logic.
- Seller-to-warehouse freight and later international parcel freight are treated as separate stages.
- Source URLs remain in this repository note only. Published outbound anchors remain limited to FindSpreadsheet.
