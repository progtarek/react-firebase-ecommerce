import React from "react";
import "./cart.styles.scss";

export const CheckoutItem = ({
  imageUrl,
  name,
  price,
  quantity,
  onIncrement,
  onDecrement,
  onRemove,
}) => {
  return (
    <div className="checkout-item-container">
      <div
        className="img"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <h5 className="name">{name}</h5>
      <div className="quantity">
        <div className="increment" onClick={onIncrement}>
          +
        </div>
        <div>{quantity}</div>
        <div className="decrement" onClick={onDecrement}>
          -
        </div>
      </div>
      <p>{price}</p>
      <p>{price * quantity}</p>
      <b className="remove" onClick={onRemove}>
        X
      </b>
    </div>
  );
};
