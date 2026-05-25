import { AboutHero } from "@/components/about/AboutHero";
import { AboutValuesSection } from "@/components/about/AboutValuesSection";
import { LuxuryCTA } from "@/components/platform/LuxuryCTA";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { Reveal } from "@/components/shared/Reveal";
import { aboutPage } from "@/data/about";
import Image from "next/image";

export function AboutPageContent() {
  const {
    hero,
    origin,
    philosophy,
    unity,
    missionVision,
    approach,
    values,
    cta,
  } = aboutPage;

  return (
    <div className="about-editorial-flow min-w-0 overflow-x-clip">
      <AboutHero hero={hero} />

      <SectionContainer
        variant="pearl"
        paddedTop={false}
        atmosphere={false}
        className="about-origin-section about-section-band"
      >
        <div className="mx-auto w-full min-w-0 max-w-3xl">
          <Reveal>
            <p className="eyebrow">{origin.eyebrow}</p>
            <h2 className="heading-section collection-heading">{origin.title}</h2>
          </Reveal>
          <div className="collection-prose-stack">
            {origin.paragraphs.map((paragraph, i) => (
              <Reveal key={paragraph.slice(0, 32)} delay={0.06 * i}>
                <p className="body-lead prose-editorial">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </SectionContainer>

      <SectionContainer
        variant="cream"
        paddedTop={false}
        atmosphere={false}
        className="about-philosophy-section about-chapter-band"
        innerClassName="flex w-full min-w-0 flex-col items-stretch"
      >
        <div className="about-split-grid grid w-full min-w-0 items-center lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <Reveal className="editorial-panel-slot order-2 w-full min-w-0 lg:order-1">
            <div className="editorial-panel-slot relative mx-auto aspect-[4/5] w-full max-w-lg overflow-hidden rounded-[1.25rem] bg-brand-charcoal shadow-exhibition sm:aspect-[5/6] lg:max-w-none lg:aspect-[4/5]">
              <Image
                src={philosophy.image}
                alt={philosophy.imageAlt}
                fill
                loading="lazy"
                quality={85}
                className="object-cover brightness-[1.04] saturate-[1.04]"
                style={{ objectPosition: philosophy.objectPosition }}
                sizes="(max-width: 1024px) 90vw, 45vw"
              />
              <div
                className="collection-sikh-spread-overlay pointer-events-none absolute inset-0"
                aria-hidden
              />
              <div
                className="destination-page-image-vignette pointer-events-none absolute inset-0"
                aria-hidden
              />
            </div>
          </Reveal>

          <div className="order-1 min-w-0 lg:order-2">
            <Reveal>
              <p className="eyebrow">{philosophy.eyebrow}</p>
              <h2 className="heading-section collection-heading text-balance">
                {philosophy.title}
              </h2>
              <p className="body-lead editorial-lead-gap max-w-xl text-pretty">
                {philosophy.lead}
              </p>
            </Reveal>

            <ul className="about-pillar-stack">
              {philosophy.pillars.map((pillar, i) => (
                <Reveal key={pillar.label} delay={0.08 * i}>
                  <li className="about-pillar-card rounded-2xl border border-brand-charcoal/[0.06] bg-brand-white/80 px-5 py-5 sm:px-7 sm:py-6">
                    <p className="label-meta text-[9px] text-brand-gold-mid">
                      {pillar.label}
                    </p>
                    <p className="body-copy mt-3.5 leading-[1.78]">{pillar.body}</p>
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.2}>
              <p className="body-lead about-block-gap max-w-xl text-pretty italic text-brand-body/95">
                {philosophy.closing}
              </p>
            </Reveal>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer
        variant="nightSoft"
        paddedTop={false}
        atmosphere={false}
        className="about-unity-section about-section-band"
      >
        <div className="mx-auto w-full min-w-0 max-w-3xl">
          <Reveal>
            <p className="eyebrow">{unity.eyebrow}</p>
            <h2 className="heading-section collection-heading text-balance">
              {unity.title}
            </h2>
          </Reveal>
          <div className="collection-prose-stack">
            {unity.paragraphs.map((paragraph, i) => (
              <Reveal key={paragraph.slice(0, 32)} delay={0.06 * i}>
                <p className="body-lead prose-editorial">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </SectionContainer>

      <SectionContainer
        variant="pearl"
        paddedTop={false}
        atmosphere={false}
        className="about-mission-section about-chapter-band"
      >
        <div className="mx-auto w-full min-w-0 max-w-4xl">
          <Reveal className="text-center">
            <p className="eyebrow">{missionVision.eyebrow}</p>
            <h2 className="heading-section collection-heading">
              {missionVision.title}
            </h2>
          </Reveal>

          <div className="about-card-grid about-block-gap md:grid-cols-2">
            <Reveal delay={0.06}>
              <article className="editorial-card h-full rounded-2xl p-7 sm:p-10">
                <p className="label-meta text-[9px] text-brand-gold-mid">
                  Mission
                </p>
                <p className="body-lead mt-5 text-pretty leading-[1.82]">
                  {missionVision.mission}
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.12}>
              <article className="editorial-card h-full rounded-2xl p-7 sm:p-10">
                <p className="label-meta text-[9px] text-brand-gold-mid">
                  Vision
                </p>
                <p className="body-lead mt-5 text-pretty leading-[1.82]">
                  {missionVision.vision}
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer
        variant="cream"
        paddedTop={false}
        atmosphere={false}
        className="about-approach-section about-chapter-band"
      >
        <div className="mx-auto w-full min-w-0 max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow">{approach.eyebrow}</p>
            <h2 className="heading-section collection-heading text-balance">
              {approach.title}
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <blockquote className="about-approach-quote about-block-gap mx-auto max-w-2xl border-none p-0">
              <p className="font-serif text-xl leading-[1.45] tracking-[-0.02em] text-brand-charcoal sm:text-2xl lg:text-[1.75rem] lg:leading-[1.42]">
                &ldquo;{approach.quote}&rdquo;
              </p>
            </blockquote>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="body-lead mx-auto max-w-xl text-pretty">{approach.body}</p>
          </Reveal>
        </div>
      </SectionContainer>

      <AboutValuesSection values={values} />

      <LuxuryCTA
        eyebrow={cta.eyebrow}
        headline={cta.headline}
        body={cta.body}
        image={cta.image}
        imageAlt={cta.imageAlt}
        objectPosition={cta.objectPosition}
        atmosphereClass="collection-sikh-hero-gradient"
      />
    </div>
  );
}
