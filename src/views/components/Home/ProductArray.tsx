import React from "react";
import { ProductCard } from "../common/ProductCard";

export const ProductArray = ({ products }: { products: IProduct[] }) => {
  const onClick = (id: string | undefined): void => {};
  return (
    <div className="grid grid-cols-4 gap-3">
      {products.map((product) => (
        <ProductCard product={product} onclick={onClick} />
      ))}
    </div>
  );
};
