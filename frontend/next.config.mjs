/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	output: 'export',
};

if (process.env.BASE_PATH) {
	nextConfig.assetPrefix = process.env.BASE_PATH;
	nextConfig.basePath = process.env.BASE_PATH;
}

export default nextConfig;
