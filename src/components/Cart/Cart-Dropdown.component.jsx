import React, { useContext } from "react";
import { Button } from "../../components/Button/Button.component";
import { CartContext } from "../../contexts/cart.context";

export const CartDropdown = () => {
  const cartContext = useContext(CartContext);

  return (
    <div
      className="shopping-cart-container"
      style={{
        display: cartContext.isCartDropdownOpen ? "flex" : "none",
      }}
    >
      <Button type="button" theme="dark">
        Go to checkout page
      </Button>
      <Button type="button" theme="dark">
        Go to checkout page
      </Button>
    </div>
  );
};
