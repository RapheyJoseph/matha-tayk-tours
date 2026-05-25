import { AboutHero } from "@/components/about/AboutHero";
import { TeamRosterSection } from "@/components/about/TeamRosterSection";
import { LuxuryCTA } from "@/components/platform/LuxuryCTA";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { Reveal } from "@/components/shared/Reveal";
import { teamPage } from "@/data/about";

export function TeamPageContent() {
  const { hero, intro, roster, members, closing, cta } = teamPage;

  return (
    <div className="about-editorial-flow min-w-0 overflow-x-clip">
      <AboutHero
        hero={hero}
        backLink={{ href: "/about", label: "About Us" }}
      />

      <SectionContainer
        variant="pearl"
        paddedTop={false}
        atmosphere={false}
        className="about-origin-section about-section-band"
      >
        <div className="mx-auto w-full min-w-0 max-w-3xl">
          <Reveal>
            <p className="eyebrow">{intro.eyebrow}</p>
            <h2 className="heading-section collection-heading">{intro.title}</h2>
          </Reveal>
          <div className="collection-prose-stack">
            {intro.paragraphs.map((paragraph, i) => (
              <Reveal key={paragraph.slice(0, 32)} delay={0.06 * i}>
                <p className="body-lead prose-editorial">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </SectionContainer>

      <TeamRosterSection roster={roster} members={members} />

      <SectionContainer
        variant="pearl"
        paddedTop={false}
        atmosphere={false}
        className="about-approach-section about-section-band"
      >
        <div className="mx-auto w-full min-w-0 max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow">{closing.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.06}>
            <blockquote className="about-approach-quote mt-6 font-serif text-2xl leading-[1.35] tracking-[0.02em] text-brand-charcoal sm:text-[1.75rem]">
              <p>{closing.quote}</p>
            </blockquote>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="body-lead prose-editorial mx-auto mt-6 max-w-2xl">
              {closing.body}
            </p>
          </Reveal>
        </div>
      </SectionContainer>

      <LuxuryCTA
        eyebrow={cta.eyebrow}
        headline={cta.headline}
        body={cta.body}
        image={cta.image}
        imageAlt={cta.imageAlt}
        objectPosition={cta.objectPosition}
      />
    </div>
  );
}
