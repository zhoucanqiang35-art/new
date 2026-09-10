type Locale="en"|"es"|"de"|"fr"|"it"|"pt"|"nl"|"pl"|"sv";
type Faq={q:string;a:string};

export const articleMeta:Record<Locale,Array<{title:string;dek:string}>>={
 en:[
  {title:"How to Read PikoBuy QC Photos Without Guessing",dek:"A practical, category-by-category method for checking visible details, confirming the ordered option and deciding when another photo is worth requesting."},
  {title:"Why a Cheap PikoBuy Find Can Become an Expensive Parcel",dek:"A plain-English guide to item price, parcel dimensions, route selection and the costs that appear between a product listing and delivery."},
  {title:"PikoBuy Spreadsheet Checklist: From Source Link to Warehouse",dek:"A repeatable workflow that keeps the source listing, selected option, warehouse evidence, return timing and shipping decision in one record."}
 ],
 es:[
  {title:"Cómo revisar las fotos QC de PikoBuy sin adivinar",dek:"Un método práctico por categorías para comprobar detalles visibles, confirmar la opción pedida y decidir si hace falta otra foto."},
  {title:"Por qué un producto PikoBuy barato puede convertirse en un paquete caro",dek:"Una guía clara sobre precio, dimensiones, elección de ruta y costes entre el anuncio y la entrega."},
  {title:"Lista PikoBuy Spreadsheet: del enlace al almacén",dek:"Un proceso repetible que reúne fuente, opción, pruebas del almacén, plazo de devolución y envío."}
 ],
 de:[
  {title:"PikoBuy-QC-Fotos prüfen, ohne zu raten",dek:"Eine praktische Methode nach Kategorien, um sichtbare Details und die bestellte Variante zu prüfen und fehlende Fotos zu erkennen."},
  {title:"Warum ein günstiger PikoBuy-Fund als Paket teuer werden kann",dek:"Ein klarer Leitfaden zu Artikelpreis, Paketmaßen, Versandroute und Kosten bis zur Zustellung."},
  {title:"PikoBuy-Spreadsheet-Checkliste: vom Quelllink bis zum Lager",dek:"Ein wiederholbarer Ablauf für Quelle, Variante, Lagerbelege, Rückgabefrist und Versandentscheidung."}
 ],
 fr:[
  {title:"Lire les photos QC PikoBuy sans faire de suppositions",dek:"Une méthode pratique par catégorie pour vérifier les détails visibles, l’option commandée et les photos manquantes."},
  {title:"Pourquoi un article PikoBuy bon marché peut devenir un colis coûteux",dek:"Un guide clair sur le prix, les dimensions, le choix de la ligne et les coûts jusqu’à la livraison."},
  {title:"Checklist PikoBuy Spreadsheet : du lien source à l’entrepôt",dek:"Un processus répétable réunissant source, option, preuves d’entrepôt, délai de retour et expédition."}
 ],
 it:[
  {title:"Come leggere le foto QC di PikoBuy senza supposizioni",dek:"Un metodo pratico per categoria per verificare dettagli visibili, opzione ordinata e necessità di altre foto."},
  {title:"Perché un articolo PikoBuy economico può diventare un pacco costoso",dek:"Una guida chiara su prezzo, dimensioni, scelta della linea e costi fino alla consegna."},
  {title:"Checklist PikoBuy Spreadsheet: dal link al magazzino",dek:"Un flusso ripetibile che conserva fonte, opzione, prove del magazzino, tempi di reso e spedizione."}
 ],
 pt:[
  {title:"Como analisar fotos de QC da PikoBuy sem adivinhar",dek:"Um método prático por categoria para verificar detalhes visíveis, a opção comprada e a necessidade de novas fotos."},
  {title:"Por que um achado barato da PikoBuy pode virar um pacote caro",dek:"Um guia claro sobre preço, dimensões, escolha de rota e custos até a entrega."},
  {title:"Checklist PikoBuy Spreadsheet: do link ao armazém",dek:"Um processo repetível para fonte, opção, provas do armazém, prazo de devolução e envio."}
 ],
 nl:[
  {title:"PikoBuy-QC-foto’s beoordelen zonder te gokken",dek:"Een praktische methode per categorie om zichtbare details, de gekozen optie en ontbrekende foto’s te controleren."},
  {title:"Waarom een goedkope PikoBuy-vondst een duur pakket kan worden",dek:"Een heldere gids over artikelprijs, pakketmaten, routekeuze en kosten tot levering."},
  {title:"PikoBuy Spreadsheet-checklist: van bronlink tot magazijn",dek:"Een herhaalbare werkwijze voor bron, optie, magazijnbewijs, retourtermijn en verzending."}
 ],
 pl:[
  {title:"Jak czytać zdjęcia QC PikoBuy bez zgadywania",dek:"Praktyczna metoda według kategorii do sprawdzania widocznych szczegółów, wybranego wariantu i brakujących ujęć."},
  {title:"Dlaczego tani produkt z PikoBuy może stać się drogą paczką",dek:"Prosty przewodnik po cenie, wymiarach paczki, wyborze trasy i kosztach do dostawy."},
  {title:"Lista PikoBuy Spreadsheet: od linku do magazynu",dek:"Powtarzalny proces obejmujący źródło, wariant, dowody magazynowe, termin zwrotu i wysyłkę."}
 ],
 sv:[
  {title:"Så granskar du PikoBuy QC-bilder utan att gissa",dek:"En praktisk metod per kategori för synliga detaljer, beställd variant och behovet av fler bilder."},
  {title:"Varför ett billigt PikoBuy-fynd kan bli ett dyrt paket",dek:"En tydlig guide till varupris, paketmått, ruttval och kostnader fram till leverans."},
  {title:"PikoBuy Spreadsheet-checklista: från källänk till lager",dek:"Ett repeterbart flöde för källa, variant, lagerbevis, returfrist och frakt."}
 ]
};

const en: Faq[]=[
 {q:"Is this the official PikoBuy website?",a:"No. This is an independent FindSpreadsheet research guide. Confirm account, payment, return and shipment decisions in your PikoBuy account."},
 {q:"What is PikoBuy’s published buying process?",a:"Select an item, search by link or keywords, pay for the purchase order, review warehouse inspection, choose a route and pay international shipping, then track the parcel."},
 {q:"Why are there two payments?",a:"The first payment covers the purchasing order. The second covers international shipping after warehouse arrival and inspection."},
 {q:"What happens at the warehouse?",a:"PikoBuy says items are checked in, photographed and checked for visible defects. Forwarded goods are unpacked and inspected."},
 {q:"Can I request more photos?",a:"PikoBuy says additional detailed photos may be purchased. Ask for a specific label, measurement, angle or part."},
 {q:"How is international shipping estimated?",a:"The official estimator uses destination, product type, weight, length, width and height. Routes can use different timing and billing methods."},
 {q:"Can every item be returned?",a:"No. Seller rules, resale condition, category exclusions and consent apply. Eligible requests generally must be made within 120 hours after warehousing."},
 {q:"What can a customer-responsible return cost?",a:"The published policy lists return shipping, the seller’s original shipping fee and an RMB 5 service fee for an unconditional warehouse return."},
 {q:"When should tracking appear?",a:"PikoBuy’s beginner guide says tracking should be available within three days after dispatch. Delivery estimates are not guarantees."},
 {q:"Does a spreadsheet guarantee quality or authenticity?",a:"No. It is a discovery and organisation tool. Verify the source, ordered option and warehouse evidence yourself."}
];
export const localizedFaqs:Record<Locale,Faq[]>={
 en,
 es:[
  {q:"¿Es esta la web oficial de PikoBuy?",a:"No. Es una guía independiente de FindSpreadsheet. Confirma pagos, devoluciones y envíos en tu cuenta PikoBuy."},
  {q:"¿Cuál es el proceso de compra publicado?",a:"Elegir el producto, buscar por enlace o palabras, pagar la compra, revisar el almacén, elegir ruta, pagar el envío y seguir el paquete."},
  {q:"¿Por qué hay dos pagos?",a:"El primero cubre la compra. El segundo cubre el envío internacional después de la llegada e inspección."},
  {q:"¿Qué ocurre en el almacén?",a:"PikoBuy indica que registra, fotografía y revisa defectos visibles. Los productos reenviados se abren e inspeccionan."},
  {q:"¿Puedo solicitar más fotos?",a:"PikoBuy permite comprar fotos detalladas adicionales. Solicita una etiqueta, medida, ángulo o pieza concreta."},
  {q:"¿Cómo se estima el envío internacional?",a:"El cálculo usa destino, tipo, peso, largo, ancho y alto. Las rutas pueden tener plazos y facturación distintos."},
  {q:"¿Se puede devolver cualquier producto?",a:"No. Depende del vendedor, estado, categoría y consentimiento. Las solicitudes elegibles suelen tener un plazo de 120 horas."},
  {q:"¿Qué cuesta una devolución por decisión del cliente?",a:"La política indica envío de vuelta, envío original del vendedor y una tarifa de servicio de 5 RMB."},
  {q:"¿Cuándo aparece el seguimiento?",a:"La guía indica que debería estar disponible dentro de tres días después del envío. La fecha de entrega no está garantizada."},
  {q:"¿La hoja garantiza calidad o autenticidad?",a:"No. Sirve para descubrir y organizar. Verifica la fuente, la opción pedida y las pruebas del almacén."}
 ],
 de:[
  {q:"Ist dies die offizielle PikoBuy-Website?",a:"Nein. Dies ist ein unabhängiger FindSpreadsheet-Ratgeber. Zahlungen, Rückgaben und Versand im PikoBuy-Konto bestätigen."},
  {q:"Wie lautet der veröffentlichte Kaufablauf?",a:"Artikel wählen, per Link oder Suchwort suchen, Kauf bezahlen, Lagerprüfung ansehen, Route wählen, Versand bezahlen und Paket verfolgen."},
  {q:"Warum gibt es zwei Zahlungen?",a:"Die erste Zahlung gilt dem Kaufauftrag. Die zweite gilt dem internationalen Versand nach Lagereingang und Prüfung."},
  {q:"Was geschieht im Lager?",a:"PikoBuy beschreibt Check-in, Fotos und Prüfung sichtbarer Mängel. Weitergeleitete Waren werden geöffnet und geprüft."},
  {q:"Kann ich weitere Fotos anfordern?",a:"Zusätzliche Detailfotos können laut PikoBuy gekauft werden. Eine konkrete Kennzeichnung, Messung oder Ansicht anfordern."},
  {q:"Wie wird der internationale Versand geschätzt?",a:"Das Tool nutzt Ziel, Produkttyp, Gewicht, Länge, Breite und Höhe. Routen können unterschiedlich abrechnen."},
  {q:"Kann jeder Artikel zurückgegeben werden?",a:"Nein. Verkäuferregeln, Zustand, Kategorie und Zustimmung gelten. Berechtigte Anträge haben meist 120 Stunden Zeit."},
  {q:"Was kostet eine kundenbedingte Rückgabe?",a:"Genannt werden Rückversand, ursprüngliche Verkäufer-Versandkosten und 5 RMB Servicegebühr."},
  {q:"Wann erscheint die Sendungsverfolgung?",a:"Laut Leitfaden innerhalb von drei Tagen nach Versand. Liefertermine sind nicht garantiert."},
  {q:"Garantiert eine Tabelle Qualität oder Echtheit?",a:"Nein. Sie dient Suche und Organisation. Quelle, Variante und Lagerbelege selbst prüfen."}
 ],
 fr:[
  {q:"S’agit-il du site officiel PikoBuy ?",a:"Non. C’est un guide indépendant FindSpreadsheet. Confirmez paiements, retours et expédition dans votre compte PikoBuy."},
  {q:"Quel est le parcours d’achat publié ?",a:"Choisir, chercher par lien ou mots-clés, payer l’achat, contrôler l’entrepôt, choisir une ligne, payer l’envoi puis suivre le colis."},
  {q:"Pourquoi deux paiements ?",a:"Le premier paie l’achat. Le second paie l’expédition internationale après réception et contrôle au dépôt."},
  {q:"Que se passe-t-il à l’entrepôt ?",a:"PikoBuy décrit l’enregistrement, les photos et le contrôle des défauts visibles. Les articles transférés sont ouverts et inspectés."},
  {q:"Puis-je demander d’autres photos ?",a:"Des photos détaillées supplémentaires peuvent être achetées. Demandez une étiquette, mesure, vue ou pièce précise."},
  {q:"Comment l’envoi international est-il estimé ?",a:"L’outil utilise destination, type, poids, longueur, largeur et hauteur. Les lignes ont des délais et modes de facturation différents."},
  {q:"Tous les articles sont-ils retournables ?",a:"Non. Règles vendeur, état, catégorie et accord s’appliquent. Le délai admissible est généralement de 120 heures."},
  {q:"Quel est le coût d’un retour à la charge du client ?",a:"La politique cite le retour au vendeur, son envoi initial et 5 RMB de frais de service."},
  {q:"Quand le suivi apparaît-il ?",a:"Le guide indique jusqu’à trois jours après l’expédition. Une estimation de livraison n’est pas une garantie."},
  {q:"La feuille garantit-elle qualité ou authenticité ?",a:"Non. Elle sert à découvrir et organiser. Vérifiez source, option et preuves d’entrepôt."}
 ],
 it:[
  {q:"Questo è il sito ufficiale PikoBuy?",a:"No. È una guida indipendente FindSpreadsheet. Conferma pagamenti, resi e spedizioni nel tuo account PikoBuy."},
  {q:"Qual è il processo di acquisto pubblicato?",a:"Scegliere, cercare tramite link o parole, pagare l’acquisto, controllare il magazzino, scegliere la linea, pagare la spedizione e tracciare."},
  {q:"Perché ci sono due pagamenti?",a:"Il primo copre l’acquisto. Il secondo copre la spedizione internazionale dopo arrivo e controllo."},
  {q:"Cosa succede in magazzino?",a:"PikoBuy descrive registrazione, fotografie e controllo dei difetti visibili. I prodotti inoltrati vengono aperti e ispezionati."},
  {q:"Posso richiedere altre foto?",a:"Si possono acquistare foto dettagliate aggiuntive. Chiedi un’etichetta, misura, angolo o componente preciso."},
  {q:"Come viene stimata la spedizione?",a:"Lo strumento usa destinazione, tipo, peso, lunghezza, larghezza e altezza. Le linee possono fatturare diversamente."},
  {q:"Ogni articolo può essere restituito?",a:"No. Contano regole del venditore, stato, categoria e consenso. Le richieste idonee hanno in genere 120 ore."},
  {q:"Quanto costa un reso a carico del cliente?",a:"La politica indica spedizione di ritorno, spedizione originale del venditore e 5 RMB di servizio."},
  {q:"Quando appare il tracking?",a:"La guida indica entro tre giorni dalla spedizione. Le date di consegna non sono garantite."},
  {q:"Il foglio garantisce qualità o autenticità?",a:"No. Serve per ricerca e organizzazione. Verifica fonte, opzione e prove del magazzino."}
 ],
 pt:[
  {q:"Este é o site oficial da PikoBuy?",a:"Não. É um guia independente FindSpreadsheet. Confirme pagamentos, devoluções e envios na sua conta PikoBuy."},
  {q:"Qual é o processo de compra publicado?",a:"Escolher, buscar por link ou palavras, pagar a compra, revisar o armazém, escolher rota, pagar o frete e rastrear."},
  {q:"Por que existem dois pagamentos?",a:"O primeiro cobre a compra. O segundo cobre o frete internacional após chegada e inspeção."},
  {q:"O que acontece no armazém?",a:"A PikoBuy descreve entrada, fotos e verificação de defeitos visíveis. Produtos encaminhados são abertos e inspecionados."},
  {q:"Posso pedir mais fotos?",a:"Fotos detalhadas extras podem ser compradas. Peça uma etiqueta, medida, ângulo ou peça específica."},
  {q:"Como o frete é estimado?",a:"A ferramenta usa destino, tipo, peso, comprimento, largura e altura. As rotas podem cobrar de formas diferentes."},
  {q:"Todo produto pode ser devolvido?",a:"Não. Valem regras do vendedor, estado, categoria e consentimento. Solicitações elegíveis geralmente têm 120 horas."},
  {q:"Quanto custa uma devolução por decisão do cliente?",a:"A política lista retorno ao vendedor, frete original do vendedor e taxa de serviço de 5 RMB."},
  {q:"Quando aparece o rastreio?",a:"O guia diz até três dias após o despacho. A data de entrega não é garantida."},
  {q:"A planilha garante qualidade ou autenticidade?",a:"Não. Ela organiza a pesquisa. Verifique fonte, opção e provas do armazém."}
 ],
 nl:[
  {q:"Is dit de officiële PikoBuy-site?",a:"Nee. Dit is een onafhankelijke FindSpreadsheet-gids. Bevestig betalingen, retouren en verzending in je PikoBuy-account."},
  {q:"Wat is het gepubliceerde koopproces?",a:"Kiezen, zoeken via link of trefwoord, aankoop betalen, magazijncontrole bekijken, route kiezen, vracht betalen en volgen."},
  {q:"Waarom zijn er twee betalingen?",a:"De eerste is voor de aankoop. De tweede is voor internationale verzending na aankomst en controle."},
  {q:"Wat gebeurt er in het magazijn?",a:"PikoBuy beschrijft inchecken, foto’s en controle op zichtbare gebreken. Doorgestuurde goederen worden geopend en bekeken."},
  {q:"Kan ik extra foto’s vragen?",a:"Extra detailfoto’s kunnen worden gekocht. Vraag om een concreet label, maat, hoek of onderdeel."},
  {q:"Hoe wordt verzending geschat?",a:"De tool gebruikt bestemming, type, gewicht, lengte, breedte en hoogte. Routes kunnen anders factureren."},
  {q:"Kan elk artikel terug?",a:"Nee. Verkopersregels, staat, categorie en toestemming gelden. Geschikte verzoeken hebben meestal 120 uur."},
  {q:"Wat kost een retour op initiatief van de klant?",a:"Het beleid noemt retourvracht, oorspronkelijke verkopersvracht en 5 RMB servicekosten."},
  {q:"Wanneer verschijnt tracking?",a:"Volgens de gids binnen drie dagen na verzending. Een leverdatum is geen garantie."},
  {q:"Garandeert een spreadsheet kwaliteit of echtheid?",a:"Nee. Het is een zoek- en organisatietool. Controleer bron, optie en magazijnbewijs."}
 ],
 pl:[
  {q:"Czy to oficjalna strona PikoBuy?",a:"Nie. To niezależny poradnik FindSpreadsheet. Płatności, zwroty i wysyłkę potwierdzaj na koncie PikoBuy."},
  {q:"Jaki jest opublikowany proces zakupu?",a:"Wybór, wyszukiwanie linkiem lub hasłem, zapłata za zakup, kontrola magazynu, wybór trasy, opłata wysyłki i śledzenie."},
  {q:"Dlaczego są dwie płatności?",a:"Pierwsza obejmuje zakup. Druga obejmuje wysyłkę międzynarodową po przyjęciu i kontroli."},
  {q:"Co dzieje się w magazynie?",a:"PikoBuy opisuje przyjęcie, zdjęcia i kontrolę widocznych wad. Przekazane towary są otwierane i sprawdzane."},
  {q:"Czy mogę poprosić o dodatkowe zdjęcia?",a:"Można kupić dodatkowe zdjęcia szczegółowe. Poproś o konkretną etykietę, pomiar, ujęcie lub część."},
  {q:"Jak szacowana jest wysyłka?",a:"Narzędzie używa kraju, typu, wagi, długości, szerokości i wysokości. Trasy mogą rozliczać inaczej."},
  {q:"Czy każdy produkt można zwrócić?",a:"Nie. Obowiązują zasady sprzedawcy, stan, kategoria i zgoda. Uprawnione wnioski mają zwykle 120 godzin."},
  {q:"Ile kosztuje zwrot z decyzji klienta?",a:"Polityka wymienia przesyłkę zwrotną, pierwotną wysyłkę sprzedawcy i 5 RMB opłaty serwisowej."},
  {q:"Kiedy pojawia się śledzenie?",a:"Według poradnika w ciągu trzech dni po wysyłce. Termin dostawy nie jest gwarantowany."},
  {q:"Czy arkusz gwarantuje jakość lub autentyczność?",a:"Nie. To narzędzie wyszukiwania i organizacji. Sprawdź źródło, wariant i dowody magazynowe."}
 ],
 sv:[
  {q:"Är detta PikoBuys officiella webbplats?",a:"Nej. Detta är en oberoende FindSpreadsheet-guide. Bekräfta betalning, retur och frakt i ditt PikoBuy-konto."},
  {q:"Hur ser den publicerade köpprocessen ut?",a:"Välj, sök med länk eller ord, betala köpet, granska lagret, välj rutt, betala frakt och spåra."},
  {q:"Varför finns två betalningar?",a:"Den första gäller köpet. Den andra gäller internationell frakt efter lagerankomst och kontroll."},
  {q:"Vad händer i lagret?",a:"PikoBuy beskriver incheckning, foton och kontroll av synliga fel. Vidarebefordrade varor öppnas och inspekteras."},
  {q:"Kan jag begära fler foton?",a:"Extra detaljfoton kan köpas. Be om en specifik etikett, mätning, vinkel eller del."},
  {q:"Hur uppskattas frakten?",a:"Verktyget använder destination, typ, vikt, längd, bredd och höjd. Rutter kan debitera olika."},
  {q:"Kan alla varor returneras?",a:"Nej. Säljarregler, skick, kategori och godkännande gäller. Berättigade ansökningar har normalt 120 timmar."},
  {q:"Vad kostar en kundansvarig retur?",a:"Policyn anger returfrakt, säljarens ursprungliga frakt och 5 RMB serviceavgift."},
  {q:"När syns spårningen?",a:"Guiden anger inom tre dagar efter utskick. Leveransdatum är inte garanterade."},
  {q:"Garanterar ett kalkylblad kvalitet eller äkthet?",a:"Nej. Det är ett sök- och organisationsverktyg. Kontrollera källa, variant och lagerbevis."}
 ]
};
