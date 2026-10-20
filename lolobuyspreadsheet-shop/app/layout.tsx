import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lolobuyspreadsheet.shop"),
  title: { default: "LoloBuy Spreadsheet Research Atlas", template: "%s | LoloBuy Spreadsheet" },
  description: "Independent LoloBuy spreadsheet research for source links, QC photos and international parcel planning.",
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
