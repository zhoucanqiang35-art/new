import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pikobuyspreadsheet.cc"),
  title: {
    default: "PikoBuy Spreadsheet Research Hub",
    template: "%s | PikoBuy Spreadsheet Research Hub",
  },
  description:
    "Independent PikoBuy spreadsheet research, product discovery, QC checks, shipping variables and official-source notes.",
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
      <body>{children}</body>
    </html>
  );
}
