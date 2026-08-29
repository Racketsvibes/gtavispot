import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    formats: ['image/webp'],
    deviceSizes: [375, 480, 768, 1024, 1280, 1536, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  poweredByHeader: false,
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
  async redirects() {
    return [
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
  async rewrites() {
    return [
      {
        source: '/gta-6-gameplay/',
        destination: '/news/gta-6-gameplay/',
      },
      {
        source: '/es/gta-6-gameplay/',
        destination: '/es/news/gta-6-gameplay/',
      },
    ];
  },
};

export default nextConfig;
