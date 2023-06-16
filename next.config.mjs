// import { sharpImageLoader } from './plugins/sharp-image-loader';
import fs from 'fs';
import path from 'path';

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
  }
};

export default nextConfig;
