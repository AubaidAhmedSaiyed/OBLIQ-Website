import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";
import { Reveal } from "@/components/ui/reveal";

interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  align?: "center" | "left";
}

export function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align = "center",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        align === "left"   && "items-start text-left",
        className
      )}
      {...props}
    >
      {eyebrow && (
        <span className="eyebrow">{eyebrow}</span>
      )}
      <h2
        className="font-black leading-tight tracking-tight text-[var(--charcoal)]"
        style={{ fontSize: "clamp(1.9rem, 4.5vw, 3.5rem)" }}
      >
        {heading}
      </h2>
      {subheading && (
        <p className="max-w-xl text-base leading-relaxed text-[var(--body-text)]">
          {subheading}
        </p>
      )}
    </Reveal>
  );
}
