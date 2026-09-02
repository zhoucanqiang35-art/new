import SiteHeader from '../components/SiteHeader';
import { languageFrom, pageCopy } from '../i18n';
import { ui } from '../content';

export const metadata = {
  title: 'About | PikoBuy China Research Hub',
  description: 'About the independent PikoBuy China product research hub.'
};

export default async function AboutPage({searchParams}) {
  const lang=languageFrom((await searchParams).lang); const p=pageCopy(lang); const u=ui[lang];
  return <main className="detail-page about-page">
    <SiteHeader language={lang}/>
    <section className="detail-hero"><p className="kicker">{p.aboutKicker}</p><h1>{p.aboutTitle}</h1><p>{p.aboutText}</p><p>{p.fullContext}</p></section>
    <section className="detail-notes about-notes"><h2>{u.aboutDo}</h2><p>{u.aboutDoText}</p><h2>{u.aboutNot}</h2><p>{u.aboutNotText}</p></section>
  </main>;
}
