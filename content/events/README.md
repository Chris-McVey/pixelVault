# Events (`content/events/`)

Each **swap meet or store-hosted event** is one **Markdown file**. The site builds event pages from these files when Vercel deploys (or when you run `npm run build` locally).

## Add or edit on GitHub

1. Open this repo on GitHub.
2. Go to **`content/events/`**.
3. **Edit** an existing `.md` file or **Add file → Create new file**.
4. Commit to **`main`** (or open a Pull Request).  
5. **Vercel** redeploys automatically — changes appear after the deploy finishes (~1–2 minutes).

No database — Git is the source of truth.

## File naming

Use a short URL-safe name, e.g. `vault-swap-2026-06-14.md`.  
The **`slug`** in the frontmatter should match the URL: `/events/<slug>`.

## Frontmatter (YAML between `---`)

| Field | Required | Example |
| ----- | -------- | ------- |
| `slug` | Yes | `vault-swap-2026-06-14` |
| `title` | Yes | `"Vault Swap — June"` |
| `summary` | Yes | One line for listings / SEO |
| `startIso` | Yes | `"2026-06-14T10:00:00-07:00"` (Pacific, ISO 8601) |
| `endIso` | Yes | `"2026-06-14T16:00:00-07:00"` |
| `vendorTips` | No | YAML list of bullets |

## Body (below the second `---`)

The **description** on the event page is everything below the frontmatter. Use blank lines between paragraphs.

## Reschedule

Change **`startIso`** and **`endIso`** only, or copy the file to a new slug if the URL should stay stable for bookmarks — your choice.

## Cancelled events

Remove the file or ask your developer to add an optional `cancelled` flag later.

## Template

Copy `vault-swap-2026-06-14.md` and rename fields.
