"use client";

import { useEffect, useRef } from "react";
import { GitFork, ArrowRight, Zap, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

/**
 * Hero — the reference section.
 *
 * ┌─────────────────────────────────────────────────────────────────────┐
 * │  CONTRIBUTOR REFERENCE                                              │
 * │                                                                     │
 * │  This is the pattern every Obliq section should follow.            │
 * │                                                                     │
 * │  Typography  → font-display, text-gradient-lime, opacity scale     │
 * │  Spacing     → container-obliq, section padding-y, gap-* tokens    │
 * │  Colors      → CSS variables from globals.css                      │
 * │  Buttons     → <Button> component with variant + size props        │
 * │  Container   → <Container> for consistent max-width                │
 * │  Animation   → CSS keyframes from globals.css, GSAP optional       │
 * │  Responsive  → mobile-first with sm: md: lg: breakpoints           │
 * │  Hierarchy   → eyebrow → h1 → subheading → CTAs → social proof     │
 * └─────────────────────────────────────────────────────────────────────┘
 */

const stats = [
  { value: "100%",  label: "Open Source"  },
  { value: "MIT",   label: "Licensed"     },
  { value: "∞",     label: "Customisable" },
];

const badges = [
  { icon: <Zap   className="h-3.5 w-3.5" />, text: "Blazing fast"      },
  { icon: <Shield className="h-3.5 w-3.5" />, text: "Privacy-first"    },
  { icon: <Globe  className="h-3.5 w-3.5" />, text: "Deploy anywhere"  },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  /* ── Subtle parallax on the background orbs ── */
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const section = sectionRef.current;
      if (!section) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const xPct = (clientX / innerWidth  - 0.5) * 2; // -1 to 1
      const yPct = (clientY / innerHeight - 0.5) * 2; // -1 to 1

      const limeOrb  = section.querySelector<HTMLElement>("[data-orb='lime']");
      const periOrb  = section.querySelector<HTMLElement>("[data-orb='peri']");
      if (limeOrb) {
        limeOrb.style.transform = `translate(${xPct * 18}px, ${yPct * 12}px)`;
      }
      if (periOrb) {
        periOrb.style.transform = `translate(${xPct * -14}px, ${yPct * -10}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      aria-label="Hero — Obliq open source platform"
      className={cn(
        "relative min-h-screen flex items-center",
        "overflow-hidden bg-mesh"
      )}
    >
      {/* ── Background orbs ── */}
      <div
        data-orb="lime"
        className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full opacity-15 transition-transform duration-700 ease-out"
        style={{
          background:
            "radial-gradient(circle, var(--obliq-lime) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />
      <div
        data-orb="peri"
        className="pointer-events-none absolute -bottom-60 -left-40 h-[700px] w-[700px] rounded-full opacity-12 transition-transform duration-700 ease-out"
        style={{
          background:
            "radial-gradient(circle, var(--obliq-periwinkle) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        aria-hidden="true"
      />

      {/* ── Grid pattern overlay ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(var(--obliq-cream) 1px, transparent 1px), linear-gradient(90deg, var(--obliq-cream) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <Container className="relative z-10 py-32 pt-40">
        <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">

          {/* ── Eyebrow badge ── */}
          <div
            className={cn(
              "inline-flex items-center gap-2.5 rounded-full px-4 py-2",
              "border border-[rgba(200,245,96,0.3)] bg-[rgba(200,245,96,0.06)]",
              "animate-fade-in",
            )}
            style={{ animationDelay: "0ms" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--obliq-lime)] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--obliq-lime)]" />
            </span>
            <span className="text-xs font-semibold tracking-widest uppercase text-[var(--obliq-lime)]">
              Open Source · Free forever
            </span>
          </div>

          {/* ── H1 heading ── */}
          <h1
            className={cn(
              "font-display font-black leading-[1.05] tracking-tight",
              "text-5xl sm:text-6xl md:text-7xl lg:text-8xl",
              "animate-fade-up"
            )}
            style={{ animationDelay: "80ms" }}
          >
            Build without{" "}
            <span className="text-gradient-lime">limits.</span>
          </h1>

          {/* ── Subheading ── */}
          <p
            className={cn(
              "max-w-2xl text-lg sm:text-xl leading-relaxed",
              "text-[var(--obliq-cream)] opacity-65",
              "animate-fade-up"
            )}
            style={{ animationDelay: "160ms" }}
          >
            {siteConfig.description} Join thousands of developers shipping
            faster with a platform designed for the open web.
          </p>

          {/* ── CTA buttons ── */}
          <div
            className="flex flex-col sm:flex-row items-center gap-4 animate-fade-up"
            style={{ animationDelay: "240ms" }}
          >
            <Button href="/contact" size="xl" variant="primary">
              Get started free
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Button>
            <Button
              href={siteConfig.links.github}
              size="xl"
              variant="secondary"
            >
              <GitFork className="h-5 w-5" aria-hidden="true" />
              Star on GitHub
            </Button>
          </div>

          {/* ── Feature badges ── */}
          <div
            className="flex flex-wrap items-center justify-center gap-3 animate-fade-up"
            style={{ animationDelay: "320ms" }}
          >
            {badges.map((b) => (
              <span
                key={b.text}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5",
                  "text-xs font-medium text-[var(--obliq-cream)] opacity-60",
                  "border border-[var(--obliq-border)]",
                  "bg-[rgba(255,255,255,0.03)]"
                )}
              >
                <span className="text-[var(--obliq-periwinkle)]">{b.icon}</span>
                {b.text}
              </span>
            ))}
          </div>

          {/* ── Stats ── */}
          <div
            className="w-full animate-fade-up"
            style={{ animationDelay: "400ms" }}
          >
            <div className="divider mb-8" />
            <dl className="flex flex-wrap items-center justify-center gap-8 sm:gap-16">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col items-center gap-1">
                  <dt className="text-3xl sm:text-4xl font-display font-black text-gradient-lime">
                    {s.value}
                  </dt>
                  <dd className="text-sm text-[var(--obliq-cream)] opacity-50 font-medium">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>

      {/* ── Bottom fade gradient ── */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--obliq-charcoal))",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
