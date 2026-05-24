import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const variantStyles = {
  night: "bg-brand-white text-brand-body",
  cream: "bg-brand-ivory text-brand-body",
  nightSoft: "bg-brand-linen text-brand-body",
  pearl: "bg-brand-pearl text-brand-body",
} as const;

export type SectionVariant = keyof typeof variantStyles;

interface SectionContainerProps {
  id?: string;
  as?: "section" | "div";
  variant?: SectionVariant;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
  paddedTop?: boolean;
  atmosphere?: boolean;
}

function SectionAtmosphere({ variant }: { variant: SectionVariant }) {
  return (
    <>
      <div
        className="section-fade-top pointer-events-none absolute inset-x-0 top-0 h-24"
        aria-hidden
      />
      {variant === "cream" && (
        <div
          className="pointer-events-none absolute -right-[12%] top-[8%] h-[min(26rem,58vw)] w-[min(26rem,58vw)] rounded-full bg-brand-gold/[0.035] blur-[120px]"
          aria-hidden
        />
      )}
      {variant === "nightSoft" && (
        <div
          className="pointer-events-none absolute -left-[8%] bottom-[10%] h-[min(22rem,50vw)] w-[min(22rem,50vw)] rounded-full bg-brand-ivory/90 blur-[100px]"
          aria-hidden
        />
      )}
      {variant === "pearl" && (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-charcoal/[0.06] to-transparent"
          aria-hidden
        />
      )}
      {variant === "night" && (
        <div
          className="pointer-events-none absolute -right-[10%] top-1/3 h-[min(18rem,40vw)] w-[min(18rem,40vw)] rounded-full bg-brand-pearl/60 blur-[90px]"
          aria-hidden
        />
      )}
      <div
        className="section-fade-bottom pointer-events-none absolute inset-x-0 bottom-0 h-20"
        aria-hidden
      />
    </>
  );
}

export function SectionContainer({
  id,
  as: Component = "section",
  variant = "night",
  className,
  innerClassName,
  children,
  paddedTop = true,
  atmosphere = true,
}: SectionContainerProps) {
  return (
    <Component
      id={id}
      className={cn(
        "relative overflow-hidden",
        variantStyles[variant],
        paddedTop && "section-y",
        id && "scroll-mt-32",
        className,
      )}
    >
      {atmosphere ? <SectionAtmosphere variant={variant} /> : null}
      <div
        className={cn(
          "relative z-10 mx-auto w-full max-w-[1440px] gutter-x",
          innerClassName,
        )}
      >
        {children}
      </div>
    </Component>
  );
}
