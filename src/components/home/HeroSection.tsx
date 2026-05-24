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
      className="relative flex min-h-[100dvh] items-end overflow-hidden bg-brand-pearl pb-24 pt-48 sm:items-center sm:pb-28 sm:pt-44 md:pt-48 lg:pb-32 lg:pt-52"
      aria-label="Hero"
    >
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={reduceMotion ? false : { scale: 1.008 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="hero-image-frame absolute inset-0">
          <Image
            src={heroMedia.image}
            alt={heroMedia.imageAlt}
            fill
            priority
            quality={85}
            className={cn(
              "hero-image-focal object-cover brightness-[1.02] saturate-[1.06] contrast-[1.04]",
              !reduceMotion && "hero-ken-gentle",
            )}
            sizes="100vw"
          />
        </div>
      </motion.div>

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

      <motion.div
        className="pointer-events-none absolute inset-y-0 left-0 w-[min(100%,52rem)] bg-[radial-gradient(ellipse_80%_70%_at_0%_50%,rgb(255_255_255/0.55),transparent_72%)]"
        aria-hidden
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      />

      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-pearl/90 via-brand-pearl/30 to-transparent sm:h-48"
        aria-hidden
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-[1440px] gutter-x"
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="max-w-lg sm:max-w-xl lg:max-w-2xl"
          initial={reduceMotion ? "visible" : "hidden"}
          animate="visible"
          variants={staggerParent}
        >
          <motion.h1
            variants={slideUp}
            className="heading-display max-w-[19rem] text-[1.85rem] leading-[1.08] min-[400px]:max-w-[21rem] sm:max-w-[25rem] sm:text-[2.25rem] md:max-w-[27rem] md:text-[2.55rem] lg:max-w-[29rem] lg:text-[2.85rem] xl:max-w-[31rem] xl:text-[3.15rem] xl:leading-[1.05]"
          >
            <span className="block">Enter Curated</span>
            <span className="mt-1 block sm:mt-1.5">Sacred Worlds</span>
            <span className="mt-3 block text-[0.92em] font-normal leading-[1.12] text-brand-charcoal/88 sm:mt-4">
              Cinematic journeys across heritage, faith, and landscape
            </span>
          </motion.h1>
          <motion.p
            variants={slideUp}
            className="body-lead prose-editorial mt-8 sm:mt-9"
          >
            From Punjab&apos;s gurdwaras to Silk Route stone, Emirates calm, and
            ancient valleys—we compose private arcs with reverence, not spectacle.
          </motion.p>
          <motion.div
            variants={fadeIn}
            className="mt-11 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:items-center sm:gap-5"
          >
            <Button asChild size="lg" className="min-w-[220px] shadow-[0_12px_40px_-10px_rgba(200,169,107,0.5)]">
              <a href="#collections">Explore Journeys</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="min-w-[220px] border-brand-charcoal/[0.12]"
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
