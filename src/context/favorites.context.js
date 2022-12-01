import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavoritesContext = createContext();

const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const saveFavorites = async (value = []) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@favorites", jsonValue);
    } catch (e) {
      console.log("🚀 ~ file: favorites.context.js:14 ~ saveFavorites ~ e", e);
    }
  };

  const loadFavorites = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@favorites");
      setFavorites(jsonValue !== null ? JSON.parse(jsonValue) : []);
    } catch (e) {
      console.log("🚀 ~ file: favorites.context.js:24 ~ loadFavorites ~ e", e);
    }
  };

  const addToFavorites = (restaurant) => {
    setFavorites([...favorites, restaurant]);
  };

  const removeFavorites = (restaurant) => {
    const leftFavorites = favorites.filter(
      (favorite) => favorite.placeId !== restaurant.placeId
    );
    setFavorites(leftFavorites);
  };

  useEffect(() => {
    loadFavorites();
  }, []);
  useEffect(() => {
    saveFavorites(favorites);
  }, [favorites]);

  return (
    <FavoritesContext.Provider
      value={{ favorites, add: addToFavorites, remove: removeFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
