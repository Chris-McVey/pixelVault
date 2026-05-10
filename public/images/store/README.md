# Store photography (from legacy site)

Copy JPEGs from your **legacy deploy** or backups into this folder using these filenames so `next/image` can pick them up:

| File | Legacy reference (`legacy/webpack-site/client/src/Home.jsx`) |
|------|----------------------------------------------------------------|
| `games-in-case.jpg` | `../assets/gamesInCase.jpeg` — NES display case |
| `consoles-controllers.jpg` | `../assets/consolesAndControllers.jpeg` — boxed consoles & controllers |
| `store-display.jpg` | `../assets/storeDisplay2.jpeg` — character / in-store display |

After adding files, update pages to use `<Image src="/images/store/..." />` instead of illustrations where desired.
