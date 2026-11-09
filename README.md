# Portfolio — Ilya Sharafeev

Personal one-page site: experience, projects, stack and contacts.

**Live:** https://ilyasharafeev.github.io/my-portfolio/

## Stack

- Astro (static output)
- Vue 3 — theme toggle island
- Tailwind CSS — light / dark theme that follows the system setting
- GitHub Actions — builds and publishes to GitHub Pages on every push to `master`

All content lives in [`src/data.ts`](src/data.ts); the page is [`src/pages/index.astro`](src/pages/index.astro).

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```
