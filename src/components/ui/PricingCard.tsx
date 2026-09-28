import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

/**
 * A price can be a single string ("Free", "$87") or one value per billing
 * period. With per-period values the card renders both, and an ancestor with
 * `data-billing="monthly"` switches which one is visible — so the card stays
 * a server component and the billing toggle (#37) only flips that attribute.
 * Without the attribute, the annual value is shown.
 */
type Billed = { annually: string; monthly: string };

export interface PricingCardProps {
  name: string;
  price: string | Billed;
  period?: string | Billed;
  description: string;
  features: string[];
  featured?: boolean;
  /** Small label on the card, e.g. "Most popular". */
  badge?: string;
  cta: { label: string; href: string };
  className?: string;
}

function BilledText({ value }: { value: string | Billed }) {
  if (typeof value === "string") return <>{value}</>;
  return (
    <>
      <span className="in-data-[billing=monthly]:hidden">{value.annually}</span>
      <span className="hidden in-data-[billing=monthly]:inline">{value.monthly}</span>
    </>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="mt-0.5 h-4 w-4 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3.5 8.5l3 3 6-7" />
    </svg>
  );
}

export function PricingCard({
  name,
  price,
  period,
  description,
  features,
  featured = false,
  badge,
  cta,
  className,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 p-7 rounded-[var(--radius-card)] border",
        featured
          ? "bg-[var(--charcoal)] text-[var(--cream)] border-transparent shadow-xl"
          : "bg-white text-[var(--charcoal)] border-[var(--border-card)]",
        className
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-bold">{name}</h3>
        {badge && (
          <span
            className={cn(
              "rounded-full px-3 py-1 text-xs font-semibold",
              featured
                ? "bg-[var(--cream)] text-[var(--charcoal)]"
                : "bg-[var(--cream-pill)] text-[var(--charcoal)]"
            )}
          >
            {badge}
          </span>
        )}
      </div>

      {/* Fixed height so switching billing periods never shifts the layout */}
      <p className="flex h-12 items-end gap-1">
        <span className="text-4xl font-black tracking-tight leading-none">
          <BilledText value={price} />
        </span>
        {period && (
          <span
            className={cn(
              "text-sm font-medium",
              featured ? "text-[var(--cream)] opacity-70" : "text-[var(--muted)]"
            )}
          >
            <BilledText value={period} />
          </span>
        )}
      </p>

      <p
        className={cn(
          "text-sm leading-relaxed",
          featured ? "text-[var(--cream)] opacity-80" : "text-[var(--body-text)]"
        )}
      >
        {description}
      </p>

      <Button
        href={cta.href}
        variant={featured ? "secondary" : "primary"}
        size="md"
        className="w-full"
      >
        {cta.label}
      </Button>

      <ul className="flex flex-col gap-3" role="list">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <span className={featured ? "text-[var(--cream)]" : "text-[var(--charcoal)]"}>
              <CheckIcon />
            </span>
            <span className={featured ? "opacity-90" : "text-[var(--body-text)]"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
