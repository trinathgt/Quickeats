import React from "react";
import { useCart } from "./CartContext";
import foodData from "./foodData";
import "./Home.css";

const Home = () => {
  const { addToCart } = useCart();

  return (
    <div className="home-container">
      <h2 className="home-title">Available Food Items</h2>
      <div className="food-list">
        {foodData.map((food) => (
          <div key={food.id} className="food-card">
            <img src={food.image} alt={food.name} className="food-image" />
            <h3 className="food-name">{food.name}</h3>
            <p className="food-price">₹{food.price}</p>
            <p className="food-description">{food.description}</p>
            <button className="add-to-cart-btn" onClick={() => addToCart(food)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
