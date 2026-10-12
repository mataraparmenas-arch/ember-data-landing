# Contributing to Ember Data

Ember Data is a fictional portfolio concept — a premium landing page for a
hypothetical blockchain data infrastructure platform. Contributions that improve
its design quality, accessibility, performance, or code clarity are welcome.

## Local setup

```bash
git clone <your-repository-url>
cd ember-data
npm install
npm run dev
```

Open http://localhost:3000. The landing page renders without any environment
variables. (The starter template's `/api/health` route needs `DATABASE_URL` —
copy `.env.example` to `.env` if you want to exercise it.)

## Code conventions

- **TypeScript strict mode** — avoid `any`; justify and document any exception.
- **Server Components by default** — add `"use client"` only for genuine
  interactivity (menu, tabs, copy button, payload demo, reveals).
- **Design tokens first** — use the Tailwind `@theme` tokens in
  `src/app/globals.css` (`ink`, `surface`, `paper`, `mist`, `ember`, `line`)
  instead of hard-coded colors.
- **Small, focused components** — one responsibility per file, colocated in
  `src/components/{layout,sections,ui}`.
- **Honest content** — fictional brands, illustrative metrics, and placeholder
  destinations must stay clearly labelled. Never fabricate production claims.
- **Accessibility** — semantic landmarks, visible focus states, ARIA only where
  it adds meaning, and `prefers-reduced-motion` support for all animation.

## Validation before submitting

```bash
npm run lint
npm run typecheck
npx next typegen
npm run build
```

All four must pass. Check the mobile layout (375px), tablet (768px), and
desktop (1440px) widths, and confirm the mobile menu and copy button work.

## Proposing changes

1. Open an issue describing the change and the motivation.
2. Fork the repository and create a feature branch
   (`feat/short-description`).
3. Keep commits small and descriptive; see the commit plan in the README.
4. Open a pull request against `main` with a summary of changes and
   validation results. Do not claim checks you did not actually run.
