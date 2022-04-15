import React from "react";
import ProductService from "apis/Product.Service";
import useAPI from "hooks/useAPI";
import { BannerSlider } from "views/components/custom/BannerSlider";
import { ProductArray } from "views/components/Home/ProductArray";

const Home = () => {
  const { data: products } = useAPI<IProduct[]>(ProductService.getAllProducts);
  return (
    <div>
      <div className="px-2 py-10">
        <BannerSlider />
      </div>
      <div>{products && <ProductArray products={products} />}</div>
    </div>
  );
};

export default Home;
