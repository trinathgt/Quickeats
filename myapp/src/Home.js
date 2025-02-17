import React, { useState, useEffect } from "react";
import { useCart } from "./CartContext";
import foodData from "./foodData";
import "./Home.css";
import Slideimg from "./Slideimg.js";

const Home = () => {
  const { addToCart } = useCart();

  // State to track favourites
  const [favourites, setFavourites] = useState([]);

  // Load favourites from localStorage on component mount
  useEffect(() => {
    const storedFavourites = JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(storedFavourites);
  }, []);

  // Handle adding/removing favourites
  const handleFavourite = (food) => {
    setFavourites((prevFavourites) => {
      let updatedFavourites;
      if (prevFavourites.includes(food.id)) {
        updatedFavourites = prevFavourites.filter((id) => id !== food.id); // Remove from favourites
      } else {
        updatedFavourites = [...prevFavourites, food.id]; // Add to favourites
      }

      // Update localStorage
      localStorage.setItem("favourites", JSON.stringify(updatedFavourites));

      return updatedFavourites;
    });
  };

  // Check if an item is in favourites
  const isFavourite = (food) => favourites.includes(food.id);

  return (
    <div>
      <Slideimg />
      <div className="home-container">
        <h2 className="home-title">Available Food Items</h2>
        <div className="food-list">
          {foodData.map((food) => (
            <div key={food.id} className="food-card">
              <img src={food.image} alt={food.name} className="food-image" />
              <h3 className="food-name">{food.name}</h3>
              <p className="food-price">₹{food.price}</p>
              <p className="food-description">{food.description}</p>
              
              {/* Add to Cart button */}
              <button className="add-to-cart-btn" onClick={() => addToCart(food)}>
                Add to Cart
              </button>

              {/* Heart symbol for Favourites */}
              <button 
                className={`favourite-btn ${isFavourite(food) ? "favourite" : ""}`} 
                onClick={() => handleFavourite(food)}
              >
                {isFavourite(food) ? "❤️" : "🤍"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
