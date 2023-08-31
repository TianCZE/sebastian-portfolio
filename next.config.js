/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'thoughtless-shoe.pockethost.io',
                port: '',
                pathname: '/api/**',
            },
            {
                protocol: 'https',
                hostname: 'tecdn.b-cdn.net',
                port: '',
                pathname: '/img/**',
            }
        ],
    },}

module.exports = nextConfig
