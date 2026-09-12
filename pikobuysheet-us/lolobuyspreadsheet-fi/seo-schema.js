/* Shared technical SEO for the static directory. Core copy remains server-rendered HTML. */
(function () {
  const origin = 'https://lolobuyspreadsheet.fi';
  const path = location.pathname.replace(/index\.html$/, '');
  const canonical = origin + (path === '' ? '/' : path);
  const names = {
    '/': 'LoloBuy Spreadsheet Finland | Product Research Directory',
    '/categories/': 'LoloBuy Product Categories | Research Directory',
    '/product-details/': 'How to Research Product Listing Details',
    '/seo-articles/': 'LoloBuy Research Guides',
    '/faq/': 'LoloBuy Spreadsheet FAQ',
    '/seo-articles/read-a-product-listing/': 'How to Read a Product Listing Before Using an Agent',
    '/seo-articles/qc-photos-guide/': 'QC Photos: What to Check Before You Decide',
    '/seo-articles/parcel-planning/': 'Parcel Planning Guide for European Buyers'
  };
  const title = names[path] || names['/'];
  document.title = title;
  const link = document.createElement('link'); link.rel = 'canonical'; link.href = canonical; document.head.append(link);
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = 'Independent LoloBuy product research directory. Compare listing details, visible evidence and current information before opening FindSpreadsheet.';
  const breadcrumb = [{ '@type':'ListItem', position:1, name:'Home', item:origin + '/' }];
  if (path !== '/') breadcrumb.push({ '@type':'ListItem', position:2, name:title.replace(/ \|.*/, ''), item:canonical });
  const graph = [
    { '@context':'https://schema.org', '@type':'WebSite', name:'LoloBuy Spreadsheet Finland', url:origin + '/', inLanguage:'en', potentialAction:{ '@type':'SearchAction', target:'https://findspreadsheet.com/search.html?keywords={search_term_string}', 'query-input':'required name=search_term_string' } },
    { '@context':'https://schema.org', '@type':'BreadcrumbList', itemListElement:breadcrumb }
  ];
  if (path === '/categories/') graph.push({ '@context':'https://schema.org', '@type':'ItemList', name:'LoloBuy Product Research Categories', numberOfItems:10, itemListElement:['Shoes','Hoodies and Sweaters','T-shirts','Jackets','Pants and Shorts','Headwear','Accessories','Jerseys','Electronics','Other Finds'].map((name,i)=>({ '@type':'ListItem', position:i+1, name })) });
  if (path.indexOf('/seo-articles/') === 0 && path !== '/seo-articles/') graph.push({ '@context':'https://schema.org', '@type':'Article', headline:title, mainEntityOfPage:canonical, inLanguage:'en', publisher:{ '@type':'Organization', name:'LoloBuy Spreadsheet Finland', url:origin + '/' } });
  graph.forEach(data => { const node=document.createElement('script'); node.type='application/ld+json'; node.text=JSON.stringify(data); document.head.append(node); });
}());
