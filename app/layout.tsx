import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GlobalJsonLd } from "@/components/global-json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getCanonicalSiteUrl } from "@/lib/site";
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
  metadataBase: new URL(getCanonicalSiteUrl()),
  title: {
    default: "Pixel Vault Games",
    template: "%s · Pixel Vault Games",
  },
  description:
    "Retro video games: buy, sell, trade, repair, and community events in Ontario, CA. Family-owned since 2014.",
  openGraph: {
    siteName: "Pixel Vault Games",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Browser extensions (e.g. Dark Reader) inject attributes on <html> / <body> before hydrate.
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col bg-[var(--background)] font-sans antialiased text-zinc-100`}
        suppressHydrationWarning
      >
        <GlobalJsonLd />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
