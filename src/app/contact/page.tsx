import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionPlaceholder } from "@/components/sections/placeholder";
import type { PlaceholderSection } from "@/types";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Obliq team. We'd love to hear from you.",
};

const contactPlaceholder: PlaceholderSection = {
  title:       "Contact Form",
  description: "A contact form with name, email, and message fields. Should use a form handler (e.g. Resend or Formspree) — see docs/architecture.md.",
  issueNumber: 37,
  issueUrl:    "https://github.com/OBLIQ-in/OBLIQ-Website/issues/37",
};

export default function ContactPage() {
  return (
    <div className="section pt-32">
      <Container narrow>
        <SectionHeading
          eyebrow="Contact"
          heading="Let's talk."
          subheading="Have a question, idea, or want to contribute? We'd love to hear from you."

        />
        <div className="mt-12">
          <SectionPlaceholder section={contactPlaceholder} />
        </div>
      </Container>
    </div>
  );
}
