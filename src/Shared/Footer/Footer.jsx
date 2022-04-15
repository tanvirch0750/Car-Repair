import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>&copy; {year} Car Repair. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
