import type { Metadata } from "next";
import { TeamPageContent } from "@/components/about/TeamPageContent";
import { siteConfig } from "@/data/home";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the Matha Tayk studio—travel professionals, theologians, historians, and cultural mediators devoted to composed, spiritually fulfilling pilgrimage.",
  openGraph: {
    title: `Our Team | ${siteConfig.name}`,
    description:
      "The specialists behind every Matha Tayk journey—pilgrimage design, spiritual liaison, cultural mediation, and concierge care.",
    images: [
      {
        url: "/images/collections/sikh-heritage-hero.jpg",
        alt: "Sacred heritage architecture at golden hour",
      },
    ],
  },
  alternates: {
    canonical: "/about/team",
  },
};

export default function TeamPage() {
  return <TeamPageContent />;
}
