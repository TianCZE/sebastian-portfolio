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
                hostname: 'file.rendit.io',
                port: '',
                pathname: '/n/fOSe8IhnB4LMY7ixbxk3.png',
            },
        ],
    },}

module.exports = nextConfig
