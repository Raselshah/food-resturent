import React from "react";
import { Outlet } from "react-router-dom";
import ChefDetails from "../ChefDetails/ChefDetails";
import CustomLink from "../CustomLink/CustomLink";
import Footer from "../Footer/Footer";
import Banner from "./Banner/Banner";

const HomePage = () => {
  return (
    <>
      <Banner />
      <nav className="home-navbar mt-10 text-center">
        <CustomLink to="breakfast">BreakFast</CustomLink>
        <CustomLink to="lunch">Lunch</CustomLink>
        <CustomLink to="dinner">Dinner</CustomLink>
      </nav>
      <Outlet />
      <ChefDetails />
    </>
  );
};

export default HomePage;
