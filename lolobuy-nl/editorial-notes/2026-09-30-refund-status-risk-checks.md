# Editorial record — refund status and risk checks

**Published page:** `lolobuy-nl/dist/seo-articles.html`  
**Topic:** How to interpret a LoloBuy refund status and trace the correct bill  
**Last checked:** 2026-09-30 (UTC)

## Official-source check

- https://www.lolobuy.com/ — official public web application. Checked release `v1.0.1`, built 2026-09-29 10:01:27 UTC.
- https://www.lolobuy.com/assets/index-c6a49fec.js — official application bundle delivered on 2026-09-30. Confirmed the current English bill statuses, transaction subjects, account-balance labels, order/parcel payment messages and security fields.
- https://www.lolobuy.com/assets/Bill-fda502a4.js — official bill module. Used to verify transaction history, business/transaction numbers, payment records, amounts, account-balance history and withdrawal separation.
- https://www.lolobuy.com/assets/OrderDetail-1ac620b1.js — official order-detail module. Used to verify order references and the return/refund workflow context.
- https://www.lolobuy.com/assets/ParcelDetail-e8996017.js — official parcel-detail module. Used to distinguish parcel transactions and final parcel information from product-order transactions.
- https://www.lolobuy.com/assets/PayFinish-0d52e786.js — official payment-result module. Used to verify order, parcel and account-balance payment result destinations.
- https://www.lolobuy.com/assets/BillWalletSummaryCard-c610cb86.js — official bill-wallet summary module. Used to verify that account balance and transaction history are separate from external payment statements.

## Editorial boundaries

- The article uses one narrow search intent: `LoloBuy refund status`.
- Order refund, parcel refund, original return, account balance and balance withdrawal are treated as separate transaction types.
- `Pending refund` is not described as money already received; `Completed` is not treated as proof that an external provider has posted the credit.
- No refund time, fee, exchange rate, seller outcome, withdrawal availability or support result is stated.
- The article discourages duplicate payment/refund actions and disclosure of passwords, verification codes or full payment details.
- Source URLs remain in this repository note only. The published page has no outbound anchor links except FindSpreadsheet.
