import type { Metadata } from "next";
import "./globals.css";
import "./page-overrides.css";

export const metadata: Metadata = {
  title: "LoloGuide — Independent LoloBuy Buying Guide",
  description: "Independent LoloBuy research guidance for Europe and North America.",
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
