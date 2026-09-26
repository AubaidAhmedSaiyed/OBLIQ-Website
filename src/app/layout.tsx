import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/lib/site";

// Fonts are loaded via CSS @import in globals.css (Inter + Plus Jakarta Sans)
// This avoids Turbopack font module resolution issues in Next.js 15.5.x

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,

  keywords: [
    "Obliq",
    "open source",
    "developer tools",
    "platform",
    "MIT license",
    "web development",
    "open web",
  ],

  authors: [{ name: "Obliq", url: siteConfig.url }],
  creator: "Obliq",
  publisher: "Obliq",

  openGraph: {
    type:        "website",
    locale:      "en_US",
    url:         siteConfig.url,
    siteName:    siteConfig.name,
    title:       `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url:    siteConfig.ogImage,
        width:  1200,
        height: 630,
        alt:    `${siteConfig.name} — ${siteConfig.tagline}`,
      },
    ],
  },

  twitter: {
    card:        "summary_large_image",
    title:       `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images:      [siteConfig.ogImage],
    creator:     "@obliq_in",
    site:        "@obliq_in",
  },

  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:               true,
      follow:              true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet":       -1,
    },
  },

  icons: {
    icon:     "/favicon.ico",
    shortcut: "/favicon.ico",
    apple:    "/apple-touch-icon.png",
  },

  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
