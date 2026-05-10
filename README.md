# Pixel Vault

Retro game shop marketing site — migrating to **Next.js** (App Router) on branch `feat-next-migration`.

## Next.js (new)

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Production build:

```bash
npm run build
npm start
```

## Legacy webpack + Express

The previous SPA and API live in **`legacy/webpack-site/`** with **React 17** and its own dependencies (no conflict with Next’s React 19).

```bash
npm run legacy:install   # one-time
npm run legacy:start       # Express on PORT 3000 — stop Next dev first if also using 3000
```

Webpack watch:

```bash
npm run legacy:build
```

## Docs

- `docs/AUDIT.md` — codebase audit  
- `docs/MODERNIZATION.md` — migration plan  
- `docs/ROADMAP.md` — features & SEO  

## Requirements

- **Node**: Next 15.5.x expects Node **≥ 18.18**. Use **≥ 20.9** if you hit ESLint engine warnings on older 20.x patch releases.
