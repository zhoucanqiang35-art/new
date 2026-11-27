import type { Copy } from "./site";
import type { SeoArticle } from "./seo-content";
import fr from "./translations/fr.json";
import de from "./translations/de.json";
import es from "./translations/es.json";
import it from "./translations/it.json";
import pt from "./translations/pt.json";
import nl from "./translations/nl.json";
import pl from "./translations/pl.json";
import ro from "./translations/ro.json";
import sv from "./translations/sv.json";
import da from "./translations/da.json";
import nb from "./translations/nb.json";
import fi from "./translations/fi.json";
import cs from "./translations/cs.json";
import sk from "./translations/sk.json";
import hu from "./translations/hu.json";
import el from "./translations/el.json";
import tr from "./translations/tr.json";
import zh from "./translations/zh.json";
import ja from "./translations/ja.json";
import ko from "./translations/ko.json";
import ar from "./translations/ar.json";

type LocaleBundle = {
  copy: Copy;
  articles: Pick<SeoArticle, "slug" | "title" | "description" | "sections" | "methodology">[];
  seo: { toc: string; direct: string; cluster: string; updated: string; continue: string };
  snippets: Record<string, string>;
};

const bundles: Record<string, LocaleBundle | undefined> = {
  fr, de, es, it, pt, nl, pl, ro, sv, da, nb, fi, cs, sk, hu, el, tr, zh, ja, ko, ar,
};

export function getLocale(code: string) {
  return bundles[code];
}

export function phrase(code: string, source: string) {
  return getLocale(code)?.snippets[source] ?? source;
}
