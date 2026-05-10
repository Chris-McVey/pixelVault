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

Canonical audit, modernization plan, and roadmap live in the **Athena vault** (`~/projects/athena/`). See **`docs/README.md`** in this repo for vault paths and MCP access.

## Production URL

Live site: **https://pixelvaultontario.com**. Set `NEXT_PUBLIC_SITE_URL` to that value in your host (see `.env.example`). On Vercel, canonical URLs still resolve correctly if the env var is omitted (`VERCEL=1` falls back to this domain in code).

## Deploy (Vercel + GitHub)

See **`docs/DEPLOY.md`** — connect the repo to Vercel, set env vars, attach **pixelvaultontario.com**, and let Git pushes trigger deploys. Shop events are edited as Markdown under **`content/events/`** (see **`content/events/README.md`**).

## Requirements

- **Node**: Next 15.5.x expects Node **≥ 18.18**. Use **≥ 20.9** if you hit ESLint engine warnings on older 20.x patch releases.
