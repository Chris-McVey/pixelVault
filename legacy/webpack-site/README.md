# Legacy webpack + Express SPA

Pre-migration stack (React 17, Material UI v4, webpack 5). **Uses its own `node_modules`** — install once:

```bash
npm install --prefix legacy/webpack-site
# or from repo root:
npm run legacy:install
```

Run the API + static server (serves `public/` at repo root):

```bash
npm run legacy:start
```

Build/watch client bundles into `public/dist/` and `legacy/webpack-site/private/`:

```bash
npm run legacy:build
```

The Next.js app (`npm run dev` at repo root) does not use this server.
