import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} – retro games in Ontario, CA`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(145deg, #151922 0%, #0b0d12 55%, #1a1408 100%)",
          color: "#f4f4f5",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#f5c542",
          }}
        >
          Retro games · Ontario, CA
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.05,
            marginTop: 16,
            maxWidth: 900,
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            lineHeight: 1.4,
            marginTop: 24,
            color: "#a1a1aa",
            maxWidth: 820,
          }}
        >
          Buy, sell, trade, and repair. Walk in and see what is on the shelf.
        </div>
      </div>
    ),
    { ...size },
  );
}
