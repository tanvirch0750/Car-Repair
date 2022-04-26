import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import FormInput from "../../Components/FormInput/FormInput";
import PageHeadImg from "../../Components/Page-head-img/PageHeadImg";
import useServiceDetail from "../../Hooks/useServiceDetail";
import "./Checkout.css";

const Checkout = () => {
  const { id } = useParams();
  const [serviceDetail] = useServiceDetail(id);
  const [values, setValues] = useState({
    name: "",
    email: "",
    address: "",
    phoneNumber: "",
  });

  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Your Name",
      errorMessage: "Please give your name",

      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",

      pattern: `^[^\@]+@[^\s@]+\.[^\@]+$`,
      required: true,
    },
    {
      id: 3,
      name: "address",
      type: "text",
      placeholder: "Your Address",
      errorMessage: "Please give your Address",

      required: true,
    },
    {
      id: 4,
      name: "phoneNumber",
      type: "text",
      placeholder: "Your Phone Number",
      errorMessage: "Please give your phone number",

      required: true,
    },
  ];

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <>
      <PageHeadImg text={`Checkout: ${serviceDetail?.name}`} />
      <div className="checkout container">
        <h1>Checout: {serviceDetail?.name}</h1>
        <h1>Price: ${serviceDetail?.price}</h1>
        <form onSubmit={handleSubmit} className="form signup-form">
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}

          <button>Checkout</button>
        </form>
      </div>
    </>
  );
};

export default Checkout;
