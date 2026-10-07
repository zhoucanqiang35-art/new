/* Keep the confirmed homepage image and its structure identical for every
   locale.  The site renderer supplies the translated copy on each render. */
(() => {
  if (document.body.dataset.page !== 'home') return;

  const categories={en:['Shoes','Hoodies & Sweaters','T-Shirts','Jackets','Pants & Shorts','Headwear','Accessories','Jerseys','Electronics','Other Stuff'],de:['Schuhe','Hoodies & Pullover','T-Shirts','Jacken','Hosen & Shorts','Kopfbedeckung','Accessoires','Trikots','Elektronik','Sonstiges'],fr:['Chaussures','Sweats & pulls','T-shirts','Vestes','Pantalons & shorts','Couvre-chefs','Accessoires','Maillots','Électronique','Autres articles'],es:['Zapatos','Sudaderas y jerséis','Camisetas','Chaquetas','Pantalones y shorts','Gorras y sombreros','Accesorios','Camisetas de fútbol','Electrónica','Otros artículos'],it:['Scarpe','Felpe e maglioni','T-shirt','Giacche','Pantaloni e pantaloncini','Cappelli','Accessori','Maglie sportive','Elettronica','Altri articoli'],pt:['Calçados','Moletons e suéteres','Camisetas','Jaquetas','Calças e shorts','Chapéus','Acessórios','Camisas esportivas','Eletrônicos','Outros itens'],nl:['Schoenen','Hoodies en truien','T-shirts','Jassen','Broeken en shorts','Hoofddeksels','Accessoires','Shirts','Elektronica','Overige items'],pl:['Buty','Bluzy i swetry','T-shirty','Kurtki','Spodnie i szorty','Nakrycia głowy','Akcesoria','Koszulki sportowe','Elektronika','Pozostałe'],sv:['Skor','Hoodies och tröjor','T-shirts','Jackor','Byxor och shorts','Huvudbonader','Accessoarer','Matchtröjor','Elektronik','Övrigt']};
  const routes=['shoes/','hoodies-sweaters/','t-shirts/','jackets/','pants-shorts/','headwear/','accessories/','jersey/','electronics/','other-stuff/'];

  function sendSearch(form) {
    form.onsubmit = event => {
      event.preventDefault();
      const value = form.querySelector('input').value.trim();
      if (value) location.href = 'https://findspreadsheet.com/search.html?keywords=' + encodeURIComponent(value) + '&channelid=2';
    };
  }

  function restoreCanonicalHero() {
    const main = document.querySelector('#app main');
    const hero = main?.querySelector(':scope > .hero');
    if (!hero) return;
    const copy = window.usfansActiveCopy || {};
    const lang = window.usfansActiveLocale || 'en';
    const items = categories[lang] || categories.en;
    hero.className = 'hero canonical-home-hero';
    hero.innerHTML = `<div class="canonical-home-spacer" aria-hidden="true"></div><div class="canonical-home-scene"><div class="canonical-home-index">${items.map((item,index)=>`<a href="https://findspreadsheet.com/${routes[index]}"><span>${item}</span><i>${String(index+1).padStart(2,'0')}</i></a>`).join('')}</div><span class="canonical-home-note">${copy.legacyNote || 'A buying guide, not a store'}</span></div>`;
    const category = main.querySelector('#categories');
    const heading = category?.querySelector('.section-head');
    if (!heading || heading.children.length < 2) return;
    heading.children[0].innerHTML = `<p class="eyebrow">FindSpreadsheet / USFans</p><h2>${copy.legacyHero || copy.hero || 'Find with a little more certainty.'}</h2>`;
    heading.children[1].innerHTML = `<p>${copy.legacyIntro || copy.intro || ''}</p><form class="canonical-home-search" id="legacySearch"><input type="search" placeholder="${copy.legacySearch || copy.search || ''}" required><button>${copy.legacyGo || copy.go || 'Search ↗'}</button></form><p class="canonical-home-hint">${copy.legacyHint || copy.hint || ''}</p>`;
    sendSearch(heading.querySelector('#legacySearch'));
  }

  restoreCanonicalHero();
  document.addEventListener('usfans-rendered', restoreCanonicalHero);
})();
