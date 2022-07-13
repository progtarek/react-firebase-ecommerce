import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./NavMenu.component.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";
import { UserContext } from "../../contexts/user.context";
import { logoutCurrentUser } from "../../utils/firebase.util";
import { Button } from "../../components/Button/Button.component";

export const NavMenu = () => {
  const userContext = useContext(UserContext);
  const onLogout = async () => {
    await logoutCurrentUser();
    userContext.setCurrentUser(null);
  };
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
        <div className="shopping-bag-container">
          <ShoppingBag />
          <div className="counter">10</div>
          <div className="shopping-cart-container">
            <Button type="button" theme="dark">
              Go to checkout page
            </Button>
            <Button type="button" theme="dark">
              Go to checkout page
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
