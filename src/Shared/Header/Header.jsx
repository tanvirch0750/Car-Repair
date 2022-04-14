import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link className="logo-link" to="/">
          Car Repair
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
      </nav>
    </header>
  );
};

export default Header;
