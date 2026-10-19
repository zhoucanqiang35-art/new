(() => {
  const catalog = window.LITBUY_CATALOG;
  if (!catalog) return;
  const products = catalog.products;
  const params = new URLSearchParams(location.search);
  const pageSize = 36;
  const $ = selector => document.querySelector(selector);
  const plural = count => `${count.toLocaleString()} products`;
  const productUrl = product => `product-detail.html?product=${encodeURIComponent(product.key)}`;
  const categoryUrl = category => `categories.html?category=${encodeURIComponent(category)}`;
  const text = value => String(value || '').trim();
  // Source catalog prices are in CNY; the subsite displays one consistent USD estimate.
  const cnyToUsd = 0.1495;
  const usd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
  const priceLabel = product => {
    const value = Number(product.price);
    return Number.isFinite(value) && value > 0 ? usd.format(value * cnyToUsd) : 'Price unavailable';
  };

  function productFromParams() {
    const key = params.get('product');
    const id = params.get('id');
    return products.find(product => product.key === key) || products.find(product => product.id === id);
  }

  function renderProductList(host, list, emptyText) {
    host.replaceChildren();
    if (!list.length) {
      const p = document.createElement('p');
      p.className = 'catalog-empty';
      p.textContent = emptyText;
      host.append(p);
      return;
    }
    list.forEach(product => {
      const card = document.createElement('article');
      card.className = 'catalog-card';
      if (product.thumbnail) {
        const pictureLink = document.createElement('a');
        pictureLink.className = 'catalog-thumb';
        pictureLink.href = productUrl(product);
        const image = document.createElement('img');
        image.src = product.thumbnail;
        image.alt = product.name;
        image.loading = 'lazy';
        pictureLink.append(image);
        card.append(pictureLink);
      }
      const category = document.createElement('span');
      category.className = 'catalog-tag';
      category.textContent = product.categoryLabel;
      const title = document.createElement('h2');
      const link = document.createElement('a');
      link.href = productUrl(product);
      link.textContent = product.name;
      title.append(link);
      const meta = document.createElement('p');
      meta.className = 'catalog-card-meta';
      meta.textContent = product.id ? `ID ${product.id}` : 'Imported catalog record';
      const price = document.createElement('strong');
      price.className = 'catalog-card-price';
      price.textContent = priceLabel(product);
      const action = document.createElement('a');
      action.className = 'catalog-open';
      action.href = productUrl(product);
      action.textContent = 'Open local product details →';
      card.append(category, title, meta, price, action);
      host.append(card);
    });
  }

  function renderPager(host, total, current, hrefFor) {
    host.replaceChildren();
    const pages = Math.max(1, Math.ceil(total / pageSize));
    if (pages === 1) return;
    const start = Math.max(1, current - 2);
    const end = Math.min(pages, start + 4);
    if (current > 1) {
      const prev = document.createElement('a');
      prev.href = hrefFor(current - 1);
      prev.textContent = '← Previous';
      host.append(prev);
    }
    for (let i = start; i <= end; i += 1) {
      const link = document.createElement('a');
      link.href = hrefFor(i);
      link.textContent = String(i);
      if (i === current) link.className = 'active';
      host.append(link);
    }
    if (current < pages) {
      const next = document.createElement('a');
      next.href = hrefFor(current + 1);
      next.textContent = 'Next →';
      host.append(next);
    }
  }

  function renderCategories() {
    const category = params.get('category') || '';
    const sort = params.get('sort') || 'latest';
    const current = Math.max(1, Number(params.get('page')) || 1);
    const heading = $('#catalogHeading');
    const intro = $('#catalogIntro');
    const categoryGrid = $('#categoryGrid');
    const list = (category ? products.filter(product => product.category === category) : [...products]);
    if (sort === 'price-low') list.sort((a, b) => Number(a.price || 0) - Number(b.price || 0));
    if (sort === 'price-high') list.sort((a, b) => Number(b.price || 0) - Number(a.price || 0));
    if (sort === 'name') list.sort((a, b) => a.name.localeCompare(b.name));
    const categoryInfo = catalog.categories.find(item => item.slug === category);
    heading.textContent = categoryInfo ? `${categoryInfo.label} catalog` : 'All product categories';
    intro.textContent = categoryInfo
      ? `${plural(list.length)} imported from the FindSpreadsheet public catalog. Open any item without leaving this subsite.`
      : `${plural(products.length)} across ${catalog.categories.length} FindSpreadsheet categories. Choose a category or open any local product detail page.`;
    categoryGrid.replaceChildren();
    const counts = new Map();
    products.forEach(product => counts.set(product.category, (counts.get(product.category) || 0) + 1));
    catalog.categories.forEach(item => {
      const count = counts.get(item.slug) || 0;
      const link = document.createElement('a');
      link.href = categoryUrl(item.slug);
      link.innerHTML = `<span>${item.label}</span><b>${count.toLocaleString()} →</b>`;
      categoryGrid.append(link);
    });
    const toolbar = $('#catalogToolbar');
    toolbar.replaceChildren();
    const resultNote = document.createElement('span');
    resultNote.className = 'catalog-result-note';
    resultNote.textContent = `${plural(list.length)} · local catalog`;
    const controls = document.createElement('div');
    controls.className = 'catalog-controls';
    const searchLink = document.createElement('a');
    searchLink.href = 'search.html';
    searchLink.textContent = 'Search catalog';
    const select = document.createElement('select');
    select.setAttribute('aria-label', 'Sort products');
    [['latest', 'Latest imported'], ['name', 'Name A–Z'], ['price-low', 'Price: low to high'], ['price-high', 'Price: high to low']].forEach(([value, label]) => {
      const option = document.createElement('option');
      option.value = value;
      option.textContent = label;
      option.selected = value === sort;
      select.append(option);
    });
    select.addEventListener('change', () => {
      const next = new URLSearchParams();
      if (category) next.set('category', category);
      if (select.value !== 'latest') next.set('sort', select.value);
      location.href = `categories.html?${next.toString()}`;
    });
    controls.append(searchLink, select);
    toolbar.append(resultNote, controls);
    const from = (current - 1) * pageSize;
    renderProductList($('#catalogProducts'), list.slice(from, from + pageSize), 'No products were found in this category.');
    renderPager($('#catalogPager'), list.length, current, page => `categories.html?${new URLSearchParams({ ...(category ? { category } : {}), ...(sort !== 'latest' ? { sort } : {}), page }).toString()}`);
  }

  function renderSearch() {
    const query = (params.get('q') || '').trim();
    const current = Math.max(1, Number(params.get('page')) || 1);
    const input = $('#catalogSearchInput');
    input.value = query;
    const normalized = query.toLowerCase();
    const matched = normalized ? products.filter(product => [product.name, product.id, product.categoryLabel].join(' ').toLowerCase().includes(normalized)) : products;
    $('#searchHeading').textContent = query ? `Results for “${query}”` : 'Search the imported catalog';
    $('#searchMeta').textContent = query ? `${plural(matched.length)} match this local search.` : `${plural(products.length)} ready to search inside this subsite.`;
    const from = (current - 1) * pageSize;
    renderProductList($('#searchProducts'), matched.slice(from, from + pageSize), 'No matching local products. Try a category, product name, or ID.');
    renderPager($('#searchPager'), matched.length, current, page => `search.html?${new URLSearchParams({ ...(query ? { q: query } : {}), page }).toString()}`);
  }

  function renderDetail() {
    const requested = params.has('product') || params.has('id');
    const product = productFromParams() || (!requested ? products[0] : null);
    const host = $('#productDetail');
    if (!product) {
      host.innerHTML = '<p class="catalog-empty">This product record is not in the imported catalog. Use the local directory to find it.</p><a class="button" href="search.html">Open local search</a>';
      return;
    }
    document.title = `${product.name} | LitBuy Spreadsheet`;
    host.replaceChildren();
    const crumb = document.createElement('a');
    crumb.className = 'catalog-back';
    crumb.href = categoryUrl(product.category);
    crumb.textContent = `← ${product.categoryLabel} catalog`;
    const heading = document.createElement('header');
    heading.className = 'catalog-detail-heading';
    const tag = document.createElement('p');
    tag.className = 'label';
    tag.textContent = product.categoryLabel;
    const title = document.createElement('h1');
    title.className = 'catalog-detail-title';
    title.textContent = product.name;
    const gallery = document.createElement('section');
    gallery.className = 'catalog-gallery';
    const media = [...new Set((product.detailImages || []).filter(Boolean))];
    const mainImage = document.createElement('img');
    mainImage.className = 'catalog-main-image';
    mainImage.src = media[0] || product.thumbnail || '';
    mainImage.alt = `${product.name} product image`;
    mainImage.loading = 'eager';
    const figure = document.createElement('div');
    figure.className = 'catalog-main-figure';
    figure.append(mainImage);
    gallery.append(figure);
    if (media.length > 1) {
      const thumbs = document.createElement('div');
      thumbs.className = 'catalog-image-thumbs';
      media.forEach((url, index) => {
        const thumb = document.createElement('button');
        thumb.type = 'button';
        thumb.className = index === 0 ? 'active' : '';
        thumb.setAttribute('aria-label', `View image ${index + 1}`);
        const image = document.createElement('img');
        image.src = url;
        image.alt = '';
        thumb.append(image);
        thumb.addEventListener('click', () => {
          mainImage.src = url;
          thumbs.querySelectorAll('button').forEach(button => button.classList.remove('active'));
          thumb.classList.add('active');
        });
        thumbs.append(thumb);
      });
      gallery.append(thumbs);
    }
    const continuous = document.createElement('section');
    continuous.className = 'catalog-continuous-images';
    // Prefer verified QC images below. If a record has no QC set, keep the
    // useful fallback requested for the catalog: that product's own Weidian
    // image series, never imagery from a different product.
    const hasQcImages = Boolean(product.qcImages && product.qcImages.length);
    const longImages = [...new Set((hasQcImages ? product.qcImages : media).filter(Boolean))];
    longImages.forEach((url, index) => {
      const image = document.createElement('img');
      image.src = url;
      image.alt = `${product.name} ${hasQcImages ? 'QC' : 'Weidian'} image ${index + 1}`;
      image.loading = index < 2 ? 'eager' : 'lazy';
      continuous.append(image);
    });
    const information = document.createElement('section');
    information.className = 'catalog-product-information';
    const sideTitle = document.createElement('h2');
    sideTitle.className = 'catalog-side-title';
    sideTitle.textContent = product.name;
    const facts = document.createElement('div');
    facts.className = 'catalog-facts';
    const fields = [['Estimated price (USD)', priceLabel(product)], ['Category', product.categoryLabel], ['Product ID', product.purchaseId || product.id || 'No numeric ID supplied']];
    fields.forEach(([label, value]) => {
      const item = document.createElement('div');
      item.innerHTML = `<span>${label}</span><b>${value}</b>`;
      facts.append(item);
    });
    const actions = document.createElement('div');
    actions.className = 'catalog-actions';
    const search = document.createElement('a');
    search.className = 'button';
    search.href = product.purchaseId ? `https://litbuy.com/product/weidian/${encodeURIComponent(product.purchaseId)}` : categoryUrl(product.category);
    search.textContent = product.purchaseId ? 'Buy this product on LitBuy' : 'Browse product category';
    const category = document.createElement('a');
    category.className = 'catalog-text-link';
    category.href = categoryUrl(product.category);
    category.textContent = `Browse ${product.categoryLabel} →`;
    actions.append(search, category);
    heading.append(tag, title);
    information.append(sideTitle, facts, actions);
    // Keep all of the product imagery in one uninterrupted visual column.
    // Product facts and the purchase action remain visible alongside it.
    const mediaColumn = document.createElement('div');
    mediaColumn.className = 'catalog-product-media';
    mediaColumn.append(heading, gallery, continuous);
    const layout = document.createElement('div');
    layout.className = 'catalog-detail-layout';
    layout.append(mediaColumn, information);
    host.append(crumb, layout);
  }

  if ($('#categoryGrid')) renderCategories();
  if ($('#catalogSearchForm')) renderSearch();
  if ($('#productDetail')) renderDetail();
})();
