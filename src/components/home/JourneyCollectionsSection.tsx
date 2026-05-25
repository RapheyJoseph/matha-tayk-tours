"use client";

import { motion } from "framer-motion";
import { CollectionCinematicPanel } from "@/components/home/CollectionCinematicPanel";
import type { CollectionPanelAlign } from "@/components/home/CollectionCinematicPanel";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { Reveal } from "@/components/shared/Reveal";
import { homepageCollectionSummaries } from "@/data/collections";
import { staggerParent, slideUp } from "@/lib/motion-variants";

const panelAlignments: CollectionPanelAlign[] = [
  "left",
  "right",
  "left",
  "right",
];

export function JourneyCollectionsSection() {
  return (
    <SectionContainer
      id="collections"
      variant="night"
      paddedTop={false}
      navSection="journeys"
    >
      <motion.div
        className="editorial-intro-row lg:flex-row lg:items-end lg:justify-between"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-8%" }}
        variants={staggerParent}
      >
        <Reveal className="w-full min-w-0 max-w-xl">
          <p className="eyebrow">Curated worlds</p>
          <h2 className="heading-section home-heading">
            Four collections—
            <span className="block sm:inline"> one luxury ecosystem.</span>
          </h2>
        </Reveal>
        <Reveal variant="fade" delay={0.1} className="w-full min-w-0 max-w-md lg:text-right">
          <p className="body-copy sm:text-[15px]">
            Scroll through editorial worlds—sacred, ancient, cinematic, and
            modern. Each universe is composed privately; enter where you are
            called.
          </p>
        </Reveal>
      </motion.div>

      <motion.div
        className="home-card-stack home-block-gap"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-6%" }}
        variants={staggerParent}
      >
        {homepageCollectionSummaries.map((collection, index) => (
          <motion.div key={collection.slug} variants={slideUp}>
            <CollectionCinematicPanel
              collection={collection}
              align={panelAlignments[index] ?? "left"}
              priority={index === 0}
            />
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}
