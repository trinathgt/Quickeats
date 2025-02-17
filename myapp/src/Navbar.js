import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthContext"; // Import AuthContext
import foodData from "./foodData.js"; // Ensure correct path
import "./Navbar.css";

const Navbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [favoriteCount, setFavoriteCount] = useState(0); // Track favorite count

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchQuery(term);
    setFilteredItems(
      term ? foodData.filter((food) => food.name.toLowerCase().includes(term)) : []
    );
  };

  return (
    <nav className="navbar">
      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search food items..."
          value={searchQuery}
          onChange={handleSearch}
        />
        {searchQuery && (
          <div className="search-results">
            {filteredItems.length > 0 ? (
              <ul>
                {filteredItems.map((item) => (
                  <li key={item.id}>
                    <img src={item.image} alt={item.name} width="30" height="30" />
                    {item.name} - ₹{item.price}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No items found</p>
            )}
          </div>
        )}
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        {isAuthenticated ? (
          <>
            <Link to="/cart">Cart</Link>
            <Link to="/myorders">My Orders</Link>
            <Link to="/favorites">Favorites ({favoriteCount})</Link> {/* Favorite Count */}
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
