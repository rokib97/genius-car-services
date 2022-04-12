import React from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h2>Welcome To Details: {serviceId}</h2>
      <div className="text-center">
        <Link to="/checkout">
          <button className="btn btn-primary">Procceed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetails;
