/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    domains: [
      "localhost",
      "hypercerts-evaluator.vercel.app",
      "evaluator.hypercerts.org",
    ],
  },
};

export default nextConfig;
