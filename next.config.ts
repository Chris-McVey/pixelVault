import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/contact", destination: "/about", permanent: true },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.pixelvaultontario.com" }],
        destination: "https://pixelvaultontario.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
