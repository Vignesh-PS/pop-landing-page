/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return {
        beforeFiles: [
          {
            source: '/map/:path*',
            has: [
              {
                type: 'host',
                value: 'map.proofofpassport.com',
              },
            ],
            destination: '/:path*',
          },
          {
            source: '/_next/static/:path*',
            has: [
              {
                type: 'host',
                value: 'map.proofofpassport.com',
              },
            ],
            destination: '/_next/static/:path*',
          },
          {
            source: '/static/:path*',
            has: [
              {
                type: 'host',
                value: 'map.proofofpassport.com',
              },
            ],
            destination: '/static/:path*',
          },
        ],
      };
    },
  };
  
  module.exports = nextConfig;