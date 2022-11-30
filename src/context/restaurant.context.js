import React, { useState, useEffect, createContext, useContext } from "react";
import { LocationContext } from "../mock/location.context";
import { restaurantRequest, restaurantTransformed } from "./restaurant.service";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const { location } = useContext(LocationContext);
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const retrieveRestaurants = (locations) => {
    restaurantRequest(locations)
      .then(restaurantTransformed)
      .then((result) => {
        setError(null);
        setRestaurants(result);
      })
      .catch((err) => {
        setError(err);
      });
  };

  useEffect(() => {
    if (location) {
      setRestaurants([]);
      const latLng = `${location.lat},${location.lng}`;
      setTimeout(() => {
        retrieveRestaurants(latLng);
        setIsLoading(false);
      }, 2000);
    }
  }, [location]);

  return (
    <RestaurantContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantContext.Provider>
  );
};
