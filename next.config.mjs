/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'cdn.dummyjson.com',
          pathname: '**',
        },
        {
          // legacy — safe to remove once utils/products.json no longer
          // references fakestoreapi (run: node scripts/fetch-products.mjs)
          protocol: 'https',
          hostname: 'fakestoreapi.com',
          pathname: '**',
        },
      ],
    },
    async redirects() {
      return [
        {
          source: '/e-commerce',
          destination: '/',
          permanent: true,
        }
      ]
    },
};

export default nextConfig;
