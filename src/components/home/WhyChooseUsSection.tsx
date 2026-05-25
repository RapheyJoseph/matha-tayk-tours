"use client";

import { motion } from "framer-motion";
import { Compass, Hotel, Route, Sparkles } from "lucide-react";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { Reveal } from "@/components/shared/Reveal";
import { whyChooseUs } from "@/data/home";
import { staggerParent, slideUp } from "@/lib/motion-variants";
import { cn } from "@/lib/utils";

const iconMap = {
  compass: Compass,
  hotel: Hotel,
  sparkles: Sparkles,
  route: Route,
} as const;

export function WhyChooseUsSection() {
  return (
    <SectionContainer id="why-us" variant="nightSoft" paddedTop>
      <Reveal className="max-w-2xl">
        <p className="eyebrow">Why Matha Tayk</p>
        <h2 className="heading-section editorial-heading">
          A studio for spiritual travel—not a catalogue of packages.
        </h2>
        <p className="body-lead editorial-lead-gap max-w-xl">
          We believe heritage travel should feel like entering a quiet gallery:
          curated lighting, generous space, and guides who know when to speak—and
          when to step aside.
        </p>
      </Reveal>

      <motion.div
        className="editorial-card-grid editorial-block-gap md:grid-cols-2 xl:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={staggerParent}
      >
        {whyChooseUs.map((item) => {
          const Icon = iconMap[item.icon];
          return (
            <motion.div
              key={item.title}
              variants={slideUp}
              className={cn(
                "editorial-card flex flex-col rounded-2xl p-6 sm:p-10",
              )}
            >
              <div className="flex size-12 items-center justify-center rounded-xl border border-brand-charcoal/[0.06] bg-brand-warm">
                <Icon className="size-5 text-brand-gold" strokeWidth={1.5} />
              </div>
              <h3 className="heading-card mt-8 text-xl sm:text-[1.35rem]">
                {item.title}
              </h3>
              <p className="body-copy mt-4">{item.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionContainer>
  );
}
