import type { ScrollNavSection } from "@/hooks/useScrollNavSection";

const SCROLL_HREF_MAP: Record<string, ScrollNavSection> = {
  "/#collections": "journeys",
  "/#contact": "contact",
};

/** Hash anchors: active when pathname + hash match the link target */
export function isRouteNavLinkActive(
  href: string,
  pathname: string,
  hash: string,
): boolean {
  const [path, fragment] = href.split("#");
  const targetPath = path || "/";
  const targetHash = fragment ? `#${fragment}` : "";

  if (targetHash) {
    return pathname === targetPath && hash === targetHash;
  }

  return pathname === href;
}

export function isScrollNavLinkActive(
  href: string,
  scrollSection: ScrollNavSection | null,
): boolean {
  if (!scrollSection) return false;
  return SCROLL_HREF_MAP[href] === scrollSection;
}

export function isDesktopNavLinkActive(
  href: string,
  pathname: string,
  hash: string,
  scrollSection: ScrollNavSection | null,
  scrollEnabled: boolean,
): boolean {
  if (scrollEnabled && pathname === "/") {
    if (scrollSection) {
      return isScrollNavLinkActive(href, scrollSection);
    }
    if (SCROLL_HREF_MAP[href]) {
      return false;
    }
  }

  return isRouteNavLinkActive(href, pathname, hash);
}

/** About is route-based only — not part of homepage scroll mapping */
export function isAboutNavActive(pathname: string): boolean {
  return pathname === "/about" || pathname.startsWith("/about/");
}
