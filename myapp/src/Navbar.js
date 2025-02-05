import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="nav-container">
        <h1 className="logo">College Canteen</h1>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={menuOpen ? "bar open" : "bar"}></div>
          <div className={menuOpen ? "bar open" : "bar"}></div>
          <div className={menuOpen ? "bar open" : "bar"}></div>
        </div>

        {/* Navbar Links */}
        <ul className={menuOpen ? "nav-links open" : "nav-links"}>
          <li><a href="/">Home</a></li>
          <li><a href="/cart">Cart</a></li>
          <li><a href="/orders">My Orders</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
