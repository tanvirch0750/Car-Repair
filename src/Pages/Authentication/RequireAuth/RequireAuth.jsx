import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import PageHeadImg from "../../../Components/Page-head-img/PageHeadImg";
import auth from "../../../Firebase/Firebase.init";
import "./RequireAuth.css";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);

  if (loading) {
    return (
      <div className="verification-email">
        <div>
          <h2>Please wait a moment</h2>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (
    user.providerData[0]?.providerId === "password" &&
    user.emailVerified === false
  ) {
    return (
      <>
        <PageHeadImg text="verify your email" />
        <div className="verification-email">
          <div>
            <h2>Your email is not verified. Please verify your email first.</h2>
            <h4>Don't get email verification link?</h4>
            <button
              onClick={async () => {
                await sendEmailVerification();
                alert("Email sent");
              }}
              className="btn"
            >
              Send email verification link
            </button>
          </div>
        </div>
      </>
    );
  }

  return children;
};

export default RequireAuth;
