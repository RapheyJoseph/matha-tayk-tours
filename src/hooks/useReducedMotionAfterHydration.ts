"use client";

import { useMotionHydration } from "@/hooks/useMotionHydration";

/** @see useMotionHydration — boolean-only helper for reduced-motion gating. */
export function useReducedMotionAfterHydration() {
  return useMotionHydration().reduceMotion;
}
