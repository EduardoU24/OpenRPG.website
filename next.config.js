/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  async redirects() {
    return [
      {
        source: "/tos",
        destination: "https://github.com/OpenRPGApps/OpenRPG.client/blob/main/LICENSE",
        permanent: false,
      },
      {
        source: "/github",
        destination: "https://github.com/OpenRPGApps",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;