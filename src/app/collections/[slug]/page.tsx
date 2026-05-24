import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CollectionPageContent } from "@/components/platform/CollectionPageContent";
import {
  getAllCollectionSlugs,
  getCollectionBySlug,
} from "@/data/collections";
import { siteConfig } from "@/data/home";

interface CollectionPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllCollectionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CollectionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    return { title: "Collection not found" };
  }

  const description = collection.introduction.paragraphs[0];

  return {
    title: `${collection.title} | Curated Journeys`,
    description,
    openGraph: {
      title: `${collection.title} | ${siteConfig.name}`,
      description,
      images: [{ url: collection.hero.image, alt: collection.hero.imageAlt }],
    },
  };
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    notFound();
  }

  return <CollectionPageContent collection={collection} />;
}
