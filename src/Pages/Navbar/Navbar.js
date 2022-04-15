import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/logo2.png";
import "./Navbar.module.css";

const Navbar = () => {
  const [user, loading] = useAuthState(auth);
  const logOut = () => {
    signOut(auth);
  };
  return (
    <div className="flex justify-around items-center h-20">
      <div className="logo-area">
        <img className="h-12" src={logo} alt="" />
      </div>
      <nav className="">
        <Link to="/">Home</Link>
        <Link to="/order">Icon</Link>
        {user ? (
          <Link onClick={logOut} to="/signup">
            Log Out
          </Link>
        ) : (
          <Link to="/login">Log In</Link>
        )}
        <Link to="/signup">Sign Up</Link>
      </nav>
    </div>
  );
};

export default Navbar;
