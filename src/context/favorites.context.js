import React, { createContext, useState } from "react";

export const FavoritesContext = createContext();

const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (restaurant) => {
    setFavorites([...favorites, restaurant]);
  };

  const removeFavorites = (restaurant) => {
    const leftFavorites = favorites.filter(
      (favorite) => favorite.placeId !== restaurant.placeId
    );
    setFavorites(leftFavorites);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, add: addToFavorites, remove: removeFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
