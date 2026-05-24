"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useReducedMotionAfterHydration } from "@/hooks/useReducedMotionAfterHydration";
import type { CollectionPageData } from "@/data/collections";
import { cn } from "@/lib/utils";

const atmosphereHeroOverlay: Record<
  CollectionPageData["atmosphere"],
  string
> = {
  sikh: "collection-sikh-hero-gradient",
  buddhist: "collection-buddhist-hero-gradient",
  uae: "collection-uae-hero-gradient",
  pakistan: "collection-pakistan-hero-gradient",
};

interface CollectionHeroProps {
  collection: CollectionPageData;
}

export function CollectionHero({ collection }: CollectionHeroProps) {
  const reduceMotion = useReducedMotionAfterHydration();
  const { hero, eyebrow, title, atmosphere } = collection;

  return (
    <section
      className="relative flex min-h-[88dvh] items-end overflow-hidden bg-brand-charcoal sm:min-h-[92dvh]"
      aria-label={`${title} collection`}
    >
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={reduceMotion ? false : { scale: 1.03 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          fill
          priority
          quality={85}
          className={cn(
            "object-cover brightness-[1.03] saturate-[1.06]",
            atmosphere === "uae" && "saturate-[1.02] brightness-[1.02]",
            atmosphere === "buddhist" && "saturate-[0.95] brightness-[0.98]",
            atmosphere === "pakistan" &&
              "brightness-[1.02] saturate-[1.08] contrast-[1.04]",
            atmosphere === "sikh" &&
              "brightness-[1.02] saturate-[1.05] contrast-[1.03]",
            !reduceMotion && "hero-ken-gentle",
          )}
          style={{ objectPosition: hero.objectPosition }}
          sizes="100vw"
        />
      </motion.div>

      <div
        className={cn(
          "pointer-events-none absolute inset-0 z-[1]",
          atmosphereHeroOverlay[atmosphere],
        )}
        aria-hidden
      />
      {atmosphere === "pakistan" ? (
        <div
          className="collection-pakistan-hero-warmth pointer-events-none absolute inset-0 z-[1]"
          aria-hidden
        />
      ) : null}
      {atmosphere === "sikh" ? (
        <div
          className="collection-sikh-hero-warmth pointer-events-none absolute inset-0 z-[1]"
          aria-hidden
        />
      ) : null}
      <div
        className="collection-hero-vignette pointer-events-none absolute inset-0 z-[1]"
        aria-hidden
      />
      <div
        className="collection-hero-haze pointer-events-none absolute inset-0 z-[1]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] gutter-x pb-6 pt-32 sm:pb-8 sm:pt-36 lg:pb-10 lg:pt-40">
        <Link
          href="/#collections"
          className="destination-back-link mb-8 inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/75 transition-colors duration-500 hover:text-white sm:mb-10"
        >
          <ArrowLeft className="size-3.5" aria-hidden />
          All journeys
        </Link>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="label-meta text-brand-gold-soft">{eyebrow}</p>
          <h1 className="heading-display mt-5 text-balance text-[2.1rem] leading-[1.06] text-white sm:mt-6 sm:text-[2.75rem] lg:text-[3.15rem]">
            {hero.headline}
          </h1>
          <p className="mt-5 max-w-[62ch] text-pretty text-base leading-[1.8] text-white/90 sm:mt-6 sm:text-[1.0625rem] sm:leading-[1.82]">
            {hero.subheadline}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
