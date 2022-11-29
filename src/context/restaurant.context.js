import React, { useState, useEffect, createContext, useContext } from "react";
import { LocationContext } from "../mock/location.context";
import { restaurantRequest, restaurantTransformed } from "./restaurant.service";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const { location } = useContext(LocationContext);
  const [restaurant, setRestaurant] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const retrieveRestaurants = (locations) => {
    restaurantRequest(locations)
      .then(restaurantTransformed)
      .then((result) => {
        setError(null);
        setRestaurant(result);
      })
      .catch((err) => {
        setError(err);
      });
  };

  useEffect(() => {
    if (location) {
      setRestaurant([]);
      const latLng = `${location.lat},${location.lng}`;
      setTimeout(() => {
        retrieveRestaurants(latLng);
        setIsLoading(false);
      }, 2000);
    }
  }, [location]);

  return (
    <RestaurantContext.Provider value={{ restaurant, isLoading, error }}>
      {children}
    </RestaurantContext.Provider>
  );
};
