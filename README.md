# Being Designs — Website

A single-page marketing site for Being Designs, a creative studio offering
branding, video, and photography services. Built with React + TypeScript +
Vite + Tailwind CSS v4, with Framer Motion for animation.

## Getting started

```bash
npm install
npm run dev       # start the dev server (http://localhost:5173)
npm run build     # type-check and produce a production build in dist/
npm run preview   # preview the production build locally
```

Requires Node 18+.

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
  data/
    nav.ts             # nav link labels/anchors
    services.ts          # the 3 service categories and their line items
    about.ts                # the 5 "things we do well" entries
  index.css             # Tailwind import + design tokens (@theme)
  App.tsx                  # page composition
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
