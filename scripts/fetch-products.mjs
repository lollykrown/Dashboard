// Regenerates utils/products.json from DummyJSON (https://dummyjson.com),
// mapping fields to the shape the app already uses so no component changes
// are needed. Run from the project root:
//
//   node scripts/fetch-products.mjs
//
// Options:
//   node scripts/fetch-products.mjs --limit 20
//   node scripts/fetch-products.mjs --category furniture
import { writeFile } from 'node:fs/promises';

const args = process.argv.slice(2);
const getArg = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i !== -1 && args[i + 1] ? args[i + 1] : fallback;
};

const limit = getArg('limit', '20');
const category = getArg('category', null);

const url = category
  ? `https://dummyjson.com/products/category/${category}?limit=${limit}`
  : `https://dummyjson.com/products?limit=${limit}`;

console.log(`Fetching ${url} ...`);
const res = await fetch(url);
if (!res.ok) {
  console.error(`Request failed: ${res.status} ${res.statusText}`);
  process.exit(1);
}
const { products } = await res.json();

if (!products?.length) {
  console.error('No products returned — check the category name.');
  process.exit(1);
}

// Map DummyJSON shape -> the shape this app uses (same as the old data)
const mapped = products.map((p, i) => ({
  id: i + 1,
  title: p.title,
  price: p.price,
  description: p.description,
  category: p.category,
  image: p.thumbnail, // cdn.dummyjson.com — stable CDN
  rating: {
    rate: typeof p.rating === 'number' ? p.rating : 4.0,
    count: p.stock ?? 100,
  },
}));

const path = new URL('../utils/products.json', import.meta.url);
await writeFile(path, JSON.stringify(mapped, null, 1));
console.log(`Wrote ${mapped.length} products to utils/products.json`);
console.log('Image host: cdn.dummyjson.com (already allowed in next.config.mjs)');
