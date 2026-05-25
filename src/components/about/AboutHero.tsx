"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useReducedMotionAfterHydration } from "@/hooks/useReducedMotionAfterHydration";
import type { aboutPage } from "@/data/about";
import { cn } from "@/lib/utils";

interface AboutHeroProps {
  hero: (typeof aboutPage)["hero"];
}

export function AboutHero({ hero }: AboutHeroProps) {
  const reduceMotion = useReducedMotionAfterHydration();

  return (
    <section
      className="relative flex min-h-[72svh] items-end overflow-hidden bg-brand-charcoal sm:min-h-[80svh] lg:min-h-[88dvh]"
      aria-label="About Matha Tayk Tours"
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
            "object-cover brightness-[1.02] saturate-[1.05] contrast-[1.03]",
            !reduceMotion && "hero-ken-gentle",
          )}
          style={{ objectPosition: hero.objectPosition }}
          sizes="100vw"
        />
      </motion.div>

      <div
        className="collection-sikh-hero-gradient pointer-events-none absolute inset-0 z-[1]"
        aria-hidden
      />
      <div
        className="collection-sikh-hero-warmth pointer-events-none absolute inset-0 z-[1]"
        aria-hidden
      />
      <div
        className="collection-hero-vignette pointer-events-none absolute inset-0 z-[1]"
        aria-hidden
      />
      <div
        className="collection-hero-haze pointer-events-none absolute inset-0 z-[1]"
        aria-hidden
      />
      <div
        className="collection-hero-readability pointer-events-none absolute inset-0 z-[2]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full min-w-0 max-w-[1440px] gutter-x pb-6 pt-[calc(6.5rem+env(safe-area-inset-top,0px))] sm:pb-10 sm:pt-36 lg:pb-12 lg:pt-40">
        <Link
          href="/"
          className="destination-back-link mb-8 inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/75 transition-colors duration-500 hover:text-white sm:mb-10"
        >
          <ArrowLeft className="size-3.5" aria-hidden />
          Home
        </Link>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="collection-hero-copy w-full min-w-0 max-w-2xl lg:max-w-3xl"
        >
          <p className="label-meta text-brand-gold-soft">{hero.eyebrow}</p>
          <h1 className="heading-display mt-5 text-balance text-[1.65rem] leading-[1.08] text-white sm:mt-6 sm:text-[2.65rem] lg:text-[3.05rem]">
            {hero.headline}
          </h1>
          <p className="body-lead mt-5 max-w-full text-pretty text-base leading-[1.8] text-white/92 sm:mt-6 sm:max-w-[62ch] sm:text-[1.0625rem] sm:leading-[1.82]">
            {hero.subheadline}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
