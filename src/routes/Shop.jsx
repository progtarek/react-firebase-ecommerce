import React from "react";
import { ProductCard } from "../components/Product/ProductCard";
import SHOP_DATA from "../shop-data.json";
import "./shop.scss";

export const Shop = () => {
  return (
    <div className="container ">
      <div className="category-container">
        {SHOP_DATA.map((item) => (
          <ProductCard {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
