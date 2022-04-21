import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [sendEmailVerification] = useSendEmailVerification(auth);
  const location = useLocation();
  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  // console.log(user);
  if (user.providerData[0]?.providerId === "password" && !user.emailVerified) {
    return (
      <div className="w-25 mx-auto mt-5 container">
        <h3 className="text-danger">Your Email is not Verified!</h3>
        <h5 className="text-success">Please Verify Your Email</h5>
        <button
          className="btn btn-primary"
          onClick={async () => {
            await sendEmailVerification();
            toast("Sent email");
          }}
        >
          Verify email
        </button>
      </div>
    );
  }
  return children;
};

export default RequireAuth;
