/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "c10.patreonusercontent.com",
      },
    ],
  },
  turbopack: {
    root: "C:/Users/VASAVA CHIRAG/Downloads/College/Online_Learning/Sigma_Course/Projects/Project_7/get-me-a-chai",
  },
};
export default nextConfig;
