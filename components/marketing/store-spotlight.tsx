import Image, { type StaticImageData } from "next/image";
import gamesInCase from "@/assets/gamesInCase.jpeg";
import consolesControllers from "@/assets/consolesAndControllers.jpeg";
import storeDisplay from "@/assets/storeDisplay2.jpeg";

const SPOTS: Array<{
  src: StaticImageData;
  alt: string;
  body: string;
  wide?: boolean;
}> = [
  {
    src: gamesInCase,
    alt: "Store display case with NES games",
    body:
      'We buy, sell, and trade everything from the Magnavox Odyssey to the Xbox Series X. Bring in your old games and find a "new" favorite.',
  },
  {
    src: consolesControllers,
    alt: "Store display case with boxed consoles and controllers",
    body:
      "Have a dead console? Broken retro controller or a modern controller with stick drift? Bring it in, chances are we can fix it!",
  },
  {
    src: storeDisplay,
    alt: "In-store display depicting scene with Mario, Link, and other video game characters",
    body:
      "Pixel Vault Games has been the Inland Empire's favorite spot for all things retro games since 2014. We are a family owned and family friendly shop that strives to make you feel welcome, comfortable, and nostalgiac for the good old days.",
    wide: true,
  },
];

export function StoreSpotlight() {
  return (
    <section className="border-t border-white/10 bg-gradient-to-b from-black/25 to-transparent py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Inside the shop
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {SPOTS.map((spot) => (
            <article key={spot.alt} className={spot.wide ? "md:col-span-2" : undefined}>
              <div
                className={`relative w-full overflow-hidden rounded-2xl border border-[var(--brand)]/20 bg-black/30 shadow-xl shadow-black/40 ${
                  spot.wide ? "aspect-[21/9] max-h-[420px]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={spot.src}
                  alt={spot.alt}
                  fill
                  sizes={
                    spot.wide
                      ? "(max-width: 768px) 100vw, 896px"
                      : "(max-width: 768px) 100vw, 50vw"
                  }
                  className="object-cover"
                  suppressHydrationWarning
                />
              </div>
              <p className="mt-5 text-sm leading-relaxed text-zinc-400">{spot.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
