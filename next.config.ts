/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: true,
    serverActions: {},
  },
  env: {
    // NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
  },
  transpilePackages: ["@mep-agency/next-iubenda"],
  reactStrictMode: true,
  sassOptions: {
    additionalData: ``,
  },
  images: {
    remotePatterns: [
      {
        hostname: "**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload", // Հատուկ պարամետրեր
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin",
          },
          {
            key: "Permissions-Policy",
            value: "geolocation=(), camera=(), microphone=()",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/asphalt-laying",
        destination: "/uslugi/asfaltirovanie-dorog",
        permanent: true,
      },
      {
        source: "/pothole-repair",
        destination: "/uslugi/yamochny-remont",
        permanent: true,
      },
      {
        source: "/chit",
        destination: "/uslugi/blagoustroystvo-territoriy",
        permanent: true,
      },
      {
        source: "/small-areas",
        destination: "/uslugi/asfaltirovanie-dvorov",
        permanent: true,
      },
      {
        source: "/roads-from-scratch",
        destination: "/uslugi/dorozhnye-raboty-pod-klyuch",
        permanent: true,
      },
      {
        source: "/borders",
        destination: "/uslugi/ukladka-trotuarnoy-plitki",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
