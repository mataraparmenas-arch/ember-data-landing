"use client";

import { useState } from "react";
import { ArrowRight, BookOpen } from "lucide-react";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { highlightCode } from "@/lib/highlight";
import { DEV_TABS } from "@/lib/constants";
import { cn } from "@/lib/utils";

/**
 * Developer experience section. Tab list follows the ARIA tabs pattern:
 * each tab is a real button with aria-selected/aria-controls, panels are
 * labelled by their tab, and both snippets are static, illustrative
 * samples — no SDK is published and no endpoint is called.
 */
export function DeveloperExperience() {
  const [activeTab, setActiveTab] = useState<string>(DEV_TABS[0].id);
  const active = DEV_TABS.find((tab) => tab.id === activeTab) ?? DEV_TABS[0];

  return (
    <section id="developers" className="border-t border-line py-20 sm:py-24 lg:py-28">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow="Developer experience"
            title="From first request to production in minutes."
            lede="The workflow is intentionally short: read the guide, copy an example, and adapt it to your stack. The snippets below are static, illustrative samples — Ember Data is a concept and no SDK is published."
          />
        </Reveal>

        <Reveal className="mt-12" delay={100}>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:items-start">
            <div>
              <div role="tablist" aria-label="Example language" className="inline-flex rounded-lg border border-line-strong bg-surface p-1">
                {DEV_TABS.map((tab) => {
                  const selected = tab.id === activeTab;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      id={`tab-${tab.id}`}
                      aria-selected={selected}
                      aria-controls={`panel-${tab.id}`}
                      onClick={() => setActiveTab(tab.id)}
                      className={cn(
                        "rounded-md px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] transition-colors",
                        selected
                          ? "bg-ember text-[#140b08]"
                          : "text-mist hover:text-paper",
                      )}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              <div
                role="tabpanel"
                id={`panel-${active.id}`}
                aria-labelledby={`tab-${active.id}`}
                className="mt-5"
              >
                <CodeBlock
                  highlightedCode={highlightCode(active.code)}
                  copyLabel={`Copy the ${active.label} example to clipboard`}
                />
              </div>

              <p className="mt-4 text-xs leading-relaxed text-mist/80">
                Illustrative sample — not a functioning SDK call. No secrets are
                required or exposed, and no external endpoint is contacted.
              </p>
            </div>

            <aside className="card surface-glow p-6 sm:p-7">
              <h3 className="text-base font-semibold text-paper">The workflow, in short</h3>
              <ol className="mt-4 space-y-4">
                {[
                  "Read the architecture overview to understand the data flow.",
                  "Copy the example that matches your stack — client or contract.",
                  "Adapt the feed identifier and consumer to your application.",
                  "Ship with a payload shape that stays stable as the network grows.",
                ].map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="font-mono text-xs text-ember"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm leading-relaxed text-mist">{step}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-6 flex flex-col gap-3 border-t border-line pt-5">
                <a
                  href="/docs"
                  className="inline-flex items-center gap-2 text-sm font-medium text-paper transition-colors hover:text-ember"
                >
                  <BookOpen aria-hidden="true" className="h-4 w-4 text-ember" />
                  Read the documentation
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </a>
                <p className="text-xs text-mist/80">
                  The documentation space is a clearly marked placeholder while
                  this concept is being developed.
                </p>
              </div>
            </aside>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
