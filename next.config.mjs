/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    domains: [
      "d1e2y5wc27crnp.cloudfront.net",
      "dailyshot.co", // 추가된 도메인
    ],
  },
};

export default nextConfig;
