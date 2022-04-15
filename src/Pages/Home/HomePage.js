import React from "react";
import { Link, Outlet } from "react-router-dom";
import ChefDetails from "../ChefDetails/ChefDetails";
import Banner from "./Banner/Banner";

const HomePage = () => {
  return (
    <>
      <Banner />
      <nav className="home-navbar mt-10 text-center">
        <Link to="breakfast">BreakFast</Link>
        <Link to="lunch">Lunch</Link>
        <Link to="dinner">Dinner</Link>
      </nav>
      <Outlet />
      <ChefDetails />
    </>
  );
};

export default HomePage;
