import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // @ts-ignore - Turbopack root configuration for Next.js 16+
  turbopack: {
    root: path.join(process.cwd()),
  },
};

export default nextConfig;
