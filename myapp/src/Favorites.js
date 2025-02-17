import React, { useState, useEffect } from "react";
import foodData from "./foodData";

const Favorites = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const storedFavourites = JSON.parse(localStorage.getItem("favourites")) || [];
    const favoriteItems = foodData.filter((item) => storedFavourites.includes(item.id));
    setFavourites(favoriteItems);
  }, []);

  const removeFavorite = (id) => {
    const updatedFavorites = favourites.filter((item) => item.id !== id);
    setFavourites(updatedFavorites);
    localStorage.setItem("favourites", JSON.stringify(updatedFavorites.map((item) => item.id)));
  };

  return (
    <div className="favorites-container">
      <h2>My Favorite Foods</h2>
      {favourites.length > 0 ? (
        <ul>
          {favourites.map((item) => (
            <li key={item.id} className="favorite-item">
              <img src={item.image} alt={item.name} className="favorite-image" />
              <span>{item.name} - ₹{item.price}</span>
              <button onClick={() => removeFavorite(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorites added yet.</p>
      )}
    </div>
  );
};

export default Favorites;
