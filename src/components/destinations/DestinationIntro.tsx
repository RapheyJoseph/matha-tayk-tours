import { SectionContainer } from "@/components/shared/SectionContainer";
import { Reveal } from "@/components/shared/Reveal";
import type { DestinationPageData } from "@/data/destinations";

interface DestinationIntroProps {
  introduction: DestinationPageData["introduction"];
}

export function DestinationIntro({ introduction }: DestinationIntroProps) {
  return (
    <SectionContainer variant="pearl" paddedTop atmosphere={false}>
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="eyebrow">{introduction.eyebrow}</p>
          <h2 className="heading-section mt-7">{introduction.title}</h2>
        </Reveal>
        <div className="mt-12 space-y-7">
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
