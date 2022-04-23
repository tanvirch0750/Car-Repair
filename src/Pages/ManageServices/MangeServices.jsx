import React from "react";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();
  const handleUpdate = (id) => {
    navigate(`/update-service/${id}`);
  };

  return (
    <>
      <PageHeadImg text="Manage Services" />
      <div className="container">
        <h2 className="text-center">Manage services</h2>
        <table className="manaege-service">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th width="350px">Action</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => {
              return (
                <tr key={service._id}>
                  <td>{service.name}</td>
                  <td>{service.price}</td>
                  <td className="buttons">
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(service._id)}
                    >
                      Delete
                    </button>
                    <button
                      className="update-btn"
                      onClick={() => handleUpdate(service._id)}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MangeServices;
