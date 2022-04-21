import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const [service, setService] = useState({});
  const { serviceId } = useParams();

  useEffect(() => {
    const url = `http://localhost:5000/service/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [serviceId]);
  return (
    <div>
      <h2>You are about to book: {service.name}</h2>
      <div className="text-center">
        <Link to="/checkout">
          <button className="btn btn-primary">Procceed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetails;
