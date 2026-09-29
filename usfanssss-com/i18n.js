/* The complete renderer replaces the former phrase-by-phrase translator. */
(()=>{const script=document.createElement('script');script.src='app.js';script.defer=true;document.head.appendChild(script)})();
/*
const labels={EN:'English',DE:'Deutsch',FR:'Français',ES:'Español',IT:'Italiano',PT:'Português',NL:'Nederlands',PL:'Polski'};
const copy={
 'Home':{DE:'Startseite',FR:'Accueil',ES:'Inicio',IT:'Home',PT:'Início',NL:'Home',PL:'Strona główna'},
 'Categories':{DE:'Kategorien',FR:'Catégories',ES:'Categorías',IT:'Categorie',PT:'Categorias',NL:'Categorieën',PL:'Kategorie'},
 'Product details':{DE:'Produktdetails',FR:'Détails produit',ES:'Detalles del producto',IT:'Dettagli prodotto',PT:'Detalhes do produto',NL:'Productdetails',PL:'Szczegóły produktu'},
 'SEO articles':{DE:'SEO-Artikel',FR:'Articles SEO',ES:'Artículos SEO',IT:'Articoli SEO',PT:'Artigos SEO',NL:'SEO-artikelen',PL:'Artykuły SEO'},
 'FAQ':{DE:'FAQ',FR:'FAQ',ES:'Preguntas frecuentes',IT:'FAQ',PT:'Perguntas frequentes',NL:'Veelgestelde vragen',PL:'FAQ'},
 'FindSpreadsheet database':{DE:'FindSpreadsheet-Datenbank',FR:'Base FindSpreadsheet',ES:'Base de FindSpreadsheet',IT:'Database FindSpreadsheet',PT:'Base FindSpreadsheet',NL:'FindSpreadsheet-database',PL:'Baza FindSpreadsheet'},
 'PRODUCT CATEGORIES':{DE:'PRODUKTKATEGORIEN',FR:'CATÉGORIES DE PRODUITS',ES:'CATEGORÍAS DE PRODUCTOS',IT:'CATEGORIE PRODOTTI',PT:'CATEGORIAS DE PRODUTOS',NL:'PRODUCTCATEGORIEËN',PL:'KATEGORIE PRODUKTÓW'},
 'All categories':{DE:'Alle Kategorien',FR:'Toutes les catégories',ES:'Todas las categorías',IT:'Tutte le categorie',PT:'Todas as categorias',NL:'Alle categorieën',PL:'Wszystkie kategorie'},
 'Sneakers':{DE:'Sneaker',FR:'Baskets',ES:'Zapatillas',IT:'Sneaker',PT:'Tênis',NL:'Sneakers',PL:'Sneakersy'},
 'Outerwear':{DE:'Oberbekleidung',FR:'Vêtements d’extérieur',ES:'Ropa de abrigo',IT:'Capispalla',PT:'Agasalhos',NL:'Bovenkleding',PL:'Odzież wierzchnia'},
 'T-Shirts':{DE:'T-Shirts',FR:'T-shirts',ES:'Camisetas',IT:'T-shirt',PT:'Camisetas',NL:'T-shirts',PL:'T-shirty'},
 'Hoodies':{DE:'Hoodies',FR:'Sweats à capuche',ES:'Sudaderas',IT:'Felpe con cappuccio',PT:'Moletons',NL:'Hoodies',PL:'Bluzy z kapturem'},
 'Pants + Shorts':{DE:'Hosen + Shorts',FR:'Pantalons + Shorts',ES:'Pantalones + Shorts',IT:'Pantaloni + Shorts',PT:'Calças + Shorts',NL:'Broeken + Shorts',PL:'Spodnie + Szorty'},
 'Bags':{DE:'Taschen',FR:'Sacs',ES:'Bolsos',IT:'Borse',PT:'Bolsas',NL:'Tassen',PL:'Torby'},
 'Watches':{DE:'Uhren',FR:'Montres',ES:'Relojes',IT:'Orologi',PT:'Relógios',NL:'Horloges',PL:'Zegarki'},
 'Headwear':{DE:'Kopfbedeckung',FR:'Couvre-chefs',ES:'Sombreros',IT:'Copricapi',PT:'Chapéus',NL:'Hoofddeksels',PL:'Nakrycia głowy'},
 'Accessories':{DE:'Accessoires',FR:'Accessoires',ES:'Accesorios',IT:'Accessori',PT:'Acessórios',NL:'Accessoires',PL:'Akcesoria'},
 'Electronics':{DE:'Elektronik',FR:'Électronique',ES:'Electrónica',IT:'Elettronica',PT:'Eletrônicos',NL:'Elektronica',PL:'Elektronika'},
 'Open category →':{DE:'Kategorie öffnen →',FR:'Ouvrir la catégorie →',ES:'Abrir categoría →',IT:'Apri categoria →',PT:'Abrir categoria →',NL:'Categorie openen →',PL:'Otwórz kategorię →'},
 'Browse category →':{DE:'Kategorie ansehen →',FR:'Voir la catégorie →',ES:'Ver categoría →',IT:'Vedi categoria →',PT:'Ver categoria →',NL:'Categorie bekijken →',PL:'Zobacz kategorię →'},
 'PRODUCT DETAILS / USD':{DE:'PRODUKTDETAILS / USD',FR:'DÉTAILS PRODUIT / USD',ES:'DETALLES DEL PRODUCTO / USD',IT:'DETTAGLI PRODOTTO / USD',PT:'DETALHES DO PRODUTO / USD',NL:'PRODUCTDETAILS / USD',PL:'SZCZEGÓŁY PRODUKTU / USD'},
 'FACT-CHECKED FAQ':{DE:'FAKTENGESTÜTZTE FAQ',FR:'FAQ VÉRIFIÉE',ES:'FAQ VERIFICADA',IT:'FAQ VERIFICATA',PT:'FAQ VERIFICADA',NL:'GECONTROLEERDE FAQ',PL:'ZWERYFIKOWANE FAQ'},
 'INDEPENDENT RESEARCH':{DE:'UNABHÄNGIGE RECHERCHE',FR:'RECHERCHE INDÉPENDANTE',ES:'INVESTIGACIÓN INDEPENDIENTE',IT:'RICERCA INDIPENDENTE',PT:'PESQUISA INDEPENDENTE',NL:'ONAFHANKELIJK ONDERZOEK',PL:'NIEZALEŻNE BADANIE'},
 'SEO article':{DE:'SEO-Artikel',FR:'Article SEO',ES:'Artículo SEO',IT:'Articolo SEO',PT:'Artigo SEO',NL:'SEO-artikel',PL:'Artykuł SEO'},
 'Open the full FAQ page →':{DE:'Vollständige FAQ öffnen →',FR:'Ouvrir la FAQ complète →',ES:'Abrir la FAQ completa →',IT:'Apri le FAQ complete →',PT:'Abrir a FAQ completa →',NL:'Volledige FAQ openen →',PL:'Otwórz pełną stronę FAQ →'}
};
function translatePage(lang){document.documentElement.lang=lang.toLowerCase();document.querySelectorAll('#lang').forEach(el=>el.textContent='LANG / '+lang);const walk=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);const nodes=[];while(walk.nextNode())nodes.push(walk.currentNode);nodes.forEach(node=>{const source=node.nodeValue.trim(),translated=copy[source]?.[lang];if(translated)node.nodeValue=node.nodeValue.replace(source,translated)});}
window.usfansLanguage={set(lang){localStorage.setItem('usfans-language',lang);location.reload()}};
document.addEventListener('click',event=>{const button=event.target.closest('[data-l]');if(button){event.preventDefault();event.stopImmediatePropagation();window.usfansLanguage.set(button.dataset.l)}},true);
translatePage(activeLanguage);*/
