/**
 * @typedef {('local' | 'staging' | 'development' | 'production')} EnvVars

 * @typedef {Object} EnvVars
 * @property {string} [assetPrefix]
 * @property {string} [basePath]
 * @property {string} [appUrl]
 * @property {string} [apiUrl]
 */

/**
 * @type {EnvVars}
 */
const env = {
  local: {
    assetPrefix: undefined,
    basePath: undefined,
    appUrl: 'http://localhost:3000',
    apiUrl: 'http://localhost:8000/api/graphix-collab'
  },
  development: {
    assetPrefix: '.',
    basePath: '/crealgo',
    appUrl: 'https://projects.crealgo.com/graphixcollab',
    apiUrl: 'https://api.crealgo.com/api/graphix-collab'
  },
  staging: {
    assetPrefix: '.',
    basePath: undefined,
    appUrl: 'https://beta.graphixcollab.com',
    apiUrl: 'https://api.crealgo.com/api/graphix-collab'
  },
  production: {
    assetPrefix: '.',
    basePath: '',
    appUrl: 'https://graphixcollab.com',
    apiUrl: 'https://api.crealgo.com/api/graphix-collab'
  }
}[process.env.APP_ENV ?? 'local'];

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
  assetPrefix: env.assetPrefix,
  basePath: env.basePath,
  env: {
    ...env
  }
};

export default nextConfig;
