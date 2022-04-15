import React from "react";
import { Link } from "react-router-dom";
import chefOne from "../../images/adult-blur-blurred-background-687824.png";
import chefTwo from "../../images/chef-cook-food-33614.png";
import chefThree from "../../images/architecture-building-city-2047397.png";
import iconOne from "../../images/icons/Group 204.png";
import iconTwo from "../../images/icons/Group 245.png";
import iconThree from "../../images/icons/Group 1133.png";

const ChefDetails = () => {
  return (
    <div className="mt-10 w-4/5 m-auto">
      <h2 className="text-4xl mb-4">Why you chose us</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut blanditiis
        illo pariatur <br /> reiciendis ratione voluptas molestias natus ducimus
        libero temporibus!
      </p>

      <div className="chef-cards grid grid-cols-3 gap-5 mt-8">
        <div className="chef-card rounded shadow-xl p-2">
          <img src={chefOne} alt="" />
          <div className="chef-info flex items-center gap-3">
            <img src={iconOne} alt="" />
            <div className="chef-details mt-4">
              <h2 className="text-2xl">Fast Delivery</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                asperiores?
              </p>
              <Link to="/login">see more</Link>
            </div>
          </div>
        </div>

        <div className="chef-card rounded shadow-xl p-2">
          <img src={chefTwo} alt="" />
          <div className="chef-info  flex items-center gap-3">
            <img src={iconTwo} alt="" />
            <div className="chef-details mt-4">
              <h2 className="text-2xl">A Good Auto Responder</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                asperiores?
              </p>
              <Link to="/login">see more</Link>
            </div>
          </div>
        </div>

        <div className="chef-card rounded shadow-xl p-2">
          <img src={chefThree} alt="" />
          <div className="chef-info  flex items-center gap-3">
            <img src={iconThree} alt="" />
            <div className="chef-details mt-4">
              <h2 className="text-2xl">Home Delivery</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                asperiores?
              </p>
              <Link to="/login">see more</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
