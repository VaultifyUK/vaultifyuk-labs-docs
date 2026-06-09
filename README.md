# VaultifyUK Labs Docs

Public documentation and knowledge base for VaultifyUK Labs products, built with Astro Starlight and deployed to [docs.labs.vaultifyuk.co.uk](https://docs.labs.vaultifyuk.co.uk).

## Project Overview

This repository contains the merchant-facing documentation site for VaultifyUK Labs. Each product has its own top-level section in the sidebar. Content is written in Markdown / MDX and served as a static site.

## Current Product Docs

- **Smart Collections** — rule-based Shopify collection management

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | [Astro](https://astro.build) |
| Docs theme | [Astro Starlight](https://starlight.astro.build) |
| Content | Markdown / MDX |
| Search | Pagefind (built-in via Starlight) |
| Deployment | Cloudflare Pages |

## Local Development

```bash
npm install
npm run dev
```

The dev server runs at [http://localhost:4321](http://localhost:4321).

## Build

```bash
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

Always run `npm run build` before merging to confirm the site compiles without errors.

## Content Structure

```text
src/
  content/
    docs/
      index.mdx                          # Homepage
      smart-collections/                 # Smart Collections docs
  assets/
    screenshots/                         # Product screenshots (see convention below)
  styles/
    custom.css                           # Theme overrides
astro.config.mjs                         # Astro + Starlight configuration
```

## Screenshot Convention

Screenshots in content files use a placeholder token until the real asset is ready:

```md
![Descriptive alt text](SCREENSHOT_PLACEHOLDER)
```

When adding a real screenshot, place it under the matching product folder and update the reference:

```text
src/assets/screenshots/<product-name>/screenshot-name.png
```

## Deployment

The site deploys automatically via Cloudflare Pages on push to `main`.

| Setting | Value |
| --- | --- |
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Custom domain | `docs.labs.vaultifyuk.co.uk` |

## Maintenance Notes

- Keep docs merchant-facing — explain what things do, not how they are implemented.
- Avoid technical implementation details unless they directly explain merchant-visible behaviour.
- Add one top-level sidebar group per product in `astro.config.mjs`.
- Keep styling changes minimal and Starlight-compatible; prefer CSS custom properties over component overrides.
- Run `npm run build` before merging any branch.
