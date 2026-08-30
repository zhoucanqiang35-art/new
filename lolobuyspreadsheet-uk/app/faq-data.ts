type Lang = "en" | "de" | "fr" | "es" | "it" | "nl" | "pl" | "pt" | "sv";

export type FaqEntry = { question: string; answer: string };

export const faqContent: Record<Lang, FaqEntry[]> = {
  en: [
    { question: "What is a LoloBuy spreadsheet?", answer: "It is an independent directory that groups product finds into useful categories. It helps discovery, but every price, option and product page must be checked again before ordering." },
    { question: "Is this the official LoloBuy website?", answer: "No. This is an independent research guide. It does not operate LoloBuy, take payments, store goods or ship parcels." },
    { question: "How does a LoloBuy order reach the warehouse?", answer: "LoloBuy describes a flow where the buyer pays for the item and mainland-China delivery, then the merchant sends it to the designated warehouse. After warehouse receipt, the buyer reviews the item and later submits an international parcel." },
    { question: "What should I check in warehouse photos?", answer: "Confirm the item, colour, selected size or style, quantity, visible defects and important measurements. Photos help with visible checks but cannot prove fit, material, durability or authenticity." },
    { question: "Does a spreadsheet prove stock or quality?", answer: "No. A link can become outdated and a seller can change price, stock or options. The live product page and warehouse evidence are the useful sources for the current order." },
    { question: "How long is free warehouse storage?", answer: "LoloBuy’s public service description advertised 180 days of free storage when checked on 30 August 2026. Check the live warehouse rules and item dates because policies and extended-storage charges can change." },
    { question: "How is international shipping calculated?", answer: "The current route quote controls. Destination, actual or volumetric weight, dimensions, item category, packaging and route limits can all affect the price." },
    { question: "What is parcel rehearsal?", answer: "LoloBuy describes rehearsal as simulated pre-packing used to estimate packed weight, dimensions and freight. It is not the real shipment; an actual parcel must still be submitted afterward." },
    { question: "Can I combine several warehouse items?", answer: "Stored items can be selected for a parcel, subject to their status and the live route’s limits. Combining may save first-weight cost, but a larger or restricted parcel can also cost more." },
    { question: "What should I know about customs and protection?", answer: "Declare contents truthfully and follow the destination country’s rules. Secure-Ship protection may be offered for some parcels, but availability, premium, coverage, evidence and claim deadlines must be read in the live rules." }
  ],
  de: [
    { question: "Was ist eine LoloBuy-Tabelle?", answer: "Ein unabhängiges Verzeichnis, das Produktfunde in Kategorien ordnet. Preise, Varianten und die aktuelle Produktseite müssen vor der Bestellung erneut geprüft werden." },
    { question: "Ist dies die offizielle LoloBuy-Website?", answer: "Nein. Dies ist ein unabhängiger Recherche-Ratgeber. Er nimmt keine Zahlungen an und betreibt weder Lager noch Versand." },
    { question: "Wie gelangt eine Bestellung ins Lager?", answer: "LoloBuy beschreibt: Artikel und Inlandsversand werden bezahlt, dann sendet der Händler an das vorgesehene Lager. Nach Eingang prüft der Käufer die Ware und reicht später ein internationales Paket ein." },
    { question: "Was ist auf Lagerfotos zu prüfen?", answer: "Prüfe Artikel, Farbe, gewählte Größe oder Variante, Menge, sichtbare Fehler und wichtige Maße. Fotos beweisen weder Passform, Material, Haltbarkeit noch Echtheit." },
    { question: "Beweist eine Tabelle Bestand oder Qualität?", answer: "Nein. Links, Preise, Bestand und Varianten können sich ändern. Maßgeblich sind die aktuelle Produktseite und die Lagerunterlagen." },
    { question: "Wie lange ist die Lagerung kostenlos?", answer: "LoloBuy wirbt derzeit öffentlich mit 180 Tagen kostenloser Lagerung. Prüfe die aktuellen Lagerregeln und Artikeldaten, da sich Gebühren ändern können." },
    { question: "Wie werden internationale Versandkosten berechnet?", answer: "Das aktuelle Angebot gilt. Ziel, tatsächliches oder Volumengewicht, Maße, Warenart, Verpackung und Liniengrenzen beeinflussen den Preis." },
    { question: "Was ist eine Paketprobe?", answer: "Die Probe ist laut LoloBuy eine simulierte Vorverpackung zur Schätzung von Gewicht, Maßen und Fracht. Sie ist kein echter Versand; danach muss ein Paket eingereicht werden." },
    { question: "Kann ich mehrere Lagerartikel kombinieren?", answer: "Geeignete Lagerartikel können für ein Paket ausgewählt werden. Bündelung kann Kosten sparen, aber ein größeres oder eingeschränktes Paket kann auch teurer werden." },
    { question: "Was gilt für Zoll und Schutz?", answer: "Deklariere den Inhalt wahrheitsgemäß und beachte die Regeln des Ziellands. Bei Secure-Ship müssen Verfügbarkeit, Prämie, Umfang, Nachweise und Fristen live geprüft werden." }
  ],
  fr: [
    { question: "Qu’est-ce qu’un tableur LoloBuy ?", answer: "Un répertoire indépendant qui classe des trouvailles par catégories. Prix, options et fiche active doivent être revérifiés avant la commande." },
    { question: "Est-ce le site officiel LoloBuy ?", answer: "Non. C’est un guide de recherche indépendant. Il ne prend aucun paiement et n’exploite ni entrepôt ni expédition." },
    { question: "Comment la commande arrive-t-elle à l’entrepôt ?", answer: "LoloBuy décrit le paiement de l’article et du transport intérieur, puis l’envoi du marchand vers l’entrepôt désigné. Après réception, l’acheteur contrôle l’article puis soumet un colis international." },
    { question: "Que vérifier sur les photos d’entrepôt ?", answer: "Vérifiez article, couleur, taille ou option, quantité, défauts visibles et mesures importantes. Les photos ne prouvent ni coupe, matière, durabilité ni authenticité." },
    { question: "Le tableur prouve-t-il stock ou qualité ?", answer: "Non. Liens, prix, stock et options peuvent changer. La fiche active et les éléments d’entrepôt sont les références utiles." },
    { question: "Combien de temps le stockage est-il gratuit ?", answer: "La présentation publique de LoloBuy annonce actuellement 180 jours gratuits. Vérifiez les règles et dates actives, car frais et conditions peuvent évoluer." },
    { question: "Comment le transport international est-il calculé ?", answer: "Le devis actif fait foi. Destination, poids réel ou volumétrique, dimensions, catégorie, emballage et limites de ligne influencent le prix." },
    { question: "Qu’est-ce que la répétition de colis ?", answer: "LoloBuy la décrit comme un préemballage simulé pour estimer poids, dimensions et fret. Ce n’est pas l’envoi réel ; il faut ensuite soumettre le colis." },
    { question: "Puis-je regrouper plusieurs articles ?", answer: "Les articles admissibles peuvent être sélectionnés pour un colis. Le regroupement peut économiser le premier poids, mais un colis plus grand ou restreint peut coûter davantage." },
    { question: "Que savoir sur douane et protection ?", answer: "Déclarez honnêtement et suivez les règles du pays de destination. Pour Secure-Ship, vérifiez en direct disponibilité, prime, couverture, preuves et délais." }
  ],
  es: [
    { question: "¿Qué es una hoja de cálculo LoloBuy?", answer: "Un directorio independiente que organiza productos por categorías. Hay que volver a comprobar precio, opciones y página activa antes de pedir." },
    { question: "¿Es el sitio oficial de LoloBuy?", answer: "No. Es una guía de investigación independiente. No cobra, almacena ni envía productos." },
    { question: "¿Cómo llega un pedido al almacén?", answer: "LoloBuy describe el pago del artículo y del transporte nacional; después el vendedor lo envía al almacén designado. Tras recibirlo, el comprador revisa el artículo y presenta un paquete internacional." },
    { question: "¿Qué revisar en las fotos del almacén?", answer: "Comprueba artículo, color, talla u opción, cantidad, defectos visibles y medidas importantes. Las fotos no prueban ajuste, material, duración ni autenticidad." },
    { question: "¿La hoja demuestra stock o calidad?", answer: "No. Enlaces, precios, stock y opciones pueden cambiar. La ficha activa y la evidencia del almacén son las referencias actuales." },
    { question: "¿Cuánto dura el almacenamiento gratuito?", answer: "La descripción pública de LoloBuy anuncia actualmente 180 días gratis. Revisa las reglas y fechas activas porque las condiciones pueden cambiar." },
    { question: "¿Cómo se calcula el envío internacional?", answer: "Manda la cotización activa. Destino, peso real o volumétrico, dimensiones, categoría, embalaje y límites de ruta influyen en el precio." },
    { question: "¿Qué es el ensayo del paquete?", answer: "LoloBuy lo describe como un preembalaje simulado para estimar peso, medidas y flete. No es el envío real; después hay que presentar el paquete definitivo." },
    { question: "¿Puedo combinar varios artículos?", answer: "Los artículos aptos pueden seleccionarse para un paquete. Combinar puede ahorrar el primer peso, pero un paquete mayor o restringido también puede costar más." },
    { question: "¿Qué debo saber sobre aduana y protección?", answer: "Declara el contenido con veracidad y sigue las reglas del destino. En Secure-Ship revisa disponibilidad, prima, cobertura, pruebas y plazos vigentes." }
  ],
  it: [
    { question: "Cos’è un foglio LoloBuy?", answer: "Una directory indipendente che organizza i prodotti per categoria. Prezzo, opzioni e pagina attiva vanno ricontrollati prima dell’ordine." },
    { question: "È il sito ufficiale LoloBuy?", answer: "No. È una guida di ricerca indipendente. Non gestisce pagamenti, magazzino o spedizioni." },
    { question: "Come arriva un ordine al magazzino?", answer: "LoloBuy descrive il pagamento dell’articolo e della consegna interna, poi il venditore invia al magazzino designato. Dopo l’arrivo, l’acquirente controlla e presenta un pacco internazionale." },
    { question: "Cosa controllare nelle foto del magazzino?", answer: "Verifica articolo, colore, taglia o opzione, quantità, difetti visibili e misure importanti. Le foto non provano vestibilità, materiale, durata o autenticità." },
    { question: "Il foglio prova scorte o qualità?", answer: "No. Link, prezzi, scorte e opzioni possono cambiare. La pagina attiva e le prove del magazzino sono i riferimenti utili." },
    { question: "Quanto dura il deposito gratuito?", answer: "La descrizione pubblica LoloBuy pubblicizza attualmente 180 giorni gratuiti. Controlla regole e date live perché le condizioni possono cambiare." },
    { question: "Come si calcola la spedizione internazionale?", answer: "Vale il preventivo attivo. Destinazione, peso reale o volumetrico, dimensioni, categoria, imballaggio e limiti incidono sul prezzo." },
    { question: "Cos’è la prova del pacco?", answer: "LoloBuy la descrive come preimballaggio simulato per stimare peso, dimensioni e trasporto. Non è la spedizione reale; poi va presentato il pacco effettivo." },
    { question: "Posso unire più articoli?", answer: "Gli articoli idonei possono essere selezionati per un pacco. Unire può ridurre il primo peso, ma un pacco grande o limitato può costare di più." },
    { question: "Cosa sapere su dogana e protezione?", answer: "Dichiara correttamente e segui le regole del paese di destinazione. Per Secure-Ship controlla disponibilità, premio, copertura, prove e scadenze live." }
  ],
  nl: [
    { question: "Wat is een LoloBuy-spreadsheet?", answer: "Een onafhankelijke map die productvondsten per categorie ordent. Controleer prijs, optie en actuele productpagina opnieuw vóór bestellen." },
    { question: "Is dit de officiële LoloBuy-site?", answer: "Nee. Dit is een onafhankelijke onderzoeksgids. De site verwerkt geen betalingen, opslag of verzending." },
    { question: "Hoe komt een bestelling in het magazijn?", answer: "LoloBuy beschrijft betaling van product en binnenlandse levering; daarna stuurt de verkoper naar het aangewezen magazijn. Na ontvangst controleert de koper en dient later een internationaal pakket in." },
    { question: "Wat controleer ik op magazijnfoto’s?", answer: "Controleer artikel, kleur, maat of optie, aantal, zichtbare fouten en belangrijke maten. Foto’s bewijzen geen pasvorm, materiaal, duurzaamheid of echtheid." },
    { question: "Bewijst de spreadsheet voorraad of kwaliteit?", answer: "Nee. Links, prijzen, voorraad en opties kunnen veranderen. De actuele pagina en magazijninformatie zijn leidend." },
    { question: "Hoe lang is opslag gratis?", answer: "LoloBuy adverteert publiek momenteel 180 dagen gratis opslag. Controleer de actuele regels en data omdat voorwaarden kunnen wijzigen." },
    { question: "Hoe wordt internationale verzending berekend?", answer: "De actuele offerte geldt. Bestemming, werkelijk of volumetrisch gewicht, maten, categorie, verpakking en routelimieten beïnvloeden de prijs." },
    { question: "Wat is pakket-rehearsal?", answer: "LoloBuy beschrijft dit als gesimuleerd voorverpakken om gewicht, maten en vracht te schatten. Het is geen echte verzending; daarna moet het pakket nog worden ingediend." },
    { question: "Kan ik meerdere artikelen combineren?", answer: "Geschikte magazijnartikelen kunnen voor één pakket worden gekozen. Bundelen kan startgewicht besparen, maar een groter of beperkt pakket kan duurder zijn." },
    { question: "Wat geldt voor douane en bescherming?", answer: "Declareer eerlijk en volg de regels van het bestemmingsland. Controleer bij Secure-Ship live de beschikbaarheid, premie, dekking, bewijsstukken en termijnen." }
  ],
  pl: [
    { question: "Czym jest arkusz LoloBuy?", answer: "Niezależnym katalogiem grupującym produkty według kategorii. Przed zamówieniem trzeba ponownie sprawdzić cenę, wariant i aktywną stronę." },
    { question: "Czy to oficjalna strona LoloBuy?", answer: "Nie. To niezależny poradnik badawczy. Nie obsługuje płatności, magazynu ani wysyłki." },
    { question: "Jak zamówienie trafia do magazynu?", answer: "LoloBuy opisuje płatność za produkt i dostawę krajową, po czym sprzedawca wysyła do wyznaczonego magazynu. Po odbiorze kupujący sprawdza towar i później składa paczkę międzynarodową." },
    { question: "Co sprawdzić na zdjęciach magazynowych?", answer: "Sprawdź produkt, kolor, rozmiar lub wariant, ilość, widoczne wady i ważne wymiary. Zdjęcia nie potwierdzają dopasowania, materiału, trwałości ani autentyczności." },
    { question: "Czy arkusz potwierdza stan lub jakość?", answer: "Nie. Linki, ceny, stan i warianty mogą się zmieniać. Liczy się aktywna oferta i dowody z magazynu." },
    { question: "Jak długo magazynowanie jest bezpłatne?", answer: "LoloBuy publicznie reklamuje obecnie 180 dni bezpłatnego przechowywania. Sprawdź aktualne zasady i daty, bo warunki mogą się zmienić." },
    { question: "Jak obliczana jest wysyłka międzynarodowa?", answer: "Obowiązuje aktualna wycena. Cel, waga rzeczywista lub objętościowa, wymiary, kategoria, opakowanie i limity trasy wpływają na cenę." },
    { question: "Czym jest próba paczki?", answer: "LoloBuy opisuje ją jako symulowane pakowanie do oszacowania wagi, wymiarów i frachtu. To nie jest wysyłka; później trzeba złożyć rzeczywistą paczkę." },
    { question: "Czy mogę połączyć kilka produktów?", answer: "Odpowiednie towary można wybrać do jednej paczki. Łączenie może oszczędzić koszt startowy, ale większa lub ograniczona paczka może być droższa." },
    { question: "Co z cłem i ochroną?", answer: "Deklaruj zgodnie z prawdą i przestrzegaj zasad kraju docelowego. Przy Secure-Ship sprawdź na żywo dostępność, składkę, zakres, dowody i terminy." }
  ],
  pt: [
    { question: "O que é uma planilha LoloBuy?", answer: "Um diretório independente que organiza produtos por categorias. Preço, opção e página ativa devem ser revistos antes da encomenda." },
    { question: "É o site oficial da LoloBuy?", answer: "Não. É um guia de pesquisa independente. Não recebe pagamentos nem opera armazém ou envio." },
    { question: "Como a encomenda chega ao armazém?", answer: "A LoloBuy descreve o pagamento do artigo e entrega interna; depois o vendedor envia ao armazém indicado. Após a receção, o comprador verifica e mais tarde submete uma encomenda internacional." },
    { question: "O que verificar nas fotos do armazém?", answer: "Confirme artigo, cor, tamanho ou opção, quantidade, defeitos visíveis e medidas importantes. Fotos não provam ajuste, material, duração ou autenticidade." },
    { question: "A planilha prova stock ou qualidade?", answer: "Não. Links, preços, stock e opções podem mudar. A página ativa e as provas do armazém são as referências atuais." },
    { question: "Quanto tempo o armazenamento é gratuito?", answer: "A descrição pública da LoloBuy anuncia atualmente 180 dias grátis. Verifique regras e datas ativas porque as condições podem mudar." },
    { question: "Como é calculado o envio internacional?", answer: "Vale a cotação ativa. Destino, peso real ou volumétrico, dimensões, categoria, embalagem e limites da rota afetam o preço." },
    { question: "O que é o ensaio da encomenda?", answer: "A LoloBuy descreve-o como pré-embalagem simulada para estimar peso, dimensões e frete. Não é envio real; depois é preciso submeter a encomenda definitiva." },
    { question: "Posso juntar vários artigos?", answer: "Artigos elegíveis podem ser selecionados para uma encomenda. Juntar pode poupar o primeiro peso, mas uma encomenda maior ou limitada pode custar mais." },
    { question: "O que saber sobre alfândega e proteção?", answer: "Declare com verdade e siga as regras do destino. No Secure-Ship, confirme ao vivo disponibilidade, prémio, cobertura, provas e prazos." }
  ],
  sv: [
    { question: "Vad är ett LoloBuy-kalkylblad?", answer: "En oberoende katalog som ordnar produktfynd i kategorier. Kontrollera pris, val och aktuell produktsida igen före beställning." },
    { question: "Är detta LoloBuys officiella webbplats?", answer: "Nej. Det är en oberoende researchguide. Den hanterar inte betalning, lager eller frakt." },
    { question: "Hur kommer en order till lagret?", answer: "LoloBuy beskriver betalning av vara och inrikes leverans, sedan skickar säljaren till angivet lager. Efter mottagning granskar köparen varan och skickar senare in ett internationellt paket." },
    { question: "Vad ska granskas på lagerfoton?", answer: "Kontrollera vara, färg, storlek eller val, antal, synliga fel och viktiga mått. Foton bevisar inte passform, material, hållbarhet eller äkthet." },
    { question: "Bevisar bladet lager eller kvalitet?", answer: "Nej. Länkar, priser, lager och val kan ändras. Den aktuella sidan och lagerunderlaget är de användbara källorna." },
    { question: "Hur länge är lagring gratis?", answer: "LoloBuy annonserar offentligt för närvarande 180 dagars gratis lagring. Kontrollera aktuella regler och datum eftersom villkor kan ändras." },
    { question: "Hur beräknas internationell frakt?", answer: "Den aktuella offerten gäller. Destination, faktisk eller volymvikt, mått, kategori, emballage och ruttgränser påverkar priset." },
    { question: "Vad är paket-rehearsal?", answer: "LoloBuy beskriver det som simulerad förpackning för att uppskatta vikt, mått och frakt. Det är ingen verklig sändning; ett riktigt paket måste lämnas in efteråt." },
    { question: "Kan jag kombinera flera varor?", answer: "Godkända lagervaror kan väljas till ett paket. Samfrakt kan spara startvikt men ett större eller begränsat paket kan också kosta mer." },
    { question: "Vad gäller för tull och skydd?", answer: "Deklarera sanningsenligt och följ destinationslandets regler. Kontrollera Secure-Ships tillgänglighet, premie, täckning, bevis och tidsfrister live." }
  ]
};
