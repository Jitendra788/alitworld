import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/config";
import { absoluteUrl, createPageMetadata, defaultKeywords } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const homeMeta = createPageMetadata({
  title: "Alitworld Technologies | Website, App, Marketing & SEO Company in Jaipur",
  description:
    "Alitworld Technologies — IT company in Jaipur for website designing, mobile app development, custom & prebuilt software, digital marketing, and SEO ranking. Search Alitworld to find us.",
  path: "/",
  keywords: defaultKeywords,
});

export const metadata: Metadata = {
  ...homeMeta,
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    apple: [{ url: "/logo.png", type: "image/png" }],
  },
  openGraph: {
    ...homeMeta.openGraph,
    images: [
      {
        url: absoluteUrl("/logo.png"),
        width: 512,
        height: 512,
        alt: "Alitworld Technologies logo",
      },
    ],
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
        className={`${geistSans.variable} flex min-h-screen flex-col overflow-x-hidden antialiased`}
      >
        <JsonLd />
        <Header />
        <main className="w-full min-w-0 flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
