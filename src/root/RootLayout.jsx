import React from "react";
import { Outlet } from "react-router-dom";
import HeaderNav from "../components/HeaderNav";

function RootLayout() {
  return (
    <div>
      <HeaderNav />

      <Outlet />
    </div>
  );
}

export default RootLayout;
