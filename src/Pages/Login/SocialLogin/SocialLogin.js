import React, { useEffect } from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import facebook from "../../../images/social/facebook.png";
import google from "../../../images/social/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png";
import github from "../../../images/social/Octocat.png";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  let errorElement;
  useEffect(() => {
    if (user || user1) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, user1, from]);
  if (loading || loading1) {
    return <Loading></Loading>;
  }
  if (error || error1) {
    errorElement = (
      <p className="text-danger text-center">
        Error: {error?.message} {error1?.message}
      </p>
    );
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "2px" }} className="w-50 bg-primary"></div>
        <p className="mt-2 px-4 fw-bold ">OR</p>
        <div style={{ height: "2px" }} className="w-50 bg-primary"></div>{" "}
      </div>
      {errorElement}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info w-50 d-block mx-auto my-3"
        >
          <img style={{ width: "30px" }} src={google} alt="" />
          <span className="px-2">Google Sign In</span>
        </button>
        <button className="btn btn-info w-50 d-block mx-auto my-3">
          <img style={{ width: "30px" }} src={facebook} alt="" />
          <span className="px-2">Facebook Sign In</span>
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-info w-50 d-block mx-auto my-3"
        >
          <img style={{ width: "30px" }} src={github} alt="" />
          <span className="px-2">Github Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
