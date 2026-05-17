import Image from "next/image";
import mainLogo from "@/assets/mainLogo.png";
import { site } from "@/lib/site";

/**
 * Logo slot reserves width from the PNG aspect ratio × header/footer height so layout stays stable
 * beside the Ontario tagline. `suppressHydrationWarning` covers extension-tweaked `<img>` attrs.
 */
export function BrandLogo({ variant }: { variant: "header" | "footer" }) {
  const heightClass =
    variant === "header" ? "h-11 sm:h-12" : "h-8 sm:h-9";

  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-md bg-white/5 ${heightClass}`}
      style={{ aspectRatio: `${mainLogo.width} / ${mainLogo.height}` }}
    >
      <Image
        src={mainLogo}
        alt={variant === "header" ? `${site.name} logo` : ""}
        fill
        className="object-contain object-left"
        sizes={
          variant === "header"
            ? "(max-width: 640px) 140px, 180px"
            : "140px"
        }
        priority={variant === "header"}
        suppressHydrationWarning
      />
    </div>
  );
}
