(() => {
  const catalog = window.LITBUY_CATALOG;
  if (!catalog) return;
  const categoryList = document.querySelector('#homeCategoryList');
  const subsiteDirectory = document.querySelector('#subsiteDirectory');
  const productCard = document.querySelector('#homeProductCard');
  const products = catalog.products || [];
  const homepageVisual = item => item.detailImages?.[0] || item.thumbnail;
  const usd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
  const price = item => {
    const amount = Number.parseFloat(String(item.price || '').replace(/[^0-9.]/g, ''));
    return Number.isFinite(amount) ? usd.format(amount * 0.1495) : 'Price on request';
  };
  if (categoryList) {
    categoryList.replaceChildren(...catalog.categories.map(category => {
      const count = products.filter(product => product.category === category.slug).length;
      const link = document.createElement('a');
      link.href = `categories.html?category=${encodeURIComponent(category.slug)}`;
      link.innerHTML = `<span>${category.label}</span><b>${count.toLocaleString()} items</b><i>Explore →</i>`;
      return link;
    }));
  }
  if (subsiteDirectory) {
    const directoryProducts = catalog.categories.flatMap((category) =>
      products.filter((product) => product.category === category.slug).slice(0, 2),
    );
    subsiteDirectory.replaceChildren(...directoryProducts.map((product) => {
      const detailUrl = `product-detail.html?product=${encodeURIComponent(product.key)}`;
      const purchaseId = product.purchaseId || product.id;
      const card = document.createElement('article');
      card.className = 'subsite-product-card';
      card.innerHTML = `<a class="subsite-product-image" href="${detailUrl}"><img src="${homepageVisual(product)}" alt="${product.name}" loading="lazy"></a><div class="subsite-product-copy"><p class="subsite-product-category">${product.categoryLabel}</p><h3><a href="${detailUrl}">${product.name}</a></h3><div class="subsite-product-meta"><span class="subsite-product-price-label">Estimated price (USD)</span><strong>${price(product)}</strong></div><div class="subsite-product-actions"><a class="subsite-detail-link" href="${detailUrl}">Open local details →</a><a class="subsite-buy-button" href="https://litbuy.com/product/weidian/${encodeURIComponent(purchaseId)}">Buy on LitBuy</a></div></div>`;
      return card;
    }));
  }
  const product = products.find(item => item.id === '7735') || products[0];
  if (product && productCard) {
    const url = `product-detail.html?product=${encodeURIComponent(product.key)}`;
    productCard.innerHTML = `<a class="home-product-image" href="${url}"><img src="${homepageVisual(product)}" alt="${product.name}"></a><div class="home-product-copy"><p>${product.categoryLabel}</p><h3>${product.name}</h3><dl><div><dt>Estimated price</dt><dd>${price(product)}</dd></div><div><dt>Product ID</dt><dd>${product.purchaseId || product.id}</dd></div></dl><a class="button" href="${url}">Open this product detail →</a></div>`;
  }
})();
