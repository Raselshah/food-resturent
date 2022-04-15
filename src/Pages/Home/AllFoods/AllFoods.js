import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleFoods from "../../SingleFoods/SingleFoods";
import DetailsFood from "../DetailsFood/DetailsFood";
import "./AllFoods.css";

const AllFoods = () => {
  const [foods, setFoods] = useState([]);
  const [detailsFood, setDetailsFood] = useState({});

  const { breakfast } = useParams();
  console.log(detailsFood);
  // const { name, price, description, img } = detailsFood;

  const foodsDetails = (id) => {
    const singleFoodsDetails = foods.find((food) => food.id === id);
    setDetailsFood(singleFoodsDetails);
  };

  const singleFoods = foods.filter((food) => food.category === breakfast);

  useEffect(() => {
    fetch("foods.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return (
    <>
      <div className="h-full grid grid-cols-3 gap-10 mt-12 justify-items-center">
        {singleFoods.map((singleFoods) => (
          <SingleFoods
            key={singleFoods.id}
            singleFoods={singleFoods}
            foodsDetails={foodsDetails}
          ></SingleFoods>
        ))}
      </div>
      <button className=" bg-amber-500 mt-8 mb-10 py-2 px-6 rounded text-white m-auto block">
        Checkout Your Food
      </button>

      {detailsFood.id && (
        <DetailsFood
          key={detailsFood.id}
          detailsFood={detailsFood}
        ></DetailsFood>
      )}
    </>
  );
};

export default AllFoods;
