import LanguageSwitcher from "./language-switcher";

export default function SiteHeader({ language = "en" }: { language?: string }) {
  return (
    <header className="site-header shell">
      <a className="brand" href="/" aria-label="PikoBuy Spreadsheet Europe home">
        <img className="brand-logo" src="/pikobuy-logo.png" alt="PikoBuy Spreadsheet Europe" />
      </a>
      <nav aria-label="Primary navigation">
        <a href="/">Home</a>
        <a href="/product-categories">Product categories</a>
        <a href="/product-details">Product details</a>
        <a href="/seo-articles">SEO articles</a>
        <a href="/faq">FAQ</a>
      </nav>
      <LanguageSwitcher current={language} />
    </header>
  );
}
