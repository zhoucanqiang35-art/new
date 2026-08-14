import type { ReactNode } from "react";
import LanguageSwitcher from "./language-switcher";

export default function ArticleShell({ eyebrow, title, lead, children, ctaTitle = "Continue your product research", ctaText = "Open the maintained FindSpreadsheet product database when you are ready to compare current listings.", ctaHref = "https://findspreadsheet.com/", ctaLabel = "Browse the product database ↗" }: { eyebrow: string; title: string; lead: string; children: ReactNode; ctaTitle?: string; ctaText?: string; ctaHref?: string; ctaLabel?: string }) {
  const ctaIsExternal = ctaHref.startsWith("http");
  return (
    <main className="article-page" data-design="archive">
      <div className="review-bar"><span className="review-dot" /><strong>PRODUCTION RESEARCH HUB</strong><span>Public edition · Search index/follow enabled</span></div>
      <header className="article-top">
        <a className="brand" href="/" aria-label="LoloBuy Spreadsheet home"><span className="brand-mark brand-logo"><img src="/lolobuy.webp" alt="LoloBuy Spreadsheet cat bag logo" width="52" height="52" /></span><span className="brand-text">LoloBuy Spreadsheet</span></a>
        <nav className="article-nav" aria-label="Primary navigation">
          <a href="/categories/">Categories</a><a href="/guides/">Guides</a><a href="/shipping/">Shipping</a><a href="/method/">Method</a><a href="/sources/">Sources</a><a href="/faq/">FAQ</a><a href="/seo-articles/">SEO Articles</a>
        </nav>
        <details className="mobile-nav"><summary>Menu</summary><div><a href="/categories/">Categories</a><a href="/guides/">Guides</a><a href="/shipping/">Shipping</a><a href="/method/">Method</a><a href="/sources/">Sources</a><a href="/faq/">FAQ</a><a href="/seo-articles/">SEO Articles</a><a href="/updates/">Updates</a></div></details>
        <LanguageSwitcher />
      </header>
      <article className="article">
        <div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p className="lead">{lead}</p>{children}
        <div className="article-cta"><div><strong>{ctaTitle}</strong><p>{ctaText}</p></div><a className="primary-cta" href={ctaHref} target={ctaIsExternal ? "_blank" : undefined} rel={ctaIsExternal ? "noopener noreferrer" : undefined}>{ctaLabel}</a></div>
      </article>
      <footer className="footer article-footer">
        <div className="footer-main"><p><strong>Independent-use notice.</strong> Facts are tied to dated sources; changing prices, routes, restrictions and transaction terms must be rechecked on the relevant current page.</p><div className="footer-links"><a href="/shipping/">Shipping</a><a href="/sources/">Sources</a><a href="/updates/">Updates</a><a href="/editorial-policy/">Editorial policy</a><a href="/privacy/">Privacy</a></div></div>
      </footer>
    </main>
  );
}
