"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { Reveal } from "@/components/shared/Reveal";
import {
  getDestinationBySlug,
  type DestinationSlug,
} from "@/data/destinations";
import { staggerParent, slideUp } from "@/lib/motion-variants";
import { cn } from "@/lib/utils";

interface JourneyPanelsProps {
  destinationSlugs: DestinationSlug[];
  collectionTitle: string;
}

export function JourneyPanels({
  destinationSlugs,
  collectionTitle,
}: JourneyPanelsProps) {
  const destinations = destinationSlugs
    .map((slug) => getDestinationBySlug(slug))
    .filter(Boolean);

  return (
    <SectionContainer id="destinations" variant="pearl" paddedTop={false}>
      <Reveal className="max-w-xl">
        <p className="eyebrow">Featured destinations</p>
        <h2 className="heading-section collection-heading">
          Chapters within {collectionTitle}
        </h2>
      </Reveal>

      <motion.div
        className="collection-card-grid collection-block-gap sm:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-8%" }}
        variants={staggerParent}
      >
        {destinations.map((place) => {
          if (!place) return null;
          return (
            <motion.div key={place.slug} variants={slideUp}>
              <Link
                href={`/destinations/${place.slug}`}
                className={cn(
                  "destination-panel-link group/panel relative block overflow-hidden rounded-[1.25rem]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2",
                )}
                aria-label={`Explore ${place.name}`}
              >
                <div className="relative aspect-[16/11] min-h-[260px] w-full overflow-hidden bg-brand-charcoal sm:min-h-[300px]">
                  <Image
                    src={place.hero.image}
                    alt={place.hero.imageAlt}
                    fill
                    loading="lazy"
                    quality={85}
                    className="object-cover brightness-[1.06] saturate-[1.06] contrast-[1.04] transition-[transform,filter] duration-[1.6s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/panel:scale-[1.03]"
                    style={{ objectPosition: place.hero.objectPosition }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="collection-panel-overlay pointer-events-none absolute inset-0" />
                  <div className="collection-panel-vignette pointer-events-none absolute inset-0" />
                  <div className="absolute inset-x-0 bottom-0 z-[2] p-8 sm:p-10">
                    <p className="label-meta text-brand-gold-soft">{place.tag}</p>
                    <h3 className="mt-3 font-serif text-2xl leading-[1.1] tracking-[-0.02em] text-white sm:text-[1.75rem]">
                      {place.name}
                    </h3>
                    <p className="mt-4 max-w-[34ch] text-sm leading-[1.75] text-white/88">
                      {place.lead}
                    </p>
                    {place.region ? (
                      <p className="label-meta mt-4 text-[9px] tracking-[0.26em] text-white/72">
                        {place.region}
                      </p>
                    ) : null}
                  </div>
                  <span
                    className="pointer-events-none absolute bottom-8 right-8 z-[3] hidden items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/90 opacity-0 backdrop-blur-md transition-opacity duration-700 group-hover/panel:opacity-100 sm:flex"
                    aria-hidden
                  >
                    Explore
                    <ArrowUpRight className="size-3.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionContainer>
  );
}
