import Link from "next/link";
import { GitFork, Share2, MessageCircle, Mail, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const socialIcons: Record<string, React.ReactNode> = {
  github:  <GitFork       className="h-4 w-4" aria-hidden="true" />,
  twitter: <Share2        className="h-4 w-4" aria-hidden="true" />,
  discord: <MessageCircle className="h-4 w-4" aria-hidden="true" />,
};

const socialLinks = [
  { label: "GitHub",  href: siteConfig.links.github,  icon: "github"  },
  { label: "Twitter", href: siteConfig.links.twitter,  icon: "twitter" },
  { label: "Discord", href: siteConfig.links.discord,  icon: "discord" },
];

/**
 * Footer — site-wide footer with:
 * - Obliq branding + tagline
 * - 4-column nav grid (Product · Company · Community · Legal)
 * - Social links
 * - Copyright
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative border-t border-[var(--obliq-border)]"
      aria-label="Site footer"
    >
      {/* Subtle top glow */}
      <div
        className="pointer-events-none absolute inset-x-0 -top-px h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(200,245,96,0.4), rgba(123,140,222,0.4), transparent)",
        }}
      />

      <Container>
        {/* ── Main footer grid ── */}
        <div className="py-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-6">
          {/* Brand column — 2 cols wide on lg */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group w-fit" aria-label="Obliq home">
              <div
                className={cn(
                  "h-8 w-8 rounded-lg flex items-center justify-center",
                  "bg-[var(--obliq-lime)] text-[var(--obliq-charcoal)]",
                  "font-display font-black text-base",
                  "group-hover:scale-110 transition-transform duration-200",
                  "shadow-[0_0_14px_rgba(200,245,96,0.3)]"
                )}
              >
                O
              </div>
              <span className="font-display font-bold text-xl text-[var(--obliq-cream)]">
                Obliq
              </span>
            </Link>

            {/* Tagline */}
            <p className="text-sm text-[var(--obliq-cream)] opacity-55 leading-relaxed max-w-[240px]">
              {siteConfig.description}
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow Obliq on ${s.label}`}
                  className={cn(
                    "flex items-center justify-center h-9 w-9 rounded-full",
                    "border border-[var(--obliq-border)] text-[var(--obliq-cream)] opacity-60",
                    "hover:opacity-100 hover:border-[var(--obliq-lime)] hover:text-[var(--obliq-lime)]",
                    "transition-all duration-200"
                  )}
                >
                  {socialIcons[s.icon]}
                </a>
              ))}
            </div>

            {/* Contact email */}
            <a
              href={`mailto:${siteConfig.email.support}`}
              className="flex items-center gap-2 text-sm text-[var(--obliq-cream)] opacity-50 hover:opacity-100 hover:text-[var(--obliq-lime)] transition-all duration-200 w-fit"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {siteConfig.email.support}
            </a>
          </div>

          {/* Nav columns — each 1 col wide on lg */}
          {(
            [
              ["Product",   siteConfig.footerNav.product],
              ["Company",   siteConfig.footerNav.company],
              ["Community", siteConfig.footerNav.community],
              ["Legal",     siteConfig.footerNav.legal],
            ] as const
          ).map(([title, links]) => (
            <div key={title} className="flex flex-col gap-4">
              <h3 className="text-xs font-semibold tracking-widest uppercase text-[var(--obliq-lime)] opacity-70">
                {title}
              </h3>
              <ul className="flex flex-col gap-3" role="list">
                {links.map((link) => {
                  const isExternal = link.href.startsWith("http");
                  return (
                    <li key={link.href}>
                      {isExternal ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-[var(--obliq-cream)] opacity-55 hover:opacity-100 hover:text-[var(--obliq-lime)] transition-all duration-200"
                        >
                          {link.label}
                          <ArrowUpRight className="h-3 w-3 opacity-60" aria-hidden="true" />
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm text-[var(--obliq-cream)] opacity-55 hover:opacity-100 hover:text-[var(--obliq-lime)] transition-all duration-200"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div className="divider" />
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--obliq-cream)] opacity-40 text-center sm:text-left">
            © {year} Obliq. Released under the MIT License.
          </p>
          <p className="text-xs text-[var(--obliq-cream)] opacity-35 text-center sm:text-right">
            Built with ❤️ by the Obliq community
          </p>
        </div>
      </Container>
    </footer>
  );
}
