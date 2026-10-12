import Link from "next/link";
import { SITE } from "@/lib/constants";

const PRODUCT_LINKS = [
  { label: "Product benefits", href: "/#product" },
  { label: "How it works", href: "/#architecture" },
  { label: "Capabilities", href: "/#solutions" },
  { label: "Data & metrics", href: "/#metrics" },
];

const DEVELOPER_LINKS = [
  { label: "Documentation (placeholder)", href: "/docs" },
  { label: "Integration example", href: "/#developers" },
  { label: "Architecture overview", href: "/#architecture" },
  { label: "Ecosystem", href: "/#resources" },
];

const COMPANY_LINKS = [
  { label: "Contact (placeholder)", href: "mailto:hello@emberdata.example" },
  { label: "Start building", href: "/#developers" },
  { label: "Back to top", href: "/#top" },
];

function LinkColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <nav aria-label={title}>
      <h3 className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-mist">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-mist transition-colors hover:text-paper"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface/60">
      <div className="container-site py-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Link
              href="#top"
              className="flex items-center gap-2.5 text-[0.95rem] font-semibold tracking-[0.12em] text-paper"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2 L22 12 L12 22 L2 12 Z" fill="none" stroke="#FF6B4A" strokeWidth="2" />
                <path d="M12 7.5 L16.5 12 L12 16.5 L7.5 12 Z" fill="#FF6B4A" />
              </svg>
              <span>
                EMBER&nbsp;<span className="text-ember">DATA</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-mist">{SITE.tagline}</p>
            <p className="mt-4 text-xs leading-relaxed text-mist/80">
              Ember Data is a fictional portfolio concept. Ecosystem brands,
              example metrics, and code samples shown on this site are
              illustrative — no real service, partnership, or production
              guarantee is implied.
            </p>
          </div>

          <LinkColumn title="Product" links={PRODUCT_LINKS} />
          <LinkColumn title="Developers" links={DEVELOPER_LINKS} />
          <LinkColumn title="Company" links={COMPANY_LINKS} />
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-mist">
            © 2026 Ember Data. Fictional portfolio concept — displayed figures are
            illustrative demo data.
          </p>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-mist/70">
            Built with Next.js · TypeScript · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
