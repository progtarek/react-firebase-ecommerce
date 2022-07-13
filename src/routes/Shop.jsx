import React, { useContext } from "react";
import { ProductCard } from "../components/Product/ProductCard";
import "./shop.scss";
import { ProductContext } from "../contexts/product.context";

export const Shop = () => {
  const prouductContext = useContext(ProductContext);
  const {
    products: { products: productsList },
  } = prouductContext;
  return (
    <div className="container ">
      <div className="category-container">
        {productsList.map((item) => (
          <ProductCard {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
