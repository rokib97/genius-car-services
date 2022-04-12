import React from "react";
import img from "../../../images/sleeping.jpg";
const NotFound = () => {
  return (
    <div>
      <h2 className="text-primary text-center">Mechanic is Sleeping</h2>
      <img className="w-100" src={img} alt="" />
    </div>
  );
};

export default NotFound;
