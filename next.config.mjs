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
