import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Construction } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Documentation (placeholder)",
  description:
    "The Ember Data documentation space is a clearly marked placeholder. Ember Data is a fictional portfolio concept; no documentation service exists yet.",
  robots: { index: false, follow: false },
};

const RESOURCES = [
  {
    title: "Architecture overview",
    description: "How data flows from external sources through the Ember layer to onchain applications.",
    href: "/#architecture",
  },
  {
    title: "Technical capabilities",
    description: "Price feeds, validation, cross-chain delivery patterns, and developer tooling.",
    href: "/#solutions",
  },
  {
    title: "Integration examples",
    description: "Copyable TypeScript and Solidity samples with a working copy-to-clipboard action.",
    href: "/#developers",
  },
] as const;

export default function DocsPage() {
  return (
    <div className="container-site py-16 sm:py-20 lg:py-24">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-mist transition-colors hover:text-paper"
      >
        <ArrowLeft aria-hidden="true" className="h-4 w-4" />
        Back to the landing page
      </Link>

      <div className="mt-8 max-w-2xl">
        <p className="eyebrow">Developers</p>
        <h1 className="mt-4 text-[clamp(1.9rem,3.6vw,2.85rem)] font-semibold leading-[1.08] tracking-[-0.015em] text-paper">
          Documentation
        </h1>
        <div className="card mt-8 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <span
              aria-hidden="true"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-line-strong bg-surface-2 text-ember"
            >
              <Construction className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-lg font-semibold text-paper">
                This documentation space is a placeholder
              </h2>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-mist">
                Ember Data is a fictional portfolio concept, so no documentation
                service exists yet. Rather than pretend otherwise, this page
                points to the useful material that does exist on the landing page.
              </p>
            </div>
          </div>
        </div>

        <h2 className="mt-12 font-mono text-[0.66rem] uppercase tracking-[0.2em] text-mist">
          Available on this site
        </h2>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {RESOURCES.map((resource) => (
            <li key={resource.href}>
              <Link
                href={resource.href}
                className="card surface-glow group block h-full p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(255,107,74,0.42)]"
              >
                <span className="flex items-center justify-between gap-2">
                  <span className="font-semibold text-paper">{resource.title}</span>
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 text-mist transition-colors group-hover:text-ember"
                  />
                </span>
                <span className="mt-2 block text-sm leading-relaxed text-mist">
                  {resource.description}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/" variant="ghost" size="sm">
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            Landing page
          </Button>
          <Button href="/#developers" size="sm">
            Start building
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
