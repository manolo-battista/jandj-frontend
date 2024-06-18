/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    redirects() {
        return [{ source: "/", destination: "/auth/signin", permanent: false }];
    },
    async rewrites() {
        return [{ source: "/next/api/:path*", destination: "/api/:path*" }];
    },
    output: "standalone",
    webpack: config => {
        config.resolve.fallback = { fs: false, os: false, path: false };
        return config;
    },
};

export default nextConfig;
