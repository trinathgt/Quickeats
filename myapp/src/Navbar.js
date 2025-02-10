import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem("token");
  const [searchQuery, setSearchQuery] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logged out successfully!");
    navigate("/login");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement your search logic here (e.g., navigate to a search results page)
      navigate(`/search?q=${searchQuery}`);
    }
  };

  return (
    <nav className="navbar">
      {/* Search Bar on the Left */}
      <form onSubmit={handleSearch} className="search-form">
        <input 
          type="text" 
          placeholder="Search..." 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
        />
        <button type="submit">Search</button>
      </form>

      {/* Links on the Right */}
      <div className="nav-links">
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
      </div>
    </nav>
  );
};

export default Navbar;

