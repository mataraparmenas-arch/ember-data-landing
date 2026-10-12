import { Blocks, Gauge, ShieldCheck, Terminal } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Reveal } from "@/components/ui/Reveal";

const CAPABILITIES = [
  {
    icon: Gauge,
    title: "Real-time price feeds",
    description:
      "Low-latency market data for major assets, normalized into one consistent schema — consumers never parse venue-specific formats.",
    micro: "ember.priceFeeds.get(\"ETH/USD\")",
  },
  {
    icon: ShieldCheck,
    title: "Validation & transparency",
    description:
      "Every value passes source-agreement and deviation checks before packaging, and payloads carry their provenance so you can inspect exactly what you consume.",
    micro: "Source + timestamp on every payload",
  },
  {
    icon: Blocks,
    title: "Cross-chain delivery",
    description:
      "One integration, many environments. The same validated feed is designed to reach contracts and applications across supported chains.",
    micro: "One schema · many networks",
  },
  {
    icon: Terminal,
    title: "Developer tooling & guides",
    description:
      "Reference documentation, copy-paste examples, and a predictable client surface — everything is shaped around a short path from first request to production.",
    micro: "Docs · examples · typed client",
  },
] as const;

export function Capabilities() {
  return (
    <section id="solutions" className="border-t border-line py-20 sm:py-24 lg:py-28">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow="Technical capabilities"
            title="Everything a data-dependent protocol needs."
            lede="Four capabilities, one integration surface. Each is designed to remove a specific class of work from your team's plate."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {CAPABILITIES.map((capability, index) => (
            <Reveal key={capability.title} delay={index * 80}>
              <FeatureCard
                className="h-full"
                visual={<capability.icon aria-hidden="true" className="h-5 w-5" />}
                title={capability.title}
                description={capability.description}
                micro={capability.micro}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
