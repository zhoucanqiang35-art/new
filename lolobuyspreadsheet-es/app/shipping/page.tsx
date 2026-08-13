import type { Metadata } from "next";
import ArticleShell from "../article-shell";

export const metadata: Metadata = {
  title: "LoloBuy Shipping Guides | Weight, Routes, Rehearsal and Customs",
  description:
    "Independent, dated guides to LoloBuy shipping estimates, delivery-line checks, rehearsal packing, customs declarations and tracking exceptions.",
};

const guides = [
  {
    label: "01 / Estimate",
    title: "Shipping estimator and billable weight",
    href: "/shipping/lolobuy-shipping-estimator/",
    text: "Turn destination, restrictions, scale weight and package dimensions into a route-comparison record without inventing one universal formula.",
  },
  {
    label: "02 / Route",
    title: "Delivery lines and restrictions",
    href: "/shipping/lolobuy-delivery-lines/",
    text: "Compare eligibility, limits, timing language, tracking and fee details before treating the cheapest displayed line as the best choice.",
  },
  {
    label: "03 / Packing",
    title: "Rehearsal packing",
    href: "/shipping/lolobuy-rehearsal-packing/",
    text: "Understand what simulated pre-packing can clarify, what it cannot guarantee and when a measured result can change the route decision.",
  },
  {
    label: "04 / Declaration",
    title: "Customs declaration and tax fields",
    href: "/shipping/lolobuy-customs-declaration-tax/",
    text: "Prepare accurate English item names, quantities, weights and declared costs while keeping customs outcomes separate from platform estimates.",
  },
  {
    label: "05 / Delivery",
    title: "Tracking and delivery exceptions",
    href: "/shipping/lolobuy-tracking-exceptions/",
    text: "Read parcel status and logistics evidence, record abnormal tracking and understand why redelivery, return and compensation cannot be assumed.",
  },
] as const;

export default function ShippingHubPage() {
  return (
    <ArticleShell
      eyebrow="Shipping research centre · Reviewed 13 August 2026"
      title="Five shipping decisions, kept separate on purpose"
      lead="A single shipping article cannot responsibly answer every question. Estimation, route eligibility, packing, customs and delivery exceptions depend on different evidence, so this library gives each decision its own factual page."
      ctaTitle="Start with the complete parcel workflow"
      ctaText="Use the parcel-submission guide when you need the end-to-end sequence before opening a specialised shipping page."
      ctaHref="/guides/lolobuy-parcel-submission/"
      ctaLabel="Read the parcel workflow →"
    >
      <div className="article-meta">
        <span>Official application reviewed: 13 Aug 2026</span>
        <span>Release observed: 1.0.1</span>
        <span>Independent editorial guidance</span>
      </div>

      <div className="article-note">
        <strong>Evidence boundary:</strong> LoloBuy’s current application exposes freight-estimate, rehearsal, parcel-submission and parcel-detail surfaces. Their fields show which inputs and decisions the interface can support. They do not establish one permanent rate, one universal volumetric divisor, guaranteed delivery, guaranteed customs treatment or identical services for every route.
      </div>

      <h2>Choose the question you are actually trying to answer</h2>
      <div className="article-index">
        {guides.map((guide) => (
          <a href={guide.href} key={guide.href}>
            <small>{guide.label}</small>
            <strong>{guide.title}</strong>
            <span>Read →</span>
            <p className="article-summary">{guide.text}</p>
          </a>
        ))}
      </div>

      <h2>The observed LoloBuy shipping sequence</h2>
      <figure className="evidence-figure">
        <div className="decision-flow">
          <div><small>01 / ESTIMATE</small><strong>Test the parcel</strong><p>Destination, restrictions, warehouse, weight and dimensions shape the route result.</p></div>
          <div><small>02 / PACK</small><strong>Clarify the size</strong><p>Rehearsal can provide a pre-packed weight and measurement result before a real parcel.</p></div>
          <div><small>03 / SUBMIT</small><strong>Choose and declare</strong><p>Address, packaging, delivery line, declarations, notices and charges are reviewed together.</p></div>
          <div><small>04 / FOLLOW</small><strong>Track the parcel</strong><p>Parcel details, logistics status and waybill information become the delivery record.</p></div>
        </div>
        <figcaption>Independent workflow map based on route definitions and interface labels in LoloBuy’s production application reviewed 13 August 2026. Availability and fields can vary by transaction.</figcaption>
      </figure>

      <h2>What a reliable shipping record should contain</h2>
      <table className="evidence-table">
        <thead><tr><th>Record</th><th>Why to save it</th><th>What it does not prove</th></tr></thead>
        <tbody>
          <tr><td>Destination and selected address</td><td>Route eligibility and customs handling depend on where the parcel is going.</td><td>That an address format accepted by a form guarantees successful delivery.</td></tr>
          <tr><td>Included items and restrictions</td><td>One restricted item can change which lines accept the whole parcel.</td><td>That another parcel with a similar item will receive the same options.</td></tr>
          <tr><td>Weight and three dimensions</td><td>Actual and volumetric measures can produce different route comparisons.</td><td>That an estimate is the warehouse’s final packed measurement.</td></tr>
          <tr><td>Route name, notices and limits</td><td>It preserves the conditions attached to the line at selection time.</td><td>A permanent delivery-time or redelivery guarantee.</td></tr>
          <tr><td>Declaration and fee breakdown</td><td>It shows what was submitted and which charge components were displayed.</td><td>Final customs assessment or a universal fee schedule.</td></tr>
          <tr><td>Parcel number, waybill and tracking events</td><td>It connects platform status with carrier movement and support enquiries.</td><td>That every tracking pause is a loss or every scan predicts a delivery date.</td></tr>
        </tbody>
      </table>

      <h2>Why the pages avoid fixed promises</h2>
      <p>A shipping quote is a transaction-specific observation. Destination, parcel contents, packed dimensions, route restrictions and conditional fees can all change the result. Even the existence of a label such as fuel fee, operation fee, customs-related fee, value-added service fee, tax or discount does not mean that every component is charged on every parcel.</p>
      <p>For the same reason, these guides do not publish a universal storage period, insurance promise, compensation amount or delivery guarantee without a stable, current official statement tied to the scenario. When the answer appears only inside a live quote or parcel record, the transaction record is the better evidence.</p>

      <div className="source-footnotes">
        <h2>Primary source reviewed</h2>
        <ol>
          <li><a href="https://www.lolobuy.com/" target="_blank" rel="noopener noreferrer">LoloBuy official web application</a>, release metadata and current route definitions for estimate, rehearsal, parcel submission, stored items and parcel details, reviewed 13 August 2026. Public release observed: 1.0.1; build timestamp observed: 3 August 2026.</li>
        </ol>
      </div>
    </ArticleShell>
  );
}
