import Image from "next/image";
import { siteConfig } from "@/data/home";
import { cn } from "@/lib/utils";

const variantClass = {
  nav: "brand-logo--nav h-7 w-7 min-[400px]:h-8 min-[400px]:w-8 sm:h-8 sm:w-8 lg:h-9 lg:w-9 xl:h-[2.375rem] xl:w-[2.375rem]",
  footer: "brand-logo--footer h-11 w-11 sm:h-12 sm:w-12",
  mobile: "brand-logo--mobile h-9 w-9 sm:h-10 sm:w-10",
} as const;

export type BrandLogoVariant = keyof typeof variantClass;

type BrandLogoProps = {
  variant?: BrandLogoVariant;
  priority?: boolean;
  className?: string;
};

export function BrandLogo({
  variant = "nav",
  priority = false,
  className,
}: BrandLogoProps) {
  const { logo } = siteConfig;

  return (
    <Image
      src={logo.src}
      alt={logo.alt}
      width={logo.width}
      height={logo.height}
      priority={priority}
      sizes={logo.sizes[variant]}
      className={cn("brand-logo shrink-0 object-contain", variantClass[variant], className)}
    />
  );
}
