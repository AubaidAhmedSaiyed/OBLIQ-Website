import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { SectionPlaceholder, placeholderSections } from "@/components/sections/placeholder";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
};

/**
 * Homepage
 *
 * Structure:
 *   1. Hero          ← reference section (built)
 *   2. Placeholders  ← contributor to-do board (issues #16, #27, #32, #33, #34, #35)
 *
 * When a contributor implements a section they:
 *   1. Create the component in src/components/sections/
 *   2. Remove the corresponding placeholder from this page
 *   3. Import and render their new section here
 *   4. Close the GitHub issue
 */
export default function HomePage() {
  return (
    <>
      {/* ─── 1. Hero — reference section ─── */}
      <Hero />

      {/* ─── 2. Placeholder sections — contributor to-do board ─── */}
      <section
        id="contribute"
        aria-label="Open contributor sections"
        className="section bg-[var(--obliq-charcoal)]"
      >
        <Container>
          {/* Board heading */}
          <div className="mb-10 flex flex-col items-center text-center gap-3">
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase border border-[rgba(123,140,222,0.3)] bg-[rgba(123,140,222,0.07)] text-[var(--obliq-periwinkle)]"
            >
              Open for contributions
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-[var(--obliq-cream)] opacity-80">
              This page is a live to-do board
            </h2>
            <p className="max-w-xl text-sm sm:text-base text-[var(--obliq-cream)] opacity-45 leading-relaxed">
              Each section below is an open GitHub issue waiting for a contributor.
              Pick one, read the issue, and open a pull request.
            </p>
          </div>

          {/* Placeholder grid */}
          <div className="flex flex-col gap-4">
            {placeholderSections.map((section, i) => (
              <SectionPlaceholder
                key={section.issueNumber}
                section={section}
                index={i}
              />
            ))}
          </div>

          {/* Call-to-action */}
          <div className="mt-12 flex flex-col items-center gap-3 text-center">
            <p className="text-sm text-[var(--obliq-cream)] opacity-40">
              New to open source? Start with the{" "}
              <a
                href="/contributing"
                className="text-[var(--obliq-lime)] opacity-70 hover:opacity-100 underline underline-offset-4 transition-opacity"
              >
                Contributing Guide
              </a>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
