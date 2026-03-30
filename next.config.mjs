/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/heat6',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
