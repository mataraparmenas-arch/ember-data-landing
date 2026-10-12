import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DataFlowGraphic } from "@/components/ui/DataFlowGraphic";

const FEED_ROWS = [
  { pair: "ETH/USD", value: "2,500.00" },
  { pair: "BTC/USD", value: "67,412.18" },
  { pair: "SOL/USD", value: "148.22" },
] as const;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-14 sm:pb-20 sm:pt-20 lg:pb-28 lg:pt-24">
      {/* Restrained radial glow behind the visual column */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-10 h-[560px] w-[560px] rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(255,107,74,0.12), transparent 65%)" }}
      />

      <div className="container-site relative grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] lg:gap-14">
        <div>
          <p className="eyebrow flex items-center gap-3">
            <span aria-hidden="true" className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-ember" />
            Real-time data infrastructure
          </p>
          <h1 className="mt-5 text-[clamp(2.6rem,5.6vw,4.5rem)] font-semibold leading-[1.04] tracking-[-0.025em] text-paper">
            Data you can build <span className="text-ember">trust</span> on.
          </h1>
          <p className="mt-6 max-w-xl text-[1.08rem] leading-relaxed text-mist">
            Power your protocols with real-time market data and verified
            cross-chain intelligence, engineered for developers building onchain.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button href="#developers">
              Start building
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Button>
            <Button href="#architecture" variant="ghost">
              Explore the architecture
            </Button>
          </div>

          <p className="mt-10 border-t border-line pt-5 font-mono text-[0.66rem] uppercase tracking-[0.22em] text-mist">
            Built for developers. Designed for onchain markets.
          </p>
        </div>

        <div className="relative">
          <div className="card overflow-hidden bg-surface p-2 sm:p-3">
            <DataFlowGraphic />
          </div>

          {/* Compact network-status panel — illustrative values */}
          <div className="mt-4 w-full rounded-lg border border-line-strong bg-ink/90 p-3.5 shadow-[0_18px_50px_-20px_rgba(0,0,0,0.8)] backdrop-blur sm:absolute sm:bottom-6 sm:left-6 sm:mt-0 sm:w-64">
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-mist">
                Network status
              </span>
              <span className="rounded border border-ember/40 px-1.5 py-0.5 font-mono text-[0.56rem] uppercase tracking-[0.18em] text-ember">
                Demo
              </span>
            </div>
            <dl className="mt-3 space-y-1.5">
              {FEED_ROWS.map((row) => (
                <div key={row.pair} className="flex items-center justify-between font-mono text-[0.78rem]">
                  <dt className="tracking-[0.08em] text-mist">{row.pair}</dt>
                  <dd className="tabular-nums text-paper">${row.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 border-t border-line pt-2 font-mono text-[0.56rem] uppercase tracking-[0.18em] text-mist/70">
              Illustrative demo data
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
