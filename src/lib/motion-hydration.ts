import type { Target, VariantLabels, Variants } from "framer-motion";

/** SSR-safe `initial` — only apply entrance state after mount. */
export function motionInitial<T extends Target | VariantLabels | boolean>(
  mounted: boolean,
  reduceMotion: boolean,
  value: T,
): false | T {
  if (!mounted || reduceMotion) return false;
  return value;
}

/** SSR-safe `whileInView` — avoids in-view firing during hydration. */
export function motionWhileInView(
  mounted: boolean,
  reduceMotion: boolean,
  target: VariantLabels,
): VariantLabels | undefined {
  if (!mounted || reduceMotion) return undefined;
  return target;
}

/** SSR-safe `animate` for mount-time entrance (hero, etc.). */
export function motionAnimate(
  mounted: boolean,
  reduceMotion: boolean,
  target: Target | VariantLabels,
): Target | VariantLabels | false | undefined {
  if (!mounted) return undefined;
  if (reduceMotion) return false;
  return target;
}

export type StaggerInViewMotionInput = {
  mounted: boolean;
  reduceMotion: boolean;
  variants?: Variants;
};

/** Props for stagger + whileInView sections (initial hidden → visible). */
export function staggerInViewMotion({
  mounted,
  reduceMotion,
  variants,
}: StaggerInViewMotionInput) {
  return {
    initial: false as const,
    whileInView: motionWhileInView(mounted, reduceMotion, "visible"),
    viewport: { once: true } as const,
    variants: mounted && !reduceMotion ? variants : undefined,
  };
}
