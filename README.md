# Personal Academic Website

Astro static site for a bilingual academic homepage focused on energy, environment and AI research.

## Local Development

```bash
pnpm install
pnpm dev
```

## Content Editing

The site content lives in `src/content/`:

- `profile.json`: name, affiliation, hero text, biography and academic links
- `research.json`: research areas
- `publications.json`: publications and filter metadata
- `projects.json`: grants and collaborations
- `teaching.json`: courses and mentoring
- `contact.json`: office, address and contact note

`public/media/` stores images. The generated hero image is `public/media/hero-research.png` and can be replaced later.

## Pages CMS

The `.pages.yml` file configures Pages CMS so content can be edited visually and committed back to GitHub. After pushing the repository to GitHub, connect it in Pages CMS and choose this repository.

## GitHub Pages Deployment

This repository is configured for the GitHub Pages project URL:

```text
https://qingruiwang.github.io/qingrui.wang.github.io/
```

`astro.config.mjs` uses `site: "https://qingruiwang.github.io"` and `base: "/qingrui.wang.github.io"` so static assets resolve correctly from that project path.

Enable GitHub Pages in the repository settings and select GitHub Actions as the source. The workflow in `.github/workflows/deploy.yml` builds and deploys the site on every push to `main`.

If the repository is later renamed to `QingruiWang.github.io` for a root user homepage, remove the `base` field and use `site: "https://qingruiwang.github.io"`.
