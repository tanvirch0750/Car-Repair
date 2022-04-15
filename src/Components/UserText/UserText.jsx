import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";
import "./UserText.css";

const UserText = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="user-text">
      {!user && <h2>Please login to see your email verified status</h2>}
      {user?.emailVerified === true && (
        <h2> Your email is verified. Your are good to go</h2>
      )}
      {user?.emailVerified === false && (
        <h2>
          {" "}
          A verification email is sent to your email. Please verify your email
          first.
        </h2>
      )}
    </div>
  );
};

export default UserText;
