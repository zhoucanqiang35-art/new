/* Local, human-written interface copy.  No third-party translation service is used. */
(() => {
  // Clear a legacy preview-only value before i18n.js reads the preference.
  // The current menu deliberately has no automatic Chinese option.
  try { localStorage.removeItem("litbuy-language"); } catch (_) {}
  const L = {
    de: {
      hero: "LitBuy Spreadsheet: Produkte finden und bewusster einkaufen.",
      intro: "Durchsuchen Sie Produktkategorien und vergleichen Sie Angebote in diesem unabhängigen Verzeichnis. Unsere Leitfäden helfen bei QC-Fotos, Größen und Versandkosten, bevor Sie die aktuellen Kaufdetails prüfen.",
      search: "Ein Produkt auf dieser Unterseite finden.",
      cat: "Alle Kategorien – hier sichtbar.",
      detail: "Produktdetailseite direkt auf der Startseite.",
      seo: "Recherche zu LitBuy, direkt auf der Startseite.",
      faq: "Die ausführliche FAQ direkt auf der Startseite.",
      account: "Weiterleitung zur Registrierung",
      browse: "Kategorien ansehen ↓",
      product: "Produktdetails ansehen ↓",
      open: "Lokale Seite öffnen →",
      read: "Artikel lesen →",
      local: "Die Suche bleibt auf dieser Prüfseite.",
      faqIntro:
        "Diese FAQ erläutert diese unabhängige Produktübersicht und öffentlich sichtbare LitBuy-Informationen. Ein Verzeichniseintrag ist keine Lager-, Preis- oder Qualitätszusage. Prüfen Sie vor einer Zahlung stets die aktuelle Kaufseite und Richtlinie.",
      guide:
        "Dieser Leitfaden trennt öffentlich beschriebene Funktionen von praktischen Prüfschritten. Angaben von Drittanbietern, Preise, Verfügbarkeit und Richtlinien können sich ändern.",
      titles: [
        "Ein Verzeichnis sinnvoll nutzen",
        "Eine Produkt-ID richtig lesen",
        "Weidian- und QC-Bilder unterscheiden",
        "Varianten und Größen prüfen",
        "Angebote sorgfältig vergleichen",
        "Eine QC-Prüfung durchführen",
        "Eine echte Shortlist erstellen",
        "Gesamtkosten planen",
        "Kaufwege bewusst wählen",
        "Eine saubere Kaufchronik führen",
      ],
      faqH: [
        "Diese Unterseite verwenden",
        "Bilder und QC",
        "Kaufablauf und Kosten",
        "Konto, Datenschutz und Hilfe",
      ],
      faqQ: [
        "Ist dies der offizielle LitBuy-Shop?",
        "Wohin führen Suche und Kategorien?",
        "Was zeigen Bilder und QC-Fotos?",
        "Beweisen QC-Fotos Echtheit oder Qualität?",
        "Warum ist der Artikelpreis nicht der Endpreis?",
        "Wofür dient der Frachtschätzer?",
        "Wohin führt die Konto-Schaltfläche?",
        "Welche Daten sollte ich für Hilfe sichern?",
      ],
      faqA: [
        "Nein. Dies ist ein separates Rechercheverzeichnis mit importierten Produktdaten. Bestellungen werden hier nicht erstellt.",
        "Suche, Kategorien und Produktdetails bleiben auf dieser Unterseite. Nur Registrierung und die bewusste Kaufaktion führen zu LitBuy.",
        "Oben stehen Händlerbilder. Wenn QC-Bilder vorhanden sind, erscheinen sie weiter unten; sonst werden ausschließlich die Bilder desselben Angebots wiederholt.",
        "Nein. Bilder dokumentieren nur sichtbare Details eines bestimmten Gegenstands. Sie bestätigen weder Echtheit, Material noch künftige Verfügbarkeit.",
        "Internationale Versandkosten hängen unter anderem von Ziel, Gewicht, Maßen und dem tatsächlichen Artikel ab. Der USD-Wert ist nur eine Vergleichshilfe.",
        "Er hilft bei der Budgetplanung, ist aber kein verbindlicher Endpreis, keine Zollentscheidung und keine Lieferzusage.",
        "Sie öffnet die von Ihnen vorgegebene offizielle LitBuy-Registrierung mit Einladungscode. Prüfen Sie die Domain vor der Anmeldung.",
        "Bewahren Sie Produkt-ID, Variante, Bilder, Datum, Preis sowie spätere Bestell- und Versandreferenzen auf.",
      ],
    },
    fr: {
      hero: "LitBuy Spreadsheet : trouver des produits et acheter en connaissance de cause.",
      intro: "Parcourez les catégories et comparez les annonces dans cet annuaire indépendant. Consultez les guides sur les photos QC, les tailles et les frais de livraison avant de vérifier les conditions d’achat actuelles.",
      search: "Trouver un produit sur ce sous-site.",
      cat: "Toutes les catégories, visibles ici.",
      detail: "Fiche produit présentée directement.",
      seo: "Recherche LitBuy présentée sur l’accueil.",
      faq: "FAQ complète présentée sur l’accueil.",
      account: "Redirection vers l’inscription",
      browse: "Voir les catégories ↓",
      product: "Voir la fiche produit ↓",
      open: "Ouvrir la page locale →",
      read: "Lire l’article →",
      local: "La recherche reste sur ce site de vérification.",
      faqIntro:
        "Cette FAQ distingue cet annuaire indépendant des informations publiques de LitBuy. Une fiche ne garantit ni stock, ni prix, ni qualité : vérifiez toujours la page d’achat et les conditions actuelles avant paiement.",
      guide:
        "Ce guide distingue les fonctions décrites publiquement des contrôles pratiques. Les annonces tierces, prix, disponibilités et règles peuvent évoluer.",
      titles: [
        "Bien utiliser un annuaire",
        "Lire un identifiant produit",
        "Images Weidian et QC",
        "Vérifier variantes et tailles",
        "Comparer des annonces avec soin",
        "Effectuer une revue QC",
        "Construire une vraie sélection",
        "Planifier le coût total",
        "Choisir un parcours d’achat",
        "Tenir un historique précis",
      ],
      faqH: [
        "Utiliser ce sous-site",
        "Images et QC",
        "Achat et coûts",
        "Compte, confidentialité et aide",
      ],
      faqQ: [
        "Ce site est-il la boutique officielle LitBuy ?",
        "Où vont la recherche et les catégories ?",
        "Que montrent les images et photos QC ?",
        "Les photos QC prouvent-elles la qualité ?",
        "Pourquoi le prix article n’est-il pas final ?",
        "À quoi sert l’estimateur de fret ?",
        "Où mène le bouton de compte ?",
        "Quelles données conserver pour l’aide ?",
      ],
      faqA: [
        "Non. C’est un annuaire de recherche séparé utilisant des données importées ; il ne crée pas de commande.",
        "La recherche, les catégories et les fiches restent sur ce sous-site. Seuls l’inscription et l’achat volontaire ouvrent LitBuy.",
        "Les miniatures sont des images marchandes. Les QC apparaissent plus bas si elles existent ; sinon seules les images de la même annonce sont reprises.",
        "Non. Elles documentent des détails visibles d’un article précis, sans prouver authenticité, matière ou disponibilité future.",
        "Le fret international dépend notamment de la destination, du poids, des dimensions et de l’article réel. Le montant USD sert à comparer.",
        "Il aide à prévoir un budget, sans constituer un prix final, une décision douanière ou une promesse de livraison.",
        "Il ouvre l’inscription officielle LitBuy fournie avec le code d’invitation. Vérifiez le domaine avant de vous inscrire.",
        "Conservez ID, variante, images, date, prix, puis références de commande et d’expédition.",
      ],
    },
    es: {
      hero: "LitBuy Spreadsheet: encuentra productos y compra con criterio.",
      intro: "Explora categorías y compara anuncios en este directorio independiente. Consulta las guías de fotos QC, tallas y gastos de envío antes de comprobar los datos actuales de compra.",
      search: "Encuentra un producto en este subsite.",
      cat: "Todas las categorías, visibles aquí.",
      detail: "Ficha de producto mostrada en la portada.",
      seo: "Investigación sobre LitBuy en la portada.",
      faq: "FAQ completa en la portada.",
      account: "Redirección al registro",
      browse: "Ver categorías ↓",
      product: "Ver ficha del producto ↓",
      open: "Abrir página local →",
      read: "Leer artículo →",
      local: "La búsqueda permanece en este sitio de revisión.",
      faqIntro:
        "Esta FAQ separa este directorio independiente de la información pública de LitBuy. Un registro no garantiza existencias, precio ni calidad: revisa siempre la página de compra y la política actual antes de pagar.",
      guide:
        "Esta guía separa las funciones públicas de los pasos prácticos de revisión. Los listados de terceros, precios, disponibilidad y políticas pueden cambiar.",
      titles: [
        "Usar bien un directorio",
        "Leer un ID de producto",
        "Imágenes Weidian y QC",
        "Verificar variantes y tallas",
        "Comparar listados con cuidado",
        "Realizar una revisión QC",
        "Crear una lista real",
        "Planificar el coste total",
        "Elegir la ruta de compra",
        "Mantener un historial preciso",
      ],
      faqH: [
        "Uso de este subsite",
        "Imágenes y QC",
        "Compra y costes",
        "Cuenta, privacidad y ayuda",
      ],
      faqQ: [
        "¿Es esta la tienda oficial de LitBuy?",
        "¿A dónde van la búsqueda y las categorías?",
        "¿Qué muestran las imágenes y QC?",
        "¿Las fotos QC prueban la calidad?",
        "¿Por qué el precio no es final?",
        "¿Para qué sirve el estimador de envío?",
        "¿A dónde lleva el botón de cuenta?",
        "¿Qué datos debo guardar para ayuda?",
      ],
      faqA: [
        "No. Es un directorio de investigación independiente con datos importados; no crea pedidos.",
        "La búsqueda, categorías y fichas permanecen en este subsite. Solo el registro y la compra consciente abren LitBuy.",
        "Las miniaturas son imágenes del vendedor. Las QC aparecen abajo cuando existen; si no, se repiten solo imágenes del mismo listado.",
        "No. Solo documentan detalles visibles de un artículo concreto; no prueban autenticidad, material ni disponibilidad futura.",
        "El envío depende del destino, peso, medidas y artículo real. El importe USD sirve únicamente para comparar.",
        "Ayuda a planificar un presupuesto, pero no es precio final, decisión aduanera ni promesa de entrega.",
        "Abre el registro oficial de LitBuy proporcionado con código de invitación. Comprueba el dominio antes de registrarte.",
        "Guarda ID, variante, imágenes, fecha, precio y después las referencias de pedido y envío.",
      ],
    },
    it: {
      hero: "LitBuy Spreadsheet: trova prodotti e acquista con consapevolezza.",
      intro: "Esplora le categorie e confronta gli annunci in questa directory indipendente. Consulta le guide su foto QC, taglie e costi di spedizione prima di verificare i dettagli di acquisto aggiornati.",
      search: "Trova un prodotto in questo sottosito.",
      cat: "Tutte le categorie, visibili qui.",
      detail: "Scheda prodotto mostrata nella homepage.",
      seo: "Ricerca LitBuy mostrata nella homepage.",
      faq: "FAQ completa mostrata nella homepage.",
      account: "Passaggio alla registrazione",
      browse: "Sfoglia categorie ↓",
      product: "Vedi dettagli prodotto ↓",
      open: "Apri pagina locale →",
      read: "Leggi articolo →",
      local: "La ricerca rimane in questo sito di verifica.",
      faqIntro:
        "Questa FAQ distingue questa directory indipendente dalle informazioni pubbliche di LitBuy. Una scheda non garantisce stock, prezzo o qualità: controlla sempre pagina di acquisto e condizioni aggiornate prima di pagare.",
      guide:
        "Questa guida separa le funzioni dichiarate pubblicamente dai controlli pratici. Annunci di terzi, prezzi, disponibilità e policy possono cambiare.",
      titles: [
        "Usare bene una directory",
        "Leggere un ID prodotto",
        "Immagini Weidian e QC",
        "Verificare varianti e taglie",
        "Confrontare annunci con cura",
        "Eseguire un controllo QC",
        "Creare una shortlist reale",
        "Pianificare il costo totale",
        "Scegliere il percorso d’acquisto",
        "Tenere uno storico preciso",
      ],
      faqH: [
        "Usare questo sottosito",
        "Immagini e QC",
        "Acquisto e costi",
        "Account, privacy e aiuto",
      ],
      faqQ: [
        "Questo è il negozio ufficiale LitBuy?",
        "Dove portano ricerca e categorie?",
        "Cosa mostrano immagini e QC?",
        "Le foto QC provano la qualità?",
        "Perché il prezzo non è finale?",
        "A cosa serve il preventivo di spedizione?",
        "Dove porta il pulsante account?",
        "Quali dati devo conservare?",
      ],
      faqA: [
        "No. È una directory di ricerca separata con dati importati e non crea ordini.",
        "Ricerca, categorie e schede restano in questo sottosito. Solo registrazione e acquisto consapevole aprono LitBuy.",
        "Le miniature sono immagini del venditore. Le QC compaiono sotto se disponibili; altrimenti si ripetono solo immagini dello stesso annuncio.",
        "No. Documentano solo dettagli visibili di un articolo specifico; non provano autenticità, materiale o disponibilità futura.",
        "La spedizione dipende da destinazione, peso, dimensioni e articolo effettivo. Il valore USD è solo un confronto.",
        "Aiuta a pianificare il budget ma non è un prezzo finale, una decisione doganale o una promessa di consegna.",
        "Apre la registrazione ufficiale LitBuy fornita con codice invito. Controlla il dominio prima di registrarti.",
        "Conserva ID, variante, immagini, data, prezzo e poi riferimenti di ordine e spedizione.",
      ],
    },
    pt: {
      hero: "LitBuy Spreadsheet: encontre produtos e compre com informação.",
      intro: "Explore as categorias e compare anúncios neste diretório independente. Consulte os guias de fotografias QC, tamanhos e custos de envio antes de verificar os detalhes atuais da compra.",
      search: "Encontre um produto neste subsite.",
      cat: "Todas as categorias, visíveis aqui.",
      detail: "Página de produto apresentada na página inicial.",
      seo: "Pesquisa sobre LitBuy apresentada na página inicial.",
      faq: "FAQ completa apresentada na página inicial.",
      account: "Encaminhamento para registo",
      browse: "Ver categorias ↓",
      product: "Ver detalhes do produto ↓",
      open: "Abrir página local →",
      read: "Ler artigo →",
      local: "A pesquisa permanece neste site de verificação.",
      faqIntro:
        "Esta FAQ separa este diretório independente da informação pública da LitBuy. Um registo não garante stock, preço ou qualidade: confirme sempre a página de compra e a política atual antes de pagar.",
      guide:
        "Este guia separa funções publicamente descritas de verificações práticas. Anúncios de terceiros, preços, disponibilidade e políticas podem mudar.",
      titles: [
        "Usar bem um diretório",
        "Ler um ID de produto",
        "Imagens Weidian e QC",
        "Verificar variantes e tamanhos",
        "Comparar anúncios com cuidado",
        "Fazer uma revisão QC",
        "Criar uma lista real",
        "Planear o custo total",
        "Escolher a rota de compra",
        "Manter um histórico preciso",
      ],
      faqH: [
        "Usar este subsite",
        "Imagens e QC",
        "Compra e custos",
        "Conta, privacidade e ajuda",
      ],
      faqQ: [
        "Este é o site oficial da LitBuy?",
        "Para onde vão pesquisa e categorias?",
        "O que mostram imagens e QC?",
        "Fotos QC provam qualidade?",
        "Porque o preço não é final?",
        "Para que serve o estimador de frete?",
        "Para onde vai o botão da conta?",
        "Que dados devo guardar?",
      ],
      faqA: [
        "Não. É um diretório de pesquisa separado com dados importados; não cria encomendas.",
        "Pesquisa, categorias e fichas ficam neste subsite. Só o registo e a compra intencional abrem a LitBuy.",
        "As miniaturas são imagens do vendedor. QC aparece abaixo se existir; se não, repetem-se apenas imagens do mesmo anúncio.",
        "Não. Apenas documentam detalhes visíveis de um artigo específico; não provam autenticidade, material ou disponibilidade futura.",
        "O envio depende do destino, peso, dimensões e artigo real. O valor em USD serve apenas para comparação.",
        "Ajuda no planeamento do orçamento, mas não é preço final, decisão aduaneira ou promessa de entrega.",
        "Abre o registo oficial da LitBuy fornecido com código de convite. Verifique o domínio antes do registo.",
        "Guarde ID, variante, imagens, data, preço e depois referências de encomenda e envio.",
      ],
    },
    nl: {
      hero: "LitBuy Spreadsheet: vind producten en koop weloverwogen.",
      intro: "Bekijk productcategorieën en vergelijk aanbiedingen in deze onafhankelijke gids. Lees de uitleg over QC-foto’s, maten en verzendkosten voordat je de actuele aankoopgegevens controleert.",
      search: "Vind een product op deze subsite.",
      cat: "Alle categorieën, hier zichtbaar.",
      detail: "Productdetailpagina op de homepage.",
      seo: "LitBuy-onderzoek op de homepage.",
      faq: "Volledige FAQ op de homepage.",
      account: "Doorsturen naar registratie",
      browse: "Categorieën bekijken ↓",
      product: "Productdetails bekijken ↓",
      open: "Lokale pagina openen →",
      read: "Artikel lezen →",
      local: "Zoeken blijft op deze controlesite.",
      faqIntro:
        "Deze FAQ maakt onderscheid tussen deze onafhankelijke directory en openbare LitBuy-informatie. Een record is geen garantie voor voorraad, prijs of kwaliteit: controleer vóór betaling altijd de actuele kooppagina en voorwaarden.",
      guide:
        "Deze gids onderscheidt openbaar beschreven functies van praktische controles. Derdenvermeldingen, prijzen, beschikbaarheid en beleid kunnen wijzigen.",
      titles: [
        "Een directory goed gebruiken",
        "Een product-ID lezen",
        "Weidian- en QC-beelden",
        "Varianten en maten controleren",
        "Listings zorgvuldig vergelijken",
        "Een QC-controle uitvoeren",
        "Een echte shortlist maken",
        "Totale kosten plannen",
        "Een kooproute kiezen",
        "Een nauwkeurig overzicht bijhouden",
      ],
      faqH: [
        "Deze subsite gebruiken",
        "Afbeeldingen en QC",
        "Aankoop en kosten",
        "Account, privacy en hulp",
      ],
      faqQ: [
        "Is dit de officiële LitBuy-winkel?",
        "Waar gaan zoeken en categorieën heen?",
        "Wat tonen beelden en QC-foto’s?",
        "Bewijzen QC-foto’s kwaliteit?",
        "Waarom is de artikelprijs niet definitief?",
        "Waarvoor dient de vrachtcalculator?",
        "Waarheen gaat de accountknop?",
        "Welke gegevens moet ik bewaren?",
      ],
      faqA: [
        "Nee. Dit is een aparte onderzoeksdirectory met geïmporteerde gegevens en maakt geen bestellingen.",
        "Zoeken, categorieën en details blijven op deze subsite. Alleen registratie en een bewuste koopactie openen LitBuy.",
        "Miniaturen zijn verkopersbeelden. QC verschijnt lager op de pagina indien beschikbaar; anders alleen beelden van dezelfde listing.",
        "Nee. Ze tonen slechts zichtbare details van één artikel en bewijzen geen authenticiteit, materiaal of toekomstige beschikbaarheid.",
        "Verzending hangt af van bestemming, gewicht, afmetingen en het werkelijke artikel. De USD-waarde is slechts ter vergelijking.",
        "Het helpt bij een budgetplanning, maar is geen eindprijs, douanebesluit of leveringsbelofte.",
        "Het opent de opgegeven officiële LitBuy-registratie met uitnodigingscode. Controleer het domein vóór registratie.",
        "Bewaar ID, variant, beelden, datum, prijs en later bestel- en verzendreferenties.",
      ],
    },
    pl: {
      hero: "LitBuy Spreadsheet: znajdź produkty i kupuj świadomie.",
      intro: "Przeglądaj kategorie i porównuj oferty w tym niezależnym katalogu. Zapoznaj się z poradnikami o zdjęciach QC, rozmiarach i kosztach wysyłki, a następnie sprawdź aktualne warunki zakupu.",
      search: "Znajdź produkt w tej witrynie.",
      cat: "Wszystkie kategorie widoczne tutaj.",
      detail: "Strona szczegółów produktu na stronie głównej.",
      seo: "Materiały o LitBuy na stronie głównej.",
      faq: "Pełne FAQ na stronie głównej.",
      account: "Przekierowanie do rejestracji",
      browse: "Przeglądaj kategorie ↓",
      product: "Zobacz szczegóły produktu ↓",
      open: "Otwórz stronę lokalną →",
      read: "Czytaj artykuł →",
      local: "Wyszukiwanie pozostaje w tej witrynie kontrolnej.",
      faqIntro:
        "To FAQ rozróżnia niezależny katalog i publiczne informacje LitBuy. Wpis nie gwarantuje dostępności, ceny ani jakości: przed płatnością zawsze sprawdź aktualną stronę zakupu i zasady.",
      guide:
        "Ten poradnik oddziela publicznie opisane funkcje od praktycznych kontroli. Oferty podmiotów trzecich, ceny, dostępność i zasady mogą się zmieniać.",
      titles: [
        "Dobre używanie katalogu",
        "Odczytywanie ID produktu",
        "Zdjęcia Weidian i QC",
        "Sprawdzanie wariantów i rozmiarów",
        "Ostrożne porównywanie ofert",
        "Przegląd QC",
        "Tworzenie realnej krótkiej listy",
        "Planowanie całkowitego kosztu",
        "Wybór ścieżki zakupu",
        "Prowadzenie dokładnej historii",
      ],
      faqH: [
        "Korzystanie z tej witryny",
        "Zdjęcia i QC",
        "Zakup i koszty",
        "Konto, prywatność i pomoc",
      ],
      faqQ: [
        "Czy to oficjalny sklep LitBuy?",
        "Dokąd prowadzą wyszukiwanie i kategorie?",
        "Co pokazują zdjęcia i QC?",
        "Czy zdjęcia QC potwierdzają jakość?",
        "Dlaczego cena produktu nie jest końcowa?",
        "Do czego służy kalkulator frachtu?",
        "Dokąd prowadzi przycisk konta?",
        "Jakie dane zachować dla pomocy?",
      ],
      faqA: [
        "Nie. To oddzielny katalog badawczy z importowanymi danymi i nie tworzy zamówień.",
        "Wyszukiwanie, kategorie i szczegóły pozostają w tej witrynie. Tylko rejestracja i świadomy zakup otwierają LitBuy.",
        "Miniatury to zdjęcia sprzedawcy. QC pojawia się niżej, jeśli istnieje; w przeciwnym razie pokazywane są tylko zdjęcia tej samej oferty.",
        "Nie. Dokumentują tylko widoczne szczegóły konkretnego artykułu i nie potwierdzają autentyczności, materiału ani przyszłej dostępności.",
        "Wysyłka zależy od celu, wagi, wymiarów i rzeczywistego artykułu. Kwota USD służy tylko do porównania.",
        "Pomaga planować budżet, ale nie jest ceną końcową, decyzją celną ani obietnicą dostawy.",
        "Otwiera podaną oficjalną rejestrację LitBuy z kodem zaproszenia. Przed rejestracją sprawdź domenę.",
        "Zachowaj ID, wariant, zdjęcia, datę, cenę, a potem numery zamówienia i przesyłki.",
      ],
    },
    ru: {
      hero: "LitBuy Spreadsheet: находите товары и покупайте осознанно.",
      intro: "Изучайте категории и сравнивайте предложения в этом независимом каталоге. Перед проверкой актуальных условий покупки ознакомьтесь с руководствами по QC-фотографиям, размерам и стоимости доставки.",
      search: "Найдите товар на этом поддомене.",
      cat: "Все категории показаны здесь.",
      detail: "Карточка товара прямо на главной.",
      seo: "Исследование LitBuy на главной странице.",
      faq: "Полный FAQ на главной странице.",
      account: "Переход к регистрации",
      browse: "Смотреть категории ↓",
      product: "Смотреть карточку товара ↓",
      open: "Открыть локальную страницу →",
      read: "Читать статью →",
      local: "Поиск остаётся на этом проверочном сайте.",
      faqIntro:
        "Этот FAQ отделяет независимый каталог от публичной информации LitBuy. Запись не гарантирует наличие, цену или качество: перед оплатой всегда проверяйте актуальную страницу покупки и правила.",
      guide:
        "Это руководство отделяет публично описанные функции от практической проверки. Сторонние объявления, цены, наличие и правила могут меняться.",
      titles: [
        "Как разумно использовать каталог",
        "Как читать идентификатор товара",
        "Изображения Weidian и QC",
        "Проверка вариантов и размеров",
        "Осторожное сравнение объявлений",
        "Проверка QC",
        "Составление реального списка",
        "Планирование полной стоимости",
        "Выбор маршрута покупки",
        "Ведение точной истории",
      ],
      faqH: [
        "Использование этого сайта",
        "Изображения и QC",
        "Покупка и расходы",
        "Аккаунт, конфиденциальность и помощь",
      ],
      faqQ: [
        "Это официальный магазин LitBuy?",
        "Куда ведут поиск и категории?",
        "Что показывают изображения и QC?",
        "Доказывают ли QC-фото качество?",
        "Почему цена товара не окончательная?",
        "Для чего нужен расчёт доставки?",
        "Куда ведёт кнопка аккаунта?",
        "Какие данные сохранить для помощи?",
      ],
      faqA: [
        "Нет. Это отдельный исследовательский каталог с импортированными данными; заказы здесь не создаются.",
        "Поиск, категории и карточки остаются на этом сайте. Только регистрация и осознанная покупка открывают LitBuy.",
        "Миниатюры — изображения продавца. QC показываются ниже, если доступны; иначе используются только изображения того же объявления.",
        "Нет. Они фиксируют лишь видимые детали конкретного товара и не подтверждают подлинность, материал или будущую доступность.",
        "Доставка зависит от направления, веса, габаритов и фактического товара. Сумма в USD предназначена лишь для сравнения.",
        "Он помогает планировать бюджет, но не является окончательной ценой, таможенным решением или обещанием доставки.",
        "Он открывает указанную официальную регистрацию LitBuy с кодом приглашения. Проверьте домен перед регистрацией.",
        "Сохраните ID, вариант, изображения, дату, цену, затем номера заказа и отправления.",
      ],
    },
  };
  // Full-language editorial blocks used with the article-specific title,
  // evidence prompt and action prompt below. They keep every translation as a
  // substantial reading page rather than a shortened summary.
  const V = {
    de: {
      scope:"Ordnen Sie die Aussage immer dem richtigen Schritt zu: Verzeichnis, aktuelle Angebotsseite, Lagerprüfung oder Paketentscheidung. Notieren Sie die konkrete Variante und den Zeitpunkt, damit eine spätere Änderung nicht als ursprüngliche Tatsache erscheint.",
      evidence:"Sichtbare Angaben sind ein Ausgangspunkt, keine Zusage. Prüfen Sie Namen, Auswahltext, Maße, Preisbasis und Bilder an der aktuellen Route und halten Sie offen fest, was dort nicht beantwortet wird.",
      method:"Arbeiten Sie von der Identität zum Detail: zuerst die richtige Route und Option, dann Maße, Menge und Bildfolge, zuletzt Preis und offene Punkte. Eine kurze, datierte Notiz macht den nächsten Vergleich schneller und nachvollziehbar.",
      limit:"Aus einer fehlenden Angabe darf keine positive Annahme werden. Weder ein Katalogeintrag noch ein Foto bestätigt Lagerbestand, Material, Echtheit, Endkosten oder eine erfolgreiche Einfuhr; diese Punkte bleiben bis zur aktuellen Prüfung offen.",
      action:"Beenden Sie den Abschnitt mit einer klaren nächsten Handlung: vergleichen, live prüfen, archivieren oder erst dann kaufen. Bewahren Sie Produkt-ID, gewählte Variante, Bilder und Datum zusammen auf, damit die Entscheidung später überprüfbar bleibt."
    },
    fr: {
      scope:"Replacez toujours chaque affirmation au bon stade : annuaire, annonce en direct, contrôle à l’entrepôt ou décision de colis. Notez la variante exacte et le moment de vérification afin qu’une modification ultérieure ne devienne pas un fait supposé.",
      evidence:"Les éléments visibles sont un point de départ, pas une promesse. Vérifiez le nom, le sélecteur, les mesures, la base de prix et les images sur la route actuelle, puis indiquez clairement ce que la page ne permet pas de confirmer.",
      method:"Avancez de l’identité vers le détail : bonne route et bonne option d’abord, mesures, quantité et série d’images ensuite, prix et questions ouvertes à la fin. Une note courte et datée rend la comparaison suivante plus claire.",
      limit:"Une information absente ne devient pas une conclusion positive. Ni un annuaire ni une photo ne confirment stock, matière, authenticité, coût final ou admission douanière ; ces points restent ouverts jusqu’à la vérification actuelle.",
      action:"Terminez par une action précise : comparer, vérifier en direct, archiver ou acheter seulement après contrôle. Gardez ensemble ID produit, option choisie, images et date afin que la décision puisse être revue."
    },
    es: {
      scope:"Sitúa cada afirmación en su etapa correcta: directorio, anuncio en vivo, revisión de almacén o decisión de paquete. Anota la variante exacta y la fecha de consulta para que un cambio posterior no parezca un hecho original.",
      evidence:"Los datos visibles son un inicio, no una promesa. Comprueba nombre, selector, medidas, base de precio e imágenes en la ruta actual y deja claro qué preguntas la página todavía no responde.",
      method:"Trabaja de la identidad al detalle: primero ruta y opción correctas; después medidas, cantidad y secuencia de imágenes; al final precio y dudas abiertas. Una nota breve con fecha hace que la siguiente comparación sea verificable.",
      limit:"Un dato ausente no puede convertirse en una conclusión positiva. Ni un directorio ni una foto confirman stock, material, autenticidad, coste final o admisión aduanera; esos puntos siguen abiertos hasta revisarlos en vivo.",
      action:"Cierra cada sección con una acción clara: comparar, verificar en vivo, archivar o comprar solo después de comprobar. Guarda juntos ID de producto, opción elegida, imágenes y fecha para poder revisar la decisión."
    },
    it: {
      scope:"Colloca ogni affermazione nella fase corretta: directory, annuncio live, controllo in magazzino o decisione sul pacco. Annota variante esatta e momento della verifica, così un cambiamento successivo non diventa un fatto presunto.",
      evidence:"Gli elementi visibili sono un punto di partenza, non una promessa. Controlla nome, selettore, misure, base del prezzo e immagini sul percorso attuale e indica con chiarezza ciò che la pagina non conferma.",
      method:"Procedi dall’identità al dettaglio: prima percorso e opzione corretti, poi misure, quantità e sequenza delle immagini, infine prezzo e domande aperte. Una nota breve con data rende il confronto successivo verificabile.",
      limit:"Un’informazione assente non può diventare una conclusione positiva. Né una directory né una foto confermano disponibilità, materiale, autenticità, costo finale o ammissione doganale; questi aspetti restano aperti fino al controllo live.",
      action:"Concludi ogni sezione con un’azione precisa: confrontare, verificare dal vivo, archiviare o acquistare solo dopo il controllo. Conserva insieme ID prodotto, opzione scelta, immagini e data per riesaminare la decisione."
    },
    pt: {
      scope:"Coloque cada afirmação na etapa correta: diretório, anúncio em direto, verificação no armazém ou decisão de envio. Registe a variante exata e o momento da consulta para que uma alteração posterior não pareça um facto original.",
      evidence:"Os dados visíveis são um ponto de partida, não uma promessa. Confirme nome, seletor, medidas, base de preço e imagens na rota atual e indique claramente as perguntas que a página ainda não responde.",
      method:"Trabalhe da identidade para o detalhe: primeiro a rota e a opção corretas; depois medidas, quantidade e sequência de imagens; por fim preço e dúvidas em aberto. Uma nota curta e datada torna a próxima comparação verificável.",
      limit:"Uma informação em falta não pode tornar-se uma conclusão positiva. Nem um diretório nem uma fotografia confirmam stock, material, autenticidade, custo final ou admissão aduaneira; esses pontos ficam em aberto até à verificação atual.",
      action:"Termine cada secção com uma ação clara: comparar, verificar em direto, arquivar ou comprar apenas após confirmar. Guarde juntos ID do produto, opção escolhida, imagens e data para poder rever a decisão."
    },
    nl: {
      scope:"Plaats iedere bewering bij de juiste fase: directory, actuele aanbieding, magazijncontrole of pakketbeslissing. Noteer de exacte variant en het controlemoment, zodat een latere wijziging niet als oorspronkelijk feit wordt gelezen.",
      evidence:"Zichtbare gegevens zijn een beginpunt, geen belofte. Controleer naam, keuzelijst, maten, prijsbasis en beelden op de actuele route en vermeld duidelijk welke vragen de pagina nog niet beantwoordt.",
      method:"Werk van identiteit naar detail: eerst de juiste route en optie, daarna maten, hoeveelheid en beeldreeks, ten slotte prijs en open vragen. Een korte gedateerde notitie maakt de volgende vergelijking controleerbaar.",
      limit:"Ontbrekende informatie mag geen positieve conclusie worden. Noch een directory noch een foto bevestigt voorraad, materiaal, authenticiteit, eindkosten of toelating door de douane; deze punten blijven open tot actuele controle.",
      action:"Sluit elk onderdeel af met een duidelijke handeling: vergelijken, live controleren, archiveren of pas daarna kopen. Bewaar product-ID, gekozen optie, beelden en datum samen zodat de beslissing later te toetsen is."
    },
    pl: {
      scope:"Umieszczaj każdą informację na właściwym etapie: katalog, aktualna oferta, kontrola magazynowa lub decyzja o paczce. Zapisz dokładny wariant i chwilę sprawdzenia, aby późniejsza zmiana nie wyglądała jak pierwotny fakt.",
      evidence:"Widoczne dane są punktem wyjścia, a nie obietnicą. Sprawdź nazwę, wybór opcji, wymiary, podstawę ceny i obrazy na aktualnej trasie oraz wyraźnie zaznacz pytania, na które strona nie odpowiada.",
      method:"Pracuj od tożsamości do szczegółu: najpierw właściwa trasa i opcja, potem wymiary, ilość i sekwencja zdjęć, na końcu cena oraz otwarte pytania. Krótka notatka z datą ułatwia następne porównanie.",
      limit:"Brakująca informacja nie może stać się pozytywnym wnioskiem. Ani katalog, ani zdjęcie nie potwierdzają dostępności, materiału, autentyczności, końcowego kosztu ani dopuszczenia celnego; kwestie te pozostają otwarte do bieżącej weryfikacji.",
      action:"Zakończ każdy temat jasnym działaniem: porównać, sprawdzić na żywo, zarchiwizować albo kupić dopiero po sprawdzeniu. Zachowaj razem ID produktu, wybrany wariant, obrazy i datę, aby decyzję można było odtworzyć."
    },
    ru: {
      scope:"Относите каждое утверждение к правильному этапу: каталог, актуальное объявление, проверка на складе или решение по посылке. Фиксируйте точный вариант и время просмотра, чтобы позднее изменение не стало исходным фактом.",
      evidence:"Видимые сведения — это отправная точка, а не обещание. Сверяйте название, выбор варианта, размеры, основу цены и изображения по актуальному маршруту и прямо отмечайте, на какие вопросы страница не отвечает.",
      method:"Двигайтесь от идентификации к деталям: сначала верный маршрут и вариант, затем размеры, количество и последовательность фото, в конце цена и открытые вопросы. Короткая запись с датой делает следующее сравнение проверяемым.",
      limit:"Отсутствующая информация не может превращаться в положительный вывод. Ни каталог, ни фото не подтверждают наличие, материал, подлинность, окончательную стоимость или таможенный допуск; эти вопросы открыты до текущей проверки.",
      action:"Завершайте каждый раздел ясным действием: сравнить, проверить вживую, архивировать или покупать только после проверки. Храните вместе ID товара, выбранный вариант, изображения и дату, чтобы решение можно было проверить."
    }
  };
  // Keep the English document as the source version. Other supported languages
  // render their own editorial copy, rather than sending page text to a remote service.
  const T = {
    de: [
      "Ein Verzeichnis ist eine Recherchekarte: Es trennt gespeicherte Produktdaten von Live-Angeboten und schafft einen nachvollziehbaren Vergleichsprozess.",
      "Eine Produkt-ID ist ein stabiler Verweis für Notizen und Routen. Sie ersetzt weder eine Bestellnummer noch eine Bestätigung von Bestand oder Qualität.",
      "Händlerbilder zeigen die Ankündigung eines Angebots; QC-Bilder dokumentieren höchstens sichtbare Merkmale eines eingetroffenen Artikels.",
      "Bei Varianten entscheidet der genaue Optionsname. Maße und Auswahltext sind aussagekräftiger als ein gemeinsames Werbefoto.",
      "Ein seriöser Vergleich stellt gleiche Variante, Menge, Maße und sichtbare Angaben nebeneinander statt nur Startpreise zu sortieren.",
      "Eine QC-Prüfung beginnt mit vorab definierten Fragen: richtige Variante, sichtbare Teile, wesentliche Merkmale und offene Punkte.",
      "Eine Shortlist soll Entscheidungen erleichtern. Behalten Sie wenige Kandidaten mit einem klaren Grund und archivieren Sie unklare Treffer.",
      "Die Gesamtkosten entstehen nicht auf der Produktkarte. Ziel, Gewicht, Volumen und spätere Versandentscheidung gehören getrennt in den Plan.",
      "Verantwortlicher Einkauf bedeutet aktuelle Plattformregeln und Einfuhrvorschriften vor einer Zahlung zu prüfen, nicht erst nach dem Versand.",
      "Ein Kaufprotokoll verbindet Recherche, Bestätigung, Lagerprüfung und Paketentscheidung mit Daten, Bildern und eindeutigen Referenzen.",
    ],
    fr: [
      "Un annuaire est une carte de recherche : il sépare les données enregistrées des annonces actives et facilite une comparaison traçable.",
      "Un identifiant produit est une référence stable pour les notes et les parcours. Il ne remplace ni numéro de commande ni confirmation de stock ou de qualité.",
      "Les images vendeur montrent l’annonce ; les images QC documentent au mieux les détails visibles d’un article arrivé à l’entrepôt.",
      "Pour les variantes, le libellé exact de l’option compte. Les mesures et le texte du sélecteur sont plus fiables qu’une photo partagée.",
      "Une comparaison sérieuse aligne variante, quantité, mesures et informations visibles avant de comparer les prix de départ.",
      "Une revue QC commence par des questions définies : bonne variante, éléments visibles, caractéristiques essentielles et points non vérifiés.",
      "Une sélection doit aider à décider. Gardez peu de candidats avec une raison claire et archivez les résultats ambigus.",
      "Le coût total ne se lit pas sur une carte produit : destination, poids, volume et décision d’expédition doivent rester séparés.",
      "Acheter de façon responsable exige de vérifier les règles actuelles de la plateforme et d’importation avant le paiement.",
      "Un journal d’achat relie recherche, vérification, contrôle entrepôt et décision de colis avec dates, images et références.",
    ],
    es: [
      "Un directorio es un mapa de investigación: separa datos guardados de anuncios vivos y permite comparar con trazabilidad.",
      "Un ID de producto es una referencia estable para notas y rutas. No sustituye un pedido ni confirma existencias o calidad.",
      "Las imágenes del vendedor muestran el anuncio; las QC solo pueden documentar detalles visibles de un artículo llegado al almacén.",
      "En las variantes manda el nombre exacto de la opción. Las medidas y el texto del selector valen más que una foto compartida.",
      "Una comparación seria alinea variante, cantidad, medidas e información visible antes de ordenar por precios iniciales.",
      "Una revisión QC empieza con preguntas definidas: variante correcta, piezas visibles, rasgos clave y puntos sin comprobar.",
      "Una lista corta debe facilitar decisiones. Conserva pocos candidatos con una razón clara y archiva resultados ambiguos.",
      "El coste total no aparece en la tarjeta: destino, peso, volumen y decisión de envío deben planearse por separado.",
      "Comprar responsablemente exige revisar reglas actuales de plataforma e importación antes de pagar, no después del envío.",
      "Un registro de compra une investigación, verificación, almacén y envío con fechas, imágenes y referencias claras.",
    ],
    it: [
      "Una directory è una mappa di ricerca: separa dati salvati da annunci live e rende confrontabile ogni scelta.",
      "Un ID prodotto è un riferimento stabile per note e percorsi. Non sostituisce un ordine né conferma disponibilità o qualità.",
      "Le immagini del venditore mostrano l’annuncio; le immagini QC possono documentare solo dettagli visibili di un articolo arrivato in magazzino.",
      "Nelle varianti conta il nome esatto dell’opzione. Misure e testo del selettore sono più affidabili di una foto condivisa.",
      "Un confronto serio allinea variante, quantità, misure e informazioni visibili prima di ordinare per prezzo iniziale.",
      "Un controllo QC inizia con domande definite: variante corretta, componenti visibili, caratteristiche chiave e punti non verificati.",
      "Una shortlist deve rendere più facile decidere. Mantieni pochi candidati con una ragione chiara e archivia i risultati ambigui.",
      "Il costo totale non è sulla scheda prodotto: destinazione, peso, volume e decisione di spedizione vanno pianificati separatamente.",
      "Acquistare responsabilmente significa controllare regole aggiornate della piattaforma e di importazione prima del pagamento.",
      "Un registro acquisti collega ricerca, verifica, magazzino e spedizione con date, immagini e riferimenti precisi.",
    ],
    pt: [
      "Um diretório é um mapa de pesquisa: separa dados guardados de anúncios ativos e permite comparar escolhas com rastreabilidade.",
      "Um ID de produto é uma referência estável para notas e rotas. Não substitui pedido nem confirma stock ou qualidade.",
      "As imagens do vendedor mostram o anúncio; as QC só podem documentar detalhes visíveis de um artigo que chegou ao armazém.",
      "Nas variantes, vale o nome exato da opção. Medidas e texto do seletor são mais fiáveis do que uma fotografia partilhada.",
      "Uma comparação séria alinha variante, quantidade, medidas e informação visível antes de ordenar por preço inicial.",
      "Uma revisão QC começa com perguntas definidas: variante correta, peças visíveis, características essenciais e pontos não verificados.",
      "Uma lista curta deve facilitar a decisão. Mantenha poucos candidatos com razão clara e arquive resultados ambíguos.",
      "O custo total não aparece no cartão: destino, peso, volume e decisão de envio devem ser planeados separadamente.",
      "Comprar com responsabilidade exige verificar regras atuais da plataforma e de importação antes do pagamento.",
      "Um registo de compra liga pesquisa, verificação, armazém e envio com datas, imagens e referências claras.",
    ],
    nl: [
      "Een directory is een onderzoekskaart: hij scheidt opgeslagen gegevens van live-aanbiedingen en maakt vergelijking controleerbaar.",
      "Een product-ID is een stabiele verwijzing voor notities en routes. Het vervangt geen ordernummer en bevestigt geen voorraad of kwaliteit.",
      "Verkopersbeelden tonen de aanbieding; QC-beelden kunnen alleen zichtbare details van een ontvangen artikel documenteren.",
      "Bij varianten telt de exacte optienaam. Maten en keuzetekst zijn betrouwbaarder dan een gedeelde foto.",
      "Een zorgvuldige vergelijking zet dezelfde variant, hoeveelheid, maten en zichtbare informatie naast elkaar vóór prijsvergelijking.",
      "Een QC-controle begint met vaste vragen: juiste variant, zichtbare onderdelen, belangrijke kenmerken en onbevestigde punten.",
      "Een shortlist moet beslissen eenvoudiger maken. Bewaar enkele kandidaten met een duidelijke reden en archiveer dubbelzinnige resultaten.",
      "De totale kosten staan niet op de kaart: bestemming, gewicht, volume en verzendbeslissing moeten apart worden gepland.",
      "Verantwoord kopen betekent actuele platform- en invoerregels vóór betaling controleren, niet pas na verzending.",
      "Een aankooplog verbindt onderzoek, verificatie, magazijncontrole en verzending met data, beelden en duidelijke referenties.",
    ],
    pl: [
      "Katalog jest mapą badań: oddziela zapisane dane od aktywnych ofert i pozwala porównywać wybory w sposób możliwy do odtworzenia.",
      "ID produktu jest stałym odniesieniem dla notatek i tras. Nie zastępuje numeru zamówienia ani nie potwierdza stanu lub jakości.",
      "Zdjęcia sprzedawcy pokazują ofertę; zdjęcia QC mogą dokumentować jedynie widoczne cechy artykułu przyjętego do magazynu.",
      "Przy wariantach decyduje dokładna nazwa opcji. Wymiary i tekst wyboru są pewniejsze niż wspólne zdjęcie.",
      "Rzetelne porównanie zestawia ten sam wariant, ilość, wymiary i widoczne informacje przed porównaniem cen.",
      "Kontrola QC zaczyna się od ustalonych pytań: właściwy wariant, widoczne części, kluczowe cechy i kwestie niepotwierdzone.",
      "Krótka lista ma ułatwić decyzję. Zachowaj niewiele kandydatów z jasnym powodem i archiwizuj niejednoznaczne wyniki.",
      "Łączny koszt nie widnieje na karcie: cel, waga, objętość i decyzja wysyłkowa wymagają osobnego planu.",
      "Odpowiedzialny zakup wymaga sprawdzenia aktualnych zasad platformy i importu przed płatnością, nie po wysyłce.",
      "Dziennik zakupu łączy badanie, weryfikację, magazyn i wysyłkę za pomocą dat, obrazów i jednoznacznych odniesień.",
    ],
    ru: [
      "Каталог — это карта исследования: он отделяет сохранённые данные от актуальных объявлений и делает сравнение проверяемым.",
      "ID товара — стабильная ссылка для заметок и маршрутов. Он не заменяет номер заказа и не подтверждает наличие или качество.",
      "Изображения продавца показывают объявление; QC-фото могут фиксировать лишь видимые детали товара, поступившего на склад.",
      "Для вариантов важнее точное название опции. Размеры и текст выбора надёжнее общей рекламной фотографии.",
      "Корректное сравнение сопоставляет одинаковый вариант, количество, размеры и видимые сведения, а не только начальную цену.",
      "Проверка QC начинается с заранее заданных вопросов: верный вариант, видимые части, ключевые признаки и непроверенные пункты.",
      "Короткий список должен облегчать выбор. Оставляйте немного кандидатов с понятной причиной и архивируйте неоднозначные результаты.",
      "Итоговой стоимости нет на карточке: направление, вес, объём и решение об отправке нужно планировать отдельно.",
      "Ответственная покупка требует проверить актуальные правила платформы и импорта до оплаты, а не после отправки.",
      "Журнал покупки связывает исследование, проверку, склад и отправку датами, изображениями и ясными ссылками.",
    ],
  };
  const U = {
    de: [
      "Geschätzter Preis (USD)",
      "Kategorie",
      "Produkt-ID",
      "Bei LitBuy kaufen",
      "Kategorie ansehen",
      "Lokale Produktdetails öffnen →",
      "Suche im Katalog",
      "Vorherige",
      "Nächste",
    ],
    fr: [
      "Prix estimé (USD)",
      "Catégorie",
      "ID produit",
      "Acheter sur LitBuy",
      "Voir la catégorie",
      "Ouvrir les détails locaux →",
      "Rechercher dans le catalogue",
      "Précédent",
      "Suivant",
    ],
    es: [
      "Precio estimado (USD)",
      "Categoría",
      "ID de producto",
      "Comprar en LitBuy",
      "Ver categoría",
      "Abrir detalles locales →",
      "Buscar en el catálogo",
      "Anterior",
      "Siguiente",
    ],
    it: [
      "Prezzo stimato (USD)",
      "Categoria",
      "ID prodotto",
      "Acquista su LitBuy",
      "Sfoglia categoria",
      "Apri dettagli locali →",
      "Cerca nel catalogo",
      "Precedente",
      "Successivo",
    ],
    pt: [
      "Preço estimado (USD)",
      "Categoria",
      "ID do produto",
      "Comprar na LitBuy",
      "Ver categoria",
      "Abrir detalhes locais →",
      "Pesquisar no catálogo",
      "Anterior",
      "Seguinte",
    ],
    nl: [
      "Geschatte prijs (USD)",
      "Categorie",
      "Product-ID",
      "Kopen op LitBuy",
      "Categorie bekijken",
      "Lokale productdetails openen →",
      "Zoeken in catalogus",
      "Vorige",
      "Volgende",
    ],
    pl: [
      "Szacowana cena (USD)",
      "Kategoria",
      "ID produktu",
      "Kup na LitBuy",
      "Przeglądaj kategorię",
      "Otwórz lokalne szczegóły →",
      "Szukaj w katalogu",
      "Poprzednia",
      "Następna",
    ],
    ru: [
      "Расчётная цена (USD)",
      "Категория",
      "ID товара",
      "Купить на LitBuy",
      "Смотреть категорию",
      "Открыть локальные сведения →",
      "Поиск по каталогу",
      "Предыдущая",
      "Следующая",
    ],
  };
  let localizedHome = false;
  const source = new Map();
  const remember = (el) => {
    if (el && !source.has(el)) source.set(el, el.innerHTML);
    return el;
  };
  const fillHome = (c, lang) => {
    const pairs = [
      [".hero-copy .label", "LITBUY SPREADSHEET"],
      [".hero-copy h1", c.hero],
      [".hero-copy h1 + p", c.intro],
      [".hero-links a:first-child", c.browse],
      [".hero-links a:last-child", c.product],
      [".home-search .label", "LITBUY SPREADSHEET"],
      [".home-search h2", c.search],
      [".route-ticket .ticket-body p", c.local],
      ["#homeCategories h2", c.cat],
      ["#homeProductDetail h2", c.detail],
      ["#homeSeoArticles h2", c.seo],
      ["#homeFaq h2", c.faq],
      [".home-account-panel h2", c.account],
    ];
    pairs.forEach(([s, v]) => {
      const e = document.querySelector(s);
      if (e) e.textContent = v;
    });
    document
      .querySelectorAll(".home-present-head>a")
      .forEach((e) => (e.textContent = c.open));
    const input = document.querySelector(".directory-search input");
    if (input) input.placeholder = c.search;
    document
      .querySelectorAll(".directory-search button")
      .forEach((e) => (e.textContent = c.search));
    const labels = [
      [".home-search .label", c.search],
      ["#homeCategories .label", c.cat],
      ["#homeProductDetail .label", c.detail],
      ["#homeSeoArticles .label", c.seo],
      [".home-account-panel .label", c.account],
    ];
    labels.forEach(([s, v]) => {
      const e = document.querySelector(s);
      if (e) e.textContent = v.toUpperCase();
    });
    const catLead = document.querySelector(
      "#homeCategories .home-present-head p:not(.label)",
    );
    if (catLead) catLead.textContent = c.local;
    const ticketLink = document.querySelector(".route-ticket>a");
    if (ticketLink) ticketLink.textContent = c.open;
    document
      .querySelectorAll(".home-article-list a")
      .forEach((e) => (e.textContent = c.read));
    document.querySelectorAll(".home-article-list article").forEach((e, i) => {
      const n = [0, 2, 7][i];
      const h = e.querySelector("h3"),
        p = e.querySelector("p");
      if (h) h.textContent = c.titles[n];
      if (p) p.textContent = c.guide;
    });
    const homeFaqContent = document.querySelector("#homeFaqContent");
    if (homeFaqContent) homeFaqContent.innerHTML = faqBody(c, lang);
    const account = document.querySelector(".home-account-panel p:not(.label)");
    if (account) account.textContent = c.local;
    document
      .querySelectorAll("footer p")
      .forEach((e) => (e.textContent = c.local));
    document
      .querySelectorAll("footer .links a")
      .forEach((e, i) => (e.textContent = i === 0 ? c.open : c.read));
    document.querySelectorAll(".home-category-list a").forEach((e) => {
      const b = e.querySelector("b"),
        i = e.querySelector("i");
      if (b) b.textContent = b.textContent.replace(/\s*items?$/i, "");
      if (i) i.textContent = c.open;
    });
    document
      .querySelectorAll(".home-product-copy .button")
      .forEach((e) => (e.textContent = c.open));
    const u = U[lang];
    if (u) {
      document
        .querySelectorAll(".subsite-product-price-label")
        .forEach((e) => (e.textContent = u[0]));
      document
        .querySelectorAll(".subsite-detail-link")
        .forEach((e) => (e.textContent = u[5]));
      document
        .querySelectorAll(".subsite-buy-button")
        .forEach((e) => (e.textContent = u[3]));
    }
    if (u)
      document.querySelectorAll(".home-product-copy dt").forEach((e, i) => {
        if (u[i === 0 ? 0 : 2]) e.textContent = u[i === 0 ? 0 : 2];
      });
  };
  // Keep the translated pages as substantial reading pages. Earlier builds
  // replaced the English source with a short summary, which made each
  // language version visibly thinner. Every article now follows the same
  // five-paragraph reading structure as the English source; the paragraphs
  // have distinct jobs (scope, evidence, method, boundary and next action).
  const P = {
    de: {
      scope:
        "Notieren Sie dazu die konkrete Variante, den Abrufzeitpunkt und die Fundstelle, damit spätere Änderungen nicht mit der ursprünglichen Recherche verwechselt werden.",
      evidence:
        "Vergleichen Sie sichtbare Angaben direkt mit der jeweiligen Angebotsseite. Ein Verzeichnis kann die Prüfung organisieren, aber keine fremde Aussage bestätigen.",
      method:
        "Arbeiten Sie mit einer kurzen Checkliste statt mit einem Bauchgefühl: Option, Maße, Menge, Bilder, Preisbasis und offene Fragen gehören getrennt in die Notiz.",
      limit:
        "Fehlende oder widersprüchliche Informationen sind ein Ergebnis, kein Detail zum Übergehen. Daraus folgt nur, dass weitere Prüfung nötig ist; daraus folgt keine Qualitäts- oder Echtheitsaussage.",
      action:
        "Treffen Sie erst danach eine Entscheidung und speichern Sie die Produkt-ID zusammen mit den Bildern und dem Datum. So bleibt der nächste Schritt nachvollziehbar.",
    },
    fr: {
      scope:
        "Notez la variante exacte, le moment de consultation et la source afin de ne pas confondre une modification ultérieure avec la recherche initiale.",
      evidence:
        "Comparez les éléments visibles avec la page de l’annonce concernée. Un annuaire organise la vérification, mais ne peut pas confirmer l’affirmation d’un tiers.",
      method:
        "Utilisez une courte liste de contrôle plutôt qu’une impression générale : option, mesures, quantité, images, base de prix et questions ouvertes doivent être notées séparément.",
      limit:
        "Une information absente ou contradictoire est un résultat, pas un détail à ignorer. Elle impose un contrôle supplémentaire, sans permettre de conclure sur la qualité ou l’authenticité.",
      action:
        "Décidez seulement ensuite et conservez l’ID produit avec les images et la date. La prochaine étape restera ainsi traçable.",
    },
    es: {
      scope:
        "Anota la variante exacta, el momento de consulta y la fuente para no confundir un cambio posterior con la investigación original.",
      evidence:
        "Compara los datos visibles con la página del anuncio correspondiente. Un directorio ordena la comprobación, pero no puede confirmar una afirmación de terceros.",
      method:
        "Usa una lista corta en vez de una impresión general: opción, medidas, cantidad, imágenes, base de precio y dudas abiertas deben quedar por separado.",
      limit:
        "Un dato ausente o contradictorio es un resultado, no un detalle que se deba pasar por alto. Indica que hace falta revisar más; no demuestra calidad ni autenticidad.",
      action:
        "Decide solo después y guarda el ID del producto con imágenes y fecha. Así el siguiente paso queda verificable.",
    },
    it: {
      scope:
        "Annota variante esatta, momento della consultazione e fonte, così una modifica successiva non viene confusa con la ricerca originaria.",
      evidence:
        "Confronta gli elementi visibili con la pagina del relativo annuncio. Una directory organizza la verifica, ma non può confermare una dichiarazione di terzi.",
      method:
        "Usa una breve checklist invece di un’impressione generale: opzione, misure, quantità, immagini, base del prezzo e dubbi aperti vanno annotati separatamente.",
      limit:
        "Un’informazione assente o contraddittoria è un risultato, non un dettaglio da ignorare. Richiede ulteriori controlli e non dimostra qualità o autenticità.",
      action:
        "Decidi solo in seguito e salva l’ID prodotto insieme a immagini e data. Il passo successivo resterà così tracciabile.",
    },
    pt: {
      scope:
        "Registe a variante exata, o momento da consulta e a fonte para não confundir uma alteração posterior com a pesquisa inicial.",
      evidence:
        "Compare os elementos visíveis com a página do anúncio correspondente. Um diretório organiza a verificação, mas não pode confirmar uma afirmação de terceiros.",
      method:
        "Use uma lista curta em vez de uma impressão geral: opção, medidas, quantidade, imagens, base de preço e dúvidas em aberto devem ficar registadas separadamente.",
      limit:
        "Uma informação em falta ou contraditória é um resultado, não um detalhe a ignorar. Indica necessidade de nova verificação; não prova qualidade nem autenticidade.",
      action:
        "Decida apenas depois e guarde o ID do produto com imagens e data. Assim, o passo seguinte mantém-se rastreável.",
    },
    nl: {
      scope:
        "Noteer de exacte variant, het moment van raadplegen en de bron, zodat een latere wijziging niet met het oorspronkelijke onderzoek wordt verward.",
      evidence:
        "Vergelijk zichtbare gegevens met de pagina van de betreffende aanbieding. Een directory ordent de controle, maar kan een bewering van een derde niet bevestigen.",
      method:
        "Werk met een korte checklist in plaats van een algemene indruk: optie, maten, hoeveelheid, beelden, prijsbasis en open vragen horen apart in de notitie.",
      limit:
        "Ontbrekende of tegenstrijdige informatie is een uitkomst, geen detail om te negeren. Die vraagt om verdere controle en bewijst geen kwaliteit of authenticiteit.",
      action:
        "Neem pas daarna een besluit en bewaar het product-ID met beelden en datum. Zo blijft de volgende stap controleerbaar.",
    },
    pl: {
      scope:
        "Zapisz dokładny wariant, chwilę sprawdzenia i źródło, aby późniejszej zmiany nie pomylić z pierwotnym badaniem.",
      evidence:
        "Porównuj widoczne dane ze stroną konkretnej oferty. Katalog porządkuje weryfikację, lecz nie może potwierdzić twierdzenia osoby trzeciej.",
      method:
        "Korzystaj z krótkiej listy kontrolnej zamiast ogólnego wrażenia: opcję, wymiary, liczbę, obrazy, podstawę ceny i otwarte pytania zapisuj oddzielnie.",
      limit:
        "Brakująca lub sprzeczna informacja jest wynikiem, a nie szczegółem do pominięcia. Wymaga dalszego sprawdzenia i nie dowodzi jakości ani autentyczności.",
      action:
        "Dopiero potem podejmij decyzję i zachowaj ID produktu wraz z obrazami oraz datą. Następny krok pozostanie wtedy możliwy do odtworzenia.",
    },
    ru: {
      scope:
        "Зафиксируйте точный вариант, время просмотра и источник, чтобы позднее изменение не спутать с первоначальным исследованием.",
      evidence:
        "Сопоставляйте видимые сведения со страницей конкретного объявления. Каталог упорядочивает проверку, но не подтверждает утверждение третьей стороны.",
      method:
        "Используйте короткий чек-лист вместо общего впечатления: опцию, размеры, количество, изображения, основу цены и открытые вопросы записывайте отдельно.",
      limit:
        "Отсутствующая или противоречивая информация — это результат, а не деталь, которую следует пропустить. Она требует дополнительной проверки и не доказывает качество или подлинность.",
      action:
        "Принимайте решение только после этого и сохраняйте ID товара вместе с изображениями и датой. Тогда следующий шаг останется проверяемым.",
    },
  };
  const evidence = [0, 7, 2, 2, 4, 3, 1, 5, 0, 7];
  /*
   * A translation must remain an article, not a five-line summary.  The five
   * paragraphs below deliberately have different editorial jobs: scope,
   * evidence, method, boundary and next action.  Each receives a different
   * topic-specific fact, question and follow-up from the language pack.  This
   * preserves the source page's reading density while keeping the ten guides
   * about ten different buyer decisions.
   */
  const guideOneTranslations = {
  "de": [
    "Ein nützliches LitBuy-Spreadsheet verkürzt die Suche, den Vergleich und das erneute Öffnen von Produktdaten. Es ist weder Laden, Händlergarantie noch Bestandsverwaltung. Eine Karte kann nützlich bleiben, obwohl der Verkäufer Varianten oder Preise ändert oder das Angebot entfernt. Das Verzeichnis beginnt die Entscheidung; vor der Zahlung prüfen Sie auf der aktuellen Kaufseite Option und Bedingungen.",
    "Beginnen Sie mit einer schriftlichen Beschreibung: „schwarze Schultertasche, schmaler Riemen, Platz für Handy und Brille“ hilft mehr als „Taschen“. Ergänzen Sie unverzichtbares Material, ungefähre Maße, Farbe, Budget und Verwendungszweck. Suchen Sie nach stabilen Begriffen und grenzen Sie über Kategorien ein. Die erste Suche soll eine Auswahl liefern, keinen Sieger: Drei bis acht Kandidaten lassen sich meist sorgfältig vergleichen.",
    "Notieren Sie vor der Stilbewertung vier Angaben je Kandidat: Kategorie, angezeigte USD-Schätzung, Produkt-ID und Bilder auf der Detailseite. Die ID ist besonders nützlich, weil Titel übersetzt, gekürzt oder wiederholt sein können. Sie verbindet Notizen mit demselben Eintrag. Ähnlich aussehende Karten mit verschiedenen IDs gelten als unterschiedliche Angebote, bis die aktuelle Kaufseite etwas anderes zeigt.",
    "Trennen Sie Belege von Annahmen. Belege sind der angezeigte Preis, sichtbare Optionsnamen, Bilder und das Prüfdatum. Annahmen sind etwa „es passt“, „die Farbe stimmt“, „der Verkäufer hat Bestand“ oder „der Versand ist günstig“. So wird ein ordentlicher Eintrag nicht sicherer dargestellt als das Angebot. Markieren Sie den Stand als untersuchen, vergleichen, prüfbereit oder verwerfen.",
    "LitBuy beschreibt öffentlich eine Kauf- und Lagerphase sowie eine spätere internationale Paketphase. Das Verzeichnis unterstützt beide: Grenzen Sie zuerst Produkte ein und prüfen Sie anschließend aktuelle Bestell- und Paketangaben beim Dienst. Das beste Spreadsheet hat nicht die meisten Links, sondern genug Kontext für die nächste Entscheidung, ohne die Recherche neu beginnen zu müssen.",
    "Fazit: Nutzen Sie das Spreadsheet, um Optionen einzugrenzen und zu dokumentieren. Prüfen Sie auf der aktuellen Kaufseite Variante, Preis und Bedingungen."
  ],
  "fr": [
    "Un tableau LitBuy utile réduit le temps nécessaire pour trouver, comparer et retrouver une fiche produit. Ce n’est ni une boutique, ni une garantie du vendeur, ni un système de stock. Une fiche peut rester utile alors que le vendeur modifie une variante ou un prix, ou retire l’annonce. L’annuaire sert à commencer la décision ; avant paiement, vérifiez l’option et les conditions sur la page d’achat actuelle.",
    "Commencez par une description écrite : « sac noir à bandoulière fine, pouvant contenir téléphone et lunettes » aide davantage que « sacs ». Ajoutez matière, dimensions approximatives, couleur, budget et usage indispensables. Recherchez les termes stables puis filtrez par catégorie. Le premier tri doit créer une sélection, pas désigner un gagnant : trois à huit options suffisent généralement pour un examen sérieux.",
    "Pour chaque option, notez avant le style quatre éléments : catégorie, estimation affichée en USD, identifiant produit et images de la fiche. L’identifiant est utile car les titres peuvent être traduits, abrégés ou répétés ; il relie vos notes à la même fiche. Deux cartes semblables portant des identifiants différents représentent des annonces distinctes jusqu’à vérification contraire sur la page actuelle.",
    "Séparez preuves et suppositions. Les preuves sont le prix indiqué, le nom visible de l’option, les images et la date de vérification. « Cela ira », « la couleur correspondra », « le vendeur a du stock » ou « l’envoi sera bon marché » restent des suppositions. Cette distinction évite de donner trop de certitude à une fiche. Classez-la : à examiner, à comparer, à vérifier ou à écarter.",
    "LitBuy décrit publiquement une étape d’achat et d’arrivée en entrepôt, puis une étape de colis international. L’annuaire aide aux deux : réduisez d’abord votre sélection, puis vérifiez les informations actuelles de commande et de colis auprès du service. Le meilleur tableau n’est pas celui qui contient le plus de liens, mais celui qui garde assez de contexte pour décider sans recommencer la recherche.",
    "À retenir : utilisez le tableau pour sélectionner et documenter les options, puis vérifiez variante, prix et conditions sur la page d’achat actuelle."
  ],
  "es": [
    "Una hoja LitBuy útil reduce el tiempo necesario para encontrar, comparar y volver a abrir una ficha. No es una tienda, una garantía del vendedor ni un sistema de inventario. Una ficha puede seguir siendo útil aunque el vendedor cambie variantes o precios o retire el anuncio. El directorio inicia la decisión; antes de pagar, confirma la opción y las condiciones en la página de compra actual.",
    "Empieza por una descripción escrita: «bolso negro de hombro, correa estrecha, con espacio para teléfono y gafas» ayuda más que «bolsos». Añade material, medidas aproximadas, color, presupuesto y uso imprescindibles. Busca los términos estables y filtra por categoría. La primera búsqueda debe generar una selección, no un ganador: normalmente basta con comparar cuidadosamente de tres a ocho candidatos.",
    "Antes de valorar el estilo, registra cuatro datos de cada candidato: categoría, estimación mostrada en USD, ID del producto e imágenes de la ficha. El ID es útil porque los títulos pueden traducirse, abreviarse o repetirse; permite relacionar las notas con la misma ficha. Dos tarjetas parecidas con ID distintos son anuncios diferentes hasta que la página actual demuestre lo contrario.",
    "Separa pruebas de suposiciones. Son pruebas el precio mostrado, el nombre visible de la opción, las imágenes y la fecha de comprobación. «Me quedará bien», «coincidirá el color», «hay existencias» o «el envío será barato» son suposiciones. Esta separación evita dar una seguridad excesiva a la ficha. Marca cada opción como investigar, comparar, lista para verificar o descartar.",
    "LitBuy describe públicamente una fase de compra y llegada al almacén y otra posterior de paquete internacional. El directorio ayuda en ambas: reduce primero las opciones y después revisa en el servicio los datos actuales del pedido y del paquete. La mejor hoja no es la que tiene más enlaces, sino la que conserva contexto suficiente para decidir sin empezar de cero.",
    "Conclusión: usa la hoja para seleccionar y documentar opciones; confirma variante, precio y condiciones en la página de compra actual."
  ],
  "it": [
    "Un foglio LitBuy utile riduce il tempo necessario per trovare, confrontare e riaprire una scheda prodotto. Non è un negozio, una garanzia del venditore o un sistema di magazzino. Una scheda può restare utile anche se il venditore cambia varianti o prezzi oppure rimuove l’annuncio. La directory avvia la scelta; prima del pagamento verifica opzione e condizioni sulla pagina di acquisto aggiornata.",
    "Inizia con una descrizione scritta: «borsa nera a tracolla sottile, con spazio per telefono e occhiali» è più utile di «borse». Aggiungi materiale, misure approssimative, colore, budget e uso irrinunciabili. Cerca i termini stabili e filtra per categoria. Il primo passaggio deve creare una selezione, non un vincitore: di solito tre-otto candidati sono sufficienti per un confronto accurato.",
    "Prima dello stile registra quattro dati per ogni candidato: categoria, stima visualizzata in USD, ID prodotto e immagini nella scheda. L’ID è utile perché i titoli possono essere tradotti, abbreviati o ripetuti; collega gli appunti alla stessa scheda. Due carte simili con ID diversi sono annunci distinti finché la pagina aggiornata non dimostra il contrario.",
    "Separa prove e supposizioni. Sono prove il prezzo indicato, il nome visibile dell’opzione, le immagini e la data del controllo. «Mi starà bene», «il colore corrisponderà», «c’è disponibilità» o «la spedizione costerà poco» sono supposizioni. Distinguendole non si attribuisce alla scheda una certezza eccessiva. Segna ogni voce come da esaminare, confrontare, verificare o scartare.",
    "LitBuy descrive pubblicamente una fase di acquisto e arrivo in magazzino e una successiva di spedizione internazionale. La directory aiuta in entrambe: restringi prima le scelte, poi controlla nel servizio i dati aggiornati dell’ordine e del pacco. Il foglio migliore non ha necessariamente più link: conserva il contesto per decidere senza ricominciare la ricerca.",
    "In sintesi: usa il foglio per selezionare e documentare le opzioni; verifica variante, prezzo e condizioni sulla pagina di acquisto aggiornata."
  ],
  "pt": [
    "Uma folha LitBuy útil reduz o tempo necessário para encontrar, comparar e voltar a abrir uma ficha de produto. Não é uma loja, uma garantia do vendedor nem um sistema de stock. Uma ficha pode continuar útil quando o vendedor altera variantes ou preços ou remove o anúncio. O diretório inicia a decisão; antes de pagar, confirme a opção e as condições na página de compra atual.",
    "Comece com uma descrição escrita: «mala preta de ombro, alça estreita, com espaço para telemóvel e óculos» ajuda mais do que «malas». Acrescente material, medidas aproximadas, cor, orçamento e uso indispensáveis. Pesquise os termos estáveis e filtre por categoria. A primeira pesquisa deve criar uma seleção, não um vencedor: três a oito candidatos costumam bastar para comparar com cuidado.",
    "Antes de avaliar o estilo, registe quatro dados de cada candidato: categoria, estimativa apresentada em USD, ID do produto e imagens da ficha. O ID é útil porque os títulos podem ser traduzidos, abreviados ou repetidos; liga as notas à mesma ficha. Dois cartões semelhantes com IDs diferentes são anúncios distintos até a página atual demonstrar o contrário.",
    "Separe provas de suposições. São provas o preço indicado, o nome visível da opção, as imagens e a data da verificação. «Vai servir», «a cor será igual», «há stock» ou «o envio será barato» são suposições. Esta distinção evita dar certeza excessiva à ficha. Classifique cada opção: investigar, comparar, pronta para verificar ou descartar.",
    "A LitBuy descreve publicamente uma fase de compra e chegada ao armazém e outra posterior de envio internacional. O diretório ajuda nas duas: reduza primeiro as opções e depois reveja no serviço os dados atuais da encomenda e do pacote. A melhor folha não é a que tem mais ligações, mas a que conserva contexto suficiente para decidir sem recomeçar a pesquisa.",
    "Conclusão: use a folha para selecionar e documentar opções; confirme variante, preço e condições na página de compra atual."
  ],
  "nl": [
    "Een nuttige LitBuy-spreadsheet verkort de tijd om een product te vinden, vergelijken en terug te openen. Het is geen winkel, verkopersgarantie of voorraadsysteem. Een kaart kan bruikbaar blijven wanneer een verkoper een variant of prijs wijzigt of een aanbieding verwijdert. De gids is het begin van je keuze; controleer vóór betaling de actuele optie en voorwaarden op de aankooppagina.",
    "Begin met een schriftelijke omschrijving: ‘zwarte schoudertas, smalle band, ruimte voor telefoon en bril’ helpt meer dan ‘tassen’. Noteer onmisbaar materiaal, afmetingen bij benadering, kleur, budget en gebruik. Zoek op vaste kenmerken en filter via categorieën. De eerste ronde levert een selectie op, geen winnaar: drie tot acht kandidaten zijn doorgaans zorgvuldig te vergelijken.",
    "Leg vóór de stijlbeoordeling vier gegevens per kandidaat vast: categorie, getoonde USD-schatting, product-ID en afbeeldingen op de detailpagina. De ID is nuttig omdat titels vertaald, ingekort of herhaald kunnen zijn; zo koppel je notities aan dezelfde vermelding. Vergelijkbare kaarten met verschillende ID’s zijn aparte aanbiedingen totdat de actuele pagina anders bevestigt.",
    "Scheid bewijs van aannames. Bewijs bestaat uit de getoonde prijs, zichtbare optienaam, afbeeldingen en controledatum. ‘Het past’, ‘de kleur klopt’, ‘er is voorraad’ en ‘verzending is goedkoop’ zijn aannames. Dat onderscheid voorkomt schijnzekerheid. Markeer elke keuze als onderzoeken, vergelijken, klaar voor controle of afwijzen.",
    "LitBuy beschrijft publiekelijk een aankoop- en magazijnfase en daarna een internationale pakketfase. De gids helpt bij beide: beperk eerst je keuze en controleer daarna de actuele bestel- en pakketinformatie bij de dienst. De beste spreadsheet heeft niet de meeste links, maar genoeg context om de volgende beslissing te nemen zonder opnieuw te beginnen.",
    "Kortom: gebruik de spreadsheet om keuzes te beperken en vast te leggen; controleer actuele variant, prijs en voorwaarden op de aankooppagina."
  ],
  "pl": [
    "Przydatny arkusz LitBuy skraca czas wyszukiwania, porównywania i ponownego otwierania karty produktu. Nie jest sklepem, gwarancją sprzedawcy ani systemem stanów magazynowych. Karta może nadal pomagać, gdy sprzedawca zmieni wariant lub cenę albo usunie ofertę. Katalog rozpoczyna decyzję; przed płatnością sprawdź aktualną opcję i warunki na stronie zakupu.",
    "Zacznij od pisemnego opisu: „czarna torba na ramię, wąski pasek, miejsce na telefon i okulary” pomaga bardziej niż „torby”. Dodaj niezbędny materiał, przybliżone wymiary, kolor, budżet i zastosowanie. Szukaj stałych cech i zawężaj wyniki kategoriami. Pierwszy etap ma utworzyć listę, nie wyłonić zwycięzcę: zwykle można dokładnie porównać od trzech do ośmiu propozycji.",
    "Przed oceną wyglądu zapisz cztery informacje o każdej propozycji: kategorię, wyświetlaną kwotę szacunkową w USD, ID produktu i zdjęcia ze strony szczegółów. ID pomaga, bo tytuły bywają tłumaczone, skracane lub powtarzane; łączy notatki z tą samą kartą. Podobne karty z różnymi ID traktuj jako osobne oferty, dopóki aktualna strona nie potwierdzi inaczej.",
    "Oddziel dowody od założeń. Dowodami są podana cena, widoczna nazwa opcji, zdjęcia i data sprawdzenia. „Będzie pasować”, „kolor się zgodzi”, „produkt jest dostępny” i „wysyłka będzie tania” to założenia. Rozróżnienie zapobiega nadmiernej pewności. Oznacz wybór: do zbadania, porównania, weryfikacji albo odrzucenia.",
    "LitBuy publicznie opisuje etap zakupu i przyjęcia do magazynu oraz późniejszy etap przesyłki międzynarodowej. Katalog pomaga w obu: najpierw zawęź wybór, potem sprawdź w usłudze aktualne dane zamówienia i paczki. Najlepszy arkusz nie ma najwięcej linków, lecz zachowuje kontekst potrzebny do decyzji bez rozpoczynania badań od nowa.",
    "Wniosek: używaj arkusza do zawężania i dokumentowania wyboru; aktualny wariant, cenę i warunki sprawdź na stronie zakupu."
  ],
  "ru": [
    "Полезная таблица LitBuy сокращает время поиска, сравнения и повторного открытия карточки товара. Это не магазин, не гарантия продавца и не система складских остатков. Карточка может оставаться полезной, даже если продавец изменит вариант или цену либо удалит объявление. Каталог лишь начинает выбор; перед оплатой проверьте актуальные вариант и условия на странице покупки.",
    "Начните с письменного описания: «чёрная сумка на плечо с узким ремнём, куда помещаются телефон и очки» полезнее слова «сумки». Запишите обязательные материал, примерные размеры, цвет, бюджет и назначение. Ищите устойчивые признаки и сужайте результаты по категориям. Первый этап создаёт список, а не определяет победителя: обычно достаточно внимательно сравнить от трёх до восьми вариантов.",
    "До оценки внешнего вида сохраните четыре сведения о каждом варианте: категорию, указанную оценку в USD, ID товара и изображения на странице подробностей. ID важен, поскольку названия могут переводиться, сокращаться или повторяться; он связывает заметки с той же карточкой. Похожие карточки с разными ID считайте разными объявлениями, пока актуальная страница не подтвердит обратное.",
    "Отделяйте доказательства от предположений. Доказательства — указанная цена, видимое название варианта, изображения и дата проверки. «Подойдёт», «цвет совпадёт», «товар есть в наличии» и «доставка будет дешёвой» — предположения. Различие не позволяет считать карточку достовернее исходного объявления. Помечайте варианты: изучить, сравнить, готов к проверке или отклонить.",
    "LitBuy публично описывает этап покупки и поступления на склад, а затем этап международной посылки. Каталог помогает на обоих: сначала сузьте выбор, затем проверьте актуальные сведения о заказе и посылке в сервисе. Лучшая таблица не та, где больше ссылок, а та, где сохранено достаточно контекста для следующего решения без повторения поиска с нуля.",
    "Вывод: используйте таблицу для отбора и записи вариантов; актуальные вариант, цену и условия проверяйте на странице покупки."
  ]
};
  const articleText = (c, lang, i, p) => {
    if (i === 0 && guideOneTranslations[lang]) return guideOneTranslations[lang][p];
    const theme = (T[lang] || [])[i] || c.titles[i];
    const relatedTheme = (T[lang] || [])[(i + p + 1) % 10] || c.titles[(i + p + 1) % 10];
    const fact = c.faqA[evidence[i] % c.faqA.length];
    const supportingFact = c.faqA[(evidence[i] + p + 3) % c.faqA.length];
    const question = c.faqQ[(i * 3 + p + 1) % c.faqQ.length];
    const copy = V[lang] || P[lang];
    if (p === 0) return theme + " " + copy.scope + " " + fact;
    if (p === 1) return copy.evidence + " " + theme + " " + supportingFact;
    if (p === 2) return copy.method + " " + c.titles[i] + ": " + question;
    if (p === 3) return copy.limit + " " + relatedTheme;
    if (p === 4) return copy.action + " " + supportingFact;
    return theme + " " + fact;
  };
  const articles = (c, lang) =>
    '<section class="page-head"><p class="label">RESEARCH LIBRARY</p><h1 class="page-title">' +
    c.seo +
    '</h1></section><div class="research-wrap"><p class="research-intro">' +
    c.guide +
    '</p><nav class="research-index">' +
    c.titles
      .map(
        (t, i) =>
          '<a href="#a' +
          (i + 1) +
          '">' +
          String(i + 1).padStart(2, "0") +
          " · " +
          t +
          "</a>",
      )
      .join("") +
    "</nav>" +
    c.titles
      .map(
        (t, i) =>
          '<article class="research-article" id="a' +
          (i + 1) +
          '"><span class="article-number">GUIDE ' +
          String(i + 1).padStart(2, "0") +
          "</span><h2>" +
          t +
          "</h2>" +
          [0, 1, 2, 3, 4]
            .map((p) => "<p>" + articleText(c, lang, i, p) + "</p>")
            .join("") +
          '<div class="article-takeaway">' +
          articleText(c, lang, i, 5) +
          "</div></article>",
      )
      .join("") +
    '<section class="source-strip"><strong>Source boundary.</strong> ' +
    P[lang].limit +
    "</section></div>";

  const faqDetail = (c, lang, x, i) => {
    const pcopy = P[lang];
    return (
      "<p>" +
      c.faqA[x % c.faqA.length] +
      "</p><p>" +
      pcopy.evidence +
      "</p><p>" +
      pcopy.action +
      " " +
      ((T[lang] || [])[(x + i) % 10] || c.guide) +
      "</p>"
    );
  };
  const faqImages = [
    "assets/faq-directory-workspace.png",
    "assets/faq-images-qc.png",
    "assets/faq-cost-planning.png",
    "assets/faq-account-help.png",
  ];
  const faqBody = (c, lang) =>
    '<p class="faq-intro">' +
    c.faqIntro +
    " " +
    P[lang].scope +
    "</p>" +
    c.faqH
      .map(
        (h, g) =>
          '<section class="faq-group"><h2>' +
          h +
          '</h2><figure class="faq-visual"><img src="' +
          faqImages[g] +
          '" alt=""></figure><div class="faq-details">' +
          [0, 1, 2, 3]
            .map((i) => {
              const x = g * 2 + (i % 2);
              const q = i < 2 ? c.faqQ[x] : c.titles[g * 2 + (i % 2)];
              return (
                "<details " +
                (g === 0 && i === 0 ? "open" : "") +
                "><summary>" +
                q +
                "</summary>" +
                faqDetail(c, lang, x, i) +
                "</details>"
              );
            })
            .join("") +
          "</div></section>",
      )
      .join("") +
    '<section class="source-strip"><strong>Source boundary.</strong> ' +
    P[lang].limit +
    "</section>";
  const faq = (c, lang) =>
    '<section class="page-head"><p class="label">FAQ · FACTS FIRST</p><h1 class="page-title">' +
    c.faq +
    '</h1></section><div class="faq-wrap">' +
    faqBody(c, lang) +
    "</div>";
  const fillCatalog = (lang, c) => {
    const u = U[lang];
    if (!u) return;
    document.querySelectorAll(".catalog-facts span").forEach((e, i) => {
      if (u[i]) e.textContent = u[i];
    });
    document
      .querySelectorAll(".catalog-actions .button")
      .forEach((e) => (e.textContent = u[3]));
    document.querySelectorAll(".catalog-text-link").forEach((e) => {
      e.textContent = u[4] + " →";
    });
    document
      .querySelectorAll(".catalog-open")
      .forEach((e) => (e.textContent = u[5]));
    document.querySelectorAll(".catalog-pager a").forEach((e) => {
      if (e.textContent.includes("Previous")) e.textContent = "← " + u[7];
      if (e.textContent.includes("Next")) e.textContent = u[8] + " →";
    });
    const si = document.querySelector("#catalogSearchInput");
    if (si) si.placeholder = c.search;
  };
  function render(lang) {
    const c = L[lang];
    const main = document.querySelector("main");
    if (!main) return;
    if (lang === "en") {
      if (localizedHome) {
        location.reload();
        return;
      }
      source.forEach((html, el) => {
        el.innerHTML = html;
      });
      return;
    }
    if (!c) return;
    if (document.querySelector("#homeCategories")) {
      fillHome(c, lang);
      localizedHome = true;
    }
    fillCatalog(lang, c);
    if (
      location.pathname.endsWith("faq.html") ||
      location.pathname.endsWith("/faq")
    ) {
      remember(main);
      main.innerHTML = faq(c, lang);
    }
    if (
      location.pathname.endsWith("seo-articles.html") ||
      location.pathname.endsWith("/seo-articles")
    ) {
      remember(main);
      main.innerHTML = articles(c, lang);
    }
    document
      .querySelectorAll("footer p")
      .forEach((e) => (e.textContent = c.local));
    document
      .querySelectorAll("footer .links a")
      .forEach((e, i) => (e.textContent = i === 0 ? c.open : c.read));
  }
  window.addEventListener("litbuy-language", (e) => render(e.detail.lang));
  document.addEventListener("litbuy-home-faq-ready", () => {
    const lang = sessionStorage.getItem("litbuy-language") || "en";
    const c = L[lang];
    const homeFaqContent = document.querySelector("#homeFaqContent");
    if (c && homeFaqContent) homeFaqContent.innerHTML = faqBody(c, lang);
  });
})();
