import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // 85 is used for gallery thumbnails (screenshots with small text)
    qualities: [75, 85]
  }
};

export default nextConfig;
