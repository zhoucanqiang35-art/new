/* Full-page locale controller.  It deliberately never uses an outside translation service. */
(function () {
  const locales = {
    en:{name:'EN · English',nav:['Home','Product Categories','Product Details','SEO Articles','FAQ'],footer:'Independent research preview. Not affiliated with LoloBuy.'},
    de:{name:'DE · Deutsch',nav:['Startseite','Produktkategorien','Produktdetails','SEO-Artikel','FAQ'],footer:'Unabhängige Recherchevorschau. Nicht mit LoloBuy verbunden.'},
    fr:{name:'FR · Français',nav:['Accueil','Catégories de produits','Détails du produit','Articles SEO','FAQ'],footer:'Aperçu de recherche indépendant. Non affilié à LoloBuy.'},
    es:{name:'ES · Español',nav:['Inicio','Categorías de productos','Detalles del producto','Artículos SEO','Preguntas frecuentes'],footer:'Vista previa de investigación independiente. Sin afiliación con LoloBuy.'},
    it:{name:'IT · Italiano',nav:['Home','Categorie di prodotti','Dettagli del prodotto','Articoli SEO','FAQ'],footer:'Anteprima di ricerca indipendente. Non affiliata a LoloBuy.'},
    pt:{name:'PT · Português',nav:['Início','Categorias de produtos','Detalhes do produto','Artigos SEO','Perguntas frequentes'],footer:'Pré-visualização de pesquisa independente. Sem afiliação à LoloBuy.'},
    nl:{name:'NL · Nederlands',nav:['Home','Productcategorieën','Productgegevens','SEO-artikelen','Veelgestelde vragen'],footer:'Onafhankelijke onderzoeksvoorbeeld. Niet verbonden aan LoloBuy.'},
    pl:{name:'PL · Polski',nav:['Strona główna','Kategorie produktów','Szczegóły produktu','Artykuły SEO','FAQ'],footer:'Niezależny podgląd badawczy. Brak powiązania z LoloBuy.'},
    sv:{name:'SV · Svenska',nav:['Hem','Produktkategorier','Produktdetaljer','SEO-artiklar','Vanliga frågor'],footer:'Oberoende forskningsförhandsvisning. Inte ansluten till LoloBuy.'}
  };
  const label = {en:'Language',de:'Sprache',fr:'Langue',es:'Idioma',it:'Lingua',pt:'Idioma',nl:'Taal',pl:'Język',sv:'Språk'};
  const homepageCards = {
    de:[['Mit dem Originalangebot beginnen','Vergleiche Artikelname, Variante, Größentabelle und angegebenen Preis, bevor du eine Produktkarte als aktuell ansiehst.'],['QC als Beleg nutzen – nicht als Garantie','Frage nach den Details, die für deinen Artikel wichtig sind. Fotos helfen beim Vergleich, garantieren aber weder Qualität noch Lieferung.'],['Versand erst nach Wareneingang wählen','Verfügbarkeit des Agenten, Paketgewicht, Ziellandregeln und Versicherungsoptionen können sich ändern. Prüfe sie beim Checkout.']],
    fr:[['Commencez par l’annonce d’origine','Comparez le nom de l’article, l’option, le guide des tailles et le prix indiqué avant de considérer une fiche comme actuelle.'],['Considérez le QC comme une preuve, pas une garantie','Demandez quels détails comptent pour votre article. Les photos aident à comparer, sans garantir la qualité ni la livraison.'],['Choisissez l’expédition après l’arrivée de l’article','La disponibilité de l’agent, le poids du colis, les règles de destination et l’assurance peuvent changer. Vérifiez au paiement.']],
    es:[['Empieza con el anuncio de origen','Compara el nombre, la variante, la guía de tallas y el precio indicado antes de considerar actual una ficha de producto.'],['Usa el QC como evidencia, no como garantía','Pregunta qué detalles importan para tu artículo. Las fotos ayudan a comparar, pero no garantizan calidad ni entrega.'],['Elige el envío después de que llegue el artículo','La disponibilidad del agente, el peso del paquete, las reglas de destino y el seguro pueden cambiar. Revísalos al pagar.']],
    it:[['Inizia dall’annuncio originale','Confronta nome, variante, tabella delle taglie e prezzo indicato prima di considerare attuale una scheda prodotto.'],['Tratta il QC come prova, non come garanzia','Chiedi quali dettagli contano per il tuo articolo. Le foto aiutano a confrontare, ma non garantiscono qualità o consegna.'],['Scegli la spedizione dopo l’arrivo dell’articolo','Disponibilità dell’agente, peso del pacco, regole di destinazione e assicurazione possono cambiare. Verificali al checkout.']],
    pt:[['Comece pelo anúncio original','Compare o nome, a opção, a tabela de tamanhos e o preço indicado antes de considerar um cartão de produto atual.'],['Use o QC como evidência, não como garantia','Pergunte quais detalhes importam para o seu artigo. As fotos ajudam a comparar, mas não garantem qualidade nem entrega.'],['Escolha o envio após a chegada do artigo','A disponibilidade do agente, o peso da encomenda, as regras de destino e o seguro podem mudar. Confirme no checkout.']],
    nl:[['Begin met de oorspronkelijke aanbieding','Vergelijk de artikelnaam, optie, maattabel en vermelde prijs voordat je een productkaart als actueel beschouwt.'],['Gebruik QC als bewijs, niet als garantie','Vraag welke details voor jouw artikel belangrijk zijn. Foto’s helpen vergelijken, maar garanderen geen kwaliteit of levering.'],['Kies verzending nadat het artikel is aangekomen','Beschikbaarheid van de agent, pakketgewicht, bestemmingsregels en verzekering kunnen veranderen. Controleer dit bij het afrekenen.']],
    pl:[['Zacznij od oryginalnej oferty','Porównaj nazwę produktu, wariant, tabelę rozmiarów i podaną cenę, zanim uznasz kartę produktu za aktualną.'],['Traktuj QC jako dowód, nie gwarancję','Zapytaj o szczegóły ważne dla Twojego produktu. Zdjęcia pomagają porównać, ale nie gwarantują jakości ani dostawy.'],['Wybierz wysyłkę po dotarciu produktu','Dostępność agenta, waga paczki, zasady kraju docelowego i ubezpieczenie mogą się zmienić. Sprawdź je przy płatności.']],
    sv:[['Börja med ursprungsannonsen','Jämför artikelnamn, alternativ, storlekstabell och angivet pris innan du ser ett produktkort som aktuellt.'],['Använd QC som bevis, inte som garanti','Fråga vilka detaljer som spelar roll för din vara. Bilder hjälper dig att jämföra men garanterar inte kvalitet eller leverans.'],['Välj frakt efter att varan har kommit fram','Agentens tillgänglighet, paketvikt, destinationsregler och försäkring kan ändras. Kontrollera detta vid kassan.']]
  };
  function renderHomepage(lang){
    const cards=homepageCards[lang]; if(!cards) return;
    document.querySelectorAll('.principle').forEach((card,i)=>{
      const copy=cards[i]; if(!copy) return;
      const heading=card.querySelector('h3'), body=card.querySelector('p');
      if(heading) heading.textContent=copy[0]; if(body) body.textContent=copy[1];
    });
  }
  function current(){ return new URLSearchParams(location.search).get('lang') || localStorage.getItem('lsfi-lang') || 'en'; }
  function escapeHtml(value){return String(value).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));}
  function renderLocalizedArticle(lang){
    if(lang==='en' || !location.pathname.includes('/seo-articles/') || location.pathname==='/seo-articles/') return;
    const corpus=window.LoloEditorial;
    const article=corpus&&corpus.localizedArticles&&corpus.localizedArticles[lang];
    if(!article) return;
    const continuations=corpus.localizedArticleContinuations&&corpus.localizedArticleContinuations[lang]||[];
    const additions=corpus.localizedArticleDetailAdditions&&corpus.localizedArticleDetailAdditions[lang]||[];
    const main=document.querySelector('main.prose'); if(!main) return;
    const sections=article.sections.map((section,index)=>{
      const paragraphs=[...section.paragraphs,continuations[index],additions[index]].filter(Boolean);
      return '<h2>'+escapeHtml(section.heading)+'</h2>'+paragraphs.map(p=>'<p>'+escapeHtml(p)+'</p>').join('');
    }).join('');
    main.innerHTML='<p class="crumb">'+escapeHtml(article.reviewed)+'</p><h1>'+escapeHtml(article.title)+'</h1><p class="intro">'+escapeHtml(article.intro)+'</p>'+sections+'<div class="panel"><h2>FindSpreadsheet</h2><p>Independent product research guide.</p><a class="button" href="https://findspreadsheet.com/">Open FindSpreadsheet</a></div>';
  }
  function wire(lang){
    const set = locales[lang] || locales.en;
    document.documentElement.lang=lang;
    document.querySelectorAll('.locale').forEach(select=>{
      select.innerHTML=Object.entries(locales).map(([code,v])=>'<option value="'+code+'">'+v.name+'</option>').join('');
      select.value=lang; select.setAttribute('aria-label',label[lang]);
      select.onchange=()=>{const u=new URL(location.href);u.searchParams.set('lang',select.value);localStorage.setItem('lsfi-lang',select.value);location.href=u.toString();};
    });
    document.querySelectorAll('.navlinks').forEach(nav=>nav.querySelectorAll('a').forEach((a,i)=>a.textContent=set.nav[i]));
    document.querySelectorAll('a[href^="/"]').forEach(a=>{ const u=new URL(a.getAttribute('href'),location.origin); u.searchParams.set('lang',lang); a.href=u.pathname+u.search+u.hash; });
    document.querySelectorAll('[data-locale-footer]').forEach(el=>el.textContent=set.footer);
    renderHomepage(lang);
    renderLocalizedArticle(lang);
  }
  window.LoloLocale={current,wire,locales};
  document.addEventListener('DOMContentLoaded',()=>wire(current()));
}());
