import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LoloBuy Spreadsheet UK",
  description: "Independent multilingual LoloBuy spreadsheet research, product discovery, QC and shipping guidance for UK and European shoppers.",
  robots: { index: false, follow: false },
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
