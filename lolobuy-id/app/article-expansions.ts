import type { EditorialArticle } from "./data";

type LocalizedArticles = Record<"de"|"fr"|"es"|"it"|"pt", readonly EditorialArticle[]>;

/** Articles in this module are published only when every live locale is complete. */
export const localizedExpansionArticles:LocalizedArticles={
  de:[
    {slug:"lolobuy-vs-superbuy-comparison",label:"AGENTENVERGLEICH",date:"13. Okt. 2026",read:"9–11 Min.",title:"LoloBuy vs. Superbuy: Produktlinks, QC und Paketplanung vergleichen",excerpt:"Ein Vergleichsrahmen für zwei Einkaufsagenten ohne erfundene Aussagen über einen dauerhaft günstigsten, schnellsten oder sichersten Anbieter.",sections:[
      ["Ablauf vor dem Preis vergleichen","Beide Dienste verbinden Produktlink, Kauf in China, Lager und internationales Paket. Vergleiche dieselbe Variante, dasselbe Ziel und dieselben Paketannahmen – nicht zwei alte Screenshots."],
      ["Produktlink als kontrollierte Eingabe nutzen","Speichere URL, Verkäufer, Variante, Menge und Preis. So lassen sich manuelle Angaben, Preisänderungen und Inlandskosten vergleichen, ohne den Link als Bestands- oder Qualitätsgarantie zu behandeln."],
      ["QC nach der Entscheidung bewerten","Entscheidend ist, ob Bilder die richtige Variante, Maße oder sichtbare Mängel klären. Die Bildanzahl allein beweist weder Echtheit noch Haltbarkeit oder Versandeignung."],
      ["Dasselbe verpackte Paket kalkulieren","Nutze gleiches Zielland, Warenarten, Gewicht, Maße und Schutz. Prüfe Abrechnungsgewicht, Mindeststufen, Einschränkungen, Tracking und Steuerhinweise der aktuellen Route."],
      ["Einschränkungen und Nachverkauf trennen","Batterien, Flüssigkeiten und große Waren können andere Routen brauchen. Lies auch aktuelle Regeln zu Verpackungsentfernung, Rückgabe, Verlust- oder Schadensnachweisen."],
      ["Mit einem datierten Datenblatt wählen","Vergleiche nur gleich datierte Einträge mit gleicher Quelle, Paketform und Ziel. Priorisiere eine zulässige Route mit verständlichen Nachweisen statt eines behaupteten dauerhaften Gewinners."],
    ]},
    {slug:"lolobuy-weidian-links-w2c-guide",label:"PRODUKTLINK-GUIDE",date:"13. Okt. 2026",read:"9–11 Min.",title:"LoloBuy Weidian-Links und W2C: Produkt vor der Bestellung prüfen",excerpt:"So werden Produktlinks zu einem überprüfbaren Datensatz für Variante, QC und Paketentscheidung statt zu einer ungesicherten Kaufzusage.",sections:[
      ["Ein W2C-Link ist nur der Start","W2C bedeutet meist einen Kaufhinweis. Er beweist weder aktiven Bestand noch die spätere Variante. Öffne das Live-Angebot und notiere Verkäufer, Auswahl, Preis und Prüfdatum."],
      ["Exakte Option bestätigen","Ein Link kann mehrere Farben, Größen oder Ausführungen enthalten. Sichere die endgültige Auswahl und beschreibe sie präzise, damit Bestellung und Lagerbeleg verglichen werden können."],
      ["Kosten sauber trennen","Quellpreis, chinesische Inlandslieferung, Lagerleistungen und internationale Fracht sind unterschiedliche Positionen. So wird ein Link nicht fälschlich als fester Gesamtpreis dargestellt."],
      ["QC gegen den Bestelldatensatz lesen","Vergleiche zuerst Variante, Farbe, Größenetikett und Menge. Prüfe danach kategoriespezifische sichtbare Details; Fotos ersetzen keinen Echtheits-, Material- oder Funktionstest."],
      ["Versand erst nach der Produktentscheidung planen","Verpackung und Paketservice folgen erst nach QC. Batterie, Zerbrechlichkeit und Kartonmaße können die Route und das Abrechnungsgewicht verändern."],
      ["Einen wiederholbaren Datensatz führen","Speichere Link, gewählte Variante, Bestellnummer, Lagerstatus, QC-Entscheidung und Paketnummer. Unbekanntes bleibt leer; so entstehen belastbare statt kopierte Listen."],
    ]},
  ],
  fr:[
    {slug:"lolobuy-vs-superbuy-comparison",label:"COMPARAISON D’AGENTS",date:"13 oct. 2026",read:"9–11 min",title:"LoloBuy ou Superbuy : comparer liens produits, QC et colis",excerpt:"Un cadre de comparaison de deux agents sans promettre un service toujours moins cher, plus rapide ou plus sûr.",sections:[
      ["Comparer le parcours avant le prix","Les deux services relient un lien produit, un achat en Chine, un entrepôt et un colis international. Comparez donc la même variante, destination et hypothèses de colis, pas deux captures anciennes."],
      ["Utiliser le lien comme donnée contrôlée","Conservez URL, vendeur, variante, quantité et prix. Vous pourrez comparer saisie manuelle, ajustement vendeur et livraison intérieure sans présenter le lien comme une garantie."],
      ["Évaluer le QC par la décision permise","Les photos sont utiles si elles confirment variante, mesures ou défaut visible. Leur quantité ne prouve ni authenticité, ni durabilité, ni admissibilité au transport."],
      ["Tarifer le même colis emballé","Gardez destination, catégories, poids, dimensions et protection identiques. Relevez poids facturable, paliers, restrictions, suivi et indication fiscale de la route active."],
      ["Distinguer restrictions et après-vente","Batteries, liquides et objets volumineux peuvent exiger une autre route. Lisez aussi les conditions actuelles de retrait d’emballage, retour et preuve de dommage."],
      ["Choisir avec une fiche datée","Comparez seulement des lignes de même date, source, destination et emballage. Préférez une route admissible et des preuves claires à un vainqueur prétendument permanent."],
    ]},
    {slug:"lolobuy-weidian-links-w2c-guide",label:"GUIDE LIENS PRODUITS",date:"13 oct. 2026",read:"9–11 min",title:"Liens Weidian et W2C LoloBuy : vérifier un produit avant commande",excerpt:"Transformez un lien produit en dossier vérifiable pour variante, QC et décision de colis plutôt qu’en promesse d’achat.",sections:[
      ["Un lien W2C est un point de départ","W2C désigne généralement un endroit où acheter. Il ne prouve ni stock actif ni variante future. Ouvrez l’annonce et notez vendeur, option, prix et date."],
      ["Confirmer l’option exacte","Une même page peut réunir couleurs, tailles et versions. Enregistrez le choix final et formulez-le clairement afin de comparer demande d’achat et fiche d’entrepôt."],
      ["Séparer les coûts","Prix source, livraison chinoise, services d’entrepôt et fret international sont distincts. Le lien reste alors une référence de recherche, pas un prix rendu garanti."],
      ["Lire le QC face au dossier de commande","Vérifiez d’abord variante, couleur, étiquette et quantité, puis les détails propres à la catégorie. Des photos ne prouvent ni authenticité, matière exacte ni fonctionnement interne."],
      ["Préparer l’expédition après la décision produit","Ne choisissez emballage ou service irréversible qu’après le QC. Batterie, fragilité et carton peuvent changer l’éligibilité de la route et le poids facturable."],
      ["Tenir un dossier réutilisable","Conservez lien, option, numéro de commande, statut entrepôt, décision QC et colis. Laissez l’inconnu vide : la liste devient une preuve plutôt qu’une copie."],
    ]},
  ],
  es:[
    {slug:"lolobuy-vs-superbuy-comparison",label:"COMPARACIÓN DE AGENTES",date:"13 oct 2026",read:"9–11 min",title:"LoloBuy vs Superbuy: compara enlaces, QC y planificación del paquete",excerpt:"Un marco para comparar dos agentes sin inventar cuál será siempre más barato, rápido o seguro.",sections:[
      ["Compara el proceso antes del precio","Ambos servicios conectan enlace, compra en China, almacén y paquete internacional. Compara la misma variante, destino y supuestos de embalaje, no capturas antiguas."],
      ["Usa el enlace como entrada controlada","Guarda URL, vendedor, variante, cantidad y precio. Así comparas datos manuales, ajustes del vendedor y entrega nacional sin convertir el enlace en garantía."],
      ["Valora el QC por la decisión que permite","Las fotos sirven si aclaran variante, medidas o defecto visible. La cantidad de imágenes no demuestra autenticidad, duración ni elegibilidad de envío."],
      ["Calcula el mismo paquete embalado","Mantén iguales destino, categorías, peso, dimensiones y protección. Revisa peso facturable, mínimos, restricciones, seguimiento y fiscalidad de la ruta activa."],
      ["Separa restricciones y posventa","Baterías, líquidos y artículos voluminosos pueden necesitar otra ruta. Lee también las condiciones vigentes de embalaje, devoluciones y pruebas de daño."],
      ["Elige con una hoja fechada","Compara registros de misma fecha, fuente, destino y embalaje. Prioriza una ruta elegible con evidencia clara, no un supuesto ganador permanente."],
    ]},
    {slug:"lolobuy-weidian-links-w2c-guide",label:"GUÍA DE ENLACES",date:"13 oct 2026",read:"9–11 min",title:"Enlaces Weidian y W2C de LoloBuy: verifica antes de pedir",excerpt:"Convierte un enlace de producto en un registro verificable de variante, QC y paquete, no en una promesa de compra.",sections:[
      ["Un enlace W2C es solo el inicio","W2C suele indicar dónde comprar. No prueba stock ni variante futura. Abre el anuncio activo y anota vendedor, opción, precio y fecha de revisión."],
      ["Confirma la opción exacta","Una página puede incluir varios colores, tamaños o versiones. Guarda la selección final y descríbela con precisión para comparar pedido y almacén."],
      ["Separa los costes","Precio fuente, envío dentro de China, servicios de almacén y flete internacional son partidas distintas. Así el enlace no se presenta como precio final fijo."],
      ["Lee el QC contra el pedido","Confirma variante, color, etiqueta y cantidad antes de detalles por categoría. Las fotos no prueban autenticidad, composición exacta ni funcionamiento interno."],
      ["Planifica el envío después de decidir el producto","No elijas embalaje irreversible antes del QC. Batería, fragilidad y caja pueden cambiar ruta disponible y peso facturable."],
      ["Crea un registro repetible","Guarda enlace, opción, pedido, estado de almacén, decisión QC y paquete. Deja vacío lo desconocido para construir evidencia en vez de una lista copiada."],
    ]},
  ],
  it:[
    {slug:"lolobuy-vs-superbuy-comparison",label:"CONFRONTO TRA AGENTI",date:"13 ott 2026",read:"9–11 min",title:"LoloBuy vs Superbuy: confronta link, QC e pianificazione del pacco",excerpt:"Un metodo per confrontare due agenti senza inventare chi sia sempre più economico, rapido o sicuro.",sections:[
      ["Confronta il flusso prima del prezzo","Entrambi collegano link prodotto, acquisto in Cina, magazzino e pacco internazionale. Confronta stessa variante, destinazione e imballo, non screenshot datati."],
      ["Usa il link come input controllato","Conserva URL, venditore, variante, quantità e prezzo. Potrai confrontare inserimento manuale, variazioni del venditore e consegna nazionale senza chiamare il link una garanzia."],
      ["Valuta il QC dalla decisione possibile","Le foto servono quando chiariscono variante, misure o difetto visibile. Il numero di immagini non prova autenticità, durata o idoneità alla spedizione."],
      ["Calcola lo stesso pacco imballato","Mantieni uguali destinazione, categorie, peso, dimensioni e protezione. Verifica peso fatturabile, scaglioni, restrizioni, tracking e note fiscali della rotta attiva."],
      ["Distingui restrizioni e post-vendita","Batterie, liquidi e articoli ingombranti possono richiedere un’altra rotta. Leggi anche regole attuali su imballo, resi e prove di danno."],
      ["Scegli con una scheda datata","Confronta righe con stessa data, fonte, destinazione e imballo. Dai priorità a una rotta ammessa e documentata, non a un vincitore dichiarato permanente."],
    ]},
    {slug:"lolobuy-weidian-links-w2c-guide",label:"GUIDA AI LINK PRODOTTO",date:"13 ott 2026",read:"9–11 min",title:"Link Weidian e W2C LoloBuy: verifica il prodotto prima dell’ordine",excerpt:"Trasforma un link in un record verificabile per variante, QC e pacco, non in una promessa di acquisto.",sections:[
      ["Un link W2C è solo l’inizio","W2C indica in genere dove comprare. Non prova disponibilità o variante futura. Apri l’inserzione attiva e registra venditore, opzione, prezzo e data."],
      ["Conferma l’opzione esatta","Una pagina può contenere colori, taglie e versioni diverse. Salva la scelta finale e descrivila con precisione per confrontare ordine e magazzino."],
      ["Separa i costi","Prezzo fonte, consegna cinese, servizi di magazzino e spedizione internazionale sono voci diverse. Il link resta così una ricerca, non un prezzo consegnato garantito."],
      ["Leggi il QC rispetto all’ordine","Controlla prima variante, colore, etichetta e quantità, poi dettagli per categoria. Le foto non provano autenticità, composizione esatta o funzione interna."],
      ["Pianifica la spedizione dopo la decisione sul prodotto","Non scegliere imballo irreversibile prima del QC. Batteria, fragilità e scatola possono cambiare rotta e peso fatturabile."],
      ["Crea un record riutilizzabile","Conserva link, opzione, ordine, stato magazzino, scelta QC e pacco. Lascia vuoto l’ignoto: ottieni prova, non una lista copiata."],
    ]},
  ],
  pt:[
    {slug:"lolobuy-vs-superbuy-comparison",label:"COMPARAÇÃO DE AGENTES",date:"13 out 2026",read:"9–11 min",title:"LoloBuy vs Superbuy: comparar links, QC e planeamento da encomenda",excerpt:"Um método para comparar dois agentes sem inventar quem será sempre mais barato, rápido ou seguro.",sections:[
      ["Compare o processo antes do preço","Ambos ligam link de produto, compra na China, armazém e encomenda internacional. Compare a mesma variante, destino e embalagem, não capturas antigas."],
      ["Use o link como dado controlado","Guarde URL, vendedor, variante, quantidade e preço. Assim compara entrada manual, ajustes do vendedor e entrega doméstica sem tratar o link como garantia."],
      ["Avalie o QC pela decisão que permite","As fotos são úteis quando confirmam variante, medidas ou defeito visível. A quantidade de imagens não prova autenticidade, durabilidade ou elegibilidade de envio."],
      ["Calcule a mesma encomenda embalada","Mantenha destino, categorias, peso, dimensões e proteção iguais. Verifique peso faturável, escalões, restrições, rastreio e fiscalidade da rota ativa."],
      ["Separe restrições e pós-venda","Baterias, líquidos e artigos volumosos podem exigir outra rota. Leia também regras atuais sobre embalagem, devolução e prova de dano."],
      ["Escolha com uma folha datada","Compare apenas registos com mesma data, fonte, destino e embalagem. Priorize rota elegível e provas claras, não um vencedor alegadamente permanente."],
    ]},
    {slug:"lolobuy-weidian-links-w2c-guide",label:"GUIA DE LINKS DE PRODUTO",date:"13 out 2026",read:"9–11 min",title:"Links Weidian e W2C LoloBuy: verificar antes de encomendar",excerpt:"Transforme um link de produto num registo verificável de variante, QC e encomenda, não numa promessa de compra.",sections:[
      ["Um link W2C é apenas o início","W2C geralmente indica onde comprar. Não prova stock ou variante futura. Abra o anúncio ativo e registe vendedor, opção, preço e data de verificação."],
      ["Confirme a opção exata","Uma página pode conter várias cores, tamanhos ou versões. Guarde a escolha final e descreva-a com precisão para comparar pedido e armazém."],
      ["Separe os custos","Preço de origem, entrega na China, serviços de armazém e frete internacional são rubricas diferentes. O link não passa a ser preço final garantido."],
      ["Leia o QC face ao pedido","Confirme primeiro variante, cor, etiqueta e quantidade e depois detalhes por categoria. Fotos não provam autenticidade, composição exata ou funcionamento interno."],
      ["Planeie o envio após decidir o produto","Não escolha embalagem irreversível antes do QC. Bateria, fragilidade e caixa podem alterar a rota e o peso faturável."],
      ["Crie um registo repetível","Guarde link, opção, pedido, estado no armazém, decisão QC e encomenda. Deixe o desconhecido vazio para criar prova e não uma lista copiada."],
    ]},
  ],
};
