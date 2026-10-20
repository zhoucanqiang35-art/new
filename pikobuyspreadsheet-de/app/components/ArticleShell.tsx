import type { ReactNode } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

type ArticleShellProps = {
  eyebrow: string;
  title: string;
  intro: string;
  updated?: string;
  asideAction?: ReactNode;
  footerDatabaseLink?: boolean;
  children: ReactNode;
};

export default function ArticleShell({ eyebrow, title, intro, updated = "24 August 2026", asideAction, footerDatabaseLink = true, children }: ArticleShellProps) {
  return (
    <div className="article-shell">
      <header className="topbar article-topbar">
        <a className="brand" href="/" aria-label="PikoBuy Spreadsheet home">
          <img className="brand-logo" src="/pikobuy-logo.png" alt="PikoBuy" width="204" height="48" />
        </a>
        <nav aria-label="Primary navigation">
          <a href="/">Home</a>
          <a href="/products">Product details</a>
          <a href="/categories">Categories</a>
          <a href="/guides">Guides</a>
          <a href="/shipping">Shipping</a>
          <a href="/faq">FAQ</a>
          <a href="/articles">SEO articles</a>
        </nav>
        <div className="header-actions">
          <LanguageSwitcher />
        </div>
      </header>

      <main>
        <section className="article-hero">
          <div className="article-breadcrumb"><a href="/">Home</a><span>/</span><b>{eyebrow}</b></div>
          <span className="kicker">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{intro}</p>
          <div className="article-meta"><span>Fact-checked against public PikoBuy materials</span><span>Updated {updated}</span></div>
        </section>
        <div className="article-layout">
          <article className="prose">{children}</article>
          <aside className="article-aside">
            <div className="aside-card">
              <span className="kicker">Scope note</span>
              <h3>Independent, not official.</h3>
              <p>This site helps readers research products and workflows. Account, payment, order, return and shipment decisions remain with the relevant live service.</p>
            </div>
            {asideAction ?? (
              <div className="aside-card dark-card">
                <span className="kicker">Next step</span>
                <h3>Check the live record.</h3>
                <p>Product links, selected variants, images and prices can change after publication.</p>
                <a className="button button-light" href="https://findspreadsheet.com/AllProducts/" target="_blank" rel="noreferrer">Browse main database ↗</a>
              </div>
            )}
          </aside>
        </div>
      </main>

      <footer>
        <div className="footer-brand"><img className="brand-logo footer-logo" src="/pikobuy-logo.png" alt="PikoBuy" width="204" height="48" /></div>
        <p>{footerDatabaseLink ? <>Product discovery continues on <a href="https://findspreadsheet.com/" target="_blank" rel="noreferrer">findspreadsheet.com ↗</a>. No checkout, payment or order processing happens here.</> : <>Use the live product database linked in the article when you are ready to recheck a record. No checkout, payment or order processing happens here.</>}</p>
        <div className="footer-links"><a href="/">Home</a><a href="/products">Product details</a><a href="/categories">Categories</a><a href="/guides">Guides</a><a href="/shipping">Shipping</a><a href="/faq">FAQ</a><a href="/articles">SEO articles</a></div>
        <small>© 2026 PikoBuy Spreadsheet Research Desk · Independent and not affiliated with PikoBuy.</small>
      </footer>
    </div>
  );
}
