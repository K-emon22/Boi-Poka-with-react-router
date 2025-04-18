import React from "react";
import {Outlet} from "react-router";
import Footer from "../HomePage/Footer/Footer";
import NavBar from "../HomePage/NavBar/NavBar";

const Root = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <NavBar> </NavBar>

      <Outlet></Outlet>

      <Footer> </Footer>
    </div>
  );
};

export default Root;
