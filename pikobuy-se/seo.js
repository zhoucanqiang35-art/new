/* Search metadata and visible-content schema for pikobuy.se. */
(function () {
  var path = location.pathname.replace(/\/$/, '') || '/';
  var data = {
    '/': { name: 'PikoBuy Spreadsheet Research Guide', type: 'WebSite', description: 'Independent product research guide for spreadsheet finds, categories and QC checks.' },
    '/categories': { name: 'PikoBuy Spreadsheet Categories', type: 'CollectionPage', description: 'Independent category research hub for product discovery.' },
    '/details': { name: 'PikoBuy Spreadsheet Product Checks', type: 'WebPage', description: 'Independent product-listing and QC research checklist.' },
    '/articles': { name: 'PikoBuy Spreadsheet Guide: QC, Shipping & Returns', type: 'Article', description: 'Fact-based PikoBuy research covering product links, QC photos, shipping and returns.' },
    '/faq': { name: 'PikoBuy FAQ: Spreadsheet, QC Photos & Returns', type: 'FAQPage', description: 'Fact-based answers about PikoBuy product research and warehouse decisions.' }
  };
  var entry = data[path] || data['/'];
  var canonical = 'https://pikobuy.se' + path;
  var nodes = [{
    '@context': 'https://schema.org',
    '@type': entry.type,
    name: entry.name,
    description: entry.description,
    url: canonical,
    inLanguage: document.documentElement.lang || 'en',
    isPartOf: { '@type': 'WebSite', name: 'PikoBuy Spreadsheet Research Guide', url: 'https://pikobuy.se/' }
  }, {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pikobuy.se/' },
      { '@type': 'ListItem', position: 2, name: entry.name, item: canonical }
    ]
  }];
  nodes.forEach(function (value) {
    var tag = document.createElement('script');
    tag.type = 'application/ld+json';
    tag.text = JSON.stringify(value);
    document.head.appendChild(tag);
  });
})();