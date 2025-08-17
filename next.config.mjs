/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "via.placeholder.com",
      "images.unsplash.com",
      "images.printingcenterusa.com",
      "images.nextdayflyers.com", // ✅ ADD
      "images.uprinting.com",     // ✅ ADD
      "images.colorfxweb.com",    // ✅ ADD
    ],
  },
};

export default nextConfig;
