# itshamid-v3 — Portfolio

Astro portfolio site based on the `__template__` designs.

## Quick start

```bash
npm install
npm run dev
```

## Content

| What | Where |
|------|-------|
| Site copy (hero, experience, contact, resume, etc.) | [`src/data/content.json`](src/data/content.json) |
| Fonts, colors, layout | [`src/config/theme.ts`](src/config/theme.ts) |
| Blog posts | [`src/content/blog/*.mdx`](src/content/blog/) |

## Blog (MDX)

Write posts in `src/content/blog/`. Available MDX components:

- `<CodeBlock lang="ts" filename="file.ts" code={\`...\`} />` — styled terminal code block
- `<Callout>` — highlighted tip box
- `<PullQuote>` — pull quote
- Fenced code blocks also render with syntax highlighting via Shiki

## GitHub projects

Projects are fetched at build time from the GitHub API using `content.json` → `projects.github`:

- `username` — GitHub user
- `featuredRepos` — shown in the “Published on npm” section
- `repoOverrides` — custom tags, notes, descriptions per repo
- `flagship` — featured product card (not from GitHub)

## SEO

- Meta, Open Graph, and Twitter tags via `BaseLayout`
- Sitemap via `@astrojs/sitemap`
- `public/robots.txt`

## Build

```bash
npm run build
npm run preview
```
