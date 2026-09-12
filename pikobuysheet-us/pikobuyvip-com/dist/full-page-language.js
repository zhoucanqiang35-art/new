(() => {
  'use strict';
  const supported = new Set(['en','de','fr','es','it','pt','nl','pl','sv']);
  const englishArticle = document.querySelector('[data-page="articles"]')?.innerHTML || '';
  const englishFaq = document.querySelector('[data-page="faq"]')?.innerHTML || '';
  const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[char]));
  const set = (key, value, html = false) => document.querySelectorAll('[data-i' + (html ? '-html' : '') + '="' + key + '"]').forEach(node => {
    if (html) node.innerHTML = value;
    else node.textContent = value;
  });
  const scoped = (page, selector) => document.querySelector('[data-page="' + page + '"] ' + selector);
  const put = (page, selector, value) => {
    const node = scoped(page, selector);
    if (node && value) node.textContent = value;
  };
  const marketCopy = {
    de:['Sprachpriorisierte Märkte','Für Englisch und acht europäische Sprachen gestaltet.','Die öffentliche Seite nennt weltweiten Versand, veröffentlicht aber kein überprüftes Nutzungsranking nach Ländern. Daher priorisiert diese Seite neun Sprachen für ein europäisches und nordamerikanisches Publikum. Verfügbarkeit, Versandoptionen und Einfuhrregeln müssen im offiziellen Dienst geprüft werden.'],
    fr:['Marchés pensés par langue','Conçu pour l’anglais et huit expériences européennes locales.','La page publique mentionne une expédition mondiale, sans publier de classement vérifié par pays. Cette page privilégie donc neuf langues adaptées à un public européen et nord-américain. Vérifiez la disponibilité, les options d’envoi et les règles d’importation dans le service officiel.'],
    es:['Mercados por idioma','Pensado para inglés y ocho experiencias europeas locales.','La página pública indica envíos globales, pero no publica un ranking verificado de uso por país. Por eso esta página prioriza nueve idiomas adecuados para público europeo y norteamericano. Confirma disponibilidad, envío y normas de importación en el servicio oficial.'],
    it:['Mercati orientati alla lingua','Pensato per inglese e otto esperienze europee locali.','La pagina pubblica indica spedizioni globali, ma non pubblica una classifica verificata per paese. Questa pagina dà quindi priorità a nove lingue per il pubblico europeo e nordamericano. Disponibilità, opzioni di spedizione e regole di importazione vanno verificate nel servizio ufficiale.'],
    pt:['Mercados orientados pelo idioma','Criado para inglês e oito experiências locais europeias.','A página pública informa envio global, mas não publica um ranking verificado de utilização por país. Por isso esta página prioriza nove idiomas adequados ao público europeu e norte-americano. Confirme disponibilidade, envio e regras de importação no serviço oficial.'],
    nl:['Taalgerichte markten','Gemaakt voor Engels en acht Europese lokale ervaringen.','De openbare pagina noemt wereldwijde verzending, maar publiceert geen geverifieerde gebruiksrangschikking per land. Daarom geeft deze pagina voorrang aan negen talen voor een Europees en Noord-Amerikaans publiek. Controleer beschikbaarheid, verzendopties en invoerregels in de officiële dienst.'],
    pl:['Rynki według języka','Przygotowane dla angielskiego i ośmiu lokalnych języków europejskich.','Publiczna strona podaje wysyłkę na cały świat, ale nie publikuje zweryfikowanego rankingu użycia według krajów. Dlatego strona priorytetowo traktuje dziewięć języków dla odbiorców europejskich i północnoamerykańskich. Dostępność, wysyłkę i przepisy importowe sprawdź w oficjalnej usłudze.'],
    sv:['Språkprioriterade marknader','Byggd för engelska och åtta europeiska lokala upplevelser.','Den offentliga sidan uppger världsomspännande frakt men publicerar ingen verifierad användningsrankning per land. Därför prioriterar sidan nio språk för en europeisk och nordamerikansk målgrupp. Kontrollera tillgänglighet, fraktval och importregler i den officiella tjänsten.']
  };
  const extraFaq = {
    de:['Wer beantwortet Live-Fragen zu Bestellung oder Tracking?','Nutze den Dienst, der mit deinem eigenen Konto und deiner Bestellung verbunden ist. Dieser unabhängige Leitfaden kann keine Bestellungen sehen, keine Live-Versandpreise bestätigen und keine Rückgabe entscheiden.'],
    fr:['Qui répond aux questions en direct sur une commande ou le suivi ?','Utilisez le service lié à votre compte et à votre commande. Ce guide indépendant ne peut pas voir les commandes, confirmer un tarif d’envoi en direct ou décider d’un retour.'],
    es:['¿Quién responde a las preguntas en vivo sobre pedido o seguimiento?','Usa el servicio vinculado a tu cuenta y pedido. Esta guía independiente no puede ver pedidos, confirmar tarifas de envío en directo ni decidir devoluciones.'],
    it:['Chi risponde alle domande in tempo reale su ordine o tracking?','Usa il servizio collegato al tuo account e al tuo ordine. Questa guida indipendente non può vedere ordini, confermare tariffe di spedizione in tempo reale o decidere un reso.'],
    pt:['Quem responde a perguntas ao vivo sobre encomenda ou rastreio?','Use o serviço ligado à sua conta e encomenda. Este guia independente não pode ver encomendas, confirmar tarifas de envio em tempo real ou decidir devoluções.'],
    nl:['Wie beantwoordt actuele vragen over bestelling of tracking?','Gebruik de dienst die bij je eigen account en bestelling hoort. Deze onafhankelijke gids kan geen bestellingen zien, live tarieven bevestigen of over retouren beslissen.'],
    pl:['Kto odpowiada na bieżące pytania o zamówienie lub tracking?','Użyj usługi połączonej z własnym kontem i zamówieniem. Ten niezależny przewodnik nie widzi zamówień, nie potwierdza aktualnych stawek wysyłki ani nie rozstrzyga zwrotów.'],
    sv:['Vem svarar på aktuella frågor om order eller spårning?','Använd tjänsten som är kopplad till ditt eget konto och din order. Den här oberoende guiden kan inte se ordrar, bekräfta aktuella fraktpriser eller avgöra returer.']
  };
  const countryLabels = {
    de:['Englisch','Deutsch','Französisch','Spanisch','Italienisch','Portugiesisch','Niederländisch','Polnisch','Schwedisch'],
    fr:['Anglais','Allemand','Français','Espagnol','Italien','Portugais','Néerlandais','Polonais','Suédois'],
    es:['Inglés','Alemán','Francés','Español','Italiano','Portugués','Neerlandés','Polaco','Sueco'],
    it:['Inglese','Tedesco','Francese','Spagnolo','Italiano','Portoghese','Olandese','Polacco','Svedese'],
    pt:['Inglês','Alemão','Francês','Espanhol','Italiano','Português','Neerlandês','Polaco','Sueco'],
    nl:['Engels','Duits','Frans','Spaans','Italiaans','Portugees','Nederlands','Pools','Zweeds'],
    pl:['Angielski','Niemiecki','Francuski','Hiszpański','Włoski','Portugalski','Niderlandzki','Polski','Szwedzki'],
    sv:['Engelska','Tyska','Franska','Spanska','Italienska','Portugisiska','Nederländska','Polska','Svenska']
  };
  const articleFrames = {
    de:['Für die eigene Entscheidung zählt nicht nur ein einzelner Preis, sondern die nachvollziehbare Verbindung zwischen Quelle, Variante und sichtbaren Belegen.','Halte diese Information bei deinem Treffer fest und prüfe sie erneut, bevor du einen unumkehrbaren Schritt im offiziellen Ablauf machst.','So bleibt die Recherche konkret: Was ist sichtbar, was wird behauptet und welche Frage ist vor einer Zahlung noch offen?'],
    fr:['Pour prendre une décision utile, ne regardez pas seulement un prix : reliez toujours la source, la variante choisie et les éléments réellement visibles.','Conservez cette information avec votre résultat, puis vérifiez-la de nouveau avant toute étape irréversible dans le parcours officiel.','La recherche reste ainsi concrète : ce qui est visible, ce qui est indiqué et la question qui demeure avant un paiement.'],
    es:['Para decidir con criterio no basta un precio: relaciona siempre la fuente, la variante elegida y las pruebas que realmente se pueden ver.','Guarda esta información con el resultado y compruébala otra vez antes de dar un paso irreversible dentro del proceso oficial.','Así la investigación sigue siendo concreta: qué es visible, qué afirma el anuncio y qué pregunta permanece abierta antes de pagar.'],
    it:['Per decidere con criterio non basta un prezzo: collega sempre la fonte, la variante scelta e gli elementi che si possono davvero vedere.','Conserva questa informazione accanto al risultato e ricontrollala prima di un passaggio irreversibile nel processo ufficiale.','In questo modo la ricerca resta concreta: ciò che è visibile, ciò che è dichiarato e la domanda ancora aperta prima del pagamento.'],
    pt:['Para decidir com critério, não basta um preço: ligue sempre a fonte, a variante escolhida e as provas que realmente podem ser vistas.','Guarde esta informação junto do resultado e confirme-a outra vez antes de um passo irreversível no processo oficial.','Assim a pesquisa continua concreta: o que é visível, o que o anúncio afirma e a pergunta que permanece aberta antes do pagamento.'],
    nl:['Voor een doordachte keuze is een prijs niet genoeg: verbind steeds de bron, de gekozen variant en het bewijs dat werkelijk zichtbaar is.','Bewaar deze informatie bij je resultaat en controleer haar opnieuw vóór een onomkeerbare stap in de officiële procedure.','Zo blijft onderzoek concreet: wat zichtbaar is, wat de vermelding beweert en welke vraag vóór betaling nog openstaat.'],
    pl:['Do świadomej decyzji nie wystarcza cena: zawsze połącz źródło, wybrany wariant i dowody, które rzeczywiście można zobaczyć.','Zachowaj tę informację przy wyniku i sprawdź ją ponownie przed nieodwracalnym krokiem w oficjalnym procesie.','Dzięki temu badanie pozostaje konkretne: co jest widoczne, co podaje oferta i jakie pytanie pozostaje otwarte przed płatnością.'],
    sv:['För ett genomtänkt beslut räcker inte ett pris: koppla alltid källan, den valda varianten och de bevis som faktiskt går att se.','Spara informationen med ditt resultat och kontrollera den igen före ett oåterkalleligt steg i det officiella flödet.','Då förblir researchen konkret: vad som syns, vad annonsen påstår och vilken fråga som återstår före betalning.']
  };
  function renderFacts(lang) {
    const articlePage = document.querySelector('[data-page="articles"]');
    const faqPage = document.querySelector('[data-page="faq"]');
    if (!articlePage || !faqPage) return;
    if (lang === 'en') {
      articlePage.innerHTML = englishArticle;
      faqPage.innerHTML = englishFaq;
      return;
    }
    const facts = window.PIKO_FACTS?.[lang];
    if (!facts?.article || !facts?.faq) return;
    const article = facts.article;
    const locale = window.PIKO_LOCALE_DATA?.[lang];
    /*
      Every translation keeps the same nine article sections.  The original
      localized fact file has concise source notes for several locales; merge
      the already-localized workflow, QC, shipping and editorial notes into
      those sections rather than replacing a long article with a summary.
    */
    const rawSupportingText = locale ? [
      locale.home.lead, locale.guide.intro,
      ...locale.guide.cards.map(card => card[0] + ': ' + card[1]),
      ...locale.quality.rules,
      ...locale.home.facts.map(fact => fact[0] + ': ' + fact[1]),
      ...locale.home.checks,
      ...locale.journal.cards.map(card => card[0] + ': ' + card[1])
    ] : [];
    const frames = articleFrames[lang] || [];
    const supportingText = rawSupportingText.map((text, index) => frames.length
      ? frames[index % frames.length] + ' ' + text + ' ' + frames[(index + 1) % frames.length]
      : text);
    const sections = article.sections.map((section, index) => {
      const added = supportingText.filter((_, textIndex) => textIndex % article.sections.length === index);
      return [section[0], [...section[1], ...added]];
    });
    articlePage.innerHTML = '<section><article class="article-long"><div class="article-meta">' + esc(article.meta) + '</div><h1>' + esc(article.title) + '</h1><p>' + esc(article.deck) + '</p>' +
      sections.map(section => '<h2>' + esc(section[0]) + '</h2>' + section[1].map(paragraph => '<p>' + esc(paragraph) + '</p>').join('')).join('') +
      '<div class="article-callout"><p><strong>' + esc(facts.source) + '</strong> ' + esc(facts.sourceText) + '</p></div></article></section>';
    const entries = [...facts.faq.items, extraFaq[lang]];
    faqPage.innerHTML = '<section><div class="faq-page"><div class="kicker">' + esc(facts.faq.deck) + '</div><h1>' + esc(facts.faq.title) + '</h1>' +
      entries.map((item, index) => '<details' + (index === 0 ? ' open' : '') + '><summary>' + esc(item[0]) + '</summary><p>' + esc(item[1]) + '</p></details>').join('') +
      '<div class="faq-note"><strong>' + esc(facts.source) + '</strong> ' + esc(facts.sourceText) + '</div></div></section>';
  }
  function render(lang) {
    const data = window.PIKO_LOCALE_DATA?.[lang];
    if (!data || lang === 'en') {
      renderFacts('en');
      document.documentElement.setAttribute('translate','no');
      return;
    }
    const home = data.home, guide = data.guide, categories = data.categories, quality = data.quality, journal = data.journal;
    set('notice', data.footer);
    set('eyebrow', home.ey);
    set('hero', home.h, true);
    set('lede', home.lead);
    set('heroNote', data.footer);
    home.signal.forEach((text, index) => set('rail' + (index + 1), text));
    set('method', guide.ey); set('methodTitle', guide.title); set('methodText', guide.intro);
    guide.cards.slice(0,3).forEach((card,index) => { set('f' + (index + 1) + 't', card[0]); set('f' + (index + 1), card[1]); });
    const m = marketCopy[lang];
    if (m) { set('markets',m[0]); set('marketsTitle',m[1]); set('marketsText',m[2]); }
    set('categories', categories.ey); set('categoriesTitle',categories.title); set('categoriesText',categories.intro);
    set('why', home.art); set('whyTitle', home.facts[0][0]); set('whyText', home.facts[0][1]);
    home.facts.forEach((fact,index) => { set('p' + (index + 1) + 't',fact[0]); set('p' + (index + 1),fact[1]); });
    set('catPageTitle',categories.title); set('catPageText',categories.intro);
    set('qcTitle',quality.title); set('qcText',quality.intro);
    quality.rules.slice(0,3).forEach((rule,index) => { const bits = rule.split(':'); set('qc' + (index + 1) + 't',bits[0]); set('qc' + (index + 1),bits.slice(1).join(':').trim() || rule); });
    set('shipTitle',guide.title); set('shipText',guide.intro); set('shipListTitle',quality.ey); set('shipList',quality.rules.map((rule,index) => (index+1) + '. ' + rule).join(' '));
    set('articlesTitle',journal.title); set('articlesText',journal.intro);
    journal.cards.forEach((card,index) => { set('a' + (index + 1) + 't',card[0]); set('a' + (index + 1),card[1]); });
    set('faqTitle',window.PIKO_FACTS?.[lang]?.faq?.title || 'FAQ'); set('cta',quality.cta); set('footer',data.footer);
    put('categories','.kicker',categories.ey); put('qc','.kicker',quality.ey); put('shipping','.kicker',guide.ey);
    put('home','.flow .card:nth-child(1) .n','01 / ' + home.features[0][1].toUpperCase());
    put('home','.flow .card:nth-child(2) .n','02 / ' + home.features[1][1].toUpperCase());
    put('home','.flow .card:nth-child(3) .n','03 / ' + home.features[2][1].toUpperCase());
    document.querySelectorAll('.country-list .country').forEach((node,index) => {
      if (countryLabels[lang]?.[index] && node.firstChild) node.firstChild.textContent = countryLabels[lang][index];
    });
    document.documentElement.setAttribute('translate','no');
    renderFacts(lang);
  }
  function localeFromAddress() {
    const query = new URLSearchParams(location.search).get('lang');
    const route = location.pathname.split('/').filter(Boolean)[0];
    return supported.has(query) ? query : (supported.has(route) ? route : 'en');
  }
  window.addEventListener('pikobuyvip:language', event => render(event.detail?.lang || localeFromAddress()));
  render(localeFromAddress());
})();
