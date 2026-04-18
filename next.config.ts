import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // basePath for GitHub Pages subdirectory
  basePath: "/lsrbuildingv2",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
