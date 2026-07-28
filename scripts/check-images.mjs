// Checks every product image URL in utils/products.json and points any
// dead ones (non-200 responses) at the local placeholder.
// Run from the project root:  node scripts/check-images.mjs
import { readFile, writeFile } from 'node:fs/promises';

const PLACEHOLDER = '/product-placeholder.svg';
const path = new URL('../utils/products.json', import.meta.url);
const products = JSON.parse(await readFile(path, 'utf8'));

let patched = 0;
for (const p of products) {
  if (!p.image.startsWith('http')) continue; // already local
  try {
    const res = await fetch(p.image, { method: 'HEAD' });
    if (!res.ok) throw new Error(res.status);
    console.log(`ok      #${p.id} ${p.image}`);
  } catch (err) {
    console.log(`DEAD    #${p.id} ${p.image} (${err.message})`);
    p.image = PLACEHOLDER;
    patched++;
  }
}

if (patched) {
  await writeFile(path, JSON.stringify(products, null, 1));
  console.log(`\nPatched ${patched} dead image(s) → ${PLACEHOLDER}`);
} else {
  console.log('\nAll image URLs are alive. No changes made.');
}
