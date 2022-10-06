import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import NavBar from "../components/Nav/NavBar";
import FooterScreen from "./FooterScreen";

const HomeScreen = () => {
  return (
    <div>
      <NavBar></NavBar>

      <Outlet></Outlet>
      <FooterScreen></FooterScreen>
    </div>
  );
};

export default HomeScreen;
