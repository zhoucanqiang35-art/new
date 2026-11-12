import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pikobuyspreadsheet.us"),
  title: "PikoBuy Spreadsheet 2026 | Finds, QC & Shipping Research",
  description: "Independent PikoBuy spreadsheet research. Search FindSpreadsheet finds, compare listings, check warehouse QC photos and plan shipping before you order.",
  alternates: { canonical: "/", languages: {
    en: "/", de: "/de", fr: "/fr", es: "/es", it: "/it", pt: "/pt", nl: "/nl", pl: "/pl", sv: "/sv", "x-default": "/",
  } },
  robots: { index: true, follow: true },
  other: { "codex-preview": "development" },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
