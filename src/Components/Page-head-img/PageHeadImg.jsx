import React from "react";
import "./PageHeadImg.css";

const PageHeadImg = ({ text }) => {
  return (
    <div className="page-head-img">
      <div>
        <span>// Welcome to Car Repair</span>
        <h2>{text}</h2>
      </div>
    </div>
  );
};

export default PageHeadImg;
