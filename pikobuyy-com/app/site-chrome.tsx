import { languages, localeCopy, routeFor, type Locale, type Section } from "./site-content";

export function SiteHeader({ locale = "en", section }: { locale?: Locale; section?: Section }) {
  const copy = localeCopy[locale];
  const activeLanguage = languages.find((language) => language.code === locale)!;

  return (
    <header className="site-header">
      <a className="brand" href={routeFor(locale)} aria-label="Pikobuyy Spreadsheet home">
        <img className="brand-logo" src="/pikobuy-logo.png" alt="Pikobuyy" />
      </a>
      <nav aria-label="Main navigation">
        {(["categories", "guides", "articles", "updates", "faq"] as Section[]).map((item) => (
          <a className={section === item ? "active" : ""} href={routeFor(locale, item)} key={item}>
            {copy.nav[item]}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <a className="header-cta" href="https://findspreadsheet.com/" target="_blank" rel="noopener noreferrer">
          {copy.open} <span>↗</span>
        </a>
        <details className="language-menu">
          <summary aria-label={copy.language}>
            <span>{activeLanguage.flag}</span><b>{activeLanguage.short}</b><i>⌄</i>
          </summary>
          <div className="language-panel">
            <p>{copy.language}</p>
            {languages.map((language) => (
              <a className={language.code === locale ? "active" : ""} href={routeFor(language.code, section)} key={language.code}>
                <span>{language.flag}</span><b>{language.label}</b><small>{language.short}</small>
              </a>
            ))}
          </div>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter({ locale = "en" }: { locale?: Locale }) {
  const copy = localeCopy[locale];
  return (
    <footer>
      <div className="brand"><img className="brand-logo" src="/pikobuy-logo.png" alt="Pikobuyy" /></div>
      <p>{copy.independent}</p>
      <div>
        <a href={routeFor(locale, "categories")}>{copy.nav.categories}</a>
        <a href={routeFor(locale, "guides")}>{copy.nav.guides}</a>
        <a href={routeFor(locale, "articles")}>{copy.nav.articles}</a>
        <a href={routeFor(locale, "updates")}>{copy.nav.updates}</a>
        <a href={routeFor(locale, "faq")}>{copy.nav.faq}</a>
        <a href={routeFor(locale)}>↑</a>
      </div>
      <small>© 2026 Pikobuyy Spreadsheet. {copy.footerTag}</small>
    </footer>
  );
}
