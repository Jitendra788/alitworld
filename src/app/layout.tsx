import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
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

export const metadata: Metadata = {
  title: "Alitworld Technologies | Turning Visions Into Digital Reality",
  description:
    "Custom development and SaaS prebuilt solutions. Trusted by 130k+ people. Streamline your business with Alitworld Technologies.",
  keywords: [
    "web development",
    "SaaS",
    "custom development",
    "prebuilt apps",
    "Alitworld Technologies",
  ],
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    apple: [{ url: "/logo.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} flex min-h-screen flex-col overflow-x-hidden antialiased`}>
        <Header />
        <main className="w-full min-w-0 flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
