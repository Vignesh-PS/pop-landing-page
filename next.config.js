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
        afterFiles: [
            {
                source: '/map/_next/:path*',
                destination: '/_next/:path*',
            },
            {
                source: '/map/static/:path*',
                destination: '/static/:path*',
            },
            {
                source: '/map/data/:path*',
                destination: '/data/:path*',
            },
            {
                source: '/map/favicon.ico',
                destination: '/favicon.ico',
            },
        ],
      };
    },
    
    async headers() {
        return [
          {
            source: '/map/:path*',
            headers: [
              {
                key: 'Access-Control-Allow-Origin',
                value: 'https://map.proofofpassport.com',
              },
            ],
          },
        ];
      },
  };
  
  module.exports = nextConfig;