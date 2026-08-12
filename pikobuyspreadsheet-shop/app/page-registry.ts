import registry from "../content/page-registry.json";

export type PageRecord = {
  path: string;
  kind: "page" | "article";
  lastModified: string;
  published?: string;
  modified?: string;
  sourceReviewed?: string;
  tag?: string;
  headline?: string;
  summary?: string;
  topic?: string;
  color?: string;
  primaryKeyword?: string;
  supportingKeywords?: string[];
  searchIntent?: string;
  wordCount?: number;
};

export const pageRegistry = registry as PageRecord[];

export function getPageRecord(pathname: string) {
  const record = pageRegistry.find((entry) => entry.path === pathname);
  if (!record) throw new Error(`Missing page registry entry for ${pathname}`);
  return record;
}

export const articleRecords = pageRegistry.filter((entry): entry is PageRecord & Required<Pick<PageRecord, "published" | "modified" | "sourceReviewed" | "tag" | "headline" | "summary" | "topic" | "color">> => entry.kind === "article");

export function formatEditorialDate(value: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));
}
