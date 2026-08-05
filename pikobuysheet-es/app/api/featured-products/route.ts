const SOURCE_ORIGIN = "https://findspreadsheet.com";
const CNY_PER_USD = 7.18;

type Product = {
  name: string;
  category: string;
  sourcePrice: string;
  usd: string;
  href: string;
  image: string;
  views: number;
  badge: "Latest" | "Popular";
};

const categoryNames: Record<string, string> = {
  shoes: "Shoes",
  "hoodies-sweaters": "Hoodies",
  "t-shirts": "T-Shirts",
  jackets: "Jackets",
  "pants-shorts": "Pants / Shorts",
  headwear: "Headwear",
  accessories: "Accessories",
  jersey: "Jersey",
  shortsets: "Short Sets",
  electronics: "Electronics",
  "other-stuff": "Other Stuff",
};

function decodeHtml(value: string) {
  return value
    .replace(/<[^>]*>/g, "")
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number.parseInt(code, 10)))
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function sourceUrl(value: string) {
  const url = new URL(decodeHtml(value), SOURCE_ORIGIN);
  return url.origin === SOURCE_ORIGIN ? url.toString() : SOURCE_ORIGIN;
}

function parseProducts(html: string, badge: Product["badge"]) {
  return html
    .split(/<div class="product-card glass-card"/)
    .slice(1)
    .map((card): Product | null => {
      const href = card.match(/<a href="([^"]+)" class="product-image"/)?.[1];
      const image = card.match(/data-src="([^"]+)"/)?.[1];
      const name = card.match(/<h3 class="product-name">([\s\S]*?)<\/h3>/)?.[1];
      const priceText = card.match(/<div class="product-price">([\s\S]*?)<\/div>/)?.[1];
      const viewsText = card.match(/<div class="product-views">[\s\S]*?<span>([^<]+)<\/span>/)?.[1];
      if (!href || !image || !name || !priceText) return null;

      const price = Number.parseFloat(decodeHtml(priceText).replace(/[^0-9.]/g, ""));
      const categoryKey = new URL(sourceUrl(href)).pathname.split("/").filter(Boolean)[0]?.toLowerCase() ?? "";
      return {
        name: decodeHtml(name),
        category: categoryNames[categoryKey] ?? "More Finds",
        sourcePrice: Number.isFinite(price) ? `¥${price.toFixed(price % 1 ? 2 : 0)}` : "See source",
        usd: Number.isFinite(price) ? `$${(price / CNY_PER_USD).toFixed(2)}` : "View price",
        href: sourceUrl(href),
        image: sourceUrl(image),
        views: Number.parseInt(decodeHtml(viewsText ?? "0").replace(/\D/g, ""), 10) || 0,
        badge,
      };
    })
    .filter((item): item is Product => Boolean(item));
}

async function readListing(url: string, badge: Product["badge"]) {
  const response = await fetch(url, {
    headers: {
      accept: "text/html,application/xhtml+xml",
      "user-agent": "PikoBuySheetProductFeed/1.0",
    },
  });
  if (!response.ok) throw new Error(`Source responded ${response.status}`);
  return parseProducts(await response.text(), badge);
}

export async function GET() {
  const [latestResult, popularResult] = await Promise.allSettled([
    readListing(`${SOURCE_ORIGIN}/AllProducts/?sort=new&sort_asc=desc`, "Latest"),
    readListing(`${SOURCE_ORIGIN}/AllProducts/?sort=click&sort_asc=desc`, "Popular"),
  ]);

  const latest = latestResult.status === "fulfilled" ? latestResult.value.slice(0, 4) : [];
  const popular = popularResult.status === "fulfilled" ? popularResult.value.slice(0, 4) : [];
  const seen = new Set<string>();
  const products = [...latest, ...popular].filter((item) => {
    if (seen.has(item.href)) return false;
    seen.add(item.href);
    return true;
  });

  if (!products.length) {
    return Response.json({ products: [] }, { status: 502, headers: { "Cache-Control": "no-store" } });
  }

  return Response.json(
    { products, source: `${SOURCE_ORIGIN}/AllProducts/`, refreshedAt: new Date().toISOString() },
    { headers: { "Cache-Control": "public, max-age=300, s-maxage=1800, stale-while-revalidate=86400" } },
  );
}
