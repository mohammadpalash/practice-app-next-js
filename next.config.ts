import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
 images: {
    remotePatterns: [new URL('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1974&auto=format&fit=crop')],
  },

  /* config options here */
};

export default nextConfig;
