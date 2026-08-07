import { ReactNode } from "react";
import { LanguageCode, uiText } from "./i18n";
import { SiteFooter, SiteHeader } from "./site-chrome";

export function ContentLayout({ language, kicker, title, intro, children, tone = "pink" }: {
  language: LanguageCode;
  kicker: string;
  title: string;
  intro: string;
  children: ReactNode;
  tone?: "pink" | "blue" | "lime";
}) {
  return (
    <main className={`preview-page preview-bazaar content-page tone-${tone}`} id="top">
      <div className="preview-shell">
        <SiteHeader language={language} />
        <section className="content-hero">
          <div><p className="preview-eyebrow">{kicker}</p><h1>{title}</h1><p>{intro}</p></div>
          <aside><span>{uiText[language].checked}</span><b>Independent research</b><small>Official pages are linked beside factual claims. Policy facts were rechecked on 06 August 2026; live prices, routes and terms can still change.</small></aside>
        </section>
        {children}
        <SiteFooter language={language} />
      </div>
    </main>
  );
}

export function SourceNote({ children }: { children: ReactNode }) {
  return <p className="source-note">SOURCE NOTE · {children}</p>;
}

export type PageSearchParams = { searchParams: Promise<{ lang?: string }> };
