import de from "./translations/de.json";
import es from "./translations/es.json";
import fr from "./translations/fr.json";
import it from "./translations/it.json";
import nl from "./translations/nl.json";
import pl from "./translations/pl.json";
import pt from "./translations/pt.json";
import { priorityTranslations } from "./priority-translations";

type Dictionary = Record<string, string>;
const dictionaries: Record<string, Dictionary> = { de, es, fr, it, nl, pl, pt };

export function localiseSeo(locale: string, value: string) {
  return priorityTranslations[locale]?.[value] || dictionaries[locale]?.[value] || value;
}

export function localiseGuideTitle(locale: string, title: string) {
  return `${localiseSeo(locale, title)} | ${localiseSeo(locale, "PikoBuy Spreadsheet Europe")}`;
}
