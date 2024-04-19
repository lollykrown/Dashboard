/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
      domains: ["res.cloudinary.com", "fakestoreapi.com"],
    },
};

export default nextConfig;
