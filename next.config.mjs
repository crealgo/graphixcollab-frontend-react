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

    // Unset client-side javascript that only works server-side
    config.resolve.fallback = {fs: false, module: false, path: false};

    return config;
  },
  ...(process.env.NODE_ENV === 'staging' && {
    basePath: '/graphixcollab',
    images: {
      unoptimized: true
    }
  }),
  ...(process.env.NODE_ENV === 'prod' && {
    basePath: '/graphixcollab',
    images: {
      unoptimized: true
    }
  })
};

export default nextConfig;
