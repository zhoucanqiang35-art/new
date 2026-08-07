import { featuredProducts } from "./product-data";

export function ProductShowcase({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`product-detail-grid${compact ? " product-detail-grid-compact" : ""}`}>
      {featuredProducts.map((product) => (
        <a
          className="product-detail-card"
          href={product.href}
          target="_blank"
          rel="noopener noreferrer"
          key={product.id}
          aria-label={`Open ${product.name} on FindSpreadsheet`}
        >
          <div className="product-image-wrap">
            <img src={product.image} alt={product.name} loading="lazy" />
            <span>{product.category}</span>
          </div>
          <div className="product-card-body">
            <div className="product-card-meta"><span>ITEM {product.id}</span><b>{product.usdReference}</b></div>
            <h3>{product.name}</h3>
            <dl>
              <div><dt>Options</dt><dd>{product.options}</dd></div>
              <div><dt>QC focus</dt><dd>{product.checks}</dd></div>
            </dl>
            <footer><span>USD reference price</span><strong>View exact product ↗</strong></footer>
          </div>
        </a>
      ))}
    </div>
  );
}
