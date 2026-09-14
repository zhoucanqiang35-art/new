import type { Metadata } from "next";
import "./globals.css";
import { LanguageDock } from "./components/LanguageDock";

export const metadata: Metadata = {
  title: "LoloBuy Sheet Poland | Independent Product Research",
  description: "Independent LoloBuy spreadsheet research for European and North American shoppers: product context, QC questions and FindSpreadsheet category routes.",
  other: {
    "codex-preview": "development",
  },
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
    <html lang="en" translate="no">
      <head><meta name="google" content="notranslate" /></head>
      <body className="antialiased" translate="no">{children}<LanguageDock/></body>
    </html>
  );
}
