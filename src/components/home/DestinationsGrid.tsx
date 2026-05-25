"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { DestinationPanelLink } from "@/components/destinations/DestinationPanelLink";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { Reveal } from "@/components/shared/Reveal";
import type { DestinationSummary } from "@/data/destinations";
import { destinations } from "@/data/home";
import { staggerParent, slideUp } from "@/lib/motion-variants";
import { cn } from "@/lib/utils";

type Destination = DestinationSummary;

function NankanaDestinationPanel({
  place,
  variants,
}: {
  place: Destination;
  variants: typeof slideUp;
}) {
  return (
    <motion.div
      variants={variants}
      className={cn(
        "h-full min-h-0 self-stretch sm:col-span-2 xl:col-span-3 xl:row-span-2",
      )}
    >
      <DestinationPanelLink
        href={place.href}
        label={place.name}
        className="h-full min-h-0"
      >
        <article
          className={cn(
            "group/nankana destination-nankana-card relative isolate h-full min-h-0 overflow-hidden rounded-[1.35rem] bg-brand-charcoal",
          )}
        >
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={place.image}
          alt={place.imageAlt}
          fill
          priority
          sizes="(max-width:1280px) 100vw, 50vw"
          className="destination-nankana-media object-cover object-[58%_48%] max-[480px]:object-[62%_50%] sm:object-[56%_46%] lg:object-[54%_45%]"
        />

        <div
          className="destination-nankana-sky-soften pointer-events-none absolute inset-0 z-[1]"
          aria-hidden
        />
        <div
          className="destination-nankana-warmth pointer-events-none absolute inset-0 z-[1]"
          aria-hidden
        />
        <div
          className="destination-nankana-left-veil pointer-events-none absolute inset-0 z-[1]"
          aria-hidden
        />
        <div
          className="destination-nankana-depth pointer-events-none absolute inset-0 z-[1]"
          aria-hidden
        />
        <div
          className="destination-nankana-overlay pointer-events-none absolute inset-0 z-[2]"
          aria-hidden
        />
        <div
          className="destination-nankana-vignette pointer-events-none absolute inset-0 z-[2]"
          aria-hidden
        />

        <DestinationCopy place={place} groupHover="group-hover/nankana" />
      </div>
        </article>
      </DestinationPanelLink>
    </motion.div>
  );
}

function KartarpurDestinationPanel({
  place,
  variants,
}: {
  place: Destination;
  variants: typeof slideUp;
}) {
  return (
    <motion.div
      variants={variants}
      className="sm:col-span-2 xl:col-span-3"
    >
      <DestinationPanelLink href={place.href} label={place.name}>
        <article
          className={cn(
            "group/kartarpur destination-kartarpur-card relative overflow-hidden rounded-[1.35rem]",
          )}
        >
      <div className="relative aspect-[4/3] min-h-[240px] w-full overflow-hidden sm:aspect-[16/10] sm:min-h-[400px] lg:aspect-[21/10] lg:min-h-[440px] xl:min-h-[480px]">
        <Image
          src={place.image}
          alt={place.imageAlt}
          fill
          priority
          className="destination-kartarpur-media object-cover object-[50%_42%] max-[480px]:object-[50%_44%] sm:object-[50%_40%] lg:object-[50%_38%]"
          sizes="(max-width:1280px) 100vw, 50vw"
        />

        <div
          className="destination-kartarpur-twilight-glow pointer-events-none absolute inset-0"
          aria-hidden
        />
        <div
          className="destination-kartarpur-reflection pointer-events-none absolute inset-0"
          aria-hidden
        />
        <div
          className="destination-kartarpur-overlay pointer-events-none absolute inset-0"
          aria-hidden
        />
        <div
          className="destination-kartarpur-vignette pointer-events-none absolute inset-0"
          aria-hidden
        />

        <DestinationCopy place={place} groupHover="group-hover/kartarpur" />
      </div>
        </article>
      </DestinationPanelLink>
    </motion.div>
  );
}

function LahoreDestinationPanel({
  place,
  variants,
}: {
  place: Destination;
  variants: typeof slideUp;
}) {
  return (
    <motion.div
      variants={variants}
      className="sm:col-span-2 xl:col-span-6"
    >
      <DestinationPanelLink href={place.href} label={place.name}>
        <article
          className={cn(
            "group/lahore destination-lahore-card relative overflow-hidden rounded-[1.35rem]",
          )}
        >
      <div className="relative aspect-[4/3] min-h-[240px] w-full overflow-hidden sm:aspect-[16/9] sm:min-h-[380px] lg:aspect-[21/9] lg:min-h-[420px] xl:min-h-[500px]">
        <Image
          src={place.image}
          alt={place.imageAlt}
          fill
          className="destination-lahore-media object-cover object-[52%_42%] max-[480px]:object-[54%_44%] sm:object-[50%_40%] lg:object-[48%_38%]"
          sizes="100vw"
        />

        <div
          className="destination-lahore-haze pointer-events-none absolute inset-0"
          aria-hidden
        />
        <div
          className="destination-lahore-sunset-glow pointer-events-none absolute inset-0"
          aria-hidden
        />
        <div
          className="destination-lahore-sandstone pointer-events-none absolute inset-0"
          aria-hidden
        />
        <div
          className="destination-lahore-overlay pointer-events-none absolute inset-0"
          aria-hidden
        />
        <div
          className="destination-lahore-vignette pointer-events-none absolute inset-0"
          aria-hidden
        />

        <DestinationCopy place={place} groupHover="group-hover/lahore" />
      </div>
        </article>
      </DestinationPanelLink>
    </motion.div>
  );
}

function HasanAbdalDestinationPanel({
  place,
  variants,
}: {
  place: Destination;
  variants: typeof slideUp;
}) {
  return (
    <motion.div
      variants={variants}
      className="sm:col-span-2 xl:col-span-3"
    >
      <DestinationPanelLink href={place.href} label={place.name}>
        <article
          className={cn(
            "group/hasan destination-hasan-card relative overflow-hidden rounded-[1.35rem]",
          )}
        >
      <div className="relative aspect-[4/3] min-h-[240px] w-full overflow-hidden sm:aspect-[16/10] sm:min-h-[380px] lg:aspect-[21/10] lg:min-h-[420px] xl:min-h-[460px]">
        <Image
          src={place.image}
          alt={place.imageAlt}
          fill
          className="destination-hasan-media object-cover object-[50%_44%] max-[480px]:object-[50%_46%] sm:object-[50%_42%] lg:object-[48%_40%]"
          sizes="(max-width:1280px) 100vw, 50vw"
        />

        <div
          className="destination-hasan-mountain-haze pointer-events-none absolute inset-0"
          aria-hidden
        />
        <div
          className="destination-hasan-sunset pointer-events-none absolute inset-0"
          aria-hidden
        />
        <div
          className="destination-hasan-ivory pointer-events-none absolute inset-0"
          aria-hidden
        />
        <div
          className="destination-hasan-water pointer-events-none absolute inset-0"
          aria-hidden
        />
        <div
          className="destination-hasan-overlay pointer-events-none absolute inset-0"
          aria-hidden
        />
        <div
          className="destination-hasan-vignette pointer-events-none absolute inset-0"
          aria-hidden
        />

        <DestinationCopy place={place} groupHover="group-hover/hasan" />
      </div>
        </article>
      </DestinationPanelLink>
    </motion.div>
  );
}

function EminabadDestinationPanel({
  place,
  variants,
}: {
  place: Destination;
  variants: typeof slideUp;
}) {
  return (
    <motion.div
      variants={variants}
      className="h-full min-h-0 self-stretch sm:col-span-2 xl:col-span-3"
    >
      <DestinationPanelLink
        href={place.href}
        label={place.name}
        className="h-full min-h-0"
      >
        <article
          className={cn(
            "group/eminabad destination-eminabad-card relative isolate h-full min-h-0 overflow-hidden rounded-[1.35rem] bg-brand-charcoal",
          )}
        >
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={place.image}
          alt={place.imageAlt}
          fill
          loading="lazy"
          quality={82}
          sizes="(max-width:1280px) 100vw, 50vw"
          className="destination-eminabad-media object-cover object-[48%_44%] max-[480px]:object-[50%_46%] sm:object-[48%_42%] lg:object-[46%_40%]"
        />

        <div
          className="destination-eminabad-haze pointer-events-none absolute inset-0 z-[1]"
          aria-hidden
        />
        <div
          className="destination-eminabad-sunset pointer-events-none absolute inset-0 z-[1]"
          aria-hidden
        />
        <div
          className="destination-eminabad-ivory pointer-events-none absolute inset-0 z-[1]"
          aria-hidden
        />
        <div
          className="destination-eminabad-pathway pointer-events-none absolute inset-0 z-[1]"
          aria-hidden
        />
        <div
          className="destination-eminabad-depth pointer-events-none absolute inset-0 z-[1]"
          aria-hidden
        />
        <div
          className="destination-eminabad-overlay pointer-events-none absolute inset-0 z-[2]"
          aria-hidden
        />
        <div
          className="destination-eminabad-vignette pointer-events-none absolute inset-0 z-[2]"
          aria-hidden
        />

        <DestinationCopy place={place} groupHover="group-hover/eminabad" />
      </div>
        </article>
      </DestinationPanelLink>
    </motion.div>
  );
}

function DestinationCopy({
  place,
  groupHover,
}: {
  place: Destination;
  groupHover: string;
}) {
  return (
    <div className="absolute inset-x-0 bottom-0 z-[3] flex flex-col justify-end p-5 sm:p-11 lg:p-12">
      <div className="w-full min-w-0 max-w-md">
        <p className="label-meta text-brand-gold-soft">{place.tag}</p>
        <h3 className="mt-3 text-balance font-serif text-[1.55rem] leading-[1.08] tracking-[-0.025em] text-white sm:mt-4 sm:text-[2.15rem] lg:text-[2.4rem]">
          {place.name}
        </h3>
        <p className="mt-5 max-w-[36ch] text-[15px] leading-[1.8] text-white/93 sm:text-base">
          {place.lead}
        </p>
        <p className="mt-4 max-w-[38ch] text-sm leading-[1.78] text-white/78 md:hidden">
          {place.narrative}
        </p>
        <p
          className={cn(
            "mt-4 hidden max-w-[38ch] text-sm leading-[1.78] text-white/86 md:block",
            "max-h-0 opacity-0 translate-y-3 overflow-hidden",
            "transition-[max-height,opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
            `${groupHover}:max-h-[260px] ${groupHover}:translate-y-0 ${groupHover}:opacity-100 ${groupHover}:pt-2`,
          )}
        >
          {place.narrative}
        </p>
      </div>
    </div>
  );
}

export function DestinationsGrid() {
  const [nankana, kartarpur, lahore, hasanAbdal, eminabad] = destinations;

  return (
    <SectionContainer id="destinations" variant="pearl" paddedTop>
      <motion.div
        className="editorial-intro-row lg:flex-row lg:items-end lg:justify-between"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-8%" }}
        variants={staggerParent}
      >
        <Reveal className="w-full min-w-0 max-w-xl">
          <p className="eyebrow">Destinations</p>
          <h2 className="heading-section editorial-heading text-balance">
            Landscapes etched with memory—
            <span className="block sm:inline"> revealed with scholarly grace.</span>
          </h2>
        </Reveal>
        <Reveal variant="fade" delay={0.12} className="w-full min-w-0 max-w-md lg:max-w-sm lg:text-right">
          <p className="body-copy sm:text-[15px]">
            Each frame is a chapter we read slowly with you—never as a checklist.
            Pause, listen, return; the story deepens every time.
          </p>
        </Reveal>
      </motion.div>

      <motion.div
        className="editorial-card-grid editorial-block-gap grid items-stretch sm:grid-cols-2 xl:grid-cols-6 [&>*]:min-h-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-8%" }}
        variants={staggerParent}
      >
        <NankanaDestinationPanel place={nankana} variants={slideUp} />
        <KartarpurDestinationPanel place={kartarpur} variants={slideUp} />
        <LahoreDestinationPanel place={lahore} variants={slideUp} />
        <HasanAbdalDestinationPanel place={hasanAbdal} variants={slideUp} />
        <EminabadDestinationPanel place={eminabad} variants={slideUp} />
      </motion.div>
    </SectionContainer>
  );
}
