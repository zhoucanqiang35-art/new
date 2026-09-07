import { localeText, type Locale, type SectionKey } from "./locales";

const homeNames: Record<Locale, string> = {
  en: "Home", de: "Startseite", fr: "Accueil", es: "Inicio", it: "Home", nl: "Home",
  pt: "Início", pl: "Strona główna", sv: "Hem", da: "Hjem", no: "Hjem", fi: "Etusivu",
  cs: "Domů", ro: "Acasă", hu: "Kezdőlap", el: "Αρχική", tr: "Ana sayfa", uk: "Головна",
  ru: "Главная", ar: "الرئيسية", zh: "首页", "zh-tw": "首頁", ja: "ホーム", ko: "홈",
};

export function uiCopy(locale: Locale) {
  const t = localeText[locale];
  const leads: Record<SectionKey, string> = {
    categories: `${t.nav[0]} · ${t.search}`,
    workflow: `${t.nav[1]} · ${t.faqLead}`,
    guides: `${t.nav[2]} · ${t.intro}`,
    markets: `${t.nav[3]} · 24 · ${t.name}`,
    faq: t.faqLead,
    sources: `${t.nav[5]} · ${t.intro}`,
  };

  return {
    home: homeNames[locale],
    independent: t.name,
    searchButton: t.search,
    searchPlaceholder: t.search,
    leads,
    readGuide: t.nav[2],
    reviewRecord: t.nav[5],
    openDatabase: t.browse,
    backToSources: t.nav[5],
    footer: t.intro,
  };
}
