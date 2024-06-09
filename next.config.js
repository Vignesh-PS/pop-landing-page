/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites() {
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
        ]
    }
  }
}

module.exports = nextConfig