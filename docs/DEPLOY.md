# Deploying Pixel Vault (Vercel + GitHub)

Assumptions: Next.js app in this repo, domain **pixelvaultontario.com**, shop owner updates **events** via Markdown in **`content/events/`** on GitHub.

## 1. Push code to GitHub

Repo should be on GitHub (e.g. `Chris-McVey/pixelVault`). Default branch is usually **`main`**.

## 2. Create a Vercel project

1. Sign in at [vercel.com](https://vercel.com) with GitHub.
2. **Add New → Project** → import this repository.
3. Framework: **Next.js** (auto-detected).
4. **Root directory:** leave default (repository root) unless you changed layout.
5. **Environment variables** (Production — and Preview if you want):

   | Name | Value |
   | ----- | ----- |
   | `NEXT_PUBLIC_SITE_URL` | `https://pixelvaultontario.com` |

6. Deploy.

## 3. Connect your domain

1. Vercel project → **Settings → Domains**.
2. Add **pixelvaultontario.com** (and optionally **www** — pick one canonical; redirect the other).
3. At your domain registrar, add the **DNS records** Vercel shows (usually **A** / **CNAME**).

SSL certificates are issued automatically.

## 4. How updates reach the live site

| Change | What happens |
| ------ | ------------- |
| Push / merge to the branch Vercel watches (usually **`main`**) | New production deploy |
| Edit **`content/events/*.md`** on GitHub and commit | Same — triggers deploy |

**Events** are not edited in Vercel — only in **Git**. Vercel only builds what’s in the repo.

## 5. Owner workflow (events only)

1. GitHub → **`content/events/`**.
2. Edit an event `.md` file or add a new one (see **`content/events/README.md`**).
3. Commit to **`main`** (or PR → merge).
4. Wait for the green checkmark on Vercel deploy; refresh the site.

Optional: install the **GitHub Mobile** app for quick typo fixes.

## 6. Local check before pushing

```bash
npm install
npm run build
```

If the build fails (usually invalid YAML frontmatter), fix the file and push again.

## Legacy webpack site

The old Express/webpack app lives in **`legacy/webpack-site/`** and is **not** deployed by this Vercel project unless you add a separate service. This doc covers **only** the Next.js marketing site.
