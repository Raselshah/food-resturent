import React from "react";

const DetailsFood = ({ detailsFood }) => {
  const { name, price, description, img } = detailsFood;
  return (
    <div className="w-max m-auto">
      <div className="card shadow-lg shadow-orange-500/50 rounded">
        <div className="card-photo">
          <img src={img} alt="" />
        </div>
        <div className="card-info mt-5">
          <h2 className="text-gray-700">{name.slice(0, 30)}</h2>
          <p className="text-gray-400">{description.slice(0, 25) + "...."}</p>
          <p className="text-gray-700 text-lg font-bold">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsFood;
