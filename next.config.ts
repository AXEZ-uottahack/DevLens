import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  root: true,
  extends: ['eslint-config-custom/base'],
  env: {
    API_KEY: process.env.API_KEY,
  },
};

export default nextConfig;
