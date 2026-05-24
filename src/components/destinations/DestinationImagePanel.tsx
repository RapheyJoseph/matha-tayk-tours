"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { Reveal } from "@/components/shared/Reveal";
import { useReducedMotionAfterHydration } from "@/hooks/useReducedMotionAfterHydration";
import type { DestinationImageSection } from "@/data/destinations";
import { cn } from "@/lib/utils";

interface DestinationImagePanelProps {
  section: DestinationImageSection;
}

export function DestinationImagePanel({ section }: DestinationImagePanelProps) {
  const reduceMotion = useReducedMotionAfterHydration();

  return (
    <SectionContainer variant="night" paddedTop className="!pb-0">
      <Reveal>
        <div className="destination-cinematic-panel group/panel relative overflow-hidden rounded-[1.25rem] bg-brand-charcoal">
          <div className="relative aspect-[16/10] min-h-[280px] w-full sm:min-h-[360px] lg:aspect-[21/9] lg:min-h-[420px]">
            <motion.div
              className="absolute inset-0"
              initial={false}
              whileInView={reduceMotion ? undefined : { scale: 1 }}
              viewport={{ once: true, margin: "-8%" }}
            >
              <Image
                src={section.image}
                alt={section.imageAlt}
                fill
                loading="lazy"
                quality={85}
                className={cn(
                  "object-cover transition-transform duration-[1.8s] ease-[cubic-bezier(0.16,1,0.3,1)]",
                  "group-hover/panel:scale-[1.02]",
                )}
                style={{
                  objectPosition: section.objectPosition ?? "50% 42%",
                }}
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </motion.div>
            <div
              className="destination-page-image-overlay pointer-events-none absolute inset-0"
              aria-hidden
            />
            <div
              className="destination-page-image-vignette pointer-events-none absolute inset-0"
              aria-hidden
            />
          </div>
          <div className="border-t border-brand-charcoal/[0.06] bg-brand-white px-8 py-8 sm:px-10 sm:py-9 lg:px-12">
            {section.eyebrow ? (
              <p className="label-meta">{section.eyebrow}</p>
            ) : null}
            <p
              className={cn(
                "font-serif text-lg leading-[1.45] tracking-[-0.015em] text-brand-charcoal sm:text-xl",
                section.eyebrow && "mt-4",
              )}
            >
              {section.caption}
            </p>
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
