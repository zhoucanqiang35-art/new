(() => {
  const root = 'https://pikobuyfins.net';
  const langs = ['en','de','fr','es','it','pt','nl','pl','sv'];
  const lang = new URLSearchParams(location.search).get('lang') || 'en';
  const clean = location.pathname.endsWith('/') ? location.pathname : `${location.pathname}/`;
  const current = `${root}${clean}${lang === 'en' ? '' : `?lang=${lang}`}`;
  const titleByPage = {
    home: 'PikoBuy Spreadsheet 2026: Finds, QC Photos & Product Research',
    categories: 'PikoBuy Spreadsheet Categories: Finds, QC Checks & Product Research',
    details: 'PikoBuy Product Research: Links, QC Photos & Shipping Context',
    guides: 'PikoBuy Spreadsheet Guides: QC Photos, Shipping & Returns',
    faq: 'PikoBuy Spreadsheet FAQ: Finds, QC Photos, Shipping & Returns'
  };
  const page = document.body?.dataset.page || 'home';
  const guide = document.body?.dataset.guide;
  const guideTitles = {
    spreadsheet: 'How to Use a PikoBuy Spreadsheet: Finds, Links & QC Context',
    qc: 'PikoBuy QC Photo Checklist: What to Compare Before Shipping',
    shipping: 'PikoBuy Shipping Guide: Weight, Dimensions, Routes & Tracking',
    returns: 'PikoBuy Returns Guide: Warehouse Checks, Eligibility & Timing'
  };
  const renderedHeading = document.querySelector('h1')?.textContent?.trim();
  const title = (lang !== 'en' && renderedHeading) ? renderedHeading : (guideTitles[guide] || titleByPage[page] || document.title);
  const description = guide
    ? `Independent ${title.toLowerCase()} for product research. Compare the available evidence before making an order or shipping decision.`
    : 'Independent PikoBuy spreadsheet research: searchable product finds, product context, QC photos, shipping decisions and FindSpreadsheet discovery.';
  document.title = `${title} | PikoBuy Fins`;
  let desc = document.querySelector('meta[name="description"]');
  if (!desc) { desc = document.createElement('meta'); desc.name = 'description'; document.head.append(desc); }
  desc.content = description;
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.append(canonical); }
  canonical.href = current;
  document.querySelectorAll('link[data-pbf-hreflang]').forEach(node => node.remove());
  langs.forEach(code => {
    const link = document.createElement('link');
    link.rel = 'alternate'; link.hreflang = code; link.dataset.pbfHreflang = '1';
    link.href = `${root}${clean}${code === 'en' ? '' : `?lang=${code}`}`;
    document.head.append(link);
  });
  const fallback = document.createElement('link');
  fallback.rel = 'alternate'; fallback.hreflang = 'x-default'; fallback.dataset.pbfHreflang = '1'; fallback.href = `${root}${clean}`;
  document.head.append(fallback);
  const json = guide ? {
    '@context':'https://schema.org','@type':'Article', headline:title, description,
    inLanguage:lang, mainEntityOfPage:current, dateModified:'2026-10-26',
    author:{'@type':'Organization',name:'PikoBuy Fins'}, publisher:{'@type':'Organization',name:'PikoBuy Fins'}
  } : {
    '@context':'https://schema.org','@type':'WebSite', name:'PikoBuy Fins', url:root,
    description, inLanguage:lang, potentialAction:{'@type':'SearchAction',target:`${root}/?q={search_term_string}`, 'query-input':'required name=search_term_string'}
  };
  let schema = document.querySelector('script[data-pbf-schema]');
  if (!schema) { schema = document.createElement('script'); schema.type = 'application/ld+json'; schema.dataset.pbfSchema = '1'; document.head.append(schema); }
  schema.textContent = JSON.stringify(json);
})();
