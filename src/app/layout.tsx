import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/layout/SiteShell";
import { siteConfig } from "@/data/home";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mathatayktours.com"),
  title: {
    default: `${siteConfig.name} | Luxury Sikh Heritage Tourism`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Matha Tayk Tours crafts cinematic, reverent journeys across Pakistan’s sacred Sikh heritage—from Nankana Sahib to Kartarpur—with private guides, curated stays, and seamless corridor travel.",
  keywords: [
    "Sikh heritage tours",
    "Pakistan pilgrimage",
    "Nankana Sahib",
    "Kartarpur Corridor",
    "luxury spiritual travel",
    "Matha Tayk Tours",
  ],
  openGraph: {
    title: `${siteConfig.name} | Luxury Sikh Heritage Tourism`,
    description:
      "Curated spiritual journeys across Pakistan’s gurdwaras—composed with reverence, discretion, and the confidence of a private travel atelier.",
    type: "website",
    locale: "en_GB",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Luxury Sikh Heritage Tourism`,
    description:
      "Curated spiritual journeys across Pakistan’s gurdwaras—composed with reverence and modern ease.",
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#faf9f7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${playfair.variable} min-h-screen bg-brand-warm font-sans antialiased`}
      >
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
