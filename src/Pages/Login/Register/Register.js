import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Register.css";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating] = useUpdateProfile(auth);
  if (loading || updating) {
    return <Loading></Loading>;
  }

  if (user) {
    // navigate("/home");
    console.log(user);
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // const agree = event.target.terms.checked;
    // if (agree) {
    //  createUserWithEmailAndPassword(email, password);
    // }

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log("Updated profile");
    navigate("/home");
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
        <input
          onClick={() => setAgree(!agree)}
          type="checkbox"
          name="terms"
          id="terms"
        />
        {/* <label className={agree ? "ps-2" : "ps-2 text-danger"} htmlFor="terms">
          Accept Genius Car Terms And Conditions
        </label> */}
        <label className={`ps-2 ${agree ? "" : "text-danger"}`} htmlFor="terms">
          Accept Genius Car Terms And Conditions
        </label>
        <input
          disabled={!agree}
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
