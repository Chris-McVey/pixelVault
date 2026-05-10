# pixelVault — Codebase Audit

**Date**: 2026-05-02
**Scope**: full repository deep-dive
**Audience**: input to `MODERNIZATION.md` (rewrite plan) and `ROADMAP.md` (product/SEO plan).

This document inventories what exists, what's broken, what's risky, what's dead, and where the project stands relative to a modern small-shop marketing site. Severities: **Critical** (security/data loss / site-broken), **High** (user-visible bug or major risk), **Medium** (quality/maintenance), **Low** (cleanup).

---

## 1. Identity & current purpose

- **Business**: Pixel Vault Games — family-owned retro game shop. Buys/sells/trades from Magnavox Odyssey to Xbox Series X. Console & controller repair. Open since 2014.
- **Address**: 931 W Holt Blvd, Ontario, CA 91762 (Inland Empire).
- **Phone**: (909) 664-7634.
- **Social**: Instagram `@pixelvaultgames`, Facebook `PixelVaultGames`, YouTube channel `UCKONxFboO1zJNbvhPsbp5mQ`.
- **Site purpose (per owner)**: physical-store visibility / marketing. Ecommerce is a future possibility but not a current build target.

## 2. Architecture overview

- **Frontend**: React 17 SPA, react-router-dom v5, Material UI v4, axios, PropTypes. Two webpack entries (`client/src/index.jsx` for the public site, `private/index.jsx` for the admin app).
- **Backend**: Express 4, body-parser, mongoose 5 → MongoDB Atlas. Custom session-cookie auth (homegrown sha512 + salt). Serves static files from `public/`.
- **Build**: Webpack 5.37 in `mode: 'development'` (bug — see §6). Babel preset-env + preset-react.
- **Deploy**: AWS EC2 (us-west-1), referenced by `npm run aws` ssh script in `package.json`.
- **Pages (5)**: Home, Events (Google Calendar iframe), News (Mongo-backed posts), Contact (Google Maps iframe), Admin (login → private SPA for posting news).
- **Embeds**: Google Calendar (Events), Google Maps (Contact), Curator.io Instagram feed (Home).

## 3. Critical issues

| # | Severity | Location | Issue |
|---|---|---|---|
| 3.1 | Critical | `database/connect.js:6` | MongoDB cluster `cluster0.poovn.mongodb.net` no longer resolves — backend can't start cleanly. The site survives because the news endpoint catches the failure and renders a fake "Posts intercepted" placeholder, but auth and news posting are dead. |
| 3.2 | Critical (security) | `client/src/AuthForm.jsx:44-46` | Session token written to `document.cookie` from JS — no `httpOnly`, no `Secure`, no `SameSite`. Trivially XSS-stealable. The whole admin auth model trusts a cookie you can read and write from any JS context. |
| 3.3 | Critical (security) | `database/queries.js:42-66` | Hand-rolled crypto: `sha512(password + salt)` with a single hash. Modern fast hardware brute-forces sha512 at billions of guesses/sec. Should be `bcrypt`/`argon2`/`scrypt`. Also: `addUser` is exported but never called from anywhere — implies users were inserted via Mongo shell, no registration flow exists. |
| 3.4 | Critical (security) | `server/index.js:21-30` | Cookie parsing is hand-rolled and assumes `req.headers.cookie` exists; if a request omits the header, `parseCookie` throws on `undefined.split('; ')`. No `cookie-parser` middleware. |
| 3.5 | Critical (broken feature) | `server/index.js:110` and `client/src/App.jsx`-equivalent calls | DELETE route declared as `app.delete('/api/news:id', ...)` — missing slash, so `:id` is a literal substring of the path, not a route param. Client also calls `axios.delete('/api/news${id}')` (also missing slash, and string isn't even template-interpolated since it uses single quotes — bug). News deletion has never worked. |

## 4. High-severity bugs

| # | Severity | Location | Issue |
|---|---|---|---|
| 4.1 | High | `client/src/Contact.jsx:21-24` | Store hours are self-contradictory: "Monday 12pm-6pm / CLOSED TUESDAYS / Tuesday to Saturday 12pm-6pm". Tuesday is both closed and open. |
| 4.2 | High | `client/src/NewsEntry.jsx:8-14` | Date formatting bug. `toLocaleDateString('en-US')` returns `MM/DD/YYYY`, then code destructures as `[day, month, year]` and renders `${day}-${month}-${year}` — labels swapped, so dates display incorrectly (and look like DD-MM-YYYY but with month-day swapped). |
| 4.3 | High | `client/src/NewsFeed.jsx:18, 37` | `posts.splice(0, 5)` mutates the array used for state, breaking React's referential-equality assumptions and causing the "More" pagination to behave unpredictably. Should use `slice` (no mutation). |
| 4.4 | High | `client/src/Admin.jsx:18` | Side effect (`location.replace(...)`) executed during render. React will warn/break in StrictMode and modern React. Also returns no JSX in the redirect branch — falls through to the unreachable return. |
| 4.5 | High | `client/src/Header.jsx:14-16` | Logo uses `<a href="/">` inside an SPA — full page reload on click instead of client-side navigation. Should be `<Link>` or `history.push('/')`. |
| 4.6 | High | `client/src/Instagram.jsx:10-19` | The `<script>` tag contains an inline IIFE inside JSX `{...}`. JSX evaluates the IIFE at render time on the *server-render attempt*, but the result is just printed inline — the script tag itself is empty. The Curator widget is almost certainly not loading. Should be a `useEffect` that injects a script element. |
| 4.7 | High | `webpack.config.js:9, 35` | `mode: 'development'` for the production build. No minification, no tree-shaking, source maps fully embedded. Bundle is much larger than it should be. |
| 4.8 | High | `database/queries.js:74-77` | `result.length === 0` check on a Mongo `findOne` result. `findOne` returns a single document or `null`, not an array. If user is missing, `result.length` reads from `null` and throws. Even when the check fires, execution continues into the password-hashing path, leaking timing info. |

## 5. Medium-severity issues

| # | Severity | Location | Issue |
|---|---|---|---|
| 5.1 | Medium | Whole project | **Material UI v4** (`@material-ui/core`, `@material-ui/icons`) — entire library deprecated since 2021, no security/compatibility updates. Incompatible with React 18+. Hard blocker on any React upgrade. |
| 5.2 | Medium | `package.json` | **66 npm vulnerabilities** (5 low, 20 mod, 34 high, 7 critical) per the install log. Many will fix themselves on a stack upgrade; the rest need attention. |
| 5.3 | Medium | `private/` vs `client/src/` | **Code duplication**: `NewsForm.jsx`, `NewsFeed.jsx`, `NewsEntry.jsx` exist in both folders, with near-identical contents. Two webpack entries means two SPAs, two bundles, two maintenance copies. |
| 5.4 | Medium | `client/src/index.jsx`, `private/index.jsx` | `ReactDOM.render` is removed in React 18 — must move to `createRoot`. |
| 5.5 | Medium | `package.json` | `react-router-dom` v5 — v6/v7 has breaking changes (`<Switch>` → `<Routes>`, `useHistory` → `useNavigate`, etc.). Migration required for any modern React stack. |
| 5.6 | Medium | `client/src/Admin.jsx:1`, `private/App.jsx:2` | Unused imports (`useState` in Admin; `axios` imported but used only as transitive). `FormControl`, `FormHelperText` imported in `NewsForm.jsx` and `AuthForm.jsx`, never used. |
| 5.7 | Medium | All components | No TypeScript. PropTypes used inconsistently (some components have it, some don't). |
| 5.8 | Medium | `public/index.html` | `<title>Pixel Vault</title>` — generic. No meta description. No canonical. No Open Graph / Twitter Card. No structured data. (See §7.) |
| 5.9 | Medium | `public/site.webmanifest` | Manifest is mostly empty — `name`, `short_name`, `theme_color` all default. PWA install would be broken/ugly. |
| 5.10 | Medium | `public/styles.css` | Layout uses `id`-based CSS selectors and `display: grid` with hardcoded column counts; mobile breakpoint `max-width: 1000px` only — no proper tablet/small-phone considerations. Lots of `margin-left: auto; margin-right: auto;` instead of using flex/grid alignment. |
| 5.11 | Medium | `client/src/Footer.jsx:7-9` | `footerClickHandler` logs to console and does nothing else. Dead handler. |
| 5.12 | Medium | All `<img src="../assets/...">` references | Image paths use raw `../assets/...` strings — webpack doesn't process them as ES modules, so they rely on the runtime `assets/` folder being served by `app.use('/assets', express.static('assets'))`. The repo has no `assets/` folder checked in (or it's gitignored). Most images are likely broken on a fresh clone. |
| 5.13 | Medium | `database/queries.js` | Callbacks everywhere. Modern code would be `async`/`await` with promises. Mongoose 5 callback API is deprecated in Mongoose 7+. |

## 6. Low-severity / cleanup

| # | Severity | Location | Issue |
|---|---|---|---|
| 6.1 | Low | `README.md` | One-line file with just the project name. No setup instructions, no run instructions, no architecture notes. |
| 6.2 | Low | `private/styles.css` | Near-duplicate of `public/styles.css`. Diverges in subtle ways. |
| 6.3 | Low | Various | Console.log statements left in (`Footer`, `AuthForm`, `NewsForm`, `queries.js`). |
| 6.4 | Low | `.eslintrc.json` | Uses Airbnb config but disables many of its useful rules. Project has `prettier` installed but no Prettier-eslint integration; no `lint`/`format` npm scripts. |
| 6.5 | Low | `package.json` scripts | Only `start`, `build`, `aws`. No `lint`, no `test`, no `dev` (with HMR), no `format`. |
| 6.6 | Low | `package.json:9` | The `aws` script ssh's to a hardcoded EC2 instance with a `.pem` file. The `.pem` is gitignored (good) but the script's hardcoded hostname is brittle. |
| 6.7 | Low | `package.json` | Webpack 5.37 + Node 20 caused the OpenSSL `ERR_OSSL_EVP_UNSUPPORTED` error on first build — captured separately as a learning. Worked around with `NODE_OPTIONS=--openssl-legacy-provider`; modernization will eliminate. |
| 6.8 | Low | `package.json` | `webpack-dev-server` is installed but never used (build script uses `webpack -w` instead, no HMR). |

## 7. SEO — the missing layer

The site has effectively **no SEO**. For a brick-and-mortar visibility play, this is the biggest single gap:

- `<title>` is `"Pixel Vault"` — should be something like `"Pixel Vault Games — Retro Video Games, Console Repair & Trade-Ins in Ontario, CA"`.
- No `<meta name="description">`.
- No Open Graph tags for social sharing.
- No Twitter Card tags.
- No `LocalBusiness` / `Store` / `VideoGameStore` JSON-LD structured data — Google has nothing to anchor a knowledge panel to from the site itself.
- No `OpeningHoursSpecification` markup.
- No `GeoCoordinates` markup.
- No `sitemap.xml`, no `robots.txt`.
- No per-route titles — the SPA never updates `<title>` when navigating.
- No canonical URLs.
- Single-page app with no SSR/SSG — search-engine indexing of route content (`/events`, `/news`, `/contact`) depends entirely on Googlebot's JS rendering, which is unreliable for small/new sites and adds latency.
- No alt text on the social-media icons in the footer (the SVG icons themselves don't have text alternatives for screen readers).
- No `LinkRelPreconnect` / preload hints for the heavy external resources (Google Fonts, Material Icons, Curator).

## 8. Accessibility issues

- ButtonGroup `aria-label="outlined primary button group"` is meaningless to screen-reader users.
- No skip-to-content link.
- No visible focus styles (Material UI v4 default focus is OK but the custom CSS overrides may obscure them).
- Color contrast on red `#e4000f` buttons against the gray `#a8aaaa` page background is borderline for WCAG AA on smaller text.
- Logo `<a>` has no accessible name beyond the alt text on the inner `<img>` (acceptable but could be stronger).
- Iframes for Calendar and Maps have titles (good), but no fallback text.

## 9. Performance

- Material UI v4 + full barrel imports = large JS bundle.
- `mode: 'development'` build = unminified output.
- No code splitting per route.
- Images appear unoptimized (raw JPEGs, no `srcset`, no `loading="lazy"` on home page imagery).
- Three external embeds (Curator, Google Maps, Google Calendar) load synchronously / blocking.
- Custom font (`manaspaceregular`) is loaded but could use `font-display: swap`.
- Google Fonts loaded via `<link>` from CDN (acceptable, but consider self-hosting for performance + privacy).

## 10. Hosting / Operations

- AWS EC2 single-instance deploy (us-west-1).
- No CI/CD config visible in the repo.
- No process supervisor configuration (looks like nodemon was used for both dev and prod, judging by the `start` script).
- No backup/restore plan for MongoDB visible.
- No analytics installed.
- No monitoring / uptime checks.
- No HTTPS configuration in the repo (the gitignored `.crt` / `.key` / `.csr` files imply manual cert handling at some point).

## 11. Dead code / unused features

- `client/src/Admin.jsx`: `axios` import and `useState` import unused.
- `client/src/AuthForm.jsx`: `FormControl`, `FormHelperText`, `TextField` imports unused.
- `client/src/NewsForm.jsx`: same unused MUI imports.
- `private/App.jsx`: `axios` import unused.
- `private/styles.css`: ~95% duplicate of `public/styles.css` — diverged.
- `private/bundle.js`: stale committed build artifact (should be gitignored, like `public/dist/`).
- `Footer.jsx`: `footerClickHandler` is a stub.

## 12. What works well

To be fair to the original author:

- The Express + Mongoose backend is small and easy to read once you accept the callback style.
- The Google Calendar embed for the Events page is a clever, low-maintenance way to expose store events.
- The Curator.io plan for an Instagram feed is the right *idea* (even if the implementation is broken).
- The custom `manaspaceregular` pixel font sets a clear retro brand voice.
- The site IA (Home / Events / News / Contact) is correct — those are the four things this kind of shop needs.
- The buy/sell/trade messaging on the home page is clear and on-brand.
- Mobile breakpoint exists and works at the obvious media query, even if not refined.

## 13. Recommended ordering for fixes

The hard "do this first" list, before any modernization:

1. Resolve `cluster0.poovn` MongoDB endpoint (or replace whole backend — see modernization plan).
2. Fix store hours in `Contact.jsx`.
3. Fix logo `<a>` to a `<Link>` so SPA nav works.
4. Add a real `<title>` and `<meta description>` to `public/index.html`.
5. Set up Google Business Profile (out of code — but it's the highest-leverage marketing move).

After that, the modernization plan supersedes the spot-fix approach: replace the whole stack rather than chase per-file bugs.

---

*See `MODERNIZATION.md` (forthcoming) for the rebuild plan and `ROADMAP.md` (forthcoming) for the feature/SEO/content plan, both grounded in the retro-game-shop-web-design mastery research.*
