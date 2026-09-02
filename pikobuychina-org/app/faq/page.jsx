import SiteHeader from '../components/SiteHeader';
import { faqItemsFor } from '../research-data';
import { languageFrom, pageCopy } from '../i18n';

export const metadata = {
  title: 'PikoBuy Research FAQ | PikoBuy China Research Hub',
  description: 'Independent answers about PikoBuy ordering, warehouse QC, shipping and returns.'
};

export default async function FaqPage({searchParams}) {
  const lang=languageFrom((await searchParams).lang); const p=pageCopy(lang); const faqItems=faqItemsFor(lang);
  return <main className="detail-page faq-page">
    <SiteHeader language={lang}/>
    <section className="detail-hero"><p className="kicker">{p.faqKicker}</p><h1>{p.faqTitle}</h1><p>{p.faqText}</p><p>{p.fullContext}</p></section>
    <section className="faq full-faq">{faqItems.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</section>
  </main>;
}
