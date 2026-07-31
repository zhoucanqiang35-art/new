export type UiCopy = {
  nav: [string, string, string, string, string, string];
  previewBadge: string;
  previewText: string;
  pages: string;
  chooseLanguage: string;
  fullDatabase: string;
  footerIntro: string;
  explore: string;
  research: string;
  sources: string;
  mainDatabase: string;
  legal: string;
  faqEyebrow: string;
  faqTitle: string;
  faqLead: string;
  checked: string;
  checkedNote: string;
  sourcePolicy: string;
  sourceNote: string;
};

const en: UiCopy = {
  nav: ["Spreadsheet", "Categories", "Guides", "SEO Articles", "Updates", "FAQ"],
  previewBadge: "Independent preview",
  previewText: "Review mode — not yet connected to lolobuysheet.es",
  pages: "Pages",
  chooseLanguage: "Choose language",
  fullDatabase: "Full database",
  footerIntro: "Independent LoloBuy product discovery, QC education and shipping research for global shoppers.",
  explore: "Explore",
  research: "Research",
  sources: "Sources",
  mainDatabase: "Main product database",
  legal: "© 2026 LoloBuy Sheet. Independent resource; not affiliated with LoloBuy. Product availability, prices, fees and policies can change.",
  faqEyebrow: "Plain-language answers",
  faqTitle: "LoloBuy questions, answered with evidence",
  faqLead: "Practical answers that keep the seller, shopping agent, warehouse, carrier and customs roles separate.",
  checked: "Sources checked July 30, 2026",
  checkedNote: "Official facts and editorial guidance are labelled separately.",
  sourcePolicy: "How these answers were checked",
  sourceNote: "We compared LoloBuy help-centre pages with the questions raised by spreadsheet users. Competitor claims such as “daily stock checks” or “QC verified” are not treated as facts without evidence.",
};

const copies: Record<string, Partial<UiCopy>> = {
  es: {
    nav: ["Hoja", "Categorías", "Guías", "Artículos SEO", "Novedades", "Preguntas"],
    previewBadge: "Vista independiente", previewText: "Modo de revisión — todavía no conectado a lolobuysheet.es", pages: "Páginas", chooseLanguage: "Elegir idioma", fullDatabase: "Base completa",
    footerIntro: "Descubrimiento independiente de productos LoloBuy, educación QC e investigación de envíos.", explore: "Explorar", research: "Investigación", sources: "Fuentes", mainDatabase: "Base principal de productos",
    legal: "© 2026 LoloBuy Sheet. Recurso independiente, no afiliado a LoloBuy. La disponibilidad, los precios, las tarifas y las políticas pueden cambiar.",
    faqEyebrow: "Respuestas en lenguaje claro", faqTitle: "Preguntas sobre LoloBuy, respondidas con pruebas", faqLead: "Respuestas prácticas que separan las funciones del vendedor, agente, almacén, transportista y aduanas.",
    checked: "Fuentes comprobadas el 30 de julio de 2026", checkedNote: "Los hechos oficiales y la orientación editorial se identifican por separado.", sourcePolicy: "Cómo verificamos estas respuestas", sourceNote: "Comparamos la ayuda oficial de LoloBuy con las dudas de usuarios de hojas de productos. Afirmaciones como «stock revisado a diario» o «QC verificado» no se presentan como hechos sin pruebas.",
  },
  de: {
    nav: ["Tabelle", "Kategorien", "Ratgeber", "SEO-Artikel", "Updates", "FAQ"],
    previewBadge: "Unabhängige Vorschau", previewText: "Prüfmodus — noch nicht mit lolobuysheet.es verbunden", pages: "Seiten", chooseLanguage: "Sprache wählen", fullDatabase: "Gesamte Datenbank",
    footerIntro: "Unabhängige LoloBuy-Produktsuche, QC-Wissen und Versandinformationen.", explore: "Entdecken", research: "Recherche", sources: "Quellen", mainDatabase: "Haupt-Produktdatenbank",
    legal: "© 2026 LoloBuy Sheet. Unabhängige, nicht mit LoloBuy verbundene Ressource. Verfügbarkeit, Preise, Gebühren und Regeln können sich ändern.",
    faqEyebrow: "Klare Antworten", faqTitle: "LoloBuy-Fragen mit Belegen beantwortet", faqLead: "Praktische Antworten, die Verkäufer, Einkaufsagent, Lager, Frachtführer und Zoll klar unterscheiden.",
    checked: "Quellen geprüft am 30. Juli 2026", checkedNote: "Offizielle Fakten und redaktionelle Hinweise sind getrennt gekennzeichnet.", sourcePolicy: "So wurden die Antworten geprüft", sourceNote: "Wir haben die LoloBuy-Hilfeseiten mit typischen Spreadsheet-Fragen abgeglichen. Aussagen wie „tägliche Bestandsprüfung“ oder „QC-verifiziert“ gelten ohne Beleg nicht als Fakten.",
  },
  fr: {
    nav: ["Tableau", "Catégories", "Guides", "Articles SEO", "Actualités", "FAQ"],
    previewBadge: "Aperçu indépendant", previewText: "Mode révision — pas encore relié à lolobuysheet.es", pages: "Pages", chooseLanguage: "Choisir la langue", fullDatabase: "Base complète",
    footerIntro: "Recherche indépendante de produits LoloBuy, conseils QC et informations de livraison.", explore: "Explorer", research: "Recherche", sources: "Sources", mainDatabase: "Base principale de produits",
    legal: "© 2026 LoloBuy Sheet. Ressource indépendante, sans affiliation avec LoloBuy. Disponibilité, prix, frais et règles peuvent changer.",
    faqEyebrow: "Réponses claires", faqTitle: "Questions LoloBuy, réponses étayées", faqLead: "Des réponses pratiques qui distinguent vendeur, agent d’achat, entrepôt, transporteur et douanes.",
    checked: "Sources vérifiées le 30 juillet 2026", checkedNote: "Les faits officiels et les conseils éditoriaux sont identifiés séparément.", sourcePolicy: "Comment ces réponses ont été vérifiées", sourceNote: "Nous avons comparé l’aide LoloBuy aux questions des utilisateurs de tableaux. Les mentions « stock vérifié chaque jour » ou « QC vérifié » ne sont pas présentées comme des faits sans preuve.",
  },
  it: {
    nav: ["Foglio", "Categorie", "Guide", "Articoli SEO", "Aggiornamenti", "FAQ"],
    previewBadge: "Anteprima indipendente", previewText: "Modalità revisione — non ancora collegato a lolobuysheet.es", pages: "Pagine", chooseLanguage: "Scegli lingua", fullDatabase: "Database completo",
    footerIntro: "Ricerca indipendente di prodotti LoloBuy, formazione QC e informazioni sulle spedizioni.", explore: "Esplora", research: "Ricerca", sources: "Fonti", mainDatabase: "Database principale",
    legal: "© 2026 LoloBuy Sheet. Risorsa indipendente, non affiliata a LoloBuy. Disponibilità, prezzi, commissioni e regole possono cambiare.",
    faqEyebrow: "Risposte chiare", faqTitle: "Domande su LoloBuy, risposte con prove", faqLead: "Risposte pratiche che distinguono venditore, agente, magazzino, corriere e dogana.",
    checked: "Fonti verificate il 30 luglio 2026", checkedNote: "Fatti ufficiali e consigli editoriali sono indicati separatamente.", sourcePolicy: "Come sono state verificate le risposte", sourceNote: "Abbiamo confrontato l’assistenza LoloBuy con le domande degli utenti. Frasi come «stock controllato ogni giorno» o «QC verificato» non sono trattate come fatti senza prove.",
  },
  pt: {
    nav: ["Planilha", "Categorias", "Guias", "Artigos SEO", "Atualizações", "FAQ"],
    previewBadge: "Prévia independente", previewText: "Modo de revisão — ainda não ligado a lolobuysheet.es", pages: "Páginas", chooseLanguage: "Escolher idioma", fullDatabase: "Base completa",
    footerIntro: "Pesquisa independente de produtos LoloBuy, educação QC e informações de envio.", explore: "Explorar", research: "Pesquisa", sources: "Fontes", mainDatabase: "Base principal de produtos",
    legal: "© 2026 LoloBuy Sheet. Recurso independente, sem afiliação com a LoloBuy. Disponibilidade, preços, taxas e políticas podem mudar.",
    faqEyebrow: "Respostas claras", faqTitle: "Perguntas sobre LoloBuy respondidas com evidências", faqLead: "Respostas práticas que separam vendedor, agente, armazém, transportadora e alfândega.",
    checked: "Fontes verificadas em 30 de julho de 2026", checkedNote: "Fatos oficiais e orientação editorial são identificados separadamente.", sourcePolicy: "Como verificamos as respostas", sourceNote: "Comparamos a ajuda da LoloBuy com dúvidas de usuários. Alegações como «estoque verificado diariamente» ou «QC verificado» não são tratadas como fatos sem evidência.",
  },
  nl: {
    nav: ["Spreadsheet", "Categorieën", "Gidsen", "SEO-artikelen", "Updates", "FAQ"],
    previewBadge: "Onafhankelijke preview", previewText: "Beoordelingsmodus — nog niet gekoppeld aan lolobuysheet.es", pages: "Pagina’s", chooseLanguage: "Kies taal", fullDatabase: "Volledige database",
    footerIntro: "Onafhankelijke LoloBuy-productontdekking, QC-uitleg en verzendonderzoek.", explore: "Ontdekken", research: "Onderzoek", sources: "Bronnen", mainDatabase: "Hoofdproductdatabase",
    legal: "© 2026 LoloBuy Sheet. Onafhankelijke bron, niet verbonden aan LoloBuy. Beschikbaarheid, prijzen, kosten en regels kunnen wijzigen.",
    faqEyebrow: "Duidelijke antwoorden", faqTitle: "LoloBuy-vragen beantwoord met bewijs", faqLead: "Praktische antwoorden die verkoper, inkoopagent, magazijn, vervoerder en douane uit elkaar houden.",
    checked: "Bronnen gecontroleerd op 30 juli 2026", checkedNote: "Officiële feiten en redactioneel advies zijn apart gemarkeerd.", sourcePolicy: "Hoe de antwoorden zijn gecontroleerd", sourceNote: "We vergeleken de LoloBuy-helpdocumenten met vragen van spreadsheetgebruikers. Claims als ‘dagelijks voorraad gecontroleerd’ of ‘QC-geverifieerd’ gelden zonder bewijs niet als feit.",
  },
  pl: {
    nav: ["Arkusz", "Kategorie", "Poradniki", "Artykuły SEO", "Aktualizacje", "FAQ"],
    previewBadge: "Niezależny podgląd", previewText: "Tryb przeglądu — jeszcze bez połączenia z lolobuysheet.es", pages: "Strony", chooseLanguage: "Wybierz język", fullDatabase: "Pełna baza",
    footerIntro: "Niezależne wyszukiwanie produktów LoloBuy, wiedza QC i informacje o wysyłce.", explore: "Przeglądaj", research: "Badania", sources: "Źródła", mainDatabase: "Główna baza produktów",
    legal: "© 2026 LoloBuy Sheet. Niezależny serwis, niepowiązany z LoloBuy. Dostępność, ceny, opłaty i zasady mogą się zmienić.",
    faqEyebrow: "Jasne odpowiedzi", faqTitle: "Pytania o LoloBuy poparte źródłami", faqLead: "Praktyczne odpowiedzi rozdzielające role sprzedawcy, agenta, magazynu, przewoźnika i urzędu celnego.",
    checked: "Źródła sprawdzono 30 lipca 2026", checkedNote: "Oficjalne fakty i wskazówki redakcyjne są oznaczone osobno.", sourcePolicy: "Jak sprawdziliśmy odpowiedzi", sourceNote: "Porównaliśmy pomoc LoloBuy z pytaniami użytkowników arkuszy. Hasła „codzienna kontrola zapasów” i „zweryfikowane QC” nie są faktami bez dowodów.",
  },
  sv: { nav: ["Kalkylblad", "Kategorier", "Guider", "SEO-artiklar", "Uppdateringar", "FAQ"], previewBadge: "Oberoende förhandsvisning", previewText: "Granskningsläge — ännu inte ansluten till lolobuysheet.es", pages: "Sidor", chooseLanguage: "Välj språk", fullDatabase: "Hela databasen", footerIntro: "Oberoende produktresearch, QC-kunskap och fraktinformation för LoloBuy.", explore: "Utforska", research: "Research", sources: "Källor", mainDatabase: "Huvuddatabas", faqEyebrow: "Tydliga svar", faqTitle: "LoloBuy-frågor med källstöd", faqLead: "Praktiska svar som skiljer säljare, agent, lager, transportör och tull åt.", checked: "Källor kontrollerade 30 juli 2026", checkedNote: "Officiella fakta och redaktionella råd märks separat.", sourcePolicy: "Så kontrollerades svaren", sourceNote: "LoloBuys hjälptexter jämfördes med vanliga frågor. Påståenden om daglig lagerkontroll eller verifierad QC behandlas inte som fakta utan bevis." },
  da: { nav: ["Regneark", "Kategorier", "Guides", "SEO-artikler", "Opdateringer", "FAQ"], previewBadge: "Uafhængig forhåndsvisning", previewText: "Gennemgang — endnu ikke forbundet til lolobuysheet.es", pages: "Sider", chooseLanguage: "Vælg sprog", fullDatabase: "Hele databasen", footerIntro: "Uafhængig LoloBuy-produktresearch, QC-viden og fragtinformation.", explore: "Udforsk", research: "Research", sources: "Kilder", mainDatabase: "Hoveddatabase", faqEyebrow: "Klare svar", faqTitle: "LoloBuy-spørgsmål med dokumentation", faqLead: "Praktiske svar, der skelner mellem sælger, agent, lager, transportør og told.", checked: "Kilder kontrolleret 30. juli 2026", checkedNote: "Officielle fakta og redaktionelle råd mærkes separat.", sourcePolicy: "Sådan blev svarene kontrolleret", sourceNote: "Vi sammenholdt LoloBuys hjælpesider med brugernes spørgsmål. Påstande om dagligt lagercheck eller verificeret QC behandles ikke som fakta uden bevis." },
  no: { nav: ["Regneark", "Kategorier", "Guider", "SEO-artikler", "Oppdateringer", "FAQ"], previewBadge: "Uavhengig forhåndsvisning", previewText: "Kontrollmodus — ikke koblet til lolobuysheet.es ennå", pages: "Sider", chooseLanguage: "Velg språk", fullDatabase: "Hele databasen", footerIntro: "Uavhengig LoloBuy-produktforskning, QC-kunnskap og fraktinformasjon.", explore: "Utforsk", research: "Forskning", sources: "Kilder", mainDatabase: "Hoveddatabase", faqEyebrow: "Klare svar", faqTitle: "LoloBuy-spørsmål med kildegrunnlag", faqLead: "Praktiske svar som skiller selger, agent, lager, transportør og toll.", checked: "Kilder kontrollert 30. juli 2026", checkedNote: "Offisielle fakta og redaksjonelle råd merkes separat.", sourcePolicy: "Slik ble svarene kontrollert", sourceNote: "Vi sammenlignet LoloBuys hjelpesider med vanlige spørsmål. Påstander om daglig lagerkontroll eller verifisert QC behandles ikke som fakta uten bevis." },
  fi: { nav: ["Taulukko", "Kategoriat", "Oppaat", "SEO-artikkelit", "Päivitykset", "UKK"], previewBadge: "Riippumaton esikatselu", previewText: "Tarkistustila — ei vielä yhdistetty lolobuysheet.es-osoitteeseen", pages: "Sivut", chooseLanguage: "Valitse kieli", fullDatabase: "Koko tietokanta", footerIntro: "Riippumaton LoloBuy-tuotetutkimus, QC-ohjeet ja toimitustieto.", explore: "Tutustu", research: "Tutkimus", sources: "Lähteet", mainDatabase: "Päätietokanta", faqEyebrow: "Selkeät vastaukset", faqTitle: "LoloBuy-kysymykset lähteisiin perustuen", faqLead: "Käytännön vastaukset, joissa myyjän, agentin, varaston, kuljettajan ja tullin roolit erotetaan.", checked: "Lähteet tarkistettu 30.7.2026", checkedNote: "Viralliset tiedot ja toimitukselliset neuvot merkitään erikseen.", sourcePolicy: "Miten vastaukset tarkistettiin", sourceNote: "Vertasimme LoloBuyn ohjeita käyttäjien kysymyksiin. Väitteitä päivittäisestä varastotarkistuksesta tai varmennetusta QC:stä ei pidetä tosina ilman näyttöä." },
  cs: { nav: ["Přehled", "Kategorie", "Průvodci", "SEO články", "Aktualizace", "FAQ"], previewBadge: "Nezávislý náhled", previewText: "Režim kontroly — zatím nepřipojeno k lolobuysheet.es", pages: "Stránky", chooseLanguage: "Zvolit jazyk", fullDatabase: "Celá databáze", footerIntro: "Nezávislý výzkum produktů LoloBuy, vysvětlení QC a dopravy.", explore: "Procházet", research: "Výzkum", sources: "Zdroje", mainDatabase: "Hlavní databáze", faqEyebrow: "Jasné odpovědi", faqTitle: "Otázky o LoloBuy podložené zdroji", faqLead: "Praktické odpovědi oddělující prodejce, agenta, sklad, dopravce a celní úřad.", checked: "Zdroje ověřeny 30. července 2026", checkedNote: "Oficiální fakta a redakční rady jsou označeny odděleně.", sourcePolicy: "Jak jsme odpovědi ověřili", sourceNote: "Porovnali jsme nápovědu LoloBuy s otázkami uživatelů. Tvrzení o denní kontrole skladu či ověřeném QC nejsou bez důkazů faktem." },
  ro: { nav: ["Tabel", "Categorii", "Ghiduri", "Articole SEO", "Actualizări", "FAQ"], previewBadge: "Previzualizare independentă", previewText: "Mod de verificare — încă neconectat la lolobuysheet.es", pages: "Pagini", chooseLanguage: "Alege limba", fullDatabase: "Baza completă", footerIntro: "Cercetare independentă de produse LoloBuy, educație QC și informații despre transport.", explore: "Explorează", research: "Cercetare", sources: "Surse", mainDatabase: "Baza principală", faqEyebrow: "Răspunsuri clare", faqTitle: "Întrebări LoloBuy cu răspunsuri documentate", faqLead: "Răspunsuri practice care separă vânzătorul, agentul, depozitul, transportatorul și vama.", checked: "Surse verificate la 30 iulie 2026", checkedNote: "Faptele oficiale și sfaturile editoriale sunt etichetate separat.", sourcePolicy: "Cum am verificat răspunsurile", sourceNote: "Am comparat ajutorul LoloBuy cu întrebările utilizatorilor. Afirmațiile despre stoc verificat zilnic ori QC verificat nu sunt fapte fără dovezi." },
  hu: { nav: ["Táblázat", "Kategóriák", "Útmutatók", "SEO-cikkek", "Frissítések", "GYIK"], previewBadge: "Független előnézet", previewText: "Ellenőrzési mód — még nincs összekapcsolva a lolobuysheet.es oldallal", pages: "Oldalak", chooseLanguage: "Nyelvválasztás", fullDatabase: "Teljes adatbázis", footerIntro: "Független LoloBuy-termékkutatás, QC-ismeretek és szállítási információk.", explore: "Felfedezés", research: "Kutatás", sources: "Források", mainDatabase: "Fő termékadatbázis", faqEyebrow: "Világos válaszok", faqTitle: "LoloBuy-kérdések forrásokkal", faqLead: "Gyakorlati válaszok, amelyek elkülönítik az eladó, az ügynök, a raktár, a fuvarozó és a vám szerepét.", checked: "Források ellenőrizve: 2026. július 30.", checkedNote: "A hivatalos tényeket és a szerkesztői tanácsokat külön jelöljük.", sourcePolicy: "Az ellenőrzés módja", sourceNote: "A LoloBuy súgóját összevetettük a felhasználói kérdésekkel. A napi készletellenőrzés és az ellenőrzött QC bizonyíték nélkül nem tény." },
  el: { nav: ["Πίνακας", "Κατηγορίες", "Οδηγοί", "Άρθρα SEO", "Ενημερώσεις", "FAQ"], previewBadge: "Ανεξάρτητη προεπισκόπηση", previewText: "Λειτουργία ελέγχου — δεν έχει συνδεθεί ακόμη με το lolobuysheet.es", pages: "Σελίδες", chooseLanguage: "Επιλογή γλώσσας", fullDatabase: "Πλήρης βάση", footerIntro: "Ανεξάρτητη έρευνα προϊόντων LoloBuy, γνώση QC και πληροφορίες αποστολής.", explore: "Εξερεύνηση", research: "Έρευνα", sources: "Πηγές", mainDatabase: "Κύρια βάση προϊόντων", faqEyebrow: "Καθαρές απαντήσεις", faqTitle: "Ερωτήσεις LoloBuy με τεκμηριωμένες απαντήσεις", faqLead: "Πρακτικές απαντήσεις που ξεχωρίζουν πωλητή, πράκτορα, αποθήκη, μεταφορέα και τελωνείο.", checked: "Πηγές ελέγχθηκαν στις 30 Ιουλίου 2026", checkedNote: "Τα επίσημα στοιχεία και οι συντακτικές συμβουλές σημειώνονται χωριστά.", sourcePolicy: "Πώς ελέγχθηκαν οι απαντήσεις", sourceNote: "Συγκρίναμε τη βοήθεια LoloBuy με τις ερωτήσεις χρηστών. Ισχυρισμοί για καθημερινό έλεγχο αποθέματος ή επαληθευμένο QC δεν θεωρούνται γεγονότα χωρίς αποδείξεις." },
  uk: { nav: ["Таблиця", "Категорії", "Посібники", "SEO-статті", "Оновлення", "FAQ"], previewBadge: "Незалежний перегляд", previewText: "Режим перевірки — ще не підключено до lolobuysheet.es", pages: "Сторінки", chooseLanguage: "Вибрати мову", fullDatabase: "Повна база", footerIntro: "Незалежний пошук товарів LoloBuy, пояснення QC і доставки.", explore: "Переглянути", research: "Дослідження", sources: "Джерела", mainDatabase: "Головна база товарів", faqEyebrow: "Чіткі відповіді", faqTitle: "Питання про LoloBuy з підтвердженими відповідями", faqLead: "Практичні відповіді, що розділяють ролі продавця, агента, складу, перевізника та митниці.", checked: "Джерела перевірено 30 липня 2026 року", checkedNote: "Офіційні факти й редакційні поради позначено окремо.", sourcePolicy: "Як перевіряли відповіді", sourceNote: "Ми зіставили довідку LoloBuy із запитаннями користувачів. Твердження про щоденну перевірку запасів чи перевірене QC не вважаються фактами без доказів." },
  tr: { nav: ["Tablo", "Kategoriler", "Rehberler", "SEO Makaleleri", "Güncellemeler", "SSS"], previewBadge: "Bağımsız önizleme", previewText: "İnceleme modu — henüz lolobuysheet.es alanına bağlı değil", pages: "Sayfalar", chooseLanguage: "Dil seç", fullDatabase: "Tam veritabanı", footerIntro: "Bağımsız LoloBuy ürün araştırması, QC eğitimi ve kargo bilgileri.", explore: "Keşfet", research: "Araştırma", sources: "Kaynaklar", mainDatabase: "Ana ürün veritabanı", faqEyebrow: "Net yanıtlar", faqTitle: "Kanıta dayalı LoloBuy yanıtları", faqLead: "Satıcı, alışveriş aracısı, depo, taşıyıcı ve gümrük rollerini ayıran pratik yanıtlar.", checked: "Kaynaklar 30 Temmuz 2026’da kontrol edildi", checkedNote: "Resmî bilgiler ve editoryal öneriler ayrı etiketlenir.", sourcePolicy: "Yanıtları nasıl kontrol ettik", sourceNote: "LoloBuy yardım sayfalarını kullanıcı sorularıyla karşılaştırdık. Günlük stok kontrolü veya doğrulanmış QC iddiaları kanıt olmadan gerçek kabul edilmez." },
  ru: { nav: ["Таблица", "Категории", "Руководства", "SEO-статьи", "Обновления", "FAQ"], previewBadge: "Независимый предпросмотр", previewText: "Режим проверки — ещё не подключено к lolobuysheet.es", pages: "Страницы", chooseLanguage: "Выбрать язык", fullDatabase: "Вся база", footerIntro: "Независимый поиск товаров LoloBuy, объяснения QC и доставки.", explore: "Смотреть", research: "Исследования", sources: "Источники", mainDatabase: "Основная база товаров", faqEyebrow: "Понятные ответы", faqTitle: "Вопросы о LoloBuy с подтверждёнными ответами", faqLead: "Практические ответы, разделяющие роли продавца, агента, склада, перевозчика и таможни.", checked: "Источники проверены 30 июля 2026 года", checkedNote: "Официальные факты и редакционные советы отмечены отдельно.", sourcePolicy: "Как проверялись ответы", sourceNote: "Мы сравнили справку LoloBuy с вопросами пользователей. Заявления о ежедневной проверке наличия или проверенном QC не считаются фактами без доказательств." },
  bg: { nav: ["Таблица", "Категории", "Ръководства", "SEO статии", "Актуализации", "FAQ"], previewBadge: "Независим преглед", previewText: "Режим за преглед — още не е свързан с lolobuysheet.es", pages: "Страници", chooseLanguage: "Избор на език", fullDatabase: "Пълна база", footerIntro: "Независимо проучване на продукти LoloBuy, QC и доставка.", explore: "Разгледайте", research: "Проучване", sources: "Източници", mainDatabase: "Основна база продукти", faqEyebrow: "Ясни отговори", faqTitle: "Въпроси за LoloBuy с проверени отговори", faqLead: "Практични отговори, които разграничават продавач, агент, склад, превозвач и митница.", checked: "Източниците са проверени на 30 юли 2026 г.", checkedNote: "Официалните факти и редакционните съвети са означени отделно.", sourcePolicy: "Как проверихме отговорите", sourceNote: "Сравнихме помощните страници на LoloBuy с въпросите на потребители. Твърдения за ежедневна проверка на наличност или проверен QC не са факти без доказателства." },
  ja: { nav: ["商品表", "カテゴリー", "ガイド", "SEO記事", "更新情報", "FAQ"], previewBadge: "独立プレビュー", previewText: "確認用プレビュー — lolobuysheet.es にはまだ接続されていません", pages: "ページ", chooseLanguage: "言語を選択", fullDatabase: "全データベース", footerIntro: "LoloBuy商品の独立調査、QC解説、配送情報。", explore: "見る", research: "調査", sources: "情報源", mainDatabase: "商品メインデータベース", faqEyebrow: "わかりやすい回答", faqTitle: "根拠に基づくLoloBuy FAQ", faqLead: "販売者、購入代行、倉庫、配送会社、税関の役割を分けて説明します。", checked: "情報源確認日：2026年7月30日", checkedNote: "公式情報と編集上の助言を分けて表示します。", sourcePolicy: "回答の確認方法", sourceNote: "LoloBuyのヘルプと利用者の質問を照合しました。「毎日在庫確認」「QC確認済み」といった主張は、証拠なしに事実として扱いません。" },
  ko: { nav: ["상품표", "카테고리", "가이드", "SEO 글", "업데이트", "FAQ"], previewBadge: "독립 미리보기", previewText: "검토용 미리보기 — 아직 lolobuysheet.es에 연결되지 않았습니다", pages: "페이지", chooseLanguage: "언어 선택", fullDatabase: "전체 데이터베이스", footerIntro: "독립적인 LoloBuy 상품 조사, QC 안내 및 배송 정보.", explore: "살펴보기", research: "조사", sources: "출처", mainDatabase: "메인 상품 데이터베이스", faqEyebrow: "명확한 답변", faqTitle: "근거로 답하는 LoloBuy FAQ", faqLead: "판매자, 구매대행, 창고, 운송사, 세관의 역할을 구분해 설명합니다.", checked: "출처 확인일: 2026년 7월 30일", checkedNote: "공식 사실과 편집 조언을 따로 표시합니다.", sourcePolicy: "답변 확인 방법", sourceNote: "LoloBuy 도움말과 이용자 질문을 대조했습니다. ‘매일 재고 확인’이나 ‘QC 검증’은 근거가 없으면 사실로 취급하지 않습니다." },
  ar: { nav: ["الجدول", "الفئات", "الأدلة", "مقالات SEO", "التحديثات", "الأسئلة"], previewBadge: "معاينة مستقلة", previewText: "وضع المراجعة — لم يتم ربط lolobuysheet.es بعد", pages: "الصفحات", chooseLanguage: "اختر اللغة", fullDatabase: "قاعدة البيانات الكاملة", footerIntro: "بحث مستقل عن منتجات LoloBuy وإرشادات QC ومعلومات الشحن.", explore: "استكشف", research: "البحث", sources: "المصادر", mainDatabase: "قاعدة المنتجات الرئيسية", faqEyebrow: "إجابات واضحة", faqTitle: "أسئلة LoloBuy بإجابات موثقة", faqLead: "إجابات عملية تفصل أدوار البائع والوكيل والمستودع والناقل والجمارك.", checked: "تم فحص المصادر في 30 يوليو 2026", checkedNote: "يتم فصل الحقائق الرسمية عن النصائح التحريرية.", sourcePolicy: "كيف تحققنا من الإجابات", sourceNote: "قارنّا صفحات مساعدة LoloBuy بأسئلة المستخدمين. ادعاءات مثل فحص المخزون يومياً أو QC موثق لا تُعد حقائق دون دليل." },
  zh: {
    nav: ["精选表格", "产品分类", "购买指南", "SEO文章", "最新动态", "常见问题"],
    previewBadge: "独立公开检查版", previewText: "检查模式——尚未连接 lolobuysheet.es 正式域名", pages: "页面", chooseLanguage: "选择语言", fullDatabase: "完整数据库",
    footerIntro: "面向全球买家的独立 LoloBuy 商品发现、QC 知识与运输研究。", explore: "浏览", research: "研究", sources: "资料来源", mainDatabase: "主站商品数据库",
    legal: "© 2026 LoloBuy Sheet。本站为独立资源，与 LoloBuy 无隶属关系。商品库存、价格、费用及政策可能发生变化。",
    faqEyebrow: "讲清楚，不绕弯", faqTitle: "有依据的 LoloBuy 常见问题解答", faqLead: "把卖家、代购平台、仓库、国际承运商和海关各自负责的环节分开说明。",
    checked: "资料核对日期：2026年7月30日", checkedNote: "官方事实与编辑建议分别标注，不把推测写成承诺。", sourcePolicy: "这些答案如何核实", sourceNote: "我们把 LoloBuy 帮助中心条款与表格用户真正关心的问题逐项对照。竞争站自称的“每日查库存”“QC 已验证”等，没有可核实证据时不会当成事实。",
  },
};

export function getUiCopy(locale = "en"): UiCopy {
  return { ...en, ...(copies[locale] || {}) };
}

export type FaqItem = {
  question: string;
  answer: string;
  sourceLabel: string;
  sourceHref: string;
};

const faqBase: FaqItem[] = [
  { question: "Is this the official LoloBuy website?", answer: "No. LoloBuy Sheet is an independent research site. Use LoloBuy’s own account, checkout and help pages for live order rules. findspreadsheet.com is our broader product database.", sourceLabel: "Open the main product database", sourceHref: "https://findspreadsheet.com/" },
  { question: "Does a spreadsheet link guarantee stock, price or quality?", answer: "No. A link records what was visible when it was checked. Seller stock, variants and price may change; a spreadsheet cannot prove authenticity, future availability or seller performance.", sourceLabel: "Browse the current main database", sourceHref: "https://findspreadsheet.com/" },
  { question: "What can LoloBuy warehouse QC photos actually confirm?", answer: "They can help compare visible colour, size labels, measurements, quantity and obvious exterior defects. LoloBuy’s published inspection scope does not turn standard photos into authentication, material testing or a guarantee that electronics function.", sourceLabel: "Official inspection scope", sourceHref: "https://www.lolobuy.com/helpCenter/1242300746301580" },
  { question: "Why are product payment and international shipping paid separately?", answer: "LoloBuy’s purchase guide separates the first payment for the item and Chinese domestic delivery from the later parcel submission and international freight payment after warehouse arrival.", sourceLabel: "Official purchase guide", sourceHref: "https://www.lolobuy.com/helpCenter/1242296499766165" },
  { question: "How long is free warehouse storage?", answer: "A dedicated LoloBuy storage page says 180 days, while an older purchase guide still mentions 90 days. Because the official documents conflict, check the countdown shown in your own warehouse account and do not wait until the final day.", sourceLabel: "Official storage rule", sourceHref: "https://www.lolobuy.com/helpCenter/1242300757049499" },
  { question: "Can every warehouse item be returned for free?", answer: "No. The published return terms refer to a 120-hour period after warehouse storage, seller acceptance, resale condition and product exclusions. Domestic return freight and service fees may apply, so request the return before altering or removing packaging.", sourceLabel: "Official return terms", sourceHref: "https://www.lolobuy.com/helpCenter/1242296939447441" },
  { question: "Why can the final international freight differ from the estimate?", answer: "The final packed parcel can be charged by actual weight or volumetric weight, depending on the route. Packaging, box removal, dimensions, destination and optional services can change the payable amount after packing.", sourceLabel: "Official weight explanation", sourceHref: "https://www.lolobuy.com/helpCenter/1242300798075086" },
  { question: "Can LoloBuy or a spreadsheet guarantee customs clearance?", answer: "No. Customs authorities and carriers control clearance. Published LoloBuy material warns that taxation, delay, return or confiscation can occur. Check destination restrictions and declare contents accurately.", sourceLabel: "Official customs-risk notice", sourceHref: "https://www.lolobuy.com/helpCenter/1242300933013835" },
  { question: "Should I remove shoe boxes or original packaging immediately?", answer: "Only after you finish the QC and return decision. Removing original packaging may reduce weight or volume, but LoloBuy warns that altered packaging can make a return or exchange unavailable.", sourceLabel: "Official packaging guidance", sourceHref: "https://www.lolobuy.com/helpCenter/1242300751675537" },
  { question: "What evidence should I keep if a parcel arrives damaged?", answer: "Keep the order page, parcel number, payment and tracking records. Photograph the unopened exterior and record a continuous opening video for valuable or visibly damaged parcels, then submit the after-sales request with clear photos and a factual timeline.", sourceLabel: "Official parcel after-sales guide", sourceHref: "https://www.lolobuy.com/helpCenter/1242301393535401" },
];

const faqZh: FaqItem[] = [
  { question: "这是 LoloBuy 官方网站吗？", answer: "不是。LoloBuy Sheet 是独立研究站。实时订单规则应以 LoloBuy 账户、结账页和帮助中心为准；findspreadsheet.com 是我们提供更大商品目录的主站。", sourceLabel: "打开主站商品数据库", sourceHref: "https://findspreadsheet.com/" },
  { question: "表格链接能保证库存、价格或质量吗？", answer: "不能。链接只能说明核对当时页面上能看到什么。卖家库存、规格和价格都可能改变；表格也不能证明真伪、未来库存或卖家履约能力。", sourceLabel: "浏览当前主站数据库", sourceHref: "https://findspreadsheet.com/" },
  { question: "LoloBuy 仓库 QC 图片到底能确认什么？", answer: "可用于比对可见的颜色、尺码标、测量数据、数量及明显外观瑕疵。按 LoloBuy 公布的验货范围，普通 QC 图片不等于真假鉴定、材质检测，也不能保证电子产品功能正常。", sourceLabel: "官方验货范围", sourceHref: "https://www.lolobuy.com/helpCenter/1242300746301580" },
  { question: "为什么商品和国际运费要分两次付款？", answer: "LoloBuy 购买指南把流程分成两段：第一次支付商品及中国境内运费；商品入库后再提交国际包裹，并支付国际运输费用。", sourceLabel: "官方购买指南", sourceHref: "https://www.lolobuy.com/helpCenter/1242296499766165" },
  { question: "免费仓储期到底是多少天？", answer: "LoloBuy 专项仓储页写的是180天，但较旧的购买指南仍出现90天，官方资料存在冲突。实际操作应查看自己账户仓库页的倒计时，不要拖到最后一天。", sourceLabel: "官方仓储规则", sourceHref: "https://www.lolobuy.com/helpCenter/1242300757049499" },
  { question: "仓库里的商品都能免费退货吗？", answer: "不能。公布的退货条款涉及入库后120小时、卖家是否接受、商品是否仍可二次销售以及不支持退货的品类。中国境内退件运费和服务费也可能由买家承担。", sourceLabel: "官方退货条款", sourceHref: "https://www.lolobuy.com/helpCenter/1242296939447441" },
  { question: "为什么最终国际运费会和预估不同？", answer: "打包后的包裹可能按实际重量或体积重量计费，具体取决于线路。包装方式、拆鞋盒、尺寸、目的地和增值服务都会改变最终应付金额。", sourceLabel: "官方重量说明", sourceHref: "https://www.lolobuy.com/helpCenter/1242300798075086" },
  { question: "LoloBuy 或商品表格能保证清关吗？", answer: "不能。清关由目的地海关和承运商控制。LoloBuy 公布的资料也提示可能发生征税、延误、退运或没收；用户应核对目的地限制并如实申报。", sourceLabel: "官方海关风险说明", sourceHref: "https://www.lolobuy.com/helpCenter/1242300933013835" },
  { question: "入库后要不要马上拆鞋盒或原包装？", answer: "先完成 QC 和退货决定再处理。拆包装可能降低重量或体积，但 LoloBuy 提醒，原包装被移除或改变后可能无法退换。", sourceLabel: "官方包装说明", sourceHref: "https://www.lolobuy.com/helpCenter/1242300751675537" },
  { question: "包裹到手破损，应保留哪些证据？", answer: "保留订单页、包裹号、付款和物流记录；开箱前拍清外包装，贵重或明显破损包裹建议连续录制开箱视频，再用清晰照片和时间线提交售后。", sourceLabel: "官方包裹售后指南", sourceHref: "https://www.lolobuy.com/helpCenter/1242301393535401" },
];

const faqEs: FaqItem[] = faqBase.map((item, index) => {
  const rows: [string, string][] = [
    ["¿Es este el sitio oficial de LoloBuy?", "No. LoloBuy Sheet es un sitio de investigación independiente. Para reglas actuales usa tu cuenta, el pago y la ayuda de LoloBuy; findspreadsheet.com es nuestra base principal."],
    ["¿Un enlace garantiza stock, precio o calidad?", "No. Solo registra lo visible al revisarlo. El stock, las variantes y el precio pueden cambiar; una hoja no prueba autenticidad ni rendimiento del vendedor."],
    ["¿Qué confirman realmente las fotos QC?", "Ayudan a comparar color, etiquetas, medidas, cantidad y defectos exteriores visibles. No equivalen a autenticar, probar materiales ni garantizar el funcionamiento de aparatos."],
    ["¿Por qué hay dos pagos?", "La guía oficial separa el pago del producto y transporte nacional chino del pago posterior del paquete internacional tras llegar al almacén."],
    ["¿Cuánto dura el almacenamiento gratuito?", "La página específica indica 180 días, pero una guía antigua aún dice 90. Comprueba la cuenta regresiva de tu almacén y no esperes al último día."],
    ["¿Todas las devoluciones de almacén son gratuitas?", "No. Influyen el plazo de 120 horas, la aceptación del vendedor, el estado de reventa, las exclusiones y posibles gastos nacionales o de servicio."],
    ["¿Por qué cambia el coste final de envío?", "El paquete puede cobrarse por peso real o volumétrico. Embalaje, dimensiones, destino, retirada de cajas y servicios cambian el importe final."],
    ["¿Se puede garantizar el despacho de aduanas?", "No. Aduanas y transportistas deciden. Puede haber impuestos, demora, devolución o confiscación; revisa restricciones y declara con precisión."],
    ["¿Debo quitar inmediatamente la caja original?", "Solo después de decidir si conservar o devolver. Puede reducir peso, pero modificar el embalaje puede impedir una devolución."],
    ["¿Qué pruebas guardo si llega dañado?", "Conserva pedido, número de paquete, pagos y seguimiento. Fotografía el exterior cerrado, graba la apertura y presenta una cronología clara con fotos."],
  ];
  return { ...item, question: rows[index][0], answer: rows[index][1] };
});

const faqDe: FaqItem[] = faqBase.map((item, index) => {
  const rows: [string, string][] = [
    ["Ist dies die offizielle LoloBuy-Website?", "Nein. LoloBuy Sheet ist unabhängig. Aktuelle Regeln stehen im LoloBuy-Konto, Checkout und Hilfezentrum; findspreadsheet.com ist unsere größere Produktdatenbank."],
    ["Garantiert ein Spreadsheet-Link Bestand, Preis oder Qualität?", "Nein. Er dokumentiert nur den sichtbaren Stand zum Prüfzeitpunkt. Bestand, Varianten und Preis können sich ändern; Echtheit und Verkäuferleistung sind nicht garantiert."],
    ["Was bestätigen QC-Fotos wirklich?", "Sie helfen bei sichtbarer Farbe, Etiketten, Maßen, Menge und äußeren Mängeln. Sie ersetzen keine Echtheits-, Material- oder Funktionsprüfung."],
    ["Warum gibt es zwei Zahlungen?", "LoloBuy trennt Produkt plus chinesischen Inlandsversand von der späteren internationalen Paketzahlung nach Lagereingang."],
    ["Wie lange ist die Lagerung kostenlos?", "Die Spezialseite nennt 180 Tage, eine ältere Anleitung 90 Tage. Prüfe den Countdown im eigenen Lagerkonto und warte nicht bis zum letzten Tag."],
    ["Ist jede Lagerrückgabe kostenlos?", "Nein. 120-Stunden-Frist, Verkäuferzustimmung, Wiederverkaufszustand, Ausschlüsse sowie Inlandsporto und Servicegebühren können gelten."],
    ["Warum ändert sich der endgültige Versandpreis?", "Je nach Route zählt tatsächliches oder Volumengewicht. Verpackung, Maße, Ziel, Kartonentfernung und Zusatzdienste ändern den Endbetrag."],
    ["Ist die Zollabfertigung garantiert?", "Nein. Zoll und Frachtführer entscheiden. Steuern, Verzögerung, Rücksendung oder Beschlagnahme sind möglich; Beschränkungen prüfen und korrekt deklarieren."],
    ["Sollte ich Originalkartons sofort entfernen?", "Erst nach QC und Rückgabeentscheidung. Das spart eventuell Gewicht, kann eine Rückgabe aber unmöglich machen."],
    ["Welche Beweise brauche ich bei Transportschaden?", "Bestellung, Paketnummer, Zahlung und Tracking sichern. Ungeöffnetes Paket fotografieren, Öffnung filmen und den Fall mit Bildern und Zeitablauf einreichen."],
  ];
  return { ...item, question: rows[index][0], answer: rows[index][1] };
});

export function getFaqItems(locale = "en"): FaqItem[] {
  if (locale === "zh") return faqZh;
  if (locale === "es") return faqEs;
  if (locale === "de") return faqDe;
  return faqBase;
}
