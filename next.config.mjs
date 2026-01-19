/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ['lucide-react', 'date-fns', 'clsx', 'tailwind-merge'],
    images: {
        domains: ['images.unsplash.com'],
    },
};

export default nextConfig;
