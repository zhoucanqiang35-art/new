import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LoloFind — LoloBuy Spreadsheet Research Hub",
  description: "Independent destination-aware research and discovery for LoloBuy-style shopping. Search the FindSpreadsheet database.",
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
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
