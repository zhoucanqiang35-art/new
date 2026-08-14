import type { Article } from "./site-data";

export type SourceReference = { label: string; url: string };

export const sourceRegistry = {
  guide: { label: "PikoBuy beginner guide", url: "https://www.pikobuy.com/guide" },
  estimate: { label: "PikoBuy shipping estimate", url: "https://www.pikobuy.com/shipping-cost" },
  shipping: { label: "PikoBuy forwarding and shipping terms", url: "https://www.pikobuy.com/protocol/shipping" },
  returns: { label: "PikoBuy returns and exchanges", url: "https://www.pikobuy.com/protocol/returns" },
  about: { label: "PikoBuy About", url: "https://www.pikobuy.com/about" },
  contact: { label: "PikoBuy contact", url: "https://www.pikobuy.com/contact" },
  home: { label: "PikoBuy home", url: "https://www.pikobuy.com/home" },
  finds: { label: "FindSpreadsheet product database", url: "https://findspreadsheet.com/" },
  methodology: { label: "Research source methodology", url: "/guides/research-method" },
  sourceRegister: { label: "Research source register", url: "/sources" },
  updateLog: { label: "Research update log", url: "/updates" },
} satisfies Record<string, SourceReference>;

function add(refs: SourceReference[], ref: SourceReference) {
  if (!refs.some((item) => item.url === ref.url)) refs.push(ref);
}

export function sourceRefsForText(text: string, fallback?: Pick<Article, "sourceLabel" | "sourceUrl">) {
  const value = text.toLowerCase();
  const refs: SourceReference[] = [];
  if (/return|refund|120 hour|five-day|five days|seller consent|resale|rmb 5|non-return/.test(value)) add(refs, sourceRegistry.returns);
  if (/shipping estimator|shipping estimate|destination|length, width|width and height|dimensions|weight in kilograms|six visible inputs/.test(value)) add(refs, sourceRegistry.estimate);
  if (/forward|third-party logistic|customs|confiscation|specialist inspection|professional inspection|additional detailed photo|sender or seller|logistics risk/.test(value)) add(refs, sourceRegistry.shipping);
  if (/support@|submit.*ticket|discord|reddit|official support|contact page/.test(value)) add(refs, sourceRegistry.contact);
  if (/home page|china warehouse|quality inspection and repacking|global shipping/.test(value)) add(refs, sourceRegistry.home);
  if (/multiple currenc|payment method|about page/.test(value)) add(refs, sourceRegistry.about);
  if (/findspreadsheet|product database|product record|ten broad product|ten product|category collection/.test(value)) add(refs, sourceRegistry.finds);
  if (/beginner guide|six-stage|six stage|first payment|second payment|paste.*link|search.*keyword|taobao|tmall|weidian|1688|yupoo|warehouse inspection|three days after|tracking information/.test(value)) add(refs, sourceRegistry.guide);
  if (!refs.length && fallback) add(refs, { label: fallback.sourceLabel, url: fallback.sourceUrl });
  return refs.slice(0, 4);
}

const exactFactSources: Record<string, SourceReference[][]> = {
  "pikobuy-spreadsheet": [[sourceRegistry.guide], [sourceRegistry.methodology], [sourceRegistry.finds]],
  "how-pikobuy-works": [[sourceRegistry.guide], [sourceRegistry.guide], [sourceRegistry.guide]],
  "six-step-order-process": [[sourceRegistry.guide], [sourceRegistry.guide], [sourceRegistry.guide, sourceRegistry.estimate]],
  "product-link-guide": [[sourceRegistry.guide], [sourceRegistry.guide], [sourceRegistry.guide, sourceRegistry.contact]],
  "qc-photo-guide": [[sourceRegistry.shipping], [sourceRegistry.shipping], [sourceRegistry.shipping]],
  "shipping-cost-guide": [[sourceRegistry.estimate], [sourceRegistry.estimate], [sourceRegistry.shipping]],
  "volumetric-weight": [[sourceRegistry.estimate], [sourceRegistry.guide, sourceRegistry.estimate], [sourceRegistry.guide]],
  "tracking-guide": [[sourceRegistry.guide], [sourceRegistry.guide], [sourceRegistry.shipping]],
  "returns-exchanges": [[sourceRegistry.returns], [sourceRegistry.returns], [sourceRegistry.returns]],
  "forwarding-guide": [[sourceRegistry.shipping], [sourceRegistry.shipping], [sourceRegistry.shipping]],
  "payment-process": [[sourceRegistry.about], [sourceRegistry.guide], [sourceRegistry.guide]],
  "warehouse-inspection": [[sourceRegistry.home], [sourceRegistry.shipping], [sourceRegistry.shipping]],
  "packaging-guide": [[sourceRegistry.guide], [sourceRegistry.estimate], [sourceRegistry.shipping]],
  "buyer-safety": [[sourceRegistry.shipping], [sourceRegistry.shipping], [sourceRegistry.methodology]],
  "support-guide": [[sourceRegistry.contact], [sourceRegistry.contact], [sourceRegistry.contact]],
  "sizing-guide": [[sourceRegistry.guide], [sourceRegistry.shipping], [sourceRegistry.returns]],
  "spreadsheet-checklist": [[sourceRegistry.methodology], [sourceRegistry.sourceRegister], [sourceRegistry.finds, sourceRegistry.estimate]],
  "source-link-comparison": [[sourceRegistry.guide], [sourceRegistry.methodology], [sourceRegistry.finds]],
  "spreadsheet-maintenance": [[sourceRegistry.finds], [sourceRegistry.sourceRegister], [sourceRegistry.updateLog]],
  "category-research-guide": [[sourceRegistry.finds], [sourceRegistry.guide], [sourceRegistry.estimate]],
  faq: [[sourceRegistry.methodology], [sourceRegistry.guide], [sourceRegistry.returns]],
  "research-method": [[sourceRegistry.sourceRegister], [sourceRegistry.methodology], [sourceRegistry.methodology]],
  sources: [[sourceRegistry.guide], [sourceRegistry.shipping], [sourceRegistry.returns], [sourceRegistry.contact, sourceRegistry.about]],
  about: [[sourceRegistry.finds], [sourceRegistry.sourceRegister], [sourceRegistry.methodology]],
  updates: [[sourceRegistry.sourceRegister], [sourceRegistry.finds], [sourceRegistry.updateLog]],
  "seo-articles": [[sourceRegistry.sourceRegister], [sourceRegistry.sourceRegister], [sourceRegistry.updateLog]],
};

for (const slug of ["taobao-links", "weidian-links", "1688-links", "yupoo-links"]) {
  exactFactSources[slug] = [[sourceRegistry.guide], [sourceRegistry.finds], [sourceRegistry.guide]];
}
for (const slug of ["shoes-spreadsheet", "hoodies-spreadsheet", "t-shirts-spreadsheet", "jackets-spreadsheet", "pants-shorts-spreadsheet", "headwear-spreadsheet", "accessories-spreadsheet", "jerseys-spreadsheet", "electronics-spreadsheet", "other-stuff-spreadsheet"]) {
  exactFactSources[slug] = [[sourceRegistry.methodology], [sourceRegistry.guide, sourceRegistry.estimate], [sourceRegistry.finds]];
}

export function sourcesForFact(article: Pick<Article, "slug" | "sourceLabel" | "sourceUrl">, index: number, fact: string) {
  return exactFactSources[article.slug]?.[index] || sourceRefsForText(fact, article);
}
