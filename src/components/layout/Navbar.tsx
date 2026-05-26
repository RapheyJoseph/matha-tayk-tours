"use client";

import Link from "next/link";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/MobileNav";
import { NavAboutMenu } from "@/components/layout/NavAboutMenu";
import { navLinks, siteConfig } from "@/data/home";
import { useScrollNavSection } from "@/hooks/useScrollNavSection";
import { useScrolled } from "@/hooks/useScrolled";
import {
  isAboutNavActive,
  isDesktopNavLinkActive,
} from "@/lib/nav-active";
import { cn } from "@/lib/utils";

const SCROLL_NAV_PATHS = ["/"] as const;

export function Navbar() {
  const scrolled = useScrolled(24);
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const scrollNavEnabled = SCROLL_NAV_PATHS.includes(
    pathname as (typeof SCROLL_NAV_PATHS)[number],
  );
  const scrollSection = useScrollNavSection(scrollNavEnabled);

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  return (
    <header className="site-header px-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-6 lg:px-8">
      <div
        className={cn(
          "glass-nav glass-surface mx-auto max-w-[1440px] px-4 py-2.5 sm:px-5 sm:py-3 lg:px-6 lg:py-3",
          scrolled && "glass-nav--scrolled",
        )}
      >
        <nav
          className="flex min-h-[2.75rem] min-w-0 items-center justify-between gap-3 sm:min-h-[3rem] sm:gap-4 lg:grid lg:min-h-[3.125rem] lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-center lg:gap-x-6 xl:gap-x-8"
          aria-label="Primary"
        >
          <Link
            href="/"
            className="nav-brand group flex min-w-0 max-w-[calc(100%-3.5rem)] shrink items-center gap-2 sm:max-w-none sm:gap-2.5 lg:justify-self-start"
          >
            <BrandLogo variant="nav" priority />
            <div className="flex min-w-0 flex-col items-start justify-center gap-0.5 sm:gap-1">
              <span className="nav-brand-title truncate font-serif text-[0.95rem] text-brand-charcoal transition-colors duration-500 min-[400px]:text-[1.0625rem] sm:max-w-none sm:text-lg">
                {siteConfig.name}
              </span>
              <span className="nav-brand-tagline hidden text-[7px] font-semibold uppercase text-brand-body transition-colors duration-500 group-hover:text-brand-charcoal min-[380px]:block sm:text-[9px]">
                {siteConfig.tagline}
              </span>
            </div>
          </Link>

          <ul className="nav-desktop-links hidden items-center overflow-visible lg:flex lg:justify-self-center lg:gap-0">
            <NavAboutMenu active={isAboutNavActive(pathname)} />
            {navLinks.map((link) => {
              const active = isDesktopNavLinkActive(
                link.href,
                pathname,
                hash,
                scrollSection,
                scrollNavEnabled,
              );
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="nav-desktop-link inline-flex items-center rounded-full px-3.5 py-2 xl:px-4"
                    data-active={active ? "true" : undefined}
                    aria-current={active ? "page" : undefined}
                  >
                    <span className="relative z-[1]">{link.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex shrink-0 items-center gap-2.5 lg:justify-self-end lg:gap-3">
            <Button
              asChild
              size="default"
              className="nav-desktop-cta hidden lg:inline-flex"
            >
              <Link href="/#contact">Plan Your Journey</Link>
            </Button>
            <MobileNav />
          </div>
        </nav>

        <AnimatePresence>
          {scrolled && (
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              exit={{ scaleX: 0, opacity: 0 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-none absolute bottom-0 left-6 right-6 z-[2] h-px origin-left bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent sm:left-7 sm:right-7"
            />
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
