import { SectionContainer } from "@/components/shared/SectionContainer";
import { Reveal } from "@/components/shared/Reveal";
import type { JourneyMoment } from "@/data/destinations";

interface DestinationJourneyProps {
  journey: JourneyMoment[];
  destinationName: string;
}

export function DestinationJourney({
  journey,
  destinationName,
}: DestinationJourneyProps) {
  return (
    <SectionContainer variant="nightSoft" paddedTop>
      <Reveal className="max-w-xl">
        <p className="eyebrow">Experience journey</p>
        <h2 className="heading-section mt-7">
          A day in {destinationName}—
          <span className="block sm:inline"> composed, never crowded.</span>
        </h2>
      </Reveal>

      <ol className="relative mt-16 max-w-3xl">
        <div
          className="absolute bottom-4 left-[0.65rem] top-4 w-px bg-gradient-to-b from-brand-gold/50 via-brand-gold/25 to-transparent sm:left-5"
          aria-hidden
        />
        {journey.map((moment, i) => (
          <Reveal key={moment.title} delay={0.04 * i}>
            <li className="relative grid grid-cols-[auto_1fr] gap-6 pb-12 last:pb-0 sm:gap-8 sm:pb-14">
              <div className="relative z-[1] flex flex-col items-center pt-1">
                <span
                  className="flex size-[1.35rem] shrink-0 items-center justify-center rounded-full border border-brand-gold/40 bg-brand-linen sm:size-10"
                  aria-hidden
                >
                  <span className="size-1.5 rounded-full bg-brand-gold sm:size-2" />
                </span>
              </div>
              <div className="min-w-0 pb-1">
                <p className="label-meta text-brand-gold/90">{moment.time}</p>
                <h3 className="heading-card mt-3 text-xl sm:text-[1.35rem]">
                  {moment.title}
                </h3>
                <p className="body-copy mt-4 max-w-prose leading-[1.78]">
                  {moment.description}
                </p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </SectionContainer>
  );
}
