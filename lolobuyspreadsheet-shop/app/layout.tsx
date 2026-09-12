import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LoloBuy Spreadsheet Shop | Research Atlas 2026",
  description: "An independent, multilingual LoloBuy research atlas for product discovery, QC and parcel planning.",
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
