import React, { useState, useEffect, createContext } from "react";
import { restaurantRequest, restaurantTransformed } from "./restaurant.service";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => (
  <RestaurantContext.Provider
    value={{ restaurant: [1, 2, 3, 4, 5, 6, 7, 8, 9] }}
  >
    {children}
  </RestaurantContext.Provider>
);
