/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
    IMAGE_DOMAIN: process.env.IMAGE_DOMAIN,
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    IMAGE_DOMAIN: process.env.IMAGE_DOMAIN
  },
  images: {
    // path: '/_next/image',
    loader: 'default',
    domains: [process.env.IMAGE_DOMAIN]
  }
}

module.exports = nextConfig
