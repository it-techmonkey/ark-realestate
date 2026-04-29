import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  /** Prevent huge public/ImagesC JPGs from being traced into serverless functions */
  outputFileTracingExcludes: {
    "*": ["public/ImagesC/**/*"],
  },
  images: {
    // Vercel was intermittently failing optimized image responses on live.
    // Serve original image URLs directly to keep all assets visible.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "www.figma.com" },
      { protocol: "https", hostname: "files.alnair.ae" },
    ],
  },
};

export default nextConfig;
