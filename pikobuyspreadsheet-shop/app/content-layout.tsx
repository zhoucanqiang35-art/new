import { ReactNode } from "react";
import { LanguageCode, uiText } from "./i18n";
import { SiteFooter, SiteHeader } from "./site-chrome";
import { PageStructuredData } from "./structured-data";

export function ContentLayout({ language, kicker, title, intro, pathname, article = false, extraSchema, children, tone = "pink" }: {
  language: LanguageCode;
  kicker: string;
  title: string;
  intro: string;
  pathname: string;
  article?: boolean;
  extraSchema?: Record<string, unknown>;
  children: ReactNode;
  tone?: "pink" | "blue" | "lime";
}) {
  return (
    <main className={`preview-page preview-bazaar content-page tone-${tone}`} id="top">
      <PageStructuredData pathname={pathname} title={title} description={intro} article={article} extra={extraSchema} />
      <div className="preview-shell">
        <SiteHeader language={language} />
        <section className="content-hero">
          <div><p className="preview-eyebrow">{kicker}</p><h1>{title}</h1><p>{intro}</p></div>
          <aside><span>{uiText[language].checked}</span><b>Independent research</b><small>Official pages are linked beside factual claims. Policy facts were rechecked on 13 August 2026; live prices, routes and terms can still change.</small></aside>
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
