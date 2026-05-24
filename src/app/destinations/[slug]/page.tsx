import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DestinationPageContent } from "@/components/destinations/DestinationPageContent";
import {
  getAllDestinationSlugs,
  getDestinationBySlug,
} from "@/data/destinations";
import { siteConfig } from "@/data/home";

interface DestinationPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllDestinationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: DestinationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    return { title: "Destination not found" };
  }

  const description = destination.introduction.paragraphs[0];

  return {
    title: `${destination.name} | Sacred Heritage Journey`,
    description,
    openGraph: {
      title: `${destination.name} | ${siteConfig.name}`,
      description,
      images: [{ url: destination.hero.image, alt: destination.hero.imageAlt }],
    },
  };
}

export default async function DestinationPage({ params }: DestinationPageProps) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    notFound();
  }

  return <DestinationPageContent destination={destination} />;
}
