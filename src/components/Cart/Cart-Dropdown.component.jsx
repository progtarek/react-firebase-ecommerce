import React, { useContext } from "react";
import { Button } from "../../components/Button/Button.component";
import { CartContext } from "../../contexts/cart.context";
import { CartItem } from "./Cart-Item.component";

export const CartDropdown = () => {
  const cartContext = useContext(CartContext);

  return (
    <div
      className="shopping-cart-container"
      style={{
        display: cartContext.isCartDropdownOpen ? "flex" : "none",
      }}
    >
      <div className="cart-items-container" style={{ overflow: "auto" }}>
        {cartContext.cartItems?.length ? (
          cartContext.cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))
        ) : (
          <p style={{ textAlign: "center" }}>Your cart is empty</p>
        )}
      </div>
      <Button type="button" theme="dark" style={{ marginTop: "1rem" }}>
        Go to checkout page
      </Button>
    </div>
  );
};
