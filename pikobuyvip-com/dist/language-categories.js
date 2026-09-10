(() => {
  const style = document.createElement('style');
  style.textContent = `
    :root{--ink:#050b22;--blue:#ff6b00;--cyan:#ff6b00;--lime:#ff6b00;--paper:#ffffff;--line:#e8e3de;--muted:#53627a}
    html,body,.page,.page.active{background:#fff!important;color:#050b22!important}
    .notice,footer,.proof{background:#050b22!important;color:#fff}.nav{background:#fff!important}.links a:hover,.kicker,.n{color:#ff6b00}.lang{background:#fff;border-color:#e8e3de;color:#050b22}
    .hero{background:#fff;color:#050b22}.hero:before{background:linear-gradient(90deg,rgba(255,255,255,.97) 12%,rgba(255,255,255,.92) 58%,rgba(255,255,255,.42) 100%)}.hero h1 em{color:#ff6b00}.lede{color:#394a67}.eyebrow{border-color:#f0dcd0;color:#3b4a64;background:#fff}.eyebrow b{background:#ff6b00}.hero-note{color:#53627a}
    .search{background:#fff;border:1px solid #e8e3de;border-radius:28px;padding:5px}.search input{color:#050b22}.button{background:#050b22;border-radius:24px}.button:hover{background:#ff6b00}
    .rail-inner,.card,.faq details{background:#fff;border-color:#e8e3de;box-shadow:0 14px 32px #050b220d}.split{background:#fff}.country{border-color:#e8e3de}.cta{background:#fff5ef}.cta .button{background:#050b22}
    .proof .section-head p,.proof-grid p{color:#d7deed}.proof-grid article{border-color:#293553}
    section{padding:42px 0}.page>section{padding-top:28px;padding-bottom:32px}.page .section-head{margin-top:0}
    @media (min-width: 781px){.category-grid{width:min(1320px,calc(100vw - 40px));margin-left:50%;transform:translateX(-50%)}}
    .category-grid{background:#fff7f2}.category{cursor:pointer;background:#fff;color:#050b22;border-color:#e8e3de;box-shadow:0 10px 26px #050b220d}.category:focus-visible{outline:3px solid #ff6b00;outline-offset:3px}.category:hover{border-color:#ffb17b;box-shadow:0 14px 30px #ff6b0018;transform:translateY(-2px)}.category-icon{background:#fff0e5;color:#ff6b00}.category-copy h3{color:#050b22}.category-copy p{color:#53627a}.category-button{color:#ff6b00}.category-button:hover{color:#b94700}
    @media(max-width:780px){.notice{padding:4px 16px;font-size:.68rem}.hero{min-height:360px}.hero .wrap{padding:28px 0 22px}.hero h1{font-size:clamp(2rem,10vw,3rem);margin:10px 0}.lede{font-size:.94rem;margin:0}.search{margin-top:12px}.rail-inner{padding:12px;gap:8px}.rail strong{font-size:1.1rem}section,.page>section{padding:24px 0}.section-head h2{margin:6px 0 10px}.section-head p{font-size:.94rem}.flow,.proof-grid{gap:10px;margin-top:18px}.card{min-height:auto;padding:16px}.split-grid{gap:16px}.country-list{gap:6px}.country{padding:9px}.faq{gap:8px;margin-top:18px}.faq details{padding:12px}.cta{padding:30px 0}.category-grid{padding:10px;gap:8px}.category{min-height:162px;padding:12px 9px}.category-copy p{min-height:42px;font-size:.71rem}.category-icon{width:46px;height:46px;font-size:1.25rem}footer{padding:20px 0}}
  `;
  document.head.append(style);

  const categories = [
    ['Shoes','Premium footwear collections and latest releases.','◉','https://findspreadsheet.com/shoes/'],
    ['Hoodies/Sweaters','Cozy hoodies and stylish sweaters for every season.','⌂','https://findspreadsheet.com/hoodies-sweaters/'],
    ['T-Shirts','Trendy graphic tees and essential basics.','✦','https://findspreadsheet.com/t-shirts/'],
    ['Jackets','Outerwear from bombers to parkas for all weather.','▣','https://findspreadsheet.com/jackets/'],
    ['Pants/Shorts','Bottoms from cargo pants to athletic shorts.','═','https://findspreadsheet.com/pants-shorts/'],
    ['Headwear','Caps, beanies and hats to complete your look.','◌','https://findspreadsheet.com/headwear/'],
    ['Sets','Coordinated outfit sets for effortless style.','≋','https://findspreadsheet.com/ShortSets/'],
    ['Underwear/Underpants','Comfort essentials and premium undergarments.','□','https://findspreadsheet.com/other-stuff/'],
    ['Jersey','Sports jerseys and athletic performance wear.','◉','https://findspreadsheet.com/jersey/'],
    ['Accessories','Bags, jewelry and finishing touches for any outfit.','⌂','https://findspreadsheet.com/accessories/']
  ];

  renderCats = function(){
    const cards = categories.map(([name,detail,icon,href]) => `<a class="category" href="${href}" aria-label="Explore ${name} on FindSpreadsheet"><div class="category-icon" aria-hidden="true">${icon}</div><div class="category-copy"><h3>${name}</h3><p>${detail}</p></div><span class="category-button">Explore →</span></a>`).join('');
    document.querySelectorAll('#categories,#categories2').forEach(node => { if (node) node.innerHTML = cards; });
  };
  renderCats();

  const accepted = new Set(['en','de','fr','es','it','pt','nl','pl','sv']);
  const query = new URLSearchParams(location.search);
  const pageNames = new Set(['home','categories','qc','shipping','articles','faq']);
  const pathName = location.pathname.split('/').filter(Boolean).filter(x => !accepted.has(x)).pop();
  const activePage = pageNames.has(query.get('page')) ? query.get('page') : (pageNames.has(pathName) ? pathName : 'home');
  document.querySelectorAll('.page').forEach(node => node.classList.toggle('active', node.dataset.page === activePage));
  const requested = new URLSearchParams(location.search).get('lang');
  const routeLanguage = location.pathname.split('/').filter(Boolean)[0];
  const code = accepted.has(requested) ? requested : (accepted.has(routeLanguage) ? routeLanguage : 'en');
  const oldSelect = document.querySelector('#lang');
  if (!oldSelect) return;
  const select = oldSelect.cloneNode(true);
  oldSelect.replaceWith(select);
  select.value = code;
  if (code !== 'en' && typeof translate === 'function') translate(code);
  // The in-place language controller is attached by full-language-ui.js.

  const navPages = ['home','categories','qc','shipping','articles','faq'];
  document.querySelectorAll('.links a').forEach((link, index) => {
    const target = navPages[index] || 'home';
    const params = new URLSearchParams();
    if (code !== 'en') params.set('lang', code);
    if (target !== 'home') params.set('page', target);
    link.href = '/' + (params.toString() ? '?' + params.toString() : '');
  });

  const originalSearchForm = document.querySelector('#search');
  const searchForm = originalSearchForm && originalSearchForm.cloneNode(true);
  if (originalSearchForm && searchForm) originalSearchForm.replaceWith(searchForm);
  const searchInput = searchForm && searchForm.querySelector('#q');
  if (searchForm && searchInput) {
    searchForm.action = 'https://findspreadsheet.com/search.html';
    searchForm.method = 'get';
    searchInput.name = 'keywords';
    let channel = searchForm.querySelector('input[name="channelid"]');
    if (!channel) { channel = document.createElement('input'); channel.type = 'hidden'; channel.name = 'channelid'; searchForm.append(channel); }
    channel.value = '2';
    searchForm.addEventListener('submit', event => {
      event.preventDefault();
      const keyword = searchInput.value.trim();
      if (keyword) location.assign('https://findspreadsheet.com/search.html?keywords=' + encodeURIComponent(keyword) + '&channelid=2');
      else searchInput.focus();
    });
  }
})();
