# Editorial record — shipping and parcel consolidation

**Published page:** `lolobuy-nl/dist/seo-articles.html`  
**Topic:** How to consolidate LoloBuy warehouse items before international shipping  
**Last checked:** 2026-09-26 (UTC)

## Official-source check

- https://www.lolobuy.com/ — official public web application. Checked release `v1.0.1`, built 2026-09-24 05:37:13 UTC.
- https://www.lolobuy.com/assets/index-63dcc24c.js — official application bundle delivered on 2026-09-26. Confirmed current English labels for the warehouse, parcel submission, address, declaration, rehearsal and freight-estimate flows.
- https://www.lolobuy.com/assets/Stored-4f097366.js — official warehouse module. Used to verify selecting stored items for parcel submission and the separate rehearsal action.
- https://www.lolobuy.com/assets/SubmitParcel-28c05488.js — official parcel-submission module. Used to verify address selection, packaging and value-added services, delivery-line selection, parcel summary, declaration fields, notices and live fee presentation.
- https://www.lolobuy.com/assets/Rehearsal-32ebef1f.js — official rehearsal-record module. Used to verify rehearsal item lists, intended route, weight, dimensions, packaging details, status and the path from a completed rehearsal to real parcel submission.
- https://www.lolobuy.com/assets/previewSubmitApply-5bd28f9a.js — official rehearsal submission module used by the current parcel workflow.
- https://www.lolobuy.com/assets/deliveryLineTags-03575207.js — official route-label module. Used to confirm that delivery lines can expose route features and parcel restrictions.

## Editorial boundaries

- The article uses one narrow search intent: `LoloBuy parcel consolidation`.
- Rehearsal is described as a simulation/pre-packing service, not a real shipment, and its package data remains an estimate until actual outbound packing.
- No shipping price, service price, delivery time, storage period, route availability, protection outcome, customs result or tax outcome is stated.
- The article does not recommend false declarations, hidden product characteristics or unsupported tax treatment.
- Packaging, value-added services, route eligibility and protection are described as dependent on the live parcel form.
- Source URLs remain in this repository note only. The published page has no outbound anchor links except FindSpreadsheet.
