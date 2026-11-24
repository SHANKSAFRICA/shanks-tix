import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@shankstix/ui'],
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    remotePatterns: [
      // Event banners, avatars and uploads live on Cloudinary.
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      // Placeholder photos for sample data until the API is connected.
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  turbopack: {
    rules: {
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css',
      },
    },
  },
};

export default nextConfig;
