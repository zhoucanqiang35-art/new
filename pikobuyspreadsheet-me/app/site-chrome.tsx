import Link from "next/link";
import LanguageSwitcher from "./language-switcher";

const chrome = {
  en: {home:"Home",categories:"Categories",details:"Product Details",works:"How It Works",shipping:"Shipping",checklist:"Checklist",faq:"FAQ",articles:"SEO Articles",explore:"Explore",guides:"Guides",notice:"Independent notice",tagline:"Independent research for clearer spreadsheet decisions.",legal:"This guide is not PikoBuy and does not process orders, payments, refunds or shipments.",homeLabel:"PikoBuy guide home",navLabel:"Primary navigation",languageLabel:"Choose language"},
  de: {home:"Startseite",categories:"Kategorien",details:"Produktdetails",works:"So funktioniert es",shipping:"Versand",checklist:"Checkliste",faq:"FAQ",articles:"SEO-Artikel",explore:"Entdecken",guides:"Ratgeber",notice:"Unabhängiger Hinweis",tagline:"Unabhängige Recherche für klarere Produktentscheidungen.",legal:"Dieser Ratgeber ist nicht PikoBuy und bearbeitet keine Bestellungen, Zahlungen, Erstattungen oder Sendungen.",homeLabel:"Startseite des PikoBuy-Ratgebers",navLabel:"Hauptnavigation",languageLabel:"Sprache wählen"},
  fr: {home:"Accueil",categories:"Catégories",details:"Détails produits",works:"Fonctionnement",shipping:"Livraison",checklist:"Liste de contrôle",faq:"FAQ",articles:"Articles SEO",explore:"Explorer",guides:"Guides",notice:"Avis indépendant",tagline:"Recherche indépendante pour des choix plus clairs.",legal:"Ce guide n’est pas PikoBuy et ne traite ni commandes, ni paiements, ni remboursements, ni expéditions.",homeLabel:"Accueil du guide PikoBuy",navLabel:"Navigation principale",languageLabel:"Choisir la langue"},
  es: {home:"Inicio",categories:"Categorías",details:"Detalles",works:"Cómo funciona",shipping:"Envío",checklist:"Lista de control",faq:"FAQ",articles:"Artículos SEO",explore:"Explorar",guides:"Guías",notice:"Aviso independiente",tagline:"Investigación independiente para decisiones más claras.",legal:"Esta guía no es PikoBuy y no gestiona pedidos, pagos, reembolsos ni envíos.",homeLabel:"Inicio de la guía PikoBuy",navLabel:"Navegación principal",languageLabel:"Elegir idioma"},
  it: {home:"Home",categories:"Categorie",details:"Dettagli prodotti",works:"Come funziona",shipping:"Spedizione",checklist:"Checklist",faq:"FAQ",articles:"Articoli SEO",explore:"Esplora",guides:"Guide",notice:"Avviso indipendente",tagline:"Ricerca indipendente per decisioni più chiare.",legal:"Questa guida non è PikoBuy e non gestisce ordini, pagamenti, rimborsi o spedizioni.",homeLabel:"Home della guida PikoBuy",navLabel:"Navigazione principale",languageLabel:"Scegli la lingua"},
  pt: {home:"Início",categories:"Categorias",details:"Detalhes dos produtos",works:"Como funciona",shipping:"Envio",checklist:"Lista de verificação",faq:"FAQ",articles:"Artigos SEO",explore:"Explorar",guides:"Guias",notice:"Aviso independente",tagline:"Pesquisa independente para decisões mais claras.",legal:"Este guia não é a PikoBuy e não processa pedidos, pagamentos, reembolsos ou envios.",homeLabel:"Início do guia PikoBuy",navLabel:"Navegação principal",languageLabel:"Escolher idioma"},
  nl: {home:"Start",categories:"Categorieën",details:"Productdetails",works:"Hoe het werkt",shipping:"Verzending",checklist:"Checklist",faq:"FAQ",articles:"SEO-artikelen",explore:"Ontdekken",guides:"Gidsen",notice:"Onafhankelijke melding",tagline:"Onafhankelijk onderzoek voor duidelijkere keuzes.",legal:"Deze gids is niet PikoBuy en verwerkt geen bestellingen, betalingen, terugbetalingen of zendingen.",homeLabel:"Startpagina van de PikoBuy-gids",navLabel:"Hoofdnavigatie",languageLabel:"Kies taal"},
  pl: {home:"Strona główna",categories:"Kategorie",details:"Szczegóły produktów",works:"Jak to działa",shipping:"Wysyłka",checklist:"Lista kontrolna",faq:"FAQ",articles:"Artykuły SEO",explore:"Odkrywaj",guides:"Poradniki",notice:"Niezależna informacja",tagline:"Niezależne badania dla lepszych decyzji.",legal:"Ten poradnik nie jest serwisem PikoBuy i nie obsługuje zamówień, płatności, zwrotów ani przesyłek.",homeLabel:"Strona główna poradnika PikoBuy",navLabel:"Główna nawigacja",languageLabel:"Wybierz język"},
};

export function BrandLogo({lang="en"}:{lang?:keyof typeof chrome}) {
  const home=lang === "en" ? "/" : `/${lang}`;
  return <Link href={home} className="logo-brand" aria-label={chrome[lang].homeLabel}><img src="/pikobuy-logo.png" alt="PikoBuy" width="216" height="80" /></Link>;
}

export function SiteHeader({ lang = "en" }: { lang?: keyof typeof chrome }) {
  const t = chrome[lang]; const p = lang === "en" ? "" : `/${lang}`;
  return <header className="site-header">
    <BrandLogo lang={lang}/>
    <nav aria-label={t.navLabel}>
      <Link href={p || "/"}>{t.home}</Link><Link href={`${p || ""}/#categories`}>{t.categories}</Link><Link href={`${p}/product-details`}>{t.details}</Link><Link href={`${p}/how-pikobuy-works`}>{t.works}</Link><Link href={`${p}/shipping-guide`}>{t.shipping}</Link><Link href={`${p}/buyer-checklist`}>{t.checklist}</Link><Link href={`${p}/faq`}>{t.faq}</Link><Link href={`${p}/seo-articles`}>{t.articles}</Link>
    </nav>
    <LanguageSwitcher current={lang} label={t.languageLabel}/>
  </header>;
}

export function SiteFooter({ lang = "en" }: { lang?: keyof typeof chrome }) {
  const t = chrome[lang]; const p = lang === "en" ? "" : `/${lang}`;
  return <footer>
    <div><BrandLogo lang={lang}/><p>{t.tagline}</p></div>
    <div><b>{t.explore}</b><Link href={p || "/"}>{t.home}</Link><Link href={`${p}/product-details`}>{t.details}</Link><Link href={`${p}/seo-articles`}>{t.articles}</Link></div>
    <div><b>{t.guides}</b><Link href={`${p}/how-pikobuy-works`}>{t.works}</Link><Link href={`${p}/qc-guide`}>QC</Link><Link href={`${p}/shipping-guide`}>{t.shipping}</Link><Link href={`${p}/faq`}>FAQ</Link></div>
    <div><b>{t.notice}</b><p>{t.legal}</p></div>
  </footer>;
}
