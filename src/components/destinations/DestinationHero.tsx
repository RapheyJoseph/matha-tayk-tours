"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useReducedMotionAfterHydration } from "@/hooks/useReducedMotionAfterHydration";
import { getCollectionBySlug } from "@/data/collections";
import type { DestinationPageData } from "@/data/destinations";
import { cn } from "@/lib/utils";

interface DestinationHeroProps {
  destination: DestinationPageData;
}

export function DestinationHero({ destination }: DestinationHeroProps) {
  const reduceMotion = useReducedMotionAfterHydration();
  const { hero, tag, name, collectionSlug } = destination;
  const collection = getCollectionBySlug(collectionSlug);

  return (
    <section
      className="relative flex min-h-[72svh] items-end overflow-hidden bg-brand-charcoal sm:min-h-[82svh] lg:min-h-[92dvh]"
      aria-label={`${name} hero`}
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
          className={cn(
            "object-cover brightness-[1.02] saturate-[1.04]",
            !reduceMotion && "hero-ken-gentle",
          )}
          style={{ objectPosition: hero.objectPosition }}
          sizes="100vw"
        />
      </motion.div>

      <div
        className="destination-page-hero-veil pointer-events-none absolute inset-0"
        aria-hidden
      />
      <div
        className="destination-page-hero-vignette pointer-events-none absolute inset-0"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-[min(100%,48rem)] bg-[radial-gradient(ellipse_85%_75%_at_0%_55%,rgb(255_255_255/0.12),transparent_68%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full min-w-0 max-w-[1440px] gutter-x pb-20 pt-[calc(6.5rem+env(safe-area-inset-top,0px))] sm:pb-32 sm:pt-40">
        <div className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2.5 sm:mb-12 sm:gap-x-6 sm:gap-y-3">
          <Link
            href="/#collections"
            className="destination-back-link inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/75 transition-colors duration-500 hover:text-white"
          >
            <ArrowLeft className="size-3.5" aria-hidden />
            All journeys
          </Link>
          {collection ? (
            <Link
              href={`/collections/${collectionSlug}`}
              className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/55 transition-colors duration-500 hover:text-white/85"
            >
              {collection.shortTitle}
            </Link>
          ) : null}
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full min-w-0 max-w-2xl"
        >
          <p className="label-meta text-brand-gold-soft">{tag}</p>
          <h1 className="heading-display mt-5 text-balance text-[1.65rem] leading-[1.06] text-white sm:mt-6 sm:text-[2.65rem] lg:text-[3.1rem] xl:text-[3.35rem]">
            {hero.headline}
          </h1>
          <p className="mt-5 max-w-full text-pretty text-base leading-[1.78] text-white/90 sm:mt-7 sm:max-w-[38ch] sm:text-[1.0625rem]">
            {hero.subheadline}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
