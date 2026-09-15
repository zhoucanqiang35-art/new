import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LoloBuy Sheet FR | Independent Research Preview",
  description: "A multilingual research preview for European and North American shoppers. The final domain is not connected.",
  robots: { index: false, follow: false },
  other: {
    "codex-preview": "research-preview",
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
