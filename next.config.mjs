/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	webpack: config => {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});

		// Unset client-side javascript that only works server-side
		config.resolve.fallback = {fs: false, module: false, path: false};

		return config;
	},
	assetPrefix: import.meta.env.BASE_PATH,
	basePath: import.meta.env.BASE_PATH,
};

export default nextConfig;
