import { notFound } from "next/navigation";
import { allProducts, cnyUsdReference, getProduct } from "./product-data";
import { localePath, PageFrame } from "./site-shell";
import { localizedUrl } from "./seo";
import { breadcrumbStructuredData, StructuredData } from "./structured-data";

export function ProductPage({ slug, locale = "en" }: { slug: string; locale?: string }) {
  const product = getProduct(slug);
  if (!product) notFound();
  const related = allProducts.filter((item) => item.slug !== slug).slice(0, 3);
  const currentPath = `/products/${slug}`;

  return (
    <PageFrame locale={locale} currentPath={currentPath}>
      <StructuredData data={[
        breadcrumbStructuredData([
          { name: "LoloBuy Sheet", url: localizedUrl(locale, "/") },
          { name: "Spreadsheet", url: localizedUrl(locale, "/spreadsheet") },
          { name: product.name, url: localizedUrl(locale, currentPath) },
        ]),
        {
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.name,
          image: product.image,
          sku: product.productId,
          category: product.category,
          url: localizedUrl(locale, currentPath),
          description: `A dated product reference linked to the matching source listing for ${product.name}.`,
        },
      ]} />
      <article className="product-detail">
        <section className="product-detail-hero">
          <div className="product-detail-image">
            <img src={product.image} alt={`Main product image for ${product.name} from findspreadsheet.com`} />
          </div>
          <div className="product-detail-copy">
            <a className="article-back" href={localePath(locale, "/spreadsheet")}>← Spreadsheet</a>
            <p className="kicker">Verified main-site listing</p>
            <h1>{product.name}</h1>
            <p className="product-detail-price">{product.usdPrice} <small>reference price in USD</small></p>
            <p className="product-detail-lead">
              The product name, first image, source price and destination link below match the corresponding
              listing on findspreadsheet.com as checked on July 30, 2026.
            </p>
            <div className="product-actions">
              <a className="button primary" href={product.sourceUrl} target="_blank" rel="noreferrer">
                Open this product on findspreadsheet.com <span>↗</span>
              </a>
              <a className="text-link" href={`https://findspreadsheet.com/${product.categorySlug}/`} target="_blank" rel="noreferrer">
                Browse {product.category} <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="product-facts">
          <div>
            <p className="kicker">Listing record</p>
            <h2>What we verified</h2>
          </div>
          <dl>
            <div><dt>Product ID</dt><dd>{product.productId}</dd></div>
            <div><dt>Main-site category</dt><dd>{product.category}</dd></div>
            <div><dt>Source price</dt><dd>¥{product.sourcePriceCny.toFixed(product.sourcePriceCny % 1 ? 1 : 0)} CNY</dd></div>
            <div><dt>USD conversion</dt><dd>{product.usdPrice}</dd></div>
            <div><dt>Reference rate</dt><dd>¥1 CNY = ${cnyUsdReference.rate} USD</dd></div>
            <div><dt>Checked</dt><dd>{cnyUsdReference.date}</dd></div>
          </dl>
          <aside>
            <b>Price boundary</b>
            <p>
              This is a currency conversion of the visible source price, rounded to two decimals. It does not
              include Chinese domestic delivery, agent services, international freight, payment fees, tax or
              customs charges. Recheck the live listing and checkout before paying.
            </p>
          </aside>
        </section>

        <section className="related-products">
          <p className="kicker">Continue browsing</p>
          <h2>More verified product pages</h2>
          <div>
            {related.map((item) => (
              <a href={localePath(locale, `/products/${item.slug}`)} key={item.slug}>
                <img src={item.image} alt={`Main product image for ${item.name}`} />
                <span><small>{item.category}</small><b>{item.name}</b><strong>{item.usdPrice} →</strong></span>
              </a>
            ))}
          </div>
        </section>
      </article>
    </PageFrame>
  );
}
