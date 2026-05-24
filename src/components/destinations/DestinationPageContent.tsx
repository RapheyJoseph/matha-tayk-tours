import { DestinationClosingCta } from "@/components/destinations/DestinationClosingCta";
import { DestinationHero } from "@/components/destinations/DestinationHero";
import { DestinationHighlights } from "@/components/destinations/DestinationHighlights";
import { DestinationImagePanel } from "@/components/destinations/DestinationImagePanel";
import { DestinationIntro } from "@/components/destinations/DestinationIntro";
import { DestinationJourney } from "@/components/destinations/DestinationJourney";
import { DestinationLuxuryDetails } from "@/components/destinations/DestinationLuxuryDetails";
import type { DestinationPageData } from "@/data/destinations";

interface DestinationPageContentProps {
  destination: DestinationPageData;
}

export function DestinationPageContent({
  destination,
}: DestinationPageContentProps) {
  return (
    <>
      <DestinationHero destination={destination} />
      <DestinationIntro introduction={destination.introduction} />
      <DestinationHighlights highlights={destination.highlights} />
      {destination.imageSections.map((section) => (
        <DestinationImagePanel key={section.caption} section={section} />
      ))}
      <DestinationJourney
        journey={destination.journey}
        destinationName={destination.name}
      />
      <DestinationLuxuryDetails details={destination.luxuryDetails} />
      <DestinationClosingCta destination={destination} />
    </>
  );
}
