import React from "react";
import { useForm } from "react-hook-form";
import PageHeadImg from "../../Components/Page-head-img/PageHeadImg";

const AddService = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const url = "https://stark-sands-89628.herokuapp.com/service";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <>
      <PageHeadImg text="Add service" />
      <div className="container">
        <h2 className="text-center">Add service</h2>
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
          <input type="submit" className="hook-submit" value="Add Service" />
        </form>
      </div>
    </>
  );
};

export default AddService;
