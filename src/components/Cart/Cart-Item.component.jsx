import React from "react";
import "./cart.styles.scss";

export const CartItem = ({ name, price, quantity, imageUrl }) => {
  return (
    <div className="cart-item-container">
      <div className="cart-item-img">
        <img src={imageUrl} width="50px" alt={name} />
      </div>
      <div className="cart-item-content">
        <h4>{name}</h4>
        <p>
          {quantity} X {price}
        </p>
      </div>
    </div>
  );
};
