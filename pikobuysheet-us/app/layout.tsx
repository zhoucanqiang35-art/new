import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pikobuysheet.us"),
  title: {
    default: "PikoBuy Spreadsheet: Product Links, QC Photos & Shipping Guide",
    template: "%s | PikoBuy Sheet",
  },
  description:
    "Independent PikoBuy spreadsheet research for product links, category comparison, QC photo checks and practical parcel planning.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "PikoBuy Spreadsheet: Product Links, QC Photos & Shipping Guide",
    description: "Independent research for product links, QC photo checks and responsible parcel planning.",
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
