import type { ReactNode } from "react";
import type { Locale } from "../../lib/site-data";
import Brand from "./Brand";
import HeaderNav from "./HeaderNav";
import LanguageSwitcher from "./LanguageSwitcher";
import { getUi } from "../../lib/i18n";

export default function PageFrame({locale,currentSlug,children}:{locale:Locale;currentSlug:string;children:ReactNode}){
  const ui=getUi(locale.code);
  return <main className="v3 v3-directory-page" lang={locale.lang}>
    <div className="v3-review">{locale.independent.toUpperCase()} · {ui.review.toUpperCase()} · PIKOBUY 2026</div>
    <header className="v3-header v3-wrap"><Brand href={`/${locale.code}/`} /><HeaderNav localeCode={locale.code} currentSlug={currentSlug}/><LanguageSwitcher current={locale.code}/></header>
    {children}
    <footer className="v3-footer"><div className="v3-wrap"><Brand href={`/${locale.code}/`} /><p>{locale.independent}. {locale.intro}</p><div><a href={`/${locale.code}/`}>{locale.name}</a><a href={`/${locale.code}/sources/`}>{locale.sourcesLabel}</a></div></div></footer>
  </main>;
}
