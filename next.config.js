/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const nextConfig = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: "nextjs",
        mongodb_password: "test",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-site-dev",
      },
    };
  }

  return {
    reactStrictMode: true,
    env: {
      mongodb_username: "nextjs",
      mongodb_password: "test",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-site",
    },
  };
};

module.exports = nextConfig;
