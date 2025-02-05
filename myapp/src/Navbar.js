import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import hamburger and close icons
import { Link } from "react-router-dom";
import { useCart } from "./CartContext"; // Ensure your context is working
import "./Navbar.css"; // Import CSS for styling

const Navbar = () => {
  const { cart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          QuickEats
        </Link>

        {/* Hamburger Icon for Mobile */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links */}
        <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-links" onClick={() => setMenuOpen(false)}>
              Cart ({cart.length})
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/orders" className="nav-links" onClick={() => setMenuOpen(false)}>
              My Orders
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-links" onClick={() => setMenuOpen(false)}>
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-links" onClick={() => setMenuOpen(false)}>
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
