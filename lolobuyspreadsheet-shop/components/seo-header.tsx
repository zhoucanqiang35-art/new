import { localeNames, locales, localPath, type Locale, ui } from "@/lib/seo";

export function SeoHeader({ locale }: { locale: Locale }) {
  const t = ui(locale);
  return <header className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-6 sm:px-8">
    <a href={localPath(locale)} className="flex items-center gap-2 font-black tracking-[-.05em] text-[#10213b]" aria-label="LoloBuy Spreadsheet home"><img src="/images/lolobuy-logo.png" alt="LoloBuy" className="h-9 w-auto" /><span className="hidden sm:inline">Research Atlas</span></a>
    <nav className="hidden items-center gap-5 text-sm font-bold text-[#40506d] md:flex" aria-label="Primary navigation"><a href={localPath(locale)}>{t.home}</a><a href={localPath(locale, "/guides")}>{t.guides}</a><a href={localPath(locale, "/categories")}>{t.categories}</a><a href={localPath(locale, "/faq")}>{t.faq}</a></nav>
    <details className="relative"><summary className="cursor-pointer list-none rounded-xl border border-[#cbd3e6] bg-white px-3 py-2 text-sm font-bold text-[#1647cf]">{locale.toUpperCase()}</summary><div className="absolute right-0 z-20 mt-2 grid w-40 grid-cols-2 gap-1 rounded-xl border border-[#cbd3e6] bg-white p-2 shadow-xl">{locales.map((code) => <a key={code} href={localPath(code)} className={`rounded-lg px-2 py-1.5 text-xs font-bold hover:bg-[#edf1fb] ${code === locale ? "bg-[#edf1fb] text-[#1647cf]" : "text-[#40506d]"}`} lang={code}>{localeNames[code]}</a>)}</div></details>
  </header>;
}
