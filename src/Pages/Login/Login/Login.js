import axios from "axios";
import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../../firebase.init";
import PageTitle from "../../Shared/Header/PageTitle/PageTitle";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  let errorElement;
  /*   useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]); */

  if (loading || sending) {
    return <Loading></Loading>;
  }
  if (error) {
    errorElement = (
      <p className="text-danger text-center">Error: {error?.message}</p>
    );
  }

  const handleSumbit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post("http://localhost:5000/login", { email });
    console.log(data);
    localStorage.setItem("accessToken", data.accessToken);
    navigate(from, { replace: true });
  };
  const navigateRegister = (event) => {
    navigate("/register");
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("Please Enter Email");
    }
  };
  return (
    <div className="container w-50 mx-auto">
      <PageTitle title="Login"></PageTitle>
      <h2 className="text-primary text-center">Please Login</h2>
      <Form onSubmit={handleSumbit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            required
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            required
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="info w-50 mx-auto d-block mb-3" type="submit">
          Login
        </Button>
      </Form>
      {errorElement}
      <p className="text-center">
        New to GeniousCar?
        <Link
          to="/register"
          className="text-primary text-decoration-none"
          onClick={navigateRegister}
        >
          Please Register
        </Link>
      </p>
      <p className="text-center">
        Forget Password?
        <button
          to="/register"
          className="btn btn-link text-primary text-decoration-none"
          onClick={resetPassword}
        >
          Reset Password
        </button>
      </p>
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;
