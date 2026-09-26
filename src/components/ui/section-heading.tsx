import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  /** Small eyebrow label above the heading */
  eyebrow?: string;
  /** Main heading text */
  heading: string;
  /** Optional subheading / description */
  subheading?: string;
  /** Center or left-align */
  align?: "center" | "left";
  /** Apply lime gradient to heading text */
  gradient?: boolean;
}

/**
 * SectionHeading — the standard heading pattern for Obliq sections.
 *
 * Used by Hero and all other sections to ensure visual consistency.
 * Contributors should use this component rather than raw h2 tags.
 *
 * @example
 * <SectionHeading
 *   eyebrow="Features"
 *   heading="Everything you need"
 *   subheading="Powerful tools to build your next project."
 *   gradient
 * />
 */
export function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align = "center",
  gradient = false,
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        align === "left"   && "items-start text-left",
        className
      )}
      {...props}
    >
      {/* Eyebrow */}
      {eyebrow && (
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full px-4 py-1.5",
            "text-xs font-semibold tracking-widest uppercase",
            "border border-[rgba(200,245,96,0.3)] bg-[rgba(200,245,96,0.07)]",
            "text-[var(--obliq-lime)]"
          )}
        >
          {eyebrow}
        </span>
      )}

      {/* Heading */}
      <h2
        className={cn(
          "font-display font-bold leading-tight",
          "text-3xl sm:text-4xl md:text-5xl",
          gradient
            ? "text-gradient-lime"
            : "text-[var(--obliq-cream)]"
        )}
      >
        {heading}
      </h2>

      {/* Subheading */}
      {subheading && (
        <p
          className={cn(
            "max-w-2xl text-base sm:text-lg leading-relaxed",
            "text-[var(--obliq-cream)] opacity-65"
          )}
        >
          {subheading}
        </p>
      )}
    </div>
  );
}
