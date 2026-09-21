import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fastpix.vplushort.com',
      },
    ],
  },
};

export default nextConfig;