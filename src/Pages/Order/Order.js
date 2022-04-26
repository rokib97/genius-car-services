import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import axiosPrivate from "../../api/axiosPrivate";
import auth from "../../firebase.init";

const Order = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    const getOrders = async () => {
      const email = user.email;
      const url = `http://localhost:5000/order?email=${email}`;
      try {
        const { data } = await axiosPrivate.get(url);
        setOrders(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 403 || error.response.status === 401) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getOrders();
  }, [user, navigate]);
  return (
    <div>
      <h2>Your Orders: {orders.length}</h2>
    </div>
  );
};

export default Order;
