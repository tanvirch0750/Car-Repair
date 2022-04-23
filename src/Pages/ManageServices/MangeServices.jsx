import React from "react";
import PageHeadImg from "../../Components/Page-head-img/PageHeadImg";
import useServices from "../../Hooks/useServices";
import "./MangeServices.css";

const MangeServices = () => {
  const [services, setServices] = useServices();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/service/${id}`;

      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remainning = services.filter((service) => service._id !== id);
          setServices(remainning);
        });
    }
  };

  return (
    <>
      <PageHeadImg text="Manage Services" />
      <div className="container">
        <h2>Manage services</h2>
        <div className="manage-services-container">
          <div className="manaege-service">
            <h3>Name</h3>
            <h3>Price</h3>
            <h3>Delete</h3>
          </div>
          {services.map((service) => {
            return (
              <div className="manaege-service" key={service._id}>
                <h3>{service.name}</h3>
                <p>{service.price}</p>
                <button onClick={() => handleDelete(service._id)}>
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MangeServices;
