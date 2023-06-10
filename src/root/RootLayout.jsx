import React from "react";
import { Outlet } from "react-router-dom";
import HeaderNav from "../components/header/HeaderNav";
import HeaderPopUp from "../components/header/HeaderPopUp";

function RootLayout() {
  return (
    <div>
      <HeaderPopUp />
      <HeaderNav />
      <Outlet />
    </div>
  );
}

export default RootLayout;
