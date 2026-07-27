import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgressBar } from "@/components/layout/ScrollProgressBar";
import { PageLoader } from "@/components/layout/PageLoader";
import { profile } from "@/content/profile";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://mariam-batkuashvili.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} | iGaming Support`,
    template: `%s — ${profile.name}`,
  },
  description:
    "Mariam Batkuashvili is a Live Casino Game Presenter & Show Host transitioning into remote Customer Support, VIP Support, and Player Experience roles in iGaming. English (C1), Spanish (B2), Georgian (Native).",
  keywords: [
    "iGaming customer support",
    "VIP support specialist",
    "player experience",
    "customer success iGaming",
    "remote customer support",
    "live casino game presenter",
    "responsible gaming",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    type: "profile",
    title: `${profile.name} | iGaming Support`,
    description: profile.heroSubheadline,
    url: siteUrl,
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | iGaming Support`,
    description: profile.heroSubheadline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#08080b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-gold focus:px-4 focus:py-2 focus:text-background"
        >
          Skip to content
        </a>
        <PageLoader />
        <ScrollProgressBar />
        <div className="grain-overlay" />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
