"use client";

import { SiteHeader } from "../components/SiteHeader";
import { languageCopy, pageLabels, useLanguage } from "../i18n";

export default function Details(){const language=useLanguage();const t=languageCopy[language];const labels=pageLabels[language];return <main><SiteHeader/><section className="details-section standalone"><p className="eyebrow">{labels.buyerCheck}</p><h1>{t.guide}</h1><p className="large-copy">{t.guideBody} {t.faqBody}</p><a className="text-link" href="https://findspreadsheet.com/">{t.explore} ↗</a></section></main>}
