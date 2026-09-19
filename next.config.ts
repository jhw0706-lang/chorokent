import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@phosphor-icons/react"],
  },
  async redirects() {
    return [
      {
        source: "/services/tinnitus",
        destination: "/services/hearing-loss",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
