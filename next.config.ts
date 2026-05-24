import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** Hide floating route indicator in dev; error overlays still appear when needed */
  devIndicators: false,
  images: {
    /** Must list every `quality` prop used on next/image (Next.js 15+ dev issue) */
    qualities: [75, 82, 85],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
