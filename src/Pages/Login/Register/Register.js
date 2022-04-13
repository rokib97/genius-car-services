import React, { useEffect } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]);
  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(name, email, password);
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="register-form">
      <h2 className="text-primary" style={{ textAlign: "center" }}>
        Please Register
      </h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" id="" placeholder="Your Name" />
        <input
          type="email"
          name="email"
          id=""
          placeholder="Email Address"
          required
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Password"
          required
        />
        <input type="checkbox" name="terms" id="terms" />
        <label htmlFor="terms">Accept Genius Car Terms And Conditions</label>
        <input
          className="w-50 mx-auto btn btn-info mt-2"
          type="submit"
          value="Register"
        />
      </form>
      <p className="text-center">
        Already have an account?
        <Link
          to="/login"
          className="text-primary text-decoration-none"
          onClick={() => navigate("/login")}
        >
          Please Login
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
