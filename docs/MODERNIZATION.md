# Pixel Vault — Modernization Plan

**Date**: 2026-05-09  
**Audience**: engineering / maintainers  
**Companion docs**: `docs/AUDIT.md` (current-state inventory), `docs/ROADMAP.md` (features + SEO rollout)

Full research lives in the Athena vault (outside this repo):  
`~/projects/athena/Learnings/Mastery/retro-game-shop-web-design/` — especially `_overview.md` (synthesis) and `findings/` 01–16.

---

## 1. Decision summary

| Topic | Decision |
|---|---|
| Framework | **Next.js 15+** (App Router), **TypeScript**, **Tailwind CSS**, **shadcn/ui** |
| Backend | **Remove** Express + MongoDB for the marketing site. Content from **Markdown files in Git** (or optional headless CMS later). |
| Auth / admin | **No custom login** until ecommerce needs real accounts. News/admin flows die with Mongo — replace with Git-based Markdown or CMS. |
| Hosting | **Vercel** or **Netlify** (static/ISR-first). Drop EC2 + SSH deploy as the primary path unless there is a hard constraint. |
| Ecommerce | **Design-only for now** — Stripe Checkout / Shopify Buy Button / Snipcart-style attachment later without rewriting IA |

Rationale for Next over Vite SPA + RR7: SEO defaults (Metadata API, Image, `sitemap.ts`, SSR/SSG patterns) and ecommerce ecosystem maturity — see Athena finding **01**.

---

## 2. Current state (abbrev.)

The legacy stack is React 17 + React Router 5 + Material UI v4 + Webpack 5 + Express + Mongoose. Critical issues include broken Mongo connectivity, weak auth, OpenSSL/webpack friction (`NODE_OPTIONS=--openssl-legacy-provider`), and zero structured metadata — detailed in **`docs/AUDIT.md`**.

---

## 3. Target architecture

### Runtime shape

- **Public site**: Next.js App Router routes — mostly **SSG** / **ISR** (`revalidate` on news/events).
- **Content**: `content/` directory of Markdown + frontmatter (`events`, `news`, `pages`) committed to Git; **MDX** optional for rich embeds.
- **JSON-LD**: small React component injecting `<script type="application/ld+json">` per layout + per **Event** route — mirrors Google Business Profile facts (Athena findings **13–15**).
- **Images**: `next/image` + explicit width/height; replace broken `../assets/` webpack bypass patterns.

### What ships in repo

```
app/
  (marketing routes — Home, Events, Repair, Trade-In, About, Contact, …)
  events/[slug]/page.tsx
content/
  events/*.md
  news/*.md
components/
lib/
public/
```

### What leaves the repo

- `server/` Express app — **delete** after cutover.
- `database/` Mongoose layer — **delete**.
- `private/` admin SPA — **delete** or replace with CMS / Markdown workflow.
- Webpack config — **delete**.

---

## 4. Migration phases

### Phase A — Greenfield Next app (parallel)

1. `npx create-next-app@latest` with TypeScript, Tailwind, ESLint, App Router.
2. Port **design tokens** only — do **not** port MUI; rebuild UI with Tailwind + shadcn/ui.
3. Implement **global layout**: header / footer / nav; embed fonts; dark/light optional later.
4. Build **static shells** for priority routes (Home, Events index, Contact).

Exit criteria: `pnpm build` clean; Lighthouse sanity on Home.

### Phase B — Content + SEO plumbing

1. Wire Markdown loader (`next-mdx-remote`, `contentlayer`, or lightweight `gray-matter` + `fs`).
2. Implement **`generateMetadata`** per route — titles, descriptions, canonicals, OG/Twitter.
3. Add **`app/sitemap.ts`** + **`app/robots.ts`**.
4. Implement JSON-LD — `Store` + `WebSite` graph (`OpeningHoursSpecification`, `sameAs`) — finding **14**.
5. Events — dynamic routes + **`Event` JSON-LD** per occurrence — finding **15**.

Exit criteria: Rich Results Test passes on Home + one Event page.

### Phase C — Cutover + decommission

1. Point domain DNS to Vercel/Netlify; configure HTTPS.
2. Archive legacy `server/` + webpack workflow; tag git release **pre-next**.
3. Remove OpenSSL legacy workaround from developer docs — obsolete once Webpack leaves.

### Phase D — Future ecommerce attachment (later)

1. Introduce `Product` schema + Stripe Checkout links OR headless Shopify — **only** when inventory discipline exists.
2. Keep URLs stable — `/shop` subtree added without renaming marketing routes.

---

## 5. Quality gates

| Gate | Requirement |
|---|---|
| Typecheck | `tsc --noEmit` clean in CI |
| Lint | ESLint + Prettier (optional Biome) |
| SEO | Valid JSON-LD; no orphan routes in sitemap |
| Accessibility | Semantic headings; alt text on hero/event photos |
| Performance | `next/image`; avoid heavy client bundles on landing pages |

---

## 6. Risks & mitigations

| Risk | Mitigation |
|---|---|
| Content drift vs GBP | Single YAML/TS config for **hours + phone + address** feeding layout + JSON-LD + footer |
| Event date mistakes | Content review checklist; `eventStatus` updates when cancelling |
| Scope creep into ecommerce | Ship marketing Milestone 1 **without** cart |
| Mongo news migration | Export posts once DB reachable — or rewrite manually if export fails |

---

## 7. Open assumptions (owner input pending)

Synced with Athena `open-questions.md`:

- **Canonical phone + hours** — NAP lock before publishing structured data.
- Whether to **publish exact trade-in percentages** on the public web (recommended in findings — still a business judgment).
- **Swap-meet branding** + vendor-application workflow depth.

---

## 8. Success criteria

- No insecure DIY auth in public codebase.
- Lighthouse SEO score **green** on core routes.
- Team can add an event by **committing one Markdown file** + optional photos — no SSH deploy required.
