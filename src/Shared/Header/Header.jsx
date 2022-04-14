import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <div className="header">
        <div className="logo">
          <Link className="logo-link" to="/">
            <h2>Car Repair</h2>
          </Link>
        </div>
        <nav className="navigation">
          <Link className="nav-link" to="/home">
            Home
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
          <Link className="nav-link" to="/products">
            Products
          </Link>
          <Link className="nav-link" to="/login">
            Login
          </Link>
          <Link className="nav-link" to="/signup">
            Signup
          </Link>
          <button onClick={() => navigate("/appointment")} className="btn">
            Get Appointment
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
