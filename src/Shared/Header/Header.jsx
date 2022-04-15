import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
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
          <Link className="nav-link" to="/services">
            Services
          </Link>
          <Link className="nav-link" to="/products">
            Products
          </Link>
          {/* <Link className="nav-link" to="/login">
            Login
          </Link>
          <Link className="nav-link" to="/signup">
            Signup
          </Link> */}
          {user ? (
            <Link to="/login" className="nav-link" onClick={handleSignOut}>
              Sign Out
            </Link>
          ) : (
            <Link className="nav-link" to="/login">
              Log in
            </Link>
          )}
          {/* {!user && (
            <Link className="nav-link" to="/signup">
              Sign up
            </Link>
          )} */}
          <button onClick={() => navigate("/appointment")} className="btn">
            Get Appointment
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
