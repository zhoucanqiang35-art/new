import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lolobuysheet.shop"),
  title: { default: "LoloBuy Spreadsheet 2026: Finds, QC & Buyer Guides", template: "%s | LoloBuy Sheet" },
  description: "Independent LoloBuy spreadsheet research, QC guidance, and shipping explainers.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr">
      <body>{children}</body>
    </html>
  );
}
