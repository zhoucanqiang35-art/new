"use client";

import { useEffect } from "react";

export type Locale = "en" | "de" | "fr" | "es" | "it" | "pt" | "nl" | "pl" | "sv";
type ArticleId =
  | "lolobuy-spreadsheet"
  | "qc-photos"
  | "weidian-taobao-1688"
  | "shipping-planning"
  | "sizing-checklist"
  | "category-finds";

const locales: { id: Locale; label: string }[] = [
  { id: "en", label: "English" }, { id: "de", label: "Deutsch" }, { id: "fr", label: "Français" },
  { id: "es", label: "Español" }, { id: "it", label: "Italiano" }, { id: "pt", label: "Português" },
  { id: "nl", label: "Nederlands" }, { id: "pl", label: "Polski" }, { id: "sv", label: "Svenska" },
];

const copy: Record<Locale, {
  home: string; guides: string; categories: string; open: string; articleList: string; read: string;
  eyebrow: string; title: string; lead: string; why: string; method: string; practical: string;
  verification: string; disclosure: string; categoriesLead: string; guideLead: string; related: string;
  check: string; source: string; language: string;
}> = {
  en: { home:"Home", guides:"Guides", categories:"Categories", open:"Open FindSpreadsheet", articleList:"Buyer guides", read:"Read guide", eyebrow:"Independent LoloBuy spreadsheet research", title:"Find, check and compare before you order.", lead:"A multilingual guide to product discovery, QC-photo review, source-link checks, sizing and parcel planning. It is research, not a store or a shipping promise.", why:"Why this guide matters", method:"A practical method", practical:"What to record", verification:"Verify live details before acting", disclosure:"Independent research resource. It is not affiliated with LoloBuy, does not take orders, and cannot confirm stock, authenticity, shipping price or delivery outcome.", categoriesLead:"Start with an item type, then check the exact listing, variant and measurements before continuing your search.", guideLead:"Each guide answers one buyer question and links to the next decision instead of repeating a generic checklist.", related:"Related guides", check:"Check the listing", source:"Source-first research", language:"Language" },
  fr: { home:"Accueil", guides:"Guides", categories:"Catégories", open:"Ouvrir FindSpreadsheet", articleList:"Guides acheteur", read:"Lire le guide", eyebrow:"Recherche indépendante LoloBuy Spreadsheet", title:"Trouver, vérifier et comparer avant de commander.", lead:"Un guide multilingue pour la découverte de produits, les photos QC, les liens source, les tailles et la préparation de colis. Il s’agit de recherche, pas d’une boutique ni d’une promesse de livraison.", why:"Pourquoi ce guide est utile", method:"Méthode pratique", practical:"À noter", verification:"Vérifiez les informations en direct avant toute décision", disclosure:"Ressource de recherche indépendante. Elle n’est pas affiliée à LoloBuy, ne traite pas de commande et ne peut pas confirmer stock, authenticité, tarif d’expédition ou résultat de livraison.", categoriesLead:"Commencez par un type d’article, puis vérifiez l’annonce exacte, la variante et les mesures avant de poursuivre votre recherche.", guideLead:"Chaque guide répond à une question précise au lieu de répéter une même liste générique.", related:"Guides associés", check:"Vérifier l’annonce", source:"Recherche depuis la source", language:"Langue" },
  de: { home:"Startseite", guides:"Ratgeber", categories:"Kategorien", open:"FindSpreadsheet öffnen", articleList:"Käufer-Ratgeber", read:"Ratgeber lesen", eyebrow:"Unabhängige LoloBuy-Spreadsheet-Recherche", title:"Vor dem Bestellen finden, prüfen und vergleichen.", lead:"Ein mehrsprachiger Leitfaden für Produktsuche, QC-Fotos, Quelllinks, Größen und Paketplanung. Er ist Recherche, kein Shop und kein Versandversprechen.", why:"Warum dieser Ratgeber wichtig ist", method:"Praktische Methode", practical:"Was festzuhalten ist", verification:"Live-Details vor einer Entscheidung prüfen", disclosure:"Unabhängige Recherchequelle. Nicht mit LoloBuy verbunden, keine Bestellabwicklung und keine Bestätigung von Bestand, Echtheit, Versandpreis oder Zustellergebnis.", categoriesLead:"Beginnen Sie mit einer Artikelart und prüfen Sie dann Listing, Variante und Maße.", guideLead:"Jeder Ratgeber beantwortet eine konkrete Käuferfrage.", related:"Passende Ratgeber", check:"Listing prüfen", source:"Quellenbasierte Recherche", language:"Sprache" },
  es: { home:"Inicio", guides:"Guías", categories:"Categorías", open:"Abrir FindSpreadsheet", articleList:"Guías para compradores", read:"Leer guía", eyebrow:"Investigación independiente de LoloBuy Spreadsheet", title:"Encuentra, comprueba y compara antes de pedir.", lead:"Guía multilingüe sobre productos, fotos QC, enlaces de origen, tallas y planificación de paquetes. Es investigación, no una tienda ni una promesa de envío.", why:"Por qué importa esta guía", method:"Método práctico", practical:"Qué anotar", verification:"Verifica la información en directo antes de decidir", disclosure:"Recurso de investigación independiente. No está afiliado a LoloBuy, no procesa pedidos ni confirma stock, autenticidad, precio de envío o resultado de entrega.", categoriesLead:"Empieza con un tipo de producto y comprueba anuncio, variante y medidas.", guideLead:"Cada guía responde a una pregunta de compra concreta.", related:"Guías relacionadas", check:"Comprobar anuncio", source:"Investigación desde la fuente", language:"Idioma" },
  it: { home:"Home", guides:"Guide", categories:"Categorie", open:"Apri FindSpreadsheet", articleList:"Guide per acquirenti", read:"Leggi la guida", eyebrow:"Ricerca indipendente LoloBuy Spreadsheet", title:"Trova, verifica e confronta prima di ordinare.", lead:"Guida multilingue per prodotti, foto QC, link sorgente, taglie e pianificazione del pacco. È ricerca, non un negozio né una promessa di spedizione.", why:"Perché questa guida è utile", method:"Metodo pratico", practical:"Cosa annotare", verification:"Verifica i dettagli live prima di decidere", disclosure:"Risorsa di ricerca indipendente. Non è affiliata a LoloBuy, non elabora ordini e non conferma disponibilità, autenticità, prezzo di spedizione o esito della consegna.", categoriesLead:"Parti da un tipo di articolo e controlla annuncio, variante e misure.", guideLead:"Ogni guida risponde a una domanda concreta.", related:"Guide correlate", check:"Controlla l’annuncio", source:"Ricerca dalla fonte", language:"Lingua" },
  pt: { home:"Início", guides:"Guias", categories:"Categorias", open:"Abrir FindSpreadsheet", articleList:"Guias do comprador", read:"Ler guia", eyebrow:"Pesquisa independente LoloBuy Spreadsheet", title:"Encontre, verifique e compare antes de encomendar.", lead:"Guia multilingue para produtos, fotos QC, links de origem, tamanhos e planeamento de encomendas. É pesquisa, não uma loja nem uma promessa de envio.", why:"Porque este guia importa", method:"Método prático", practical:"O que registar", verification:"Verifique detalhes ao vivo antes de decidir", disclosure:"Recurso de pesquisa independente. Não é afiliado à LoloBuy, não processa encomendas nem confirma stock, autenticidade, preço de envio ou resultado de entrega.", categoriesLead:"Comece com um tipo de artigo e confirme anúncio, variante e medidas.", guideLead:"Cada guia responde a uma questão concreta do comprador.", related:"Guias relacionados", check:"Ver anúncio", source:"Pesquisa pela fonte", language:"Idioma" },
  nl: { home:"Home", guides:"Gidsen", categories:"Categorieën", open:"Open FindSpreadsheet", articleList:"Kopersgidsen", read:"Lees gids", eyebrow:"Onafhankelijk LoloBuy Spreadsheet-onderzoek", title:"Vind, controleer en vergelijk vóór je bestelt.", lead:"Meertalige gids voor producten, QC-foto’s, bronlinks, maten en pakketplanning. Dit is onderzoek, geen winkel of verzendbelofte.", why:"Waarom deze gids telt", method:"Praktische methode", practical:"Wat je noteert", verification:"Controleer live details voor je beslist", disclosure:"Onafhankelijke onderzoeksbron. Niet gelieerd aan LoloBuy, verwerkt geen bestellingen en bevestigt geen voorraad, echtheid, verzendprijs of bezorgresultaat.", categoriesLead:"Begin met een producttype en controleer listing, variant en maten.", guideLead:"Elke gids beantwoordt één concrete kopersvraag.", related:"Gerelateerde gidsen", check:"Controleer listing", source:"Bron-eerst onderzoek", language:"Taal" },
  pl: { home:"Strona główna", guides:"Poradniki", categories:"Kategorie", open:"Otwórz FindSpreadsheet", articleList:"Poradniki kupującego", read:"Czytaj poradnik", eyebrow:"Niezależne badanie LoloBuy Spreadsheet", title:"Znajdź, sprawdź i porównaj przed zamówieniem.", lead:"Wielojęzyczny przewodnik po produktach, zdjęciach QC, linkach źródłowych, rozmiarach i planowaniu paczki. To badanie, nie sklep ani obietnica wysyłki.", why:"Dlaczego ten poradnik jest ważny", method:"Praktyczna metoda", practical:"Co zapisać", verification:"Sprawdź aktualne dane przed decyzją", disclosure:"Niezależne źródło badawcze. Nie jest powiązane z LoloBuy, nie obsługuje zamówień i nie potwierdza dostępności, autentyczności, ceny wysyłki ani wyniku doręczenia.", categoriesLead:"Zacznij od typu produktu, potem sprawdź ofertę, wariant i wymiary.", guideLead:"Każdy poradnik odpowiada na jedno konkretne pytanie kupującego.", related:"Powiązane poradniki", check:"Sprawdź ofertę", source:"Badanie od źródła", language:"Język" },
  sv: { home:"Hem", guides:"Guider", categories:"Kategorier", open:"Öppna FindSpreadsheet", articleList:"Köpguider", read:"Läs guide", eyebrow:"Oberoende LoloBuy Spreadsheet-research", title:"Hitta, kontrollera och jämför innan du beställer.", lead:"Flerspråkig guide för produkter, QC-bilder, källänkar, storlekar och paketplanering. Detta är research, inte en butik eller ett fraktlöfte.", why:"Varför guiden är viktig", method:"Praktisk metod", practical:"Vad du ska spara", verification:"Kontrollera aktuella uppgifter före beslut", disclosure:"Oberoende researchresurs. Inte ansluten till LoloBuy, behandlar inga order och bekräftar inte lager, äkthet, fraktpris eller leveransutfall.", categoriesLead:"Börja med en artikeltyp och kontrollera sedan annons, variant och mått.", guideLead:"Varje guide besvarar en konkret köparfråga.", related:"Relaterade guider", check:"Kontrollera annons", source:"Källbaserad research", language:"Språk" },
};

const body: Record<Locale, { intro: string; method: string; limits: string; items: string[]; closing: string }> = {
  en: { intro:"The aim is to turn a vague search into a decision that can be checked. Use the exact listing and current destination information rather than a claim copied from another user or an old screenshot.", method:"Open the source listing first. Save the link, product name, selected colour or version, size, visible price and any measurement table. Then compare only like-for-like details. If the listing changes, record what changed instead of treating an old screenshot or comment as current evidence.", limits:"Availability, domestic delivery, warehouse processing, parcel routes and payment choices can vary by time and destination. A useful guide explains what should be checked; it does not replace those live checks.", items:["The exact selected option and whether its image matches it","The one visible fact that still needs a live check","The evidence needed to revisit the decision later"], closing:"Use this page to frame research, then continue with the current listing and destination-specific information. It deliberately avoids promises about stock, final prices, customs, delivery time or product outcome." },
  fr: { intro:"L’objectif est de transformer une recherche vague en décision vérifiable. Utilisez l’annonce exacte et les informations actuelles de destination plutôt qu’une affirmation copiée d’un autre utilisateur ou d’une ancienne capture.", method:"Ouvrez d’abord l’annonce source. Conservez le lien, le nom, la couleur ou version choisie, la taille, le prix visible et le tableau de mesures. Comparez ensuite uniquement des éléments équivalents. Si l’annonce change, notez la modification au lieu de traiter une ancienne capture ou un commentaire comme une preuve actuelle.", limits:"Disponibilité, livraison intérieure, traitement en entrepôt, lignes de colis et moyens de paiement peuvent varier selon la date et la destination. Un guide utile explique quoi vérifier ; il ne remplace pas ces contrôles en direct.", items:["L’option exacte choisie et l’image qui lui correspond","Le fait visible qui doit encore être vérifié en direct","La preuve à conserver pour revoir la décision plus tard"], closing:"Utilisez cette page pour structurer votre recherche, puis poursuivez avec l’annonce actuelle et les informations propres à votre destination. Elle ne promet ni stock, ni prix final, ni douane, ni délai, ni résultat produit." },
  de: { intro:"Ziel ist es, aus einer vagen Suche eine prüfbare Entscheidung zu machen. Nutzen Sie das exakte Listing und aktuelle Zielortinformationen statt einer kopierten Aussage oder eines alten Screenshots.", method:"Öffnen Sie zuerst das Quelllisting. Speichern Sie Link, Produktname, gewählte Farbe oder Version, Größe, sichtbaren Preis und Maßtabelle. Vergleichen Sie danach nur Gleiches mit Gleichem. Ändert sich das Listing, notieren Sie die Änderung, statt einen alten Screenshot oder Kommentar als aktuelle Evidenz zu behandeln.", limits:"Verfügbarkeit, Inlandsversand, Lagerbearbeitung, Paketlinien und Zahlungsoptionen können je nach Zeit und Zielort variieren. Ein guter Ratgeber erklärt, was zu prüfen ist; er ersetzt diese Live-Prüfung nicht.", items:["Die exakt gewählte Option und ob das Bild dazu passt","Die sichtbare Angabe, die noch live geprüft werden muss","Den Nachweis, mit dem die Entscheidung später nachvollziehbar bleibt"], closing:"Nutzen Sie diese Seite zur Strukturierung Ihrer Recherche und fahren Sie dann mit dem aktuellen Listing und zielortspezifischen Angaben fort. Sie verspricht keinen Bestand, Endpreis, Zoll, Lieferzeit oder Produktausgang." },
  es: { intro:"El objetivo es convertir una búsqueda vaga en una decisión comprobable. Usa el anuncio exacto y los datos actuales del destino, no una afirmación copiada de otro usuario o una captura antigua.", method:"Abre primero el anuncio de origen. Guarda enlace, nombre del producto, color o versión elegida, talla, precio visible y tabla de medidas. Después compara solo datos equivalentes. Si el anuncio cambia, anota el cambio en vez de tratar una captura o comentario antiguo como evidencia actual.", limits:"La disponibilidad, envío interno, procesamiento de almacén, rutas de paquete y opciones de pago pueden variar según fecha y destino. Una guía útil explica qué revisar; no sustituye esas comprobaciones en directo.", items:["La opción exacta elegida y si la imagen corresponde","El dato visible que aún necesita verificación en directo","La evidencia que permite revisar la decisión después"], closing:"Usa esta página para ordenar la investigación y continúa con el anuncio actual y la información específica de tu destino. No promete stock, precio final, aduana, plazo de entrega ni resultado del producto." },
  it: { intro:"Lo scopo è trasformare una ricerca vaga in una decisione verificabile. Usa l’annuncio esatto e le informazioni aggiornate sulla destinazione, non un’affermazione copiata da un altro utente o una vecchia schermata.", method:"Apri prima l’annuncio sorgente. Salva link, nome prodotto, colore o versione scelta, taglia, prezzo visibile e tabella misure. Poi confronta solo dati equivalenti. Se l’annuncio cambia, annota la modifica invece di trattare una vecchia schermata o un commento come prova attuale.", limits:"Disponibilità, consegna interna, lavorazione in magazzino, linee del pacco e opzioni di pagamento possono variare con data e destinazione. Una guida utile indica cosa controllare; non sostituisce i controlli live.", items:["L’opzione scelta esatta e se l’immagine la corrisponde","Il fatto visibile che richiede ancora un controllo live","La prova che consente di rivedere la decisione in seguito"], closing:"Usa questa pagina per organizzare la ricerca e prosegui con l’annuncio attuale e le informazioni relative alla destinazione. Non promette disponibilità, prezzo finale, dogana, tempi o risultato del prodotto." },
  pt: { intro:"O objetivo é transformar uma pesquisa vaga numa decisão verificável. Use o anúncio exato e a informação atual do destino, não uma afirmação copiada de outro utilizador ou uma imagem antiga.", method:"Abra primeiro o anúncio de origem. Guarde link, nome do produto, cor ou versão escolhida, tamanho, preço visível e tabela de medidas. Depois compare apenas dados equivalentes. Se o anúncio mudar, registe a alteração em vez de tratar uma captura ou comentário antigo como prova atual.", limits:"Disponibilidade, entrega interna, processamento em armazém, linhas de encomenda e opções de pagamento podem variar por data e destino. Um guia útil explica o que confirmar; não substitui verificações ao vivo.", items:["A opção exata escolhida e se a imagem lhe corresponde","O dado visível que ainda precisa de confirmação ao vivo","A prova necessária para rever a decisão mais tarde"], closing:"Use esta página para estruturar a pesquisa e depois continue com o anúncio atual e a informação do seu destino. Não promete stock, preço final, alfândega, prazo de entrega ou resultado do produto." },
  nl: { intro:"Het doel is om een vage zoekopdracht om te zetten in een controleerbare beslissing. Gebruik de exacte listing en actuele bestemmingsinformatie, niet een gekopieerde bewering of oude schermafbeelding.", method:"Open eerst de bronlisting. Bewaar link, productnaam, gekozen kleur of versie, maat, zichtbare prijs en maattabel. Vergelijk daarna alleen vergelijkbare gegevens. Verandert de listing, noteer die wijziging in plaats van een oude screenshot of reactie als actueel bewijs te zien.", limits:"Voorraad, binnenlandse levering, magazijnverwerking, pakketroutes en betaalopties kunnen verschillen per datum en bestemming. Een bruikbare gids legt uit wat je controleert; hij vervangt die live controles niet.", items:["De exact gekozen optie en of de afbeelding daarbij past","Het zichtbare feit dat nog live gecontroleerd moet worden","Het bewijs waarmee je de beslissing later kunt herzien"], closing:"Gebruik deze pagina om onderzoek te structureren en ga daarna verder met de actuele listing en bestemmingsspecifieke informatie. Zij belooft geen voorraad, eindprijs, douane, levertijd of productuitkomst." },
  pl: { intro:"Celem jest zamiana ogólnego wyszukiwania w decyzję, którą można sprawdzić. Korzystaj z dokładnej oferty i aktualnych danych o miejscu docelowym, a nie z kopiowanej opinii lub starego zrzutu.", method:"Najpierw otwórz ofertę źródłową. Zapisz link, nazwę produktu, wybrany kolor lub wersję, rozmiar, widoczną cenę i tabelę wymiarów. Następnie porównuj tylko równoważne dane. Jeśli oferta się zmieni, zanotuj zmianę zamiast uznawać stary zrzut lub komentarz za aktualny dowód.", limits:"Dostępność, dostawa krajowa, obsługa magazynowa, linie paczek i płatności mogą się zmieniać zależnie od daty i celu. Dobry poradnik wyjaśnia co sprawdzić; nie zastępuje kontroli na żywo.", items:["Dokładnie wybraną opcję i zgodność zdjęcia","Widoczny fakt wymagający jeszcze kontroli na żywo","Dowód potrzebny do ponownej oceny decyzji później"], closing:"Użyj tej strony do uporządkowania badania, a następnie przejdź do aktualnej oferty i informacji właściwych dla miejsca docelowego. Nie obiecuje ona dostępności, ceny końcowej, odprawy, terminu ani wyniku produktu." },
  sv: { intro:"Målet är att förvandla en vag sökning till ett beslut som går att kontrollera. Använd den exakta annonsen och aktuell destinationsinformation, inte ett kopierat påstående eller en gammal skärmbild.", method:"Öppna först källannonsen. Spara länk, produktnamn, vald färg eller version, storlek, synligt pris och måttabell. Jämför sedan bara likvärdiga uppgifter. Om annonsen ändras, notera ändringen i stället för att se en gammal skärmbild eller kommentar som aktuell evidens.", limits:"Tillgänglighet, inrikes leverans, lagerhantering, paketlinjer och betalningsval kan variera efter tid och destination. En bra guide förklarar vad som ska kontrolleras; den ersätter inte livekontrollen.", items:["Det exakt valda alternativet och om bilden stämmer","Den synliga uppgift som fortfarande måste kontrolleras live","Underlaget som gör beslutet möjligt att granska senare"], closing:"Använd sidan för att strukturera research och fortsätt sedan med den aktuella annonsen och destinationsspecifik information. Den lovar inte lager, slutpris, tull, leveranstid eller produktresultat." },
};

const articleTitles: Record<Locale, Record<ArticleId, [string, string]>> = {
  en: {
    "lolobuy-spreadsheet":["LoloBuy Spreadsheet: how to research a product before you order","A practical starting point for product links, variants, QC evidence and next checks."],
    "qc-photos":["LoloBuy QC photos: how to compare visible details without guessing","Use warehouse images as evidence to compare, not as a promise."],
    "weidian-taobao-1688":["Weidian, Taobao and 1688 links: a careful LoloBuy research workflow","Check the exact source listing, option and unit before you move forward."],
    "shipping-planning":["LoloBuy shipping planning: destination, parcel details and live estimates","Prepare a parcel decision without treating an estimate as a final quote."],
    "sizing-checklist":["Sizing checklist for LoloBuy finds: measurements before labels","Compare units, garment measurements and the selected option before purchase."],
    "category-finds":["LoloBuy finds by category: shoes, hoodies and accessories","Use a category as a starting filter, then return to the individual listing."],
  },
  fr: {
    "lolobuy-spreadsheet":["Guide LoloBuy Spreadsheet : vérifier un produit avant de commander","Point de départ pratique pour liens produit, variantes, QC et vérifications suivantes."],
    "qc-photos":["Photos QC LoloBuy : comparer les détails visibles sans deviner","Utilisez les images d’entrepôt comme éléments de comparaison, non comme promesse."],
    "weidian-taobao-1688":["Liens Weidian, Taobao et 1688 : méthode de recherche LoloBuy","Vérifiez l’annonce source, l’option choisie et l’unité avant de poursuivre."],
    "shipping-planning":["Expédition LoloBuy : destination, colis et estimations en direct","Préparez votre décision de colis sans traiter une estimation comme un prix final."],
    "sizing-checklist":["Guide des tailles LoloBuy : mesures avant les étiquettes","Comparez unités, mesures du vêtement et option choisie avant l’achat."],
    "category-finds":["Trouver chaussures, sweats et accessoires avec LoloBuy","Utilisez une catégorie comme filtre de départ, puis revenez à l’annonce exacte."],
  },
  de: {
    "lolobuy-spreadsheet":["LoloBuy Spreadsheet: Produkt vor dem Bestellen prüfen","Praktischer Einstieg für Produktlinks, Varianten, QC-Nachweise und nächste Schritte."],
    "qc-photos":["LoloBuy QC-Fotos: sichtbare Details ohne Raten vergleichen","Lagerbilder sind Vergleichsmaterial, keine Zusage."],
    "weidian-taobao-1688":["Weidian-, Taobao- und 1688-Links: LoloBuy-Recherche","Quelllisting, Option und Einheit vor dem nächsten Schritt prüfen."],
    "shipping-planning":["LoloBuy Versandplanung: Ziel, Paketdaten und Live-Schätzungen","Eine Paketentscheidung vorbereiten, ohne Schätzung als Endpreis zu lesen."],
    "sizing-checklist":["LoloBuy Größencheck: Maße vor Etiketten","Einheiten, Kleidungsmaße und gewählte Option vor Kauf vergleichen."],
    "category-finds":["LoloBuy-Funde nach Kategorie: Schuhe, Hoodies und Zubehör","Kategorie als Filter nutzen und dann zum einzelnen Listing zurückkehren."],
  },
  es: {
    "lolobuy-spreadsheet":["LoloBuy Spreadsheet: investigar un producto antes de pedir","Inicio práctico para enlaces, variantes, evidencia QC y siguientes comprobaciones."],
    "qc-photos":["Fotos QC de LoloBuy: compara detalles visibles sin adivinar","Las fotos de almacén sirven para comparar, no para prometer."],
    "weidian-taobao-1688":["Enlaces Weidian, Taobao y 1688: método de investigación LoloBuy","Comprueba anuncio fuente, opción y unidad antes de continuar."],
    "shipping-planning":["Planificación de envío LoloBuy: destino, paquete y estimaciones","Prepara la decisión sin tratar una estimación como precio final."],
    "sizing-checklist":["Guía de tallas LoloBuy: medidas antes que etiquetas","Compara unidades, medidas de prenda y opción elegida antes de comprar."],
    "category-finds":["Hallazgos LoloBuy por categoría: zapatos, sudaderas y accesorios","Usa una categoría como filtro inicial y vuelve al anuncio concreto."],
  },
  it: {
    "lolobuy-spreadsheet":["LoloBuy Spreadsheet: come verificare un prodotto prima dell’ordine","Punto di partenza per link, varianti, prove QC e controlli successivi."],
    "qc-photos":["Foto QC LoloBuy: confrontare dettagli visibili senza supposizioni","Le immagini di magazzino servono a confrontare, non sono una promessa."],
    "weidian-taobao-1688":["Link Weidian, Taobao e 1688: metodo di ricerca LoloBuy","Controlla annuncio fonte, opzione e unità prima di procedere."],
    "shipping-planning":["Pianificazione spedizione LoloBuy: destinazione, pacco e stime","Prepara la decisione senza trattare una stima come prezzo finale."],
    "sizing-checklist":["Guida taglie LoloBuy: misure prima delle etichette","Confronta unità, misure del capo e opzione scelta prima dell’acquisto."],
    "category-finds":["Trova scarpe, felpe e accessori con LoloBuy","Usa una categoria come filtro iniziale e torna all’annuncio specifico."],
  },
  pt: {
    "lolobuy-spreadsheet":["LoloBuy Spreadsheet: pesquisar um produto antes de encomendar","Ponto de partida para links, variantes, provas QC e verificações seguintes."],
    "qc-photos":["Fotos QC LoloBuy: comparar detalhes visíveis sem adivinhar","Imagens de armazém servem para comparar, não são promessa."],
    "weidian-taobao-1688":["Links Weidian, Taobao e 1688: método de pesquisa LoloBuy","Verifique anúncio fonte, opção e unidade antes de avançar."],
    "shipping-planning":["Planeamento de envio LoloBuy: destino, encomenda e estimativas","Prepare a decisão sem tratar uma estimativa como preço final."],
    "sizing-checklist":["Guia de tamanhos LoloBuy: medidas antes das etiquetas","Compare unidades, medidas da peça e opção escolhida antes da compra."],
    "category-finds":["Encontrar calçado, camisolas e acessórios com LoloBuy","Use uma categoria como filtro inicial e volte ao anúncio específico."],
  },
  nl: {
    "lolobuy-spreadsheet":["LoloBuy Spreadsheet: een product onderzoeken vóór je bestelt","Praktisch vertrekpunt voor links, varianten, QC-bewijs en vervolgcontroles."],
    "qc-photos":["LoloBuy QC-foto’s: zichtbare details vergelijken zonder te gokken","Magazijnbeelden zijn vergelijkingsmateriaal, geen belofte."],
    "weidian-taobao-1688":["Weidian-, Taobao- en 1688-links: LoloBuy-onderzoek","Controleer bronlisting, optie en eenheid voordat je doorgaat."],
    "shipping-planning":["LoloBuy verzendplanning: bestemming, pakket en live schattingen","Bereid je beslissing voor zonder een schatting als eindprijs te zien."],
    "sizing-checklist":["LoloBuy maatcheck: maten vóór labels","Vergelijk eenheden, kledingmaten en de gekozen optie vóór aankoop."],
    "category-finds":["LoloBuy-vondsten per categorie: schoenen, hoodies en accessoires","Gebruik een categorie als startfilter en keer terug naar de listing."],
  },
  pl: {
    "lolobuy-spreadsheet":["LoloBuy Spreadsheet: jak sprawdzić produkt przed zamówieniem","Praktyczny start dla linków, wariantów, dowodów QC i kolejnych kontroli."],
    "qc-photos":["Zdjęcia QC LoloBuy: porównuj widoczne detale bez zgadywania","Zdjęcia magazynowe służą do porównania, nie są obietnicą."],
    "weidian-taobao-1688":["Linki Weidian, Taobao i 1688: badanie LoloBuy","Sprawdź ofertę źródłową, opcję i jednostkę przed dalszym krokiem."],
    "shipping-planning":["Planowanie wysyłki LoloBuy: kraj, paczka i wyceny","Przygotuj decyzję bez traktowania wyceny jako ceny końcowej."],
    "sizing-checklist":["Kontrola rozmiaru LoloBuy: wymiary przed etykietą","Porównaj jednostki, wymiary ubrania i wybrany wariant przed zakupem."],
    "category-finds":["Znajdowanie produktów LoloBuy: buty, bluzy i akcesoria","Użyj kategorii jako filtra startowego, potem wróć do oferty."],
  },
  sv: {
    "lolobuy-spreadsheet":["LoloBuy Spreadsheet: undersök en vara före beställning","Praktisk start för länkar, varianter, QC-underlag och nästa kontroller."],
    "qc-photos":["LoloBuy QC-bilder: jämför synliga detaljer utan gissningar","Lagerbilder är jämförelseunderlag, inte ett löfte."],
    "weidian-taobao-1688":["Weidian-, Taobao- och 1688-länkar: LoloBuy-research","Kontrollera källannons, alternativ och enhet innan du går vidare."],
    "shipping-planning":["LoloBuy fraktplanering: destination, paket och liveuppskattning","Förbered beslutet utan att se en uppskattning som slutpris."],
    "sizing-checklist":["LoloBuy storlekscheck: mått före etiketter","Jämför enheter, plaggmått och valt alternativ före köp."],
    "category-finds":["LoloBuy-fynd per kategori: skor, hoodies och accessoarer","Använd kategori som startfilter och återgå sedan till annonsen."],
  },
};

const articleIds: ArticleId[] = ["lolobuy-spreadsheet", "qc-photos", "weidian-taobao-1688", "shipping-planning", "sizing-checklist", "category-finds"];
const baseUrl = "https://lolobuysheet.fr";

function pathFor(locale: Locale, section?: string, slug?: string) {
  return `/${locale}/${section ? `${section}/` : ""}${slug ?? ""}`;
}

function upsertLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]`;
  let node = document.head.querySelector(selector) as HTMLLinkElement | null;
  if (!node) { node = document.createElement("link"); node.rel = rel; if (hreflang) node.hreflang = hreflang; document.head.appendChild(node); }
  node.href = href;
}

function GuideArticle({ locale, id }: { locale: Locale; id: ArticleId }) {
  const t = copy[locale], b = body[locale], [title, summary] = articleTitles[locale][id];
  const keywords = {
    "lolobuy-spreadsheet": "lolobuy spreadsheet, product links, finds",
    "qc-photos": "lolobuy QC photos, quality check, warehouse images",
    "weidian-taobao-1688": "lolobuy weidian, taobao, 1688 links",
    "shipping-planning": "lolobuy shipping, parcel planning, delivery destination",
    "sizing-checklist": "lolobuy sizing, garment measurements, shoe size",
    "category-finds": "lolobuy shoes spreadsheet, hoodie spreadsheet, accessories finds",
  }[id];
  return <article className="section article longform seo-guide">
    <p className="kicker coral">{t.eyebrow}</p><h1>{title}</h1><p className="article-lead">{summary}</p>
    <p className="keyword-line"><b>Topic:</b> {keywords}</p>
    <section><h2>{t.why}</h2><p>{summary}</p><p>{b.intro}</p></section>
    <section><h2>{t.method}</h2><p>{b.method}</p><p>{t.verification}. {b.limits}</p></section>
    <section><h2>{t.practical}</h2><ul>{b.items.map(item => <li key={item}>{item}</li>)}</ul></section>
    <section><h2>{t.source}</h2><p>{b.closing}</p></section>
    <a className="button button-primary" href="https://findspreadsheet.com/">{t.open}<span>↗</span></a>
  </article>;
}

function Guides({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return <main><section className="subpage-intro"><p className="kicker coral">{t.eyebrow}</p><h1>{t.articleList}</h1><p>{t.guideLead}</p></section><section className="section guide-grid">{articleIds.map(id => { const [title, description] = articleTitles[locale][id]; return <article className="guide-card" key={id}><p className="kicker blue">{id.replaceAll("-", " ")}</p><h2>{title}</h2><p>{description}</p><a className="text-link" href={pathFor(locale, "guides", id)}>{t.read} →</a></article>; })}</section></main>;
}

function Categories({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const categories = [["Shoes","Size, material, sole and seller photos"],["Hoodies","Fabric, measurements, colour and print placement"],["Accessories","Model, compatibility, material and selected variation"],["Jackets","Layering, garment measurements and hardware"],["T-shirts","Fabric weight, cut and size table"],["Pants","Waist, rise, inseam and selected size"]];
  return <main><section className="subpage-intro"><p className="kicker coral">{t.eyebrow}</p><h1>{t.categories}</h1><p>{t.categoriesLead}</p></section><section className="section category-grid category-directory">{categories.map(([name, note], i) => <article className="category-directory-card" key={name}><div><span>{String(i + 1).padStart(2, "0")}</span><h2>{name}</h2><p>{note}</p></div><a className="button button-primary category-arrow" href={`https://findspreadsheet.com/search.html?keywords=${encodeURIComponent(name)}&channelid=2`}>↗</a></article>)}</section></main>;
}

function Home({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return <main><section className="hero seo-hero"><div className="hero-copy"><p className="kicker">{t.eyebrow}</p><h1>{t.title}</h1><p className="hero-lead">{t.lead}</p><div className="hero-actions"><a className="button button-primary" href={pathFor(locale, "guides")}>{t.guides}<span>→</span></a><a className="button button-ghost" href="https://findspreadsheet.com/">{t.open}<span>↗</span></a></div></div></section><section className="section homepage-cards"><div className="section-intro"><p className="kicker blue">{t.source}</p><h2>{t.articleList}</h2><p>{t.guideLead}</p></div><div className="home-card-grid">{articleIds.slice(0, 4).map((id, i) => { const [title, description] = articleTitles[locale][id]; return <a className="home-page-card" href={pathFor(locale, "guides", id)} key={id}><span>0{i + 1}</span><h2>{title}</h2><p>{description}</p><b>{t.read} →</b></a>; })}</div></section><section className="section market"><div className="section-intro"><p className="kicker blue">{t.check}</p><h2>{t.verification}</h2><p>{t.disclosure}</p></div></section></main>;
}

export default function Site({ locale, section, slug }: { locale: Locale; section?: string; slug?: string }) {
  const t = copy[locale];
  const activeSection = section === "guides" || section === "categories" ? section : undefined;
  const validArticle = activeSection === "guides" && articleIds.includes(slug as ArticleId) ? slug as ArticleId : undefined;
  const article = validArticle ? articleTitles[locale][validArticle] : undefined;
  const canonicalPath = pathFor(locale, activeSection, validArticle);
  const pageTitle = article ? `${article[0]} | LoloBuy Sheet` : activeSection === "guides" ? `${t.articleList} | LoloBuy Sheet` : activeSection === "categories" ? `${t.categories} | LoloBuy Sheet` : "LoloBuy Spreadsheet | " + t.title;
  const description = article?.[1] ?? t.lead;

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = pageTitle;
    const meta = document.querySelector('meta[name="description"]') ?? document.head.appendChild(document.createElement("meta"));
    meta.setAttribute("name", "description"); meta.setAttribute("content", description);
    upsertLink("canonical", `${baseUrl}${canonicalPath}`);
    locales.forEach(({ id }) => upsertLink("alternate", `${baseUrl}${pathFor(id, activeSection, validArticle)}`, id));
    upsertLink("alternate", `${baseUrl}${pathFor("en", activeSection, validArticle)}`, "x-default");
  }, [locale, activeSection, validArticle, canonicalPath, pageTitle, description]);

  return <><header className="site-header"><a className="brand" href={pathFor(locale)}><strong>LoloBuy Sheet</strong><small>Independent research</small></a><nav><a href={pathFor(locale)}>{t.home}</a><a href={pathFor(locale, "guides")}>{t.guides}</a><a href={pathFor(locale, "categories")}>{t.categories}</a></nav><label className="language-select"><span>{t.language}</span><select value={locale} onChange={event => { const next = event.target.value as Locale; window.location.href = pathFor(next, activeSection, validArticle); }}>{locales.map(item => <option value={item.id} key={item.id}>{item.id.toUpperCase()} · {item.label}</option>)}</select></label></header>{validArticle ? <GuideArticle locale={locale} id={validArticle} /> : activeSection === "guides" ? <Guides locale={locale} /> : activeSection === "categories" ? <Categories locale={locale} /> : <Home locale={locale} />}<footer><strong>LoloBuy Sheet</strong><p>{t.disclosure}</p><div className="footer-languages">{locales.map(item => <a key={item.id} href={pathFor(item.id, activeSection, validArticle)}>{item.id.toUpperCase()}</a>)}</div></footer></>;
}
