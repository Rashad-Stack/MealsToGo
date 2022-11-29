import React, { useState, createContext, useEffect } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();
export const LocationContextProvider = ({ children }) => {
  const [keyWord, setKeyWord] = useState("");
  const [location, SetLocation] = useState([]);
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

    locationRequest(keyWord.toLowerCase().trim())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        SetLocation(result);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [keyWord]);

  useEffect(() => {
    onSearch();
  }, []);

  return (
    <LocationContext.Provider
      value={{
        location,
        keyWord,
        onSearch,
        isLoading,
        error,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
