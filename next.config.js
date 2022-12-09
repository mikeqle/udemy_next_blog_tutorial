/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: "test",
        mongodb_password: "123",
        mongodb_clustername: "udemy-next.m9tdv89.mongodb.net",
        mongodb_database: "my-site-dev",
      },
    };
  }

  return {
    reactStrictMode: true,
    env: {
      mongodb_username: "test",
      mongodb_password: "123",
      mongodb_clustername: "udemy-next.m9tdv89.mongodb.net",
      mongodb_database: "my-site",
    },
  };
};
