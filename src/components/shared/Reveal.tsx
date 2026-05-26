"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useMotionHydration } from "@/hooks/useMotionHydration";
import { motionWhileInView } from "@/lib/motion-hydration";
import { cn } from "@/lib/utils";
import { fadeIn, slideUp } from "@/lib/motion-variants";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "fade" | "slideUp";
}

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "slideUp",
}: RevealProps) {
  const { mounted, reduceMotion } = useMotionHydration();
  const variants = variant === "fade" ? fadeIn : slideUp;

  return (
    <motion.div
      className={cn(className)}
      initial={false}
      whileInView={motionWhileInView(mounted, reduceMotion, "visible")}
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={mounted && !reduceMotion ? variants : undefined}
      transition={mounted && !reduceMotion ? { delay } : undefined}
    >
      {children}
    </motion.div>
  );
}
