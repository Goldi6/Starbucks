/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "content-prod-live.cert.starbucks.com",
        port: "",
        pathname: "/binary/v2/asset/**",
      },
    ],
  },
};

module.exports = nextConfig;
