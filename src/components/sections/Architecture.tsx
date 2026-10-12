import { Fragment } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PayloadDemo } from "./PayloadDemo";

const STEPS = [
  {
    number: "01",
    title: "Data sources",
    description:
      "External market data and other authorized sources — exchanges, licensed APIs, and on-chain events — feed raw observations into the pipeline.",
  },
  {
    number: "02",
    title: "Ember Data layer",
    description:
      "Collection, normalization, validation, and data packaging. Every value is checked for source agreement and deviation before it leaves the layer.",
  },
  {
    number: "03",
    title: "Onchain applications",
    description:
      "Smart contracts, DeFi protocols, dashboards, and decentralized applications consume the same validated payload through a single interface.",
  },
] as const;

/** Animated connector between steps: horizontal on desktop, vertical on mobile. */
function Connector() {
  return (
    <div aria-hidden="true" className="flex justify-center py-1 lg:block lg:self-center lg:py-0">
      {/* Mobile: vertical flow */}
      <div className="relative h-10 w-px bg-line-strong lg:hidden">
        <span
          className="flow-dot absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-ember"
          style={{ animation: "flow-y 2.2s linear infinite" }}
        />
      </div>
      {/* Desktop: horizontal flow */}
      <div className="relative hidden h-px w-14 self-center bg-line-strong lg:block">
        <span
          className="flow-dot absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-ember"
          style={{ animation: "flow-x 2.2s linear infinite" }}
        />
        <span
          className="flow-dot absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-ember"
          style={{ animation: "flow-x 2.2s linear infinite 1.1s" }}
        />
      </div>
    </div>
  );
}

export function Architecture() {
  return (
    <section id="architecture" className="border-t border-line py-20 sm:py-24 lg:py-28">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title="One connected flow, from source to contract."
            lede="Ember Data sits between the world's data and the applications that depend on it. Three stages keep that flow predictable, inspectable, and boring — in the best possible way."
          />
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-stretch">
          {STEPS.map((step, index) => (
            <Fragment key={step.number}>
              <Reveal delay={index * 100}>
                <article className="card surface-glow h-full p-6 sm:p-7">
                  <span className="font-mono text-2xl font-semibold text-ember">
                    {step.number}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-paper">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-mist">
                    {step.description}
                  </p>
                </article>
              </Reveal>
              {index < STEPS.length - 1 ? <Connector /> : null}
            </Fragment>
          ))}
        </div>

        <Reveal className="mt-10" delay={120}>
          <PayloadDemo />
        </Reveal>
      </div>
    </section>
  );
}
