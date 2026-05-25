"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { collectionNavLinks, navLinks } from "@/data/home";
import { cn } from "@/lib/utils";

const navLinkClass =
  "block rounded-xl border border-brand-charcoal/[0.06] bg-brand-warm px-4 py-3.5 text-[15px] font-medium leading-snug text-pretty text-brand-charcoal transition-colors hover:bg-brand-white";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="secondary"
          size="icon"
          className="lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="full"
        className={cn(
          "lg:hidden",
          "flex flex-col gap-0 p-0 shadow-none",
          "bg-brand-warm/98 backdrop-blur-xl",
          "pt-[max(1.25rem,env(safe-area-inset-top,0px))]",
          "pb-[max(1.25rem,env(safe-area-inset-bottom,0px))]",
          "pl-[max(1.25rem,env(safe-area-inset-left,0px))]",
          "pr-[max(1.25rem,env(safe-area-inset-right,0px))]",
        )}
      >
        <div className="flex min-h-0 flex-1 flex-col">
          <SheetHeader className="shrink-0 space-y-0 pr-12 text-left">
            <SheetTitle className="font-serif text-xl tracking-wide text-brand-charcoal">
              Navigate
            </SheetTitle>
          </SheetHeader>

          <nav
            className="mt-6 flex min-h-0 flex-1 flex-col justify-start gap-8 overflow-y-auto overscroll-contain pt-2 [-webkit-overflow-scrolling:touch]"
            aria-label="Mobile"
          >
            <div>
              <p className="label-meta px-1 text-[9px]">Collections</p>
              <div className="mt-3 flex flex-col gap-2">
                {collectionNavLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.04 * i,
                      duration: 0.38,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={navLinkClass}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <p className="label-meta px-1 text-[9px]">Studio</p>
              <div className="mt-3 flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.04 * (i + collectionNavLinks.length) + 0.12,
                      duration: 0.38,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={navLinkClass}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </nav>

          <div className="mt-auto shrink-0 border-t border-brand-charcoal/[0.06] pt-6">
            <Button asChild className="w-full">
              <Link href="/#contact" onClick={() => setOpen(false)}>
                Plan Your Journey
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
