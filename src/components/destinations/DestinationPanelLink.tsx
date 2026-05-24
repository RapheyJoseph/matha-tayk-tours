"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DestinationPanelLinkProps {
  href: string;
  label: string;
  className?: string;
  children: ReactNode;
}

export function DestinationPanelLink({
  href,
  label,
  className,
  children,
}: DestinationPanelLinkProps) {
  return (
    <Link
      href={href}
      aria-label={`Explore ${label} — immersive destination`}
      className={cn(
        "destination-panel-link group/link relative block rounded-[1.35rem]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-pearl",
        className,
      )}
    >
      {children}
      <span
        className={cn(
          "pointer-events-none absolute bottom-9 right-9 z-[4] hidden items-center gap-2",
          "rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md",
          "text-[10px] font-semibold uppercase tracking-[0.24em] text-white/90",
          "opacity-0 translate-y-2 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
          "group-hover/link:translate-y-0 group-hover/link:opacity-100 sm:flex",
        )}
        aria-hidden
      >
        Explore
        <ArrowUpRight className="size-3.5" />
      </span>
    </Link>
  );
}
