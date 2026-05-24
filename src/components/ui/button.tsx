import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium tracking-wide transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-brand-gold text-white shadow-[0_10px_32px_-8px_rgba(200,169,107,0.5)] hover:-translate-y-0.5 hover:bg-brand-gold-mid hover:shadow-[0_14px_40px_-8px_rgba(200,169,107,0.55)] active:scale-[0.98]",
        secondary:
          "border border-brand-charcoal/10 bg-brand-white text-brand-charcoal shadow-[0_4px_20px_rgba(24,24,27,0.04)] hover:-translate-y-0.5 hover:border-brand-charcoal/18 hover:bg-brand-white hover:shadow-[0_12px_40px_rgba(24,24,27,0.08)]",
        cream:
          "border border-brand-charcoal/8 bg-brand-ivory text-brand-charcoal hover:-translate-y-0.5 hover:bg-brand-white hover:shadow-[0_12px_40px_rgba(24,24,27,0.06)]",
        ghost:
          "text-brand-body hover:bg-brand-charcoal/[0.04] hover:text-brand-charcoal",
        outlineNight:
          "border border-brand-charcoal/12 bg-brand-white text-brand-charcoal hover:-translate-y-0.5 hover:border-brand-charcoal/20 hover:shadow-[0_12px_40px_rgba(24,24,27,0.06)]",
        editorial:
          "group/btn h-auto gap-2.5 rounded-none border-0 bg-transparent px-0 py-0 font-medium tracking-[0.08em] text-brand-charcoal shadow-none hover:-translate-y-0 hover:bg-transparent hover:text-brand-charcoal",
      },
      size: {
        default: "h-11 px-7",
        sm: "h-9 px-5 text-xs",
        lg: "h-[3.25rem] px-9 text-[15px]",
        icon: "size-11 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
