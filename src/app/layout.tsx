import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";

const TITLE = "Ember Data — Real-time data infrastructure for onchain applications";
const DESCRIPTION =
  "Ember Data is a fictional portfolio concept: developer-first data infrastructure delivering real-time price feeds and verified cross-chain intelligence to decentralized applications.";

export const metadata: Metadata = {
  title: {
    default: TITLE,
    template: "%s | Ember Data",
  },
  description: DESCRIPTION,
  keywords: [
    "blockchain data",
    "oracle",
    "price feeds",
    "cross-chain data",
    "developer infrastructure",
    "decentralized applications",
    "portfolio concept",
  ],
  authors: [{ name: "Ember Data" }],
  creator: "Ember Data",
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Ember Data",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0D10",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased">
        {/* Flags JS availability so scroll-reveal styles only apply when
            the Reveal component can actually reveal the content. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js');",
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ember focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#140b08]"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
