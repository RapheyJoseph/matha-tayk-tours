"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { Reveal } from "@/components/shared/Reveal";
import { StaggerInView } from "@/components/shared/StaggerInView";
import type { aboutPage } from "@/data/about";
import { staggerParent, slideUp } from "@/lib/motion-variants";
import { cn } from "@/lib/utils";

const accentBorder: Record<
  (typeof aboutPage)["values"][number]["accent"],
  string
> = {
  gold: "about-value-accent-gold",
  sage: "about-value-accent-sage",
  amber: "about-value-accent-amber",
  warm: "about-value-accent-warm",
  slate: "about-value-accent-slate",
};

interface AboutValuesSectionProps {
  values: (typeof aboutPage)["values"];
}

export function AboutValuesSection({ values }: AboutValuesSectionProps) {
  return (
    <SectionContainer
      variant="pearl"
      paddedTop={false}
      atmosphere={false}
      className="about-values-section about-chapter-band"
    >
      <Reveal className="mx-auto w-full min-w-0 max-w-2xl">
        <p className="eyebrow">Principles we travel by</p>
        <h2 className="heading-section collection-heading text-balance">
          The values that shape every departure
        </h2>
        <p className="body-lead about-block-gap max-w-xl">
          Five commitments—quietly held, consistently applied—from corridor
          crossing to evening reflection.
        </p>
      </Reveal>

      <StaggerInView
        className="about-card-grid about-block-gap sm:grid-cols-2 lg:grid-cols-3"
        variants={staggerParent}
      >
        {values.map((item) => (
          <motion.article
            key={item.title}
            variants={slideUp}
            className="about-value-card editorial-card relative flex h-full flex-col overflow-hidden rounded-2xl p-7 sm:p-9"
          >
            <div
              className={cn(
                "absolute inset-x-0 top-0 h-[3px]",
                accentBorder[item.accent],
              )}
              aria-hidden
            />
            <h3 className="heading-card mt-1 text-xl capitalize sm:text-[1.3rem]">
              {item.title}
            </h3>
            <p className="body-copy mt-4 leading-[1.78]">{item.description}</p>
          </motion.article>
        ))}
      </StaggerInView>
    </SectionContainer>
  );
}
