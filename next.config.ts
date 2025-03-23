/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // If you're using experimental features, you might need to update them:
    experimental: {
        // Update or remove any experimental features that are no longer supported
    },
    // If you're using image optimization:
    images: {
        domains: [],
        // Next.js 15 might use a different image configuration
    },
}

module.exports = nextConfig