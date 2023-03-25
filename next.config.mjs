import process from 'process';

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  },
  ...(process.env.NODE_ENV === 'production' && {
    basePath: '/projects/fashiongreek',
    images: {
      unoptimized: true
    }
  })
};

export default nextConfig;
