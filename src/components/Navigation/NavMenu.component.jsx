import React from "react";
import { Link } from "react-router-dom";
import "./NavMenu.component.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";

export const NavMenu = () => {
  return (
    <nav className="container">
      <Link to="/">
        <Logo />
      </Link>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};
