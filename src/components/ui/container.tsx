import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /** Constrain to a tighter max-width for content-heavy pages */
  narrow?: boolean;
  /** Remove default horizontal padding (useful when nested) */
  noPadding?: boolean;
}

/**
 * Container — wraps page content to a consistent max-width and
 * applies responsive horizontal padding from the design system.
 *
 * @example
 * <Container>
 *   <h1>Hello</h1>
 * </Container>
 */
export function Container({
  narrow = false,
  noPadding = false,
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full",
        narrow ? "max-w-3xl" : "max-w-[1200px]",
        !noPadding && "px-4 sm:px-6 lg:px-8",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
