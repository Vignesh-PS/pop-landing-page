/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return {
        beforeFiles: [
          {
            source: '/:path*',
            has: [
              {
                type: 'host',
                value: 'map.proofofpassport.com',
              },
            ],
            destination: '/map/:path*',
          },
          {
            source: '/map/_next/:path*',
            has: [
              {
                type: 'host',
                value: 'map.proofofpassport.com',
              },
            ],
            destination: '/_next/:path*',
          },
          {
            source: '/map/static/:path*',
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