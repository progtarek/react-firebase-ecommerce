import React, { Fragment, useContext } from "react";
import { CheckoutItem } from "../components/Cart/Checkout-item.component";
import "./checkout.styles.scss";
import { CartContext } from "../contexts/cart.context";
import { Button } from "../components/Button/Button.component";

export const Checkout = () => {
  const cartContext = useContext(CartContext);
  const onIncrementItemQuantity = (item) => {
    cartContext.incrementItemQuantity(item.id);
  };
  const onDecrementItemQuantity = (item) => {
    cartContext.decrementItemQuantity(item.id);
  };
  const onRemoveItem = (item) => {
    cartContext.removeItem(item.id);
  };

  const calculateTotalCart = () => {
    return cartContext.cartItems.reduce((prev, current) => {
      return prev?.quantity
        ? prev.quantity * prev.price
        : prev + current.quantity * current.price;
    }, 0);
  };

  return (
    <Fragment>
      {cartContext.cartItems.length ? (
        <div className="container checkout-container">
          <div className="checkout-header">
            <p>Product</p>
            <p>Description</p>
            <p>Quantity</p>
            <p>Price</p>
            <p>Sub-total Price</p>
            <p>Remove</p>
          </div>
          <div className="checkout-body">
            {cartContext.cartItems.map((item) => (
              <CheckoutItem
                {...item}
                key={item.id}
                onIncrement={() => onIncrementItemQuantity(item)}
                onDecrement={() => onDecrementItemQuantity(item)}
                onRemove={() => onRemoveItem(item)}
              />
            ))}
          </div>
          <div className="checkout-footer">
            <h2>Total: ${calculateTotalCart()} </h2>
            <Button type="button" theme="primary">
              Checkout
            </Button>
          </div>
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h2>Don't have items, Add items to continue</h2>
        </div>
      )}
    </Fragment>
  );
};
