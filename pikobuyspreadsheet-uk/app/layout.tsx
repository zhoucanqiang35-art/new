import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PikoBuy Spreadsheet | Product Finds, QC Photos & Guides",
  description: "Research PikoBuy product finds by category, source link and option. Compare QC photos, measurements and parcel factors with an independent FindSpreadsheet guide.",
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
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
