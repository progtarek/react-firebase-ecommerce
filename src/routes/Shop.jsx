import React, { useContext } from "react";
import { ProductCard } from "../components/Product/ProductCard";
import "./shop.scss";
import { ProductContext } from "../contexts/product.context";
import { CartContext } from "../contexts/cart.context";

export const Shop = () => {
  const productContext = useContext(ProductContext);
  const cartContext = useContext(CartContext);

  const onAddItemToCart = (item) => {
    cartContext.addItemToCart(item);
  };

  const {
    products: { products: productsList },
  } = productContext;
  return (
    <div className="container ">
      <div className="category-container">
        {productsList.map((item) => (
          <ProductCard
            {...item}
            key={item.id}
            addToCart={() => onAddItemToCart(item)}
          />
        ))}
      </div>
    </div>
  );
};
