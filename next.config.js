const withImages = require('next-images')

const nextConfig = withImages({
  reactStrictMode: true,
  swcMinify: true,
  images: { domains: ['assets.pokemon.com'] },
})

module.exports = nextConfig
