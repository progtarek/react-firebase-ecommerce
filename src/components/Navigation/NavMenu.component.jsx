import React from "react";
import { Link } from "react-router-dom";
import "./NavMenu.component.module.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";

export const NavMenu = () => {
  return (
    <nav>
      <Link to="/">
        <Logo />
      </Link>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
      </div>
    </nav>
  );
};
