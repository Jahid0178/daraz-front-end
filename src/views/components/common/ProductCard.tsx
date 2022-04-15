import React from "react";

export const ProductCard = ({
  product,
  onclick,
}: {
  product: IProduct;
  onclick: (id: string | undefined) => void;
}) => {
  const id = "";
  return (
    <>
      <div className="hover:shadow-lg" onClick={() => onclick(id)}>
        <div>
          <img src="" alt="Product Images" />
        </div>
        <div className="p-2">
          <h4>Product Title</h4>
          <p className="text-orange-500">
            <span>$</span>Product Price
          </p>
          <p className="text-xs">
            <span className="text-gray-400 line-through">Original Price</span>
            &#160;
            <span>Savings</span>
          </p>
        </div>
      </div>
    </>
  );
};
