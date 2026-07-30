import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pikobuyy.com"),
  title: "Pikobuy Spreadsheet 2026 — Product Finds, QC & Guides",
  description: "Browse an independent Pikobuy spreadsheet with organized product finds, categories, QC photo guidance and practical shopping research.",
  keywords: ["Pikobuy spreadsheet", "Pikobuy finds", "Pikobuy QC", "Pikobuy guide"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Pikobuy Spreadsheet 2026",
    description: "Organized finds, category pages, QC guidance and current shopping research.",
    url: "https://pikobuyy.com",
    siteName: "Pikobuyy Spreadsheet",
    type: "website",
  },
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
