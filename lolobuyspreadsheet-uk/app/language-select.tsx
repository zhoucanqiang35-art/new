const languages = [
  ["en", "EN · English"],
  ["de", "DE · Deutsch"],
  ["fr", "FR · Français"],
  ["es", "ES · Español"],
  ["it", "IT · Italiano"],
  ["nl", "NL · Nederlands"],
  ["pl", "PL · Polski"],
  ["pt", "PT · Português"],
  ["sv", "SV · Svenska"],
] as const;

export default function LanguageSelect({ lang, pathSuffix }: { lang: string; pathSuffix: string }) {
  const current = languages.find(([code]) => code === lang)?.[1] ?? languages[0][1];
  return (
    <details className="language-menu">
      <summary aria-label="Choose language">{current}</summary>
      <div className="language-options" role="list">
        {languages.map(([code, label]) => (
          <a
            aria-current={code === lang ? "page" : undefined}
            className={code === lang ? "current" : undefined}
            href={`/${code}${pathSuffix}`}
            key={code}
            lang={code}
            role="listitem"
          >{label}</a>
        ))}
      </div>
    </details>
  );
}
