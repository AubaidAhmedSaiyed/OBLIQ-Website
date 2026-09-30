/**
 * Privacy-first analytics (Plausible). Everything here is a no-op unless
 * NEXT_PUBLIC_PLAUSIBLE_DOMAIN is set at build time, so forks and
 * self-hosted copies ship without any tracking.
 */

export const analyticsDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

/** Plausible Cloud by default; point at a self-hosted Plausible CE instead. */
export const analyticsScriptSrc =
  process.env.NEXT_PUBLIC_PLAUSIBLE_SRC || "https://plausible.io/js/script.js";

export type AnalyticsEvent = "CTA Click" | "Pricing Toggle" | "Form Submit";

type Plausible = (
  event: AnalyticsEvent,
  options?: { props?: Record<string, string> }
) => void;

declare global {
  interface Window {
    plausible?: Plausible;
  }
}

/** Sends a custom event. Safe to call anywhere; does nothing when disabled. */
export function trackEvent(event: AnalyticsEvent, props?: Record<string, string>) {
  if (!analyticsDomain || typeof window === "undefined") return;
  window.plausible?.(event, props ? { props } : undefined);
}
