# Ember Data

> **A fictional portfolio concept.** Ember Data is a design and frontend-engineering portfolio project — a premium landing page for a hypothetical blockchain data infrastructure platform. It is **not** an official product, not affiliated with any real company, and no live service exists. All ecosystem brands, metrics, and code samples are illustrative.

**Ember Data** delivers a dark, editorial, developer-first landing page for a concept platform that provides real-time price feeds, verified external data, and cross-chain data services to decentralized applications.

### Screenshot

> 📷 **Screenshot placeholder** — capture a full-page screenshot of `http://localhost:3000` (desktop ~1440px and mobile ~375px) after running the dev server, and save it as `public/images/screenshot.png`. A published screenshot does not exist yet.

---

## Key features

- **Complete landing-page narrative** — hero, product benefits, architecture walkthrough, technical capabilities, illustrative metrics, developer experience, ecosystem strip, final CTA, and footer.
- **Original data-flow illustration** — a hand-built inline SVG hero diagram (sources → Ember layer → onchain consumers) with animated pulses, plus a connected three-step architecture diagram with travelling dots.
- **Live illustrative payload demo** — a JSON sample whose timestamp reads the visitor's local clock and whose price drifts gently, clearly labelled as illustrative demo data.
- **Working developer-experience section** — TypeScript/Solidity tabs (ARIA tabs pattern) with a syntax-styled code panel and a **genuine copy-to-clipboard button** (Clipboard API with fallback, success/failure feedback via `aria-live`).
- **Accessible responsive navigation** — sticky header, disclosure-style mobile menu with `aria-expanded`/`aria-controls`, Escape-to-close, closes on link selection and on breakpoint change.
- **Honest by design** — fictional brands, illustrative metrics, and placeholder documentation are explicitly labelled in the UI; no fabricated uptime, adoption, or security claims.

## Tech stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19, TypeScript (strict) |
| Styling | Tailwind CSS 4 (CSS-first design tokens in `globals.css`) |
| Icons | Lucide React |
| Fonts | Geist Sans & Geist Mono (self-hosted via the `geist` package) |
| Animation | CSS transitions, SMIL (`animateMotion`), IntersectionObserver reveals — all reduced-motion aware |
| Lint/format | ESLint 9 (`eslint-config-next`) |
| Database (template) | PostgreSQL via Drizzle ORM — **not used by the landing page**; kept from the starter template for the `/api/health` route |

No runtime environment variables or API keys are required to render the landing page.

## Design philosophy

- **Token-driven.** All colors, fonts, and radii are defined once as Tailwind CSS 4 `@theme` tokens: near-black charcoal `#0B0D10`, surface `#12161B`, warm white `#F5F5F0`, muted gray `#A0A7B2`, and a single luminous coral-orange accent `#FF6B4A`.
- **Restrained and technical.** A faint masked grid, hairline borders, radial glows used sparingly, and monospace reserved for technical labels, metrics, and code.
- **Motion with manners.** Pulses communicate data flow; scroll reveals are subtle; everything respects `prefers-reduced-motion`, and no essential information depends on animation.
- **Honest content.** Illustrative figures, fictional brands, and placeholder docs are labelled in place, so the page never overclaims.

## Project structure

```
src/
  app/
    layout.tsx          # Metadata, fonts, skip link, Navbar + Footer shell
    page.tsx            # Composes all landing-page sections (fully static)
    globals.css         # Design tokens, base styles, keyframes, code tokens
    icon.svg            # Original ember mark (favicon)
    robots.ts           # Robots policy (no fabricated canonical/sitemap)
    docs/page.tsx       # Clearly marked documentation placeholder page
    api/health/route.ts # Starter-template health route (uses Drizzle/Postgres)
  components/
    layout/             # Navbar (client), Footer
    sections/           # Hero, Benefits, Architecture, Capabilities,
                        # Metrics, DeveloperExperience, Ecosystem, FinalCTA
                        # PayloadDemo (client, illustrative live payload)
    ui/                 # Button, SectionHeading, FeatureCard, CodeBlock,
                        # DataFlowGraphic, Reveal
  lib/
    constants.ts        # Nav links, snippets, ecosystem names, labels
    highlight.ts        # Dependency-free syntax highlighting for static samples
    utils.ts            # cn() class-merge helper
  db/                   # Drizzle client + empty schema (starter template)
```

## Prerequisites

- Node.js 20.9+ (developed on Node 22)
- npm 10+

## Installation

```bash
git clone <your-repository-url>
cd ember-data
npm install
```

## Development commands

```bash
npm run dev        # Start the dev server at http://localhost:3000
npm run lint       # ESLint
npm run typecheck  # TypeScript (tsc --noEmit)
npm run build      # Production build
npm run start      # Serve the production build locally
npx next typegen   # Generate route types
```

## Production build & validation

```bash
npx next typegen                 # Route types
npm run lint                     # Lint
npm run typecheck                # Strict TypeScript
npm run build                    # Production build (both pages are static)
```

The landing page (`/`) and documentation placeholder (`/docs`) prerender as static content; no database or environment variable is needed to render them. The starter template's `/api/health` route expects `DATABASE_URL` (see `.env.example`) — it is the only route that touches Postgres.

## Deployment (Vercel checklist)

1. Push the repository to GitHub.
2. Import the project in Vercel (framework preset: **Next.js**).
3. No environment variables are required for the landing page. If you keep `/api/health`, add `DATABASE_URL` pointing at a Postgres instance.
4. Optional: set a custom domain, then add it to `robots.ts`/metadata as the canonical base and generate a sitemap.
5. Deploy, then verify:
   - `/` renders all sections without console errors.
   - `/docs` renders the placeholder page.
   - `/api/health` returns `{ "ok": true }` (only when `DATABASE_URL` is configured).
   - Mobile menu, copy button, and anchor navigation behave correctly.
6. Capture screenshots for the README placeholder above.

## Accessibility & performance considerations

- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`), logical heading hierarchy, and a skip-to-content link.
- Visible `:focus-visible` outlines; keyboard-operable menu, tabs, and copy button with correct ARIA states.
- `prefers-reduced-motion` disables smooth scrolling, pulses, reveals, and transitions; animated elements are decorative duplicates of static information.
- Contrast-checked palette (warm white on charcoal; coral accent used at large sizes or with dark text).
- Server Components by default; Client Components only for the menu, tabs, copy button, payload demo, and reveals.
- Self-hosted fonts, inline SVG artwork, no remote images, no third-party scripts, fully static landing page.

## Limitations & fictional-product disclaimer

- Ember Data is a **fictional portfolio concept**. It is not affiliated with any real company or product.
- Ecosystem names (Northstar Protocol, Meridian Labs, Orbit Finance, Lattice Network, Nova Markets) are **fictional**; no partnerships are implied.
- All metrics, feeds, and payloads are **illustrative demo data**; no uptime, coverage, volume, TVL, security-audit, or adoption claims are made.
- The code samples are **static illustrations** — no SDK is published and no endpoint is contacted.
- The documentation route is a **clearly marked placeholder**.
- No social accounts, legal pages, or security claims are fabricated.

## Responsible AI assistance

AI assistance (a large language model) was used to accelerate implementation: scaffolding components, drafting copy, building the SVG illustrations, and reviewing accessibility and code quality. All generated output was reviewed, edited, and validated by a human — package APIs were checked against installed versions, and lint, type-check, and production-build results were actually run (see validation notes in commit history). No secrets were inserted, no performance or test results were fabricated, and original design decisions (palette, typography, layout, honest-labelling strategy) were made deliberately and are documented above. Feel free to edit this section to reflect your own workflow.

## Suggested GitHub repository metadata

- **Description:** "Ember Data — a fictional blockchain data infrastructure landing page. Premium dark, developer-first frontend portfolio built with Next.js, TypeScript, and Tailwind CSS."
- **Topics:** `nextjs` · `react` · `typescript` · `tailwindcss` · `landing-page` · `web3` · `oracle` · `developer-tools` · `portfolio` · `framer-motion-free` · `accessibility`

## Commit plan

1. `chore: initialize Next.js + Tailwind + Drizzle starter` (existing template state)
2. `feat: add Ember Data design tokens and global styles`
3. `feat: build site shell with accessible navbar, footer, and metadata`
4. `feat: implement hero with original SVG data-flow illustration`
5. `feat: add benefits, architecture, and capabilities sections`
6. `feat: add illustrative metrics, developer experience with copyable code, ecosystem, and final CTA`
7. `feat: add documentation placeholder page, robots, and favicon`
8. `docs: add README, LICENSE, CONTRIBUTING, and env/gitignore files`
9. `chore: validate lint, typecheck, and production build`

## License

[MIT](LICENSE) © 2026 Ember Data Portfolio Contributors
