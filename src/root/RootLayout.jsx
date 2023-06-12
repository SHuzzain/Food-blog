import React from "react";
import { Outlet } from "react-router-dom";
import HeaderNav from "../components/header/HeaderNav";
import HeaderPopUp from "../components/header/HeaderPopUp";
import Footer from "../components/home/Footer/Footer";
function RootLayout() {
  return (
    <div>
      <HeaderPopUp />
      <HeaderNav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default RootLayout;
