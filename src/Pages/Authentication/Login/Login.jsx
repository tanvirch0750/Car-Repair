import React, { useEffect, useState } from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../../../Components/FormInput/FormInput";
import PageHeadImg from "../../../Components/Page-head-img/PageHeadImg";
import auth from "../../../Firebase/Firebase.init";
import Social from "../Social/Social";
import "./Login.css";

const Login = () => {
  const [customError, setCustomError] = useState("");
  const [user1] = useAuthState(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
  ];

  useEffect(() => {
    if (error) {
      if (error.message.includes("auth/wrong-password")) {
        setCustomError("Your password is wrong");
      } else if (error.message.includes("auth/user-not-found")) {
        setCustomError("Account not found with this email");
      } else {
        setCustomError(error.message);
      }
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(values.email, values.password);
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      if (user1?.emailVerified === true) {
        navigate("/appointment");
      } else {
        navigate("/verifyEmail");
      }
    }
  }, [user, navigate, user1]);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <PageHeadImg text="Please login to experice all features" />
      <div className="login">
        <form onSubmit={handleSubmit} className="form login-form">
          <h1>Login</h1>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          {customError && <p className="error-message">{customError}</p>}
          <button>Login</button>
          <p className="login-signup-text">
            Don't have an account?{" "}
            <Link to="/signup" className="login-signup-link">
              Sign Up
            </Link>
          </p>
        </form>
        <Social text="Login" />
      </div>
    </>
  );
};

export default Login;
