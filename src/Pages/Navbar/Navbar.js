import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import logo from "../../images/logo2.png";
import CustomLink from "../CustomLink/CustomLink";
import "./Navbar.module.css";

const Navbar = () => {
  const [user, loading] = useAuthState(auth);
  const logOut = () => {
    signOut(auth);
  };
  return (
    <div className="flex justify-around items-center w-full h-20 ">
      <div className="logo-area">
        <img className="h-12" src={logo} alt="" />
      </div>
      <nav className="">
        <CustomLink to="/breakfast">Home</CustomLink>
        <CustomLink to="/order">Icon</CustomLink>
        {user ? (
          <CustomLink onClick={logOut} to="/signup">
            Log Out
          </CustomLink>
        ) : (
          <CustomLink to="/login">Log In</CustomLink>
        )}
        <CustomLink to="/signup">Sign Up</CustomLink>
      </nav>
    </div>
  );
};

export default Navbar;
