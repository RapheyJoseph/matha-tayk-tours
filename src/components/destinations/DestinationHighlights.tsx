import { SectionContainer } from "@/components/shared/SectionContainer";
import { Reveal } from "@/components/shared/Reveal";
import type { HeritageHighlight } from "@/data/destinations";

interface DestinationHighlightsProps {
  highlights: HeritageHighlight[];
}

export function DestinationHighlights({ highlights }: DestinationHighlightsProps) {
  return (
    <SectionContainer variant="cream" paddedTop={false}>
      <Reveal className="max-w-xl">
        <p className="eyebrow">Heritage highlights</p>
        <h2 className="heading-section editorial-heading">
          Architecture, history, and the sacred—
          <span className="block sm:inline"> read with scholarly care.</span>
        </h2>
      </Reveal>

      <div className="editorial-card-grid editorial-block-gap sm:grid-cols-2">
        {highlights.map((item, i) => (
          <Reveal key={item.title} delay={0.05 * i}>
            <article className="editorial-card h-full rounded-2xl p-6 sm:p-9 lg:p-10">
              <p className="label-meta">{item.category}</p>
              <h3 className="heading-card mt-5">{item.title}</h3>
              <p className="body-copy mt-5 leading-[1.78]">{item.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
