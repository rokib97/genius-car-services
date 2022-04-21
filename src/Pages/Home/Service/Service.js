import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const navigate = useNavigate();
  const { _id, name, img, price, description } = service;
  const handleUseNavigate = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="service h-100 w-100">
      <img className="w-100" src={img} alt="" />
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <p>
        <small>{description}</small>
      </p>
      <button
        onClick={() => handleUseNavigate(_id)}
        className="btn btn-primary"
      >
        Book: {name}
      </button>
    </div>
  );
};

export default Service;
