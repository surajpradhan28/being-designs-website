# Being Designs — Website

A single-page marketing site for Being Designs, a creative studio offering
branding, video, and photography services. Built with React + TypeScript +
Vite + Tailwind CSS v4, with Framer Motion for animation.

## Getting started

```bash
npm install
npm run dev          # start the dev server (http://localhost:5173)
npm run build        # type-check and produce a production build in dist/
npm run preview      # preview the production build locally
npm run test         # run tests in watch mode
npm run test:run     # run tests once (used in CI)
npm run lint         # oxlint
npm run format       # prettier --write .
npm run format:check # prettier --check . (used in CI)
```

Requires Node 18+.

A pre-commit hook (Husky + lint-staged) runs lint + format automatically on
staged files — it's wired up via `npm install` (the `prepare` script), so
nothing extra to set up.

## Project structure

```
src/
  components/
    Navbar.tsx        # sticky nav, mobile menu
    Hero.tsx           # animated banner (headline + floating service cards)
    Services.tsx        # Design / Video / Photography service categories
    About.tsx             # "five things we do well" section
    ContactForm.tsx        # validated contact form (react-hook-form)
    Footer.tsx               # footer links + social icons
    Logo.tsx                  # brand mark + wordmark (incl. animated variant)
    SocialIcons.tsx            # small local Instagram/LinkedIn/Facebook glyphs
    *.test.tsx                  # component smoke tests (Vitest + RTL)
  data/
    nav.ts             # nav link labels/anchors
    services.ts          # the 3 service categories and their line items
    about.ts                # the 5 "things we do well" entries
  test/
    setup.ts            # jsdom test setup (jest-dom matchers, observer stubs)
  index.css             # Tailwind import + design tokens (@theme)
  App.tsx                  # page composition
  App.test.tsx               # top-level smoke test

public/
  favicon.svg, favicon-*.png, apple-touch-icon.png,
  android-chrome-*.png, site.webmanifest   # full favicon/PWA icon set
  og-image.png                              # Open Graph / Twitter share image
  robots.txt, sitemap.xml                    # placeholders — see SEO section

.github/workflows/ci.yml   # format check, lint, test, build on every push/PR
```

Content lives in `src/data/*.ts` — update copy there rather than inside the
components.

## Design system

Colour tokens, fonts and shadows are defined once in `src/index.css` under
the Tailwind v4 `@theme` block, so `bg-navy-900`, `text-coral-500`,
`text-mint-500`, `shadow-card`, etc. are usable anywhere as normal Tailwind
utilities. To rebrand, edit the `--color-navy-*`, `--color-coral-*` and
`--color-mint-*` values there.

Fonts (Manrope for headings, Inter for body) are loaded from Google Fonts in
`index.html`.

## Contact form

The form in `ContactForm.tsx` is fully validated on the client
(`react-hook-form`) and shows a success state on submit, but **there is no
backend wired up yet** — `onSubmit` currently just simulates a network
delay. To make it functional, replace the body of `onSubmit` with a call to
whatever you use to receive submissions, e.g.:

- A form endpoint service (Formspree, Getform, Basin, etc.) — swap in a
  `fetch(...)` POST call.
- A serverless function / API route that emails or stores the lead.
- A "mailto:" link as a lower-effort fallback.

An `.env.example` is included for whichever endpoint/key you end up needing
(e.g. `VITE_CONTACT_FORM_ENDPOINT`) — copy it to `.env.local` and it'll be
picked up by Vite automatically once `onSubmit` reads it via
`import.meta.env`.

## SEO & sharing

`index.html` has full Open Graph + Twitter Card meta tags, a canonical link,
and JSON-LD `LocalBusiness` structured data, plus `public/robots.txt` and
`public/sitemap.xml`. **All of these currently point at the placeholder
`https://YOUR-DOMAIN-HERE.com/`** — search-and-replace that with the real
deployed domain once you have one (it appears in `index.html`,
`robots.txt`, and `sitemap.xml`). The JSON-LD block also has a `sameAs`-less
`makesOffer` list only — add real social profile URLs and a phone number
there once they exist.

`public/og-image.png` is a generated 1200×630 share-preview image using the
site's own palette/wordmark — swap it out for a real photo-based one
whenever there's brand photography to use.

## Testing

Vitest + React Testing Library, configured in `vite.config.ts`
(`test: {...}`) with jsdom as the environment. `src/test/setup.ts` stubs
`IntersectionObserver`/`ResizeObserver`, which jsdom doesn't implement but
Framer Motion's `whileInView` depends on.

Current coverage is smoke-level, not exhaustive: nav renders + mobile menu
toggles, all service categories/items render, the contact form's validation
and simulated-success paths work, and the full page composes without
crashing. Extend `*.test.tsx` files alongside components as functionality
grows.

## CI

`.github/workflows/ci.yml` runs on every push/PR to `main`: install →
format check → lint → test → build. A local pre-commit hook mirrors the
format+lint part of that on staged files only (see "Getting started" above).

## Notes

- `Logo.tsx` ships an abstract geometric mark (no external logo file was
  provided) — drop in a real logo asset here if/when one exists.
- `SocialIcons.tsx` are small locally-authored glyphs (Lucide's icon set no
  longer ships Instagram/LinkedIn/Facebook icons) — the footer's social
  links point to `#` placeholders; update `src/components/Footer.tsx` with
  real profile URLs.
- No portfolio/testimonials section is included since no such content was
  provided — the sections built are Hero, Services, About and Contact per
  the supplied content.
