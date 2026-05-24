"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { Reveal } from "@/components/shared/Reveal";
import type { FeaturedDeparture } from "@/data/collections";
import { useReducedMotionAfterHydration } from "@/hooks/useReducedMotionAfterHydration";
import { cn } from "@/lib/utils";

interface SikhAutumnDepartureFeatureProps {
  departure: FeaturedDeparture;
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
      className="scroll-mt-32"
    >
      <Reveal className="featured-departure-intro mb-9 sm:mb-10">
        <p className="eyebrow">{departure.sectionEyebrow}</p>
        <h2 className="heading-section collection-heading w-full max-w-full text-balance">
          {departure.sectionTitle}
        </h2>
        <p className="body-lead mt-5 max-w-[62ch] text-pretty leading-[1.84] text-brand-body sm:mt-6 sm:leading-[1.86]">
          {departure.sectionLead}
        </p>
      </Reveal>

      <Reveal delay={0.08}>
        <div
          className={cn(
            "group/departure relative isolate min-h-[min(92vw,440px)] overflow-hidden rounded-[1.35rem]",
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

          <div className="relative z-[3] flex min-h-[inherit] flex-col justify-center px-8 py-12 sm:px-12 sm:py-14 lg:px-16 lg:py-16 xl:px-20">
            <div className="max-w-xl lg:max-w-2xl">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-brand-gold/40 bg-black/30 px-5 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.22)] backdrop-blur-md">
                <Sparkles
                  className="size-3 text-brand-gold-soft"
                  strokeWidth={1.5}
                />
                <span className="label-meta text-[10px] text-brand-gold-soft">
                  {departure.fellowshipLabel}
                </span>
              </div>

              <p className="eyebrow mt-8 text-brand-gold-soft sm:mt-9">{departure.eyebrow}</p>
              <h3 className="mt-4 font-serif text-[2.05rem] leading-[1.07] tracking-[-0.025em] text-white sm:mt-5 sm:text-[2.45rem] lg:text-[2.75rem] lg:leading-[1.05]">
                {departure.title}
              </h3>
              <p className="mt-5 font-serif text-lg tracking-[-0.01em] text-white/93 sm:mt-6 sm:text-xl">
                {departure.dates}
              </p>
              <p className="mt-6 max-w-[44ch] text-base leading-[1.8] text-white/90 sm:mt-7 sm:text-[1.0625rem] sm:leading-[1.82]">
                {departure.description}
              </p>
              <p className="label-meta mt-6 max-w-[40ch] text-[9px] leading-[1.7] tracking-[0.28em] text-white/70 sm:mt-7">
                {departure.details}
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
                    "autumn-departures-cta min-w-[260px] sm:min-w-[280px]",
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
