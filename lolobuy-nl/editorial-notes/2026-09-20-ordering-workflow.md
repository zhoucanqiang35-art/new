# Editorial record — ordering workflow

**Published page:** `lolobuy-nl/dist/seo-articles.html`  
**Topic:** How to order on LoloBuy from product selection to warehouse arrival  
**Last checked:** 2026-09-20 (UTC)

## Official-source check

- https://www.lolobuy.com/ — official public web application. Checked release `v1.0.1`, built 2026-09-17 07:54:18 UTC.
- https://www.lolobuy.com/assets/index-b9265503.js — official application bundle delivered on 2026-09-20. Confirmed routes and current interface labels for product detail, manual ordering, shopping cart, confirm order, order payment, order details and parcel submission.
- https://www.lolobuy.com/assets/ProductDetail-1b55d6a6.js — official product-detail module. Used to verify product/SKU selection context and the product-price disclaimer shown through the application translations.
- https://www.lolobuy.com/assets/ProductSkuSelect-aaf135ee.js — official SKU-selection module. Used to verify that product variants and prices are selected as combinations.
- https://www.lolobuy.com/assets/Cart-231b9b5a.js — official cart module. Used to verify item totals, freight to warehouse and specification editing.
- https://www.lolobuy.com/assets/ConfirmOrder-7f17f498.js — official confirmation module. Used to verify sending-country selection, purchase remarks, product total, domestic freight, value-added service fee, discounts and the notice that international freight is calculated separately.
- https://www.lolobuy.com/assets/ManualOrder-f1f159ca.js — official manual-order module. Used to verify manual ordering with Buy Now and Add to shopping cart actions.

## Editorial boundaries

- The article uses one narrow search intent: `how to order on LoloBuy`.
- Product ordering and international parcel submission are described as separate stages.
- No price, domestic-freight amount, service fee, exchange rate, delivery time or stock outcome is stated.
- The article does not claim that an order remark overrides the selected SKU or seller listing.
- Order statuses are described as interface categories, not promised processing times.
- Source URLs remain in this repository note only. The published page has no outbound anchor links except FindSpreadsheet.
