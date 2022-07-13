import React, { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./NavMenu.component.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";
import { UserContext } from "../../contexts/user.context";
import { logoutCurrentUser } from "../../utils/firebase.util";
import { CartContext } from "../../contexts/cart.context";
import { CartDropdown } from "../Cart/Cart-Dropdown.component";

export const NavMenu = () => {
  const userContext = useContext(UserContext);
  const cartContext = useContext(CartContext);
  const wrapperRef = useRef(null);

  const onLogout = async () => {
    await logoutCurrentUser();
    userContext.setCurrentUser(null);
  };

  const calcItemsQuantity = () => {
    return cartContext.cartItems
      .map((item) => item.quantity)
      .reduce((prev, current) => prev + current, 0);
  };

  useEffect(() => {
    const handleClickOutside = function (event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        cartContext.setDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, [cartContext]);

  return (
    <nav className="container">
      <Link to="/">
        <Logo />
      </Link>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        {userContext.currentUser ? (
          <span onClick={onLogout}>Logout</span>
        ) : (
          <Link to="/login">Login</Link>
        )}
        <div className="shopping-bag-container" ref={wrapperRef}>
          <div
            className="cart-trigger"
            onClick={() =>
              cartContext.setDropdown(!cartContext.isCartDropdownOpen)
            }
          >
            <ShoppingBag />
            <div className="counter">{calcItemsQuantity()}</div>
          </div>
          <CartDropdown />
        </div>
      </div>
    </nav>
  );
};
