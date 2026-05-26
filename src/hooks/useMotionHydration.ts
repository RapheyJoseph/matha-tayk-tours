"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Coordinates Framer Motion with SSR: `mounted` is false until after the first
 * client commit so server HTML matches the initial client render. `reduceMotion`
 * only reflects `prefers-reduced-motion` after mount to avoid disagreeing with
 * server defaults on `initial` / `whileInView` props.
 */
export function useMotionHydration() {
  const prefersReduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const reduceMotion = mounted && Boolean(prefersReduced);

  return { mounted, reduceMotion };
}
