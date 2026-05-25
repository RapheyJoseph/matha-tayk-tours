"use client";

import { useEffect, useRef, useState } from "react";

/** Homepage scroll targets only — About is route-based, not scroll-mapped */
export type ScrollNavSection = "journeys" | "contact";

const VALID_SECTIONS = new Set<ScrollNavSection>(["journeys", "contact"]);

type SectionMetrics = {
  ratio: number;
  centerScore: number;
  score: number;
};

const SECTION_RULES: Record<
  ScrollNavSection,
  { minScore: number; minRatio: number; minCenter: number }
> = {
  journeys: { minScore: 0.3, minRatio: 0.26, minCenter: 0.28 },
  contact: { minScore: 0.4, minRatio: 0.45, minCenter: 0.5 },
};

const SWITCH_MARGIN = 0.1;
const DEBOUNCE_MS = 100;

function computeMetrics(entry: IntersectionObserverEntry): SectionMetrics {
  const ratio = entry.isIntersecting ? entry.intersectionRatio : 0;
  const rect = entry.boundingClientRect;
  const viewportHeight = window.innerHeight || 1;
  const viewportCenter = viewportHeight * 0.5;
  const sectionCenter = rect.top + rect.height / 2;
  const centerDistance = Math.abs(sectionCenter - viewportCenter);
  const centerScore = Math.max(0, 1 - centerDistance / (viewportHeight * 0.48));

  const score = ratio * 0.58 + centerScore * 0.42;

  return { ratio, centerScore, score };
}

function isHeroNeutralZone(): boolean {
  if (typeof window === "undefined") return false;
  return window.scrollY < window.innerHeight * 0.52;
}

function sectionQualifies(
  section: ScrollNavSection,
  metrics: SectionMetrics,
  heroNeutral: boolean,
): boolean {
  const rules = SECTION_RULES[section];
  if (metrics.score < rules.minScore || metrics.ratio < rules.minRatio) {
    return false;
  }
  if (metrics.centerScore < rules.minCenter) {
    return false;
  }
  if (heroNeutral && section === "journeys") {
    return metrics.score >= 0.44 && metrics.centerScore >= 0.4;
  }
  return true;
}

function resolveActiveSection(
  metrics: Map<ScrollNavSection, SectionMetrics>,
  current: ScrollNavSection | null,
  heroNeutral: boolean,
): ScrollNavSection | null {
  let best: ScrollNavSection | null = null;
  let bestScore = 0;

  for (const [key, value] of metrics) {
    if (!VALID_SECTIONS.has(key as ScrollNavSection)) continue;
    const section = key as ScrollNavSection;
    if (!sectionQualifies(section, value, heroNeutral)) continue;
    if (value.score > bestScore) {
      bestScore = value.score;
      best = section;
    }
  }

  if (!best) {
    return null;
  }

  if (current && current !== best) {
    const currentMetrics = metrics.get(current);
    const currentScore = currentMetrics?.score ?? 0;
    const currentStillQualifies =
      currentMetrics && sectionQualifies(current, currentMetrics, heroNeutral);

    if (
      currentStillQualifies &&
      bestScore < currentScore + SWITCH_MARGIN
    ) {
      return current;
    }
  }

  return best;
}

/**
 * Scroll-aware nav highlighting for editorial pages.
 * Center-weighted dominance + per-section thresholds (contact is strictest).
 */
export function useScrollNavSection(enabled: boolean): ScrollNavSection | null {
  const [section, setSection] = useState<ScrollNavSection | null>(null);
  const currentRef = useRef<ScrollNavSection | null>(null);
  const metricsRef = useRef<Map<ScrollNavSection, SectionMetrics>>(new Map());
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!enabled) {
      currentRef.current = null;
      setSection(null);
      return;
    }

    const elements = document.querySelectorAll<HTMLElement>("[data-nav-section]");
    const metrics = metricsRef.current;

    if (!elements.length) {
      currentRef.current = null;
      setSection(null);
      return;
    }

    const commit = () => {
      const next = resolveActiveSection(
        metrics,
        currentRef.current,
        isHeroNeutralZone(),
      );

      if (next !== currentRef.current) {
        currentRef.current = next;
        setSection(next);
      }
    };

    const scheduleCommit = () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(commit, DEBOUNCE_MS);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const key = entry.target.getAttribute("data-nav-section");
          if (!key || !VALID_SECTIONS.has(key as ScrollNavSection)) continue;

          const sectionKey = key as ScrollNavSection;
          if (!entry.isIntersecting && entry.intersectionRatio === 0) {
            metrics.delete(sectionKey);
          } else {
            metrics.set(sectionKey, computeMetrics(entry));
          }
        }
        scheduleCommit();
      },
      {
        root: null,
        rootMargin: "-22% 0px -32% 0px",
        threshold: [0, 0.1, 0.2, 0.35, 0.45, 0.55, 0.65, 0.75],
      },
    );

    elements.forEach((el) => observer.observe(el));

    const onScroll = () => scheduleCommit();
    window.addEventListener("scroll", onScroll, { passive: true });

    commit();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (debounceRef.current) clearTimeout(debounceRef.current);
      metrics.clear();
    };
  }, [enabled]);

  return section;
}
