import type { SeoArticle } from "./article-data";

export type LocalizedSupplementalArticle = Pick<SeoArticle, "slug" | "title" | "description" | "sections">;

export const supplementalSeoArticles: SeoArticle[] = [
  {
    slug: "lolobuy-shipping-cost-guide-uk",
    title: "LoloBuy Shipping Costs to the UK: Build a Realistic Parcel Budget",
    description: "A practical way to estimate a LoloBuy parcel before checkout: item cost, domestic delivery, packed weight, volume and live route eligibility.",
    readTime: "11–13 min read",
    checked: "Planning framework updated 16 October 2026",
    sourceNote: "This independent guide explains a budgeting method. It does not quote a fixed LoloBuy rate: live route availability, packed dimensions, handling fees, tax treatment and carrier rules must be checked in the active account before payment.",
    primaryKeyword: "LoloBuy shipping cost UK",
    relatedKeywords: ["LoloBuy shipping calculator UK", "LoloBuy parcel estimate", "LoloBuy volumetric weight", "LoloBuy UK shipping guide", "LoloBuy shipping price"],
    datePublished: "2026-10-16",
    dateModified: "2026-10-16",
    faq: [
      { question: "Can a spreadsheet price show the delivered UK cost?", answer: "No. A spreadsheet price is a discovery input. Add the selected item variation, domestic delivery, service fees where applicable, packed parcel weight or dimensions, and the live international route quote." },
      { question: "Why can two parcels with the same item value cost different amounts to ship?", answer: "Routes price physical parcels, not item value alone. Destination, actual or volumetric weight, dimensions, category restrictions, packing and service level can change the available routes and the amount." },
      { question: "Is an estimate the final LoloBuy shipping charge?", answer: "Treat an estimate as a planning range. The final selection and current parcel screen control because warehouse measurements, packing choices and route availability can change." }
    ],
    sections: [
      { heading: "Start with the cost you can see — then list the costs you cannot", paragraphs: [
        "A product row is useful for comparing finds, but its headline price is not a delivered-to-UK price. Write down the exact selected variation, the domestic delivery shown for the seller, any payment or service charge shown in the live flow, and the separate international-parcel budget. This simple split stops a low item price from becoming an unrealistic haul plan.",
        "Keep the domestic order and the international parcel as two decisions. The first decision is whether the current seller listing is worth buying. The second happens after warehouse arrival, when you know which items you are keeping, what packaging they need and which live routes accept the parcel. Do not promise yourself a total before both stages have usable numbers."
      ]},
      { heading: "Weight is only half the shipping calculation", paragraphs: [
        "A compact but heavy item may be priced mainly by actual weight. A light jacket, shoe box or plush item can occupy enough space that the route uses volumetric weight instead. The calculation differs by carrier, so there is no universal divisor to memorise. The useful question is: what weight basis and size limits does the live route display for this parcel?",
        "Build a range rather than one magic number. Start with the warehouse item weights where available, then reserve room for outer packaging, protection and any box you choose to keep. Record length, width and height once packing is known. Comparing a realistic low and high case is more honest than showing a precise-looking figure that ignores volume."
      ]},
      { heading: "Compare parcel plans, not just shipping lines", paragraphs: [
        "Before submitting, price at least two sensible plans: one consolidated parcel and one split by size, fragility or restricted category. Consolidation can reduce repeated starting charges, but it can also move a parcel into a different weight band, increase volumetric size or remove a preferred route. A smaller second parcel is not automatically wasteful if it protects the choices available for the first.",
        "Use the same assumptions in each comparison: destination, accepted items, packaging request and declaration category. Compare the total payable amount, the route features shown live and what happens if one item still needs a return. The best plan is the one that remains eligible and understandable after you change one assumption, not the cheapest-looking number in isolation."
      ]},
      { heading: "Packaging requests should match the goods", paragraphs: [
        "Packaging changes cost and risk at the same time. Removing a decorative retail box may reduce volume; reinforcing corners or adding moisture protection can add material and dimensions. Decide what the item needs to arrive usable, then price that version. A vague instruction to make a parcel lighter is less useful than a clear instruction tied to the item.",
        "For example, soft clothing may tolerate space-saving packing, while a structured shoe, a framed accessory or a fragile item may need shape support. Never assume a packaging choice is free, available for every route or suitable for every product. Review the current warehouse options and make sure the final estimate reflects the packing you actually want."
      ]},
      { heading: "Use a UK-ready final check", paragraphs: [
        "Before payment, verify the recipient name, address, postcode and contact details; then read the live route limits, delivery features, parcel dimensions and displayed charges. Use truthful product descriptions and follow the destination country's current import and customs requirements. Duties, carrier handling, inspection, return and delay remain possible even when the item and freight estimates looked simple.",
        "Save the final parcel screen, item list and tracking reference. It is not a guarantee against delivery problems, but it gives you a factual record if an address correction, route question or support request is needed. A well-planned LoloBuy shipping budget is a range backed by live information, not a fixed promise copied from another buyer's parcel."
      ]}
    ]
  },
  {
    slug: "lolobuy-warehouse-consolidation-checklist",
    title: "LoloBuy Warehouse & Consolidation Checklist: Decide Before You Ship",
    description: "A buyer-first checklist for reviewing warehouse arrivals, handling QC questions, grouping compatible items and submitting a LoloBuy parcel with fewer avoidable mistakes.",
    readTime: "10–12 min read",
    checked: "Planning framework updated 16 October 2026",
    sourceNote: "This independent checklist does not guarantee a return, a route or a delivered outcome. Warehouse options, storage, seller terms, fees and carrier eligibility must be verified in the live LoloBuy order flow.",
    primaryKeyword: "LoloBuy warehouse consolidation",
    relatedKeywords: ["LoloBuy warehouse guide", "LoloBuy combine orders", "LoloBuy parcel consolidation", "LoloBuy QC checklist", "LoloBuy warehouse shipping"],
    datePublished: "2026-10-16",
    dateModified: "2026-10-16",
    faq: [
      { question: "Should I combine every item that arrives in the warehouse?", answer: "No. Combine only items you have accepted, that are compatible in packaging and category, and that remain eligible for a suitable live route together." },
      { question: "Do QC photos prove an item is good quality?", answer: "QC images can help identify visible mismatches or damage. They cannot reliably prove comfort, material composition, durability, authenticity or future performance." },
      { question: "When should I submit a consolidated parcel?", answer: "After you have reviewed all selected arrivals, resolved material questions or returns, chosen packaging, checked the live route and rechecked the recipient details." }
    ],
    sections: [
      { heading: "Give every warehouse arrival a decision label", paragraphs: [
        "When an item reaches the warehouse, avoid leaving it as an unnamed line in a growing list. Record the order number, product name, selected variation, seller and arrival date. Then assign one temporary label: keep, question or return. The label is small, but it prevents a parcel from being submitted with an item that has not really been reviewed.",
        "Use the order you placed as the comparison point. A product photo can look fine while still being the wrong colour, size, quantity or version. Save the selected option and one reference image when you buy. When the warehouse record appears, compare identity first and details second."
      ]},
      { heading: "Use QC photos for visible evidence, not certainty", paragraphs: [
        "Start each review with the highest-impact checks: product type, colour, visible size label, quantity, included parts and obvious damage. For clothing and footwear, measurements or targeted images can be more useful than a label when the platform offers them. Write down the one missing view that would actually change your decision before paying for extra evidence.",
        "A photo does not show everything. It may reveal a stain, a mismatch or a damaged box, but it cannot settle comfort, hidden construction, material claims, electronics performance or authenticity. Keep your request factual and specific if you need help: identify the order, the expected option and the visible difference."
      ]},
      { heading: "Build a parcel from compatible items", paragraphs: [
        "A warehouse lets you group products, but grouping is not the same as selecting everything that has arrived. Match items by destination, category eligibility, fragility and packaging needs. A heavy box can damage softer goods; a restricted item can change the routes shown for the whole parcel; a bulky retail box can distort the cost for otherwise compact items.",
        "Create two candidate groups when the mix is uncertain. One can contain compatible, accepted essentials; the other can hold a large, fragile or unresolved item. Compare both in the live estimate after choosing packaging. This makes consolidation a deliberate shipping decision rather than a default."
      ]},
      { heading: "Resolve questions before the international stage", paragraphs: [
        "If an item has a wrong option, missing component or meaningful visible problem, use the current seller and platform process while the item is still at the warehouse. Policies, deadlines and domestic return costs vary, so a public guide cannot promise an outcome. The useful behaviour is early review, clear evidence and no assumption that a later overseas return will be simple.",
        "Do not let an open question become a parcel choice by accident. Exclude that item from the first plan until the decision is closed. The rest of the accepted items can still be priced as a group; you do not need to risk the whole parcel to avoid a few minutes of planning."
      ]},
      { heading: "Submit only after a final live review", paragraphs: [
        "Before paying, make sure every selected item is marked keep, all packaging instructions agree with one another, the live route accepts the parcel's displayed category and dimensions, and the recipient details match the postal format. Then check the declared contents are accurate and follow current destination rules.",
        "Keep the parcel number, final item list, payment confirmation and tracking reference. These records make later support conversations more precise. The repeatable order is simple: review an arrival, decide its status, group compatible accepted items, estimate live options and submit last."
      ]}
    ]
  }
];

export const localizedSupplementalArticles: Record<string, LocalizedSupplementalArticle[]> = {
  de: [
    { slug: "lolobuy-shipping-cost-guide-uk", title: "LoloBuy-Versandkosten nach Großbritannien: ein realistisches Paketbudget", description: "So planen Sie ein LoloBuy-Paket realistisch: Artikelpreis, Inlandslieferung, Gewicht, Volumen und verfügbare Live-Routen.", sections: [
      { heading: "Sichtbare und unsichtbare Kosten trennen", paragraphs: ["Der Preis in einer Tabellenzeile ist kein Lieferpreis nach Großbritannien. Notieren Sie die genaue Variante, den Inlandsversand des Verkäufers, mögliche Gebühren im Bestellprozess und ein separates Budget für das internationale Paket. Der Kauf beim Verkäufer und der spätere Paketversand sind zwei getrennte Entscheidungen."] },
      { heading: "Gewicht und Volumen gemeinsam prüfen", paragraphs: ["Schwere, kompakte Waren werden oft nach echtem Gewicht berechnet; leichte, große Kartons können nach Volumengewicht berechnet werden. Der Divisor unterscheidet sich je Route. Nutzen Sie deshalb die im Live-Angebot gezeigte Gewichtsbasis, Maße und Grenzen statt einer Formel aus einem Forum."] },
      { heading: "Paketpläne vergleichen", paragraphs: ["Vergleichen Sie mindestens ein Sammelpaket mit einer sinnvollen Aufteilung nach Größe, Zerbrechlichkeit oder Kategorie. Zusammenfassen kann Startkosten sparen, aber Gewichtsstufen, Volumen oder Routeneignung verschlechtern. Verwenden Sie in allen Vergleichen dieselbe Adresse, dieselben Artikel und dieselbe Verpackung."] },
      { heading: "Verpackung passend wählen", paragraphs: ["Das Entfernen eines Schmuckkartons kann Volumen senken, Schutz kann jedoch Gewicht hinzufügen. Formulieren Sie klare Anweisungen, die zum Produkt passen. Weiche Kleidung kann anders behandelt werden als Schuhe, empfindliche Accessoires oder Sammlerstücke. Prüfen Sie verfügbare Optionen immer im aktuellen Lagerprozess."] },
      { heading: "Vor dem Bezahlen live kontrollieren", paragraphs: ["Prüfen Sie Empfänger, Postleitzahl, Routengrenzen, Maße und angezeigte Kosten. Deklarieren Sie Inhalte wahrheitsgemäß und beachten Sie aktuelle Einfuhrregeln. Speichern Sie Paketübersicht und Trackingnummer. Ein Budget ist eine von Live-Daten gestützte Spanne, keine feste Zusage."] }
    ]},
    { slug: "lolobuy-warehouse-consolidation-checklist", title: "LoloBuy-Lager & Konsolidierung: Prüfen, bevor Sie versenden", description: "Eine praktische Checkliste für Lagerankünfte, QC, passende Paketgruppen und eine sichere Versandentscheidung.", sections: [
      { heading: "Jede Ankunft markieren", paragraphs: ["Notieren Sie Bestellnummer, Variante, Verkäufer und Ankunftsdatum und geben Sie jedem Artikel den Status behalten, Frage oder Rückgabe. Vergleichen Sie zuerst mit der bestellten Variante. So wird kein ungeprüfter Artikel versehentlich mitversendet."] },
      { heading: "QC-Fotos richtig einordnen", paragraphs: ["Prüfen Sie Produkttyp, Farbe, Größenetikett, Menge, Teile und sichtbare Schäden. Fotos können Abweichungen zeigen, aber weder Komfort, Material, Haltbarkeit noch Echtheit beweisen. Fordern Sie zusätzliche Bilder nur an, wenn sie Ihre Entscheidung wirklich ändern würden."] },
      { heading: "Kompatible Artikel gruppieren", paragraphs: ["Nicht alles, was angekommen ist, gehört in ein Paket. Beachten Sie Ziel, Kategorie, Zerbrechlichkeit und Verpackung. Ein schwerer Karton kann weiche Ware beschädigen, und eine eingeschränkte Kategorie kann die möglichen Routen für das gesamte Paket verändern."] },
      { heading: "Offene Fragen vorher lösen", paragraphs: ["Bei falscher Variante, fehlenden Teilen oder sichtbaren Problemen nutzen Sie den aktuellen Lager- und Verkäuferprozess frühzeitig. Fristen und Gebühren unterscheiden sich. Lassen Sie einen ungeklärten Artikel außerhalb des ersten Paketplans, statt das gesamte Paket zu riskieren."] },
      { heading: "Erst nach der Live-Prüfung abschicken", paragraphs: ["Vor der Zahlung müssen alle ausgewählten Artikel akzeptiert sein, Verpackungswünsche zusammenpassen und die Live-Route Kategorie und Maße zulassen. Prüfen Sie Adresse und Deklaration erneut und speichern Sie Paketnummer, Artikelliste und Tracking."] }
    ]}
  ],
  fr: [
    { slug: "lolobuy-shipping-cost-guide-uk", title: "Coûts d’expédition LoloBuy vers le Royaume-Uni : établir un budget réaliste", description: "Une méthode pratique pour estimer un colis LoloBuy : article, livraison locale, poids, volume et lignes disponibles.", sections: [
      { heading: "Séparer les coûts visibles des coûts futurs", paragraphs: ["Le prix d’une ligne de tableur n’est pas un prix livré au Royaume-Uni. Notez la variante exacte, la livraison locale, les frais éventuels et un budget distinct pour le colis international. L’achat vendeur et l’expédition du colis sont deux décisions différentes."] },
      { heading: "Le poids n’est qu’une partie du calcul", paragraphs: ["Un article compact et lourd peut être facturé au poids réel ; un carton léger et volumineux peut être facturé au poids volumétrique. Le calcul dépend de la ligne. Utilisez les limites, dimensions et base de poids affichées en direct, pas une formule trouvée ailleurs."] },
      { heading: "Comparer des plans de colis", paragraphs: ["Comparez au moins un colis regroupé et une répartition logique par taille, fragilité ou catégorie. Le regroupement peut réduire des frais de départ, mais aussi changer de tranche de poids, de volume ou de ligne disponible. Gardez les mêmes hypothèses dans chaque comparaison."] },
      { heading: "Choisir un emballage adapté", paragraphs: ["Retirer une boîte décorative peut réduire le volume, tandis qu’une protection peut ajouter poids et dimensions. Donnez des instructions claires adaptées au produit. Les vêtements souples ne se traitent pas comme des chaussures structurées ou des objets fragiles."] },
      { heading: "Vérifier en direct avant de payer", paragraphs: ["Contrôlez destinataire, code postal, limites de la ligne, dimensions et frais affichés. Déclarez le contenu avec exactitude et respectez les règles d’importation actuelles. Conservez l’écran final et le suivi : un budget est une fourchette fondée sur des données en direct, pas une promesse."] }
    ]},
    { slug: "lolobuy-warehouse-consolidation-checklist", title: "Entrepôt et regroupement LoloBuy : vérifier avant l’envoi", description: "Une checklist pratique pour les arrivées en entrepôt, les photos QC, le regroupement et l’envoi.", sections: [
      { heading: "Attribuer un statut à chaque arrivée", paragraphs: ["Notez numéro de commande, variante, vendeur et date d’arrivée ; attribuez garder, question ou retour. Comparez d’abord avec l’option achetée. Cela évite d’expédier un article jamais réellement contrôlé."] },
      { heading: "Lire les photos QC comme des preuves visibles", paragraphs: ["Contrôlez type, couleur, étiquette de taille, quantité, pièces et défauts visibles. Les photos peuvent montrer une différence, mais pas prouver confort, matière, durabilité ou authenticité. Demandez des vues ciblées seulement si elles changent votre décision."] },
      { heading: "Regrouper des articles compatibles", paragraphs: ["Tout ce qui est arrivé ne doit pas partir ensemble. Tenez compte de la destination, de la catégorie, de la fragilité et de l’emballage. Un carton lourd peut abîmer des articles souples et une catégorie limitée peut réduire les lignes du colis entier."] },
      { heading: "Résoudre les questions avant l’international", paragraphs: ["En cas de mauvaise variante, pièce manquante ou problème visible, utilisez rapidement le processus actif du vendeur et de l’entrepôt. Délais et frais varient. Laissez l’article non résolu hors du premier plan de colis."] },
      { heading: "Soumettre après un dernier contrôle en direct", paragraphs: ["Avant paiement, tous les articles choisis doivent être acceptés, les demandes d’emballage cohérentes et la ligne active adaptée à la catégorie et aux dimensions. Revérifiez adresse, déclaration, liste d’articles et suivi."] }
    ]}
  ],
  es: [
    { slug: "lolobuy-shipping-cost-guide-uk", title: "Costes de envío LoloBuy al Reino Unido: crea un presupuesto realista", description: "Cómo estimar un paquete LoloBuy con precio, entrega local, peso, volumen y rutas disponibles.", sections: [
      { heading: "Separa los costes visibles y los posteriores", paragraphs: ["El precio de una fila no es el precio entregado en Reino Unido. Anota la variante exacta, la entrega local, posibles cargos y un presupuesto aparte para el paquete internacional. Comprar al vendedor y enviar el paquete son decisiones separadas."] },
      { heading: "El peso es solo una parte", paragraphs: ["Un producto pesado y compacto puede cobrarse por peso real; una caja ligera y grande puede usar peso volumétrico. Cada ruta usa reglas propias. Comprueba la base de peso, medidas y límites que muestra la cotización activa."] },
      { heading: "Compara planes de paquete", paragraphs: ["Compara un paquete consolidado con una división sensata por tamaño, fragilidad o categoría. Consolidar puede ahorrar cargos iniciales, pero también cambiar la banda de peso, el volumen o las rutas disponibles. Mantén iguales las suposiciones en cada comparación."] },
      { heading: "Elige embalaje según el producto", paragraphs: ["Quitar una caja decorativa puede reducir volumen; añadir protección puede aumentar peso. Da instrucciones claras y adecuadas. La ropa suave no necesita el mismo trato que zapatos estructurados u objetos frágiles."] },
      { heading: "Haz una revisión final en directo", paragraphs: ["Verifica destinatario, código postal, límites de ruta, medidas y cargos mostrados. Declara el contenido con veracidad y sigue las normas de importación actuales. Guarda la pantalla final y el seguimiento: el presupuesto es un rango basado en datos en directo."] }
    ]},
    { slug: "lolobuy-warehouse-consolidation-checklist", title: "Almacén y consolidación LoloBuy: revisa antes de enviar", description: "Una checklist práctica para llegadas de almacén, QC, grupos compatibles y envío.", sections: [
      { heading: "Da una etiqueta a cada llegada", paragraphs: ["Guarda número de pedido, variante, vendedor y fecha, y marca conservar, pregunta o devolución. Compara primero con la opción comprada. Así ningún artículo sin revisar entra por accidente en el paquete."] },
      { heading: "Usa las fotos QC como evidencia visible", paragraphs: ["Comprueba tipo, color, etiqueta de talla, cantidad, piezas y daños visibles. Las fotos pueden mostrar diferencias, pero no probar comodidad, material, durabilidad o autenticidad. Pide vistas extra solo si cambiarán tu decisión."] },
      { heading: "Agrupa artículos compatibles", paragraphs: ["No todo lo recibido debe viajar junto. Ten en cuenta destino, categoría, fragilidad y embalaje. Una caja pesada puede dañar prendas blandas y una categoría restringida puede cambiar las rutas de todo el paquete."] },
      { heading: "Resuelve preguntas antes del envío internacional", paragraphs: ["Si hay variante incorrecta, pieza faltante o problema visible, usa pronto el proceso actual del vendedor y almacén. Los plazos y cargos cambian. Deja el artículo sin resolver fuera del primer plan."] },
      { heading: "Envía solo tras la revisión final", paragraphs: ["Antes de pagar, todos los artículos seleccionados deben estar aceptados, el embalaje debe ser coherente y la ruta activa debe admitir categoría y medidas. Revisa dirección, declaración, lista final y seguimiento."] }
    ]}
  ],
  it: [
    { slug: "lolobuy-shipping-cost-guide-uk", title: "Costi di spedizione LoloBuy nel Regno Unito: un budget realistico", description: "Una guida pratica per stimare un pacco LoloBuy: articolo, consegna interna, peso, volume e rotte disponibili.", sections: [
      { heading: "Separare costi visibili e successivi", paragraphs: ["Il prezzo in un foglio non è il costo consegnato nel Regno Unito. Annotate variante, consegna interna, eventuali commissioni e un budget distinto per il pacco internazionale. Acquistare dal venditore e spedire il pacco sono decisioni separate."] },
      { heading: "Peso e volume contano insieme", paragraphs: ["Un articolo compatto e pesante può essere calcolato sul peso reale; una scatola leggera e voluminosa sul peso volumetrico. Le regole dipendono dalla rotta. Usate misure, limiti e base di peso mostrati nel preventivo live."] },
      { heading: "Confrontare piani di spedizione", paragraphs: ["Confrontate un pacco consolidato con una divisione sensata per dimensione, fragilità o categoria. Il consolidamento può ridurre costi iniziali ma cambiare fascia peso, volume o rotte. Usate le stesse ipotesi per ogni confronto."] },
      { heading: "Scegliere l’imballaggio adatto", paragraphs: ["Rimuovere una scatola decorativa può ridurre volume, mentre la protezione può aggiungere peso. Date istruzioni chiare e adatte al bene. Abbigliamento morbido, scarpe strutturate e articoli fragili richiedono scelte diverse."] },
      { heading: "Controllare live prima del pagamento", paragraphs: ["Verificate destinatario, CAP, limiti di rotta, misure e costi mostrati. Dichiarate il contenuto correttamente e seguite le regole di importazione attuali. Conservate schermata finale e tracking: il budget è un intervallo, non una promessa."] }
    ]},
    { slug: "lolobuy-warehouse-consolidation-checklist", title: "Magazzino e consolidamento LoloBuy: controllare prima di spedire", description: "Una checklist pratica per arrivi in magazzino, QC, gruppi compatibili e invio.", sections: [
      { heading: "Etichettare ogni arrivo", paragraphs: ["Registrate ordine, variante, venditore e data, poi segnate tenere, domanda o reso. Confrontate prima con l’opzione acquistata: così nessun articolo non esaminato finisce nel pacco."] },
      { heading: "Leggere le foto QC come prove visibili", paragraphs: ["Controllate tipo, colore, etichetta taglia, quantità, componenti e danni visibili. Le foto mostrano differenze ma non provano comfort, materiale, durata o autenticità. Chiedete immagini extra solo se cambiano la decisione."] },
      { heading: "Raggruppare beni compatibili", paragraphs: ["Non tutto ciò che arriva deve viaggiare insieme. Valutate destinazione, categoria, fragilità e imballaggio. Una scatola pesante può danneggiare merci morbide e una categoria limitata può modificare le rotte dell’intero pacco."] },
      { heading: "Risolvere i dubbi prima dell’internazionale", paragraphs: ["Per variante errata, parte mancante o problema visibile usate presto il processo attuale di venditore e magazzino. Termini e costi variano. Tenete l’articolo irrisolto fuori dal primo piano di spedizione."] },
      { heading: "Inviare solo dopo il controllo finale", paragraphs: ["Prima del pagamento, ogni articolo scelto deve essere accettato, l’imballaggio coerente e la rotta attiva idonea a categoria e misure. Ricontrollate indirizzo, dichiarazione, lista e tracking."] }
    ]}
  ],
  nl: [
    { slug: "lolobuy-shipping-cost-guide-uk", title: "LoloBuy-verzendkosten naar het VK: maak een realistisch pakketbudget", description: "Een praktische methode voor een LoloBuy-schatting: artikel, binnenlandse levering, gewicht, volume en live-routes.", sections: [
      { heading: "Splits zichtbare en latere kosten", paragraphs: ["De prijs in een spreadsheet is geen bezorgprijs voor het VK. Noteer de exacte variant, binnenlandse levering, mogelijke kosten en een apart budget voor het internationale pakket. Kopen bij de verkoper en het pakket versturen zijn twee beslissingen."] },
      { heading: "Gewicht is maar de helft", paragraphs: ["Een compact zwaar artikel kan op werkelijk gewicht worden berekend; een lichte grote doos op volumetrisch gewicht. De berekening verschilt per route. Gebruik de gewichtsbasis, afmetingen en limieten die de live-offerte toont."] },
      { heading: "Vergelijk pakketplannen", paragraphs: ["Vergelijk minstens één gecombineerd pakket met een verstandige splitsing naar formaat, breekbaarheid of categorie. Consolideren kan startkosten besparen maar ook gewichtsklasse, volume of beschikbare routes veranderen. Houd de aannames gelijk."] },
      { heading: "Kies verpakking die past", paragraphs: ["Een decoratieve doos verwijderen kan volume verminderen, bescherming kan gewicht toevoegen. Geef duidelijke productgerichte instructies. Zachte kleding vraagt iets anders dan gestructureerde schoenen of breekbare goederen."] },
      { heading: "Controleer live vóór betaling", paragraphs: ["Controleer ontvanger, postcode, routelimieten, afmetingen en getoonde kosten. Geef inhoud eerlijk op en volg actuele importregels. Bewaar eindscherm en tracking: een budget is een bereik op basis van livegegevens, geen belofte."] }
    ]},
    { slug: "lolobuy-warehouse-consolidation-checklist", title: "LoloBuy-magazijn en consolidatie: controleer vóór verzending", description: "Een praktische checklist voor magazijnaankomst, QC, compatibele groepen en verzending.", sections: [
      { heading: "Geef elke aankomst een label", paragraphs: ["Noteer ordernummer, variant, verkoper en datum en markeer bewaren, vraag of retour. Vergelijk eerst met de gekochte optie. Zo gaat geen ongecontroleerd artikel per ongeluk mee."] },
      { heading: "Gebruik QC-foto’s als zichtbaar bewijs", paragraphs: ["Controleer type, kleur, maattag, aantal, onderdelen en zichtbare schade. Foto’s kunnen verschillen tonen, maar geen comfort, materiaal, duurzaamheid of echtheid bewijzen. Vraag alleen extra beelden als ze de beslissing veranderen."] },
      { heading: "Groepeer compatibele artikelen", paragraphs: ["Niet alles dat aankomt moet samen reizen. Let op bestemming, categorie, breekbaarheid en verpakking. Een zware doos kan zachte artikelen beschadigen en een beperkte categorie kan routes voor het hele pakket veranderen."] },
      { heading: "Los vragen vroeg op", paragraphs: ["Gebruik bij een verkeerde variant, ontbrekend onderdeel of zichtbaar probleem snel het huidige verkoper- en magazijnproces. Termijnen en kosten verschillen. Laat het onopgeloste artikel uit het eerste pakketplan."] },
      { heading: "Verzend na een laatste livecontrole", paragraphs: ["Voor betaling moeten alle gekozen artikelen zijn geaccepteerd, verpakking consistent zijn en de actieve route categorie en afmetingen toelaten. Controleer adres, aangifte, lijst en tracking opnieuw."] }
    ]}
  ],
  pl: [
    { slug: "lolobuy-shipping-cost-guide-uk", title: "Koszty wysyłki LoloBuy do Wielkiej Brytanii: realny budżet paczki", description: "Praktyczny sposób na wycenę paczki LoloBuy: towar, dostawa krajowa, waga, objętość i dostępne trasy.", sections: [
      { heading: "Oddziel koszty widoczne od późniejszych", paragraphs: ["Cena w arkuszu nie jest ceną dostawy do Wielkiej Brytanii. Zapisz dokładny wariant, dostawę krajową, możliwe opłaty i osobny budżet paczki międzynarodowej. Zakup u sprzedawcy i wysyłka paczki to osobne decyzje."] },
      { heading: "Waga to tylko część obliczenia", paragraphs: ["Ciężki kompaktowy produkt może być liczony według wagi rzeczywistej, a lekki duży karton według wagi gabarytowej. Zasady zależą od trasy. Używaj podstawy wagi, wymiarów i limitów widocznych w aktywnej wycenie."] },
      { heading: "Porównuj plany paczek", paragraphs: ["Porównaj przynajmniej paczkę łączoną z rozsądnym podziałem według rozmiaru, kruchości lub kategorii. Konsolidacja może obniżyć opłaty startowe, ale zmienić próg wagi, objętość lub dostępne trasy. Zachowaj te same założenia."] },
      { heading: "Dobierz opakowanie do towaru", paragraphs: ["Usunięcie ozdobnego pudełka może zmniejszyć objętość, a ochrona może dodać wagę. Daj jasne instrukcje odpowiednie dla produktu. Miękka odzież wymaga innego podejścia niż sztywne buty lub kruche przedmioty."] },
      { heading: "Sprawdź dane na żywo przed płatnością", paragraphs: ["Zweryfikuj odbiorcę, kod pocztowy, limity trasy, wymiary i koszty. Zgłaszaj zawartość zgodnie z prawdą i przestrzegaj aktualnych zasad importu. Zapisz ekran końcowy i tracking: budżet to zakres, nie obietnica."] }
    ]},
    { slug: "lolobuy-warehouse-consolidation-checklist", title: "Magazyn i konsolidacja LoloBuy: sprawdź przed wysyłką", description: "Praktyczna checklist dla przyjęć magazynowych, QC, zgodnych grup i wysyłki.", sections: [
      { heading: "Oznacz każde przyjęcie", paragraphs: ["Zapisz numer zamówienia, wariant, sprzedawcę i datę, a potem wybierz: zatrzymać, pytanie lub zwrot. Najpierw porównaj z kupioną opcją. Dzięki temu niezweryfikowany produkt nie trafi przypadkiem do paczki."] },
      { heading: "Traktuj zdjęcia QC jako widoczne dowody", paragraphs: ["Sprawdź typ, kolor, metkę rozmiaru, liczbę, części i widoczne uszkodzenia. Zdjęcia pokazują różnice, ale nie dowodzą komfortu, materiału, trwałości ani autentyczności. Poproś o dodatkowe ujęcia tylko, gdy zmienią decyzję."] },
      { heading: "Łącz zgodne artykuły", paragraphs: ["Nie wszystko, co dotarło, powinno podróżować razem. Weź pod uwagę cel, kategorię, kruchość i opakowanie. Ciężkie pudełko może uszkodzić miękkie towary, a ograniczona kategoria zmienić trasy całej paczki."] },
      { heading: "Rozwiąż problemy przed etapem międzynarodowym", paragraphs: ["Przy błędnym wariancie, braku części lub widocznym problemie szybko użyj aktualnego procesu sprzedawcy i magazynu. Terminy i opłaty są różne. Nie dodawaj nierozwiązanego artykułu do pierwszego planu."] },
      { heading: "Wyślij dopiero po końcowej kontroli", paragraphs: ["Przed płatnością wszystkie wybrane artykuły muszą być zaakceptowane, pakowanie spójne, a aktywna trasa zgodna z kategorią i wymiarami. Sprawdź ponownie adres, deklarację, listę i tracking."] }
    ]}
  ],
  pt: [
    { slug: "lolobuy-shipping-cost-guide-uk", title: "Custos de envio LoloBuy para o Reino Unido: um orçamento realista", description: "Como estimar uma encomenda LoloBuy com artigo, entrega interna, peso, volume e rotas disponíveis.", sections: [
      { heading: "Separar custos visíveis dos restantes", paragraphs: ["O preço de uma linha não é o custo entregue no Reino Unido. Registe a variante exata, entrega interna, eventuais taxas e um orçamento separado para a encomenda internacional. Comprar ao vendedor e expedir a encomenda são decisões distintas."] },
      { heading: "O peso é apenas parte do cálculo", paragraphs: ["Um artigo compacto e pesado pode ser cobrado pelo peso real; uma caixa leve e grande pelo peso volumétrico. As regras dependem da rota. Use a base de peso, medidas e limites que surgem na cotação ativa."] },
      { heading: "Comparar planos de encomenda", paragraphs: ["Compare pelo menos uma encomenda consolidada com uma divisão sensata por tamanho, fragilidade ou categoria. Consolidar pode reduzir taxas iniciais, mas alterar escalão de peso, volume ou rotas. Mantenha as mesmas premissas."] },
      { heading: "Escolher embalagem adequada", paragraphs: ["Retirar uma caixa decorativa pode reduzir volume, mas a proteção pode adicionar peso. Dê instruções claras para cada produto. Roupa macia não precisa do mesmo tratamento que sapatos estruturados ou artigos frágeis."] },
      { heading: "Rever ao vivo antes de pagar", paragraphs: ["Verifique destinatário, código postal, limites da rota, medidas e custos apresentados. Declare o conteúdo com verdade e siga regras atuais de importação. Guarde o ecrã final e o tracking: o orçamento é um intervalo com dados ao vivo."] }
    ]},
    { slug: "lolobuy-warehouse-consolidation-checklist", title: "Armazém e consolidação LoloBuy: verificar antes de enviar", description: "Uma checklist prática para chegadas ao armazém, QC, grupos compatíveis e envio.", sections: [
      { heading: "Dar uma etiqueta a cada chegada", paragraphs: ["Registe pedido, variante, vendedor e data e marque manter, questão ou devolução. Compare primeiro com a opção comprada. Assim, nenhum artigo não verificado entra por acidente na encomenda."] },
      { heading: "Ler fotos QC como prova visível", paragraphs: ["Verifique tipo, cor, etiqueta de tamanho, quantidade, peças e danos visíveis. As fotos mostram diferenças, mas não provam conforto, material, durabilidade ou autenticidade. Peça imagens extra apenas se mudarem a decisão."] },
      { heading: "Agrupar artigos compatíveis", paragraphs: ["Nem tudo o que chega deve viajar junto. Considere destino, categoria, fragilidade e embalagem. Uma caixa pesada pode danificar produtos macios e uma categoria restrita pode mudar as rotas de toda a encomenda."] },
      { heading: "Resolver questões antes da fase internacional", paragraphs: ["Para variante errada, peça em falta ou problema visível, use cedo o processo atual do vendedor e armazém. Prazos e custos variam. Deixe o artigo sem solução fora do primeiro plano."] },
      { heading: "Enviar após a revisão final", paragraphs: ["Antes de pagar, todos os artigos escolhidos devem estar aceites, a embalagem coerente e a rota ativa adequada a categoria e medidas. Reveja endereço, declaração, lista e tracking."] }
    ]}
  ],
  sv: [
    { slug: "lolobuy-shipping-cost-guide-uk", title: "LoloBuy-frakt till Storbritannien: bygg en realistisk paketbudget", description: "En praktisk metod för att uppskatta ett LoloBuy-paket med vara, inrikes leverans, vikt, volym och tillgängliga rutter.", sections: [
      { heading: "Dela upp synliga och senare kostnader", paragraphs: ["Priset i ett kalkylblad är inte ett levererat pris till Storbritannien. Skriv ned exakt variant, inrikes leverans, möjliga avgifter och en separat budget för det internationella paketet. Köpet från säljaren och paketleveransen är två olika beslut."] },
      { heading: "Vikt är bara en del av beräkningen", paragraphs: ["En kompakt tung vara kan prissättas efter faktisk vikt, medan en lätt stor låda kan använda volymvikt. Reglerna skiljer sig mellan rutter. Använd viktgrund, mått och gränser som visas i den aktuella offerten."] },
      { heading: "Jämför paketplaner", paragraphs: ["Jämför minst ett samlat paket med en rimlig uppdelning efter storlek, ömtålighet eller kategori. Konsolidering kan spara startavgifter men också ändra viktklass, volym eller tillgängliga rutter. Håll antagandena lika."] },
      { heading: "Välj passande emballage", paragraphs: ["Att ta bort en dekorativ låda kan minska volym, medan skydd kan öka vikt. Ge tydliga instruktioner som passar produkten. Mjuka kläder kräver annat än strukturerade skor eller ömtåliga varor."] },
      { heading: "Gör en sista livekontroll", paragraphs: ["Kontrollera mottagare, postnummer, ruttgränser, mått och visade kostnader. Deklarera innehållet korrekt och följ aktuella importregler. Spara slutskärm och spårning: budgeten är ett intervall baserat på liveuppgifter."] }
    ]},
    { slug: "lolobuy-warehouse-consolidation-checklist", title: "LoloBuy-lager och konsolidering: kontrollera före frakt", description: "En praktisk checklista för lagerankomster, QC, kompatibla grupper och frakt.", sections: [
      { heading: "Ge varje ankomst en etikett", paragraphs: ["Spara ordernummer, variant, säljare och datum och märk behåll, fråga eller retur. Jämför först med den köpta varianten. Då skickas ingen ogranskad vara av misstag."] },
      { heading: "Använd QC-bilder som synliga bevis", paragraphs: ["Kontrollera typ, färg, storleksetikett, antal, delar och synliga skador. Bilder kan visa skillnader men inte bevisa komfort, material, hållbarhet eller äkthet. Be om extra bilder bara när de ändrar beslutet."] },
      { heading: "Gruppera kompatibla varor", paragraphs: ["Allt som anländer ska inte resa tillsammans. Tänk på destination, kategori, ömtålighet och emballage. En tung låda kan skada mjuka varor och en begränsad kategori kan ändra rutterna för hela paketet."] },
      { heading: "Lös frågor före internationell frakt", paragraphs: ["Vid fel variant, saknad del eller synligt problem ska du använda säljarens och lagrets aktuella process tidigt. Tidsfrister och avgifter varierar. Låt den olösta varan stanna utanför den första paketplanen."] },
      { heading: "Skicka efter en sista kontroll", paragraphs: ["Före betalning måste alla valda varor vara godkända, emballaget vara konsekvent och den aktiva rutten godkänna kategori och mått. Kontrollera adress, deklaration, lista och spårning igen."] }
    ]}
  ]
};
