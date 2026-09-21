import { faqs as litbuyFaqs } from '/litbuy-research.js';

const products=[
  {name:'Classic Versatile Fashion Jacket',price:'$48.97',url:'https://findspreadsheet.com/jackets/classic-versatile-fashion-jacket-6129.html',image:'https://findspreadsheet.com/uploads/allimg/20260918/1-26091QGKB62.jpg'},
  {name:'TOU-4 Premium Windbreaker Set',price:'$45.98',url:'https://findspreadsheet.com/ShortSets/tou-4-premium-windbreaker-set-6128.html',image:'https://findspreadsheet.com/uploads/allimg/20260918/1-26091QGGO12.jpg'},
  {name:'T1 Running Sports Jacket Collection',price:'$42.40',url:'https://findspreadsheet.com/jackets/t1-running-sports-jacket-collection-6127.html',image:'https://findspreadsheet.com/uploads/allimg/20260918/1-26091QG639441.jpg'},
  {name:'BOK02 Fashion Waterproof Jacket',price:'$90.48',url:'https://findspreadsheet.com/jackets/bok02-fashion-waterproof-jacket-6126.html',image:'https://findspreadsheet.com/uploads/allimg/20260918/1-26091QG52UU.jpg'},
  {name:'SUP Bullet Screen Puffer Jacket',price:'$168.71',url:'https://findspreadsheet.com/jackets/sup-bullet-screen-puffer-jacket-6125.html',image:'https://findspreadsheet.com/uploads/allimg/20260918/1-26091QG440394.jpg'},
  {name:'The North Face 1996 Puffer Jacket',price:'$138.85',url:'https://findspreadsheet.com/jackets/the-north-face-1996-puffer-jacket-6124.html',image:'https://findspreadsheet.com/uploads/allimg/20260918/1-26091QG339504.jpg'},
  {name:'Classic Fashion Jacket',price:'$195.58',url:'https://findspreadsheet.com/jackets/classic-fashion-jacket-6123.html',image:'https://findspreadsheet.com/uploads/allimg/20260918/1-26091QG30W24.jpg'},
  {name:'Premium Factory Sweatshirt S',price:'$25.08',url:'https://findspreadsheet.com/hoodies-sweaters/premium-factory-sweatshirt-s-6122.html',image:'https://findspreadsheet.com/uploads/allimg/20260918/1-26091QG22W18.jpg'},
  {name:'DJ Island Print Denim Jacket and Jeans Set',price:'$52.85',url:'https://findspreadsheet.com/pants-shorts/dj-island-print-denim-jacket-and-jeans-set-6121.html',image:'https://findspreadsheet.com/uploads/allimg/20260918/1-26091QG10Y53.jpg'},
  {name:'DJ Jump2 Alcatraz Print Denim Shorts',price:'$42.70',url:'https://findspreadsheet.com/pants-shorts/dj-jump2-alcatraz-print-denim-shorts-6120.html',image:'https://findspreadsheet.com/uploads/allimg/20260918/1-26091QG020X9.jpg'},
  {name:'JMS-0926107 Puffer Jacket',price:'$147.81',url:'https://findspreadsheet.com/jackets/jms-0926107-puffer-jacket-6119.html',image:'https://findspreadsheet.com/uploads/allimg/20260918/1-26091QF935C4.jpg'},
  {name:'1996 Premium Puffer Jacket Multiple Colors',price:'$45.98',url:'https://findspreadsheet.com/jackets/jiuse-xinzeng15se-1996yurongmianfubiaopeisongzhengpinshoutidai-xuanyonggaopinzhiyurongmian-baomanyoudanxing-huidanlichaohao-jinkoujijingmicixiu-yuanchangdingzhilalian-xinzeng15zhongyanse-6118.html',image:'https://findspreadsheet.com/uploads/allimg/20260918/1-26091QA034438.jpg'}
];

const categoryRoutes=[
  'https://findspreadsheet.com/shoes/',
  'https://findspreadsheet.com/hoodies-sweaters/',
  'https://findspreadsheet.com/t-shirts/',
  'https://findspreadsheet.com/jackets/',
  'https://findspreadsheet.com/pants-shorts/',
  'https://findspreadsheet.com/headwear/',
  'https://findspreadsheet.com/accessories/',
  'https://findspreadsheet.com/jersey/',
  'https://findspreadsheet.com/electronics/',
  'https://findspreadsheet.com/other-stuff/'
];

const faqs=litbuyFaqs;

export function mount(){
  if((location.pathname.replace(/\/$/,'')||'/')!=='/'||document.querySelector('.product-showcase'))return;
  if(!window.__litCategoryRoutesBound){
    window.__litCategoryRoutesBound=true;
    document.addEventListener('click',event=>{
      const row=event.target.closest('.collection-row');
      if(!row)return;
      const route=categoryRoutes[Number(row.dataset.c)];
      if(!route)return;
      event.preventDefault();
      event.stopImmediatePropagation();
      window.location.assign(route);
    },true);
  }
  const categoryIntro=document.querySelector('.collection-intro p');
  if(categoryIntro)categoryIntro.textContent='Choose any category to open its matching FindSpreadsheet category page directly.';
  const anchor=document.querySelector('.muse-footer-grid');
  if(!anchor)return;
  const section=document.createElement('section');
  section.className='product-showcase';
  section.innerHTML=`
    <div class="product-showcase-head">
      <div><span class="muse-kicker">PRODUCT DETAILS / MAIN SITE</span><h2>Current product selections.</h2></div>
      <p>12 current product pages, with estimated USD prices and a direct route to the full detail page.</p>
    </div>
    <div class="product-grid">${products.map((product,index)=>`<a class="product-card" href="${product.url}"><div class="product-image"><img src="${product.image}" alt="${product.name}" loading="lazy"></div><div class="product-copy"><span class="product-number">${String(index+1).padStart(2,'0')} / PRODUCT DETAIL</span><h3>${product.name}</h3><div class="product-meta"><span><small>ESTIMATED USD PRICE</small><strong>${product.price}</strong></span><b>VIEW DETAILS ↗</b></div></div></a>`).join('')}</div>
    <p class="product-note">USD estimates use 1 CNY ≈ $0.1493. Prices and exchange rates can change; confirm the current price and options on the product page.</p>`;
  anchor.insertAdjacentElement('beforebegin',section);
  const faq=document.createElement('section');
  faq.className='home-faq';
  faq.innerHTML=`<div class="home-faq-head"><span class="muse-kicker">FAQ / COMMON QUESTIONS</span><h2>Clear answers, at the end of the index.</h2></div><div class="home-faq-list">${faqs.map((item,index)=>`<details${index===0?' open':''}><summary><span>${String(index+1).padStart(2,'0')}</span>${item[0]}<b>+</b></summary><p>${item[1]}</p></details>`).join('')}</div>`;
  anchor.insertAdjacentElement('afterend',faq);
  if(!document.querySelector('#product-showcase-style')){
    const style=document.createElement('style');
    style.id='product-showcase-style';
    style.textContent=`
      .product-showcase{padding:76px 0 82px;border-top:1px solid var(--line)}
      .product-showcase-head{display:flex;justify-content:space-between;gap:42px;align-items:end;margin-bottom:32px}
      .product-showcase h2{font:800 clamp(2.8rem,5vw,5.2rem)/.88 Manrope,Arial,sans-serif;letter-spacing:-.09em;margin:15px 0 0;color:#fff}
      .product-showcase-head p{max-width:310px;margin:0;color:#BDB4C4;font-size:14px;line-height:1.55}
      .product-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));border-top:1px solid var(--line);border-left:1px solid var(--line)}
      .product-card{display:block;color:#fff;border-right:1px solid var(--line);border-bottom:1px solid var(--line);background:#17111e;transition:background .18s,transform .18s;overflow:hidden}
      .product-card:hover,.product-card:focus-visible{background:#241537;outline:0;transform:translateY(-4px);box-shadow:0 13px 28px rgba(0,0,0,.24);position:relative;z-index:1}
      .product-image{aspect-ratio:1.28;overflow:hidden;background:#241537}
      .product-image img{display:block;width:100%;height:100%;object-fit:cover;transition:transform .35s ease}
      .product-card:hover .product-image img{transform:scale(1.045)}
      .product-copy{padding:18px 18px 16px}
      .product-number{display:block;color:#cb9bff;font:10px 'DM Mono',monospace;letter-spacing:.1em}
      .product-card h3{min-height:48px;margin:11px 0 18px;font:800 20px/1.04 Manrope,Arial,sans-serif;letter-spacing:-.055em}
      .product-meta{display:flex;justify-content:space-between;align-items:end;gap:12px;border-top:1px solid rgba(216,213,226,.28);padding-top:13px}
      .product-meta small{display:block;font:9px 'DM Mono',monospace;letter-spacing:.08em;color:#BDB4C4}.product-meta strong{display:block;margin-top:4px;font:800 25px/1 Manrope,Arial,sans-serif;color:#fff}
      .product-meta b{font:10px 'DM Mono',monospace;letter-spacing:.06em;color:#d8b5ff;text-align:right}
      .product-note{max-width:610px;margin:18px 0 0;color:#BDB4C4;font-size:12px;line-height:1.5}
      .home-faq{padding:76px 0 88px;border-top:1px solid var(--line)}.home-faq-head{display:flex;justify-content:space-between;gap:36px;align-items:end;margin-bottom:28px}.home-faq h2{max-width:700px;margin:15px 0 0;color:#fff;font:800 clamp(2.5rem,5vw,5.1rem)/.9 Manrope,Arial,sans-serif;letter-spacing:-.09em}.home-faq-list{border-top:1px solid var(--line)}.home-faq-list details{border-bottom:1px solid var(--line);padding:0}.home-faq-list summary{display:grid;grid-template-columns:46px 1fr 24px;gap:12px;align-items:center;padding:20px 0;color:#fff;cursor:pointer;font:800 17px/1.25 Manrope,Arial,sans-serif;list-style:none}.home-faq-list summary::-webkit-details-marker{display:none}.home-faq-list summary span{font:10px 'DM Mono',monospace;color:#cb9bff;letter-spacing:.1em}.home-faq-list summary b{font:300 24px/1 Arial;color:#cb9bff;text-align:right}.home-faq-list details[open] summary b{transform:rotate(45deg)}.home-faq-list p{max-width:700px;margin:0 48px 20px 58px;color:#BDB4C4;font-size:14px;line-height:1.6}
      @media(max-width:860px){.muse-hero>div,.muse-hero>div:first-child,.muse-hero>div:last-child{padding-top:23px;padding-bottom:23px}.muse-title{font-size:3.45rem;margin:15px 0 19px}.muse-statement{min-height:0}.muse-statement p{font-size:20px}.muse-route strong{font-size:25px}.muse-collections{padding:36px 0;gap:20px}.collection-intro h2{font-size:38px}.collection-intro p{margin-bottom:0}.muse-preview{height:105px}.collection-list{display:grid;grid-auto-flow:column;grid-template-rows:repeat(2,minmax(0,1fr));grid-auto-columns:minmax(235px,70vw);overflow-x:auto;scroll-snap-type:x mandatory;border-left:1px solid var(--line);scrollbar-width:none}.collection-list::-webkit-scrollbar,.product-grid::-webkit-scrollbar,.muse-footer-grid::-webkit-scrollbar{display:none}.collection-row{height:92px;width:auto;padding:14px;scroll-snap-align:start;border-right:1px solid var(--line);grid-template-columns:34px 1fr 22px}.collection-row:hover,.collection-row:focus-visible{padding-left:14px}.product-showcase{padding:40px 0}.product-showcase-head{display:block;margin-bottom:20px}.product-showcase h2{font-size:38px}.product-showcase-head p{margin-top:12px}.product-grid{display:grid;grid-auto-flow:column;grid-template-rows:repeat(2,minmax(0,1fr));grid-auto-columns:minmax(180px,54vw);overflow-x:auto;scroll-snap-type:x mandatory;border-left:1px solid var(--line)}.product-card{scroll-snap-align:start}.product-copy{padding:12px}.product-card h3{min-height:38px;margin:8px 0 12px;font-size:15px}.product-meta{display:block;padding-top:10px}.product-meta strong{font-size:20px}.product-meta b{display:block;margin-top:9px;text-align:left}.product-image{aspect-ratio:1.22}.product-note{margin-top:12px}.muse-footer-grid{display:flex;overflow-x:auto;scroll-snap-type:x mandatory}.muse-footer-grid>a{min-width:76vw;min-height:144px;padding:20px;scroll-snap-align:start}.muse-footer-grid h3{font-size:23px}.home-faq{padding:42px 0 50px}.home-faq-head{display:block;margin-bottom:18px}.home-faq h2{font-size:36px}.home-faq-list summary{grid-template-columns:30px 1fr 20px;padding:15px 0;font-size:15px}.home-faq-list p{margin:0 20px 15px 30px;font-size:13px;line-height:1.5}}
    `;
    document.head.append(style);
  }
}
