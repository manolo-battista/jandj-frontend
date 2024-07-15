/** @type {import('next').NextConfig} */
const nextConfig = {
    // false to disable strict mode and work with dnd library
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
