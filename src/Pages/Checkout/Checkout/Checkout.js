import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import useServiceDetail from "../../../Hooks/useServiceDetail";

const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);
  const [user] = useAuthState(auth);
  if (user) {
    console.log(user);
  }
  // const [user, setUser] = useState({
  //   name: "Akbar Ali",
  //   email: "akbar@gmail.com",
  //   address: "mirpur dhaka",
  //   phone: "0171111111",
  // });
  // const handleAddress = (event) => {
  //   const { address, ...rest } = user;
  //   const newAddress = event.target.value;
  //   const newUser = { newAddress, ...rest };
  //   setUser(newUser);
  // };
  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const order = {
      email: user.email,
      service: service.name,
      serviceId: serviceId,
      address: event.target.address.value,
      phone: event.target.phone.value,
    };
    axios.post("http://localhost:5000/order", order).then((response) => {
      const { data } = response;
      if (data.insertedId) {
        toast("Your Order is booked!");
        event.target.reset();
      }
    });
  };
  return (
    <div className="w-50 mx-auto">
      <h2 className="text-center">Please Order: {service.name}</h2>
      <form onSubmit={handlePlaceOrder}>
        <input
          className="w-100 mb-2"
          type="text"
          value={user?.displayName}
          name="name"
          id=""
          placeholder="Name"
          required
          readOnly
          disabled
        />
        <br />
        <input
          className="w-100 mb-2"
          type="email"
          name="email"
          value={user.email}
          id=""
          placeholder="Email"
          required
          readOnly
          disabled
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="service"
          id=""
          value={service.name}
          placeholder="Service"
          readOnly
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="address"
          id=""
          placeholder="Address"
          required
          autoComplete="off"
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="phone"
          id=""
          placeholder="Phone"
          required
        />
        <br />
        <input className="btn btn-primary" type="submit" value="Place Order" />
      </form>
    </div>
  );
};

export default Checkout;
