import { Check, ChevronDown, Globe2 } from "lucide-react";

const languages = [
  ["en", "English"], ["fr", "Français"], ["de", "Deutsch"],
  ["es", "Español"], ["it", "Italiano"], ["pt", "Português"],
  ["nl", "Nederlands"], ["pl", "Polski"], ["sv", "Svenska"],
] as const;

export function ArticleLanguagePicker({ initialLanguage="en", slug, label="Choose language" }:{ initialLanguage?:string; slug:string; label?:string }) {
  const active = languages.find(([code]) => code === initialLanguage) ?? languages[0];

  return <details className="article-language-picker">
    <summary aria-label={label}>
      <Globe2 size={15}/>
      <span>{active[0].toUpperCase()} · {active[1]}</span>
      <ChevronDown size={13}/>
    </summary>
    <div className="article-language-menu" role="menu">
      {languages.map(([code, name]) => {
        const href = code === "en" ? `/articles/${slug}` : `/${code}/articles/${slug}`;
        return <a key={code} href={href} hrefLang={code} lang={code} role="menuitem" aria-current={code === initialLanguage ? "page" : undefined}>
          <span>{code.toUpperCase()} · {name}</span>
          {code === initialLanguage && <Check size={13}/>} 
        </a>;
      })}
    </div>
  </details>;
}
