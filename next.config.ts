import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [375, 480, 768, 1024, 1280, 1536, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },
  poweredByHeader: false,
  // Include article data files in the serverless bundle so getFaqsFromFile()
  // (src/lib/schema.ts) can read them at runtime for FAQPage JSON-LD.
  // Without this, dynamically rendered article pages get no FAQ schema.
  outputFileTracingIncludes: {
    '/news/[slug]': ['./src/data/news/**/*'],
    '/guides/[slug]': ['./src/data/guides/**/*'],
    '/story/[slug]': ['./src/data/story/**/*'],
    '/tech/[slug]': ['./src/data/tech/**/*'],
    '/online/[slug]': ['./src/data/online/**/*'],
    '/compare/[slug]': ['./src/data/compare/**/*'],
    '/world/[slug]': ['./src/data/world/**/*'],
    '/map/[slug]': ['./src/data/map/**/*'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  webpack: (config, { dev }) => {
    if (!dev) {
      config.cache = false;
    }
    return config;
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Permissions-Policy',
            value: 'unload=()',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/news/gta-6-gameplay/',
        destination: '/gta-6-gameplay/',
        permanent: true,
      },
      {
        source: '/es/news/gta-6-gameplay/',
        destination: '/es/gta-6-gameplay/',
        permanent: true,
      },
      {
        source: '/news/gta-6-timeline/',
        destination: '/gta-6-timeline/',
        permanent: true,
      },
      {
        source: '/es/news/gta-6-timeline/',
        destination: '/es/gta-6-timeline/',
        permanent: true,
      },
      {
        source: '/news/gta-6-vehicles/',
        destination: '/vehicles/',
        permanent: true,
      },
      // Orphan page redirects — 301 permanent
      {
        source: '/gallery/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/assistant/',
        destination: '/faq/',
        permanent: true,
      },
      {
        source: '/newswire/',
        destination: '/news/',
        permanent: true,
      },
      {
        source: '/newswire/:path*',
        destination: '/news/',
        permanent: true,
      },
      {
        source: '/businesses/:path*',
        destination: '/map/',
        permanent: true,
      },
      {
        source: '/locations/:path*',
        destination: '/map/',
        permanent: true,
      },
      {
        source: '/relationships/',
        destination: '/story/',
        permanent: true,
      },
      {
        source: '/characters/:path*',
        destination: '/story/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
