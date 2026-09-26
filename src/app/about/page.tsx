import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { GitFork } from "lucide-react";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Obliq — the open source platform built for the open web.",
};

export default function AboutPage() {
  return (
    <div className="section pt-32">
      <Container narrow>
        <SectionHeading
          eyebrow="About"
          heading="Built in the open."
          subheading="Obliq is a community-driven open source project. We believe the best tools are built transparently, by people who use them every day."
          gradient
        />
        <div className="mt-12 flex flex-col gap-6 text-[var(--obliq-cream)] opacity-60 text-base leading-relaxed">
          <p>
            Obliq was born from a simple frustration: most developer platforms
            are closed, expensive, and slow to ship features their users actually
            want. We set out to build something different.
          </p>
          <p>
            Everything we build is open source under the MIT license. Our
            roadmap is public, our issues are open, and every decision is made
            in the community.
          </p>
          <p>
            Whether you&apos;re a solo developer, a startup team, or an enterprise
            engineering org, Obliq is designed to grow with you — without
            lock-in.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href={siteConfig.links.github} size="lg" variant="primary">
            <GitFork className="h-5 w-5" />
            View on GitHub
          </Button>
          <Button href="/contact" size="lg" variant="secondary">
            Get in touch
          </Button>
        </div>
      </Container>
    </div>
  );
}
