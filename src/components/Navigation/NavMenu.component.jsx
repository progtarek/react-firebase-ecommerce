import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./NavMenu.component.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { UserContext } from "../../contexts/user.context";
import { logoutCurrentUser } from "../../utils/firebase.util";

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
        {userContext.currentUser ? (
          <a onClick={onLogout}>Logout</a>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};
