import { SectionContainer } from "@/components/shared/SectionContainer";
import { Reveal } from "@/components/shared/Reveal";
import type { SectionVariant } from "@/components/shared/SectionContainer";

interface EditorialSectionProps {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  variant?: SectionVariant;
}

export function EditorialSection({
  eyebrow,
  title,
  paragraphs,
  variant = "pearl",
}: EditorialSectionProps) {
  return (
    <SectionContainer variant={variant} paddedTop={false} atmosphere={false}>
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="heading-section collection-heading">{title}</h2>
        </Reveal>
        <div className="collection-prose-stack">
          {paragraphs.map((paragraph, i) => (
            <Reveal key={paragraph.slice(0, 28)} delay={0.06 * i}>
              <p className="body-lead prose-editorial">{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
