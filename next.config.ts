import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Ignore typings validation checks during production builds
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignore linting rules (like unused vars) during production builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
