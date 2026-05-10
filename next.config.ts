import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // In Next.js, allowing all hosts is usually handled by the proxy or binding to 0.0.0.0
  // but we can add experimental features if needed. For now, 0.0.0.0 should suffice.
};

export default nextConfig;
