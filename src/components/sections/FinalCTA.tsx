import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA() {
  return (
    <section id="start" className="relative overflow-hidden border-t border-line py-24 sm:py-28 lg:py-32">
      {/* Restrained accent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(255,107,74,0.13), transparent 62%)" }}
      />
      {/* Original data-flow motif */}
      <svg
        aria-hidden="true"
        viewBox="0 0 720 120"
        className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-24 w-full max-w-3xl opacity-60"
      >
        <path d="M0 60 H 250" stroke="#23282F" strokeWidth="1.5" fill="none" />
        <path d="M470 60 H 720" stroke="#23282F" strokeWidth="1.5" fill="none" />
        <path d="M250 60 C 300 60, 300 20, 330 20 L 390 20 C 420 20, 420 60, 470 60" stroke="#23282F" strokeWidth="1.5" fill="none" />
        <path d="M250 60 C 300 60, 300 100, 330 100 L 390 100 C 420 100, 420 60, 470 60" stroke="#23282F" strokeWidth="1.5" fill="none" />
        <circle cx="360" cy="20" r="3" fill="#FF6B4A" />
        <circle cx="360" cy="100" r="3" fill="#FF6B4A" />
        <circle cx="360" cy="60" r="5" fill="none" stroke="#FF6B4A" strokeWidth="1.5" />
        <circle cx="360" cy="60" r="2" fill="#FF6B4A" />
      </svg>

      <div className="container-site relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Get started</p>
          <h2 className="mt-4 text-[clamp(2.1rem,4.4vw,3.4rem)] font-semibold leading-[1.06] tracking-[-0.02em] text-paper">
            Build your next protocol on better data.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[1.05rem] leading-relaxed text-mist">
            Explore the architecture, experiment with the examples, and shape your
            next onchain application.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button href="#developers">
              Start building
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Button>
            <Button href="/docs" variant="ghost">
              <BookOpen aria-hidden="true" className="h-4 w-4" />
              Read the docs
            </Button>
          </div>
          <p className="mt-8 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-mist/70">
            Fictional concept — explore the architecture and examples on this page
          </p>
        </Reveal>
      </div>
    </section>
  );
}
