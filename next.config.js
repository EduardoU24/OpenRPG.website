/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    fontLoaders: [
      { loader: 'next/font/google', options: { subsets: ['latin'] } },
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  async redirects() {
    return [
      {
        source: "/tos",
        destination: "https://github.com/OpenDNDApps/OpenRPG.client/blob/main/LICENSE",
        permanent: false,
      },
      {
        source: "/github",
        destination: "https://github.com/OpenDNDApps",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
