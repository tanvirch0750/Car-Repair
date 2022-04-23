import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import PageHeadImg from "../../Components/Page-head-img/PageHeadImg";

const UpdateService = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [service, setService] = useState([]);
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/service/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  console.log(service);

  const onSubmit = (data) => {
    const url = `http://localhost:5000/service/${id}`;

    // send data to the server
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("user updated successfully");
        navigate("/manage-services");
      });
  };

  return (
    <>
      <PageHeadImg text="Update service" />
      <div className="container">
        <h2 className="text-center">Update service: {service.name}</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="hook-form">
          <input
            placeholder="Service Name"
            {...register("name", { required: true })}
          />
          {errors.exampleRequired && <span>This field is required</span>}
          <textarea
            placeholder="Service Description"
            {...register("description", { required: true })}
          />
          {errors.exampleRequired && <span>This field is required</span>}
          <input
            placeholder="Service Price"
            type="number"
            {...register("price", { required: true })}
          />
          {errors.exampleRequired && <span>This field is required</span>}
          <input
            placeholder="Service Photo URL"
            {...register("img", { required: true })}
          />
          {errors.exampleRequired && <span>This field is required</span>}
          <input type="submit" className="hook-submit" value="Update Service" />
        </form>
      </div>
    </>
  );
};

export default UpdateService;
