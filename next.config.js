/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.crunchyroll.com"
            }
        ]
    },
    experimental:{
        serverActions: true,
    }
}

module.exports = nextConfig
