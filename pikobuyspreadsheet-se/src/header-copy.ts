const labels: Record<string, readonly [string, string, string, string]> = {
  "en-US": ["Language", "Currency", "Join PikoBuy", "Indicative prices"],
  "de-DE": ["Sprache", "Währung", "Registrieren", "Ungefähre Preise"],
  "fr-FR": ["Langue", "Devise", "S’inscrire", "Prix indicatifs"],
  "es-ES": ["Idioma", "Moneda", "Registrarse", "Precios orientativos"],
  "it-IT": ["Lingua", "Valuta", "Registrati", "Prezzi indicativi"],
  "nl-NL": ["Taal", "Valuta", "Registreren", "Indicatieve prijzen"],
  "pl-PL": ["Język", "Waluta", "Zarejestruj się", "Ceny orientacyjne"],
  "pt-PT": ["Idioma", "Moeda", "Registar", "Preços indicativos"],
  "sv-SE": ["Språk", "Valuta", "Registrera dig", "Ungefärliga priser"],
  "da-DK": ["Sprog", "Valuta", "Tilmeld dig", "Vejledende priser"],
  "nb-NO": ["Språk", "Valuta", "Registrer deg", "Veiledende priser"],
  "fi-FI": ["Kieli", "Valuutta", "Rekisteröidy", "Ohjeelliset hinnat"],
  "cs-CZ": ["Jazyk", "Měna", "Zaregistrovat se", "Orientační ceny"],
  "ro-RO": ["Limbă", "Monedă", "Înregistrare", "Prețuri orientative"],
  "hu-HU": ["Nyelv", "Pénznem", "Regisztráció", "Tájékoztató árak"],
  "el-GR": ["Γλώσσα", "Νόμισμα", "Εγγραφή", "Ενδεικτικές τιμές"],
  "bg-BG": ["Език", "Валута", "Регистрация", "Ориентировъчни цени"],
  "hr-HR": ["Jezik", "Valuta", "Registracija", "Okvirne cijene"],
  "sk-SK": ["Jazyk", "Mena", "Registrácia", "Orientačné ceny"],
  "sl-SI": ["Jezik", "Valuta", "Registracija", "Okvirne cene"],
  "et-EE": ["Keel", "Valuuta", "Registreeru", "Ligikaudsed hinnad"],
  "lt-LT": ["Kalba", "Valiuta", "Registruotis", "Orientacinės kainos"],
};

export function getHeaderCopy(locale: string) {
  const [language, currency, join, indicativePrices] = labels[locale] || labels["en-US"];
  return { language, currency, join, indicativePrices };
}
