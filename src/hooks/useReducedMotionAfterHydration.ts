"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Framer Motion reads `prefers-reduced-motion` on the client immediately, which
 * can disagree with the server default and cause hydration mismatches on
 * `initial` props. Returns `false` until after mount so SSR and the first
 * client render always match; then reflects the real user preference.
 */
export function useReducedMotionAfterHydration() {
  const prefersReduced = useReducedMotion();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return hydrated && Boolean(prefersReduced);
}
