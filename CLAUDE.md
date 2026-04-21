# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

House of Handsome — marketing website for a barbershop chain. React + Vite + Tailwind v4 SPA, deployed to Netlify.

- **ClickUp:** `901813040360`

---

## Commands

```bash
npm run dev       # Dev server (host: true — accessible on LAN)
npm run build     # Production build → dist/
npm run lint      # ESLint
npm run preview   # Preview production build locally
```

---

## Stack

- **React 19** with React Compiler enabled (via `babel-plugin-react-compiler`)
- **Tailwind CSS v4** — configured via `@tailwindcss/vite` plugin, not a `tailwind.config.js` config object
- **shadcn/ui** components (Radix-based) live in `src/components/ui/`
- **GSAP + ScrollTrigger** for scroll animations; ScrollTrigger instances are killed and refreshed on every route change (see `ScrollToTop` in `App.jsx`)
- **@unhead/react** for per-page SEO via the `<SEO>` component
- **react-hook-form + yup** for form validation
- **Embla Carousel** for carousel sections
- Path alias `@` → `src/`

---

## Architecture

### Routing

All routes share a single `<Layout>` (Header + Footer via `react-router-dom` `<Outlet>`). Routes are defined in `App.jsx`. The `ScrollToTop` component in `App.jsx` handles scroll-to-top and GSAP ScrollTrigger cleanup on every navigation.

### Component structure

```
src/
  pages/              # One file per route — thin wrappers that compose PageComponents
  components/
    layout/           # Header/, Footer/, SEO.jsx, index.jsx (Layout wrapper)
    PageComponents/   # Per-page section components, organised by page name
    ui/               # shadcn/ui primitives + SecondaryCTA.jsx
  hooks/
    useScrolled.js    # Returns bool: true when scrolled > threshold px (re-evaluates on route change)
  utils/
    BookAnAppontemtREdirection.jsx  # Shared scroll/redirect helpers
  lib/
    utils.js          # cn() helper (clsx + tailwind-merge)
```

Each page in `pages/` imports its section components from `PageComponents/<PageName>/` and wraps them with an `<SEO>` tag.

### Key conventions

- **Brand red:** `#d82028` — used as a constant in Header and referenced across components
- **Booking URL:** `https://www.phorest.com/salon/houseofhandsomebarbershop2/locations` — centralised in `utils/BookAnAppontemtREdirection.jsx` via `handleRedirectOfBookAppontment()`
- **Scroll-to-section:** use `ScrolldownToFranchiseForm()` / `ScrolldownTostrategicExpansion()` from the same utils file; they apply a `-80px` offset to account for the sticky header
- **SEO:** every page must include `<SEO title="..." description="..." />`
- **CTA buttons:** `SecondaryCTA` (outlined, black) in `src/components/ui/SecondaryCTA.jsx`; use this for all "Book An Appointment" buttons
- **Nav items:** defined as `NAV_ITEMS` array in `Header.jsx` — Franchise route exists in the router but is commented out of the nav

### Netlify

`netlify.toml` redirects all paths to `index.html` (SPA routing). Build output is `dist/`.

---

## Reverting a Bad Merge

If a merged PR breaks `main`, use both layers:

**1. Netlify — immediate production rollback (fastest)**
Netlify → Deploys → select the last known-good deploy → "Publish deploy". Live site reverts in seconds, no code changes needed.

**2. GitHub — revert the merge commit (fixes the code)**
Every merged PR has a "Revert" button on its GitHub page. Click it to auto-generate a revert PR that undoes all changes. Merge that revert PR and the code is clean again.

From the CLI:
```bash
git revert -m 1 <merge-commit-hash>
git push origin main
```

Use Netlify to stop the bleeding immediately, then use the GitHub revert to fix the codebase properly.
