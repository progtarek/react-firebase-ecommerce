import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { NavMenu } from "./NavMenu.component";

const Layout = () => {
  return (
    <Fragment>
      <NavMenu />
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
};

export default Layout;
