(()=>{
  const select=document.querySelector('.site-language:not(#language)');
  if(!select)return;
  const key='usfans-guide-language';
  const url=new URL(location.href);
  const lang=url.searchParams.get('lang')||localStorage.getItem(key)||'en';
  select.value=lang;
  document.querySelectorAll('[data-route]').forEach(a=>{
    const u=new URL(a.dataset.route,location.origin);u.searchParams.set('lang',lang);a.href=u.pathname+u.search+u.hash;
  });
  select.addEventListener('change',()=>{
    localStorage.setItem(key,select.value);
    const next=new URL(location.href);next.searchParams.set('lang',select.value);
    location.href=next.pathname+next.search+next.hash;
  });
  const purchasePages=[
    'https://findspreadsheet.com/shoes/oblique-pattern-pool-slides-5974.html',
    'https://findspreadsheet.com/hoodies-sweaters/crewneck-cable-knit-sweater-7354.html',
    'https://findspreadsheet.com/t-shirts/oversized-solid-color-short-sleeve-t-shirt-7077.html',
    'https://findspreadsheet.com/jackets/multi-pocket-hooded-utility-jacket-6436.html',
    'https://findspreadsheet.com/pants-shorts/xinkuanchaoliubaidashorts-137-6969.html',
    'https://findspreadsheet.com/headwear/carhartt-cap-2626.html',
    'https://findspreadsheet.com/accessories/heart-and-swan-pendant-necklace-2136-8003.html',
    'https://findspreadsheet.com/jersey/2026-world-cup-national-team-football-jerseys-7644.html',
    'https://findspreadsheet.com/electronics/lili-pb4-pro2wuxianlanyaerjipower-pro2zhongdiyinyundongergualitishengdaidonghua-7029.html',
    'https://findspreadsheet.com/other-stuff/whiskey-bottle-building-block-gift-set-5669.html'
  ];
  document.querySelectorAll('.product-card').forEach((card,index)=>{if(purchasePages[index])card.href=purchasePages[index]});
  const localeScript=document.createElement('script');
  localeScript.src='/site-i18n.js?v=15';
  localeScript.defer=true;
  document.head.appendChild(localeScript);
})();
