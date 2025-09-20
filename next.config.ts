import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(process.cwd(), "src")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/PokeAPI/sprites/**",
      },
      {
        protocol: "https",
        hostname: "tenor.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media.tenor.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
