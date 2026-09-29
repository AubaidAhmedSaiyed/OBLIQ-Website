import { PricingCard } from "@/components/ui/pricing-card";
import { BillingProvider, BillingToggle } from "@/components/sections/billing-toggle";
import { plans } from "@/lib/pricing";

/**
 * Pricing — three plans with an Annually / Monthly toggle inside the
 * featured card. Server component; only the billing toggle runs on the client.
 */
export function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="section scroll-mt-24 bg-[linear-gradient(180deg,var(--pricing-bg-top),var(--pricing-bg-bottom))]"
    >
      <div className="container-obliq flex flex-col items-center gap-14">
        <div className="flex flex-col items-center gap-3 text-center font-rounded">
          <span className="eyebrow">Pricing</span>
          <h2
            id="pricing-heading"
            className="text-[28px] font-semibold leading-[1.2] tracking-[-0.03em] text-[var(--ink)] md:text-[52px]"
          >
            Simple plans
            <br />
            for serious work
          </h2>
        </div>

        <BillingProvider>
          <div className="mx-auto grid w-full max-w-[1072px] grid-cols-1 items-end gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <PricingCard
                key={plan.name}
                {...plan}
                top={plan.featured ? <BillingToggle /> : undefined}
              />
            ))}
          </div>
        </BillingProvider>
      </div>
    </section>
  );
}
