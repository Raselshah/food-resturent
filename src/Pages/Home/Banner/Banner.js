import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-bg">
      <div className="search-box text-lg flex items-center justify-center h-full flex-col">
        <h2 className="text-4xl mb-4">Best food waiting for your belly</h2>
        <div className="search-input">
          <input
            className="px-8 py-4 w-96 rounded-full"
            type="search"
            name="search"
            id=""
            placeholder="Search food item"
          />
          <button className="rounded-full text-2xl text-white bg-orange-500 p-2 w-36">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
