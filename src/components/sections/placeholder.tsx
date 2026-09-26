import Link from "next/link";
import { GitBranch, ExternalLink, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import type { PlaceholderSection } from "@/types";

interface SectionPlaceholderProps {
  section: PlaceholderSection;
  /** Index for staggered animation delay */
  index?: number;
}

/**
 * SectionPlaceholder — turns the homepage into a live contributor to-do board.
 *
 * Each placeholder:
 * - Shows what section is missing
 * - Links directly to the corresponding GitHub issue
 * - Guides contributors on how to pick it up
 *
 * Issue numbers referenced in code/docs (#16, #27, #32) must stay stable.
 */
export function SectionPlaceholder({ section, index = 0 }: SectionPlaceholderProps) {
  const delay = index * 80;

  return (
    <div
      className={cn(
        "placeholder-section",
        "w-full px-6 py-10 sm:px-10 sm:py-14",
        "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6",
        "animate-fade-up"
      )}
      style={{ animationDelay: `${delay}ms` }}
      aria-label={`Placeholder section: ${section.title}`}
    >
      {/* Left — info */}
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div
          className={cn(
            "mt-0.5 flex-shrink-0 h-10 w-10 rounded-xl flex items-center justify-center",
            "bg-[rgba(200,245,96,0.08)] border border-[rgba(200,245,96,0.2)]"
          )}
          aria-hidden="true"
        >
          <Plus className="h-5 w-5 text-[var(--obliq-lime)] opacity-70" />
        </div>

        <div className="flex flex-col gap-1.5">
          {/* Section name */}
          <h3 className="font-display font-semibold text-lg text-[var(--obliq-cream)] opacity-80">
            {section.title}
          </h3>
          {/* Description */}
          <p className="text-sm text-[var(--obliq-cream)] opacity-45 leading-relaxed max-w-md">
            {section.description}
          </p>
          {/* Issue badge */}
          <div className="flex items-center gap-2 mt-1">
            <GitBranch className="h-3.5 w-3.5 text-[var(--obliq-periwinkle)] opacity-70" aria-hidden="true" />
            <span className="text-xs text-[var(--obliq-periwinkle)] opacity-70 font-mono">
              #{section.issueNumber}
            </span>
          </div>
        </div>
      </div>

      {/* Right — CTA */}
      <Link
        href={section.issueUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Contribute to ${section.title} — GitHub issue #${section.issueNumber}`}
        className={cn(
          "flex-shrink-0 inline-flex items-center gap-2 rounded-full",
          "px-5 py-2.5 text-sm font-semibold",
          "border border-[rgba(200,245,96,0.25)] bg-[rgba(200,245,96,0.05)]",
          "text-[var(--obliq-lime)] opacity-80",
          "hover:opacity-100 hover:border-[rgba(200,245,96,0.5)] hover:bg-[rgba(200,245,96,0.1)]",
          "transition-all duration-200"
        )}
      >
        Contribute
        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
      </Link>
    </div>
  );
}

/* ── Placeholder data ── */

/**
 * IMPORTANT: Issue numbers #16, #27, and #32 are referenced in documentation.
 * Do NOT renumber these without updating all docs and GitHub issues.
 */
export const placeholderSections: PlaceholderSection[] = [
  {
    title:       "Features Section",
    description: "Showcase Obliq's core capabilities with icon cards, descriptions, and visual polish. See the design spec in docs/design-system.md.",
    issueNumber: 16,
    issueUrl:    "https://github.com/OBLIQ-in/OBLIQ-Website/issues/16",
  },
  {
    title:       "Benefits / Why Obliq Section",
    description: "Highlight the key benefits that differentiate Obliq from alternatives. Side-by-side layout with stats or comparison table.",
    issueNumber: 27,
    issueUrl:    "https://github.com/OBLIQ-in/OBLIQ-Website/issues/27",
  },
  {
    title:       "Integrations Section",
    description: "Show the ecosystem of tools that integrate with Obliq — logos, categories, and a searchable grid.",
    issueNumber: 32,
    issueUrl:    "https://github.com/OBLIQ-in/OBLIQ-Website/issues/32",
  },
  {
    title:       "Pricing Section",
    description: "Present the pricing tiers (Free, Pro, Enterprise) with feature comparison table. Data lives in src/lib/site.ts.",
    issueNumber: 33,
    issueUrl:    "https://github.com/OBLIQ-in/OBLIQ-Website/issues/33",
  },
  {
    title:       "Testimonials Section",
    description: "Social proof from real users — quote cards with avatar, name, role and company. Consider a carousel for mobile.",
    issueNumber: 34,
    issueUrl:    "https://github.com/OBLIQ-in/OBLIQ-Website/issues/34",
  },
  {
    title:       "Call-to-Action (CTA) Section",
    description: "Final conversion block before the footer. Strong headline, primary CTA button, and a secondary GitHub link.",
    issueNumber: 35,
    issueUrl:    "https://github.com/OBLIQ-in/OBLIQ-Website/issues/35",
  },
];
