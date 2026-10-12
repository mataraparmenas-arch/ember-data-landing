import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ECOSYSTEM, ECOSYSTEM_LABEL, type EcosystemMark } from "@/lib/constants";

/** Original geometric glyphs for the fictional ecosystem wordmarks. */
function EcosystemGlyph({ mark }: { mark: EcosystemMark }) {
  const stroke = "currentColor";
  switch (mark) {
    case "northstar":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );
    case "meridian":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="8" stroke={stroke} strokeWidth="1.5" />
          <path d="M12 4 V20" stroke={stroke} strokeWidth="1.5" />
        </svg>
      );
    case "orbit":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="3" fill={stroke} />
          <ellipse cx="12" cy="12" rx="9.5" ry="4.5" stroke={stroke} strokeWidth="1.5" transform="rotate(-24 12 12)" />
        </svg>
      );
    case "lattice":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3.5" y="3.5" width="7" height="7" stroke={stroke} strokeWidth="1.5" />
          <rect x="13.5" y="3.5" width="7" height="7" stroke={stroke} strokeWidth="1.5" />
          <rect x="3.5" y="13.5" width="7" height="7" stroke={stroke} strokeWidth="1.5" />
          <rect x="13.5" y="13.5" width="7" height="7" fill={stroke} />
        </svg>
      );
    case "nova":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="2.5" fill={stroke} />
          <path d="M12 2 V7 M12 17 V22 M2 12 H7 M17 12 H22 M5 5 L8.5 8.5 M15.5 15.5 L19 19 M19 5 L15.5 8.5 M8.5 15.5 L5 19" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
  }
}

const RESOURCES = [
  { label: "Documentation (placeholder)", href: "/docs" },
  { label: "Architecture overview", href: "/#architecture" },
  { label: "Integration examples", href: "/#developers" },
] as const;

export function Ecosystem() {
  return (
    <section id="resources" className="border-t border-line py-20 sm:py-24 lg:py-28">
      <div className="container-site">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Ecosystem & resources"
              title="Built alongside teams across the ecosystem."
              lede="A look at the kind of protocols and builders the platform is designed to serve. Every name below is fictional."
            />
            <span className="tag shrink-0 self-start sm:self-auto">{ECOSYSTEM_LABEL}</span>
          </div>
        </Reveal>

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {ECOSYSTEM.map((partner, index) => (
            <Reveal key={partner.name} delay={index * 70}>
              <li className="card flex h-24 items-center justify-center gap-2.5 px-4 text-mist transition-colors duration-200 hover:border-line-strong hover:text-paper">
                <EcosystemGlyph mark={partner.mark} />
                <span className="text-[0.98rem] font-semibold tracking-tight">
                  {partner.name}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-8">
            <span className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-mist">
              Resources
            </span>
            {RESOURCES.map((resource) => (
              <Link
                key={resource.href}
                href={resource.href}
                className="inline-flex items-center gap-1.5 text-sm text-mist transition-colors hover:text-ember"
              >
                {resource.label}
                <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
