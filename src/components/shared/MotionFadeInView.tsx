"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { useMotionHydration } from "@/hooks/useMotionHydration";
import { motionWhileInView } from "@/lib/motion-hydration";
import { cn } from "@/lib/utils";

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

interface MotionFadeInViewProps {
  children: ReactNode;
  className?: string;
}

/** Fade/slide block — hydration-safe whileInView entrance (matches Reveal). */
export function MotionFadeInView({ children, className }: MotionFadeInViewProps) {
  const { mounted, reduceMotion } = useMotionHydration();

  return (
    <motion.div
      className={cn(className)}
      initial={false}
      whileInView={motionWhileInView(mounted, reduceMotion, "visible")}
      viewport={{ once: true }}
      variants={mounted && !reduceMotion ? fadeUpVariants : undefined}
    >
      {children}
    </motion.div>
  );
}
