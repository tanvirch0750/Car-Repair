import React from "react";
import "./Social.css";

const Social = ({ text }) => {
  return (
    <div>
      <div className="or-separator">
        <div></div>
        <p>or</p>
        <div></div>
      </div>
      <button className="social-btn">{text} with google</button>
    </div>
  );
};

export default Social;
