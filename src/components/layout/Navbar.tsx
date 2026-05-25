"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/MobileNav";
import { collectionNavLinks, navLinks, siteConfig } from "@/data/home";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/utils";

export function Navbar() {
  const scrolled = useScrolled(24);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-6 lg:px-8">
      <div
        className={cn(
          "mx-auto max-w-[1440px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
          scrolled
            ? "glass-nav rounded-2xl px-4 py-3.5 sm:px-6 sm:py-4 lg:px-7"
            : "glass-nav-rest rounded-2xl px-3 py-2.5 sm:px-5 sm:py-3",
        )}
      >
        <nav
          className="flex min-h-[3.25rem] min-w-0 items-center justify-between gap-3 sm:min-h-[3.75rem] sm:gap-6 lg:gap-10"
          aria-label="Primary"
        >
          <Link
            href="/"
            className="nav-brand group flex min-w-0 max-w-[calc(100%-3.5rem)] shrink items-center gap-2.5 py-0.5 sm:max-w-none sm:gap-3"
          >
            <Image
              src="/images/matha-tayk-logo.png"
              alt="Matha Tayk Tours logo"
              width={96}
              height={96}
              priority
              className="nav-brand-logo h-8 w-8 shrink-0 object-contain min-[400px]:h-9 min-[400px]:w-9 sm:h-[38px] sm:w-[38px] lg:h-11 lg:w-11 xl:h-12 xl:w-12"
            />
            <div className="flex min-w-0 flex-col items-start justify-center gap-1.5 sm:gap-2.5">
              <span className="nav-brand-title truncate font-serif text-[0.95rem] text-brand-charcoal transition-colors duration-500 min-[400px]:text-[1.0625rem] sm:max-w-none sm:text-lg">
                {siteConfig.name}
              </span>
              <span className="nav-brand-tagline hidden text-[7px] font-semibold uppercase text-brand-body transition-colors duration-500 group-hover:text-brand-charcoal min-[380px]:block sm:text-[9px]">
                {siteConfig.tagline}
              </span>
            </div>
          </Link>

          <ul className="hidden items-center gap-0.5 2xl:flex">
            {collectionNavLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group/nav relative rounded-full px-2.5 py-2.5 text-[11px] font-medium tracking-[0.02em] text-brand-body transition-colors duration-500 hover:text-brand-charcoal 2xl:px-3 2xl:text-[12px] 2xl:tracking-[0.03em]"
                >
                  <span className="relative z-10 whitespace-nowrap">{link.label}</span>
                  <span
                    className="pointer-events-none absolute inset-x-4 bottom-2.5 h-px origin-left scale-x-0 bg-brand-gold transition-transform duration-500 ease-out group-hover/nav:scale-x-100"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>

          <ul className="hidden items-center gap-0.5 lg:flex 2xl:gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group/nav relative rounded-full px-4 py-2.5 text-[13px] font-medium tracking-[0.03em] text-brand-body transition-colors duration-500 hover:text-brand-charcoal xl:px-5"
                >
                  <span className="relative z-10">{link.label}</span>
                  <span
                    className="pointer-events-none absolute inset-x-5 bottom-2.5 h-px origin-left scale-x-0 bg-brand-gold transition-transform duration-500 ease-out group-hover/nav:scale-x-100"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>

          <motion.div
            className="flex shrink-0 items-center gap-3"
            whileHover={{ scale: 1 }}
          >
            <Button
              asChild
              size="default"
              className="hidden shadow-[0_12px_36px_-10px_rgba(200,169,107,0.48)] lg:inline-flex"
            >
              <Link href="/#contact">Plan Your Journey</Link>
            </Button>
            <MobileNav />
          </motion.div>
        </nav>

        <AnimatePresence>
          {scrolled && (
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              exit={{ scaleX: 0, opacity: 0 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-none absolute bottom-0 left-6 right-6 h-px origin-left bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent sm:left-7 sm:right-7"
            />
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
