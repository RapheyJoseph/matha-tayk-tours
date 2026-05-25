import { SectionContainer } from "@/components/shared/SectionContainer";
import { Reveal } from "@/components/shared/Reveal";
import type { DestinationPageData } from "@/data/destinations";

interface DestinationIntroProps {
  introduction: DestinationPageData["introduction"];
}

export function DestinationIntro({ introduction }: DestinationIntroProps) {
  return (
    <SectionContainer variant="pearl" paddedTop={false} atmosphere={false}>
      <div className="mx-auto w-full min-w-0 max-w-3xl">
        <Reveal>
          <p className="eyebrow">{introduction.eyebrow}</p>
          <h2 className="heading-section editorial-heading">{introduction.title}</h2>
        </Reveal>
        <div className="editorial-stack editorial-block-gap">
          {introduction.paragraphs.map((paragraph, i) => (
            <Reveal key={paragraph.slice(0, 24)} delay={0.06 * i}>
              <p className="body-lead prose-editorial">{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
