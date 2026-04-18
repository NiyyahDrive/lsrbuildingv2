import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import StickyCTA from "@/components/StickyCTA";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LSR Building | Projectcoördinatie & Werfbeheer Brecht & Antwerpen",
  description:
    "Professionele projectcoördinatie, renovatiewerken en werfleiding in België. VOL VCA gecertificeerd. 10+ jaar ervaring. Offerte in 24 uur.",
  keywords:
    "projectcoördinatie Brecht, werfbeheer Antwerpen, projectleiding België, bouwregie, renovatiewerken, VOL VCA, werfleider",
  openGraph: {
    title: "LSR Building | Projectcoördinatie & Bouwregie",
    description: "Professionele bouwprojectcoördinatie in België. €650K+ bespaard voor onze klanten.",
    type: "website",
    url: "https://lsrbuilding.be",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ExitIntentPopup />
        <StickyCTA />
      </body>
    </html>
  );
}
