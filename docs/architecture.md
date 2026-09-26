# Architecture

Technical overview of the Obliq website codebase.

---

## Technology Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js | 15.x |
| Router | App Router | — |
| Language | TypeScript | Strict mode |
| Styling | Tailwind CSS | v4 |
| Icons | Lucide React | latest |
| Animation | GSAP + CSS | — |
| Class utils | CVA + clsx + tailwind-merge | — |

---

## Routing

Next.js App Router — all routes are in `src/app/`.

```
/           → src/app/page.tsx
/about      → src/app/about/page.tsx
/features   → src/app/features/page.tsx
/pricing    → src/app/pricing/page.tsx
/blog       → src/app/blog/page.tsx
/contact    → src/app/contact/page.tsx
```

---

## Data Flow

All static configuration lives in `src/lib/site.ts`:

```
siteConfig
├── name, tagline, description
├── url                  ← canonical domain — change here only
├── ogImage
├── links (github, twitter, discord)
├── email
├── nav[]                ← Navbar links
└── footerNav{}          ← Footer column links
```

---

## SEO

Metadata is configured in `src/app/layout.tsx` using Next.js 15's `Metadata` API.

- `metadataBase` is set from `siteConfig.url`
- Title template: `%s | Obliq`
- OG and Twitter card images: `siteConfig.ogImage`
- Each page exports its own `metadata` object for page-specific overrides

---

## Component Hierarchy

```
RootLayout (layout.tsx)
├── <Navbar>
├── <main> (page content)
│   └── HomePage (page.tsx)
│       ├── <Hero>
│       └── <SectionPlaceholder> ×6
└── <Footer>
```

---

## Blog (not yet implemented — issue #36)

Recommended approach:

1. Use MDX (`@next/mdx` or `contentlayer`)
2. Store posts in `src/content/blog/*.mdx`
3. Generate routes via `generateStaticParams`
4. Expose types via `src/types/index.ts` (`BlogPost`, `Author`)

---

## Contact Form (not yet implemented — issue #37)

Recommended approach:

1. Use [Resend](https://resend.com) or [Formspree](https://formspree.io)
2. Create a Server Action in `src/app/contact/actions.ts`
3. Validate with [Zod](https://zod.dev)
4. Rate-limit with Upstash or similar

---

## CI/CD

GitHub Actions workflow at `.github/workflows/ci.yml`:

- Triggers on: PR to `main`
- Jobs: `lint` → `build`
- `main` branch protection requires CI to pass

---

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SITE_URL` | Override canonical URL | No |

---

## Performance

- All fonts loaded via `next/font/google` (no layout shift)
- Images should use `next/image`
- Animations use CSS keyframes where possible; GSAP for complex sequences
- No JavaScript hydration for purely static sections (Server Components)
