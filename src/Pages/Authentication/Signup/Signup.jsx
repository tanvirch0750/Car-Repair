import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "../../../Components/FormInput/FormInput";
import Social from "../Social/Social";
import "./Signup.css";

const Signup = () => {
  const [values, setValues] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "displayName",
      type: "text",
      placeholder: "Your Name",
      errorMessage: "Please give your name",
      label: "Your Name",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      pattern: `^[^\s@]+@[^\s@]+\.[^\s@]+$`,
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }

    function validatePassword(password) {
      const re =
        /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
      return re.test(password);
    }

    if (
      values.displayName === "" ||
      values.email === "" ||
      validateEmail(values.email) === false ||
      validatePassword(values.password) === false ||
      values.password !== values.confirmPassword
    ) {
      console.log("There is a error");
    } else {
      console.log("submit");
    }
  };

  console.log(values);

  return (
    <div className="signup">
      <form onSubmit={handleSubmit} className="form">
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Register</button>
        <p className="login-signup-text">
          Already have an account?{" "}
          <Link to="/login" className="login-signup-link">
            Login
          </Link>
        </p>
        <Social text="Signup" />
      </form>
    </div>
  );
};

export default Signup;
