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
      <SheetContent side="right" className="flex flex-col lg:hidden">
        <SheetHeader className="text-left">
          <SheetTitle className="font-serif text-xl tracking-wide text-brand-charcoal">
            Navigate
          </SheetTitle>
        </SheetHeader>
        <div className="mt-10 flex flex-1 flex-col gap-6 overflow-y-auto">
          <div>
            <p className="label-meta px-1 text-[9px]">Collections</p>
            <div className="mt-3 flex flex-col gap-2">
              {collectionNavLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.03 * i,
                    duration: 0.35,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl border border-brand-charcoal/[0.06] bg-brand-warm px-4 py-3.5 text-[15px] font-medium text-brand-charcoal transition-colors hover:bg-brand-white"
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
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.04 * (i + collectionNavLinks.length),
                    duration: 0.35,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl border border-brand-charcoal/[0.06] bg-brand-warm px-4 py-3.5 text-[15px] font-medium text-brand-charcoal transition-colors hover:bg-brand-white"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <Button asChild className="mt-8 w-full shrink-0">
          <Link href="/#contact" onClick={() => setOpen(false)}>
            Plan Your Journey
          </Link>
        </Button>
      </SheetContent>
    </Sheet>
  );
}
