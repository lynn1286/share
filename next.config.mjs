/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'power-api.cretinzp.com'
      }
    ]
  }
}

export default nextConfig
