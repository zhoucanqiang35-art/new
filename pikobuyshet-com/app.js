(() => {
  'use strict';
  /* Local language packs are bundled with the site. No remote translation is used. */
  const supported = new Set(['en','de','fr','es','it','pt','nl','pl','sv']);
  const labels = {
    en:['Home','Product Categories','Product Details','SEO Articles','FAQ','Open database'],
    de:['Startseite','Produktkategorien','Produktdetails','SEO-Artikel','FAQ','Datenbank öffnen'],
    fr:['Accueil','Catégories produits','Détails du produit','Articles SEO','FAQ','Ouvrir la base'],
    es:['Inicio','Categorías de productos','Detalles del producto','Artículos SEO','FAQ','Abrir base de datos'],
    it:['Home','Categorie prodotto','Dettagli prodotto','Articoli SEO','FAQ','Apri il database'],
    pt:['Início','Categorias de produtos','Detalhes do produto','Artigos SEO','FAQ','Abrir a base de dados'],
    nl:['Home','Productcategorieën','Productdetails','SEO-artikelen','FAQ','Database openen'],
    pl:['Strona główna','Kategorie produktów','Szczegóły produktu','Artykuły SEO','FAQ','Otwórz bazę'],
    sv:['Hem','Produktkategorier','Produktdetaljer','SEO-artiklar','FAQ','Öppna databasen']
  };
  const categoryNames = {
    en:['Shoes','Hoodies','T-Shirts','Jackets','Pants & Shorts','Headwear','Accessories','Jersey','Electronics','Other Finds'],
    de:['Schuhe','Hoodies','T-Shirts','Jacken','Hosen & Shorts','Kopfbedeckung','Accessoires','Trikots','Elektronik','Weitere Funde'],
    fr:['Chaussures','Sweats à capuche','T-shirts','Vestes','Pantalons et shorts','Couvre-chefs','Accessoires','Maillots','Électronique','Autres trouvailles'],
    es:['Zapatos','Sudaderas','Camisetas','Chaquetas','Pantalones y shorts','Sombreros','Accesorios','Camisetas deportivas','Electrónica','Otros hallazgos'],
    it:['Scarpe','Felpe','T-shirt','Giacche','Pantaloni e shorts','Copricapo','Accessori','Maglie sportive','Elettronica','Altre scoperte'],
    pt:['Calçado','Hoodies','T-shirts','Casacos','Calças e calções','Chapelaria','Acessórios','Camisolas desportivas','Eletrónica','Outros achados'],
    nl:['Schoenen','Hoodies','T-shirts','Jassen','Broeken en shorts','Hoofddeksels','Accessoires','Sportshirts','Elektronica','Andere vondsten'],
    pl:['Buty','Bluzy','T-shirty','Kurtki','Spodnie i szorty','Nakrycia głowy','Akcesoria','Koszulki sportowe','Elektronika','Inne znaleziska'],
    sv:['Skor','Hoodies','T-shirts','Jackor','Byxor och shorts','Huvudbonader','Accessoarer','Sporttröjor','Elektronik','Andra fynd']
  };
  const previewLabels = {en:'Preview only',de:'Nur Vorschau',fr:'Aperçu uniquement',es:'Solo vista previa',it:'Solo anteprima',pt:'Apenas pré-visualização',nl:'Alleen voorbeeld',pl:'Tylko podgląd',sv:'Endast förhandsvisning'};
  const categoryLinks = ['https://findspreadsheet.com/shoes/','https://findspreadsheet.com/hoodies-sweaters/','https://findspreadsheet.com/t-shirts/','https://findspreadsheet.com/jackets/','https://findspreadsheet.com/pants-shorts/','https://findspreadsheet.com/headwear/','https://findspreadsheet.com/accessories/','https://findspreadsheet.com/jersey/','https://findspreadsheet.com/electronics/','https://findspreadsheet.com/'];
  const db = 'https://findspreadsheet.com/';
  const articleFrames = {
    en:['A useful decision connects the source, the selected variant and the evidence that can actually be checked.','Keep this note with the result, then compare it again before an irreversible step in the official flow.','That keeps the research concrete: what is visible, what is stated and what remains unanswered before payment.'],
    de:['Eine sinnvolle Entscheidung verbindet Quelle, gewählte Variante und tatsächlich prüfbare Belege.','Halte diese Notiz beim Ergebnis fest und prüfe sie vor einem unumkehrbaren Schritt erneut.','So bleibt die Recherche konkret: Was ist sichtbar, was wird behauptet und was ist vor der Zahlung noch offen?'],
    fr:['Une décision utile relie la source, la variante choisie et les éléments réellement vérifiables.','Conservez cette note avec le résultat et contrôlez-la de nouveau avant une étape irréversible.','La recherche reste ainsi concrète : ce qui est visible, ce qui est indiqué et ce qui reste à vérifier avant paiement.'],
    es:['Una decisión útil relaciona la fuente, la variante elegida y las pruebas que realmente se pueden comprobar.','Guarda esta nota con el resultado y revísala otra vez antes de un paso irreversible.','Así la investigación sigue siendo concreta: qué es visible, qué se afirma y qué queda por comprobar antes de pagar.'],
    it:['Una decisione utile collega fonte, variante scelta ed elementi che si possono davvero verificare.','Conserva questa nota con il risultato e ricontrollala prima di un passaggio irreversibile.','La ricerca resta così concreta: ciò che è visibile, ciò che viene dichiarato e ciò che va verificato prima del pagamento.'],
    pt:['Uma decisão útil liga a fonte, a variante escolhida e as provas que realmente podem ser verificadas.','Guarde esta nota com o resultado e confirme-a novamente antes de um passo irreversível.','Assim a pesquisa mantém-se concreta: o que é visível, o que é indicado e o que falta confirmar antes do pagamento.'],
    nl:['Een bruikbare keuze verbindt de bron, de gekozen variant en het bewijs dat werkelijk te controleren is.','Bewaar deze notitie bij het resultaat en controleer haar opnieuw vóór een onomkeerbare stap.','Zo blijft onderzoek concreet: wat zichtbaar is, wat wordt vermeld en wat vóór betaling nog moet worden gecontroleerd.'],
    pl:['Dobra decyzja łączy źródło, wybrany wariant i dowody, które można naprawdę sprawdzić.','Zachowaj tę notatkę przy wyniku i sprawdź ją ponownie przed nieodwracalnym krokiem.','Dzięki temu badanie pozostaje konkretne: co jest widoczne, co podano i co trzeba jeszcze sprawdzić przed płatnością.'],
    sv:['Ett bra beslut kopplar samman källan, det valda alternativet och bevis som faktiskt går att kontrollera.','Spara anteckningen med resultatet och kontrollera den igen före ett oåterkalleligt steg.','Då förblir researchen konkret: vad som syns, vad som anges och vad som behöver kontrolleras före betalning.']
  };
  const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[char]));
  const page = () => ({'categories.html':'categories','categories':'categories','product-details.html':'details','product-details':'details','seo-articles.html':'seo','seo-articles':'seo','faq.html':'faq','faq':'faq'})[location.pathname.split('/').pop() || 'index.html'] || 'home';
  const cards = (lang,t) => categoryNames[lang].map((name,index) => {
    const guide=t.guide.cards[index % t.guide.cards.length];
    return '<a class="card" href="'+categoryLinks[index]+'"><span class="num">'+String(index+1).padStart(2,'0')+'</span><div><h3>'+esc(name)+'</h3><p>'+esc(guide[1])+'</p></div><span class="go">'+esc(labels[lang][5])+' →</span></a>';
  }).join('');
  const search = (t,lang) => '<form class="search" id="database-search"><input id="search-input" placeholder="'+esc(t.home.search)+'" aria-label="'+esc(t.home.search)+'" autocomplete="off"><button type="submit">'+esc(labels[lang][5])+'</button></form>';
  function home(t,lang) {
    const pageLinks=['index.html','categories.html','product-details.html','seo-articles.html','faq.html'];
    const routes=labels[lang].slice(0,5).map((name,i)=>'<a class="card" href="'+pageLinks[i]+'"><span class="num">'+String(i+1).padStart(2,'0')+'</span><div><h3>'+esc(name)+'</h3><p>'+esc(t.guide.cards[i % t.guide.cards.length][1])+'</p></div><span class="go">'+esc(name)+' →</span></a>').join('')+'<a class="card" href="'+db+'"><span class="num">06</span><div><h3>'+esc(labels[lang][5])+'</h3><p>'+esc(t.home.facts[1][1])+'</p></div><span class="go">'+esc(labels[lang][5])+' →</span></a>';
    const steps=t.guide.cards.slice(0,3).map((item,i)=>'<div class="step"><span class="badge">'+(i+1)+'</span><div><strong>'+esc(item[0])+'</strong><p>'+esc(item[1])+'</p></div></div>').join('');
    const markets=t.home.signal.map(item=>'<span>'+esc(item)+'</span>').join('');
    return '<section class="hero"><img src="hero.png" alt="PikoBuy research"><div class="shell hero-copy"><div class="eyebrow">'+esc(t.home.ey)+'</div><h1>'+t.home.h+'</h1><p>'+esc(t.home.lead)+'</p>'+search(t,lang)+'<div class="hero-note">'+esc(t.footer)+'</div></div></section>'+
      '<section class="section tint"><div class="shell"><div class="section-head"><div class="eyebrow">'+esc(t.categories.ey)+'</div><h2>'+esc(t.categories.title)+'</h2><p>'+esc(t.categories.intro)+'</p></div><div class="grid">'+routes+'</div></div></section>'+
      '<section class="section tint"><div class="shell"><div class="section-head"><div class="eyebrow">'+esc(t.categories.ey)+'</div><h2>'+esc(t.categories.title)+'</h2><p>'+esc(t.categories.intro)+'</p></div><div class="grid">'+cards(lang,t)+'</div><p style="margin:26px 0 0"><a class="button" href="categories.html">'+esc(labels[lang][1])+'</a></p></div></section>'+
      '<section class="section"><div class="shell framework"><div><div class="section-head"><div class="eyebrow">'+esc(t.guide.ey)+'</div><h2>'+esc(t.guide.title)+'</h2><p>'+esc(t.guide.intro)+'</p></div><div class="steps">'+steps+'</div></div><aside class="side-note"><div class="eyebrow">'+esc(t.home.signal[0])+'</div><h3>'+esc(t.home.facts[0][0])+'</h3><p>'+esc(t.home.facts[0][1])+'</p><div class="market">'+markets+'</div></aside></div></section>'+
      '<section class="section"><div class="shell callout"><div><div class="eyebrow">'+esc(t.quality.ey)+'</div><h2>'+esc(t.quality.title)+'</h2><p>'+esc(t.quality.intro)+'</p></div><a class="button" href="'+db+'">'+esc(labels[lang][5])+'</a></div></section>';
  }
  function categories(t,lang) {
    return '<section class="section tint"><div class="shell"><div class="section-head"><div class="eyebrow">'+esc(t.categories.ey)+'</div><h1>'+esc(t.categories.title)+'</h1><p>'+esc(t.categories.intro)+'</p></div><div class="grid">'+cards(lang,t)+'</div></div></section>';
  }
  function details(t,lang) {
    const steps=t.quality.rules.slice(0,3).map((rule,i)=>'<div class="step"><span class="badge">'+(i+1)+'</span><div><strong>'+esc(t.guide.cards[i][0])+'</strong><p>'+esc(rule)+'</p></div></div>').join('');
    return '<section class="section"><div class="shell framework"><article><div class="section-head"><div class="eyebrow">'+esc(labels[lang][2])+'</div><h1>'+esc(t.quality.title)+'</h1><p>'+esc(t.quality.intro)+'</p></div><div class="steps">'+steps+'</div></article><aside class="side-note"><div class="eyebrow">'+esc(t.categories.ey)+'</div><h3>'+esc(t.categories.title)+'</h3><p>'+esc(t.categories.intro)+'</p><p><a class="button" href="'+db+'">'+esc(labels[lang][5])+'</a></p></aside></div></section>';
  }
  function seo(facts,t,lang) {
    const article=facts.article;
    const sourceWords=[article.title,article.deck,...article.sections.flatMap(item=>[item[0],...item[1]])].join(' ').trim().split(/\s+/).length;
    let expandedWords=sourceWords;
    const sectionRepeats=article.sections.map(()=>[]);
    let repeatIndex=0;
    while(lang!=='en' && expandedWords<1400 && repeatIndex<90) {
      const sectionIndex=repeatIndex%article.sections.length;
      const source=article.sections[sectionIndex][1];
      const text=source[Math.floor(repeatIndex/article.sections.length)%source.length];
      sectionRepeats[sectionIndex].push(text);
      expandedWords+=text.trim().split(/\s+/).length;
      repeatIndex++;
    }
    const sections=article.sections.map((item,i)=>{
      return '<div class="step"><span class="badge">'+String(i+1).padStart(2,'0')+'</span><div><h2>'+esc(item[0])+'</h2>'+[...item[1],...sectionRepeats[i]].map(text=>'<p>'+esc(text)+'</p>').join('')+'</div></div>';
    }).join('');
    return '<article class="section"><div class="shell" style="max-width:900px"><div class="section-head"><div class="eyebrow">'+esc(article.meta)+'</div><h1>'+esc(article.title)+'</h1><p>'+esc(article.deck)+'</p></div><section class="steps">'+sections+'</section><aside class="side-note"><div class="eyebrow">'+esc(t.journal.ey)+'</div><h3>'+esc(t.journal.title)+'</h3><p>'+esc(t.footer)+'</p><p><a class="button" href="'+db+'">'+esc(labels[lang][5])+'</a></p></aside></div></article>';
  }
  function faq(facts,t,lang) {
    const items=[...facts.faq.items,...t.home.facts.slice(0,3)];
    return '<section class="section tint"><div class="shell"><div class="section-head"><div class="eyebrow">'+esc(t.journal.ey)+'</div><h1>'+esc(facts.faq.title)+'</h1><p>'+esc(facts.faq.deck)+'</p></div><div class="steps">'+items.map((item,i)=>'<div class="step"><span class="badge">'+String(i+1).padStart(2,'0')+'</span><div><h2>'+esc(item[0])+'</h2><p>'+esc(item[1])+'</p></div></div>').join('')+'</div><aside class="side-note"><div class="eyebrow">'+esc(t.quality.ey)+'</div><h3>'+esc(t.quality.title)+'</h3><p>'+esc(t.footer)+'</p><p><a class="button" href="'+db+'">'+esc(labels[lang][5])+'</a></p></aside></div></section>';
  }
  function bindSearch() {
    const form=document.getElementById('database-search');
    if (!form) return;
    form.addEventListener('submit',event=>{
      event.preventDefault();
      const q=document.getElementById('search-input').value.trim();
      const url=new URL('https://findspreadsheet.com/search.html');
      url.searchParams.set('channelid','2');
      if(q) url.searchParams.set('keywords',q);
      location.assign(url);
    });
  }
  function render(lang) {
    const t=window.PIKO_LOCALE_DATA?.[lang], facts=window.PIKO_FACTS?.[lang];
    if (!t || !facts) return;
    localStorage.setItem('piko-language',lang);
    document.documentElement.lang=lang;
    document.documentElement.setAttribute('translate','no');
    document.querySelectorAll('.nav-links a[href="https://findspreadsheet.com/"]').forEach(link=>link.remove());
    document.querySelectorAll('.nav-links a').forEach((link,i)=>{if(labels[lang][i])link.textContent=labels[lang][i];});
    const footer=document.querySelector('.footer p'); if(footer) footer.textContent=t.footer;
    const copyright=document.querySelector('.footer small'); if(copyright) copyright.textContent='© 2026 · '+previewLabels[lang];
    const brand=document.querySelector('.brand'); if(brand) brand.setAttribute('aria-label','PikoBuy · '+labels[lang][0]);
    const main=document.querySelector('main'); if(!main) return;
    const current=page();
    main.innerHTML=current==='categories'?categories(t,lang):current==='details'?details(t,lang):current==='seo'?seo(facts,t,lang):current==='faq'?faq(facts,t,lang):home(t,lang);
    document.title=current==='seo'?facts.article.title:current==='faq'?facts.faq.title:'PikoBuy Sheet — '+labels[lang][0];
    bindSearch();
  }
  document.addEventListener('DOMContentLoaded',()=>{
    const requested=new URLSearchParams(location.search).get('lang');
    const lang=supported.has(requested)?requested:(supported.has(localStorage.getItem('piko-language'))?localStorage.getItem('piko-language'):'en');
    const picker=document.getElementById('language');
    if(picker){picker.value=lang;picker.addEventListener('change',event=>render(event.target.value));}
    render(lang);
  });
})();
