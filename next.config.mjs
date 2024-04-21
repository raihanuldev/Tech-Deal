/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'daisyui.com',
        port: '',
        pathname: '/account123/**',
      },
    ],
  },
};

export default nextConfig;
