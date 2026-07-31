import {
  cnyUsdReference,
  latestCarouselFallback,
  products as homepageRecommendations,
  type Product,
} from "../../product-data";

export const dynamic = "force-static";

const SOURCE_ORIGIN = "https://findspreadsheet.com";
const SOURCE_PAGE = `${SOURCE_ORIGIN}/`;
const REFRESH_SECONDS = 60 * 60 * 6;

const categoryNames: Record<string, string> = {
  shoes: "Shoes",
  "hoodies-sweaters": "Hoodies / Sweaters",
  "t-shirts": "T-Shirts",
  jackets: "Jackets",
  "pants-shorts": "Pants / Shorts",
  headwear: "Headwear",
  accessories: "Accessories",
  jersey: "Jersey",
  electronics: "Electronics",
  "other-stuff": "Other Stuff",
};

function cleanText(value: string) {
  return value
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, "\"")
    .replace(/&#039;|&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function slugFromPath(path: string) {
  return path.split("/").filter(Boolean).at(-1)?.replace(/\.html$/i, "") || "latest-product";
}

function parseLatestProducts(html: string): Product[] {
  const start = html.indexOf('<div class="carousel-track">');
  const end = html.indexOf("</section>", start);
  if (start < 0 || end < 0) return [];

  const latestSection = html.slice(start, end);
  const cardPattern =
    /<div class="product-card glass-card">[\s\S]*?<a href="([^"]+)" class="product-image">[\s\S]*?data-src="([^"]+)"[^>]*>[\s\S]*?<h3>([\s\S]*?)<\/h3>[\s\S]*?<div class="product-price">([\d.]+)<\/div>[\s\S]*?<div class="product-views">[\s\S]*?<span>\s*([\d,]+)<\/span>/g;
  const recommendedUrls = new Set(homepageRecommendations.map((product) => product.sourceUrl));
  const seenUrls = new Set<string>();
  const seenNames = new Set<string>();
  const parsed: Product[] = [];

  for (const match of latestSection.matchAll(cardPattern)) {
    const [, rawPath, rawImage, rawName, rawPrice, rawViews] = match;
    const sourceUrl = new URL(rawPath, SOURCE_ORIGIN).href;
    const name = cleanText(rawName);
    const normalizedName = name.toLocaleLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim();
    if (
      recommendedUrls.has(sourceUrl) ||
      seenUrls.has(sourceUrl) ||
      seenNames.has(normalizedName)
    ) continue;

    const pathParts = new URL(sourceUrl).pathname.split("/").filter(Boolean);
    const categorySlug = pathParts[0] || "other-stuff";
    const sourcePriceCny = Number(rawPrice);
    if (!Number.isFinite(sourcePriceCny)) continue;

    seenUrls.add(sourceUrl);
    seenNames.add(normalizedName);
    parsed.push({
      slug: slugFromPath(rawPath),
      name,
      category: categoryNames[categorySlug] || cleanText(categorySlug.replace(/-/g, " ")),
      categorySlug,
      productId: slugFromPath(rawPath).match(/(\d+)$/)?.[1] || slugFromPath(rawPath),
      sourcePriceCny,
      usdPrice: `$${(sourcePriceCny * cnyUsdReference.rate).toFixed(2)}`,
      checked: "Synced from main site",
      image: new URL(rawImage, SOURCE_ORIGIN).href,
      sourceUrl,
      views: Number(rawViews.replace(/,/g, "")) || 0,
    });
  }

  // The main site labels this collection "Latest Products". Within that
  // current collection, higher-viewed entries are placed first.
  return parsed.sort((a, b) => (b.views || 0) - (a.views || 0)).slice(0, 10);
}

export async function GET() {
  try {
    const response = await fetch(SOURCE_PAGE, {
      headers: {
        accept: "text/html",
        "user-agent": "LoloBuySheet product sync/1.0",
      },
      cf: { cacheTtl: REFRESH_SECONDS, cacheEverything: true },
    } as RequestInit & { cf: { cacheTtl: number; cacheEverything: boolean } });

    if (!response.ok) throw new Error("The main product feed is temporarily unavailable.");
    const products = parseLatestProducts(await response.text());
    if (products.length < 2) throw new Error("The main product feed returned too few products.");

    return Response.json(
      {
        products,
        source: SOURCE_PAGE,
        syncedAt: new Date().toISOString(),
        excludesHomepageRecommendations: true,
      },
      {
        headers: {
          "Cache-Control": `public, s-maxage=${REFRESH_SECONDS}, stale-while-revalidate=86400`,
        },
      },
    );
  } catch {
    return Response.json(
      {
        products: latestCarouselFallback,
        source: SOURCE_PAGE,
        syncedAt: null,
        excludesHomepageRecommendations: true,
        fallback: true,
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=900, stale-while-revalidate=3600",
        },
      },
    );
  }
}
