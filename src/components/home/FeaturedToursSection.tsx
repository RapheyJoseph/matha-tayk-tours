"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMotionHydration } from "@/hooks/useMotionHydration";
import { motionWhileInView } from "@/lib/motion-hydration";
import { Reveal } from "@/components/shared/Reveal";
import { featuredTours } from "@/data/home";
import { slideUp } from "@/lib/motion-variants";
import { cn } from "@/lib/utils";

type FeaturedTour = (typeof featuredTours)[number];

const IMAGE_POSITIONS: Record<string, string> = {
  "nankana-sacred-circle":
    "object-[50%_42%] sm:object-[50%_38%] lg:object-[50%_36%]",
  "kartarpur-corridor":
    "object-[50%_40%] sm:object-[50%_38%] lg:object-[50%_36%]",
  "punjab-heritage-expanse":
    "object-[50%_40%] sm:object-[50%_38%] lg:object-[50%_36%]",
};

interface JourneyEditorialFeatureProps {
  tour: FeaturedTour;
  index: number;
}

function JourneyEditorialFeature({ tour, index }: JourneyEditorialFeatureProps) {
  const imageFirst = index % 2 === 0;
  const { mounted, reduceMotion } = useMotionHydration();

  return (
    <motion.article
      className="group/journey"
      initial={false}
      whileInView={motionWhileInView(mounted, reduceMotion, "visible")}
      viewport={{ once: true, margin: "-6%" }}
      variants={mounted && !reduceMotion ? slideUp : undefined}
    >
      <div
        className={cn(
          "flex flex-col gap-10 lg:grid lg:grid-cols-12 lg:items-center lg:gap-14 xl:gap-20",
          index > 0 && "editorial-block-gap",
        )}
      >
        {/* Cinematic image panel */}
        <div
          className={cn(
            "journey-editorial-panel relative order-1 overflow-hidden rounded-[1.25rem] lg:col-span-7",
            imageFirst ? "lg:order-1 lg:col-start-1" : "lg:order-2 lg:col-start-6",
          )}
        >
          <div className="relative aspect-[4/3] min-h-[220px] w-full overflow-hidden sm:aspect-[16/10] sm:min-h-[340px] lg:aspect-[16/11] lg:min-h-[420px] xl:min-h-[480px]">
            <Image
              src={tour.image}
              alt={tour.imageAlt}
              fill
              priority={index === 0}
              className={cn(
                "journey-editorial-media object-cover",
                IMAGE_POSITIONS[tour.slug] ?? "object-center",
              )}
              sizes="(max-width:1024px) 100vw, 58vw"
            />
            <div
              className="journey-editorial-warmth pointer-events-none absolute inset-0"
              aria-hidden
            />
            <div
              className="journey-editorial-overlay pointer-events-none absolute inset-0"
              aria-hidden
            />
            <div
              className="journey-editorial-vignette pointer-events-none absolute inset-0"
              aria-hidden
            />
            <span className="label-meta absolute bottom-6 left-6 z-[1] text-brand-gold-soft sm:bottom-8 sm:left-8">
              {tour.duration}
            </span>
          </div>
        </div>

        {/* Editorial content */}
        <div
          className={cn(
            "order-2 flex flex-col justify-center lg:col-span-5",
            imageFirst ? "lg:order-2 lg:col-start-8" : "lg:order-1 lg:col-start-1",
          )}
        >
          <p className="label-meta">
            Journey {tour.chapter} · {tour.shortTitle}
          </p>

          <h3 className="heading-section editorial-heading text-balance sm:text-[2.15rem] lg:text-[2.35rem]">
            {tour.title}
          </h3>

          <p className="body-lead prose-editorial editorial-lead-gap">{tour.description}</p>

          <p className="editorial-prose-gap max-w-md text-sm leading-[1.85] text-brand-body/90">
            {tour.highlights.slice(0, 2).join(" · ")}
          </p>

          <div className="editorial-block-gap flex flex-col gap-[var(--spacing-editorial-intro)] border-t border-brand-charcoal/[0.06] pt-[var(--spacing-editorial-intro)] sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="label-meta text-[9px] text-brand-body">From</p>
              <p className="mt-2 font-serif text-2xl tracking-[-0.02em] text-brand-charcoal">
                {tour.priceFrom}
              </p>
              <p className="mt-1 text-xs text-brand-body/80">{tour.currencyNote}</p>
            </div>

            <Button variant="editorial" asChild className="self-start sm:self-auto">
              <Link href="#contact" className="group/btn inline-flex flex-col items-start gap-2">
                <span className="inline-flex items-center gap-2 text-sm">
                  View itinerary
                  <ArrowUpRight className="size-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </span>
                <span
                  className="block h-px w-full origin-left scale-x-[0.35] bg-brand-gold transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:scale-x-100"
                  aria-hidden
                />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function FeaturedToursSection() {
  return (
    <section id="tours" className="relative scroll-mt-32 overflow-hidden bg-brand-ivory section-y">
      <div
        className="pointer-events-none absolute -right-[15%] top-[12%] h-[min(28rem,60vw)] w-[min(28rem,60vw)] rounded-full bg-brand-gold/[0.03] blur-[120px]"
        aria-hidden
      />
      <div
        className="section-fade-top pointer-events-none absolute inset-x-0 top-0 h-28"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full min-w-0 max-w-[1440px] gutter-x">
        <Reveal className="w-full min-w-0 max-w-2xl">
          <p className="eyebrow">Signature departures</p>
          <h2 className="heading-section editorial-heading">
            A curated sequence of sacred journeys—
            <span className="block sm:inline"> composed, not packaged.</span>
          </h2>
          <p className="body-lead prose-editorial editorial-lead-gap max-w-xl">
            Three private arcs through Pakistan&apos;s living heritage. Each unfolds
            slowly, with space for devotion, reflection, and the quiet luxury of
            time well kept.
          </p>
        </Reveal>

        <div className="editorial-block-gap">
          {featuredTours.map((tour, index) => (
            <JourneyEditorialFeature key={tour.slug} tour={tour} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
