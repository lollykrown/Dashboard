'use client'
import React, { useState } from 'react'
import Image from 'next/image';

const PLACEHOLDER = '/product-placeholder.svg';

// next/image wrapper that falls back to a local placeholder when the
// remote image (e.g. fakestoreapi) 404s or fails to load.
const ProductImage = ({ src, alt = 'product', ...props }) => {
  const [imgSrc, setImgSrc] = useState(src || PLACEHOLDER);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc(PLACEHOLDER)}
    />
  );
};

export default ProductImage;
