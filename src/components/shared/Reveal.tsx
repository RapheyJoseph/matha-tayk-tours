"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useReducedMotionAfterHydration } from "@/hooks/useReducedMotionAfterHydration";
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
  const reduceMotion = useReducedMotionAfterHydration();
  const variants = variant === "fade" ? fadeIn : slideUp;

  return (
    <motion.div
      className={cn(className)}
      initial={false}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={reduceMotion ? undefined : variants}
      transition={reduceMotion ? undefined : { delay }}
    >
      {children}
    </motion.div>
  );
}
