/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/store",
        permanent: true,
      },
    ];
  },
  reactStrictMode: false,
  env: {
    MERCHANT_API_KEY:
      "8d18bf36bed72cab8a4e66e94eadd3bea2f61958acd7df8fc6328213b452c295",
  },
};

export default nextConfig;
