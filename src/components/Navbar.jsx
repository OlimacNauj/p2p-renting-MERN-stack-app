import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ isLoggedIn, onLogout }) => {
  return (
    <nav>
      <span>
        <Link to="/">
          <img src="/pictures/logo1.jpeg" height={40} alt="Logo" />
        </Link>

        <Link to="/categories">Categories</Link>
        <Link to="/about">About Us</Link>
        {isLoggedIn ? (
          <button onClick={onLogout}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </span>
    </nav>
  );
};

export default NavBar;
