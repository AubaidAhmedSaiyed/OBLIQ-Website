"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, GitFork, ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

/**
 * Navbar — primary site navigation.
 *
 * Features:
 * - Transparent → glass scroll transition
 * - Active link highlighting
 * - Mobile hamburger menu with animated overlay
 * - GitHub star CTA
 * - Keyboard accessible
 */
export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  /* ── Scroll detection ── */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── Close mobile menu on route change ── */
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  /* ── Lock body scroll when mobile menu is open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50",
          "transition-all duration-300",
          scrolled
            ? "glass border-b border-[var(--obliq-border)] py-3"
            : "bg-transparent py-5"
        )}
      >
        <Container>
          <nav
            className="flex items-center justify-between"
            aria-label="Main navigation"
          >
            {/* ── Logo ── */}
            <Link
              href="/"
              className="flex items-center gap-2 group"
              aria-label="Obliq home"
            >
              {/* Logo mark */}
              <div
                className={cn(
                  "h-8 w-8 rounded-lg flex items-center justify-center",
                  "bg-[var(--obliq-lime)] text-[var(--obliq-charcoal)]",
                  "font-display font-black text-base",
                  "group-hover:scale-110 transition-transform duration-200",
                  "shadow-[0_0_16px_rgba(200,245,96,0.35)]"
                )}
              >
                O
              </div>
              <span className="font-display font-bold text-xl text-[var(--obliq-cream)] group-hover:text-[var(--obliq-lime)] transition-colors duration-200">
                Obliq
              </span>
            </Link>

            {/* ── Desktop nav links ── */}
            <ul className="hidden md:flex items-center gap-1" role="list">
              {siteConfig.nav.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "px-4 py-2 rounded-full text-sm font-medium",
                        "transition-all duration-200",
                        active
                          ? "bg-[rgba(200,245,96,0.12)] text-[var(--obliq-lime)]"
                          : "text-[var(--obliq-cream)] opacity-70 hover:opacity-100 hover:bg-[rgba(255,255,255,0.06)]"
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* ── Desktop CTA ── */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full",
                  "text-sm font-medium text-[var(--obliq-cream)] opacity-70",
                  "hover:opacity-100 hover:bg-[rgba(255,255,255,0.06)]",
                  "transition-all duration-200"
                )}
                aria-label="View Obliq on GitHub"
              >
                <GitFork className="h-4 w-4" aria-hidden="true" />
                GitHub
              </Link>
              <Button href="/contact" size="md" variant="primary">
                Get started
              </Button>
            </div>

            {/* ── Mobile menu toggle ── */}
            <button
              id="mobile-menu-toggle"
              className={cn(
                "md:hidden flex items-center justify-center",
                "h-10 w-10 rounded-full",
                "text-[var(--obliq-cream)] hover:bg-[rgba(255,255,255,0.08)]",
                "transition-all duration-200"
              )}
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen
                ? <X className="h-5 w-5" aria-hidden="true" />
                : <Menu className="h-5 w-5" aria-hidden="true" />
              }
            </button>
          </nav>
        </Container>
      </header>

      {/* ── Mobile menu overlay ── */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={cn(
          "fixed inset-0 z-40 md:hidden",
          "flex flex-col",
          "bg-[var(--obliq-charcoal)]",
          "transition-all duration-300 ease-in-out",
          menuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        )}
      >
        {/* Spacer for the fixed header */}
        <div className="h-[72px] flex-shrink-0" />

        <div className="flex-1 overflow-y-auto px-4 py-8">
          {/* Nav links */}
          <ul className="flex flex-col gap-2" role="list">
            {siteConfig.nav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center px-5 py-4 rounded-xl",
                      "text-lg font-semibold",
                      "transition-all duration-200",
                      active
                        ? "bg-[rgba(200,245,96,0.12)] text-[var(--obliq-lime)]"
                        : "text-[var(--obliq-cream)] hover:bg-[rgba(255,255,255,0.06)]"
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Divider */}
          <div className="divider my-6" />

          {/* CTA buttons */}
          <div className="flex flex-col gap-3">
            <Button href="/contact" size="lg" variant="primary" className="w-full">
              Get started
            </Button>
            <Button
              href={siteConfig.links.github}
              size="lg"
              variant="secondary"
              className="w-full"
            >
              <GitFork className="h-5 w-5" aria-hidden="true" />
              View on GitHub
              <ExternalLink className="h-4 w-4 opacity-60" aria-hidden="true" />
            </Button>
          </div>
        </div>

        {/* Bottom social links */}
        <div className="px-6 py-6 border-t border-[var(--obliq-border)]">
          <p className="text-xs text-[var(--obliq-cream)] opacity-40 text-center">
            © {new Date().getFullYear()} Obliq. Open source.
          </p>
        </div>
      </div>
    </>
  );
}
