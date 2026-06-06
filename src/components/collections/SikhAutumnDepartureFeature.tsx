"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { Reveal } from "@/components/shared/Reveal";
import type { FeaturedDeparture } from "@/data/collections";
import { useReducedMotionAfterHydration } from "@/hooks/useReducedMotionAfterHydration";
import { cn } from "@/lib/utils";

interface SikhAutumnDepartureFeatureProps {
  departure: FeaturedDeparture;
}

function renderDescription(
  description: string,
  emphasis?: string,
): ReactNode {
  if (!emphasis) return description;

  const index = description.indexOf(emphasis);
  if (index === -1) return description;

  return (
    <>
      {description.slice(0, index)}
      <strong>{emphasis}</strong>
      {description.slice(index + emphasis.length)}
    </>
  );
}

export function SikhAutumnDepartureFeature({
  departure,
}: SikhAutumnDepartureFeatureProps) {
  const reduceMotion = useReducedMotionAfterHydration();

  return (
    <SectionContainer
      id={departure.id}
      variant="cream"
      paddedTop={false}
      atmosphere={false}
      className="featured-departure-section"
      innerClassName="flex w-full min-w-0 flex-col items-stretch"
    >
      <Reveal className="featured-departure-intro w-full min-w-0">
        <p className="eyebrow">{departure.sectionEyebrow}</p>
        <h2 className="heading-section collection-heading w-full max-w-full text-balance">
          {departure.sectionTitle}
        </h2>
        <p className="body-lead editorial-lead-gap max-w-[62ch] text-pretty leading-[1.84] text-brand-body sm:leading-[1.86]">
          {departure.sectionLead}
        </p>
      </Reveal>

      <Reveal delay={0.08} className="editorial-panel-slot editorial-block-gap w-full min-w-0">
        <div
          className={cn(
            "editorial-panel-slot group/departure relative isolate mx-auto min-h-[min(92vw,440px)] w-full max-w-full overflow-hidden rounded-[1.35rem]",
            "sm:min-h-[480px] lg:min-h-[520px] xl:min-h-[540px]",
            "shadow-[0_36px_88px_-28px_rgba(12,10,8,0.48),0_16px_48px_-20px_rgba(12,10,8,0.32)]",
            "transition-shadow duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
            "hover:shadow-[0_44px_100px_-24px_rgba(12,10,8,0.52)]",
          )}
        >
          <div className="absolute inset-0">
            <Image
              src={departure.image}
              alt={departure.imageAlt}
              fill
              loading="lazy"
              quality={85}
              className={cn(
                "object-cover object-center brightness-[1.04] saturate-[1.1] contrast-[1.03]",
                "transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                !reduceMotion && "group-hover/departure:scale-[1.03]",
              )}
              sizes="(max-width: 1440px) 100vw, 1440px"
            />
          </div>

          <div
            className="autumn-departures-gradient pointer-events-none absolute inset-0 z-[1] transition-opacity duration-700 group-hover/departure:opacity-95"
            aria-hidden
          />
          <div
            className="autumn-departures-warmth pointer-events-none absolute inset-0 z-[1]"
            aria-hidden
          />
          <div
            className="autumn-departures-haze pointer-events-none absolute inset-0 z-[1]"
            aria-hidden
          />
          <div
            className="autumn-departures-depth pointer-events-none absolute inset-0 z-[1]"
            aria-hidden
          />
          <div
            className="autumn-departures-vignette pointer-events-none absolute inset-0 z-[2]"
            aria-hidden
          />

          <div className="relative z-[3] flex min-h-[inherit] flex-col justify-center px-6 py-10 sm:px-12 sm:py-14 lg:px-16 lg:py-16 xl:px-20">
            <div className="max-w-xl lg:max-w-2xl">
              <h3 className="text-balance font-serif text-[1.75rem] leading-[1.07] tracking-[-0.025em] text-white sm:text-[2.45rem] lg:text-[2.75rem] lg:leading-[1.05]">
                {departure.title}
              </h3>
              <p className="mt-5 font-serif text-lg tracking-[-0.01em] text-white/93 sm:mt-6 sm:text-xl">
                {departure.dates}
              </p>
              <p className="mt-6 max-w-[44ch] text-base leading-[1.8] text-white/90 sm:mt-7 sm:text-[1.0625rem] sm:leading-[1.82]">
                {renderDescription(
                  departure.description,
                  departure.descriptionEmphasis,
                )}
              </p>

              <motion.div
                className="mt-9 sm:mt-10"
                whileHover={reduceMotion ? undefined : { y: -2 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
              >
                <Button
                  asChild
                  size="lg"
                  className={cn(
                    "autumn-departures-cta w-full min-w-0 sm:w-auto sm:min-w-[260px] md:min-w-[280px]",
                    "shadow-[0_14px_44px_-10px_rgba(200,169,107,0.55)]",
                  )}
                >
                  <Link href={departure.href}>{departure.ctaLabel}</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
