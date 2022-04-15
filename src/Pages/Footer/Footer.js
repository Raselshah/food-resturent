import React from "react";
import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <div className="bg-stone-800 h-full mt-16">
      <div className="h-full w-2/3 m-auto grid grid-cols-2 justify-around items-center">
        <div className="footer-logo">
          <img className="w-36" src={logo} alt="" />
        </div>
        <div className="footer-info grid grid-cols-2">
          <div className="text-white mt-12">
            <span className="block">About food-restaurant </span>
            <span className="block">Read our Blog </span>
            <span className="block">Sign up to Delivery </span>
            <span className="block">Add your restaurant </span>
          </div>
          <div className="text-white mt-12">
            <span className="block">Get help </span>
            <span className="block">Read FAQs</span>
            <span className="block">View all cites </span>
            <span className="block">Restaurant near me </span>
          </div>
        </div>
      </div>
      <div className="footer-bottom w-full flex justify-around mt-20">
        <p>
          <small className="text-stone-400">
            copyright &copy; 2022 food-restaurant
          </small>
        </p>
        <div className="terms text-white">
          <span className="px-4">Privacy Policy</span>
          <span className="px-4">Terms of use</span>
          <span className="px-4">Pricing</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
