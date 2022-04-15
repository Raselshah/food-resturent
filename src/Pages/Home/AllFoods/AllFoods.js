import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleFoods from "../../SingleFoods/SingleFoods";
import "./AllFoods.css";

const AllFoods = () => {
  const [foods, setFoods] = useState([]);
  const { breakfast } = useParams();

  const singleFoods = foods.filter((food) => food.category === breakfast);

  useEffect(() => {
    fetch("foods.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return (
    <div className="h-screen">
      {singleFoods.map((singleFoods) => (
        <SingleFoods
          key={singleFoods.id}
          singleFoods={singleFoods}
        ></SingleFoods>
      ))}
    </div>
  );
};

export default AllFoods;
