import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { homeMetadata, SITE_URL } from "./seo";
import { siteStructuredData, StructuredData } from "./structured-data";
import { ClientEnhancements } from "./client-enhancements";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...homeMetadata("en"),
  metadataBase: new URL(SITE_URL),
  other: {
    "theme-color": "#1d6b4d",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData data={siteStructuredData} />
        <ClientEnhancements />
        {children}
      </body>
    </html>
  );
}
