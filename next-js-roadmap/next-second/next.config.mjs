/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        turbo: true
    },
    images: {
        domains: ["cdn.dummyjson.com"]
    }
};

export default nextConfig;
