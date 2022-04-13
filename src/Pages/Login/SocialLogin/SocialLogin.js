import React from "react";
import facebook from "../../../images/social/facebook.png";
import google from "../../../images/social/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png";
import github from "../../../images/social/Octocat.png";

const SocialLogin = () => {
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "2px" }} className="w-50 bg-primary"></div>
        <p className="mt-2 px-4 fw-bold ">OR</p>
        <div style={{ height: "2px" }} className="w-50 bg-primary"></div>{" "}
      </div>
      <div>
        <button className="btn btn-info w-50 d-block mx-auto my-3">
          <img style={{ width: "30px" }} src={google} alt="" />
          <span className="px-2">Google Sign In</span>
        </button>
        <button className="btn btn-info w-50 d-block mx-auto my-3">
          <img style={{ width: "30px" }} src={facebook} alt="" />
          <span className="px-2">Facebook Sign In</span>
        </button>
        <button className="btn btn-info w-50 d-block mx-auto my-3">
          <img style={{ width: "30px" }} src={github} alt="" />
          <span className="px-2">Github Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
