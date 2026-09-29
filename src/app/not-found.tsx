import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center section">
      <div className="container-obliq flex flex-col items-center text-center animate-fade-up">
        
        {/* Typographic Token Illustration */}
        <div className="relative mb-12 select-none pointer-events-none animate-float inline-flex">
          <span
            className="font-black text-[var(--charcoal)] tracking-tighter inline-block"
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "clamp(6rem, 15vw, 12rem)",
              lineHeight: 1,
              border: "4px solid var(--charcoal)",
              padding: "10px 30px",
              borderRadius: "12px",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              boxShadow: "8px 8px 0px rgba(0,0,0,0.08)",
            }}
          >
            404
          </span>
          <div className="absolute -bottom-7 right-4 text-[var(--charcoal)] opacity-40 font-medium text-lg">
            .out_of_bounds
          </div>
        </div>

        <h1
          className="font-black leading-tight tracking-tight text-[var(--charcoal)] mb-4"
          style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
        >
          Wandered off the audit trail.
        </h1>
        
        <p className="max-w-md text-base sm:text-lg text-[var(--body-text)] mb-8 leading-relaxed">
          The page you are looking for doesn&apos;t exist, has been moved, or is hiding behind a compliance firewall. Let&apos;s get you back to safety.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-5">
          <Button href="/" variant="primary" size="lg">
            Back home
          </Button>
          <Button
            href="https://github.com/OBLIQ-in/OBLIQ-Website/issues"
            variant="outline"
            size="lg"
          >
            Check issues tab
          </Button>
        </div>
        
      </div>
    </div>
  );
}