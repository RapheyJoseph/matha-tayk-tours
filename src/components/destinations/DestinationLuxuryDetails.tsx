import { SectionContainer } from "@/components/shared/SectionContainer";
import { Reveal } from "@/components/shared/Reveal";
import type { LuxuryDetail } from "@/data/destinations";

interface DestinationLuxuryDetailsProps {
  details: LuxuryDetail[];
}

export function DestinationLuxuryDetails({ details }: DestinationLuxuryDetailsProps) {
  return (
    <SectionContainer variant="pearl" paddedTop={false}>
      <Reveal className="max-w-xl">
        <p className="eyebrow">Curated luxury</p>
        <h2 className="heading-section editorial-heading">
          Every detail composed—
          <span className="block sm:inline"> so devotion leads the day.</span>
        </h2>
      </Reveal>

      <div className="editorial-block-gap grid gap-px overflow-hidden rounded-2xl border border-brand-charcoal/[0.06] bg-brand-charcoal/[0.06] sm:grid-cols-2">
        {details.map((detail, i) => (
          <Reveal key={detail.title} delay={0.04 * i}>
            <div className="h-full bg-brand-white p-6 sm:p-9 lg:p-10">
              <h3 className="font-serif text-lg font-medium tracking-[-0.015em] text-brand-charcoal">
                {detail.title}
              </h3>
              <p className="body-copy mt-4 leading-[1.78]">{detail.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
