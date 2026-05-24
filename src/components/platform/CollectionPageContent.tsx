import { SikhAutumnDepartureFeature } from "@/components/collections/SikhAutumnDepartureFeature";
import { CinematicSpread } from "@/components/platform/CinematicSpread";
import { CollectionHero } from "@/components/platform/CollectionHero";
import { EditorialSection } from "@/components/platform/EditorialSection";
import { ExperienceGrid } from "@/components/platform/ExperienceGrid";
import { JourneyPanels } from "@/components/platform/JourneyPanels";
import { LuxuryCTA } from "@/components/platform/LuxuryCTA";
import type { CollectionPageData } from "@/data/collections";

const ctaOverlay: Record<CollectionPageData["atmosphere"], string> = {
  sikh: "collection-sikh-hero-gradient",
  buddhist: "collection-buddhist-hero-gradient",
  uae: "collection-uae-hero-gradient",
  pakistan: "autumn-departures-gradient",
};

interface CollectionPageContentProps {
  collection: CollectionPageData;
}

export function CollectionPageContent({
  collection,
}: CollectionPageContentProps) {
  return (
    <div className="collection-editorial-flow">
      <CollectionHero collection={collection} />
      <EditorialSection
        eyebrow={collection.introduction.eyebrow}
        title={collection.introduction.title}
        paragraphs={collection.introduction.paragraphs}
      />
      {collection.featuredDeparture ? (
        <SikhAutumnDepartureFeature departure={collection.featuredDeparture} />
      ) : null}
      <JourneyPanels
        destinationSlugs={collection.destinationSlugs}
        collectionTitle={collection.shortTitle}
      />
      <ExperienceGrid
        experiences={collection.experiences}
        collectionTitle={collection.shortTitle}
      />
      <CinematicSpread
        eyebrow={collection.imageSpread.eyebrow}
        caption={collection.imageSpread.caption}
        image={collection.imageSpread.image}
        imageAlt={collection.imageSpread.imageAlt}
        objectPosition={collection.imageSpread.objectPosition}
        atmosphere={collection.atmosphere}
      />
      <LuxuryCTA
        eyebrow={collection.cta.eyebrow}
        headline={collection.cta.headline}
        body={collection.cta.body}
        image={collection.hero.image}
        imageAlt={collection.hero.imageAlt}
        objectPosition={collection.hero.objectPosition}
        atmosphereClass={ctaOverlay[collection.atmosphere]}
      />
    </div>
  );
}
