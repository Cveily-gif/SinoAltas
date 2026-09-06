import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-sans font-medium tracking-wide transition-[color,background-color,transform,opacity] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cinnabar",
  {
    variants: {
      variant: {
        primary: "bg-cinnabar text-paper hover:bg-cinnabar-deep",
        ink: "bg-ink text-paper hover:bg-ink-soft",
        paper: "bg-paper text-ink hover:bg-paper-deep",
        ghost:
          "bg-transparent text-paper hover:bg-paper/10 border border-paper/20",
        outline:
          "bg-transparent text-ink border border-ink/15 hover:bg-ink/5",
        quiet: "bg-transparent text-ink hover:text-cinnabar",
      },
      size: {
        sm: "h-10 px-3.5 text-sm rounded-md",
        md: "h-11 px-5 text-sm rounded-md",
        lg: "h-12 px-6 text-sm rounded-lg",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
