"use client";

import Image from "next/image";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { Reveal } from "@/components/shared/Reveal";
import { useReducedMotionAfterHydration } from "@/hooks/useReducedMotionAfterHydration";
import { cn } from "@/lib/utils";

interface CinematicSpreadProps {
  eyebrow: string;
  caption: string;
  image: string;
  imageAlt: string;
  objectPosition?: string;
  atmosphere?: "sikh" | "buddhist" | "uae" | "pakistan" | "default";
}

const atmosphereOverlay: Record<
  NonNullable<CinematicSpreadProps["atmosphere"]>,
  string
> = {
  sikh: "collection-sikh-spread-overlay",
  buddhist: "collection-buddhist-spread-overlay",
  uae: "collection-uae-spread-overlay",
  pakistan: "collection-pakistan-spread-overlay",
  default: "destination-page-image-overlay",
};

export function CinematicSpread({
  eyebrow,
  caption,
  image,
  imageAlt,
  objectPosition = "50% 42%",
  atmosphere = "default",
}: CinematicSpreadProps) {
  const reduceMotion = useReducedMotionAfterHydration();

  return (
    <SectionContainer variant="night" paddedTop={false}>
      <Reveal>
        <div className="destination-cinematic-panel group/spread relative overflow-hidden rounded-[1.25rem] bg-brand-charcoal">
          <div className="relative aspect-[16/10] min-h-[280px] w-full sm:min-h-[360px] lg:aspect-[21/9] lg:min-h-[420px]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              loading="lazy"
              quality={85}
              className={cn(
                "object-cover transition-transform duration-[1.8s] ease-[cubic-bezier(0.16,1,0.3,1)]",
                !reduceMotion && "group-hover/spread:scale-[1.02]",
              )}
              style={{ objectPosition }}
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div
              className={cn(
                "pointer-events-none absolute inset-0",
                atmosphereOverlay[atmosphere],
              )}
              aria-hidden
            />
            <div
              className="destination-page-image-vignette pointer-events-none absolute inset-0"
              aria-hidden
            />
          </div>
          <div className="border-t border-brand-charcoal/[0.06] bg-brand-white px-8 py-6 sm:px-10 sm:py-7 lg:px-12">
            <p className="label-meta">{eyebrow}</p>
            <p className="mt-3 font-serif text-lg leading-[1.45] tracking-[-0.015em] text-brand-charcoal sm:mt-3.5 sm:text-xl">
              {caption}
            </p>
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
