import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure image domains to allow loading images from v0.blob.com
  images: {
    domains: ["v0.blob.com"],
  },

  // Add any future configuration options here
  // For example, if you need to add redirects, rewrites, or other Next.js features
};

export default nextConfig;
