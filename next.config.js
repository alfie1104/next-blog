/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const nextConfig = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: process.env.mongodb_username,
        mongodb_password: process.env.mongodb_password,
        mongodb_clustername: process.env.mongodb_clustername,
        mongodb_database: process.env.mongodb_database,
      },
    };
  }

  return {
    reactStrictMode: true,
    env: {
      mongodb_username: process.env.mongodb_username,
      mongodb_password: process.env.mongodb_password,
      mongodb_clustername: process.env.mongodb_clustername,
      mongodb_database: process.env.mongodb_database,
    },
  };
};

module.exports = nextConfig;
