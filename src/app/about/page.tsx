import type { Metadata } from "next";
import { AboutPageContent } from "@/components/about/AboutPageContent";
import { siteConfig } from "@/data/home";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover the story behind Matha Tayk Tours—an atelier for sacred journeys across Pakistan, devoted to interfaith harmony, ethical pilgrimage, and spiritually fulfilling travel.",
  openGraph: {
    title: `About Us | ${siteConfig.name}`,
    description:
      "From a friendship born in 2018 to a revitalized studio in 2023—learn how Matha Tayk composes pilgrimages rooted in reflection, respect, and connection.",
    images: [
      {
        url: "/media/hero-kartarpur-panorama.png",
        alt: "Gurdwara Darbar Sahib Kartarpur at golden hour",
      },
    ],
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
