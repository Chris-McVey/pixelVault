# Pixel Vault — Website Roadmap (Features, Layout, SEO)

**Date**: 2026-05-09  
**Audience**: owner / operator + implementers  
**Companion docs**: `docs/AUDIT.md`, `docs/MODERNIZATION.md`

Research synthesis: Athena mastery  
`~/projects/athena/Learnings/Mastery/retro-game-shop-web-design/` (`_overview.md` + findings **01–16**).

Assumptions flagged explicitly — confirm authoritative **phone**, **hours**, and trade-in policy numbers before launch.

---

## 1. Strategic thesis

Pixel Vault wins as a **destination**, not a catalog.

1. **Swap meets** — category-defining community events (finding **05**, **15**).
2. **Repair + trade** — trust surfaces that serious collectors evaluate before driving (findings **08–11**).
3. **Owner-led voice** — anti-corporate positioning beats generic nostalgia copy (finding **10**).
4. **Local SEO** — uncontested long-tail in the Inland Empire if pages are substantive (finding **04**, **16**).

---

## 2. Information architecture (site map)

Priority order reflects conversion evidence + uniqueness:

| Priority | Route               | Purpose                                                                                          |
| :------: | ------------------- | ------------------------------------------------------------------------------------------------ |
|    P0    | `/`                 | Hero = **next swap meet** + proof (photos). Secondary fold = owner/staff + reviews.              |
|    P0    | `/events`           | Upcoming + archive — never only an iframe.                                                       |
|    P0    | `/events/[slug]`    | Each occurrence — unique copy + **Event JSON-LD** + vendor FAQ.                                  |
|    P0    | `/contact`          | NAP, embedded map, parking note, **matching** GBP hours.                                         |
|    P1    | `/repair`           | Services list, turnaround guidance, save-data language — finding **08** / Wave 2 voice research. |
|    P1    | `/trade-in`         | Transparent policy — publish formula **if approved** (finding **11**).                           |
|    P1    | `/authenticity`     | How you inspect carts / repro handling — finding **09**.                                         |
|    P1    | `/about`            | Owner story, **since 2014**, staff faces — finding **10**.                                       |
|    P2    | `/news`             | Markdown posts — new arrivals / stories (content-led architecture — finding **07**).             |
|    P2    | `/locations/[city]` | IE geo landing pages — finding **16** (roll out gradually).                                      |

**Kill / replace**: Admin-only news backend; fragile embeds (Curator script bug — see AUDIT).

---

## 3. Layout & UX principles

### Homepage

- **Above-the-fold**: next swap date · hours chip · primary CTAs (`Directions`, `Vendor info`, `Repair`).
- **Trust strip**: Google review aggregate (if displayed — match JSON-LD rules).
- **Photography**: real interior + crowd shots — not stock DualSense visuals.

### Dual audience layering (finding **12**)

- **Casual visitors** — emotional hook + clarity + events.`
- **Serious collectors** — depth pages (`/trade-in`, `/authenticity`, `/repair`) linked prominently but not shouty.

### Premium patterns on a budget (finding **06**)

- Status chips (**Open now / Swap in 3 days**).
- Quote wall (pull real Google reviews — comply with Google's attribution rules).
- Email capture tied to **event notifications** — not generic newsletters.

---

## 4. SEO playbook

### Off-site: Google Business Profile (finding **13**)

Before shipping the new site:

1. Claim / verify **one** canonical GBP listing.
2. Align **primary category** (video game store) + legit secondary categories for repair if accurate.
3. Fix **NAP** conflicts across Yelp / Apple Maps / Facebook / Bing — match **exact** digits & suite formatting.
4. Upload fresh photos quarterly — storefront, interior, repair bench, **swap-meet crowds**.
5. Post **Updates** when each event page goes live.

### On-site: structured data (findings **14–15**)

| Page type | Schema                                                                                                      |
| --------- | ----------------------------------------------------------------------------------------------------------- |
| Global    | `Store` + `WebSite` + `Organization` graph — hours, phone, `sameAs`, geo                                    |
| Each swap | `Event` — `startDate`, `endDate`, `eventStatus`, `location`, `image`, `offers` if paid admission/table fees |

Validate every template in Google's **Rich Results Test**.

### Reviews flywheel (finding **16**)

- QR → GBP review link at counter + repair pickup.
- Respond to **every** review within a few days.
- Never gate dishonestly — ask all customers; reply professionally to negatives.

### Geo pages (finding **16**)

Ship unique pages over **months**, not overnight — e.g. Rancho Cucamonga, Riverside, Claremont. Each with:

- Driving-distance narrative · parking reminder · link to swap schedule · **unique** paragraph + FAQ.

---

## 5. Content calendar (minimum viable)

| Cadence   | Content                                                                    |
| --------- | -------------------------------------------------------------------------- |
| Weekly    | Instagram/Facebook cross-post of **new arrivals** photo set                |
| Per event | Event landing page + GBP Update + email blast                              |
| Monthly   | One **news** Markdown post — repair story, tournament, community spotlight |

Skip the calendar → noise dies — swap meets carry the brand.

---

## 6. Launch checklist

**Blocking**

- [ ] Confirm canonical **phone** + **hours** + holiday exceptions
- [ ] Fix Contact page Tuesday contradiction (AUDIT §4.1)
- [ ] 301 redirects from legacy URLs if path names change

**High priority**

- [ ] JSON-LD validation (Rich Results Test)
- [ ] `sitemap.xml` + `robots.txt`
- [ ] Meta titles + descriptions per route
- [ ] Mobile click-to-call + tap-for-directions tested on real devices

**Medium**

- [ ] Alt text on hero images
- [ ] Privacy policy if email capture activates

---

## 7. Future ecommerce (design hooks only)

When inventory discipline exists:

- `/shop` subtree · `Product` + `Offer` structured data · Stripe Checkout / Shopify Buy Button
- Keep marketing URLs stable — finding **07** / MODERNIZATION Phase D

---

## 8. Open questions (owner follow-up)

Borrowed from Athena `open-questions.md` — resolve asynchronously:

- Monthly content cadence commitment level
- Swap-meet **brand name** ("Vault Swap"?)
- Relationship / booth presence at **SoCal Retro Gaming Expo**
- Public **trade-in formula** yes/no + exact numbers
- Whether to carry **graded / WATA** inventory — affects photography + tone (finding **10** warns leading with slabs)

---

## 9. Metrics to watch post-launch

| Metric                                            | Tool                    |
| ------------------------------------------------- | ----------------------- |
| GBP insights — searches / directions / calls      | Google Business Profile |
| Organic queries — branded vs non-branded          | Google Search Console   |
| Event landing traffic + `BEGIN_CHECKOUT` (future) | GA4                     |

Review quarterly; iterate geo pages + event archives based on Search Console queries.
