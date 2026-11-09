# Etavioxy's personal website

Etavioxy's personal website, built with Vite, Vue 3, and UnoCSS.

Live at <https://etavioxy.github.io/>

## Stack

- Vite + Vue 3 + vue-router + UnoCSS (presetWind3, attributify, icons, web fonts)
- Theme/logic/components ported from [antfu/antfu.me](https://github.com/antfu/antfu.me) — Vitesse look: light `#fff` / dark `#050505`, Inter, `.dark` class toggle, page `art` backgrounds (dots/plum)
- Pages: `/` home (hero + links, content = W-3) · `/projects` gallery (data from `src/data/projects.ts`)
- GitHub Pages user site: history mode base `/` with `public/404.html` fallback; GitHub Actions builds and deploys from this repository

## Attribution

- Code (components, styles, UnoCSS config, theme logics) adapted from [antfu/antfu.me](https://github.com/antfu/antfu.me) — **MIT License, Copyright (c) 2020-2021 Anthony Fu**.
- Site content, copy and project data are original (antfu content is CC BY-NC-SA, not copied).
- Site icon: static SVG adapted from Etavioxy's GitHub avatar.

## Develop

```bash
pnpm install
pnpm dev      # local dev
pnpm build    # build to dist/ (downloads web fonts)
```
