import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    alert("Logged out successfully!");
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      {isAuthenticated && <Link to="/cart">Cart</Link>}
      {isAuthenticated && <Link to="/myorders">My Orders</Link>}
      {!isAuthenticated ? (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      ) : (
        <button className="logout-btn" onClick={handleLogout}>Logout</button>

      )}
    </nav>
  );
};

export default Navbar;
