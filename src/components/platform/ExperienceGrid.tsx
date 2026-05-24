import { SectionContainer } from "@/components/shared/SectionContainer";
import { Reveal } from "@/components/shared/Reveal";
import type { CuratedExperience } from "@/data/collections";

interface ExperienceGridProps {
  experiences: CuratedExperience[];
  collectionTitle: string;
}

export function ExperienceGrid({
  experiences,
  collectionTitle,
}: ExperienceGridProps) {
  return (
    <SectionContainer variant="cream" paddedTop={false}>
      <Reveal className="max-w-xl">
        <p className="eyebrow">Curated experiences</p>
        <h2 className="heading-section collection-heading">
          Within {collectionTitle}—
          <span className="block sm:inline"> composed, never crowded.</span>
        </h2>
      </Reveal>

      <div className="collection-card-grid collection-block-gap sm:grid-cols-2">
        {experiences.map((item, i) => (
          <Reveal key={item.title} delay={0.05 * i}>
            <article className="editorial-card h-full rounded-2xl p-7 sm:p-8">
              <h3 className="heading-card text-xl">{item.title}</h3>
              <p className="body-copy mt-4 leading-[1.78]">{item.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
