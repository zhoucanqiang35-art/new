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
  const guideTwoTranslations = {
  "de": [
    "Eine Produkt-ID ist ein Zuordnungsschlüssel, kein Zertifikat. In diesem Verzeichnis verbindet sie einen Katalogeintrag mit dem passenden LitBuy-Kaufziel. Damit lässt sich derselbe Artikel zuverlässiger als anhand eines gekürzten Titels wiederfinden, teilen oder dokumentieren. Die ID beweist weder Bestand noch gleiche Materialien aller Optionen oder dass das Foto genau das gelieferte Exemplar zeigt.",
    "Verwenden Sie die ID zu Beginn und am Ende der Prüfung. Notieren Sie sie mit dem Datum und vergleichen Sie sie unmittelbar vor dem Kauf mit der aktuellen Produktseite. Bei ähnlichem Titel, aber anderer ID halten Sie inne: Es kann ein anderer Verkäufer, ein Ersatzangebot oder eine andere Variantenfamilie sein. Verlassen Sie sich bei ähnlichen Produkten nie allein auf ein Bild.",
    "Eine übersichtliche Notiz enthält fünf Angaben: Produkt-ID, angezeigten Titel, gewählte Option, Zahl der sichtbaren Quellbilder und Datum der letzten Prüfung. Ändert sich die Seite, können Sie Ihre Beobachtung belegen. Bei größenabhängigen Artikeln ergänzen Sie den Bezug zur Größentabelle und das benötigte Maß. Bei Farben speichern Sie die Optionsbezeichnung statt einer eigenen Abkürzung.",
    "Eine ID ist kein Echtheitsnachweis. LitBuys öffentlicher Hinweis auf Produktseiten beschreibt Suche, Einkauf und Weiterleitung für Waren von Drittplattformen und erklärt, dass Qualität und Echtheit nicht geprüft werden können. ‘Die ID stimmt mit meiner Notiz überein’ ist hilfreich; ‘die ID beweist Echtheit’ ist nicht belegt. Beschränken Sie Aussagen auf die tatsächliche Funktion der Kennung.",
    "Auch nach der Bestellung hilft die ID, ein Lagerfoto mit ursprünglichen Angebotsbildern zu vergleichen oder eine Frage an den Support zu erklären. Sie ist jedoch weder Bestellnummer noch Paketnummer oder Zustellnachweis. Erfassen Sie diese Nummern getrennt, sobald die Plattform sie bereitstellt. So bleibt das Protokoll über alle Schritte hinweg genau.",
    "Fazit: Die Produkt-ID identifiziert einen Weg und erleichtert Aufzeichnungen. Sie bestätigt weder Bestand, Qualität, Echtheit, Passform noch Endkosten."
  ],
  "fr": [
    "Un identifiant produit est une clé de routage, pas un certificat. Dans cet annuaire, il relie une fiche à sa destination d’achat LitBuy correspondante. Il permet de retrouver le même article, de partager une option ou de noter une décision plus sûrement qu’un titre abrégé. Il ne prouve ni le stock, ni l’identité des matières entre options, ni que l’objet photographié sera celui reçu.",
    "Utilisez l’identifiant au début et à la fin de la vérification. Notez-le avec la date, puis comparez-le à la page produit actuelle juste avant l’achat. Si le titre est semblable mais l’identifiant différent, arrêtez-vous : il peut s’agir d’un autre vendeur, d’une annonce de remplacement ou d’une autre famille de variantes. Pour des produits ressemblants, ne vous fiez jamais à la seule image.",
    "Une note claire comporte cinq éléments : identifiant, titre affiché, option choisie, nombre d’images source visibles et date de dernière vérification. Si la page change, vous pourrez décrire ce que vous avez vu. Pour une taille importante, ajoutez la référence du tableau et la mesure nécessaire. Pour les couleurs, gardez le libellé de l’option plutôt qu’une abréviation personnelle.",
    "Ne faites pas de l’identifiant une preuve d’authenticité. L’avis public des pages produit LitBuy décrit la recherche, l’achat et la réexpédition de biens provenant de plateformes tierces et indique que qualité et authenticité ne peuvent pas être vérifiées. ‘Cet identifiant correspond à mes notes’ est utile ; ‘il prouve l’authenticité’ n’est pas établi. Limitez les affirmations au rôle réel de l’identifiant.",
    "Après commande, l’identifiant aide encore à comparer une photo d’entrepôt aux images initiales ou à expliquer une question au support. Il ne remplace toutefois ni le numéro de commande, ni celui du colis, ni une preuve de livraison. Enregistrez-les séparément lorsque la plateforme les fournit, afin de garder un suivi exact à chaque étape.",
    "À retenir : l’identifiant désigne une route et facilite le suivi ; il ne garantit ni stock, qualité, authenticité, taille ni coût final."
  ],
  "es": [
    "Un ID de producto es una clave de ruta, no un certificado. En este directorio conecta una ficha del catálogo con su destino de compra LitBuy correspondiente. Es más fiable que un título abreviado para volver al mismo artículo, compartir una opción o registrar una decisión. No demuestra existencias, que todas las variantes tengan los mismos materiales ni que la unidad fotografiada sea la recibida.",
    "Usa el ID al principio y al final de la revisión. Anótalo junto a la fecha y compáralo con la página actual justo antes de comprar. Si el título se parece pero el ID cambia, detente: puede ser otro vendedor, un anuncio de reemplazo o una familia de variantes distinta. Ante productos similares, no dependas solo de una imagen.",
    "Una nota clara tiene cinco campos: ID, título mostrado, opción elegida, número de imágenes de origen visibles y fecha de última comprobación. Si la página cambia, podrás describir lo observado. Para artículos sensibles a la talla, añade la referencia de la tabla y la medida necesaria. Para colores, guarda el nombre exacto de la opción en vez de una abreviatura propia.",
    "No conviertas el ID en una prueba de autenticidad. El aviso público de las páginas de producto de LitBuy describe servicios de búsqueda, compra y reenvío de bienes de plataformas externas e indica que no puede verificar calidad ni autenticidad. ‘El ID coincide con mis notas’ es útil; ‘el ID demuestra autenticidad’ no está justificado. Limita las afirmaciones a la función real del identificador.",
    "Tras el pedido, el ID también ayuda a comparar una foto de almacén con las imágenes originales o a explicar una consulta al soporte. Pero no es un número de pedido, de paquete ni una prueba de entrega. Registra esos números por separado cuando la plataforma los proporcione, para mantener un historial preciso en cada etapa.",
    "Conclusión: el ID identifica una ruta y facilita el registro; no valida existencias, calidad, autenticidad, talla ni coste final."
  ],
  "it": [
    "Un ID prodotto è una chiave di collegamento, non un certificato. In questa directory collega una scheda del catalogo alla corrispondente destinazione di acquisto LitBuy. È più affidabile di un titolo abbreviato per ritrovare lo stesso articolo, condividere una scelta o registrare una decisione. Non dimostra disponibilità, identità dei materiali tra opzioni né che l’unità fotografata sia quella ricevuta.",
    "Usa l’ID all’inizio e alla fine della verifica. Annotalo con la data e confrontalo con la pagina aggiornata subito prima dell’acquisto. Se il titolo è simile ma l’ID cambia, fermati: potrebbe trattarsi di un altro venditore, di un annuncio sostitutivo o di una diversa famiglia di varianti. Con prodotti simili non affidarti alla sola immagine.",
    "Una nota ordinata contiene cinque campi: ID, titolo visualizzato, opzione scelta, numero di immagini originali visibili e data dell’ultimo controllo. Se la pagina cambia, potrai descrivere ciò che hai visto. Per articoli sensibili alla taglia aggiungi il riferimento alla tabella e la misura necessaria. Per i colori conserva l’etichetta dell’opzione anziché un’abbreviazione personale.",
    "Non trasformare l’ID in una prova di autenticità. L’avviso pubblico sulle pagine prodotto LitBuy descrive ricerca, acquisto e inoltro di merci da piattaforme terze e dichiara di non poter verificare qualità o autenticità. ‘L’ID corrisponde ai miei appunti’ è utile; ‘l’ID dimostra l’autenticità’ non è supportato. Limita le affermazioni alla reale funzione dell’identificatore.",
    "Dopo l’ordine l’ID aiuta ancora a confrontare una foto del magazzino con le immagini originali o a spiegare una domanda all’assistenza. Non è però un numero d’ordine, un numero di pacco o una prova di consegna. Registra questi dati separatamente quando la piattaforma li fornisce, mantenendo accurato lo storico in ogni fase.",
    "Conclusione: l’ID identifica un percorso e facilita le registrazioni; non conferma disponibilità, qualità, autenticità, taglia o costo finale."
  ],
  "pt": [
    "Um ID de produto é uma chave de encaminhamento, não um certificado. Neste diretório liga uma ficha do catálogo ao destino de compra LitBuy correspondente. É mais fiável do que um título abreviado para voltar ao artigo, partilhar uma opção ou registar uma decisão. Não prova stock, materiais iguais entre variantes nem que a unidade fotografada seja a recebida.",
    "Use o ID no início e no fim da revisão. Anote-o com a data e compare-o com a página atual imediatamente antes de comprar. Se o título for parecido mas o ID diferente, pare: pode ser outro vendedor, um anúncio substituto ou outra família de variantes. Perante produtos semelhantes, nunca dependa apenas da imagem.",
    "Uma nota clara tem cinco campos: ID, título apresentado, opção escolhida, número de imagens de origem visíveis e data da última verificação. Se a página mudar, poderá descrever o que viu. Para artigos sensíveis ao tamanho, acrescente a referência da tabela e a medida necessária. Para cores, guarde o nome da opção em vez de uma abreviatura pessoal.",
    "Não transforme o ID em prova de autenticidade. O aviso público nas páginas de produto da LitBuy descreve pesquisa, compra e reencaminhamento de bens de plataformas externas e diz não poder verificar qualidade ou autenticidade. ‘O ID corresponde às minhas notas’ é útil; ‘o ID prova autenticidade’ não está fundamentado. Limite as afirmações à função real do identificador.",
    "Depois da encomenda, o ID ainda ajuda a comparar uma foto do armazém com imagens originais ou a explicar uma dúvida ao apoio. Mas não é número de encomenda, número de pacote nem prova de entrega. Registe esses dados separadamente quando a plataforma os fornecer, mantendo o histórico correto em cada fase.",
    "Conclusão: o ID identifica uma rota e facilita os registos; não valida stock, qualidade, autenticidade, tamanho nem custo final."
  ],
  "nl": [
    "Een product-ID is een routecode, geen certificaat. In deze gids verbindt die een catalogusvermelding met de bijbehorende LitBuy-aankoopbestemming. Voor terugvinden, delen en noteren is de ID betrouwbaarder dan een ingekorte titel. Hij bewijst geen voorraad, gelijke materialen tussen opties of dat het gefotografeerde exemplaar wordt geleverd.",
    "Gebruik de ID aan het begin en einde van je controle. Noteer hem met de datum en vergelijk hem vlak vóór aankoop met de actuele productpagina. Lijkt de titel gelijk maar verschilt de ID, pauzeer dan: het kan om een andere verkoper, vervangende aanbieding of variantengroep gaan. Vertrouw bij gelijkende producten nooit alleen op een afbeelding.",
    "Een duidelijke notitie bevat vijf velden: product-ID, getoonde titel, gekozen optie, aantal zichtbare bronbeelden en laatste controledatum. Verandert de pagina, dan kun je vastleggen wat je zag. Voeg bij maatgevoelige artikelen de maattabel en gewenste maat toe. Bewaar bij kleuren de exacte optienaam in plaats van een eigen afkorting.",
    "Maak van de ID geen echtheidsbewijs. LitBuy vermeldt publiekelijk op productpagina’s dat het zoeken, aankopen en doorsturen voor goederen van derden aanbiedt en kwaliteit of echtheid niet kan verifiëren. ‘Deze ID komt overeen met mijn notities’ is bruikbaar; ‘de ID bewijst echtheid’ is niet onderbouwd. Beperk claims tot de werkelijke functie.",
    "Na bestelling helpt de ID om een magazijnfoto met originele aanbiedingsbeelden te vergelijken of een vraag aan support uit te leggen. Hij is geen bestelnummer, pakketnummer of bewijs van bezorging. Noteer die afzonderlijk zodra het platform ze verstrekt, zodat het overzicht in elke fase klopt.",
    "Conclusie: een product-ID herkent een route en helpt bij registratie, maar bevestigt geen voorraad, kwaliteit, echtheid, maat of eindprijs."
  ],
  "pl": [
    "ID produktu jest kluczem kierującym do oferty, a nie certyfikatem. W tym katalogu łączy wpis z odpowiednią stroną zakupu LitBuy. Pozwala pewniej niż skrócony tytuł wrócić do przedmiotu, udostępnić wybór lub zapisać decyzję. Nie potwierdza dostępności, tych samych materiałów wariantów ani tego, że sfotografowany egzemplarz zostanie dostarczony.",
    "Użyj ID na początku i końcu sprawdzania. Zapisz je wraz z datą, a bezpośrednio przed zakupem porównaj z aktualną stroną produktu. Gdy tytuł jest podobny, lecz ID inne, zatrzymaj się: może chodzić o innego sprzedawcę, ofertę zastępczą lub inną grupę wariantów. Przy podobnych produktach nie polegaj wyłącznie na zdjęciu.",
    "Czytelna notatka zawiera pięć pól: ID, wyświetlany tytuł, wybraną opcję, liczbę widocznych zdjęć źródłowych i datę ostatniego sprawdzenia. Jeśli strona się zmieni, opiszesz to, co widziałeś. Przy rzeczach zależnych od rozmiaru dodaj tabelę i potrzebny wymiar. Dla kolorów zachowaj nazwę opcji zamiast własnego skrótu.",
    "Nie traktuj ID jako dowodu autentyczności. Publiczna informacja na stronach produktów LitBuy opisuje wyszukiwanie, zakup i przekazywanie towarów z platform zewnętrznych oraz podaje, że jakość i autentyczność nie mogą zostać zweryfikowane. ‘ID zgadza się z notatką’ jest użyteczne; ‘ID dowodzi autentyczności’ nie ma podstaw. Ogranicz twierdzenia do rzeczywistej funkcji identyfikatora.",
    "Po zamówieniu ID nadal pomaga porównać zdjęcie magazynowe z pierwotnymi zdjęciami lub wyjaśnić pytanie obsłudze. Nie jest jednak numerem zamówienia, paczki ani potwierdzeniem dostawy. Zapisuj je osobno, gdy platforma je udostępni, aby zachować dokładny rejestr na każdym etapie.",
    "Wniosek: ID wskazuje trasę i ułatwia notatki, lecz nie potwierdza dostępności, jakości, autentyczności, rozmiaru ani kosztu końcowego."
  ],
  "ru": [
    "ID товара — это ключ перехода, а не сертификат. В каталоге он связывает запись с соответствующей страницей покупки LitBuy. Для повторного поиска, передачи варианта или записи решения он надёжнее сокращённого названия. ID не доказывает наличие, одинаковые материалы вариантов или то, что сфотографированный экземпляр будет доставлен.",
    "Используйте ID в начале и конце проверки. Запишите его вместе с датой и сравните с актуальной страницей непосредственно перед покупкой. Если название похоже, а ID отличается, остановитесь: это может быть другой продавец, заменённое объявление или иная группа вариантов. При похожих товарах не полагайтесь только на изображение.",
    "Понятная запись содержит пять полей: ID, показанное название, выбранный вариант, число видимых исходных изображений и дату последней проверки. Если страница изменится, вы сможете описать увиденное. Для товаров, где важен размер, добавьте ссылку на таблицу и нужное измерение. Для цвета сохраните название варианта, а не личное сокращение.",
    "Не превращайте ID в признак подлинности. Публичное уведомление LitBuy на страницах товаров описывает поиск, покупку и пересылку товаров сторонних площадок и сообщает, что качество и подлинность проверить нельзя. «ID совпадает с моей записью» полезно; «ID доказывает подлинность» не обосновано. Ограничивайте утверждения фактической функцией идентификатора.",
    "После заказа ID помогает сравнить складское фото с исходными изображениями или объяснить вопрос поддержке. Но это не номер заказа, посылки или подтверждение доставки. Записывайте их отдельно, когда площадка предоставит сведения, чтобы журнал оставался точным на каждом этапе.",
    "Вывод: ID определяет путь и упрощает записи, но не подтверждает наличие, качество, подлинность, размер или итоговую стоимость."
  ]
};
  const guideThreeTranslations = {
  "de": [
    "Bilder vermitteln schnell Gewissheit, können aber überinterpretiert werden. Die obere Bildreihe auf der Detailseite stammt vom Händler und zeigt das Angebot. Sie hilft bei Design, Farben, Details und Zubehör. Sie beweist nicht, dass ein bestimmtes Exemplar verpackt wurde, und zeigt weder den inneren Aufbau noch genaues Gewicht oder das Gefühl im Alltag.",
    "QC-Bilder erfüllen eine andere Aufgabe. LitBuy erklärt öffentlich, bei Ankunft im Lager Prüffotos bereitzustellen. Sie können stärkere Hinweise auf einen eingegangenen Artikel liefern, müssen aber sorgfältig gelesen werden: Ist Vorderseite, Etikett, Beschlag, Maß, Verpackung oder ein Mangel zu sehen? Eine Nahaufnahme ersetzt keine vollständige Prüfung. Mehrere Ansichten können offensichtliche Unterschiede zeigen, garantieren aber weder Leistung noch Echtheit.",
    "Diese Unterseite unterscheidet die Bilder: Die auswählbaren oberen Miniaturen sind Händlerbilder; die lange Galerie darunter zeigt bevorzugt QC-Bilder. Hat der importierte Eintrag keine QC-Bilder, verwendet sie stattdessen dieselbe Händlerbildreihe und erfindet keine Prüfung. Lesen Sie Bildtexte und Zusammenhang, bevor Sie ein Bild als Lagerbeleg ansehen.",
    "Vergleichen Sie mit einer Liste: Zuerst Silhouette, Nähte, Teile, Taschen und Verschlüsse; danach die Größe anhand echter Maße; anschließend Oberfläche, Reißverschlüsse und Farbgrenzen. Halten Sie zuletzt fest, was nicht sichtbar ist. Diese offenen Punkte helfen mehr als ein hastiges Ja oder Nein. Lesen Sie LitBuys Hinweis, dass Qualität und Echtheit nicht verifiziert werden können, zusammen mit seiner Beschreibung der QC-Fotos.",
    "Ist eine authentische Herkunft unerlässlich, nutzen Sie einen autorisierten Verkaufskanal, statt sie aus Bildern abzuleiten. QC-Fotos können sichtbaren Zustand und Übereinstimmung mit einer Option dokumentieren, aber Herkunft, Zusammensetzung, Haltbarkeit und spätere Leistung nicht zertifizieren. Das ist die Grenze des Belegs, kein Fehler des Fotos.",
    "Fazit: Angebotsbilder zeigen die beworbene Ware; QC-Fotos können den eingegangenen Artikel dokumentieren. Keines beweist für sich die Echtheit."
  ],
  "fr": [
    "Les images donnent vite une impression de certitude, mais on peut les interpréter excessivement. La série supérieure de la fiche provient du vendeur et montre l’annonce. Elle aide à examiner dessin, couleurs, finitions et accessoires. Elle ne prouve pas qu’un exemplaire précis a été emballé et ne révèle ni construction cachée, ni poids exact, ni sensation à l’usage.",
    "Les images QC ont un autre rôle. LitBuy indique publiquement fournir des photos d’inspection à l’arrivée en entrepôt. Elles peuvent mieux documenter un article reçu, mais demandent une lecture attentive : voit-on la face, l’étiquette, une pièce métallique, une mesure, l’emballage ou un défaut ? Un gros plan ne remplace pas une inspection complète. Une série peut révéler des différences évidentes sans garantir performance ni authenticité.",
    "Ce sous-site distingue les images : les miniatures supérieures sont celles du vendeur ; la longue galerie inférieure privilégie les images QC. Si la fiche importée n’en contient pas, elle reprend les images du même vendeur au lieu d’inventer une inspection. Lisez les légendes et le contexte avant de considérer une image comme une preuve d’entrepôt.",
    "Comparez avec une liste : d’abord silhouette, coutures, panneaux, poches et fermetures ; puis échelle à partir de mesures réelles ; enfin texture, tirettes et limites des couleurs. Notez ce qui reste invisible : cette liste est plus utile qu’un oui ou non précipité. Lisez l’avis de LitBuy sur l’impossibilité de vérifier qualité et authenticité avec sa description des photos QC.",
    "Si une origine authentique est indispensable, utilisez un circuit de vente agréé plutôt que de la déduire des images. Les photos QC peuvent documenter l’état visible et la conformité à l’option choisie, mais ne certifient ni origine, composition, durabilité ou performance future. C’est une limite de la preuve, pas un défaut de la photo.",
    "À retenir : les photos de l’annonce montrent ce qui est proposé ; les photos QC peuvent documenter l’article reçu. Aucune ne prouve à elle seule l’authenticité."
  ],
  "es": [
    "Las imágenes crean rápidamente sensación de certeza, pero pueden interpretarse en exceso. La serie superior de la ficha procede del vendedor y muestra el anuncio. Ayuda a estudiar diseño, colores, acabados y accesorios. No demuestra que se haya empaquetado una unidad concreta ni muestra la construcción oculta, el peso exacto o cómo se siente en el uso diario.",
    "Las imágenes QC tienen otra función. LitBuy afirma públicamente que proporciona fotos de inspección cuando los artículos llegan al almacén. Pueden aportar mejores indicios sobre un artículo recibido, pero hay que leerlas con cuidado: ¿se ve el frontal, la etiqueta, una pieza, una medida, el embalaje o un defecto? Un primer plano no equivale a una inspección completa. Una secuencia puede revelar diferencias evidentes sin garantizar rendimiento ni autenticidad.",
    "Este sitio distingue las imágenes: las miniaturas superiores seleccionables son del vendedor y la galería larga inferior da prioridad a fotos QC. Si la ficha importada no incluye QC, utiliza las mismas imágenes del vendedor en lugar de inventar una inspección. Lee los pies de foto y el contexto antes de considerar una imagen prueba de almacén.",
    "Compara con una lista: primero silueta, costuras, paneles, bolsillos y cierres; después escala mediante medidas reales; por último textura, tiradores y límites de color. Anota lo que no se ve: esa lista es más útil que un sí o no apresurado. Lee el aviso de LitBuy sobre la imposibilidad de verificar calidad y autenticidad junto con su descripción de las fotos QC.",
    "Si necesitas origen auténtico, recurre a un canal de venta autorizado en vez de deducirlo de las imágenes. Las fotos QC pueden documentar el estado visible y la correspondencia con la opción elegida, pero no certifican origen, composición, durabilidad ni rendimiento futuro. Es un límite de la prueba, no un defecto de la foto.",
    "Conclusión: las fotos del anuncio muestran lo ofrecido; las fotos QC pueden documentar lo recibido. Ninguna demuestra por sí sola la autenticidad."
  ],
  "it": [
    "Le immagini danno rapidamente un’impressione di certezza, ma possono essere interpretate troppo. La serie superiore della scheda proviene dal venditore e mostra l’annuncio. Aiuta a valutare design, colori, dettagli e accessori. Non prova che sia stata imballata una specifica unità e non mostra costruzione interna, peso esatto o sensazione nell’uso quotidiano.",
    "Le immagini QC hanno un altro ruolo. LitBuy dichiara pubblicamente di fornire foto di ispezione all’arrivo in magazzino. Possono documentare meglio un articolo ricevuto, ma vanno lette con attenzione: si vedono fronte, etichetta, ferramenta, misura, imballaggio o difetto? Un dettaglio non equivale a un’ispezione completa. Una sequenza può mostrare differenze evidenti senza garantire prestazioni o autenticità.",
    "Il sito distingue le immagini: le miniature superiori selezionabili provengono dal venditore; la lunga galleria inferiore privilegia quelle QC. Se la scheda importata non dispone di foto QC, riutilizza la stessa serie del venditore senza inventare un’ispezione. Leggi didascalie e contesto prima di considerare un’immagine prova del magazzino.",
    "Confronta con una lista: prima sagoma, cuciture, pannelli, tasche e chiusure; poi proporzioni usando misure reali; infine texture, tiralampo e confini dei colori. Annota ciò che non è visibile: è più utile di un sì o no affrettato. Leggi l’avviso LitBuy sull’impossibilità di verificare qualità e autenticità insieme alla descrizione del servizio fotografico QC.",
    "Se l’origine autentica è essenziale, usa un canale di vendita autorizzato invece di dedurla dalle immagini. Le foto QC possono documentare condizioni visibili e conformità all’opzione scelta, ma non certificano origine, composizione, durata o prestazioni future. È un limite della prova, non un difetto della fotografia.",
    "Conclusione: le foto dell’annuncio mostrano ciò che viene offerto; quelle QC possono documentare ciò che è arrivato. Nessuna prova da sola l’autenticità."
  ],
  "pt": [
    "As imagens criam rapidamente uma sensação de certeza, mas podem ser interpretadas em excesso. A série superior da ficha vem do vendedor e mostra o anúncio. Ajuda a observar desenho, cores, acabamentos e acessórios. Não prova que uma unidade específica foi embalada e não mostra construção interna, peso exato ou sensação no uso diário.",
    "As imagens QC têm outra função. A LitBuy afirma publicamente fornecer fotografias de inspeção à chegada ao armazém. Podem documentar melhor um artigo recebido, mas exigem leitura cuidadosa: vê-se frente, etiqueta, ferragem, medida, embalagem ou defeito? Um detalhe não equivale a uma inspeção completa. Uma sequência pode revelar diferenças evidentes sem garantir desempenho ou autenticidade.",
    "Este site distingue as imagens: as miniaturas superiores são do vendedor e a galeria longa inferior dá prioridade às imagens QC. Se a ficha importada não tiver QC, usa a mesma série do vendedor em vez de inventar uma inspeção. Leia as legendas e o contexto antes de considerar uma imagem prova do armazém.",
    "Compare com uma lista: primeiro silhueta, costuras, painéis, bolsos e fechos; depois escala com medidas reais; por fim textura, puxadores e limites das cores. Anote o que não está visível: essa lista ajuda mais do que um sim ou não apressado. Leia o aviso da LitBuy sobre a impossibilidade de verificar qualidade e autenticidade juntamente com a descrição das fotos QC.",
    "Se a origem autêntica for essencial, use um canal de venda autorizado em vez de a deduzir das imagens. As fotos QC podem documentar estado visível e conformidade com a opção escolhida, mas não certificam origem, composição, durabilidade ou desempenho futuro. É um limite da prova, não um defeito da fotografia.",
    "Conclusão: fotos do anúncio mostram o que é oferecido; fotos QC podem documentar o que chegou. Nenhuma prova por si só a autenticidade."
  ],
  "nl": [
    "Beelden geven snel een gevoel van zekerheid, maar kunnen te veel worden geïnterpreteerd. De bovenste reeks op de detailpagina komt van de verkoper en toont de aanbieding. Ze helpt bij ontwerp, kleuren, afwerking en accessoires. Ze bewijst niet dat een specifiek exemplaar is ingepakt en toont geen verborgen constructie, exact gewicht of gevoel bij dagelijks gebruik.",
    "QC-beelden hebben een andere rol. LitBuy zegt publiekelijk inspectiefoto’s te verstrekken wanneer artikelen in het magazijn aankomen. Ze kunnen sterker bewijs van een ontvangen artikel bieden, maar moeten zorgvuldig worden bekeken: zie je voorkant, label, beslag, maat, verpakking of een gebrek? Eén close-up is geen volledige inspectie. Een reeks kan duidelijke verschillen tonen zonder prestaties of echtheid te garanderen.",
    "Deze site onderscheidt de beelden: de selecteerbare miniaturen bovenaan zijn verkopersbeelden; de lange galerij eronder geeft voorrang aan QC-beelden. Heeft de geïmporteerde vermelding geen QC-beelden, dan gebruikt ze dezelfde verkopersreeks in plaats van een inspectie te verzinnen. Lees bijschriften en context voordat je een beeld als magazijnbewijs ziet.",
    "Vergelijk met een checklist: eerst silhouet, naden, panelen, zakken en sluitingen; daarna schaal aan de hand van echte afmetingen; ten slotte textuur, ritstrekkers en kleurgrenzen. Noteer wat niet zichtbaar is: dat helpt meer dan een overhaast ja of nee. Lees LitBuy’s melding dat kwaliteit en echtheid niet kunnen worden geverifieerd naast de uitleg over QC-foto’s.",
    "Is authentieke herkomst essentieel, gebruik dan een erkend verkoopkanaal in plaats van die uit beelden af te leiden. QC-foto’s kunnen zichtbare staat en overeenstemming met de gekozen optie vastleggen, maar certificeren geen herkomst, samenstelling, duurzaamheid of toekomstige prestaties. Dat is een grens van het bewijs, geen fout van de foto.",
    "Conclusie: aanbiedingsfoto’s tonen wat wordt aangeboden; QC-foto’s kunnen vastleggen wat aankwam. Geen van beide bewijst op zichzelf echtheid."
  ],
  "pl": [
    "Zdjęcia szybko dają poczucie pewności, ale można je nadinterpretować. Górna seria na stronie szczegółów pochodzi od sprzedawcy i pokazuje ofertę. Pomaga ocenić projekt, kolory, wykończenie i akcesoria. Nie dowodzi spakowania konkretnego egzemplarza ani nie pokazuje ukrytej konstrukcji, dokładnej wagi czy odczuć podczas używania.",
    "Zdjęcia QC pełnią inną funkcję. LitBuy publicznie informuje o zdjęciach kontrolnych po przyjęciu towaru do magazynu. Mogą lepiej dokumentować otrzymany przedmiot, ale trzeba je czytać uważnie: czy widać przód, etykietę, okucia, pomiar, opakowanie lub wadę? Jedno zbliżenie nie zastępuje pełnej kontroli. Seria może ujawnić różnice, ale nie gwarantuje działania ani autentyczności.",
    "Ta strona rozróżnia obrazy: wybierane miniatury u góry pochodzą od sprzedawcy, a długa galeria poniżej preferuje zdjęcia QC. Jeśli importowany wpis nie ma zdjęć QC, używa tej samej serii sprzedawcy zamiast tworzyć fikcyjną kontrolę. Przeczytaj podpisy i kontekst, zanim uznasz obraz za dowód magazynowy.",
    "Porównuj z listą kontrolną: najpierw kształt, szwy, panele, kieszenie i zamknięcia; potem skalę według rzeczywistych wymiarów; na końcu fakturę, suwaki i granice kolorów. Zapisz, czego nie widać: taka lista jest użyteczniejsza niż pośpieszne tak lub nie. Informację LitBuy o braku możliwości weryfikacji jakości i autentyczności czytaj razem z opisem zdjęć QC.",
    "Jeśli autentyczne pochodzenie jest konieczne, korzystaj z autoryzowanego kanału sprzedaży zamiast wnioskować ze zdjęć. Fotografie QC mogą dokumentować widoczny stan i zgodność z wybraną opcją, ale nie certyfikują pochodzenia, składu, trwałości ani przyszłego działania. To ograniczenie dowodu, nie wada zdjęcia.",
    "Wniosek: zdjęcia oferty pokazują proponowany towar, a zdjęcia QC mogą dokumentować otrzymany przedmiot. Żadne samo w sobie nie dowodzi autentyczności."
  ],
  "ru": [
    "Изображения быстро создают ощущение определённости, но их легко переоценить. Верхняя серия на странице подробностей взята у продавца и показывает объявление. Она помогает изучить дизайн, цвета, отделку и аксессуары. Она не доказывает упаковку конкретного экземпляра и не показывает скрытую конструкцию, точный вес или ощущения при использовании.",
    "У QC-фотографий другая роль. LitBuy публично сообщает, что предоставляет фотографии проверки при поступлении товара на склад. Они могут лучше документировать полученный предмет, но их нужно внимательно изучать: видны ли передняя сторона, этикетка, фурнитура, замер, упаковка или дефект? Один крупный план не равен полной проверке. Серия может показать различия, но не гарантирует работу или подлинность.",
    "Этот сайт разделяет изображения: выбираемые миниатюры сверху принадлежат продавцу, а длинная галерея ниже отдаёт приоритет QC-фото. Если в импортированной записи их нет, используются те же изображения продавца, а не вымышленная проверка. Прочитайте подписи и контекст, прежде чем считать изображение складским доказательством.",
    "Сверяйтесь со списком: сначала силуэт, швы, панели, карманы и застёжки; затем масштаб по реальным размерам; наконец фактура, бегунки молний и границы цветов. Запишите то, чего не видно: этот список полезнее поспешного ответа да или нет. Читайте уведомление LitBuy о невозможности проверить качество и подлинность вместе с описанием QC-фотографий.",
    "Если подтверждённое происхождение необходимо, используйте авторизованный канал продаж вместо выводов по фото. QC-фотографии могут документировать видимое состояние и соответствие выбранному варианту, но не удостоверяют происхождение, состав, долговечность или будущую работу. Это предел доказательства, а не недостаток фотографии.",
    "Вывод: фотографии объявления показывают предложенный товар; QC-фотографии могут документировать полученный. Ни те ни другие сами по себе не доказывают подлинность."
  ]
};
  const guideFourTranslations = {
  "de": [
    "Viele vermeidbare Fehlkäufe entstehen bei der Optionswahl, nicht beim Hauptbild. Händler verwenden oft dieselben Fotos für Farben, Größen, Materialien oder Sets. Der Titel kann eine Reihe nennen; die Optionsliste enthält die eigentliche Auswahl. Notieren Sie vor dem Kauf die genaue Bezeichnung auf der aktuellen Seite: ‘klein, schwarz, matte Beschläge’ ist hilfreicher als ‘schwarze Tasche’.",
    "Prüfen Sie, ob Optionen dasselbe Foto verwenden, ob sich der Preis ändert und ob die Bezeichnung Farbe, Größe, Version oder Menge meint. Lösen Sie Unklarheiten nicht durch Raten anhand einer Miniatur: Bilder können wiederverwendet oder durch Licht verfärbt sein. Dokumentieren Sie die Unsicherheit und wählen Sie bei entscheidenden fehlenden Angaben ein klareres Angebot.",
    "Vergleichen Sie Kleidung nach Maßen statt nach vertrauten Buchstabengrößen. Messen Sie ein gut passendes Kleidungsstück und vergleichen Sie Schulter, Brust, Länge, Taille, Leibhöhe und Innenbein mit der Tabelle. Bei Schuhen hilft die gemessene Fußlänge. Bei Taschen prüfen Sie Breite, Höhe, Tiefe, Öffnung und Riemenlänge. Ein gestyltes Foto zeigt nicht, ob Ihre Dinge hineinpassen.",
    "Nutzen Sie ein Nachrichtenfeld, falls vorhanden, nur für eine präzise sachliche Frage; eine Nachricht garantiert weder Änderung noch Antwort. ‘Bitte Option B, Größe 38 bestätigen’ ist klarer als ‘die gute Version senden’. Speichern Sie Optionstext und Prüfzeitpunkt; die Verfügbarkeit kann sich vor der Zahlung ändern.",
    "Größe, Farbe und Ausführung bleiben veränderlich. Das Spreadsheet bewahrt Ihre Fragen, doch nur die aktuelle Kaufseite zeigt den momentanen Selektor. Prüfen Sie unmittelbar vor der Zahlung erneut und behandeln Sie fehlende Maße als unbekannt statt als wahrscheinliche Passform.",
    "Fazit: Wählen Sie anhand exakter Optionsbezeichnungen und Maße, nicht anhand gemeinsam genutzter Bilder oder vertrauter Größenbuchstaben."
  ],
  "fr": [
    "Beaucoup d’erreurs évitables se produisent dans le choix d’option, pas sur l’image principale. Un vendeur peut utiliser les mêmes photos pour plusieurs couleurs, tailles, matières ou lots. Le titre décrit parfois une gamme ; le sélecteur porte la décision. Avant achat, notez le libellé exact sur la page actuelle : « petit, noir, métal mat » est plus précis que « sac noir ».",
    "Vérifiez si les options partagent les photos, si leur prix change et si le libellé désigne couleur, taille, version ou quantité. Ne devinez pas à partir d’une miniature : l’image peut être réutilisée ou modifiée par l’éclairage. Notez le doute et choisissez une annonce plus claire si l’information est déterminante.",
    "Pour les vêtements, comparez les mesures plutôt que les lettres habituelles. Mesurez un vêtement qui vous va et comparez épaules, poitrine, longueur, taille, hauteur de fourche et entrejambe au tableau. Pour les chaussures, mesurez si possible le pied. Pour un sac, vérifiez largeur, hauteur, profondeur, ouverture et longueur de bandoulière. Une photo portée ne dit pas si vos affaires entrent.",
    "Utilisez un champ de message, s’il existe, pour une demande factuelle précise, sans supposer une réponse ou une modification garantie. « Confirmer l’option B, taille 38 » est plus clair que « envoyer la bonne version ». Conservez le texte et la date de vérification ; la disponibilité peut changer avant paiement.",
    "Taille, couleur et configuration évoluent. Le tableau conserve vos questions, mais seul le sélecteur actuel montre les options disponibles. Vérifiez juste avant paiement et considérez une mesure absente comme inconnue, non comme une taille probablement adaptée.",
    "À retenir : choisissez selon les libellés exacts et les mesures, pas selon une photo partagée ou une lettre familière."
  ],
  "es": [
    "Muchos errores evitables ocurren al elegir opciones, no en la imagen principal. Un vendedor puede usar las mismas fotos para varios colores, tallas, materiales o conjuntos. El título puede describir una gama; la lista contiene la decisión real. Antes de comprar, anota la etiqueta exacta en la página actual: «pequeño, negro, herrajes mates» es más preciso que «bolso negro».",
    "Comprueba si las opciones comparten fotos, si cambia el precio y si el texto indica color, talla, versión o cantidad. No resuelvas dudas adivinando por una miniatura: la imagen puede reutilizarse o verse alterada por la luz. Anota la incertidumbre y elige un anuncio más claro cuando el dato sea decisivo.",
    "Para ropa compara medidas en lugar de letras habituales. Mide una prenda que te quede bien y compara hombros, pecho, largo, cintura, tiro y entrepierna con la tabla. Para calzado, mide el pie si es posible. Para bolsos, revisa ancho, alto, profundidad, abertura y caída de la correa. Una foto de estilo no muestra si caben tus objetos.",
    "Si existe un campo de mensaje, úsalo para una petición concreta y factual, sin suponer que garantiza respuesta o cambio. «Confirma opción B, talla 38» es más claro que «envía la buena versión». Guarda el texto y la fecha de comprobación; la disponibilidad puede cambiar antes del pago.",
    "Talla, color y configuración cambian. La hoja conserva tus preguntas, pero solo el selector actual muestra las opciones vigentes. Compruébalo justo antes de pagar y considera desconocida una medida ausente, en vez de asumir que encajará.",
    "Conclusión: elige por etiquetas exactas y medidas, no por fotos compartidas o letras de talla familiares."
  ],
  "it": [
    "Molti errori evitabili avvengono nel selettore, non nell’immagine principale. Un venditore può usare le stesse foto per colori, taglie, materiali o set diversi. Il titolo può indicare una gamma; l’elenco contiene la scelta effettiva. Prima dell’acquisto annota l’etichetta esatta sulla pagina aggiornata: «piccola, nera, ferramenta opaca» è più preciso di «borsa nera».",
    "Verifica se le opzioni condividono le foto, se il prezzo cambia e se il nome indica colore, taglia, versione o quantità. Non risolvere un dubbio indovinando dalla miniatura: la foto può essere riutilizzata o alterata dalla luce. Registra l’incertezza e scegli un annuncio più chiaro quando il dettaglio è decisivo.",
    "Per l’abbigliamento confronta le misure invece delle lettere familiari. Misura un capo che ti veste bene e confronta spalle, torace, lunghezza, vita, cavallo e interno gamba con la tabella. Per le scarpe misura il piede, se possibile. Per una borsa controlla larghezza, altezza, profondità, apertura e lunghezza della tracolla. Una foto indossata non mostra se gli oggetti entrano.",
    "Se disponibile, usa il campo messaggio per una richiesta precisa e fattuale, senza presumere una risposta o modifica garantita. «Confermare opzione B, taglia 38» è più chiaro di «mandare la versione buona». Conserva testo e data della verifica: la disponibilità può cambiare prima del pagamento.",
    "Taglia, colore e configurazione possono cambiare. Il foglio conserva le domande, ma solo il selettore aggiornato mostra le opzioni correnti. Ricontrolla subito prima di pagare e considera sconosciuta una misura mancante, senza presumere che vesta bene.",
    "Conclusione: scegli in base a etichette e misure esatte, non a foto condivise o lettere di taglia familiari."
  ],
  "pt": [
    "Muitos erros evitáveis acontecem no seletor de opções, não na imagem principal. Um vendedor pode usar as mesmas fotos para cores, tamanhos, materiais ou conjuntos diferentes. O título pode indicar uma gama; a lista contém a escolha efetiva. Antes de comprar, registe o nome exato na página atual: «pequena, preta, ferragens mate» é mais preciso do que «mala preta».",
    "Verifique se as opções partilham fotos, se o preço muda e se o nome indica cor, tamanho, versão ou quantidade. Não resolva dúvidas adivinhando pela miniatura: a imagem pode ser reutilizada ou alterada pela luz. Registe a incerteza e escolha um anúncio mais claro quando o detalhe for decisivo.",
    "Na roupa compare medidas em vez de letras familiares. Meça uma peça que lhe sirva e compare ombros, peito, comprimento, cintura, gancho e entrepernas com a tabela. No calçado meça o pé, se possível. Numa mala confira largura, altura, profundidade, abertura e comprimento da alça. Uma foto de estilo não mostra se os seus objetos cabem.",
    "Se existir um campo de mensagem, use-o para um pedido factual preciso, sem presumir resposta ou alteração garantida. «Confirme a opção B, tamanho 38» é mais claro do que «envie a versão boa». Guarde o texto e a data da verificação; a disponibilidade pode mudar antes do pagamento.",
    "Tamanho, cor e configuração podem mudar. A folha conserva as perguntas, mas só o seletor atual mostra as opções vigentes. Verifique imediatamente antes de pagar e trate uma medida ausente como desconhecida, sem presumir que servirá.",
    "Conclusão: escolha pelas etiquetas e medidas exatas, não por fotos partilhadas ou letras de tamanho familiares."
  ],
  "nl": [
    "Veel vermijdbare fouten ontstaan bij de optiekeuze, niet bij de hoofdfoto. Een verkoper kan dezelfde beelden gebruiken voor meerdere kleuren, maten, materialen of sets. De titel kan een reeks noemen; de keuzelijst bevat de werkelijke beslissing. Noteer vóór aankoop de exacte optie op de actuele pagina: ‘klein, zwart, mat beslag’ is duidelijker dan ‘zwarte tas’.",
    "Controleer of opties foto’s delen, of de prijs verandert en of de naam kleur, maat, versie of aantal betekent. Los onduidelijkheid niet op door naar een miniatuur te gokken: beelden kunnen worden hergebruikt of door licht anders lijken. Noteer de onzekerheid en kies een duidelijkere aanbieding als het detail doorslaggevend is.",
    "Vergelijk kleding op afmetingen in plaats van bekende maatletters. Meet een goed passend kledingstuk en vergelijk schouders, borst, lengte, taille, kruis en binnenbeen met de tabel. Meet bij schoenen zo mogelijk de voetlengte. Controleer bij tassen breedte, hoogte, diepte, opening en riemlengte. Een gestileerde foto toont niet of je spullen passen.",
    "Gebruik een beschikbaar berichtveld alleen voor een precieze feitelijke vraag en verwacht niet dat een bericht antwoord of wijziging garandeert. ‘Bevestig optie B, maat 38’ is duidelijker dan ‘stuur de goede versie’. Bewaar optietekst en controletijd; beschikbaarheid kan vóór betaling veranderen.",
    "Maat, kleur en uitvoering kunnen veranderen. De spreadsheet bewaart je vragen, maar alleen de actuele keuzelijst toont de huidige opties. Controleer vlak vóór betaling opnieuw en behandel een ontbrekende maat als onbekend in plaats van aan te nemen dat het past.",
    "Conclusie: kies op basis van exacte optienamen en afmetingen, niet op gedeelde foto’s of vertrouwde maatletters."
  ],
  "pl": [
    "Wiele możliwych do uniknięcia błędów powstaje przy wyborze opcji, nie przy oglądaniu głównego zdjęcia. Sprzedawca może używać tych samych zdjęć dla kolorów, rozmiarów, materiałów lub zestawów. Tytuł może opisywać serię, a lista opcji zawiera właściwy wybór. Przed zakupem zapisz dokładną nazwę z aktualnej strony: ‘mała, czarna, matowe okucia’ mówi więcej niż ‘czarna torba’.",
    "Sprawdź, czy opcje korzystają z tych samych zdjęć, czy cena się zmienia i czy nazwa oznacza kolor, rozmiar, wersję czy liczbę. Nie zgaduj na podstawie miniatury: zdjęcie może być ponownie użyte lub zmienione przez światło. Zapisz niepewność i wybierz jaśniejszą ofertę, gdy szczegół ma decydujące znaczenie.",
    "Ubrania porównuj według wymiarów, nie znajomych liter rozmiaru. Zmierz dobrze pasującą rzecz i porównaj ramiona, klatkę, długość, talię, stan i długość nogawki z tabelą. Przy butach zmierz stopę, jeśli to możliwe. Przy torbie sprawdź szerokość, wysokość, głębokość, otwór i długość paska. Stylizowane zdjęcie nie pokaże, czy rzeczy się zmieszczą.",
    "Jeśli dostępne jest pole wiadomości, użyj go do precyzyjnego pytania o fakt, bez zakładania gwarantowanej odpowiedzi lub zmiany. ‘Potwierdź opcję B, rozmiar 38’ jest jaśniejsze niż ‘wyślij dobrą wersję’. Zachowaj tekst opcji i czas sprawdzenia; dostępność może zmienić się przed płatnością.",
    "Rozmiar, kolor i konfiguracja mogą się zmieniać. Arkusz przechowuje pytania, ale tylko aktualny selektor pokazuje obecne opcje. Sprawdź go tuż przed płatnością, a brakujący wymiar uznaj za nieznany zamiast zakładać dopasowanie.",
    "Wniosek: wybieraj według dokładnych nazw opcji i wymiarów, a nie wspólnych zdjęć lub znajomych liter rozmiaru."
  ],
  "ru": [
    "Многих ошибок можно избежать: они возникают при выборе варианта, а не при просмотре главного фото. Продавец может использовать одну серию для разных цветов, размеров, материалов или комплектов. Название может описывать всю линейку, а точный выбор находится в списке. Перед покупкой запишите точную подпись на актуальной странице: «маленькая, чёрная, матовая фурнитура» точнее, чем «чёрная сумка».",
    "Проверьте, общие ли фотографии у вариантов, меняется ли цена и означает ли название цвет, размер, версию или количество. Не угадывайте по миниатюре: изображение могут использовать повторно, а освещение меняет цвет. Запишите неопределённость и выберите более понятное объявление, если деталь решающая.",
    "Для одежды сравнивайте измерения, а не привычные буквенные размеры. Измерьте подходящую вещь и сравните плечи, грудь, длину, талию, высоту посадки и внутренний шов с таблицей. Для обуви по возможности измерьте стопу. Для сумки проверьте ширину, высоту, глубину, отверстие и длину ремня. Постановочное фото не покажет, поместятся ли ваши вещи.",
    "Если поле сообщения доступно, используйте его для точного фактического вопроса, не предполагая гарантированного ответа или изменения. «Подтвердите вариант B, размер 38» яснее, чем «отправьте хорошую версию». Сохраните текст и время проверки: наличие может измениться до оплаты.",
    "Размер, цвет и конфигурация могут меняться. Таблица сохраняет вопросы, но только актуальный селектор показывает текущие варианты. Проверьте его непосредственно перед оплатой, а отсутствующее измерение считайте неизвестным, не предполагая, что вещь подойдёт.",
    "Вывод: выбирайте по точным названиям вариантов и измерениям, а не по общим фото или привычным буквам размера."
  ]
};
  const guideFiveTranslations = {
  "de": [
    "Wenn Angebote ähnlich aussehen, ist der Preis ein Anlass zur Prüfung, kein Urteil. Ein niedriger Betrag kann eine andere Größe, ein anderes Material, ein Teilset, einen anderen Händler oder einen veralteten Preis bedeuten. Vergleichen Sie zuerst gleiche Option, ähnliche Maße, angegebenes Material und Menge; sonst ist der Unterschied nicht aussagekräftig.",
    "Erstellen Sie eine Vergleichskarte mit Produkt-ID, genauer Option, angezeigter USD-Schätzung, Bildzahl, wichtigen Maßen, angegebenem Material, sichtbarem Lieferumfang und Prüfdatum. Ergänzen Sie eine offene Frage: ‘günstiger, aber keine Maße’ ist hilfreicher als ‘vielleicht’. So bleibt Unsicherheit sichtbar.",
    "Belohnen Sie professionelle Fotos nicht automatisch. Händlerbilder können bearbeitet, zwischen Shops geteilt oder vorteilhaft beleuchtet sein. Prüfen Sie die innere Übereinstimmung: Passen Titel und Optionsnamen zusammen, entsprechen Maße der Form, erscheinen Details aus mehreren Winkeln? Ein weniger attraktives Angebot mit klaren Angaben kann leichter zu beurteilen sein.",
    "Führen Sie Produktpreis und spätere Paketkosten getrennt. LitBuy beschreibt Inlandskauf und internationalen Versand als separate Schritte; der Schätzer fragt nach Ziel, Gewicht und Maßen. Eine Preisersparnis kann durch Paketmerkmale oder gewählte Dienste aufgebraucht werden. Bis aktuelle Zahlen vorliegen, notieren Sie ‘unbekannt’ statt eine Summe zu erfinden.",
    "Oft ist das Angebot mit den klarsten Informationen besser geeignet als das mit dem niedrigsten Anfangspreis. Eine eindeutige Konfiguration, passende Maße, aussagekräftige Bilder und eine zum Budget passende Restunsicherheit können das Risiko verringern.",
    "Fazit: Vergleichen Sie Gleiches mit Gleichem, notieren Sie fehlende Angaben und trennen Sie Produktpreis und spätere Paketentscheidung."
  ],
  "fr": [
    "Quand plusieurs annonces se ressemblent, le prix invite à vérifier, il ne tranche pas. Un montant inférieur peut correspondre à une autre taille, matière, partie de lot, vendeur ou ancien prix. Comparez d’abord la même option, des dimensions, une matière déclarée et une quantité similaires ; sinon l’écart n’a pas de sens.",
    "Créez une fiche comparative : identifiant, option exacte, estimation USD affichée, nombre d’images, mesures clés, matière annoncée, éléments visibles et date de contrôle. Ajoutez une question ouverte : « moins cher, mais dimensions absentes » est plus utile que « peut-être ». L’incertitude reste ainsi visible.",
    "Ne récompensez pas automatiquement une photographie soignée. Les images peuvent être retouchées, partagées entre boutiques ou éclairées avantageusement. Vérifiez la cohérence : titre et options concordent-ils, les dimensions correspondent-elles à la forme, les détails apparaissent-ils sous plusieurs angles ? Une annonce moins séduisante mais précise peut être plus facile à évaluer.",
    "Séparez le prix de l’article du coût ultérieur du colis. LitBuy décrit l’achat intérieur et l’envoi international comme deux étapes ; son estimateur demande destination, poids et dimensions. Une économie sur l’article peut disparaître selon le colis ou les services choisis. Sans chiffres actuels, indiquez « inconnu » plutôt qu’un total inventé.",
    "Le meilleur choix est souvent l’option la mieux renseignée plutôt que la moins chère au départ. Configuration explicite, dimensions adaptées, images utiles et incertitude compatible avec votre budget peuvent réduire le risque.",
    "À retenir : comparez des options équivalentes, notez les informations manquantes et séparez le prix de l’article de la décision de colis."
  ],
  "es": [
    "Cuando varios anuncios parecen iguales, el precio invita a investigar, no decide. Un importe menor puede corresponder a otra talla, material, parte de un conjunto, vendedor o precio antiguo. Compara primero la misma opción y medidas, material declarado y cantidad similares; de otro modo la diferencia no es significativa.",
    "Crea una ficha comparativa: ID, opción exacta, estimación USD mostrada, número de imágenes, medidas clave, material declarado, contenido visible y fecha de comprobación. Añade una duda: «más barato, pero sin medidas» sirve más que «quizá». Así la incertidumbre queda visible.",
    "No premies automáticamente una fotografía cuidada. Las imágenes pueden estar editadas, compartidas entre tiendas o iluminadas favorablemente. Comprueba coherencia: ¿coinciden título y opciones, corresponden las medidas con la forma y se repiten detalles desde varios ángulos? Un anuncio menos vistoso pero claro puede ser más fácil de evaluar.",
    "Separa el precio del artículo del coste posterior del paquete. LitBuy describe compra nacional y envío internacional como etapas distintas; su estimador pide destino, peso y dimensiones. Un ahorro en el producto puede desaparecer por las características del paquete o los servicios elegidos. Sin cifras actuales, escribe «desconocido» en vez de inventar un total.",
    "A menudo conviene la opción con información más clara, no la más barata inicialmente. Una configuración explícita, medidas adecuadas, imágenes útiles e incertidumbre compatible con el presupuesto pueden reducir el riesgo.",
    "Conclusión: compara opciones equivalentes, registra datos ausentes y separa el precio del producto de la decisión posterior de envío."
  ],
  "it": [
    "Quando più annunci sembrano simili, il prezzo invita a indagare, non decide. Una cifra inferiore può indicare un’altra taglia, materiale, parte di un set, venditore o un prezzo vecchio. Confronta prima la stessa opzione e misure, materiale dichiarato e quantità simili; altrimenti la differenza non è significativa.",
    "Crea una scheda: ID, opzione esatta, stima USD mostrata, numero di immagini, misure principali, materiale dichiarato, contenuto visibile e data del controllo. Aggiungi una domanda aperta: «meno caro, ma senza misure» è più utile di «forse». L’incertezza rimane visibile.",
    "Non premiare automaticamente foto curate. Le immagini possono essere modificate, condivise tra negozi o illuminate in modo favorevole. Verifica la coerenza: titolo e opzioni concordano, le misure corrispondono alla forma, i dettagli compaiono da più angoli? Un annuncio meno appariscente ma chiaro può essere più facile da valutare.",
    "Tieni separati prezzo dell’articolo e costo successivo del pacco. LitBuy descrive acquisto nazionale e spedizione internazionale come fasi distinte; lo stimatore richiede destinazione, peso e dimensioni. Il risparmio iniziale può essere annullato dalle caratteristiche del pacco o dai servizi scelti. Senza cifre aggiornate scrivi «sconosciuto», non inventare un totale.",
    "Spesso la scelta migliore è quella con informazioni più chiare, non il prezzo iniziale più basso. Configurazione esplicita, misure adatte, immagini utili e incertezza compatibile con il budget possono ridurre il rischio.",
    "Conclusione: confronta opzioni equivalenti, annota le informazioni mancanti e separa prezzo del prodotto e decisione successiva sul pacco."
  ],
  "pt": [
    "Quando vários anúncios parecem iguais, o preço convida à investigação, não decide. Um valor inferior pode significar outro tamanho, material, parte de um conjunto, vendedor ou preço antigo. Compare primeiro a mesma opção e medidas, material indicado e quantidade semelhantes; caso contrário a diferença não é significativa.",
    "Crie uma ficha comparativa: ID, opção exata, estimativa USD apresentada, número de imagens, medidas principais, material indicado, conteúdo visível e data de verificação. Acrescente uma dúvida: «mais barato, mas sem medidas» é mais útil do que «talvez». Assim a incerteza fica visível.",
    "Não premie automaticamente fotos cuidadas. As imagens podem ser editadas, partilhadas entre lojas ou iluminadas favoravelmente. Verifique a coerência: título e opções concordam, as medidas correspondem à forma e os detalhes aparecem em vários ângulos? Um anúncio menos vistoso mas claro pode ser mais fácil de avaliar.",
    "Separe o preço do artigo do custo posterior do pacote. A LitBuy descreve compra nacional e envio internacional como etapas distintas; o estimador pede destino, peso e dimensões. A poupança inicial pode desaparecer devido às características do pacote ou serviços escolhidos. Sem valores atuais, escreva «desconhecido» em vez de inventar um total.",
    "Muitas vezes a melhor opção é a mais clara, não a mais barata inicialmente. Configuração explícita, medidas adequadas, imagens úteis e incerteza compatível com o orçamento podem reduzir o risco.",
    "Conclusão: compare opções equivalentes, registe dados em falta e separe o preço do produto da decisão posterior de envio."
  ],
  "nl": [
    "Als aanbiedingen op elkaar lijken, is de prijs een reden om te onderzoeken, geen oordeel. Een lager bedrag kan een andere maat, materiaal, deelset, verkoper of oude prijs betekenen. Vergelijk eerst dezelfde optie en vergelijkbare afmetingen, opgegeven materiaal en aantallen; anders is het verschil niet betekenisvol.",
    "Maak een vergelijkingskaart met product-ID, exacte optie, getoonde USD-schatting, aantal beelden, kernmaten, opgegeven materiaal, zichtbare inhoud en controledatum. Voeg een open vraag toe: ‘goedkoper, maar geen maten’ helpt meer dan ‘misschien’. Zo blijft onzekerheid zichtbaar.",
    "Beloon verzorgde fotografie niet automatisch. Bronbeelden kunnen bewerkt, tussen winkels gedeeld of gunstig belicht zijn. Controleer samenhang: passen titel en opties bij elkaar, kloppen maten met de vorm en zijn details vanuit meerdere hoeken zichtbaar? Een minder opvallende maar duidelijke aanbieding kan eenvoudiger te beoordelen zijn.",
    "Houd productprijs en latere pakketkosten apart. LitBuy beschrijft binnenlandse aankoop en internationale verzending als afzonderlijke fasen; de schatter vraagt bestemming, gewicht en afmetingen. Een besparing kan verdwijnen door pakketkenmerken of gekozen diensten. Schrijf zonder actuele cijfers ‘onbekend’ in plaats van een totaal te verzinnen.",
    "De beste keuze is vaak de duidelijkst beschreven optie, niet de laagste startprijs. Een expliciete uitvoering, passende maten, bruikbare beelden en onzekerheid die binnen je budget past kunnen het risico verminderen.",
    "Conclusie: vergelijk gelijke opties, noteer ontbrekende gegevens en scheid productprijs van de latere pakketbeslissing."
  ],
  "pl": [
    "Gdy oferty wyglądają podobnie, cena zachęca do sprawdzenia, ale nie rozstrzyga. Niższa kwota może oznaczać inny rozmiar, materiał, część zestawu, sprzedawcę albo dawną cenę. Najpierw porównaj tę samą opcję oraz podobne wymiary, deklarowany materiał i ilość; inaczej różnica nie ma znaczenia.",
    "Utwórz kartę porównawczą: ID, dokładna opcja, wyświetlana kwota szacunkowa USD, liczba zdjęć, kluczowe wymiary, deklarowany materiał, widoczna zawartość i data kontroli. Dopisz pytanie: ‘taniej, ale brak wymiarów’ pomaga bardziej niż ‘może’. Niepewność pozostaje widoczna.",
    "Nie premiuj automatycznie efektownych zdjęć. Obrazy źródłowe mogą być edytowane, współdzielone przez sklepy lub korzystnie oświetlone. Sprawdź spójność: czy tytuł pasuje do opcji, wymiary do kształtu, a szczegóły widać z kilku stron? Mniej efektowną, lecz jasną ofertę łatwiej ocenić.",
    "Oddziel cenę produktu od późniejszego kosztu paczki. LitBuy opisuje zakup krajowy i wysyłkę międzynarodową jako osobne etapy; kalkulator wymaga miejsca docelowego, wagi i wymiarów. Oszczędność może zniknąć przez cechy paczki lub wybrane usługi. Bez aktualnych danych wpisz ‘nieznane’, zamiast wymyślać sumę.",
    "Najlepsza jest często opcja z najczytelniejszymi informacjami, nie najniższą ceną początkową. Jasna konfiguracja, odpowiednie wymiary, przydatne obrazy i niepewność mieszcząca się w budżecie mogą ograniczyć ryzyko.",
    "Wniosek: porównuj równoważne opcje, zapisuj braki i oddziel cenę produktu od późniejszej decyzji o paczce."
  ],
  "ru": [
    "Когда объявления похожи, цена — повод для проверки, а не готовый вывод. Низкая сумма может означать другой размер, материал, часть комплекта, продавца или устаревшую цену. Сначала сравните одинаковый вариант, сходные размеры, заявленный материал и количество; иначе разница не показательна.",
    "Создайте карточку сравнения: ID, точный вариант, показанная оценка USD, число изображений, основные размеры, заявленный материал, видимая комплектация и дата проверки. Добавьте открытый вопрос: «дешевле, но размеры не указаны» полезнее, чем «возможно». Так неопределённость остаётся заметной.",
    "Не оценивайте предложение выше только за красивые фото. Исходные изображения могут редактироваться, использоваться разными магазинами или сниматься при выгодном освещении. Проверьте согласованность: совпадают ли название и варианты, соответствуют ли размеры форме, видны ли детали с разных сторон? Менее эффектное, но понятное объявление бывает легче оценить.",
    "Отдельно записывайте цену товара и будущую стоимость посылки. LitBuy описывает внутреннюю покупку и международную отправку как разные этапы; калькулятор запрашивает направление, вес и размеры. Экономию могут перекрыть особенности посылки или выбранные услуги. Без актуальных цифр укажите «неизвестно», не придумывая итог.",
    "Часто лучше вариант с наиболее ясной информацией, а не самой низкой начальной ценой. Чёткая конфигурация, подходящие размеры, полезные изображения и допустимая для бюджета неопределённость могут снизить риск.",
    "Вывод: сравнивайте равноценные варианты, записывайте пробелы и отделяйте цену товара от решения о будущей посылке."
  ]
};
  const guideSixTranslations = {
  "de": [
    "QC-Fotos helfen am meisten, wenn vorher feststeht, welche Fragen sie beantworten sollen. Speichern Sie das Händlerbild des wichtigen Merkmals und erstellen Sie eine kurze Prüfliste: richtige Option, ungefähre Farbe, sichtbare Maße, wichtige Beschläge und enthaltene Teile. Die Liste soll konkret sein, aber keine unmögliche Garantie voraussetzen.",
    "Wenn Prüfbilder vorliegen, klären Sie zuerst die Identität: Vergleichen Sie Produkt-ID, Optionsnotizen und grobe Form. Prüfen Sie dann vom Großen zum Kleinen: Modell, Farbfamilie, Taschen, Verschlüsse und Riemen vor Nähten, Textur oder Druckausrichtung. Ein deutlicher Größenfehler, fehlendes Teil, kaputter Verschluss oder falsche Option ist wichtiger als ein kleiner Lichtunterschied.",
    "Fotos haben blinde Flecken: Geruch, Haptik, innere Verstärkung, exaktes Gewicht, Haltbarkeit und alle Seiten sind möglicherweise nicht sichtbar. Ein nicht sichtbarer Fehler ist kein Beweis für Fehlerfreiheit; ein schwacher Fleck kann Schatten oder Kompression sein. Ist ein entscheidendes Merkmal nicht zu sehen, bleibt es ungeklärt.",
    "Formulieren Sie Supportanfragen sachlich: Artikel, erwartete Option, beobachtete Abweichung und zugehöriges Bild. Behaupten Sie keine Echtheit ohne unabhängige Belege und passende Richtlinie. LitBuy erklärt, Qualität oder Echtheit fremder Waren nicht verifizieren zu können. QC betrifft daher sichtbaren Zustand und Übereinstimmung, keine Zertifizierung.",
    "LitBuys veröffentlichter Ablauf trennt Lagerankunft und spätere internationale Sendung. Nutzen Sie die Lagerzeit als Prüfpunkt: Sichten Sie vorhandene Belege, verstehen Sie die nächste Paketentscheidung und reichen Sie erst ein, wenn die verbleibende Unsicherheit für Sie akzeptabel ist.",
    "Fazit: QC prüft sichtbare Merkmale; verborgene Qualität, langfristige Leistung und Echtheit sind damit nicht garantiert."
  ],
  "fr": [
    "Les photos QC sont plus utiles si vous décidez d’abord à quelles questions elles doivent répondre. Conservez l’image vendeur montrant le détail important et préparez une liste : bonne option, couleur générale, mesures visibles si possible, pièces métalliques et éléments inclus. Soyez précis sans supposer une garantie impossible.",
    "Lorsque les images existent, vérifiez d’abord l’identité : identifiant, notes sur l’option et silhouette générale. Allez ensuite du général au détail : modèle, famille de couleur, poches, fermetures et sangles avant coutures, texture ou alignement d’un imprimé. Une mauvaise taille visible, une pièce manquante, une fermeture cassée ou une mauvaise option compte davantage qu’une légère variation de lumière.",
    "Les photos ont des angles morts : odeur, toucher, renfort interne, poids exact, durabilité ou toutes les faces peuvent manquer. L’absence d’un défaut visible ne prouve pas son absence ; une marque légère peut être une ombre ou une compression. Si un détail décisif n’est pas visible, laissez-le non résolu.",
    "Adressez au support une demande factuelle : article, option attendue, différence observée et image. Ne revendiquez pas l’authenticité sans preuve indépendante et politique applicable. LitBuy dit ne pouvoir vérifier qualité ou authenticité des biens tiers ; le QC porte donc sur l’état visible et la conformité, pas sur une certification.",
    "Le parcours public de LitBuy sépare l’arrivée à l’entrepôt de l’expédition internationale. Profitez du stockage pour examiner les éléments disponibles, comprendre la prochaine décision de colis et ne soumettre que lorsque l’incertitude restante vous convient.",
    "À retenir : le QC examine les éléments visibles ; il ne garantit ni qualité cachée, ni performance durable, ni authenticité."
  ],
  "es": [
    "Las fotos QC son más útiles si decides antes qué deben responder. Guarda la imagen del vendedor que mejor muestra el detalle importante y prepara una lista: opción correcta, color general, medidas visibles si es posible, herrajes y piezas incluidas. Sé concreto sin suponer una garantía imposible.",
    "Cuando haya imágenes, comprueba primero la identidad: ID, notas de la opción y silueta general. Después revisa de lo grande a lo pequeño: modelo, familia de color, bolsillos, cierres y correas antes de costuras, textura o alineación del estampado. Una talla claramente incorrecta, pieza ausente, cierre roto u opción equivocada importa más que una leve diferencia de luz.",
    "Las fotos tienen puntos ciegos: pueden no mostrar olor, tacto, refuerzo interior, peso exacto, durabilidad o todos los lados. No ver un defecto no demuestra que no exista; una marca tenue puede ser sombra o compresión. Si un detalle decisivo no se ve, déjalo sin resolver.",
    "Solicita ayuda con hechos: artículo, opción esperada, diferencia observada e imagen. No afirmes autenticidad sin pruebas independientes y una política aplicable. LitBuy dice que no puede verificar calidad ni autenticidad de bienes de terceros; el QC se centra en estado visible y correspondencia, no en certificar.",
    "El proceso público de LitBuy separa la llegada al almacén del envío internacional posterior. Usa el almacenamiento como punto de control: revisa las pruebas disponibles, comprende la siguiente decisión del paquete y presenta el envío solo cuando aceptes la incertidumbre restante.",
    "Conclusión: el QC revisa características visibles; no garantiza calidad oculta, rendimiento duradero ni autenticidad."
  ],
  "it": [
    "Le foto QC sono più utili se stabilisci prima a quali domande devono rispondere. Salva l’immagine del venditore che mostra il dettaglio importante e prepara una lista: opzione corretta, colore generale, misure visibili se possibile, ferramenta e parti incluse. Sii preciso senza presumere una garanzia impossibile.",
    "Quando le immagini sono disponibili, verifica prima l’identità: ID, appunti sull’opzione e sagoma generale. Procedi dal grande al piccolo: modello, famiglia di colore, tasche, chiusure e cinghie prima di cuciture, texture o allineamento della stampa. Taglia visibilmente errata, pezzo mancante, chiusura rotta o opzione sbagliata meritano più attenzione di una lieve differenza di luce.",
    "Le foto hanno punti ciechi: potrebbero non mostrare odore, tatto, rinforzi interni, peso esatto, durata o tutti i lati. Non vedere un difetto non prova che sia assente; un segno lieve può essere ombra o compressione. Se una caratteristica decisiva non è visibile, lasciala irrisolta.",
    "Fai richieste fattuali all’assistenza: articolo, opzione attesa, differenza osservata e immagine. Non affermare autenticità senza prove indipendenti e una politica applicabile. LitBuy dichiara di non poter verificare qualità o autenticità di beni terzi; il QC riguarda condizioni visibili e conformità, non certificazione.",
    "Il percorso pubblico LitBuy separa l’arrivo in magazzino dalla successiva spedizione internazionale. Usa la permanenza come punto di controllo: esamina le prove disponibili, comprendi la prossima decisione sul pacco e invia solo quando l’incertezza restante è accettabile.",
    "Conclusione: il QC controlla caratteristiche visibili; non garantisce qualità nascosta, durata o autenticità."
  ],
  "pt": [
    "As fotos QC são mais úteis quando decide primeiro que perguntas devem responder. Guarde a imagem do vendedor que melhor mostra o detalhe importante e prepare uma lista: opção correta, cor geral, medidas visíveis se possível, ferragens e peças incluídas. Seja específico sem presumir uma garantia impossível.",
    "Quando houver imagens, confirme primeiro a identidade: ID, notas da opção e silhueta geral. Depois avance do maior para o menor: modelo, família de cor, bolsos, fechos e alças antes de costuras, textura ou alinhamento da estampa. Tamanho visivelmente errado, peça em falta, fecho partido ou opção incorreta merece mais atenção do que uma pequena diferença de luz.",
    "As fotos têm pontos cegos: podem não mostrar cheiro, toque, reforço interno, peso exato, durabilidade ou todos os lados. Não ver uma falha não prova que ela não existe; uma marca ligeira pode ser sombra ou compressão. Se um detalhe decisivo não estiver visível, mantenha-o por resolver.",
    "Faça pedidos factuais ao apoio: artigo, opção esperada, diferença observada e imagem. Não afirme autenticidade sem prova independente e política aplicável. A LitBuy diz não poder verificar qualidade ou autenticidade de bens de terceiros; o QC trata de estado visível e conformidade, não de certificação.",
    "O processo público da LitBuy separa a chegada ao armazém do envio internacional posterior. Use a permanência como ponto de controlo: reveja as provas disponíveis, compreenda a próxima decisão do pacote e submeta apenas quando a incerteza restante for aceitável.",
    "Conclusão: o QC examina características visíveis; não garante qualidade oculta, desempenho duradouro nem autenticidade."
  ],
  "nl": [
    "QC-foto’s helpen het meest als je vooraf bepaalt welke vragen ze moeten beantwoorden. Bewaar de verkopersfoto van het belangrijke kenmerk en maak een lijst: juiste optie, globale kleur, zichtbare maten indien mogelijk, belangrijk beslag en meegeleverde onderdelen. Wees specifiek zonder een onmogelijke garantie te verwachten.",
    "Controleer bij beschikbare beelden eerst de identiteit: product-ID, optienotities en globaal silhouet. Werk daarna van groot naar klein: model, kleurgroep, zakken, sluitingen en banden vóór naden, textuur of uitlijning van een print. Een duidelijk verkeerde maat, ontbrekend onderdeel, kapotte sluiting of verkeerde optie verdient meer aandacht dan een klein lichtverschil.",
    "Foto’s hebben blinde vlekken: geur, gevoel, interne versteviging, exact gewicht, duurzaamheid of alle zijden zijn mogelijk niet zichtbaar. Een onzichtbaar gebrek is geen bewijs dat het ontbreekt; een lichte vlek kan schaduw of compressie zijn. Is een beslissend kenmerk niet zichtbaar, laat het dan onopgelost.",
    "Vraag support feitelijk om hulp: artikel, verwachte optie, waargenomen verschil en beeld. Claim geen echtheid zonder onafhankelijk bewijs en toepasselijk beleid. LitBuy zegt kwaliteit en echtheid van goederen van derden niet te kunnen verifiëren; QC gaat dus over zichtbare staat en overeenstemming, niet certificering.",
    "LitBuy’s openbare proces scheidt aankomst in het magazijn van latere internationale verzending. Gebruik opslag als controlepunt: bekijk het beschikbare bewijs, begrijp de volgende pakketbeslissing en dien pas in als de resterende onzekerheid aanvaardbaar is.",
    "Conclusie: QC beoordeelt zichtbare kenmerken en garandeert geen verborgen kwaliteit, duurzaamheid of echtheid."
  ],
  "pl": [
    "Zdjęcia QC pomagają najbardziej, gdy wcześniej określisz pytania, na które mają odpowiedzieć. Zachowaj zdjęcie sprzedawcy pokazujące ważny szczegół i przygotuj listę: właściwa opcja, ogólny kolor, widoczne wymiary, jeśli możliwe, okucia i dołączone części. Bądź precyzyjny, nie zakładając niemożliwej gwarancji.",
    "Gdy zdjęcia są dostępne, najpierw sprawdź tożsamość: ID, notatki o opcji i ogólny kształt. Następnie przechodź od dużych cech do małych: model, grupa koloru, kieszenie, zamknięcia i paski przed szwami, fakturą lub ustawieniem nadruku. Wyraźnie zły rozmiar, brak części, uszkodzone zamknięcie lub zła opcja są ważniejsze niż niewielka różnica światła.",
    "Zdjęcia mają martwe pola: mogą nie pokazać zapachu, dotyku, wewnętrznych wzmocnień, dokładnej wagi, trwałości lub wszystkich stron. Brak widocznej wady nie dowodzi jej braku; słaby ślad może być cieniem albo kompresją. Jeśli decydującej cechy nie widać, pozostaje niewyjaśniona.",
    "Do obsługi pisz rzeczowo: przedmiot, oczekiwana opcja, zauważona różnica i zdjęcie. Nie twierdź, że rzecz jest autentyczna bez niezależnego dowodu i odpowiednich zasad. LitBuy podaje, że nie weryfikuje jakości ani autentyczności towarów stron trzecich; QC dotyczy więc widocznego stanu i zgodności, nie certyfikacji.",
    "Publiczny proces LitBuy oddziela przyjęcie do magazynu od późniejszej wysyłki międzynarodowej. Wykorzystaj magazynowanie jako punkt kontroli: obejrzyj dostępne dowody, zrozum następną decyzję o paczce i zgłoś wysyłkę dopiero po zaakceptowaniu pozostałej niepewności.",
    "Wniosek: QC ocenia widoczne cechy; nie gwarantuje ukrytej jakości, trwałego działania ani autentyczności."
  ],
  "ru": [
    "QC-фотографии полезнее, когда заранее определено, на какие вопросы они должны ответить. Сохраните фото продавца с важной деталью и составьте список: правильный вариант, общий цвет, видимые размеры по возможности, фурнитура и комплектующие. Будьте конкретны, не предполагая невозможной гарантии.",
    "При наличии снимков сначала проверьте идентичность: ID, записи о варианте и общий силуэт. Затем двигайтесь от крупного к мелкому: модель, группа цвета, карманы, застёжки и ремни до швов, фактуры или расположения принта. Явно неверный размер, отсутствующая деталь, сломанная застёжка или другой вариант важнее небольшой разницы освещения.",
    "У фотографий есть слепые зоны: они могут не показать запах, ощущения, внутреннее усиление, точный вес, долговечность или все стороны. Невидимый дефект не доказывает его отсутствия; слабая отметина может быть тенью или сжатием. Если решающую деталь не видно, оставьте вопрос открытым.",
    "Обращайтесь в поддержку с фактами: товар, ожидаемый вариант, замеченное отличие и фото. Не утверждайте подлинность без независимых доказательств и применимых условий. LitBuy сообщает, что не может проверить качество и подлинность товаров третьих лиц; поэтому QC касается видимого состояния и соответствия, а не сертификации.",
    "Публичный процесс LitBuy отделяет поступление на склад от последующей международной отправки. Используйте хранение как контрольный этап: изучите доступные доказательства, поймите следующее решение по посылке и отправляйте только когда оставшаяся неопределённость приемлема.",
    "Вывод: QC проверяет видимые признаки; он не гарантирует скрытое качество, долговечность или подлинность."
  ]
};
  const guideSevenTranslations = {
  "de": [
    "Stöbern ist leicht, eine brauchbare Vorauswahl braucht Absicht. Nutzen Sie Kategorien für bekannte Produkttypen und Stichwörter für Material, Form oder Funktion. Speichern Sie nur passende Kandidaten mit richtiger Kategorie, genügend Bildkontext, keinem offensichtlichen Titelwiderspruch und später überprüfbarem Produktweg. Hundert attraktive Karten sind nicht hundert kaufbereite Optionen.",
    "Nutzen Sie drei Stufen: eine aktive Liste mit höchstens fünf ernsthaften Kandidaten, eine Vergleichsreserve für Alternativen mit offenen Fragen und eine Inspirationsliste für schöne, noch nicht beurteilbare Ideen. So wirkt nicht alles gleich entscheidungsreif.",
    "Geben Sie jedem aktiven Artikel einen klaren Grund: angegebene Maße, bessere Bilder, eine bestimmte Funktion oder ein vergleichbarer Preis. Können Sie ihn nicht in einem Satz nennen, verschieben Sie den Artikel in die Reserve. Das reduziert spontane Speicherungen und beschleunigt den Vergleich.",
    "Lokale Suche und Kategorien sind eine Orientierung, kein Nachweis aktueller Verfügbarkeit. Die Suche bleibt auf dieser Unterseite; der Kaufknopf führt bewusst zur aktuellen Prüfung. Markieren Sie Einträge als ‘heute geprüft’, ‘live prüfen’ oder ‘Archiv’. Eine kleine aktuelle Liste ist besser als eine große veraltete.",
    "Eine Vorauswahl soll keinen Zeitdruck erzeugen. Sie bewahrt Aufmerksamkeit für Maße, Optionsnamen, Bildbelege und Budget. So wird ein Spreadsheet vom Bilderkatalog zum Entscheidungshilfsmittel.",
    "Fazit: Halten Sie den Auswahlgrund fest, begrenzen Sie aktive Kandidaten und archivieren Sie alte Einträge, statt sie als verfügbaren Bestand zu behandeln."
  ],
  "fr": [
    "Parcourir est facile ; une sélection utile demande une intention. Utilisez les catégories pour un type d’objet connu et les mots-clés pour une matière, une forme ou une fonction. Ne gardez qu’une fiche pertinente : bonne catégorie, contexte visuel suffisant, titre sans contradiction évidente et lien vérifiable plus tard. Cent cartes séduisantes ne sont pas cent achats prêts.",
    "Utilisez trois niveaux : une liste active de cinq articles maximum réellement envisagés, une réserve d’alternatives nécessitant des informations et une liste d’inspiration pour les styles encore impossibles à évaluer. Tout ne paraît ainsi pas également prêt à être acheté.",
    "Donnez à chaque article actif une raison précise : mesures indiquées, images plus utiles, fonction particulière ou prix comparable. Si vous ne pouvez l’expliquer en une phrase, placez-le en réserve. Cette règle limite les enregistrements impulsifs et accélère le comparatif.",
    "La recherche et les catégories locales sont une carte, pas une preuve de disponibilité actuelle. La découverte reste sur ce sous-site ; le bouton d’achat est l’étape volontaire de vérification en direct. Marquez les fiches « vérifiée aujourd’hui », « à vérifier » ou « archive ». Une petite liste actuelle vaut mieux qu’une grande liste périmée.",
    "Une sélection ne doit pas créer d’urgence. Elle préserve l’attention pour les mesures, libellés d’option, preuves visuelles et budget. Le tableau devient ainsi un outil de décision plutôt qu’une galerie.",
    "À retenir : conservez la raison de chaque choix, limitez les candidats actifs et archivez les fiches anciennes sans les considérer comme du stock actuel."
  ],
  "es": [
    "Navegar es fácil; una selección útil requiere intención. Usa categorías si conoces el tipo de objeto y palabras clave para material, forma o función. Guarda solo candidatos relevantes: categoría correcta, contexto visual suficiente, título sin contradicción evidente y ruta verificable después. Cien tarjetas atractivas no son cien compras preparadas.",
    "Usa tres niveles: lista activa de un máximo de cinco artículos que considerarías de verdad; reserva de alternativas con información pendiente; e inspiración para estilos que todavía no puedes evaluar. Así no todo parece igualmente listo para comprar.",
    "Da a cada artículo activo una razón concreta: medidas indicadas, mejores imágenes, función específica o precio comparable. Si no puedes explicarla en una frase, pásalo a reserva. Esta regla reduce guardados impulsivos y agiliza la comparación.",
    "La búsqueda y categorías locales son un mapa, no prueba de disponibilidad actual. El descubrimiento permanece en el sitio; el botón de compra es el punto deliberado para comprobar datos actuales. Marca las fichas «comprobada hoy», «requiere verificación» o «archivo». Una lista pequeña actual supera una grande desactualizada.",
    "Una selección no debe crear urgencia. Conserva atención para medidas, etiquetas de opciones, pruebas visuales y presupuesto. Así la hoja pasa de galería a herramienta de decisión.",
    "Conclusión: conserva el motivo de cada elección, limita candidatos activos y archiva fichas antiguas sin tratarlas como existencias actuales."
  ],
  "it": [
    "Sfogliare è facile; una selezione utile richiede intenzione. Usa le categorie per un tipo di oggetto noto e le parole chiave per materiale, forma o funzione. Salva solo candidati pertinenti: categoria corretta, contesto visivo sufficiente, titolo senza evidenti contraddizioni e percorso verificabile in seguito. Cento schede attraenti non sono cento acquisti pronti.",
    "Usa tre livelli: una lista attiva di massimo cinque articoli realmente considerati, una riserva di alternative che richiedono informazioni e una raccolta di ispirazione per stili non ancora valutabili. Così non tutto sembra ugualmente pronto all’acquisto.",
    "Assegna a ogni articolo attivo un motivo preciso: misure dichiarate, immagini più utili, funzione specifica o prezzo confrontabile. Se non riesci a spiegarlo in una frase, spostalo nella riserva. La regola limita i salvataggi impulsivi e velocizza il confronto.",
    "Ricerca e categorie locali sono una mappa, non una prova di disponibilità attuale. La scoperta resta sul sito; il pulsante di acquisto è il punto scelto per verificare i dati aggiornati. Segna le schede come «verificata oggi», «da verificare» o «archivio». Una piccola lista aggiornata è migliore di una grande lista vecchia.",
    "Una selezione non deve creare urgenza. Conserva attenzione per misure, etichette delle opzioni, immagini e budget. Così il foglio diventa uno strumento decisionale, non solo una galleria.",
    "Conclusione: conserva il motivo della scelta, limita i candidati attivi e archivia le schede vecchie senza considerarle disponibilità attuale."
  ],
  "pt": [
    "Navegar é fácil; uma seleção útil exige intenção. Use categorias para um tipo de objeto conhecido e palavras-chave para material, forma ou função. Guarde apenas candidatos relevantes: categoria certa, contexto visual suficiente, título sem contradição evidente e rota verificável mais tarde. Cem cartões atraentes não são cem compras prontas.",
    "Use três níveis: lista ativa de até cinco artigos realmente considerados; reserva de alternativas que exigem informação; e inspiração para estilos ainda não avaliáveis. Assim nem tudo parece igualmente pronto para comprar.",
    "Dê a cada artigo ativo uma razão concreta: medidas indicadas, imagens mais úteis, função específica ou preço comparável. Se não conseguir explicá-la numa frase, mova-o para a reserva. A regra reduz escolhas impulsivas e acelera a comparação.",
    "A pesquisa e as categorias locais são um mapa, não prova de disponibilidade atual. A descoberta fica neste site; o botão de compra é o ponto deliberado para verificar dados atuais. Marque as fichas como «verificada hoje», «precisa de verificação» ou «arquivo». Uma lista pequena e atual vale mais do que uma grande e antiga.",
    "Uma seleção não deve criar urgência. Preserva atenção para medidas, nomes das opções, imagens e orçamento. Assim a folha passa de galeria a ferramenta de decisão.",
    "Conclusão: guarde o motivo da escolha, limite os candidatos ativos e arquive fichas antigas sem as tratar como stock atual."
  ],
  "nl": [
    "Rondkijken is gemakkelijk; een bruikbare shortlist vraagt aandacht. Gebruik categorieën voor een bekend type en zoekwoorden voor materiaal, vorm of functie. Bewaar alleen relevante kandidaten met juiste categorie, voldoende beeldcontext, geen duidelijke tegenspraak in de titel en een later te controleren route. Honderd aantrekkelijke kaarten zijn geen honderd aankoopklare keuzes.",
    "Gebruik drie niveaus: een actieve lijst van hoogstens vijf serieuze kandidaten, een vergelijkingsreserve met open vragen en inspiratie voor stijlen die je nog niet kunt beoordelen. Zo lijkt niet alles even koopklaar.",
    "Geef elk actief artikel één duidelijke reden: opgegeven maten, nuttigere beelden, een functie of vergelijkbare prijs. Kun je die niet in één zin uitleggen, zet het dan in reserve. Dat beperkt impulsief bewaren en versnelt de vergelijking.",
    "Lokale zoek- en categorieroutes zijn een kaart, geen bewijs van actuele voorraad. Ontdekken blijft op deze site; de koopknop is het bewuste moment om actuele gegevens te controleren. Markeer ‘vandaag gecontroleerd’, ‘live controleren’ of ‘archief’. Een kleine actuele lijst is beter dan een grote verouderde.",
    "Een shortlist moet geen haast veroorzaken. Hij bewaart aandacht voor maten, optienamen, beeldbewijs en budget. Zo wordt de spreadsheet een hulpmiddel voor beslissingen in plaats van een galerij.",
    "Conclusie: bewaar de reden van elke keuze, beperk actieve kandidaten en archiveer oude vermeldingen zonder ze als actuele voorraad te behandelen."
  ],
  "pl": [
    "Przeglądanie jest łatwe; użyteczna lista wymaga celu. Używaj kategorii, gdy znasz typ przedmiotu, a słów kluczowych dla materiału, kształtu lub funkcji. Zapisuj tylko trafne opcje: właściwa kategoria, wystarczający kontekst zdjęć, brak oczywistej sprzeczności w tytule i możliwość późniejszej weryfikacji. Sto atrakcyjnych kart nie oznacza stu ofert gotowych do zakupu.",
    "Użyj trzech poziomów: aktywnej listy najwyżej pięciu poważnych kandydatów, rezerwy alternatyw wymagających informacji oraz inspiracji dla stylów, których jeszcze nie da się ocenić. Dzięki temu nie wszystko wygląda na równie gotowe do zakupu.",
    "Podaj jeden jasny powód dla każdej aktywnej pozycji: podane wymiary, lepsze zdjęcia, konkretną funkcję lub porównywalną cenę. Jeśli nie umiesz wyjaśnić go jednym zdaniem, przenieś rzecz do rezerwy. Zasada ogranicza impulsywne zapisywanie i przyspiesza porównanie.",
    "Lokalna wyszukiwarka i kategorie są mapą, nie dowodem aktualnej dostępności. Wyszukiwanie pozostaje na stronie; przycisk zakupu jest świadomym momentem sprawdzenia bieżących danych. Oznacz wpisy ‘sprawdzono dziś’, ‘sprawdzić aktualnie’ lub ‘archiwum’. Mała aktualna lista jest lepsza niż duża nieaktualna.",
    "Lista nie powinna wywoływać pośpiechu. Pozwala skupić się na wymiarach, nazwach opcji, zdjęciach i budżecie. Dzięki temu arkusz staje się narzędziem decyzji, a nie galerią.",
    "Wniosek: zachowaj powód wyboru, ogranicz aktywnych kandydatów i archiwizuj stare wpisy zamiast traktować je jako aktualny stan."
  ],
  "ru": [
    "Просматривать легко, но полезный список требует цели. Используйте категории для известного типа вещи, а ключевые слова — для материала, формы или функции. Сохраняйте подходящие варианты: верная категория, достаточно изображений, отсутствие явного противоречия в названии и возможность позже проверить страницу. Сто привлекательных карточек не означают сто готовых покупок.",
    "Используйте три уровня: активный список максимум из пяти действительно рассматриваемых товаров, резерв альтернатив с открытыми вопросами и вдохновение для стилей, которые пока нельзя оценить. Тогда не всё будет выглядеть одинаково готовым к покупке.",
    "Укажите одну ясную причину для каждой активной позиции: заявленные размеры, более полезные изображения, конкретная функция или сопоставимая цена. Если её нельзя объяснить одним предложением, перенесите товар в резерв. Это сокращает импульсивные сохранения и ускоряет сравнение.",
    "Локальный поиск и категории — карта, а не доказательство текущего наличия. Поиск остаётся на сайте; кнопка покупки — сознательный переход к проверке актуальных данных. Отмечайте записи «проверено сегодня», «проверить актуальность» или «архив». Маленький актуальный список лучше большого устаревшего.",
    "Список не должен создавать спешку. Он сохраняет внимание для размеров, подписей вариантов, изображений и бюджета. Так таблица становится инструментом решения, а не просто галереей.",
    "Вывод: сохраняйте причину выбора, ограничивайте активные варианты и архивируйте старые записи, не считая их текущим наличием."
  ]
};
  const guideEightTranslations = {
  "de": [
    "Eine angezeigte USD-Schätzung hilft beim Produktvergleich, ist aber kein vollständiges Angebot für die Gesamtkosten. LitBuy beschreibt einen Inlandskauf bis zum Lager und eine spätere internationale Paketphase. Der Frachtschätzer fragt nach Ziel, Gewicht, Produkttyp und Maßen. Versandplanung kann daher nicht allein auf Bild oder Grundpreis beruhen.",
    "Planen Sie in Schichten: genauer Artikelpreis, beim Checkout angezeigte Inlandskosten, spätere internationale Versandschätzung und gegebenenfalls Reserve für Steuern, Währungsumrechnung oder optionale Dienste. Erfinden Sie keine festen Gebühren; tragen Sie bis zur aktuellen Angabe ‘unbekannt’ ein.",
    "Gewicht und Volumen zählen. Zwei gleich teure Artikel können sehr unterschiedliche Paketkosten verursachen, wenn einer sperrig, starr oder groß verpackt ist. Beachten Sie Maße besonders bei Schuhen, Gepäck, Oberbekleidung und Zerbrechlichem. Eine Schätzung bleibt eine Schätzung, ist aber aussagekräftiger als die Annahme, ein niedriger Artikelpreis bleibe nach internationalem Versand niedrig.",
    "LitBuy wirbt öffentlich mit bis zu 120 Tagen Lagerung und erklärt die ersten 90 Tage als kostenlos. Das Help Center enthält die aktuellen Angaben. Prüfen Sie diese veränderliche Richtlinie bei Nutzung einschließlich der Regeln nach der Gratiszeit. Lagerung ist nützlich, sollte aber kein realistisches Paketbudget auf unbestimmte Zeit aufschieben.",
    "Passt ein Artikel nur bei den niedrigsten denkbaren Versandkosten ins Budget, ist er noch nicht budgetiert. Bleibt er trotz ehrlicher Unsicherheit tragbar, ist er ein stärkerer Kandidat. Ein gestuftes Budget ist weniger aufregend als ein niedriger Einzelpreis, verhindert aber Entscheidungen ohne Blick auf offene Kosten.",
    "Fazit: Notieren Sie den Produktpreis und entscheiden Sie mit einem gestuften Budget; unbekannte Kosten bleiben bis zur aktuellen Angabe unbekannt."
  ],
  "fr": [
    "Un montant estimé en USD aide à comparer les produits, mais ne constitue pas un devis complet rendu à destination. LitBuy décrit un achat intérieur jusqu’à l’entrepôt puis un colis international. Son estimateur demande destination, poids, type de produit et dimensions : le transport ne peut donc pas être planifié à partir de la seule image ou du prix de base.",
    "Construisez un budget par couches : prix exact, frais intérieurs affichés au paiement, estimation internationale ultérieure et, si applicable, marge pour taxes, conversion ou services facultatifs. N’inventez pas de frais fixes ; indiquez « inconnu » tant que le service ne fournit pas de chiffre actuel.",
    "Poids et volume comptent. Deux articles au même prix peuvent coûter très différemment à expédier si l’un est encombrant, rigide ou emballé dans une grande boîte. Examinez les dimensions des chaussures, bagages, manteaux et objets fragiles. Une estimation reste approximative, mais vaut mieux que supposer qu’un prix bas restera bas après transport international.",
    "LitBuy annonce publiquement jusqu’à 120 jours de stockage, dont les 90 premiers gratuits. Son centre d’aide donne les informations en vigueur. Vérifiez cette politique susceptible de changer, y compris après la période gratuite. Le stockage est utile mais ne doit pas reporter indéfiniment un budget de colis réaliste.",
    "Si l’article ne rentre dans le budget qu’avec le transport le plus bas imaginable, il n’est pas encore abordable. S’il reste acceptable malgré une incertitude honnête, il constitue une meilleure option. Un budget par couches évite d’acheter sans comprendre les coûts encore inconnus.",
    "À retenir : notez le prix et décidez avec un budget par étapes ; les coûts inconnus restent inconnus jusqu’à confirmation actuelle."
  ],
  "es": [
    "Una cifra estimada en USD sirve para comparar productos, pero no es un presupuesto completo puesto en destino. LitBuy describe una compra nacional hasta el almacén y una fase posterior de paquete internacional. Su estimador pide destino, peso, tipo de producto y dimensiones: no se puede planificar el envío solo con la foto o el precio base.",
    "Construye un presupuesto por capas: precio exacto, cargos nacionales mostrados al pagar, estimación internacional posterior y, cuando corresponda, margen para impuestos, conversión o servicios opcionales. No inventes tarifas fijas; escribe «desconocido» hasta que el servicio dé una cifra actual.",
    "Peso y volumen importan. Dos artículos de precio similar pueden tener costes de paquete muy distintos si uno es voluminoso, rígido o lleva caja grande. Revisa dimensiones de calzado, equipaje, abrigos y objetos frágiles. Una estimación sigue siendo aproximada, pero es mejor que suponer que un precio bajo seguirá siéndolo tras el envío internacional.",
    "LitBuy anuncia públicamente hasta 120 días de almacenamiento y afirma que los primeros 90 son gratis. Su centro de ayuda contiene la información vigente. Verifica esta política cambiante al utilizarla, incluidas las reglas posteriores al período gratis. El almacenamiento es útil, pero no debe aplazar indefinidamente un presupuesto realista.",
    "Si el artículo solo encaja con el envío más barato imaginable, todavía no entra en el presupuesto. Si sigue siendo viable con incertidumbre honesta, es mejor candidato. Un presupuesto por capas evita comprar sin entender los costes aún desconocidos.",
    "Conclusión: registra el precio y decide con un presupuesto por etapas; los costes desconocidos siguen así hasta recibir datos actuales."
  ],
  "it": [
    "Una stima in USD aiuta a confrontare prodotti, ma non è un preventivo completo fino a destinazione. LitBuy descrive l’acquisto nazionale fino al magazzino e una successiva fase di spedizione internazionale. Lo stimatore richiede destinazione, peso, tipo di prodotto e dimensioni: non si può pianificare il trasporto solo da foto o prezzo base.",
    "Costruisci un budget a livelli: prezzo esatto, eventuali costi nazionali mostrati al pagamento, stima internazionale successiva e, se applicabile, margine per tasse, conversione o servizi facoltativi. Non inventare tariffe fisse: indica «sconosciuto» finché il servizio non fornisce dati aggiornati.",
    "Peso e volume contano. Due articoli di prezzo simile possono avere costi di pacco diversi se uno è ingombrante, rigido o in una scatola grande. Considera le misure di scarpe, bagagli, capispalla e oggetti fragili. Una stima resta tale, ma è più utile che presumere che un prezzo basso resti basso dopo la spedizione internazionale.",
    "LitBuy pubblicizza fino a 120 giorni di deposito e indica gratuiti i primi 90. Il centro assistenza contiene le informazioni correnti. Verifica questa politica variabile quando la usi, incluse le regole dopo il periodo gratuito. Il deposito è utile, ma non deve rimandare indefinitamente un budget realistico per il pacco.",
    "Se l’articolo rientra nel budget solo con la spedizione più economica immaginabile, non è ancora sostenibile. Se resta accettabile considerando l’incertezza, è un candidato migliore. Un budget a livelli evita acquisti senza comprendere i costi ancora sconosciuti.",
    "Conclusione: annota il prezzo e decidi con un budget per fasi; i costi ignoti restano tali fino alla verifica aggiornata."
  ],
  "pt": [
    "Uma estimativa apresentada em USD ajuda a comparar produtos, mas não é um orçamento completo até ao destino. A LitBuy descreve a compra nacional até ao armazém e uma fase posterior de pacote internacional. O estimador pede destino, peso, tipo de produto e dimensões: não se pode planear o envio apenas pela imagem ou preço base.",
    "Construa um orçamento por camadas: preço exato, eventuais custos nacionais mostrados no pagamento, estimativa internacional posterior e, quando aplicável, margem para impostos, conversão ou serviços opcionais. Não invente taxas fixas; escreva «desconhecido» até o serviço fornecer valores atuais.",
    "Peso e volume importam. Dois artigos de preço semelhante podem ter custos de pacote muito diferentes se um for volumoso, rígido ou vier numa caixa grande. Considere as dimensões de calçado, bagagem, casacos e objetos frágeis. Uma estimativa continua aproximada, mas é melhor do que presumir que um preço baixo continuará baixo após o envio internacional.",
    "A LitBuy anuncia publicamente até 120 dias de armazenamento e indica que os primeiros 90 são gratuitos. O centro de ajuda contém as informações atuais. Verifique esta política variável ao utilizá-la, incluindo as regras após o período gratuito. O armazenamento é útil, mas não deve adiar indefinidamente um orçamento realista.",
    "Se o artigo só couber no orçamento com o envio mais barato imaginável, ainda não está dentro do orçamento. Se continuar viável perante uma incerteza honesta, é melhor candidato. Um orçamento por camadas evita comprar sem compreender os custos ainda desconhecidos.",
    "Conclusão: registe o preço e decida com um orçamento por etapas; custos desconhecidos permanecem assim até à confirmação atual."
  ],
  "nl": [
    "Een getoonde USD-schatting helpt producten vergelijken, maar is geen volledige prijs tot aan de bestemming. LitBuy beschrijft binnenlandse aankoop tot het magazijn en daarna een internationale pakketfase. De vrachtschatter vraagt bestemming, gewicht, producttype en afmetingen: verzending is dus niet alleen op foto of basisprijs te plannen.",
    "Bouw het budget in lagen op: exacte artikelprijs, eventuele binnenlandse kosten bij afrekenen, latere internationale schatting en waar van toepassing ruimte voor belastingen, omrekening of optionele diensten. Verzin geen vaste kosten; noteer ‘onbekend’ totdat de actuele dienst cijfers geeft.",
    "Gewicht en volume tellen. Twee even dure artikelen kunnen heel verschillende pakketkosten hebben als één groot, star of in een grote doos verpakt is. Let op afmetingen van schoenen, bagage, jassen en breekbare goederen. Een schatting blijft een schatting, maar is beter bewijs dan aannemen dat een lage artikelprijs na internationale verzending laag blijft.",
    "LitBuy adverteert publiekelijk tot 120 dagen opslag en noemt de eerste 90 dagen gratis. Het helpcentrum bevat actuele informatie. Controleer dit veranderlijke beleid bij gebruik, inclusief regels na de gratis periode. Opslag is nuttig, maar mag een realistisch pakketbudget niet onbeperkt uitstellen.",
    "Past het artikel alleen bij de laagst denkbare verzendkosten in je budget, dan is het nog niet betaalbaar. Blijft het met eerlijke onzekerheid haalbaar, dan is het een sterkere kandidaat. Een gelaagd budget voorkomt aankopen zonder begrip van onbekende kosten.",
    "Conclusie: noteer de artikelprijs en beslis met een gelaagd budget; onbekende kosten blijven onbekend tot actuele bevestiging."
  ],
  "pl": [
    "Wyświetlana szacunkowa kwota USD pomaga porównać produkty, lecz nie jest pełną wyceną kosztu do miejsca dostawy. LitBuy opisuje zakup krajowy do magazynu i późniejszą wysyłkę międzynarodową. Kalkulator wymaga miejsca docelowego, wagi, rodzaju produktu i wymiarów: wysyłki nie da się planować tylko na podstawie zdjęcia lub ceny bazowej.",
    "Buduj budżet warstwowo: dokładna cena, opłaty krajowe pokazane przy płatności, późniejsza wycena wysyłki międzynarodowej oraz w razie potrzeby rezerwa na podatki, przewalutowanie lub usługi dodatkowe. Nie wymyślaj stałych opłat; wpisz ‘nieznane’, dopóki usługa nie poda aktualnej kwoty.",
    "Waga i objętość mają znaczenie. Dwa podobnie wycenione produkty mogą mieć różne koszty paczki, gdy jeden jest duży, sztywny lub zapakowany w wielkie pudełko. Sprawdź wymiary butów, bagażu, kurtek i rzeczy delikatnych. Szacunek nadal jest przybliżeniem, ale daje więcej podstaw niż założenie, że niska cena pozostanie niska po wysyłce międzynarodowej.",
    "LitBuy publicznie reklamuje do 120 dni przechowywania i pierwsze 90 dni za darmo. Centrum pomocy zawiera aktualne informacje. Sprawdź zmienną politykę w chwili korzystania, także zasady po okresie bezpłatnym. Magazynowanie pomaga, ale nie powinno bez końca odsuwać realistycznego budżetu paczki.",
    "Jeśli produkt mieści się w budżecie tylko przy najniższym wyobrażalnym koszcie wysyłki, jeszcze nie jest na niego miejsce. Jeśli pozostaje osiągalny mimo uczciwie uwzględnionej niepewności, jest lepszym kandydatem. Warstwowy budżet zapobiega zakupowi bez zrozumienia nieznanych kosztów.",
    "Wniosek: zapisz cenę i podejmuj decyzję z budżetem etapowym; nieznane koszty pozostają nieznane do aktualnego potwierdzenia."
  ],
  "ru": [
    "Показанная оценка в USD помогает сравнить товары, но не является полной стоимостью до места назначения. LitBuy описывает внутреннюю покупку до склада и последующий этап международной посылки. Калькулятор запрашивает направление, вес, тип товара и размеры: планировать доставку только по фото или базовой цене нельзя.",
    "Стройте бюджет слоями: точная цена, внутренние сборы при оплате, последующая оценка международной доставки и при необходимости резерв на налоги, конвертацию или дополнительные услуги. Не выдумывайте фиксированные сборы: указывайте «неизвестно», пока сервис не даст актуальные цифры.",
    "Вес и объём важны. Два товара сходной цены могут давать разные расходы на посылку, если один громоздкий, жёсткий или упакован в большую коробку. Учитывайте размеры обуви, багажа, верхней одежды и хрупких вещей. Оценка остаётся приблизительной, но она полезнее предположения, что низкая цена останется низкой после международной доставки.",
    "LitBuy публично рекламирует хранение до 120 дней и указывает первые 90 дней бесплатными. Актуальные сведения находятся в центре помощи. Проверяйте изменяемую политику при использовании, включая правила после бесплатного периода. Хранение полезно, но не должно бесконечно откладывать реалистичный бюджет посылки.",
    "Если товар вписывается в бюджет только при самой низкой вообразимой доставке, пока он не по бюджету. Если он остаётся доступным с честным учётом неопределённости, это лучший кандидат. Послойный бюджет помогает не покупать, не понимая оставшихся неизвестных расходов.",
    "Вывод: запишите цену и принимайте решение по поэтапному бюджету; неизвестные расходы остаются неизвестными до актуального подтверждения."
  ]
};
  const guideNineTranslations = {
  "de": [
    "Verantwortlicher Einkauf beginnt damit, jede Aussage ihrem Urheber zuzuordnen. Der Drittverkäufer stellt das Angebot, ein Einkaufs- und Weiterleitungsdienst kann Bestellung und Versand bearbeiten, und Behörden entscheiden über die Einfuhr. Diese Rollen sind verschieden. LitBuys Produkthinweis beschreibt Suche, Einkauf und Weiterleitung fremder Waren und erklärt, Qualität oder Echtheit nicht verifizieren zu können.",
    "Prüfen Sie Rechtmäßigkeit vor Stil. LitBuy veröffentlicht eine Liste verbotener Waren; Produktseiten können Risikohinweise zeigen. Lesen Sie aktuelle Plattformregeln und Einfuhrvorschriften Ihres Ziellandes. Umgehen Sie Beschränkungen nicht durch falsche Beschreibungen, Unterbewertung oder falsche Deklarationen. Ein Spreadsheet macht Ware weder versandfähig noch garantiert es Zollfreigabe.",
    "Seien Sie besonders vorsichtig bei Markenartikeln, regulierten Waren, Batterien, Flüssigkeiten, Lebensmitteln, Medizinprodukten und Zerbrechlichem. Fragen Sie nicht nur, ob ein Link existiert, sondern ob der Versand zum Ziel sicher und rechtmäßig erlaubt ist. Bei Unklarheit wählen Sie eine zulässige Alternative oder prüfen geeignete amtliche Informationen. Forenberichte beweisen keine aktuelle Regel.",
    "Schützen Sie Ihr Konto: Registrieren Sie sich nur auf der offiziellen LitBuy-Domain, nutzen Sie ein einmaliges Passwort und prüfen Sie übermittelte Angaben. Die Registrierung fragt nach einer E-Mail-Adresse; die Datenschutzhinweise beschreiben für das Konto nötige Kontaktangaben. Senden Sie Passwörter, Zahlungsdaten oder Ausweise niemals über Tabellenkommentare, soziale Nachrichten oder ungeprüfte Links.",
    "Lesen Sie vor der Zahlung die aktuellen Bedingungen für Storno, Rückgabe, Versicherung und Entschädigung. Formulieren Sie ehrlich: Ein fremder Artikel ist nicht deshalb echt, weil er ähnlich aussieht, und ein Lagerbild ist keine unabhängige Zertifizierung. Präzise Aussagen schützen Käufer und verbessern Ihre Aufzeichnungen.",
    "Fazit: Beachten Sie Einfuhrregeln, sichern Sie Ihr Konto, lesen Sie aktuelle Bedingungen und behaupten Sie nur, was Plattform und sichtbare Belege tragen."
  ],
  "fr": [
    "Acheter de manière responsable commence par attribuer chaque affirmation à son auteur. Un vendeur tiers fournit l’annonce ; un service peut gérer achat et réexpédition ; les douanes contrôlent l’entrée dans le pays. Ces rôles diffèrent. L’avis produit LitBuy décrit recherche, achat et réexpédition de biens tiers et indique ne pas pouvoir vérifier qualité ou authenticité.",
    "Vérifiez la légalité avant le style. LitBuy publie une liste d’articles interdits et certaines fiches affichent des risques. Consultez les règles actuelles de la plateforme et les exigences d’importation de votre destination. Ne contournez pas les restrictions par de fausses descriptions, une sous-évaluation ou de fausses déclarations. Un tableau ne rend pas un article expédiable et ne garantit pas son dédouanement.",
    "Redoublez d’attention pour les marques, produits réglementés, batteries, liquides, aliments, articles médicaux et fragiles. Demandez-vous non seulement si un lien existe, mais si le transport est autorisé, sûr et légal vers votre destination. En cas de doute, choisissez une solution conforme ou consultez une source officielle appropriée. Les récits de forum ne prouvent pas une règle actuelle.",
    "Protégez votre compte : inscrivez-vous uniquement sur le domaine officiel LitBuy, utilisez un mot de passe unique et vérifiez les données transmises. L’inscription demande une adresse e-mail ; la politique de confidentialité décrit les coordonnées nécessaires au compte. N’envoyez jamais mots de passe, données de paiement ou pièces d’identité dans un commentaire de tableau, un message social ou un lien non vérifié.",
    "Avant paiement, lisez les conditions actuelles d’annulation, retour, assurance et indemnisation. Restez exact : un article tiers n’est pas authentique parce qu’il ressemble à un autre, et une photo d’entrepôt n’est pas une certification indépendante. Cette précision protège les acheteurs et améliore vos notes.",
    "À retenir : respectez les règles d’importation, protégez votre compte, lisez les conditions actuelles et limitez vos affirmations aux faits étayés."
  ],
  "es": [
    "Comprar responsablemente empieza por identificar quién hace cada afirmación. Un vendedor externo proporciona el anuncio; un servicio puede gestionar compra y reenvío; las autoridades controlan la entrada al destino. No son funciones intercambiables. El aviso de producto de LitBuy describe búsqueda, compra y reenvío de bienes externos e indica que no puede verificar calidad ni autenticidad.",
    "Comprueba la legalidad antes que el estilo. LitBuy publica una lista de artículos prohibidos y algunas fichas muestran avisos de riesgo. Lee las reglas actuales de la plataforma y los requisitos de importación del destino. No eludas restricciones con descripciones falsas, infravaloración o declaraciones falsas. Una hoja no hace legal el envío ni garantiza el despacho aduanero.",
    "Ten especial cuidado con marcas, productos regulados, baterías, líquidos, alimentos, artículos médicos y frágiles. La pregunta no es solo si existe un enlace, sino si el transporte al destino está permitido y es seguro y legal. Si no está claro, elige una alternativa conforme o consulta una fuente oficial adecuada. Las historias de foros no prueban una norma actual.",
    "Protege tu cuenta: regístrate solo en el dominio oficial de LitBuy, usa una contraseña única y revisa los datos enviados. El registro pide correo electrónico y la política de privacidad describe datos de cuenta y contacto necesarios. Nunca envíes contraseñas, credenciales de pago o documentos de identidad por comentarios de hojas, mensajes sociales o enlaces no verificados.",
    "Antes de pagar, lee las condiciones vigentes de cancelación, devolución, seguro y compensación. Sé preciso: un artículo externo no es auténtico por parecerse a otro y una foto de almacén no es certificación independiente. La precisión protege a otros compradores y mejora tus registros.",
    "Conclusión: respeta las normas de importación, protege la cuenta, lee las condiciones vigentes y limita las afirmaciones a lo demostrado."
  ],
  "it": [
    "Acquistare responsabilmente inizia attribuendo ogni affermazione a chi la fa. Un venditore terzo fornisce l’annuncio; un servizio può gestire acquisto e inoltro; le autorità controllano l’ingresso nel paese. I ruoli non sono intercambiabili. L’avviso prodotto LitBuy descrive ricerca, acquisto e inoltro di beni terzi e dichiara di non poter verificare qualità o autenticità.",
    "Controlla la legalità prima dello stile. LitBuy pubblica un elenco di articoli vietati e alcune pagine mostrano avvisi di rischio. Leggi le regole attuali della piattaforma e i requisiti di importazione del paese di destinazione. Non aggirare restrizioni con descrizioni false, sottovalutazioni o dichiarazioni false. Un foglio non rende spedibile un bene né garantisce lo sdoganamento.",
    "Presta particolare attenzione a marchi, prodotti regolamentati, batterie, liquidi, alimenti, articoli medici e fragili. Non chiederti solo se esiste un link, ma se il trasporto verso la destinazione è consentito, sicuro e legale. In caso di dubbio scegli un’alternativa conforme o consulta una fonte ufficiale appropriata. I racconti dei forum non provano una regola attuale.",
    "Proteggi l’account: registrati solo sul dominio ufficiale LitBuy, usa una password unica e controlla i dati inviati. La registrazione richiede un indirizzo email e l’informativa privacy descrive i dati di account e contatto necessari. Non inviare mai password, credenziali di pagamento o documenti d’identità tramite commenti al foglio, messaggi social o link non verificati.",
    "Prima del pagamento leggi le condizioni vigenti su cancellazione, resi, assicurazione e compensazione. Sii preciso: un articolo terzo non è autentico perché somiglia a un altro e una foto di magazzino non è certificazione indipendente. La precisione protegge gli acquirenti e migliora le registrazioni.",
    "Conclusione: rispetta le norme d’importazione, proteggi l’account, leggi le condizioni attuali e limita le affermazioni alle prove disponibili."
  ],
  "pt": [
    "Comprar responsavelmente começa por identificar quem faz cada afirmação. Um vendedor terceiro fornece o anúncio; um serviço pode tratar da compra e reencaminhamento; as autoridades controlam a entrada no destino. São funções distintas. O aviso de produto da LitBuy descreve pesquisa, compra e reencaminhamento de bens terceiros e indica não poder verificar qualidade ou autenticidade.",
    "Verifique a legalidade antes do estilo. A LitBuy publica uma lista de artigos proibidos e algumas páginas mostram avisos de risco. Leia as regras atuais da plataforma e os requisitos de importação do destino. Não contorne restrições com descrições falsas, subavaliação ou declarações falsas. Uma folha não torna o envio legal nem garante desalfandegamento.",
    "Tenha cuidado adicional com marcas, produtos regulados, baterias, líquidos, alimentos, artigos médicos e frágeis. Pergunte não apenas se existe ligação, mas se o transporte para o destino é permitido, seguro e legal. Em caso de dúvida, escolha alternativa conforme ou consulte uma fonte oficial adequada. Histórias de fóruns não provam uma regra atual.",
    "Proteja a conta: registe-se apenas no domínio oficial da LitBuy, use uma palavra-passe única e reveja os dados enviados. O registo pede email e a política de privacidade descreve os dados de conta e contacto necessários. Nunca envie palavras-passe, credenciais de pagamento ou documentos de identidade por comentários na folha, mensagens sociais ou ligações não verificadas.",
    "Antes de pagar, leia as condições atuais de cancelamento, devolução, seguro e compensação. Seja rigoroso: um artigo terceiro não é autêntico por se parecer com outro e uma foto de armazém não é certificação independente. A precisão protege compradores e melhora os registos.",
    "Conclusão: respeite as regras de importação, proteja a conta, leia as condições atuais e limite as afirmações às provas disponíveis."
  ],
  "nl": [
    "Verantwoord kopen begint met herkennen wie een bewering doet. Een externe verkoper levert de aanbieding; een dienst kan aankoop en doorzending afhandelen; autoriteiten bepalen wat het bestemmingsland binnen mag. Die rollen zijn niet uitwisselbaar. LitBuy’s productmelding beschrijft zoeken, aankopen en doorsturen van goederen van derden en zegt kwaliteit of echtheid niet te kunnen verifiëren.",
    "Controleer rechtmatigheid vóór stijl. LitBuy publiceert een lijst met verboden goederen en productpagina’s kunnen risicomeldingen tonen. Lees actuele platformregels en invoereisen van je bestemming. Omzeil beperkingen niet met onjuiste omschrijvingen, onderwaardering of valse aangiften. Een spreadsheet maakt verzending niet legaal en garandeert geen douanevrijgave.",
    "Wees extra zorgvuldig bij merken, gereguleerde goederen, batterijen, vloeistoffen, voedsel, medische en breekbare artikelen. Vraag niet alleen of een link bestaat, maar ook of vervoer naar je bestemming toegestaan, veilig en legaal is. Kies bij twijfel een toegelaten alternatief of raadpleeg een geschikte officiële bron. Forumverhalen bewijzen geen actuele regel.",
    "Bescherm je account: registreer alleen op het officiële LitBuy-domein, gebruik een uniek wachtwoord en controleer je gegevens. Registratie vraagt een e-mailadres; de privacyverklaring beschrijft benodigde account- en contactgegevens. Stuur nooit wachtwoorden, betaalgegevens of identiteitsdocumenten via spreadsheetreacties, sociale berichten of ongeverifieerde links.",
    "Lees vóór betaling de actuele voorwaarden voor annulering, retour, verzekering en vergoeding. Formuleer eerlijk: een artikel van derden is niet echt omdat het erop lijkt, en een magazijnfoto is geen onafhankelijke certificering. Nauwkeurigheid beschermt kopers en verbetert je administratie.",
    "Conclusie: respecteer invoerregels, beveilig je account, lees actuele voorwaarden en beperk claims tot ondersteund bewijs."
  ],
  "pl": [
    "Odpowiedzialny zakup zaczyna się od ustalenia, kto wypowiada dane twierdzenie. Sprzedawca zewnętrzny udostępnia ofertę; usługa może obsługiwać zakup i przekazanie; organy decydują o dopuszczeniu do kraju. Tych ról nie można utożsamiać. Informacja LitBuy opisuje wyszukiwanie, zakup i przekazywanie towarów stron trzecich oraz brak możliwości weryfikacji jakości i autentyczności.",
    "Sprawdź legalność przed wyglądem. LitBuy publikuje listę przedmiotów zabronionych, a strony produktów mogą zawierać ostrzeżenia. Przeczytaj aktualne zasady platformy i wymogi importowe miejsca docelowego. Nie omijaj ograniczeń fałszywym opisem, zaniżeniem wartości lub nieprawdziwą deklaracją. Arkusz nie legalizuje wysyłki ani nie gwarantuje odprawy.",
    "Zachowaj szczególną ostrożność przy markach, towarach regulowanych, bateriach, płynach, żywności, artykułach medycznych i delikatnych. Pytaj nie tylko o dostępność linku, lecz także o dozwolony, bezpieczny i legalny transport do celu. W razie niejasności wybierz zgodną alternatywę lub właściwe oficjalne źródło. Relacje z forum nie dowodzą aktualnej reguły.",
    "Chroń konto: rejestruj się tylko w oficjalnej domenie LitBuy, użyj unikalnego hasła i sprawdź podawane dane. Rejestracja wymaga e-maila, a polityka prywatności opisuje potrzebne dane konta i kontaktu. Nigdy nie przesyłaj haseł, danych płatności ani dokumentów tożsamości w komentarzu arkusza, wiadomości społecznościowej lub przez niesprawdzony link.",
    "Przed płatnością przeczytaj bieżące warunki anulowania, zwrotu, ubezpieczenia i rekompensaty. Formułuj twierdzenia uczciwie: podobieństwo nie dowodzi autentyczności produktu strony trzeciej, a zdjęcie magazynowe nie jest niezależnym certyfikatem. Dokładność chroni kupujących i poprawia notatki.",
    "Wniosek: przestrzegaj zasad importu, zabezpiecz konto, czytaj aktualne warunki i ograniczaj twierdzenia do dostępnych dowodów."
  ],
  "ru": [
    "Ответственная покупка начинается с понимания, кто делает каждое утверждение. Сторонний продавец размещает объявление; сервис может обрабатывать покупку и пересылку; власти решают, что допускается в страну. Эти роли не взаимозаменяемы. Уведомление LitBuy описывает поиск, покупку и пересылку сторонних товаров и сообщает о невозможности проверить качество и подлинность.",
    "Проверяйте законность до внешнего вида. LitBuy публикует список запрещённых товаров, а страницы могут показывать предупреждения. Изучите текущие правила площадки и требования импорта страны назначения. Не обходите ограничения ложными описаниями, занижением стоимости или неверными декларациями. Таблица не делает отправку законной и не гарантирует таможенное оформление.",
    "Особенно внимательно относитесь к брендам, регулируемым товарам, батареям, жидкостям, еде, медицинским и хрупким изделиям. Важно не только наличие ссылки, но и разрешённая, безопасная и законная перевозка в вашу страну. При сомнении выберите допустимую альтернативу или обратитесь к подходящему официальному источнику. Истории на форумах не доказывают актуальное правило.",
    "Защитите аккаунт: регистрируйтесь только на официальном домене LitBuy, используйте уникальный пароль и проверяйте передаваемые данные. Для регистрации нужен email, а политика конфиденциальности описывает необходимые данные аккаунта и контакты. Никогда не отправляйте пароли, платёжные данные или документы через комментарии таблицы, сообщения в соцсетях или непроверенные ссылки.",
    "До оплаты прочитайте текущие условия отмены, возврата, страхования и компенсации. Формулируйте честно: похожесть стороннего товара не доказывает подлинность, а складское фото не является независимым сертификатом. Точность защищает покупателей и делает записи полезнее.",
    "Вывод: соблюдайте правила импорта, защищайте аккаунт, читайте актуальные условия и ограничивайте утверждения доступными доказательствами."
  ]
};
  const guideTenTranslations = {
  "de": [
    "Ein Kaufprotokoll verbindet Recherche und Handlung. Halten Sie Produkt-ID, Titel, Kategorie, Verzeichnis- und Kauf-URL sowie Prüfdatum fest. Ergänzen Sie genaue Variante, angezeigten Preis und Auswahlgrund. So vergessen Sie beim späteren Öffnen nicht die gewünschte Größe, Farbe oder Version.",
    "Führen Sie das Protokoll chronologisch: aktuelle Angebotsprüfung, Zahlung, Lagerankunft und Einreichung des internationalen Pakets. Trennen Sie erwartete von tatsächlichen Daten; erwartete und tatsächliche Lagerankunft sind verschiedene Fakten. LitBuys öffentlicher Ablauf unterscheidet Inlandskauf und spätere Paketphase; Ihre Notizen sollten diese Grenze bewahren.",
    "Bewahren Sie verständliche Belege auf: ursprüngliche Angebots- und Optionsscreenshots, gegebenenfalls QC-Bilder, Nachrichten und Bestellbestätigung. Benennen Sie Dateien mit Produkt-ID und Datum. Ein datierter Beleg ist bei Änderungen hilfreicher als Erinnerung. Verändern Sie Screenshots nicht, um Beweise zu verstärken; behalten Sie das Original und kennzeichnen Sie Ausschnitte.",
    "Nutzen Sie klare Zustände: Recherche, aktuell geprüft, bezahlt, Lagerprüfung, versandbereit, versandt, zugestellt und abgeschlossen. Bezahlt bedeutet nicht im Lager; im Lager bedeutet nicht versandbereit; zugestellt kann ein offenes Problem einschließen. Genaue Zustände zeigen die nächste Handlung.",
    "Erfassen Sie Geld nach Phasen: erwarteter und gezahlter Artikelpreis, Paketkosten und tatsächlich gezahlte Steuern oder Gebühren. So entsteht eine persönliche Grundlage für spätere Budgets, verlässlicher als allgemeine Aussagen zu ‘üblichen’ Kosten, weil sie Ihr Ziel, Paket und Zahlungsdatum betrifft.",
    "Fazit: Erfassen Sie ID, Option, Daten, Bilder, Kosten und Status je Phase. Ein genaues Protokoll schützt vor veralteten Angeboten und unklarer Erinnerung."
  ],
  "fr": [
    "Un journal d’achat relie recherche et action. Conservez identifiant, titre, catégorie, URL de l’annuaire et d’achat, et date de vérification. Ajoutez variante exacte, prix affiché et raison du choix. Vous ne risquez pas de retrouver une image familière en oubliant la taille, couleur ou version souhaitée.",
    "Tenez-le chronologiquement : vérification de l’annonce actuelle, paiement, arrivée à l’entrepôt puis soumission du colis international. Séparez dates prévues et réelles ; une arrivée estimée n’est pas une arrivée effective. Le parcours public de LitBuy distingue achat intérieur et colis ultérieur ; vos notes doivent conserver cette distinction.",
    "Conservez des preuves compréhensibles : captures originales de l’annonce et de l’option, images QC si fournies, copies de messages et confirmation. Nommez les fichiers avec identifiant et date. En cas de changement, un document daté vaut mieux que la mémoire. Ne modifiez pas une capture pour renforcer la preuve ; gardez l’original et signalez les recadrages.",
    "Utilisez des états clairs : recherche, vérifié, payé, contrôle entrepôt, prêt à soumettre, expédié, livré et clos. Payé ne signifie pas arrivé ; arrivé ne signifie pas prêt ; livré peut laisser un problème ouvert. Des états précis indiquent la prochaine action.",
    "Notez aussi l’argent par étape : prix prévu et payé, frais de colis et taxes ou frais effectivement payés. Cela forme une base personnelle pour les budgets futurs, plus fiable que des généralités sur les coûts habituels puisqu’elle concerne votre destination, colis et date de paiement.",
    "À retenir : consignez identifiant, option, dates, images, coûts et état par étape. Un journal précis limite les erreurs liées aux annonces périmées et aux souvenirs flous."
  ],
  "es": [
    "Un registro de compra une investigación y acción. Guarda ID, título, categoría, URL del directorio y de compra, y fecha de comprobación. Añade variante exacta, precio mostrado y motivo de elección. Así no volverás a una imagen conocida olvidando talla, color o versión deseados.",
    "Ordénalo cronológicamente: verificación del anuncio actual, pago, llegada al almacén y presentación del paquete internacional. Separa fechas previstas y reales; una llegada estimada no es una llegada efectiva. El proceso público de LitBuy distingue compra nacional y paquete posterior; tus notas deben mantener esa diferencia.",
    "Conserva pruebas comprensibles: capturas originales del anuncio y la opción, imágenes QC si se facilitan, copias de mensajes y confirmación del pedido. Nombra archivos con ID y fecha. Ante cambios, un documento fechado ayuda más que la memoria. No edites capturas para reforzar pruebas; conserva el original y etiqueta los recortes.",
    "Usa estados claros: investigando, verificado, pagado, revisión en almacén, listo para presentar, enviado, entregado y cerrado. Pagado no significa llegado; en almacén no significa listo; entregado puede dejar un problema abierto. Los estados precisos indican la siguiente acción.",
    "Registra también el dinero por etapa: precio previsto y pagado, cargo del paquete e impuestos o tasas realmente pagados. Esto crea una base personal para futuros presupuestos, más fiable que afirmaciones genéricas de costes habituales porque corresponde a tu destino, paquete y fecha de pago.",
    "Conclusión: registra ID, opción, fechas, imágenes, costes y estado por etapa. Un historial preciso reduce errores por anuncios antiguos y recuerdos imprecisos."
  ],
  "it": [
    "Un registro acquisti collega ricerca e azione. Conserva ID, titolo, categoria, URL della directory e di acquisto e data del controllo. Aggiungi variante esatta, prezzo mostrato e motivo della scelta. Eviterai di riaprire un’immagine familiare dimenticando taglia, colore o versione desiderati.",
    "Organizzalo cronologicamente: verifica dell’annuncio aggiornato, pagamento, arrivo in magazzino e invio della richiesta per il pacco internazionale. Separa date previste ed effettive: arrivo stimato e reale sono fatti diversi. Il percorso pubblico LitBuy distingue acquisto nazionale e successiva fase del pacco; gli appunti devono conservare questa distinzione.",
    "Conserva prove comprensibili: schermate originali dell’annuncio e dell’opzione, foto QC se fornite, copie dei messaggi e conferma d’ordine. Nomina i file con ID e data. Se cambia qualcosa, un documento datato è più utile della memoria. Non modificare schermate per rafforzare prove; conserva l’originale ed etichetta i ritagli.",
    "Usa stati chiari: ricerca, verificato, pagato, controllo magazzino, pronto per l’invio, spedito, consegnato e chiuso. Pagato non significa arrivato; in magazzino non significa pronto; consegnato può lasciare un problema aperto. Stati precisi indicano l’azione successiva.",
    "Registra anche il denaro per fase: prezzo previsto e pagato, costo del pacco e tasse o commissioni effettivamente pagate. Diventa una base personale per budget futuri, più affidabile delle affermazioni generiche sui costi abituali perché riguarda la tua destinazione, il pacco e la data di pagamento.",
    "Conclusione: registra ID, opzione, date, immagini, costi e stato per fase. Un registro preciso riduce errori dovuti ad annunci vecchi e ricordi vaghi."
  ],
  "pt": [
    "Um registo de compra liga pesquisa e ação. Guarde ID, título, categoria, URL do diretório e da compra e data de verificação. Acrescente variante exata, preço apresentado e motivo da escolha. Assim não voltará a uma imagem familiar esquecendo tamanho, cor ou versão desejados.",
    "Organize-o cronologicamente: verificação do anúncio atual, pagamento, chegada ao armazém e submissão do pacote internacional. Separe datas previstas e reais; chegada estimada e efetiva são factos diferentes. O processo público da LitBuy distingue compra nacional e fase posterior do pacote; as notas devem manter essa diferença.",
    "Guarde provas compreensíveis: capturas originais do anúncio e da opção, imagens QC se fornecidas, cópias de mensagens e confirmação da encomenda. Nomeie ficheiros com ID e data. Se houver mudanças, um registo datado ajuda mais do que a memória. Não edite capturas para reforçar provas; guarde o original e identifique recortes.",
    "Use estados claros: pesquisar, verificado, pago, revisão no armazém, pronto para submeter, enviado, entregue e encerrado. Pago não significa chegado; no armazém não significa pronto; entregue pode deixar um problema aberto. Estados precisos indicam a próxima ação.",
    "Registe também o dinheiro por fase: preço previsto e pago, custo do pacote e impostos ou taxas efetivamente pagos. Isso cria uma base pessoal para orçamentos futuros, mais fiável do que afirmações genéricas sobre custos habituais, pois corresponde ao seu destino, pacote e data de pagamento.",
    "Conclusão: registe ID, opção, datas, imagens, custos e estado por fase. Um histórico preciso reduz erros de anúncios antigos e memória vaga."
  ],
  "nl": [
    "Een aankooplog verbindt onderzoek met actie. Bewaar product-ID, titel, categorie, directory- en aankoop-URL en controledatum. Voeg exacte variant, getoonde prijs en reden van keuze toe. Zo open je later geen bekend beeld zonder te weten welke maat, kleur of versie je bedoelde.",
    "Houd het chronologisch bij: actuele aanbieding controleren, betalen, magazijnaankomst en internationaal pakket indienen. Scheid verwachte en werkelijke data; verwachte en feitelijke aankomst zijn verschillende feiten. LitBuy’s openbare proces onderscheidt binnenlandse aankoop en latere pakketfase; je notities moeten dat onderscheid bewaren.",
    "Bewaar begrijpelijk bewijs: originele screenshots van aanbieding en optie, QC-beelden indien verstrekt, berichten en orderbevestiging. Geef bestanden product-ID en datum. Een gedateerd document helpt bij wijzigingen meer dan geheugen. Bewerk een screenshot niet om bewijs te versterken; bewaar het origineel en label uitsneden.",
    "Gebruik duidelijke statussen: onderzoeken, live gecontroleerd, betaald, magazijncontrole, klaar voor indienen, verzonden, geleverd en afgesloten. Betaald is niet aangekomen; in het magazijn is niet automatisch klaar; geleverd kan een open probleem hebben. Precieze statussen tonen de volgende actie.",
    "Registreer geld per fase: verwachte en betaalde artikelprijs, pakketkosten en werkelijk betaalde belastingen of toeslagen. Dit vormt een persoonlijke basis voor toekomstige budgetten, betrouwbaarder dan algemene uitspraken over gebruikelijke kosten omdat het je bestemming, pakket en betaaldatum betreft.",
    "Conclusie: registreer ID, optie, data, beelden, kosten en status per fase. Een nauwkeurig log beperkt fouten door oude aanbiedingen en vaag geheugen."
  ],
  "pl": [
    "Dziennik zakupu łączy analizę z działaniem. Zapisz ID, tytuł, kategorię, adres katalogu i zakupu oraz datę sprawdzenia. Dodaj dokładny wariant, wyświetlaną cenę i powód wyboru. Dzięki temu po ponownym otwarciu znajomego zdjęcia nie zapomnisz zamierzonego rozmiaru, koloru lub wersji.",
    "Prowadź go chronologicznie: weryfikacja aktualnej oferty, płatność, przyjęcie do magazynu i zgłoszenie paczki międzynarodowej. Oddziel daty przewidywane od rzeczywistych; szacowane i faktyczne przyjęcie to różne fakty. Publiczny proces LitBuy odróżnia zakup krajowy od późniejszej paczki; notatki powinny zachować ten podział.",
    "Przechowuj zrozumiałe dowody: oryginalne zrzuty oferty i opcji, zdjęcia QC, jeśli są, kopie wiadomości i potwierdzenie zamówienia. Nazywaj pliki ID i datą. Przy zmianie datowany zapis pomaga bardziej niż pamięć. Nie edytuj zrzutu, aby wzmocnić dowód; zachowaj oryginał i oznacz kadry.",
    "Stosuj jasne stany: analiza, zweryfikowane, opłacone, kontrola magazynowa, gotowe do zgłoszenia, wysłane, dostarczone i zamknięte. Opłacone nie oznacza przyjęte; w magazynie nie oznacza gotowe; dostarczone może mieć otwarty problem. Dokładne stany wskazują kolejny krok.",
    "Zapisuj pieniądze etapami: przewidywaną i zapłaconą cenę, koszt paczki oraz faktycznie zapłacone podatki i opłaty. Powstaje osobista podstawa przyszłych budżetów, wiarygodniejsza niż ogólne twierdzenia o typowych kosztach, bo dotyczy twojego kraju, paczki i daty płatności.",
    "Wniosek: zapisuj ID, opcję, daty, obrazy, koszty i stan etapami. Dokładny dziennik ogranicza błędy przez stare oferty i zawodną pamięć."
  ],
  "ru": [
    "Журнал покупки связывает исследование и действие. Сохраните ID, название, категорию, адреса каталога и покупки и дату проверки. Добавьте точный вариант, показанную цену и причину выбора. Тогда при повторном открытии знакомой фотографии вы не забудете нужные размер, цвет или версию.",
    "Ведите журнал по времени: проверка актуального объявления, оплата, поступление на склад и подача международной посылки. Разделяйте ожидаемые и фактические даты: предполагаемое и реальное поступление — разные факты. Публичный процесс LitBuy различает внутреннюю покупку и последующий этап посылки; заметки должны сохранять эту границу.",
    "Храните понятные доказательства: исходные снимки объявления и варианта, QC-фото при наличии, копии сообщений и подтверждение заказа. Называйте файлы с ID и датой. При изменениях датированная запись полезнее памяти. Не редактируйте скриншот для усиления доказательства; сохраняйте оригинал и обозначайте обрезки.",
    "Используйте ясные статусы: исследование, актуально проверено, оплачено, складская проверка, готово к отправке, отправлено, доставлено и закрыто. Оплата не означает поступление; товар на складе не обязательно готов к отправке; после доставки проблема может оставаться открытой. Точные статусы показывают следующий шаг.",
    "Учитывайте деньги по этапам: ожидаемую и уплаченную цену, стоимость посылки и фактически уплаченные налоги или сборы. Это создаёт личную базу будущих бюджетов, надёжнее общих утверждений об обычных расходах, поскольку относится к вашему направлению, посылке и дате оплаты.",
    "Вывод: записывайте ID, вариант, даты, изображения, расходы и статус по этапам. Точный журнал уменьшает ошибки из-за устаревших объявлений и неточной памяти."
  ]
};
  const articleText = (c, lang, i, p) => {
    if (i === 0 && guideOneTranslations[lang]) return guideOneTranslations[lang][p];
    if (i === 1 && guideTwoTranslations[lang]) return guideTwoTranslations[lang][p];
    if (i === 2 && guideThreeTranslations[lang]) return guideThreeTranslations[lang][p];
    if (i === 3 && guideFourTranslations[lang]) return guideFourTranslations[lang][p];
    if (i === 4 && guideFiveTranslations[lang]) return guideFiveTranslations[lang][p];
    if (i === 5 && guideSixTranslations[lang]) return guideSixTranslations[lang][p];
    if (i === 6 && guideSevenTranslations[lang]) return guideSevenTranslations[lang][p];
    if (i === 7 && guideEightTranslations[lang]) return guideEightTranslations[lang][p];
    if (i === 8 && guideNineTranslations[lang]) return guideNineTranslations[lang][p];
    if (i === 9 && guideTenTranslations[lang]) return guideTenTranslations[lang][p];
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
