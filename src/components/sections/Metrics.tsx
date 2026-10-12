import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ILLUSTRATIVE_LABEL } from "@/lib/constants";

const STATS = [
  {
    value: "24/7",
    label: "Continuous data access",
    description: "The architecture is designed for always-on delivery, not batch windows.",
  },
  {
    value: "3",
    label: "Architecture stages",
    description: "Sources, the Ember layer, and onchain consumers — one connected flow.",
  },
  {
    value: "Multi-chain",
    label: "Delivery design goal",
    description: "A single schema intended to travel across supported networks.",
  },
  {
    value: "API-first",
    label: "Integration approach",
    description: "Everything is shaped around programmatic access for developers.",
  },
] as const;

export function Metrics() {
  return (
    <section id="metrics" className="relative overflow-hidden border-y border-line bg-surface/50 py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-40"
        style={{ background: "radial-gradient(60% 100% at 50% 0%, rgba(255,107,74,0.07), transparent 70%)" }}
      />
      <div className="container-site relative">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Data & statistics"
              title="Designed for always-on, developer-shaped delivery."
              lede="A quick look at the posture of the platform. These are positioning and design examples for a fictional concept — not measured production metrics."
            />
            <span className="tag shrink-0 self-start sm:self-auto">{ILLUSTRATIVE_LABEL}</span>
          </div>
        </Reveal>

        <dl className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 80}>
              <div className="border-t border-line-strong pt-6">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-[clamp(2.2rem,4vw,3.2rem)] font-semibold leading-none tracking-[-0.02em] text-paper">
                  {stat.value}
                </dd>
                <dd className="mt-3 font-mono text-[0.66rem] uppercase tracking-[0.2em] text-ember">
                  {stat.label}
                </dd>
                <dd className="mt-2 text-sm leading-relaxed text-mist">{stat.description}</dd>
              </div>
            </Reveal>
          ))}
        </dl>

        <p className="mt-12 text-xs text-mist/80">
          Figures on this page are illustrative demo data for a fictional product
          concept. No uptime, coverage, volume, or adoption statistics are claimed.
        </p>
      </div>
    </section>
  );
}
