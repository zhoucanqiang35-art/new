/* Shared technical SEO for the static directory. Core copy remains server-rendered HTML. */
(function () {
  const origin = 'https://lolobuyspreadsheet.fi';
  const path = location.pathname.replace(/index\.html$/, '');
  const canonical = origin + (path === '' ? '/' : path);
  const names = {
    '/': 'LoloBuy Spreadsheet 2026 | Finds, QC & Shipping Guides',
    '/categories/': 'LoloBuy Spreadsheet Categories | Shoes, Clothing & Finds',
    '/product-details/': 'LoloBuy Product Details | Compare Listings and Options',
    '/seo-articles/': 'LoloBuy Spreadsheet Guides | Finds, QC & Shipping',
    '/faq/': 'LoloBuy Spreadsheet FAQ | Product Research and QC',
    '/seo-articles/read-a-product-listing/': 'LoloBuy Product Listing Guide | Compare Options and Prices',
    '/seo-articles/qc-photos-guide/': 'LoloBuy QC Photos Guide | What to Check',
    '/seo-articles/parcel-planning/': 'LoloBuy Shipping Guide | Parcel Planning and Costs'
  };
  const title = names[path] || names['/'];
  const breadcrumb = [{ '@type':'ListItem', position:1, name:'Home', item:origin + '/' }];
  if (path !== '/') breadcrumb.push({ '@type':'ListItem', position:2, name:title.replace(/ \|.*/, ''), item:canonical });
  const graph = [
    { '@context':'https://schema.org', '@type':'WebSite', name:'LoloBuy Spreadsheet Finland', url:origin + '/', inLanguage:'en', potentialAction:{ '@type':'SearchAction', target:'https://findspreadsheet.com/search.html?keywords={search_term_string}', 'query-input':'required name=search_term_string' } },
    { '@context':'https://schema.org', '@type':'BreadcrumbList', itemListElement:breadcrumb }
  ];
  if (path === '/categories/') graph.push({ '@context':'https://schema.org', '@type':'ItemList', name:'LoloBuy Product Research Categories', numberOfItems:10, itemListElement:['Shoes','Hoodies and Sweaters','T-shirts','Jackets','Pants and Shorts','Headwear','Accessories','Jerseys','Electronics','Other Finds'].map((name,i)=>({ '@type':'ListItem', position:i+1, name })) });
  const requestedLanguage = new URLSearchParams(location.search).get('lang') || localStorage.getItem('lsfi-lang') || 'en';
  if (requestedLanguage === 'en' && path.indexOf('/seo-articles/') === 0 && path !== '/seo-articles/') graph.push({ '@context':'https://schema.org', '@type':'Article', headline:(document.querySelector('main h1')?.textContent.trim() || title), mainEntityOfPage:canonical, inLanguage:'en', publisher:{ '@type':'Organization', name:'LoloBuy Spreadsheet Finland', url:origin + '/' } });
  graph.forEach(data => { const node=document.createElement('script'); node.type='application/ld+json'; node.text=JSON.stringify(data); document.head.append(node); });
}());
