# Editorial record — tracking and parcel status support

**Published page:** `lolobuy-nl/dist/seo-articles.html`  
**Topic:** How to investigate a LoloBuy parcel status that is not updating  
**Last checked:** 2026-09-28 (UTC)

## Official-source check

- https://www.lolobuy.com/ — official public web application. Checked release `v1.0.1`, built 2026-09-24 05:37:13 UTC.
- https://www.lolobuy.com/assets/index-63dcc24c.js — official application bundle delivered on 2026-09-28. Confirmed current English labels for parcel statuses, package details, shipment tracking, in-site messages, feedback and eligible parcel-protection claim fields.
- https://www.lolobuy.com/assets/Parcel-6c6330a5.js — official parcel-list module. Used to verify the parcel workflow, status filtering and access to parcel records.
- https://www.lolobuy.com/assets/ParcelDetail-815a9f07.js — official package-details module. Used to verify package number, waybill number, shipping method, recipient, item list, estimated/final shipping data, logistics events and protection-service placement.
- https://www.lolobuy.com/assets/SessionCenter-7f916fcb.js — official session module. Used to verify private support conversations and transaction-aware messaging.
- https://www.lolobuy.com/assets/SessionDetail-203027c5.js — official message-detail module. Used to verify message composition and attachments.
- https://www.lolobuy.com/assets/StationMsg-80fd5569.js — official station-message module. Used to verify account notices and message records.
- https://www.lolobuy.com/assets/Feedback-d6299f78.js — official website-feedback module. Used to distinguish product feedback from parcel-specific transaction support.

## Editorial boundaries

- The article uses one narrow search intent: `LoloBuy parcel status not updating`.
- Parcel workflow status and carrier logistics events are described as separate records.
- An empty or unchanged tracking timeline is not described as proof of parcel loss.
- No delivery time, response time, carrier availability, claim eligibility, compensation amount or support outcome is stated.
- The protection/claim workflow is described only as a parcel-specific option when shown and applicable in the buyer's account.
- Source URLs remain in this repository note only. The published page has no outbound anchor links except FindSpreadsheet.
