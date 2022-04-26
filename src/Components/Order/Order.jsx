import React from "react";

const Order = ({ order }) => {
  console.log(order);
  return (
    <div style={{ marginBottom: "30px" }}>
      <h1>{order.name}</h1>
      <h1>{order.email}</h1>
      <h1>{order.service}</h1>
      <h1>{order.phone}</h1>
      <h1>{order.address}</h1>
    </div>
  );
};

export default Order;
