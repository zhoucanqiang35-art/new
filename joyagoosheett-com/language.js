/* Offline language pack. It does not send page text to another service. */
(()=>{
const langs=['en','de','fr','es','it','pt','nl','pl'],store='joy-sheet-language-v3';let homeLang='';
const t={
en:{l:'Language',n:['Home','Categories','Product detail','SEO articles','QC','FAQ']},
de:{l:'Sprache',n:['Startseite','Kategorien','Produktdetails','SEO-Artikel','QC','FAQ']},
fr:{l:'Langue',n:['Accueil','Catégories','Détails produit','Articles SEO','QC','FAQ']},
es:{l:'Idioma',n:['Inicio','Categorías','Detalle del producto','Artículos SEO','QC','Preguntas frecuentes']},
it:{l:'Lingua',n:['Home','Categorie','Dettaglio prodotto','Articoli SEO','QC','FAQ']},
pt:{l:'Idioma',n:['Início','Categorias','Detalhes do produto','Artigos SEO','QC','Perguntas frequentes']},
nl:{l:'Taal',n:['Home','Categorieën','Productdetails','SEO-artikelen','QC','Veelgestelde vragen']},
pl:{l:'Język',n:['Strona główna','Kategorie','Szczegóły produktu','Artykuły SEO','QC','FAQ']}
};
const copy={
de:['Nach Modestil suchen.','Wähle eine Kategorie, um die passende aktuelle Seite auf FindSpreadsheet zu öffnen.','Zehn aktuelle Produktdatensätze.','Durchsuche zehn hochauflösende Produktdatensätze; jede Karte öffnet die passende Detailseite auf FindSpreadsheet.','Fotos prüfen. Dann entscheiden.','QC-Fotos sind Referenzmaterial nach Wareneingang, keine Garantie für Zustand, Anspruch oder Versandresultat.','Klare Grenzen. Bessere Entscheidungen.','JoyaGoo-Ablauf: was wann zu prüfen ist.'],
fr:['Explorer par direction mode.','Choisissez une catégorie pour ouvrir la page actuelle correspondante sur FindSpreadsheet.','Dix fiches produit actuelles.','Faites défiler dix fiches haute définition ; chaque carte ouvre la page correspondante sur FindSpreadsheet.','Lire les photos. Puis décider.','Les photos QC sont des références après l’arrivée en entrepôt, et non une garantie de l’état final ou de l’expédition.','Des limites claires. De meilleures décisions.','Parcours JoyaGoo : quoi vérifier, et quand.'],
es:['Explora por dirección de moda.','Elige una categoría para abrir su página actual correspondiente en FindSpreadsheet.','Diez registros de producto actuales.','Desplázate por diez registros de alta resolución; cada tarjeta abre la página correspondiente en FindSpreadsheet.','Lee las fotos. Después decide.','Las fotos de QC son material de referencia tras la llegada al almacén, no una garantía del estado final ni del envío.','Límites claros. Mejores decisiones.','Flujo de JoyaGoo: qué comprobar y cuándo.'],
it:['Sfoglia per direzione moda.','Scegli una categoria per aprire la pagina attuale corrispondente su FindSpreadsheet.','Dieci record prodotto attuali.','Scorri dieci record ad alta risoluzione; ogni scheda apre la pagina corrispondente su FindSpreadsheet.','Leggi le foto. Poi decidi.','Le foto QC sono materiale di riferimento dopo l’arrivo in magazzino, non una garanzia di condizione finale o spedizione.','Confini chiari. Decisioni migliori.','Flusso JoyaGoo: cosa controllare e quando.'],
pt:['Navegue por direção de moda.','Escolha uma categoria para abrir a página atual correspondente no FindSpreadsheet.','Dez registros de produto atuais.','Percorra dez registros em alta resolução; cada cartão abre a página correspondente no FindSpreadsheet.','Leia as fotos. Depois decida.','As fotos de QC são referência após a chegada ao armazém, não garantia de condição final ou envio.','Limites claros. Melhores decisões.','Fluxo da JoyaGoo: o que verificar e quando.'],
nl:['Blader op moderichting.','Kies een categorie om de overeenkomstige actuele pagina op FindSpreadsheet te openen.','Tien actuele productrecords.','Blader door tien records in hoge resolutie; elke kaart opent de bijbehorende pagina op FindSpreadsheet.','Lees de foto’s. Beslis daarna.','QC-foto’s zijn referentiemateriaal na aankomst in het magazijn, geen garantie voor eindconditie of verzending.','Duidelijke grenzen. Betere beslissingen.','JoyaGoo-proces: wat wanneer te controleren.'],
pl:['Przeglądaj według kierunku mody.','Wybierz kategorię, aby otworzyć odpowiadającą jej aktualną stronę w FindSpreadsheet.','Dziesięć aktualnych rekordów produktów.','Przewiń dziesięć rekordów wysokiej rozdzielczości; każda karta otwiera odpowiednią stronę w FindSpreadsheet.','Przeczytaj zdjęcia. Potem zdecyduj.','Zdjęcia QC są materiałem referencyjnym po przybyciu do magazynu, a nie gwarancją stanu końcowego ani wysyłki.','Jasne granice. Lepsze decyzje.','Proces JoyaGoo: co i kiedy sprawdzać.']
};
const cats={de:'Schuhe|T-Shirts|Hoodies|Jacken|Hosen & Shorts|Taschen|Accessoires|Kopfbedeckung|Elektronik|Trikots',fr:'Chaussures|T-shirts|Sweats à capuche|Vestes|Pantalons & shorts|Sacs|Accessoires|Couvre-chefs|Électronique|Maillots',es:'Zapatos|Camisetas|Sudaderas|Chaquetas|Pantalones y shorts|Bolsos|Accesorios|Sombreros|Electrónica|Camisetas deportivas',it:'Scarpe|T-shirt|Felpe|Giacche|Pantaloni e shorts|Borse|Accessori|Copricapi|Elettronica|Maglie',pt:'Sapatos|Camisetas|Moletons|Jaquetas|Calças e shorts|Bolsas|Acessórios|Chapéus|Eletrônicos|Camisetas esportivas',nl:'Schoenen|T-shirts|Hoodies|Jassen|Broeken & shorts|Tassen|Accessoires|Hoofddeksels|Elektronica|Shirts',pl:'Buty|T-shirty|Bluzy z kapturem|Kurtki|Spodnie i szorty|Torby|Akcesoria|Nakrycia głowy|Elektronika|Koszulki sportowe'};
function put(s,v,html){const e=document.querySelector(s);if(e){if(html)e.innerHTML=v;else e.textContent=v}}
function h(s){return s.replace('. ','<br><em>')+'</em>'}
function render(lang){
 const v=t[lang],c=copy[lang]||null;document.documentElement.lang=lang;
 document.querySelectorAll('header nav a').forEach((e,i)=>e.textContent=v.n[i]);document.querySelectorAll('.language span').forEach(e=>e.textContent=v.l);document.querySelectorAll('.language select').forEach(e=>e.value=lang);
 if(!c)return;
 const path=location.pathname;
 if(!path.includes('categories')&&!path.includes('product-detail')&&!path.includes('seo-articles')&&!path.includes('/qc')&&!path.includes('/faq')&&homeLang!==lang){homeLang=lang;document.querySelector('.language select').dispatchEvent(new Event('change'))}
 if(path.includes('categories')){put('.category-page h1',h(c[0]),true);put('.category-page>p:not(.eyebrow)',c[1]);const names=(cats[lang]||'Shoes|T-Shirts|Hoodies|Jackets|Pants & Shorts|Bags|Accessories|Headwear|Electronics|Jerseys').split('|');document.querySelectorAll('.category-tile strong').forEach((e,i)=>e.textContent=names[i]);document.querySelectorAll('.category-tile small').forEach(e=>e.textContent=v.n[1]+' ↗')}
 if(path.includes('product-detail')){put('.detail-intro h1',h(c[2]),true);put('.detail-intro p:last-child',c[3]);document.querySelectorAll('.open-detail').forEach(e=>e.textContent=v.n[2]+' ↗')}
 if(path.includes('/qc')){put('.detail h1',h(c[4]),true);put('.detail>div p:last-child',c[5])}
 if(path.includes('/faq'))put('.faq>h1',h(c[6]),true);
 if(path.includes('seo-articles')){put('.journal>h1',h(c[7]),true);document.querySelectorAll('.journal .article h2').forEach((e,i)=>{const x=['1. Product record','2. Seller dispatch','3. QC photos','4. Five-day return window','5. Warehouse storage','6. Parcel submission','7. Route trade-offs','8. Calm checklist'];e.textContent=x[i]||e.textContent});}
}
function choose(lang){if(!langs.includes(lang))return;localStorage.setItem(store,lang);const u=new URL(location.href);if(lang==='en')u.searchParams.delete('lang');else u.searchParams.set('lang',lang);history.replaceState(null,'',u);render(lang)}
document.addEventListener('DOMContentLoaded',()=>{const q=new URLSearchParams(location.search).get('lang'),lang=langs.includes(q)?q:(langs.includes(localStorage.getItem(store))?localStorage.getItem(store):'en');document.querySelectorAll('.language select').forEach(e=>e.addEventListener('change',x=>choose(x.target.value)));render(lang)});
})();
