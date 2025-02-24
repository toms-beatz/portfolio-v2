import { dom } from './node_modules/@fortawesome/fontawesome-svg-core/index.d';
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
            },
        ],
        domains: ['localhost', 'admin.thomas-mazeau.com'],
    },
    experimental: {
        webpackMemoryOptimizations: true
    }
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)


export default nextConfig;
