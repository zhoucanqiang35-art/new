import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { absoluteSiteUrl, SITE_URL } from "./site-config";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "PikoBuy Spreadsheet Pro",
  description:
    "Independent PikoBuy product-link research, QC guides, shipping context and source-backed buyer information.",
  robots: { index: false, follow: false },
  other: { "codex-preview": "development" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  alternates: { canonical: absoluteSiteUrl("/") },
  openGraph: {
    type: "website",
    siteName: "PikoBuy Spreadsheet Pro",
    title: "PikoBuy Spreadsheet Pro",
    description:
      "Independent PikoBuy product-link research, QC guides, shipping context and source-backed buyer information.",
    url: absoluteSiteUrl("/"),
    images: [
      {
        url: absoluteSiteUrl("/pikobuy-logo.png"),
        alt: "PikoBuy Spreadsheet Pro",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "PikoBuy Spreadsheet Pro",
    description: "Independent source-backed PikoBuy research.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const localeScript = `(function(){var p=location.pathname.split('/').filter(Boolean)[0]||'en';var l=${JSON.stringify(["es", "de", "fr", "it", "pt", "nl", "pl", "cs", "sv", "da", "nb", "fi", "el", "ro", "hu", "tr", "ar", "ru", "uk", "ja", "hi", "id", "vi"])};document.documentElement.lang=l.indexOf(p)>-1?p:'en';document.documentElement.dir=p==='ar'?'rtl':'ltr';})();`;
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: localeScript }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
