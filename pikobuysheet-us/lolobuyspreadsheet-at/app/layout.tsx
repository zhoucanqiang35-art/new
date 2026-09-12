import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LoloBuy Spreadsheet AT | Independent FindSpreadsheet Guide",
  description: "Independent product discovery, QC and shipping planning guide for FindSpreadsheet.",
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
