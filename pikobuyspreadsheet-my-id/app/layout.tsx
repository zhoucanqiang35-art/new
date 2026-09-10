import type { Metadata } from "next";
import "./globals.css";

const baseUrl = "https://pikobuyspreadsheet.my.id";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "PikoBuy Spreadsheet 2026 | Finds, QC, Shipping & Guides",
  description:
    "Independent PikoBuy spreadsheet guide with product categories, QC research, shipping guidance and FindSpreadsheet product routes.",
  alternates: {
    canonical: `${baseUrl}/`,
    languages: {
      en: `${baseUrl}/`,
      es: `${baseUrl}/es/`,
      de: `${baseUrl}/de/`,
      fr: `${baseUrl}/fr/`,
      it: `${baseUrl}/it/`,
      pt: `${baseUrl}/pt/`,
      nl: `${baseUrl}/nl/`,
      pl: `${baseUrl}/pl/`,
      sv: `${baseUrl}/sv/`,
      "x-default": `${baseUrl}/`,
    },
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
