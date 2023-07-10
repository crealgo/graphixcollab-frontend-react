/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    // Unset client-side javascript that only works server-side
    config.resolve.fallback = { fs: false, module: false, path: false };

    return config;
  },
  env: {
    apiUrl:
      process.env.NODE_ENV === 'production'
        ? 'https://api.crealgo.com'
        : 'http://localhost:3000'
  }
};

export default nextConfig;
