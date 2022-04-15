import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo2.png";
import "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className="flex justify-around items-center h-20">
      <div className="logo-area">
        <img className="h-12" src={logo} alt="" />
      </div>
      <nav className="">
        <Link to="/order">Icon</Link>
        <Link to="/login">Log In</Link>
        <Link to="/signup">Sign Up</Link>
      </nav>
    </div>
  );
};

export default Navbar;
