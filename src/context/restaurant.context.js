import React, { useState, useEffect, createContext } from "react";
import { restaurantRequest, restaurantTransformed } from "./restaurant.service";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurant, setRestaurant] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const retrieveRestaurants = () => {
    setTimeout(() => {
      restaurantRequest()
        .then(restaurantTransformed)
        .then((result) => {
          setIsLoading(false);
          setRestaurant(result);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 500);
  };

  useEffect(() => {
    retrieveRestaurants();
  }, []);

  return (
    <RestaurantContext.Provider value={{ restaurant, isLoading, error }}>
      {children}
    </RestaurantContext.Provider>
  );
};
