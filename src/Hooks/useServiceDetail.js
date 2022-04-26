import { useEffect, useState } from "react";

const useServiceDetail = (serviceId) => {
  const [serviceDetail, setServiceDetail] = useState([]);

  useEffect(() => {
    fetch(`https://stark-sands-89628.herokuapp.com/service/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setServiceDetail(data));
  }, []);

  return [serviceDetail, setServiceDetail];
};

export default useServiceDetail;
