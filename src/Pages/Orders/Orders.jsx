import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Order from "../../Components/Order/Order";
import PageHeadImg from "../../Components/Page-head-img/PageHeadImg";
import auth from "../../Firebase/Firebase.init";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const getOrders = async () => {
      const email = user.email;
      const url = `https://stark-sands-89628.herokuapp.com/order?email=${email}`;
      const { data } = await axios.get(url);

      setOrders(data);
    };
    getOrders();
  }, [user]);

  console.log(orders);

  return (
    <>
      <PageHeadImg text="Your Orders" />
      <div className="orders container">
        <h1>orders</h1>
        {orders.map((order) => (
          <Order key={order._id} order={order} />
        ))}
      </div>
    </>
  );
};

export default Orders;
