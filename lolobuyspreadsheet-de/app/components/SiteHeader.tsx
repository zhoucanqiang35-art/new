import Link from "next/link";
import { localeCodes, localeText, localizedPath, sectionKeys, sectionPath, type Locale, type SectionKey } from "../data/locales";
import { uiCopy } from "../data/ui-copy";

export default function SiteHeader({ locale, active, suffix = "" }: { locale: Locale; active?: SectionKey; suffix?: string }) {
  const t = localeText[locale];
  const ui = uiCopy(locale);
  return <header className="site-header">
    <Link className="brand" href={localizedPath(locale)} aria-label={`LoloBuy · ${ui.home}`}><img className="brand-logo" src="/LolobuyLogo.svg" alt="LoloBuy" /></Link>
    <nav aria-label={ui.independent}><Link className={!active ? "nav-active" : ""} href={localizedPath(locale)}>{ui.home}</Link>{sectionKeys.map((section, i) => <Link className={active === section ? "nav-active" : ""} key={section} href={sectionPath(locale, section)}>{t.nav[i]}</Link>)}</nav>
    <details className="language-menu"><summary>{locale.toUpperCase()} · {t.name}</summary><div>{localeCodes.map(code => <Link className={code === locale ? "active" : ""} href={localizedPath(code, suffix)} key={code}><span>{code.toUpperCase()}</span>{localeText[code].name}</Link>)}</div></details>
  </header>;
}
