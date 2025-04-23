/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.holisticink.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'instagram.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.cdninstagram.com',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Link',
            value: '<https://tianaleedeangelis.com/:path*>; rel="canonical"'
          },
          {
            key: 'Last-Modified',
            value: new Date().toUTCString()
          },
          {
            key: 'X-Robots-Tag',
            value: 'all'
          },
          {
            key: 'X-Vercel-Cache-Control-Allow-Bot',
            value: 'true'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig 