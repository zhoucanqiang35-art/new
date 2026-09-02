'use client';
import Link from 'next/link';
import { LANGS, navFor, withLanguage } from '../i18n';

const NAV_ITEMS = [
  ['Home', '/'],
  ['Product Details', '/products'],
  ['Product Categories', '/categories'],
  ['SEO Articles', '/articles/pikobuy-order-qc-shipping'],
  ['FAQ', '/faq'],
  ['About', '/about']
];

export default function SiteHeader({ language = 'EN' }) {
  const updateLanguage = (event) => {
    const next = event.target.value;
    const url = new URL(window.location.href);
    if (next === 'EN') url.searchParams.delete('lang'); else url.searchParams.set('lang', next);
    window.location.assign(url.toString());
  };

  return <header>
    <Link className="brand" href="/" aria-label="PikoBuyChina home"><img src="/pikobuy-logo.png" alt="PikoBuy"/></Link>
    <div className="header-right">
      <nav aria-label="Primary navigation">{NAV_ITEMS.map(([, href], index) => <Link key={href} href={withLanguage(href, language)}>{navFor(language)[index]}</Link>)}</nav>
      <select value={language} onChange={updateLanguage} aria-label="Language">
        {LANGS.map(([code, name]) => <option key={code} value={code}>{name}</option>)}
      </select>
    </div>
  </header>;
}
