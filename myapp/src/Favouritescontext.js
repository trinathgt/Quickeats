import React, { createContext, useState, useContext } from "react";

export const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const toggleFavourite = (food) => {
    setFavourites((prevFavourites) =>
      prevFavourites.includes(food.id)
        ? prevFavourites.filter((id) => id !== food.id)
        : [...prevFavourites, food.id]
    );
  };

  return (
    <FavouritesContext.Provider value={{ favourites, toggleFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavourites = () => useContext(FavouritesContext);
