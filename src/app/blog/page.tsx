import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionPlaceholder } from "@/components/sections/placeholder";
import type { PlaceholderSection } from "@/types";

export const metadata: Metadata = {
  title: "Blog",
  description: "Latest articles, tutorials, and updates from the Obliq team and community.",
};

const blogPlaceholder: PlaceholderSection = {
  title:       "Blog — Article Listing",
  description: "A MDX-powered blog with article cards, tags, and author information. See architecture.md for the recommended approach.",
  issueNumber: 36,
  issueUrl:    "https://github.com/OBLIQ-in/OBLIQ-Website/issues/36",
};

export default function BlogPage() {
  return (
    <div className="section pt-32">
      <Container>
        <SectionHeading
          eyebrow="Blog"
          heading="From the community."
          subheading="Tutorials, updates, and open source stories from the Obliq team and contributors."
          gradient
        />
        <div className="mt-12">
          <SectionPlaceholder section={blogPlaceholder} />
        </div>
      </Container>
    </div>
  );
}
