import React from "react";
import { Button } from "../Button/Button.component";
import "./product.scss";

export const ProductCard = ({ name, price, imageUrl }) => {
  return (
    <div
      className="product-card-container"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <h2 className="name">{name}</h2>
      <p className="price">{price}</p>
      <Button type="button" theme="dark">
        Add to cart
      </Button>
    </div>
  );
};
