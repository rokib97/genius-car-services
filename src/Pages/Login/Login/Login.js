import React, { useEffect, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user] =
    useSignInWithEmailAndPassword(auth);

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);
  const handleSumbit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
    signInWithEmailAndPassword(email, password);
  };
  const navigateRegister = (event) => {
    navigate("/register");
  };
  return (
    <div className="container w-50 mx-auto">
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
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p>
        New to GeniousCar?
        <Link
          to="/register"
          className="text-danger text-decoration-none"
          onClick={navigateRegister}
        >
          Please Register
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
