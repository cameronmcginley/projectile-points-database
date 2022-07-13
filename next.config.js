/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable top-level-await
  webpack: (config) => {
    if (!config.experiments) {
      config.experiments = {};
    }
    config.experiments.topLevelAwait = true;
    return config;
  },
};

module.exports = nextConfig;
