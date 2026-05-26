"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useMotionHydration } from "@/hooks/useMotionHydration";
import { staggerInViewMotion } from "@/lib/motion-hydration";
import type { Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface StaggerInViewProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  viewportMargin?: string;
  as?: "div" | "ul";
  role?: string;
}

/**
 * Stagger parent that stays static through hydration, then animates in-view.
 */
export function StaggerInView({
  children,
  className,
  variants,
  viewportMargin = "-8%",
  as = "div",
  role,
}: StaggerInViewProps) {
  const { mounted, reduceMotion } = useMotionHydration();
  const motionProps = staggerInViewMotion({ mounted, reduceMotion, variants });
  const MotionTag = as === "ul" ? motion.ul : motion.div;

  return (
    <MotionTag
      className={cn(className)}
      role={role}
      {...motionProps}
      viewport={{ once: true, margin: viewportMargin }}
    >
      {children}
    </MotionTag>
  );
}
