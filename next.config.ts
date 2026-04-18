import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // No basePath - V2 is hosted standalone (Vercel, GitHub Pages, etc)
  basePath: "",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
