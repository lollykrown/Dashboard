This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Product data

Product data lives in `utils/products.json` (static, no runtime API calls). Two helper scripts manage it:

```bash
# Switch the dataset to DummyJSON (stable CDN-hosted images) — recommended
node scripts/fetch-products.mjs

# Optional variants
node scripts/fetch-products.mjs --limit 20
node scripts/fetch-products.mjs --category furniture   # e.g. beauty, fragrances, groceries

# Health-check the current image URLs and patch any dead ones to the local placeholder
node scripts/check-images.mjs
```

Remote images fall back to `/product-placeholder.svg` automatically if they ever fail to load (see `components/ProductImage.js`). Once `fetch-products.mjs` has been run, the legacy `fakestoreapi.com` entry in `next.config.mjs` can be removed.
