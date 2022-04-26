import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useServiceDetail from "../../Hooks/useServiceDetail";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [serviceDetail] = useServiceDetail(serviceId);

  const navigate = useNavigate();

  return (
    <div>
      <h2>You are about to book: {serviceDetail?.name}</h2>
      <div className="text-center">
        <Link to={`/checkout/${serviceDetail?._id}`}>
          <button className="btn btn-primary">Proceed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
