import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Local placeholder art (profile/certificates/video poster) ships as SVG.
    // Safe here because it's only ever served from our own /public folder.
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
