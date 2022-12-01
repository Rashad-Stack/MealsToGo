import React, { createContext, useState, useEffect } from "react";

import { locationRequest, locationTransform } from "./location.service";
import { restaurantRequest, restaurantTransformed } from "./restaurant.service";

export const RestaurantContext = createContext();

const RestaurantContextProvider = ({ children }) => {
  const [keyWord, setKeyWord] = useState("");
  const [location, SetLocation] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword = "San Francisco") => {
    setIsLoading(true);
    setKeyWord(searchKeyword);
  };

  useEffect(() => {
    if (!keyWord.length) {
      return;
    }
    setTimeout(() => {
      locationRequest(keyWord.toLowerCase().trim())
        .then(locationTransform)
        .then((result) => {
          SetLocation(result);
        })
        .catch((err) => setError(err));

      setIsLoading(false);
    }, 2000);
  }, [keyWord]);

  useEffect(() => {
    if (location) {
      setRestaurants([]);
      const latLng = `${location.lat},${location.lng}`;

      restaurantRequest(latLng)
        .then(restaurantTransformed)
        .then((result) => setRestaurants(result))
        .catch((err) => {
          console.log(
            "🚀 ~ file: restaurant.context.js:49 ~ useEffect ~ err",
            err
          );
          setError(err);
        });
      setIsLoading(false);
    }
  }, [location]);

  useEffect(() => {
    onSearch();
  }, []);

  return (
    <RestaurantContext.Provider
      value={{ location, restaurants, onSearch, keyWord, isLoading, error }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
export default RestaurantContextProvider;
