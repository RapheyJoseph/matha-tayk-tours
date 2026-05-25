"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { aboutNavSection } from "@/data/home";
import { cn } from "@/lib/utils";

const triggerClass =
  "nav-desktop-link inline-flex items-center gap-1 rounded-full px-3.5 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/35 focus-visible:ring-offset-2 xl:px-4";

const linkClass =
  "nav-about-link block rounded-lg px-3.5 py-2.5 text-[13px] font-medium tracking-[0.02em] text-brand-body transition-colors duration-500 hover:bg-brand-warm/80 hover:text-brand-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/30";

interface NavAboutMenuProps {
  active?: boolean;
}

export function NavAboutMenu({ active: activeOverride }: NavAboutMenuProps = {}) {
  const pathname = usePathname();
  const menuId = useId();
  const rootRef = useRef<HTMLLIElement>(null);
  const [open, setOpen] = useState(false);

  const isAboutRouteActive = aboutNavSection.links.some(
    (link) =>
      pathname === link.href ||
      (link.href !== "/about" && pathname.startsWith(`${link.href}/`)),
  );

  const isAboutActive = activeOverride ?? isAboutRouteActive;

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        close();
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [close]);

  useEffect(() => {
    close();
  }, [pathname, close]);

  return (
    <li
      ref={rootRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        id={`${menuId}-trigger`}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={`${menuId}-menu`}
        onClick={() => setOpen((value) => !value)}
        className={triggerClass}
        data-active={isAboutActive ? "true" : undefined}
        aria-current={isAboutActive ? "true" : undefined}
      >
        <span className="relative z-[1]">{aboutNavSection.label}</span>
        <ChevronDown
          className={cn(
            "relative z-[1] size-3 shrink-0 opacity-65 transition-transform duration-[260ms] ease-out",
            open && "rotate-180",
          )}
          aria-hidden
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={`${menuId}-menu`}
            role="region"
            aria-labelledby={`${menuId}-trigger`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 top-full z-50 pt-2.5"
          >
            <ul className="nav-about-panel">
              {aboutNavSection.links.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={close}
                      className={cn(linkClass, active && "bg-brand-warm/90 text-brand-charcoal")}
                      aria-current={active ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
