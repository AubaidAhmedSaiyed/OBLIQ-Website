import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";

/* ── Button variants via CVA ── */
const buttonVariants = cva(
  // base
  [
    "inline-flex items-center justify-center gap-2",
    "font-semibold rounded-full",
    "transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--obliq-lime)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--obliq-charcoal)]",
    "disabled:pointer-events-none disabled:opacity-50",
    "cursor-pointer select-none",
    "relative overflow-hidden",
    "whitespace-nowrap",
  ],
  {
    variants: {
      variant: {
        /** Lime fill — primary CTA */
        primary: [
          "bg-[var(--obliq-lime)] text-[var(--obliq-charcoal)]",
          "hover:bg-[var(--obliq-lime-light)] hover:shadow-[0_0_24px_rgba(200,245,96,0.45)]",
          "active:scale-[0.97]",
        ],
        /** Ghost with lime border */
        secondary: [
          "bg-transparent text-[var(--obliq-cream)]",
          "border border-[rgba(200,245,96,0.35)]",
          "hover:bg-[rgba(200,245,96,0.08)] hover:border-[var(--obliq-lime)]",
          "active:scale-[0.97]",
        ],
        /** Ghost with periwinkle border */
        periwinkle: [
          "bg-transparent text-[var(--obliq-periwinkle-light)]",
          "border border-[rgba(123,140,222,0.35)]",
          "hover:bg-[rgba(123,140,222,0.1)] hover:border-[var(--obliq-periwinkle)]",
          "active:scale-[0.97]",
        ],
        /** Fully glass */
        ghost: [
          "bg-[rgba(255,255,255,0.05)] text-[var(--obliq-cream)]",
          "border border-[var(--obliq-border)]",
          "hover:bg-[rgba(255,255,255,0.09)] hover:border-[var(--obliq-border-hover)]",
          "active:scale-[0.97]",
        ],
        /** Destructive / danger */
        danger: [
          "bg-red-600 text-white",
          "hover:bg-red-500 hover:shadow-[0_0_24px_rgba(239,68,68,0.4)]",
          "active:scale-[0.97]",
        ],
      },
      size: {
        sm:  "h-8  px-4  text-sm",
        md:  "h-10 px-6  text-sm",
        lg:  "h-12 px-8  text-base",
        xl:  "h-14 px-10 text-lg",
        icon:"h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size:    "md",
    },
  }
);

/* ── Types ── */
type ButtonVariants = VariantProps<typeof buttonVariants>;

type AsButton = ComponentPropsWithoutRef<"button"> & {
  href?: never;
};
type AsLink = ComponentPropsWithoutRef<typeof Link> & {
  href: string;
};

type ButtonProps = ButtonVariants & (AsButton | AsLink);

/* ── Component ── */
export function Button({ variant, size, className, ...props }: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if ("href" in props && props.href !== undefined) {
    const { href, ...rest } = props as AsLink;
    const isExternal = href.startsWith("http");
    return (
      <Link
        href={href}
        className={classes}
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        {...(rest as Omit<AsLink, "href">)}
      />
    );
  }

  return <button className={classes} {...(props as AsButton)} />;
}

export { buttonVariants };
export type { ButtonProps };
