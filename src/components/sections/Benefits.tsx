import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Reveal } from "@/components/ui/Reveal";

/** Original geometric marks — layered signals, brackets, linked chains. */
function ReliableMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <rect x="9" y="9" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="15" cy="15" r="2.4" fill="currentColor" />
    </svg>
  );
}

function DeveloperMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 5 L3 12 L8 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 5 L21 12 L16 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.5 4 L10.5 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function MultiChainMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="5.5" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="18.5" cy="5.5" r="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="18.5" cy="18.5" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8.2 10.6 L15.8 6.9 M8.2 13.4 L15.8 17.1" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

const BENEFITS = [
  {
    visual: <ReliableMark />,
    title: "Reliable data delivery",
    description:
      "Feeds are aggregated across independent sources and validated at every stage of the pipeline, so your application reads from one dependable interface instead of reconciling conflicting vendors.",
    micro: "Aggregation · validation · single access point",
  },
  {
    visual: <DeveloperMark />,
    title: "Developer-first integration",
    description:
      "Predictable interfaces, consistent payload shapes, and practical documentation. The path from first request to production code is measured in minutes, not weeks.",
    micro: "Typed payloads · copy-paste examples",
  },
  {
    visual: <MultiChainMark />,
    title: "Multi-chain flexibility",
    description:
      "Design your integration once and consume the same validated feeds across supported blockchain environments — a product concept for teams deploying to multiple networks.",
    micro: "One schema · many environments",
  },
] as const;

export function Benefits() {
  return (
    <section id="product" className="border-t border-line py-20 sm:py-24 lg:py-28">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow="Why Ember Data"
            title="Infrastructure that earns its place in your stack."
            lede="Three principles shape every part of the platform — from how data is collected to how it reaches your contracts. No unverified production guarantees are implied; these are design commitments for a concept."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit, index) => (
            <Reveal key={benefit.title} delay={index * 90}>
              <FeatureCard
                className="h-full"
                visual={benefit.visual}
                title={benefit.title}
                description={benefit.description}
                micro={benefit.micro}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
