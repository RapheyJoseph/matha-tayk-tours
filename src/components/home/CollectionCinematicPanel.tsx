"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useReducedMotionAfterHydration } from "@/hooks/useReducedMotionAfterHydration";
import type { CollectionSummary } from "@/data/collections";
import { cn } from "@/lib/utils";

const atmospherePanelClass: Record<CollectionSummary["atmosphere"], string> = {
  sikh: "collection-home-sikh",
  buddhist: "collection-home-buddhist",
  uae: "collection-home-uae",
  pakistan: "collection-home-pakistan",
};

/** Focal shift so imagery balances opposite the text column */
const homepageImageFocus: Record<CollectionSummary["slug"], string> = {
  "sikh-heritage": "54% 44%",
  "buddhist-journeys": "center",
  "pakistan-heritage": "48% 42%",
  "uae-luxury": "center",
};

const imageQuality: Partial<Record<CollectionSummary["slug"], number>> = {
  "buddhist-journeys": 82,
  "uae-luxury": 82,
};

export type CollectionPanelAlign = "left" | "right";

interface CollectionCinematicPanelProps {
  collection: CollectionSummary;
  align: CollectionPanelAlign;
  priority?: boolean;
}

export function CollectionCinematicPanel({
  collection,
  align,
  priority = false,
}: CollectionCinematicPanelProps) {
  const reduceMotion = useReducedMotionAfterHydration();
  const isRight = align === "right";
  const isSikh = collection.slug === "sikh-heritage";
  const isBuddhist = collection.slug === "buddhist-journeys";
  const isPakistan = collection.slug === "pakistan-heritage";
  const isUae = collection.slug === "uae-luxury";
  const usePremiumHoverZoom = isSikh || isBuddhist || isPakistan || isUae;

  return (
    <Link
      href={collection.href}
      className={cn(
        "destination-panel-link group/collection relative block overflow-hidden rounded-[1.35rem]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-white",
        "shadow-[0_28px_72px_-28px_rgba(12,10,8,0.42)]",
        "transition-shadow duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
        "hover:shadow-[0_36px_88px_-24px_rgba(12,10,8,0.48)]",
      )}
      aria-label={`Enter ${collection.title}`}
    >
      <div className="relative aspect-[4/3] min-h-[260px] w-full overflow-hidden bg-brand-charcoal sm:aspect-[21/9] sm:min-h-[380px] lg:min-h-[440px]">
        <Image
          src={collection.image}
          alt={collection.imageAlt}
          fill
          priority={priority}
          loading={priority ? undefined : "lazy"}
          quality={imageQuality[collection.slug] ?? 85}
          className={cn(
            "object-cover object-center brightness-[1.08] contrast-[1.05] saturate-[1.08]",
            "transition-[transform,filter] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
            !reduceMotion &&
              (usePremiumHoverZoom
                ? "group-hover/collection:scale-[1.03] group-hover/collection:brightness-[1.1]"
                : "group-hover/collection:scale-[1.025]"),
            isUae && "saturate-[1.1]",
          )}
          style={{
            objectPosition:
              homepageImageFocus[collection.slug] ?? collection.objectPosition,
          }}
          sizes="100vw"
        />

        <div
          className={cn(
            "pointer-events-none absolute inset-0 transition-opacity duration-700",
            atmospherePanelClass[collection.atmosphere],
            "group-hover/collection:opacity-[0.88]",
          )}
          aria-hidden
        />
        {isSikh ? (
          <>
            <div
              className="collection-sikh-home-cinematic pointer-events-none absolute inset-0 transition-opacity duration-700 ease-in-out group-hover/collection:opacity-[0.82]"
              aria-hidden
            />
            {!isRight ? (
              <div
                className="collection-sikh-home-text-veil pointer-events-none absolute inset-0 transition-opacity duration-700 ease-in-out group-hover/collection:opacity-[0.9]"
                aria-hidden
              />
            ) : null}
          </>
        ) : isBuddhist ? (
          <>
            <div
              className="collection-buddhist-home-cinematic pointer-events-none absolute inset-0 transition-opacity duration-700 ease-in-out group-hover/collection:opacity-[0.82]"
              aria-hidden
            />
            {isRight ? (
              <div
                className="collection-buddhist-home-text-veil pointer-events-none absolute inset-0 transition-opacity duration-700 ease-in-out group-hover/collection:opacity-[0.9]"
                aria-hidden
              />
            ) : null}
          </>
        ) : isPakistan ? (
          <>
            <div
              className="collection-pakistan-home-cinematic pointer-events-none absolute inset-0 transition-opacity duration-700 ease-in-out group-hover/collection:opacity-[0.82]"
              aria-hidden
            />
            {!isRight ? (
              <div
                className="collection-pakistan-home-text-veil pointer-events-none absolute inset-0 transition-opacity duration-700 ease-in-out group-hover/collection:opacity-[0.9]"
                aria-hidden
              />
            ) : null}
          </>
        ) : isUae ? (
          <>
            <div
              className="collection-uae-home-cinematic pointer-events-none absolute inset-0 transition-opacity duration-700 ease-in-out group-hover/collection:opacity-[0.82]"
              aria-hidden
            />
            {isRight ? (
              <div
                className="collection-uae-home-text-veil pointer-events-none absolute inset-0 transition-opacity duration-700 ease-in-out group-hover/collection:opacity-[0.9]"
                aria-hidden
              />
            ) : null}
          </>
        ) : (
          <div
            className={cn(
              "pointer-events-none absolute inset-0 transition-opacity duration-700",
              isRight
                ? "collection-editorial-readability-right"
                : "collection-editorial-readability-left",
            )}
            aria-hidden
          />
        )}
        <div
          className={cn(
            "collection-card-mobile-scrim pointer-events-none absolute inset-0 z-[1] sm:hidden",
            isRight
              ? "collection-card-mobile-scrim--right"
              : "collection-card-mobile-scrim--left",
          )}
          aria-hidden
        />
        <div
          className="collection-panel-vignette pointer-events-none absolute inset-0 transition-opacity duration-700 group-hover/collection:opacity-80"
          aria-hidden
        />
        <div
          className="collection-panel-depth pointer-events-none absolute inset-0"
          aria-hidden
        />

        <div
          className={cn(
            "absolute inset-0 z-[2] flex flex-col justify-end px-7 pb-8 pt-16 sm:p-11 sm:pt-0 lg:p-14 xl:p-16",
            isRight
              ? "items-start text-left sm:items-end sm:text-right"
              : "items-start text-left",
          )}
        >
          <div
            className={cn(
              "w-full min-w-0 max-w-[92%] sm:max-w-xl lg:max-w-2xl",
              isRight && "sm:ml-auto",
            )}
          >
            <p className="label-meta text-brand-gold-soft">{collection.eyebrow}</p>
            <h3 className="mt-3 text-balance font-serif text-[1.35rem] leading-[1.12] tracking-[-0.02em] text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.55)] sm:mt-5 sm:text-[2rem] sm:leading-[1.08] md:text-[2.35rem] lg:text-[2.75rem]">
              {collection.title}
            </h3>
            <p
              className={cn(
                "mt-5 max-w-full text-pretty text-[13px] leading-[1.68] tracking-[0.01em] text-white/94",
                "line-clamp-3 min-[400px]:line-clamp-4",
                "[text-shadow:0_1px_20px_rgba(0,0,0,0.5)]",
                "sm:mt-6 sm:line-clamp-none sm:max-w-[44ch] sm:text-base sm:leading-[1.8] sm:text-white/92",
                "md:text-[1.0625rem]",
              )}
            >
              {collection.lead}
            </p>
          </div>

          <span
            className={cn(
              "pointer-events-none hidden items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 sm:flex",
              "mt-10 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/90 backdrop-blur-md",
              "opacity-0 translate-y-2 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
              "group-hover/collection:translate-y-0 group-hover/collection:opacity-100",
              isRight ? "mr-0" : "ml-0",
            )}
            aria-hidden
          >
            Enter collection
            <ArrowUpRight className="size-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
