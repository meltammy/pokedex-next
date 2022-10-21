const withImages = require('next-images');

const nextConfig = withImages({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'assets.pokemon.com',
      'media.tenor.com',
      'raw.githubusercontent.com',
    ],
  },
})

module.exports = nextConfig
