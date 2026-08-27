import { rm } from "node:fs/promises";
import { resolve } from "node:path";

// Next.js generates the single canonical /sitemap.xml from app/sitemap.ts.
// Remove legacy duplicates before every build so Cloudflare cannot publish
// conflicting sitemap copies from an older checkout or cached build artifact.
await Promise.all(
  ["priority-sitemap.xml", "google-sitemap.xml", "sitemap.txt"].map((file) =>
    rm(resolve("public", file), { force: true }),
  ),
);

console.log("Removed legacy sitemap duplicates; /sitemap.xml is the canonical sitemap.");
