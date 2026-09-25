import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const outputDirectory = path.resolve(process.argv[2] ?? "dist/pages");
const requiredFiles = [
  "_worker.js",
  "robots.txt",
  "sitemap.xml",
  "pikobuy-logo.png",
  "pikobuy-hero.png",
];

await Promise.all(requiredFiles.map((file) => access(path.join(outputDirectory, file))));

const assets = await readdir(path.join(outputDirectory, "assets"));
const cssAsset = assets.find((file) => file.endsWith(".css"));
const jsAsset = assets.find((file) => file.endsWith(".js"));
if (!cssAsset) {
  throw new Error("Missing generated CSS in the Pages artifact");
}
if (!jsAsset) {
  throw new Error("Missing generated JavaScript in the Pages artifact");
}

const workerPath = path.join(outputDirectory, "_worker.js");
const workerUrl = pathToFileURL(workerPath);
workerUrl.searchParams.set("validation", `${process.pid}-${Date.now()}`);
const worker = await import(workerUrl.href);
if (!worker.default || typeof worker.default.fetch !== "function") {
  throw new Error("Pages Worker must export fetch(request, env, ctx)");
}

const contentTypes = new Map([
  [".css", "text/css"],
  [".js", "text/javascript"],
  [".json", "application/json"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"],
  [".txt", "text/plain"],
  [".xml", "application/xml"],
]);
const env = {
  ASSETS: {
    async fetch(request) {
      const pathname = decodeURIComponent(new URL(request.url).pathname);
      const assetPath = path.resolve(outputDirectory, `.${pathname}`);
      if (!assetPath.startsWith(`${outputDirectory}${path.sep}`)) {
        return new Response("Not found", { status: 404 });
      }
      try {
        const body = await readFile(assetPath);
        return new Response(body, {
          headers: {
            "content-type":
              contentTypes.get(path.extname(assetPath)) ??
              "application/octet-stream",
          },
        });
      } catch {
        return new Response("Not found", { status: 404 });
      }
    },
  },
};
const ctx = { waitUntil() {}, passThroughOnException() {} };

async function assertPage(pathname, expectedText, canonicalPath = pathname) {
  const response = await worker.default.fetch(
    new Request(`https://pikobuyspreadsheet-pl.pages.dev${pathname}`, {
      headers: { accept: "text/html" },
    }),
    env,
    ctx,
  );
  const html = await response.text();
  if (
    response.status !== 200 ||
    !/^text\/html\b/i.test(response.headers.get("content-type") ?? "") ||
    !html.includes(expectedText) ||
    /<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(html) ||
    !html.includes(`rel="canonical" href="https://pikobuyspreadsheet.pl${canonicalPath === "/" ? "/" : canonicalPath}"`)
  ) {
    throw new Error(`Pages artifact failed route validation: ${pathname}`);
  }
}

async function assertInsuranceArticle() {
  const response = await worker.default.fetch(
    new Request("https://pikobuyspreadsheet-pl.pages.dev/pikobuy-parcel-insurance-claim", { headers: { accept: "text/html" } }),
    env,
    ctx,
  );
  const html = await response.text();
  const checks = [
    response.status === 200,
    (html.match(/<h1>/g) ?? []).length === 1,
    html.includes('content="index, follow"'),
    html.includes('"@type":"Article"'),
    html.includes('"@type":"BreadcrumbList"'),
    !html.includes('"@type":"FAQPage"'),
    html.includes('href="/how-to-use-pikobuy-spreadsheet"'),
    html.includes('href="/pikobuy-qc-photo-guide"'),
    html.includes('href="/pikobuy-shipping-europe"'),
    html.includes('href="https://findspreadsheet.com/AllProducts/"'),
  ];
  if (checks.some((check) => !check)) throw new Error("Parcel insurance article failed SEO, schema, FAQ or link validation");
}

async function assertVolumetricWeightArticle() {
  const response = await worker.default.fetch(
    new Request("https://pikobuyspreadsheet-pl.pages.dev/pikobuy-volumetric-weight-packaging", { headers: { accept: "text/html" } }),
    env,
    ctx,
  );
  const html = await response.text();
  const checks = [
    response.status === 200,
    (html.match(/<h1>/g) ?? []).length === 1,
    html.includes('content="index, follow"'),
    html.includes('rel="canonical" href="https://pikobuyspreadsheet.pl/pikobuy-volumetric-weight-packaging"'),
    html.includes('"@type":"Article"'),
    html.includes('"@type":"BreadcrumbList"'),
    !html.includes('"@type":"FAQPage"'),
    html.includes('href="/how-to-use-pikobuy-spreadsheet"'),
    html.includes('href="/pikobuy-qc-photo-guide"'),
    html.includes('href="/pikobuy-shipping-europe"'),
    html.includes('href="https://findspreadsheet.com/AllProducts/"'),
  ];
  if (checks.some((check) => !check)) throw new Error("Volumetric weight article failed SEO, schema, FAQ or link validation");
}

async function assertReturnedParcelArticle() {
  const response = await worker.default.fetch(
    new Request("https://pikobuyspreadsheet-pl.pages.dev/pikobuy-parcel-returned-to-warehouse", { headers: { accept: "text/html" } }),
    env,
    ctx,
  );
  const html = await response.text();
  const checks = [
    response.status === 200,
    (html.match(/<h1>/g) ?? []).length === 1,
    html.includes('content="index, follow"'),
    html.includes('rel="canonical" href="https://pikobuyspreadsheet.pl/pikobuy-parcel-returned-to-warehouse"'),
    html.includes('"@type":"Article"'),
    html.includes('"@type":"BreadcrumbList"'),
    html.includes('"@type":"FAQPage"'),
    (html.match(/<details/g) ?? []).length === 4,
    html.includes('href="/pikobuy-tracking-delay-diagnosis"'),
    html.includes('href="/pikobuy-prohibited-items-shipping-restrictions"'),
    html.includes('href="/pikobuy-volumetric-weight-packaging"'),
    html.includes('href="/pikobuy-parcel-insurance-claim"'),
    html.includes('href="https://findspreadsheet.com/AllProducts/"'),
    html.includes('src="/pikobuy-returned-parcel-checklist.svg"'),
  ];
  if (checks.some((check) => !check)) throw new Error("Returned parcel article failed SEO, schema, FAQ, image or link validation");
}

async function assertDamagedParcelArticle() {
  const response = await worker.default.fetch(
    new Request("https://pikobuyspreadsheet-pl.pages.dev/pikobuy-parcel-damaged-on-arrival", { headers: { accept: "text/html" } }),
    env,
    ctx,
  );
  const html = await response.text();
  const checks = [
    response.status === 200,
    (html.match(/<h1>/g) ?? []).length === 1,
    html.includes('content="index, follow"'),
    html.includes('rel="canonical" href="https://pikobuyspreadsheet.pl/pikobuy-parcel-damaged-on-arrival"'),
    html.includes('"@type":"Article"'),
    html.includes('"@type":"BreadcrumbList"'),
    html.includes('"@type":"FAQPage"'),
    (html.match(/<details/g) ?? []).length === 4,
    html.includes('href="/pikobuy-qc-photo-guide"'),
    html.includes('href="/pikobuy-parcel-insurance-claim"'),
    html.includes('href="/pikobuy-tracking-delay-diagnosis"'),
    html.includes('href="/pikobuy-parcel-returned-to-warehouse"'),
    html.includes('href="https://findspreadsheet.com/AllProducts/"'),
    html.includes('src="/pikobuy-damaged-parcel-evidence-flow.svg"'),
  ];
  if (checks.some((check) => !check)) throw new Error("Damaged parcel article failed SEO, schema, FAQ, image or link validation");
}

async function assertMissingItemArticle() {
  const response = await worker.default.fetch(
    new Request("https://pikobuyspreadsheet-pl.pages.dev/pikobuy-missing-item-from-parcel", { headers: { accept: "text/html" } }),
    env,
    ctx,
  );
  const html = await response.text();
  const checks = [
    response.status === 200,
    (html.match(/<h1>/g) ?? []).length === 1,
    html.includes('content="index, follow"'),
    html.includes('rel="canonical" href="https://pikobuyspreadsheet.pl/pikobuy-missing-item-from-parcel"'),
    html.includes('"@type":"Article"'),
    html.includes('"@type":"BreadcrumbList"'),
    html.includes('"@type":"FAQPage"'),
    (html.match(/<details/g) ?? []).length === 4,
    html.includes('href="/pikobuy-parcel-damaged-on-arrival"'),
    html.includes('href="/pikobuy-qc-photo-guide"'),
    html.includes('href="/pikobuy-parcel-insurance-claim"'),
    html.includes('href="/pikobuy-prohibited-items-shipping-restrictions"'),
    html.includes('href="https://findspreadsheet.com/AllProducts/"'),
    html.includes('src="/pikobuy-missing-item-evidence-chain.svg"'),
  ];
  if (checks.some((check) => !check)) throw new Error("Missing-item article failed SEO, schema, FAQ, image or link validation");
}

async function assertSupportTicketArticle() {
  const response = await worker.default.fetch(
    new Request("https://pikobuyspreadsheet-pl.pages.dev/how-to-contact-pikobuy-support-order-problem", { headers: { accept: "text/html" } }),
    env,
    ctx,
  );
  const html = await response.text();
  const checks = [
    response.status === 200,
    (html.match(/<h1>/g) ?? []).length === 1,
    html.includes('content="index, follow"'),
    html.includes('rel="canonical" href="https://pikobuyspreadsheet.pl/how-to-contact-pikobuy-support-order-problem"'),
    html.includes('"@type":"Article"'),
    html.includes('"@type":"BreadcrumbList"'),
    html.includes('"@type":"FAQPage"'),
    (html.match(/<details/g) ?? []).length === 4,
    html.includes('href="/pikobuy-tracking-delay-diagnosis"'),
    html.includes('href="/pikobuy-return-policy"'),
    html.includes('href="/pikobuy-parcel-damaged-on-arrival"'),
    html.includes('href="/pikobuy-missing-item-from-parcel"'),
    html.includes('href="https://findspreadsheet.com/AllProducts/"'),
    html.includes('src="/pikobuy-support-ticket-evidence-map.svg"'),
  ];
  if (checks.some((check) => !check)) throw new Error("Support-ticket article failed SEO, schema, FAQ, image or link validation");
}

async function assertPaymentOrderArticle() {
  const response = await worker.default.fetch(
    new Request("https://pikobuyspreadsheet-pl.pages.dev/pikobuy-order-not-processed-after-payment", { headers: { accept: "text/html" } }),
    env,
    ctx,
  );
  const html = await response.text();
  const checks = [
    response.status === 200,
    (html.match(/<h1>/g) ?? []).length === 1,
    html.includes('content="index, follow"'),
    html.includes('rel="canonical" href="https://pikobuyspreadsheet.pl/pikobuy-order-not-processed-after-payment"'),
    html.includes('"@type":"Article"'),
    html.includes('"@type":"BreadcrumbList"'),
    html.includes('"@type":"FAQPage"'),
    (html.match(/<details/g) ?? []).length === 4,
    html.includes('href="/pikobuy-fees-total-cost"'),
    html.includes('href="/pikobuy-seller-listing-verification"'),
    html.includes('href="/how-to-contact-pikobuy-support-order-problem"'),
    html.includes('href="/pikobuy-return-policy"'),
    html.includes('href="https://findspreadsheet.com/AllProducts/"'),
    html.includes('src="/pikobuy-payment-order-reconciliation.svg"'),
  ];
  if (checks.some((check) => !check)) throw new Error("Payment-order article failed SEO, schema, FAQ, image or link validation");
}

async function assertDepositBalanceArticle() {
  const response = await worker.default.fetch(
    new Request("https://pikobuyspreadsheet-pl.pages.dev/pikobuy-deposit-order-balance-payment", { headers: { accept: "text/html" } }),
    env,
    ctx,
  );
  const html = await response.text();
  const checks = [
    response.status === 200,
    (html.match(/<h1>/g) ?? []).length === 1,
    html.includes('content="index, follow"'),
    html.includes('rel="canonical" href="https://pikobuyspreadsheet.pl/pikobuy-deposit-order-balance-payment"'),
    html.includes('"@type":"Article"'),
    html.includes('"@type":"BreadcrumbList"'),
    html.includes('"@type":"FAQPage"'),
    (html.match(/<details/g) ?? []).length === 4,
    html.includes('href="/pikobuy-seller-listing-verification"'),
    html.includes('href="/pikobuy-order-not-processed-after-payment"'),
    html.includes('href="/how-to-contact-pikobuy-support-order-problem"'),
    html.includes('href="/pikobuy-return-policy"'),
    html.includes('href="https://findspreadsheet.com/AllProducts/"'),
    html.includes('src="/pikobuy-deposit-balance-decision.svg"'),
  ];
  if (checks.some((check) => !check)) throw new Error("Deposit-balance article failed SEO, schema, FAQ, image or link validation");
}

async function assertNotFound() {
  const response = await worker.default.fetch(
    new Request("https://pikobuyspreadsheet-pl.pages.dev/this-page-does-not-exist", { headers: { accept: "text/html" } }),
    env,
    ctx,
  );
  if (response.status !== 404) throw new Error(`Expected a 404 for an unknown route, received ${response.status}`);
}

async function assertPublicAsset(pathname, expectedContentType, expectedText) {
  const response = await worker.default.fetch(
    new Request(`https://pikobuyspreadsheet-pl.pages.dev${pathname}`),
    env,
    ctx,
  );
  const body = await response.text();
  if (
    response.status !== 200 ||
    !response.headers.get("content-type")?.startsWith(expectedContentType) ||
    !body.includes(expectedText)
  ) {
    throw new Error(`Pages artifact failed public asset validation: ${pathname}`);
  }
}

async function assertAsset(filename, expectedContentType) {
  const response = await worker.default.fetch(
    new Request(`https://pikobuyspreadsheet-pl.pages.dev/assets/${filename}`),
    env,
    ctx,
  );
  if (
    response.status !== 200 ||
    !response.headers.get("content-type")?.startsWith(expectedContentType) ||
    (await response.arrayBuffer()).byteLength === 0
  ) {
    throw new Error(`Pages artifact failed asset validation: ${filename}`);
  }
}

await assertPage("/", "PikoBuy Spreadsheet");
await assertPage("/faq", "Six useful answers before you order");
await assertPage("/language/pl", "PikoBuy Spreadsheet", "/language/pl");
await assertPage("/pikobuy-fees-total-cost", "PikoBuy Fees Explained");
await assertPage("/pikobuy-seller-listing-verification", "PikoBuy Seller and Listing Verification Checklist");
await assertPage("/pikobuy-eu-vat-customs-preparation", "PikoBuy EU VAT and Customs Preparation Guide for 2026");
await assertPage("/pikobuy-tracking-delay-diagnosis", "PikoBuy Tracking Status After Shipping: Diagnose Parcel Delays");
await assertPage("/is-pikobuy-safe-buyer-checklist", "Is PikoBuy Safe to Use? A 12-Point Buyer Checklist");
await assertPage("/pikobuy-reviews-customer-experience-evidence", "PikoBuy Reviews and Customer Experiences: What the Evidence Shows");
await assertPage("/pikobuy-parcel-insurance-claim", "PikoBuy Parcel Insurance: Coverage, Evidence and Claim Checklist");
await assertPage("/pikobuy-volumetric-weight-packaging", "PikoBuy Volumetric Weight and Packaging: A Practical Calculator Guide");
await assertPage("/pikobuy-size-guide-measurements", "How to Choose the Correct Size on PikoBuy: Measurements Before Labels");
await assertPage("/pikobuy-sneaker-batch-qc-context", "PikoBuy Sneaker Batch Labels and QC Context: Compare Evidence, Not Hype");
await assertPage("/pikobuy-parcel-consolidation-shipping-cost", "PikoBuy Parcel Consolidation: Weight, Volume and Shipping Trade-Offs");
await assertPage("/pikobuy-prohibited-items-shipping-restrictions", "PikoBuy Prohibited Items: A Pre-Shipping Route Checklist");
await assertPage("/pikobuy-parcel-returned-to-warehouse", "PikoBuy Parcel Returned to Warehouse: Reshipment Checklist");
await assertPage("/pikobuy-parcel-damaged-on-arrival", "PikoBuy Parcel Damaged on Arrival: An Unboxing Evidence Checklist");
await assertPage("/pikobuy-missing-item-from-parcel", "PikoBuy Missing Item From Parcel: A Weight and Evidence Checklist");
await assertPage("/how-to-contact-pikobuy-support-order-problem", "How to Contact PikoBuy Support About an Order: Evidence Checklist");
await assertPage("/pikobuy-order-not-processed-after-payment", "PikoBuy Order Not Processed After Payment: Evidence Checklist");
await assertPage("/pikobuy-deposit-order-balance-payment", "PikoBuy Deposit Order Balance Payment: Deadline and Evidence Checklist");
await assertPage("/seo-articles", "PikoBuy Deposit Order Balance Payment: Deadline and Evidence Checklist");
await assertInsuranceArticle();
await assertVolumetricWeightArticle();
await assertReturnedParcelArticle();
await assertDamagedParcelArticle();
await assertMissingItemArticle();
await assertSupportTicketArticle();
await assertPaymentOrderArticle();
await assertDepositBalanceArticle();
await assertNotFound();
await assertAsset(cssAsset, "text/css");
await assertAsset(jsAsset, "text/javascript");
await assertPublicAsset("/robots.txt", "text/plain", "Allow: /");
await assertPublicAsset("/sitemap.xml", "application/xml", "<loc>https://pikobuyspreadsheet.pl/</loc>");
await assertPublicAsset("/pikobuy-buyer-safety-checklist.svg", "image/svg+xml", "Evidence before confidence");
await assertPublicAsset("/pikobuy-review-evidence-ladder.svg", "image/svg+xml", "Evidence before confidence");
await assertPublicAsset("/pikobuy-insurance-claim-checklist.svg", "image/svg+xml", "Build the claim before the problem");
await assertPublicAsset("/pikobuy-volumetric-weight-packaging.svg", "image/svg+xml", "Measure twice. Verify the route once.");
await assertPublicAsset("/pikobuy-restricted-items-route-check.svg", "image/svg+xml", "Classify first. Verify the live route second.");
await assertPublicAsset("/pikobuy-returned-parcel-checklist.svg", "image/svg+xml", "Locate → document → correct → inspect → reprice.");
await assertPublicAsset("/pikobuy-damaged-parcel-evidence-flow.svg", "image/svg+xml", "preserve the evidence chain");
await assertPublicAsset("/pikobuy-missing-item-evidence-chain.svg", "image/svg+xml", "Trace the first missing record");
await assertPublicAsset("/pikobuy-support-ticket-evidence-map.svg", "image/svg+xml", "One case. One timeline. One answerable request.");
await assertPublicAsset("/pikobuy-payment-order-reconciliation.svg", "image/svg+xml", "Match one attempt to one transaction and one order.");
await assertPublicAsset("/pikobuy-deposit-balance-decision.svg", "image/svg+xml", "Capture the terms before the deposit. Control the deadline before the balance.");

const robots = await readFile(path.join(outputDirectory, "robots.txt"), "utf8");
if (/^Disallow:\s*\/$/m.test(robots) || !robots.includes("https://pikobuyspreadsheet.pl/sitemap.xml")) {
  throw new Error("robots.txt blocks indexing or omits the canonical sitemap URL");
}

const css = await readFile(path.join(outputDirectory, "assets", cssAsset), "utf8");
if (!/@media \(width<=900px\)\{\.article-layout\{grid-template-columns:1fr/.test(css)) {
  throw new Error("Compiled CSS is missing the single-column mobile article layout");
}

const sitemap = await readFile(path.join(outputDirectory, "sitemap.xml"), "utf8");
const sitemapUrls = sitemap.match(/<loc>/g)?.length ?? 0;
if (sitemapUrls !== 306 || !sitemap.includes('hreflang="sv"') || !sitemap.includes("/pikobuy-deposit-order-balance-payment")) {
  throw new Error(`Expected 306 sitemap URLs with Swedish hreflang alternates and the deposit-balance guide, found ${sitemapUrls}`);
}

console.log(
  "Validated indexable Pages routes, canonical links, robots.txt, a 306-URL sitemap, CSS and JavaScript.",
);
