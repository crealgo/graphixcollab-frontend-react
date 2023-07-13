/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  webpack: config => {
    // eslint-disable-next-line
		config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    // Unset client-side javascript that only works server-side
    config.resolve.fallback = { fs: false, module: false, path: false };

    // eslint-disable-next-line
		return config;
  },
  assetPrefix: process.env.ASSET_PREFIX,
  basePath: process.env.BASE_PATH
};

export default nextConfig;
