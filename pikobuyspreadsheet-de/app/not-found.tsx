import LanguageSwitcher from "./components/LanguageSwitcher";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <img className="brand-logo" src="/pikobuy-logo.png" alt="PikoBuy" width="204" height="48" />
      <span className="kicker">404 · Page not found</span>
      <h1>This research page is no longer here.</h1>
      <p>The address may be incomplete or the record may have moved. Continue with a verified section below instead of following a dead end.</p>
      <LanguageSwitcher />
      <div className="not-found-actions"><a className="button" href="/">Return home</a><a className="button button-outline" href="/products">Product details</a><a className="button button-outline" href="/articles">SEO articles</a></div>
    </main>
  );
}
