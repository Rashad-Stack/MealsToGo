import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthContext } from "./auth.context";

export const FavoritesContext = createContext();

const FavoritesContextProvider = ({ children }) => {
  const { users } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);

  const saveFavorites = async (value = [], uid) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favorites-${uid}`, jsonValue);
    } catch (e) {
      console.log("🚀 ~ file: favorites.context.js:14 ~ saveFavorites ~ e", e);
    }
  };

  const loadFavorites = async (uid) => {
    try {
      const jsonValue = await AsyncStorage.getItem(`@favorites-${uid}`);
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
    loadFavorites(users.uid);
  }, [users]);

  useEffect(() => {
    saveFavorites(favorites, users.uid);
  }, [favorites, users]);

  return (
    <FavoritesContext.Provider
      value={{ favorites, add: addToFavorites, remove: removeFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
