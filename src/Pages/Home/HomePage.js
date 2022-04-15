import React from "react";
import { Link, Outlet } from "react-router-dom";
import Banner from "./Banner/Banner";

const HomePage = () => {
  return (
    <>
      <Banner />
      <nav className="home-navbar mt-10">
        <Link to="breakfast">BreakFast</Link>
        <Link to="lunch">Lunch</Link>
        <Link to="dinner">Dinner</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default HomePage;
