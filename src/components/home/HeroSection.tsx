"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useReducedMotionAfterHydration } from "@/hooks/useReducedMotionAfterHydration";
import { heroMedia } from "@/data/home";
import { fadeIn, slideUp, staggerParent } from "@/lib/motion-variants";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const reduceMotion = useReducedMotionAfterHydration();

  return (
    <section
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-[#c8d4e0] pb-20 pt-[calc(7.5rem+env(safe-area-inset-top,0px))] sm:items-center sm:pb-28 sm:pt-44 md:pt-48 lg:pb-32 lg:pt-52"
      aria-label="Hero"
    >
      <div className="hero-media-canvas" aria-hidden>
        <div className="hero-image-frame">
          <Image
            src={heroMedia.image}
            alt={heroMedia.imageAlt}
            fill
            priority
            quality={85}
            className={cn(
              "hero-image-focal object-cover brightness-[1.03] saturate-[1.06] contrast-[1.05]",
              !reduceMotion && "hero-ken-gentle",
            )}
            style={{ objectPosition: heroMedia.objectPosition }}
            sizes="100vw"
          />
        </div>
      </div>

      <motion.div
        className="hero-atmosphere-base pointer-events-none absolute inset-0"
        aria-hidden
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      />

      <motion.div
        className="hero-vignette pointer-events-none absolute inset-0"
        aria-hidden
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      />

      <div className="hero-copy-veil pointer-events-none absolute inset-0" aria-hidden />

      <div
        className="hero-edge-fade pointer-events-none absolute inset-x-0 bottom-0 h-32 sm:h-36"
        aria-hidden
      />

      <motion.div
        className="relative z-10 mx-auto w-full min-w-0 max-w-[1440px] gutter-x"
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="w-full min-w-0 max-w-lg sm:max-w-xl lg:max-w-2xl"
          initial={reduceMotion ? "visible" : "hidden"}
          animate="visible"
          variants={staggerParent}
        >
          <motion.p variants={slideUp} className="eyebrow">
            Enter Curated
          </motion.p>
          <motion.h1
            variants={slideUp}
            className="heading-display mt-4 w-full max-w-[19rem] text-balance text-[1.75rem] leading-[1.08] min-[400px]:max-w-[21rem] min-[400px]:text-[1.85rem] sm:mt-5 sm:max-w-[25rem] sm:text-[2.25rem] md:max-w-[27rem] md:text-[2.55rem] lg:max-w-[29rem] lg:text-[2.85rem] xl:max-w-[31rem] xl:text-[3.15rem] xl:leading-[1.05]"
          >
            Sacred Worlds
          </motion.h1>
          <motion.p
            variants={slideUp}
            className="heading-display mt-3 max-w-[22ch] text-pretty text-[1.05rem] font-normal leading-[1.2] tracking-[-0.02em] text-brand-charcoal/90 sm:mt-4 sm:max-w-[26ch] sm:text-[1.125rem] md:max-w-[28ch]"
          >
            Cinematic journeys across heritage, faith, and landscape
          </motion.p>
          <motion.p
            variants={slideUp}
            className="body-lead prose-editorial editorial-lead-gap max-w-[36ch] text-pretty sm:max-w-none"
          >
            From Punjab&apos;s gurdwaras to Silk Route stone, Emirates calm, and
            ancient valleys—we compose private arcs with reverence, not spectacle.
          </motion.p>
          <motion.div
            variants={fadeIn}
            className="editorial-cta-gap flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-5"
          >
            <Button
              asChild
              size="lg"
              className="w-full shadow-[0_12px_40px_-10px_rgba(200,169,107,0.5)] sm:w-auto sm:min-w-[220px]"
            >
              <a href="#collections">Explore Journeys</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="w-full border-brand-charcoal/[0.12] sm:w-auto sm:min-w-[220px]"
            >
              <Link href="/collections/sikh-heritage#autumn-departure">
                Autumn Fellowship
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-14 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 sm:flex"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="label-meta text-[9px] tracking-[0.4em] text-brand-body/60">
          Scroll
        </span>
        <motion.div
          className="h-14 w-px bg-gradient-to-b from-brand-gold/0 via-brand-gold/45 to-brand-gold/0"
          animate={reduceMotion ? undefined : { scaleY: [1, 0.6, 1] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
