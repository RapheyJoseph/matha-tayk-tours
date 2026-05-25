/**
 * Traveller stories carousel — archived from homepage (not mounted in `page.tsx`).
 * Re-enable: uncomment import + `<TestimonialsSection />` in `src/app/page.tsx`
 * and restore `{ href: "/#stories", label: "Stories" }` in `navLinks` if desired.
 */
"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { Reveal } from "@/components/shared/Reveal";
import { testimonials } from "@/data/home";
import { cn } from "@/lib/utils";

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", skipSnaps: false },
    [Autoplay({ delay: 7200, stopOnInteraction: true })],
  );
  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <SectionContainer id="stories" variant="night" paddedTop={false}>
      <div className="editorial-intro-row relative z-[1] lg:flex-row lg:items-end lg:justify-between">
        <Reveal className="max-w-xl">
          <p className="eyebrow">Traveller stories</p>
          <h2 className="heading-section home-heading">
            Voices from the sangat—
            <span className="block sm:inline"> recorded after the journey settled in.</span>
          </h2>
        </Reveal>
        <Reveal variant="fade" className="flex gap-3 self-end">
          <Button
            type="button"
            variant="secondary"
            size="icon"
            className="size-12 transition-transform duration-500 hover:-translate-y-0.5"
            onClick={scrollPrev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="size-5" />
          </Button>
          <Button
            type="button"
            variant="secondary"
            size="icon"
            className="size-12 transition-transform duration-500 hover:-translate-y-0.5"
            onClick={scrollNext}
            aria-label="Next testimonial"
          >
            <ChevronRight className="size-5" />
          </Button>
        </Reveal>
      </div>

      <div className="relative z-[1] home-block-gap">
        <div className="overflow-hidden pb-4 pt-3" ref={emblaRef}>
          <div className="flex touch-pan-y items-stretch">
            {testimonials.map((t, index) => {
              const active = selected === index;
              return (
                <div
                  key={t.name}
                  className="min-w-0 flex-[0_0_100%] px-2 sm:px-3 md:flex-[0_0_90%] lg:flex-[0_0_78%] xl:flex-[0_0_72%]"
                >
                  <figure
                    className={cn(
                      "relative mx-auto flex h-full w-full max-w-4xl flex-col overflow-hidden rounded-[1.35rem] transition-[transform,opacity,box-shadow] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      active
                        ? "testimonial-card scale-100 opacity-100"
                        : "testimonial-card-muted scale-[0.975] opacity-70",
                    )}
                  >
                    <span
                      className="quote-mark pointer-events-none absolute left-8 top-6 text-[5.5rem] sm:left-10 sm:top-8 sm:text-[6.5rem]"
                      aria-hidden
                    >
                      &ldquo;
                    </span>

                    <div className="relative flex flex-col gap-11 p-9 sm:p-11 md:flex-row md:items-start md:gap-14 md:p-12 lg:p-14">
                      <div className="relative mx-auto shrink-0 md:mx-0">
                        <div
                          className="absolute -inset-1 rounded-full bg-brand-gold/10 blur-md"
                          aria-hidden
                        />
                        <div className="relative size-[7.75rem] overflow-hidden rounded-full border border-brand-gold/20 bg-brand-pearl shadow-[0_16px_48px_rgba(24,24,27,0.1)] md:size-[9rem]">
                          <Image
                            src={t.image}
                            alt={t.imageAlt}
                            fill
                            className="object-cover saturate-[1.05]"
                            sizes="144px"
                          />
                        </div>
                      </div>

                      <div className="flex flex-1 flex-col text-center md:text-left">
                        <div className="flex items-center justify-center gap-1 md:justify-start">
                          {Array.from({ length: t.rating }).map((_, i) => (
                            <Star
                              key={i}
                              className="size-4 fill-brand-gold text-brand-gold"
                            />
                          ))}
                        </div>
                        <blockquote className="relative mt-9 font-serif text-xl leading-[1.48] text-brand-charcoal sm:text-2xl md:text-[1.7rem] lg:text-[1.9rem] lg:leading-[1.42]">
                          {t.quote}
                        </blockquote>
                        <figcaption className="mt-11 border-t border-brand-charcoal/[0.06] pt-8">
                          <p className="font-medium tracking-[0.02em] text-brand-charcoal">
                            {t.name}
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-brand-body">
                            {t.location}
                          </p>
                        </figcaption>
                      </div>
                    </div>
                  </figure>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative z-[1] mt-10 flex justify-center gap-2.5 sm:mt-11">
        {testimonials.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to testimonial ${i + 1}`}
            aria-current={selected === i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-500 ease-out",
              selected === i
                ? "w-10 bg-brand-gold"
                : "w-2 bg-brand-charcoal/12 hover:bg-brand-charcoal/22",
            )}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
