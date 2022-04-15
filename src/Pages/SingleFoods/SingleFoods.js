import React from "react";
import "./SingleFoods.css";
const SingleFoods = ({ singleFoods, foodsDetails }) => {
  const { id, name, price, description, img } = singleFoods;

  return (
    <div
      onClick={() => foodsDetails(id)}
      className="card text-center hover:shadow-2xl rounded cursor-pointer"
    >
      <div className="card-photo">
        <img src={img} alt="" />
      </div>
      <div className="card-info mt-5">
        <h2 className="text-gray-700">{name.slice(0, 30)}</h2>
        <p className="text-gray-400">{description.slice(0, 25) + "...."}</p>
        <p className="text-gray-700 text-lg font-bold">${price}</p>
      </div>
    </div>
  );
};

export default SingleFoods;
