import type { Metadata } from "next";
import "./globals.css";
import TranslationEngine from "./components/TranslationEngine";

export const metadata: Metadata = {
  metadataBase: new URL("https://pikobuyspreadsheet.de"),
  title: "PikoBuy Spreadsheet 2026 | Searchable Product Links & EU Guide",
  description: "An independent PikoBuy spreadsheet research guide for category-first product discovery, QC checks, shipping context and live FindSpreadsheet records.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "PikoBuy Spreadsheet 2026 | Searchable Product Links & EU Guide",
    description: "Research smarter. Compare product finds, QC signals, sizing and parcel context before opening the live database.",
    images: [{ url: "/og-hero.jpg", width: 1400, height: 735, alt: "PikoBuy Spreadsheet research guide" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PikoBuy Spreadsheet 2026 | Searchable Product Links & EU Guide",
    description: "Research smarter. Compare clearly.",
    images: ["/og-hero.jpg"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const languageBootstrap = `(()=>{try{const p=location.pathname.split('/').filter(Boolean)[0];const allowed=['de','fr','es','it','nl','pl','pt','sv'];const l=allowed.includes(p)?p:'en';document.documentElement.lang=l;document.documentElement.dataset.siteLanguage=l;document.documentElement.dataset.translationComplete=l==='en'?'true':'false'}catch(e){}})();`;
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: languageBootstrap }} /></head>
      <body suppressHydrationWarning><TranslationEngine />{children}</body>
    </html>
  );
}
